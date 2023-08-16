package com.example.cheongchun28.domain.reservation.dto;

import com.example.cheongchun28.domain.reservation.entity.Reservation;
import com.example.cheongchun28.domain.reservation.entity.ReservationStatus;
import com.example.cheongchun28.domain.reservation.entity.Room;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
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
    @NoArgsConstructor
    public static class RoomGetOneDto {

        private Long roomId;
        private String roomName;
        private boolean beamProjector;
        private boolean blackBoard;
        private boolean computer;
        private String reservationCode;
        private String topic;
        private LocalDateTime startDate;
        private LocalDateTime endDate;

        @Builder
        public RoomGetOneDto(Long roomId, String roomName, boolean beamProjector, boolean blackBoard, boolean computer, String reservationCode,
        String topic, LocalDateTime startDate, LocalDateTime endDate) {
          this.roomId = roomId;
          this.roomName = roomName;
          this.beamProjector = beamProjector;
          this.blackBoard = blackBoard;
          this.computer = computer;
          this.reservationCode = reservationCode;
          this.topic = topic;
          this.startDate = startDate;
          this.endDate = endDate;
        }

    }
}