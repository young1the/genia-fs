package com.example.cheongchun28.domain.reservation.controller;


import com.example.cheongchun28.domain.reservation.dto.ReservationRequestDto;
import com.example.cheongchun28.domain.reservation.service.ReservationService;
import com.example.cheongchun28.domain.user.entity.User;
import com.example.cheongchun28.global.common.dto.CustomResponseDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/api/reservation")
@RequiredArgsConstructor
public class ReservationController {

    private final ReservationService reservationService;


    // 예약 등록
    @PostMapping()
    public ResponseEntity<CustomResponseDto> createReservation(@AuthenticationPrincipal User auth,
                                                               @RequestBody ReservationRequestDto.CreateReservationDto createReservationDto) {
        log.info("reservation create, className: {}, auth: {}", createReservationDto.getClassName(), auth.getUsername());
        return ResponseEntity.ok(reservationService.createReservation(auth, createReservationDto));
    }

    @GetMapping()
    //조회하기(Read/Get) - (전체)
    public ResponseEntity<ReservationResponseDto.ReservationGetResponseDto> getedReservation(@AuthenticationPrincipal User auth) {
        log.info("reservation read, auth: {}", auth.getUsername());
        return ResponseEntity.ok(reservationService.getReservation(auth));
    }

}
