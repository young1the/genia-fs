package com.example.cheongchun28.domain.reservation.dto;

import com.example.cheongchun28.domain.reservation.entity.Room;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

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

        private boolean beamProject;

        private boolean computer;

        private boolean blackBoard;

        private int capacity;

        public RoomGetResponseDto(Long id, String roomName, boolean beamProject, boolean computer, boolean blackBoard, int capacity) {
            this.id = id;
            this.roomName = roomName;
            this.beamProject = beamProject;
            this.computer = computer;
            this.blackBoard = blackBoard;
            this.capacity = capacity;
        }

    }
}