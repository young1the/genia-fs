package com.example.cheongchun28.domain.mypage.controller;

import com.example.cheongchun28.domain.mypage.dto.MyPageDto;
import com.example.cheongchun28.domain.mypage.service.MyPageService;
import com.example.cheongchun28.domain.user.entity.User;
import com.example.cheongchun28.global.common.dto.CustomResponseDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.sql.SQLException;
import java.util.List;

@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/api/mypage")
public class MyPageController {
    private final MyPageService mypageService;

    @PutMapping
    public ResponseEntity<CustomResponseDto> changeMyInfo(@AuthenticationPrincipal User auth, @RequestBody MyPageDto.ChangeMyInfoRequestDto requestDto) throws SQLException {
        log.info("auth:{}, requestDto:{}", auth.getUsername(), requestDto);
        CustomResponseDto customResponseDto = mypageService.changeMyInfo(auth, requestDto);
        if (customResponseDto.getStatusCode() == 200){
            return ResponseEntity.ok(customResponseDto);
        }else {
            return ResponseEntity.badRequest().body(customResponseDto);
        }
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
    public List<MyPageDto.getMyReservationResponseDto> getMyReservation(@AuthenticationPrincipal User auth) {
        return mypageService.getMyReservation(auth);
    }
}