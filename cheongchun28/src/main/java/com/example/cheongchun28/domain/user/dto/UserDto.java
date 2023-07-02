package com.example.cheongchun28.domain.user.dto;

import com.example.cheongchun28.domain.user.entity.User;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import lombok.Getter;

public class UserDto {

    @Getter
    public static class SignupRequestDto {

        @Email
        @NotBlank(message ="이메일은 필수 입력값입니다.")
        private String userEmail;

        @NotBlank
        @Size(min = 5, max = 20, message = "비밀번호 최소 조건을 만족시켜주세요.")
        private String password;

        @NotBlank
        private String userName;

        private String profileImage;

        private short deleted;

        private int empNumber;

        public User toEntity() {
            return new User(this.userEmail, this.password, this.userName, this.profileImage, this.empNumber);
        }
    }

    @Getter
    public class loginRequestDto {
        private String email;
        private String password;
    }
}
