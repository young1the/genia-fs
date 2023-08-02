package com.example.cheongchun28.domain.mypage.controller;

import com.example.cheongchun28.domain.mypage.dto.MyPageDto;
import com.example.cheongchun28.domain.mypage.service.MyPageService;
import com.example.cheongchun28.global.common.dto.CustomResponseDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.sql.SQLException;

@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/api/mypage")
public class MyPageController {
    private final MyPageService mypageService;

    @PutMapping
    public CustomResponseDto changeMyInfo(@RequestBody MyPageDto.ChangeMyInfoRequestDto requestDto, HttpServletRequest httpServletRequest) throws SQLException {
        return mypageService.changeMyInfo(requestDto, httpServletRequest);
    }

    @GetMapping
    public MyPageDto.getMyInfoResponseDto getMyInfo(HttpServletRequest httpServletRequest) throws SQLException {
        return mypageService.getMyInfo(httpServletRequest);
    }

    @PutMapping("/password")
    public CustomResponseDto changeMyPassword(@RequestBody MyPageDto.ChangeMyPasswordRequestDto requestDto, HttpServletRequest httpServletRequest) throws SQLException {
        return mypageService.changeMyPassword(requestDto, httpServletRequest);
    }

    @GetMapping("/reservation")
    public MyPageDto.getMyReservationResponseDto getMyReservation(HttpServletRequest httpServletRequest) {
        return mypageService.getMyReservation(httpServletRequest);
    }
}