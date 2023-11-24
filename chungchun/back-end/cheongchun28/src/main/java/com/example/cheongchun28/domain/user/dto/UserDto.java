package com.example.cheongchun28.domain.user.dto;

import com.example.cheongchun28.domain.user.entity.User;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
public class UserDto {

    @Getter
    public static class SignupRequestDto {

        @Email
        @NotBlank(message ="이메일은 필수 입력값입니다.")
        private String email;

        @NotBlank
        @Size(min = 5, max = 20, message = "비밀번호 최소 조건을 만족시켜주세요.")
        private String password;

        @NotBlank
        private String nickName;

        private String profileImage;

        private String empNumber;

        private boolean notificationAgreement;
        public User toEntity(String encodePassword) {
            return new User(this.email, this.password = encodePassword, this.nickName, this.profileImage, this.empNumber, this.notificationAgreement);
        }
    }

    @Getter
    public static class loginRequestDto {
        private String email;
        private String password;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class loginResponseDto {
        private String nickName;
        private String profileImage;
        private String role;
    }
}
