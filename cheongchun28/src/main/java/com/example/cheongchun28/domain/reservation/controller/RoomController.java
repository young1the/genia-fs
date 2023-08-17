package com.example.cheongchun28.domain.reservation.controller;


import com.example.cheongchun28.domain.reservation.dto.RoomResponseDto;
import com.example.cheongchun28.domain.reservation.service.RoomService;
import com.example.cheongchun28.domain.user.entity.User;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@Slf4j
@RestController
@RequestMapping("/api/room")
@RequiredArgsConstructor
public class RoomController {

    private final RoomService roomService;

    // 강의실 전체 조회
    @GetMapping()
    public ResponseEntity<List<RoomResponseDto.RoomGetResponseDto>> getAllRooms() {
        List<RoomResponseDto.RoomGetResponseDto> RoomDto = roomService.getAllRooms();
        return ResponseEntity.ok(RoomDto);

    }

    // 강의실 예약현황 조회
    @GetMapping("/{roomId}")
    public ResponseEntity<RoomResponseDto.RoomGetOneDto> getOneRooms(@PathVariable(value = "roomId") Long roomId) {
        log.info("getOneRooms, roomId:{}", roomId);
        return ResponseEntity.ok(roomService.getRoomById(roomId));
    }

    //예약 가능한 강의실 조회
    @GetMapping("/available")
    public ResponseEntity<List<RoomResponseDto.RoomGetResponseDto>> getAvailableRooms(@RequestParam(value = "startDate") String startDate,
                                                                                      @RequestParam(value = "endDate") String endDate) {
        log.info("getAvailableRooms, startDate:{}, endDate:{}", startDate, endDate);
        return ResponseEntity.ok(roomService.findAvailableRooms( startDate, endDate));
    }
}