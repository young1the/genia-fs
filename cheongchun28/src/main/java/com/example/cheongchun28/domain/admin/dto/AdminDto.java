package com.example.cheongchun28.domain.admin.dto;

import com.example.cheongchun28.domain.user.entity.Role;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Email;

@NoArgsConstructor
public class AdminDto{

    @Getter
    public static class setPermissionRequestDto {
        @Email
        private String email;
        private String role;
    }

    @Getter
    public static class deleteUserRequestDto {
        @Email
        private String email;
    }

    @Getter
    public static class setUserRequestDto {
        @Email
        private String email;
        private String password;
        private String nickName;
        private String empNumber;
    }

    @Getter
    public static class cancelRequestDto {
        private String nickName;
    }

}
