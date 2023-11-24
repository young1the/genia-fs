package com.example.cheongchun28.domain.reservation.dto;


import com.example.cheongchun28.domain.reservation.entity.Reservation;
import com.example.cheongchun28.domain.reservation.entity.ReservationStatus;
import com.example.cheongchun28.domain.reservation.entity.Room;
import com.example.cheongchun28.domain.user.entity.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;


@NoArgsConstructor
public class ReservationRequestDto {

    @Getter
    @Setter
    @NoArgsConstructor
    public static class CreateReservationDto {


        private String roomName;

        @NotNull(message = "예약 시작 시간은 필수 입력 값입니다.")
        private LocalDateTime startDate;

        @NotNull(message = "예약 종료 시간은 필수 입력 값입니다.")
        private LocalDateTime endDate;

//        private ReservationStatus status;

        @NotNull(message = "예약 사유를 입력해주세요.")
        private String topic;

        public Reservation toEntity(Room room, User user) {
            return Reservation
                    .builder()
                    .user(user)
                    .startDate(startDate)
                    .endDate(endDate)
                    .room(room)
                    .status(ReservationStatus.CONFIRMED)
                    .topic(topic)
                    .build();
        }

    }


    @Getter
    @Setter
    @NoArgsConstructor
    public static class UpdateReservationDto {

        @NotNull(message = "예약 사유를 입력해주세요.")
        private String topic;
    }
}
