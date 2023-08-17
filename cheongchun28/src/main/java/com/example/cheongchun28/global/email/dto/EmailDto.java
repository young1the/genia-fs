package com.example.cheongchun28.global.email.dto;

import lombok.Getter;

public class EmailDto {

    @Getter
    public static class EmailConfirmRequestDto {
        private String email;
        private String confirmCode;
    }
}
