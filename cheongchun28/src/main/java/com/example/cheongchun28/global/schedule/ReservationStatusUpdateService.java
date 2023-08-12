package com.example.cheongchun28.global.schedule;


import com.example.cheongchun28.domain.reservation.entity.ReservationMember;
import com.example.cheongchun28.domain.reservation.entity.ReservationStatus;
import com.example.cheongchun28.domain.reservation.repository.ReservationMemberRepository;
import com.example.cheongchun28.domain.reservation.repository.ReservationRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Component
@Slf4j
@RequiredArgsConstructor
public class ReservationStatusUpdateService {

    private final ReservationRepository reservationRepository;
    private final ReservationMemberRepository reservationMemberRepository;

    @Scheduled(cron = "0 0 0 * * ?")
    @Transactional
    public void checkAndCompleteExpiredReservations() {
        log.info("종료된 예약 상태 변경 작업 시작");
        LocalDateTime currentTime = LocalDateTime.now();
        log.info("currentTime:{}", currentTime);
        reservationRepository.findAll().stream()
                .filter(reservation -> reservation.getStatus() != ReservationStatus.COMPLETED && currentTime.isAfter(reservation.getEndDate()))
                .forEach(reservation -> {
                    reservation.completeReservation();
                    List<ReservationMember> reservationMembers = reservation.getReservationMembers();
                    for (ReservationMember reservationMember: reservationMembers) {
                        reservationMember.completeReservationMember();
                        reservationMemberRepository.save(reservationMember);
                    }
                    reservationRepository.save(reservation);
                });

        log.info("종료된 예약 상태 변경 작업 완료");
    }
}

