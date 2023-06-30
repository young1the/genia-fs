package com.example.cheongchun28.domain.user.controller;

import com.example.cheongchun28.domain.user.dto.UserDto;
import com.example.cheongchun28.domain.user.entity.User;
import com.example.cheongchun28.domain.user.repository.UserRepository;
import com.example.cheongchun28.domain.user.service.UserService;
import com.example.cheongchun28.global.jwt.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Slf4j
@RestController
@RequiredArgsConstructor
public class UserController {

    private final JwtTokenProvider jwtTokenProvider;
    private final UserService userService;
    private final UserRepository userRepository;

    @PostMapping("/test")
    public String test() {
        return "<h1>test ok </h1>";
    }

    @PostMapping("/api/user/sign-in")
    public String signup(@RequestBody UserDto.SignupRequestDto requestDto) {
        log.info("회원가입 시도됨");
        userService.signup(requestDto);
        return "성공!";
    }

    @PostMapping("/api/user/login")
    public String login(@RequestBody UserDto.loginRequestDto requestDto, HttpServletResponse httpServletResponse) {
        log.info("로그인 시도됨");
        userService.login(requestDto, httpServletResponse);
        return "성공!";
    }

}
