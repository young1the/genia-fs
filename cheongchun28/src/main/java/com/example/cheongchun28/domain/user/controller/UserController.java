package com.example.cheongchun28.domain.user.controller;

import com.example.cheongchun28.domain.user.dto.UserDto;
import com.example.cheongchun28.domain.user.service.UserService;
import com.example.cheongchun28.global.common.dto.CustomResponseDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.sql.SQLException;

@Slf4j
@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    //회원가입
    @PostMapping("/signup")
    public CustomResponseDto signup(@RequestBody UserDto.SignupRequestDto requestDto) {
        log.info("회원가입 시도됨");
        return userService.signup(requestDto);
    }

    //로그인
    @PostMapping("/login")
    public UserDto.loginResponseDto login(@RequestBody UserDto.loginRequestDto requestDto, HttpServletResponse httpServletResponse) throws SQLException {
        log.info("로그인 시도됨");
        return userService.login(requestDto, httpServletResponse);
    }

    //닉네임 중복 확인
    @PostMapping("/check-id/{nickName}")
    public ResponseEntity<CustomResponseDto> checkId(@PathVariable("nickName") String nickName) {
       if (userService.checkId(nickName)){
           return ResponseEntity.ok(new CustomResponseDto(200));
       }else {
           return ResponseEntity.badRequest().body(new CustomResponseDto(400));
       }

    }
}