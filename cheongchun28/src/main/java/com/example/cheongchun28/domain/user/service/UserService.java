package com.example.cheongchun28.domain.user.service;

import com.example.cheongchun28.domain.user.dto.UserDto;
import com.example.cheongchun28.domain.user.entity.User;
import com.example.cheongchun28.domain.user.repository.UserRepository;
import com.example.cheongchun28.global.jwt.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletResponse;

@RequiredArgsConstructor
@Service
public class UserService {

    private final UserRepository userRepository;
    private final JwtTokenProvider jwtTokenProvider;
    private final AuthenticationManagerBuilder authenticationManagerBuilder;

    public void signup(UserDto.SignupRequestDto requestDto) {
        userRepository.save(requestDto.toEntity());
    }

    public void login(UserDto.loginRequestDto requestDto, HttpServletResponse httpServletResponse) {
        User user = userRepository.findByUserEmail(requestDto.getEmail()).orElseThrow(null);

        UsernamePasswordAuthenticationToken beforeAuthentication = new UsernamePasswordAuthenticationToken(requestDto.getEmail(), requestDto.getPassword());
        Authentication afterAuthentication = authenticationManagerBuilder.getObject().authenticate(beforeAuthentication);

        String token = jwtTokenProvider.createToken(afterAuthentication);
        httpServletResponse.addHeader(jwtTokenProvider.AUTHORIZATION_HEADER, token);
    }
}