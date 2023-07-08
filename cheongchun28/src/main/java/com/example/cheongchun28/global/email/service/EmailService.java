package com.example.cheongchun28.global.email.service;

import com.example.cheongchun28.global.email.dto.EmailDto;
import com.example.cheongchun28.global.email.entity.EmailEntity;
import com.example.cheongchun28.global.email.repository.EmailRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.Optional;
import java.util.Random;

@Service
@RequiredArgsConstructor
public class EmailService {

    private JavaMailSender emailSender;
    private EmailRepository emailRepository;

    /*
     * 1. 인증번호 생성하는 메서드
     * 2. 이메일 보내는 메서드
     * 3. 메일 html 형식
     * (이메일 보내는 메서드 > 메일 html 형식 > 인증번호 생성)
     *
     * 4. 이메일 인증번호 확인하는 메서드
     *
     * 5. 인증번호 자동 삭제  <- 서비스에서 하는게 맞나?
     * 6. 인증기간 만료 전 다시 보내면 update*/

    //인증번호 발급 Service
    public void createConfirmCode(EmailDto.CreateConfimCodeRequestDto requestDto) {

    }

    //인증번호 비교 Service
    public void emailConfirm(EmailDto.EmailConfirmRequestDto emailDto) {

    }

    //메일 전송
    private void sendEmail(String recipient) throws Exception {
        String confirmCode = createConfirmCode();
        MimeMessage message = createMessage(recipient);
        upsertConfirmCode(new EmailEntity());
    }

    //upsert = update + inset = 없으면 생성 있으면 없데이트
    //인증기간 만료 전 다시 보내면 update
    private void upsertConfirmCode(EmailEntity emailEntity) {
        EmailEntity lastConfirmCode = emailRepository.findByEmail(emailEntity.getEmail()).orElse(null);

        if (emailRepository.findByEmail(lastConfirmCode.getEmail()).isPresent()) {
            lastConfirmCode.setConfirmCode(createConfirmCode());
            emailRepository.save(lastConfirmCode);
        } else {
            emailRepository.save(emailEntity);
        }
    }

    //recipient: 받는 이 (이메일 받는 사람의 이메일)
    //메세지 생성

    private MimeMessage createMessage(String recipient) throws Exception {
        MimeMessage message = emailSender.createMimeMessage();
        String confirmCode = createConfirmCode();

        message.addRecipients(MimeMessage.RecipientType.TO, recipient);
        message.setSubject("천재교육 이메일 인증");

        StringBuilder msg = new StringBuilder();
        msg.append("<div style='margin:20px;'>");
        msg.append("<h1> 천재교육 </h1>");
        msg.append("<br>");
        msg.append("<p>아래 코드를 복사해 입력해주세요<p>");
        msg.append("<br>");
        msg.append("<p>감사합니다.<p>");
        msg.append("<br>");
        msg.append("<div align='center' style='border:1px solid black; font-family:verdana';>");
        msg.append("<h3 style='color:blue;'>회원가입 인증 코드입니다.</h3>");
        msg.append("<div style='font-size:130%'>");
        msg.append("CODE : <strong>");
        msg.append(confirmCode + "</strong><div><br/> ");
        msg.append("</div>");

        message.setText(msg.toString(), "utf-8", "html");
        message.setFrom(new InternetAddress("rbals040329@gmail.com", "천재교육"));

        return message;
    }

    // 인증번호 생성
    private String createConfirmCode() {
        StringBuilder confirmCode = new StringBuilder();
        Random random = new Random();

        for (int i = 0; i < 6; i++) {
            confirmCode.append(random.nextInt(10));
        }

        return confirmCode.toString();
    }
}
