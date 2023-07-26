package com.example.cheongchun28.domain.mypage.service;

import com.example.cheongchun28.domain.mypage.dto.MypageDto;
import com.example.cheongchun28.domain.user.entity.User;
import com.example.cheongchun28.domain.user.repository.UserRepository;
import com.example.cheongchun28.global.common.dto.CustomResponseDto;
import com.example.cheongchun28.global.jwt.JwtUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.sql.SQLException;

@Service
@RequiredArgsConstructor
@Slf4j
public class MypageService {

    private final UserRepository userRepository;
    private final JwtUtil jwtUtil;

    public CustomResponseDto changeMyInfo(MypageDto.ChangeMyInfoRequestDto requestDto, HttpServletRequest httpServletRequest) throws SQLException{
        String email = jwtUtil.getEmailAtToken(jwtUtil.getToken(httpServletRequest));
        User user = userRepository.findByUserEmail(email).orElseThrow(
                () -> new SQLException("찾으시는 데이터가 업습니다.")
        );

        user.setUserName(requestDto.getUserName());
        user.setProfileImage(requestDto.getProfileImage());
        user.setNotificationAgreement(requestDto.isNotificationAgreement());

        userRepository.save(user);

        return new CustomResponseDto(200);
    }

    public CustomResponseDto getMyInfo(HttpServletRequest httpServletRequest) {
        return null;
    }

    public CustomResponseDto changeMyPassword(MypageDto.ChangeMyPasswordRequestDto requestDto, HttpServletRequest httpServletRequest) {
        return null;
    }

    public CustomResponseDto getMyReservation(HttpServletRequest httpServletRequest) {
        return null;
    }
}
