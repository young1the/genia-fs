package com.example.cheongchun28.domain.reservation.service;

import com.example.cheongchun28.domain.reservation.dto.RoomResponseDto;
import com.example.cheongchun28.domain.reservation.entity.Reservation;
import com.example.cheongchun28.domain.reservation.entity.ReservationStatus;
import com.example.cheongchun28.domain.reservation.entity.Room;
import com.example.cheongchun28.domain.reservation.repository.ReservationRepository;
import com.example.cheongchun28.domain.reservation.repository.RoomRepository;
import com.example.cheongchun28.domain.user.entity.User;
import com.example.cheongchun28.domain.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class RoomService {

    private final ReservationRepository reservationRepository;
    private final RoomRepository roomRepository;
    private final UserRepository userRepository;

    public List<RoomResponseDto.RoomGetResponseDto> getAllRooms() {
        List<Room> rooms = roomRepository.findAll();
        List<RoomResponseDto.RoomGetResponseDto> RoomDto = new ArrayList<>();

        for (Room room : rooms) {
            RoomDto.add(new RoomResponseDto.RoomGetResponseDto(room.getId(), room.getRoomName(), room.isBeamProjector(), room.isComputer(), room.isBlackBoard(), room.getCapacity()));
        }
        return RoomDto;
    }

    public RoomResponseDto.RoomGetOneDto getRoomById(Long roomId) {
        Room room = roomRepository.findById(roomId).orElseThrow(() -> new IllegalArgumentException("해당 Room이 없습니다. roomid: " + roomId));
        List<Reservation> reservations = room.getReservations();
        String reservationCode = "";
        log.info("reservations:{}", reservations.size());

        for (Reservation reservation : reservations) {
            if (reservation.getStatus() == ReservationStatus.CONFIRMED
                    && LocalDateTime.now().isAfter(reservation.getStartDate())
                    && LocalDateTime.now().isBefore(reservation.getEndDate())) {
                reservationCode = reservation.getCode();
                break;
            }
        }

        return RoomResponseDto.RoomGetOneDto.builder()
                .roomId(room.getId())
                .roomName(room.getRoomName())
                .beamProjector(room.isBeamProjector())
                .blackBoard(room.isBlackBoard())
                .computer(room.isComputer())
                .reservationCode(reservationCode)
                .build();
    }

    @Transactional
    public List<RoomResponseDto.RoomGetResponseDto> findAvailableRooms(User auth, String startDate, String endDate) {

        userRepository.findByUserEmail(auth.getUsername())
                .orElseThrow(() -> new UsernameNotFoundException(auth.getUsername() + "를 찾을 수 없습니다."));
        LocalDateTime sDate = LocalDateTime.parse(startDate, DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss"));
        LocalDateTime eDate = LocalDateTime.parse(endDate, DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss"));
        log.info("sDate:{}, eDate:{}", sDate, eDate);

        List<Room> allRooms = roomRepository.findAll();
        List<Reservation> reservations = findAllReservationsInDateRange(sDate, eDate);

        log.info("reservations:{}", reservations.size());

        List<Room> availableRooms = new ArrayList<>();

        for (Room room : allRooms) {
            boolean isAvailable = true;
            for (Reservation reservation : reservations) {
                if (reservation.getRoom().getId().equals(room.getId())) {
                    isAvailable = false;
                    break;
                }
            }
            if (isAvailable) {
                availableRooms.add(room);
            }
        }

        return availableRooms.stream()
                .map(room -> RoomResponseDto.RoomGetResponseDto.builder()
                        .id(room.getId())
                        .roomName(room.getRoomName())
                        .beamProjector(room.isBeamProjector())
                        .computer(room.isComputer())
                        .blackBoard(room.isBlackBoard())
                        .capacity(room.getCapacity())
                        .build())
                .collect(Collectors.toList());
    }


    // 설정시간내 예약내역 조회
    public List<Reservation> findAllReservationsInDateRange(LocalDateTime startDate, LocalDateTime endDate) {
        return reservationRepository.findOverlappingReservationsInDateRange(startDate, endDate);
    }
}