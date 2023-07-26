package com.example.cheongchun28.domain.mypage.dto;

import com.example.cheongchun28.domain.user.entity.User;
import lombok.Getter;

public class MypageDto {

    /*
    * 회원 정보 변경 put /api/mypage
        "username": "changeExampleUsername"
        “profileImage”: “exampleImageURL.com”,
        ”notificationAgreement”: true(false)
    * 회원 정보 조회 get /api/mypage
    * 비밀번호 변경 put /api/mypage/password
        ”password”: “examplePassword”,
        ”newPassword”: “newExamplePassword”
    * 예약 기록 조회 get /api/mypage/reservation*/
    @Getter
    public class ChangeMyInfoRequestDto {
        private String userName;
        private String profileImage;
        private boolean notificationAgreement;
        }

    @Getter
    public class ChangeMyPasswordRequestDto {
        private String password;
        private String newPassword;
    }
}
