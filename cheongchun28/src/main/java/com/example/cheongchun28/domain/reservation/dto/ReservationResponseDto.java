package com.example.cheongchun28.domain.reservation.dto;

import com.example.cheongchun28.domain.reservation.entity.ReservationStatus;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class ReservationResponseDto {

    @Getter
    @Setter
    public static class ReservationCreateResponseDto {

        private int statusCode;

        public ReservationCreateResponseDto(int statusCode) {
            this.statusCode = statusCode;
        }
    }

    @Getter
    @Setter
    public static class ReservationGetResponseDto {
        private int statusCode;
        private String reservationCode;

        public ReservationGetResponseDto(int statusCode, String reservationCode) {
            this.statusCode = statusCode;
            this.reservationCode = reservationCode;
        }
    }

    @Getter
    @Setter
    public static class ReservationGetOneResponseDto {
        private String roomName;
        private String topic;
        private String nickName;
        private String status;
        private LocalDateTime startDate;
        private LocalDateTime endDate;
        private List<String> user;

        public ReservationGetOneResponseDto(String roomName, String topic, String nickName, ReservationStatus status, LocalDateTime startDate, LocalDateTime endDate, List<String> user) {
            this.roomName = roomName;
            this.topic = topic;
            this.nickName = nickName;
            this.status = String.valueOf(status);
            this.startDate = startDate;
            this.endDate = endDate;
            this.user = user;
        }

    }

    @Getter
    @Setter
    @Builder
    public static class ReservationAllResponseDto {
        private String nickName;
        private String roomName;
        private List<String> resUser;
        private LocalDateTime startDate;
        private LocalDateTime endDate;

        public ReservationAllResponseDto(String nickName, String roomName, List<String> resUser, LocalDateTime startDate, LocalDateTime endDate) {
            this.nickName = nickName;
            this.roomName = roomName;
            this.resUser = resUser;
            this.startDate = startDate;
            this.endDate = endDate;
        }

    }


}