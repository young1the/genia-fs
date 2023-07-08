package com.example.cheongchun28.global.email.controller;

import com.example.cheongchun28.global.common.dto.CustomResponseDto;
import com.example.cheongchun28.global.email.dto.EmailDto;
import com.example.cheongchun28.global.email.service.EmailService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class EmailController {
    private final EmailService emailService;

    public CustomResponseDto emailConfirm(@RequestBody EmailDto.EmailConfirmRequestDto emailDto) {
        emailService.emailConfirm(emailDto);
        return new CustomResponseDto(200);
    }
}
