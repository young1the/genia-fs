package com.example.cheongchun28.domain.admin.controller;

import com.example.cheongchun28.domain.admin.dto.AdminDto;
import com.example.cheongchun28.domain.admin.service.AdminService;
import com.example.cheongchun28.domain.reservation.dto.ReservationResponseDto;
import com.example.cheongchun28.domain.reservation.entity.Reservation;
import com.example.cheongchun28.global.common.dto.CustomResponseDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class AdminController {
    private final AdminService adminService;

    @PostMapping("/permission")
    public CustomResponseDto setPermission(@RequestBody AdminDto.setPermissionRequestDto requestDto) throws SQLException {
        return adminService.setPermission(requestDto);
    }

    @DeleteMapping("/user")
    public CustomResponseDto deleteUser(@RequestBody AdminDto.deleteUserRequestDto requestDto) throws SQLException {
        return adminService.deleteUser(requestDto);
    }

    @GetMapping("/user")
    public List<ReservationResponseDto.UserAllResponseDto> getAllUserInfo() throws SQLException {
        return adminService.getAllUserInfo();
    }

    @PutMapping("/user")
    public CustomResponseDto setUser(@RequestBody AdminDto.setUserRequestDto requestDto) throws SQLException {
        return adminService.setUser(requestDto);
    }

    @GetMapping("/reservation")
    public List<ReservationResponseDto.ReservationAllResponseDto> getAllReservations() {
        return adminService.getAllReservations();
    }

    @DeleteMapping("/reservation")
    public CustomResponseDto canselReservation(@RequestBody AdminDto.canselRequestDto requestDto) throws SQLException{
        return adminService.canselReservation(requestDto);
    }

}
