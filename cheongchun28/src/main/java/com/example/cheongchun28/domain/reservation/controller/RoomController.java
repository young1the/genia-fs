package com.example.cheongchun28.domain.reservation.controller;


import com.example.cheongchun28.domain.reservation.dto.RoomResponseDto;
import com.example.cheongchun28.domain.reservation.service.RoomService;
import com.example.cheongchun28.domain.user.entity.User;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@Slf4j
@RestController
@RequestMapping("/api/room")
@RequiredArgsConstructor
public class RoomController {

    private final RoomService roomService;

    @GetMapping()
    public ResponseEntity<List<RoomResponseDto.RoomGetResponseDto>> getAllRooms() {
        List<RoomResponseDto.RoomGetResponseDto> RoomDto = roomService.getAllRooms(); // 서비스에서 DTO에 엔티티를 담는 작업 =
        return ResponseEntity.ok(RoomDto);

    }

    //예약 가능한 강의실 조회
    @GetMapping("/available")
    public ResponseEntity<List<RoomResponseDto.RoomGetResponseDto>> getAvailableRooms(@AuthenticationPrincipal User auth,
                                                                                      @RequestParam(value = "startDate") String startDate,
                                                                                      @RequestParam(value = "endDate" ) String endDate) {
        log.info("getAvailableRooms, auth:{}, startDate:{}, endDate:{}", auth.getUsername(), startDate, endDate);
        return ResponseEntity.ok(roomService.findAvailableRooms(auth, startDate, endDate));
    }
}