package com.example.cheongchun28.domain.reservation.service;

import com.example.cheongchun28.domain.reservation.dto.RoomResponseDto;
import com.example.cheongchun28.domain.reservation.entity.Reservation;
import com.example.cheongchun28.domain.reservation.entity.Room;
import com.example.cheongchun28.domain.reservation.repository.RoomRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class RoomService {

    private final RoomRepository roomRepository;

    public List<RoomResponseDto.RoomGetResponseDto> getAllRooms() {
        List<Room> rooms = roomRepository.findAll();
        List<RoomResponseDto.RoomGetResponseDto> RoomDto = new ArrayList<>();

        for (Room room : rooms) {
            RoomDto.add(new RoomResponseDto.RoomGetResponseDto(room.getId(), room.getRoomName(), room.isBeamProjector(), room.isComputer(), room.isBlackBoard(), room.getCapacity()));
        }
        return RoomDto;
    }
}