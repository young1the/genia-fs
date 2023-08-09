package com.example.cheongchun28.domain.admin.controller;

import com.example.cheongchun28.domain.admin.dto.AdminDto;
import com.example.cheongchun28.domain.admin.service.AdminService;
import com.example.cheongchun28.domain.reservation.dto.ReservationResponseDto;
import com.example.cheongchun28.global.common.dto.CustomResponseDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.sql.SQLException;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class AdminController {

    private final AdminService adminService;

    /*
     * ***예약 만들어지고 나서 하기***
     * 전체 예약 내역 조회 기능 GET /api/admin/reservaion
     * 예약 내역 직권 취소 기능 DELETE /api/admin/reservation
     *
     * ***지금 하기***
     * 권한 부여 / 삭제 기능 POST /api/admin/permission
     * 회원 삭제 기능 DELETE /api/admin/user
     * 회원 정보 수정 기능 PUT /api/admin/user
     * */

    @PostMapping("/permission")
    public CustomResponseDto setPermission(@RequestBody AdminDto.setPermissionRequestDto requestDto) throws SQLException {
        return adminService.setPermission(requestDto);
    }

    @DeleteMapping("/user")
    public CustomResponseDto deleteUser(@RequestBody AdminDto.deleteUserRequestDto requestDto) throws SQLException {
        return adminService.deleteUser(requestDto);
    }

    @PutMapping("/user")
    public CustomResponseDto setUser(@RequestBody AdminDto.setUserRequestDto requestDto) throws SQLException {
        return adminService.setUser(requestDto);
    }

    @GetMapping("/reservation")
    public List<ReservationResponseDto.ReservationAllResponseDto> getAllReservations() {
        return adminService.getAllReservations();
    }
}
