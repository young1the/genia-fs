package com.example.cheongchun28.domain.reservation.controller;


import com.example.cheongchun28.domain.reservation.dto.RoomResponseDto;
import com.example.cheongchun28.domain.reservation.service.RoomService;
import com.example.cheongchun28.global.common.dto.CustomResponseDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

}