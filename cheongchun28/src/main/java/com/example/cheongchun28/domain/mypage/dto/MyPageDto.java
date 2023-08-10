package com.example.cheongchun28.domain.mypage.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

public class MyPageDto {
    @Getter
    public static class ChangeMyInfoRequestDto {
        private String nickName;
        private String profileImage;
        private boolean notificationAgreement;
        private String empNumber;
    }

    @Getter
    public static class ChangeMyPasswordRequestDto {
        private String password;
        private String newPassword;
    }

    @AllArgsConstructor
    @Getter
    public static class getMyInfoResponseDto {
        private String email;
        private String nickName;
        private String profileImage;
        private String empNumber;
    }


    public static class getMyReservationResponseDto {
    }
}
