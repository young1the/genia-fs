package com.example.cheongchun28.global.email.service;

import com.example.cheongchun28.domain.user.entity.User;
import com.example.cheongchun28.domain.user.repository.UserRepository;
import com.example.cheongchun28.global.common.dto.CustomResponseDto;
import com.example.cheongchun28.global.email.dto.EmailDto;
import com.example.cheongchun28.global.email.entity.EmailEntity;
import com.example.cheongchun28.global.email.repository.EmailRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import net.bytebuddy.utility.RandomString;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.io.UnsupportedEncodingException;
import java.time.LocalDateTime;
import java.util.Random;

@Service
@RequiredArgsConstructor
@Slf4j
public class EmailService {

    private final JavaMailSender emailSender;
    private final EmailRepository emailRepository;
    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private static final int CONFIRM_CODE_lENGTH = 6;
    private static final String CONFIRM_EMAIL_SUBJECT = "천재교육 이메일 인증";
    private static final String CONFIRM_EMAIL_CONTENT_TEMPLATE = "<div style='margin:20px;'>\n" +
            "<h1> 천재교육 </h1>\n" +
            "<br/><br/>" +
            "<p>아래 코드를 복사해 입력해주세요<p>" +
            "<br/><br/>" +
            "<p>감사합니다.<p>" +
            "<br/><br/>" +
            "<div align='center' style='border:1px solid black; font-family:verdana';>" +
            "<h3 style='color:blue;'>회원가입 인증 코드입니다.</h3>" +
            "<div style='font-size:130%%'>" +
            "<strong>%s</strong>" +
            "</div><br/><br/>" +
            "</div>" +
            "</div>";

    private static final String RESET_PASSWORD_EMAIL_SUBJECT = "천재교육 비밀번호 초기화";
    private static final String RESET_PASSWORD_CONTENT_TEMPLATE =
            "<div style='margin:20px;'>" +
                    "<h1> 천재교육 </h1>" +
                    "<br/><br/>" +
                    "<p>비밀번호가 초기화 되었습니다.<p>" +
                    "<br/><br/>" +
                    "<p>사용하시는 비밀번호로 변경하여 사용해주세요.<p>" +
                    "<br/><br/>" +
                    "<div align='center' style='border:1px solid black; font-family:verdana';>" +
                    "<h3 style='color:blue;'>비밀번호: </h3>" +
                    "<div style='font-size:130%%'>" +
                    "<strong>%s</strong>" +
                    "</div>" +
                    "<br/>" +
                    "</div>" +
                    "</div>";
    private static final int PASSWORD_LENGTH = 10;
    private static final String EMAIL_SENDER_NAME = "천재교육";

    private static final String EMAIL_SENDER = "rbals040329@gmail.com";


    //인증번호 비교 Service
    public ResponseEntity<CustomResponseDto> emailConfirm(EmailDto.EmailConfirmRequestDto emailDto) throws Exception {
        EmailEntity emailEntity = emailRepository.findByEmail(emailDto.getEmail()).orElseThrow(
                () -> new Exception(String.valueOf(HttpStatus.BAD_REQUEST.value()))
        );

        if (!emailEntity.getConfirmCode().equals(emailDto.getConfirmCode())) {  //인증번호 체크
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        } else if (LocalDateTime.now().isAfter(emailEntity.getModifiedAt().plusMinutes(1))) {   //시간 체크
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }

        return ResponseEntity.ok(new CustomResponseDto(200));
    }

    //메일 전송
    public void sendEmailConfirmMail(String recipient) {
        String confirmCode = createConfirmCode();
        upsertConfirmCode(new EmailEntity(recipient, confirmCode), confirmCode);
//        sendConfirmationEmail(recipient, confirmCode);
    }

    public void sendEmailResetPasswordMail(String recipient) throws Exception {
        User user = userRepository.findByUserEmail(recipient).orElseThrow(
                () -> new Exception(String.valueOf(HttpStatus.BAD_REQUEST.value()))
        );
        String password = createNewPassword();
        String encodedPassword = bCryptPasswordEncoder.encode(password);
        log.info(encodedPassword);
        user.setEncodedPassword(encodedPassword);
        userRepository.save(user);
//        sendResetPasswordEmail(recipient, password);
    }

    private String createNewPassword() {
        RandomString rs = new RandomString();
        String password = rs.make(PASSWORD_LENGTH);
        log.info(password);
        return password;
    }

    //upsert = update + inset = 없으면 생성 있으면 업데이트
    //인증기간 만료 전 다시 보내면 update
    private void upsertConfirmCode(EmailEntity emailEntity, String confirmCode) {
        EmailEntity lastConfirmCode = emailRepository.findByEmail(emailEntity.getEmail()).orElse(null);

        if (lastConfirmCode == null) {
            emailRepository.save(emailEntity);
        } else {
            lastConfirmCode.setConfirmCode(confirmCode);
            emailRepository.save(lastConfirmCode);
        }
    }

    //recipient: 받는 이 (이메일 받는 사람의 이메일)
    //인증 코드 발송 메세지 생성
    private MimeMessage sendConfirmationEmail(String recipient, String confirmCode) {
        MimeMessage message = emailSender.createMimeMessage();

        try {
            message.addRecipients(MimeMessage.RecipientType.TO, recipient);
            message.setSubject(CONFIRM_EMAIL_SUBJECT);

            String emailContent = String.format(CONFIRM_EMAIL_CONTENT_TEMPLATE, confirmCode);
            message.setText(emailContent, "utf-8", "html");
            message.setFrom(new InternetAddress(EMAIL_SENDER, EMAIL_SENDER_NAME));

            emailSender.send(message);
        } catch (MessagingException | UnsupportedEncodingException e) {
            throw new RuntimeException(e);
        }

        return message;
    }

    private MimeMessage sendResetPasswordEmail(String recipient, String password) {
        MimeMessage message = emailSender.createMimeMessage();

        try {
            message.addRecipients(MimeMessage.RecipientType.TO, recipient);
            message.setSubject(RESET_PASSWORD_EMAIL_SUBJECT);
            log.info("sendResetPasswordEmail: " + password);
            String emailContent = String.format(RESET_PASSWORD_CONTENT_TEMPLATE, password);
            message.setText(emailContent, "utf-8", "html");
            message.setFrom(new InternetAddress(EMAIL_SENDER, EMAIL_SENDER_NAME));

            emailSender.send(message);
        } catch (MessagingException | UnsupportedEncodingException e) {
            throw new RuntimeException(e);
        }

        return message;
    }

    // 인증번호 생성
    private String createConfirmCode() {
        StringBuilder confirmCode = new StringBuilder();
        Random random = new Random();

        for (int i = 0; i < CONFIRM_CODE_lENGTH; i++) {
            confirmCode.append(random.nextInt(10));
        }
        log.info(confirmCode.toString());
        return confirmCode.toString();
    }
}
