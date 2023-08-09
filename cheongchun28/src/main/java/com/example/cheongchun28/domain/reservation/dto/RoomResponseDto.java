package com.example.cheongchun28.domain.reservation.dto;

import com.example.cheongchun28.domain.reservation.entity.Reservation;
import com.example.cheongchun28.domain.reservation.entity.ReservationStatus;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;
import java.util.stream.Collectors;

@Getter
@Setter
@NoArgsConstructor
public class RoomResponseDto {

    @Getter
    @Setter
    @Builder
    public static class RoomGetResponseDto {
        private Long id;

        private String roomName;

        private boolean beamProjector;

        private boolean computer;

        private boolean blackBoard;

        private int capacity;

        public RoomGetResponseDto(Long id, String roomName, boolean beamProjector, boolean computer, boolean blackBoard, int capacity) {
            this.id = id;
            this.roomName = roomName;
            this.beamProjector = beamProjector;
            this.computer = computer;
            this.blackBoard = blackBoard;
            this.capacity = capacity;
        }

    }

    @Getter
    @Setter
    public static class RoomGetOneDto {

        private List<Long> reservationIds;

        public RoomGetOneDto(List<Reservation> reservations) {

            this.reservationIds = reservations.stream()
                    .filter(RoomGetOneDto::isReservationConfirmed)
                    .map(Reservation::getId)
                    .collect(Collectors.toList());
        }

        private static boolean isReservationConfirmed(Reservation reservation) {
            return reservation.getStatus() == ReservationStatus.CONFIRMED;
        }

    }
}