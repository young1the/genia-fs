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
        private String reservationCode;
        private String topic;
        private String status;
        private String nickName;
        private String roomName;
        private List<String> user;
        private LocalDateTime startDate;
        private LocalDateTime endDate;

        public ReservationAllResponseDto(String reservationCode, String topic, String status, String nickName, String roomName, List<String> user, LocalDateTime startDate, LocalDateTime endDate) {
            this.reservationCode = reservationCode;
            this.topic = topic;
            this.status = status;
            this.nickName = nickName;
            this.roomName = roomName;
            this.user = user;
            this.startDate = startDate;
            this.endDate = endDate;
        }

    }


    @Getter
    @Setter
    public static class UserAllResponseDto {
        private String email;
        private String nickName;
        private String empNumber;
        private String role;
        private boolean notificationAgreement;
    }
}