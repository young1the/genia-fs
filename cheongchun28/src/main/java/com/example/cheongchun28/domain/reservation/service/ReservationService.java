package com.example.cheongchun28.domain.reservation.service;

import com.example.cheongchun28.domain.reservation.dto.ReservationRequestDto;
import com.example.cheongchun28.domain.reservation.dto.ReservationResponseDto;
import com.example.cheongchun28.domain.reservation.entity.Reservation;
import com.example.cheongchun28.domain.reservation.entity.ReservationMember;
import com.example.cheongchun28.domain.reservation.entity.ReservationStatus;
import com.example.cheongchun28.domain.reservation.entity.Room;
import com.example.cheongchun28.domain.reservation.repository.ReservationMemberRepository;
import com.example.cheongchun28.domain.reservation.repository.ReservationRepository;
import com.example.cheongchun28.domain.reservation.repository.RoomRepository;
import com.example.cheongchun28.domain.user.entity.User;
import com.example.cheongchun28.domain.user.repository.UserRepository;
import com.example.cheongchun28.global.common.dto.CustomResponseDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Duration;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class ReservationService {


    private final ReservationRepository reservationRepository;
    private final ReservationMemberRepository reservationMemberRepository;
    private final RoomRepository roomRepository;
    private final UserRepository userRepository;
    private final RoomService roomService;

    // 예약 생성
    @Transactional
    public CustomResponseDto createReservation(User auth, ReservationRequestDto.CreateReservationDto createReservationDto) {
        try {
            User user = userRepository.findByUserEmail(auth.getUsername())
                    .orElseThrow(() -> new UsernameNotFoundException(auth.getUsername() + "를 찾을 수 없습니다."));
            log.info("user: {}", user.getUserEmail());
            Room room = roomRepository.findByRoomName(createReservationDto.getRoomName())
                    .orElseThrow(() -> new IllegalArgumentException(createReservationDto.getRoomName() + "를 찾을 수 없습니다."));

            // 방 예약 가능 체크
            if (!roomService.isRoomAvailable(room, createReservationDto.getStartDate(), createReservationDto.getEndDate())) {
                log.error("선택한 강의실 예약이 중복입니다.");
                return new CustomResponseDto(400);
            }
            // 회원 예약 참여 체크
            if (!checkUserReservation(user)){
                log.error("이미 예약 참여중인 회원입니다");
                return new CustomResponseDto(400);
            }
            // 선택 시간 체크
            if (!isReservationTimeVaild(createReservationDto.getStartDate(), createReservationDto.getEndDate())){
                log.error("선택한 예약 시간이 현재 시간을 지났습니다.");
                return new CustomResponseDto(400);
            }
            // 예약 시간간격 체크
            if (isValid(createReservationDto.getStartDate(), createReservationDto.getEndDate())) {
                Reservation reservation = reservationRepository.save(createReservationDto.toEntity(room, user));
                ReservationMember reservationMember = ReservationMember.builder()
                        .reservation(reservation)
                        .user(user)
                        .build();
                reservationMember.setInvitor();
                reservationMemberRepository.save(reservationMember);
                log.info("예약이 성공적으로 완료되었습니다.");
                return new CustomResponseDto(200);
            } else {
                log.error("최소 예약 시간은 1시간 이상이어야 합니다.");
                return new CustomResponseDto(400);
            }
        } catch (Exception e) {
            log.error("예약 생성 중 오류가 발생했습니다: {}", e.getMessage());
            return new CustomResponseDto(400);
        }
    }

    public  boolean doesOverlapWithReservations(List<Reservation> reservations, LocalDateTime startDate, LocalDateTime endDate) {
        for (Reservation reservation : reservations) {
            if ((startDate.isEqual(reservation.getStartDate()) || startDate.isAfter(reservation.getStartDate())) && startDate.isBefore(reservation.getEndDate()) ||
                    (endDate.isEqual(reservation.getEndDate()) || endDate.isBefore(reservation.getEndDate())) && endDate.isAfter(reservation.getStartDate())) {
                return true;
            }
        }
        return false;
    }

    public boolean checkUserReservation(User user){
        List<ReservationMember> reservationMembers = reservationMemberRepository.findReservationMemberByUser(user);
        if (reservationMembers != null){
            for (ReservationMember reservationMember  : reservationMembers) {
                if (reservationMember.isStatus() == false){
                    return false;
                }
            }
        }
        return true;
    }

    public boolean isReservationTimeVaild(LocalDateTime startDate, LocalDateTime endDate) {
        LocalDateTime now = LocalDateTime.now();
        boolean invalidStartDate = startDate.isBefore(now);
        boolean invalidEndDate = endDate.isBefore(now);
        boolean endDateIsBeforeOrEqualToStartDate = endDate.isBefore(startDate) || endDate.isEqual(startDate);

        return !invalidStartDate && !invalidEndDate && !endDateIsBeforeOrEqualToStartDate;
    }

    public boolean doesUserTimeOverlap(User user, LocalDateTime startDate, LocalDateTime endDate) {
        List<Reservation> existingReservations = reservationRepository.findByUserAndStartDateBetweenAndEndDateBetween(user, startDate, endDate, startDate, endDate);
        return !existingReservations.isEmpty();
    }

    public boolean hasInProgressReservation(User user) {
        return user.getReservations().stream()
                .anyMatch(reservation -> reservation.getStatus() != ReservationStatus.CANCELLED && reservation.getStatus() != ReservationStatus.COMPLETED);
    }

    public boolean isValid(LocalDateTime startDate, LocalDateTime endDate) {
        return isMinimumHourInterval(startDate, endDate);
    }

    public boolean isMinimumHourInterval(LocalDateTime startDate, LocalDateTime endDate) {
        Duration duration = Duration.between(startDate, endDate);
        return duration.toHours() >= 1;
    }

    // 예약 조회 서비스 (본인)
    public ReservationResponseDto.ReservationGetResponseDto getReservation(User auth) {

        User user = userRepository.findByUserEmail(auth.getUsername())
                .orElseThrow(() -> new UsernameNotFoundException(auth.getUsername() + "를 찾을 수 없습니다."));

        Reservation reservation = reservationRepository.findWaitingReservationByEmail(user.getUserEmail());

        //참가자인 경우
        List<ReservationMember> members = reservationMemberRepository.findReservationMemberByUser(user);
        for (ReservationMember rm : members) {
            if (rm.isStatus() == false && rm.isInvitor() == false) {
                Reservation rsv = reservationRepository.findById(rm.getReservation().getId()).orElseThrow();

                return new ReservationResponseDto.ReservationGetResponseDto(200, rsv.getCode());
            }
        }
        log.info("members: {}", members.size(), "rsv");

        String reservationCode;
        try {
            reservationCode = reservation.getCode();
        } catch (NullPointerException e) {
            return new ReservationResponseDto.ReservationGetResponseDto(204, "");
        }
        return new ReservationResponseDto.ReservationGetResponseDto(200, reservationCode);
    }

    // 예약 조회 서비스 (하나씩)
    public ReservationResponseDto.ReservationGetOneResponseDto getReservation(String code) {
        Reservation reservation = reservationRepository.findByReservationCode(code);
        List<ReservationMember> reservationMember = reservationMemberRepository.findByReservation(false, reservation.getId());

        ArrayList<String> memberUser = new ArrayList<>();
        for (ReservationMember rm : reservationMember) {
            memberUser.add(rm.getUser().getNickName());
        }

        return new ReservationResponseDto.ReservationGetOneResponseDto(reservation.getRoom().getRoomName(),
                reservation.getTopic(), reservation.getUser().getNickName(), reservation.getStatus(),
                reservation.getStartDate(), reservation.getEndDate(), memberUser);

    }

    // 예약 수정
    @Transactional
    public CustomResponseDto updateReservation(User auth, String code, ReservationRequestDto.UpdateReservationDto
            updateReservationDto) {
        try {
            Reservation reservation = reservationRepository.findByCode(code)
                    .orElseThrow(() -> new IllegalArgumentException(code + "를 찾을 수 없습니다."));

            if (!auth.getUserSequenceId().equals(reservation.getUser().getUserSequenceId())) {
                log.info(String.valueOf(reservation.getId()));
                log.info(String.valueOf(auth.getUserSequenceId()));
                log.info("본인이 예약한 예약이 아님");
                return new CustomResponseDto(400);
            }
            if (reservation.getStatus() != ReservationStatus.CONFIRMED) {
                log.info("삭제된 예약");
                return new CustomResponseDto(400);
            }

                reservation.updateReservation(updateReservationDto);
                reservationRepository.save(reservation);
                return new CustomResponseDto(200);
        } catch (IllegalArgumentException e) {
            log.error("예약 수정 중 오류가 발생했습니다: {}", e.getMessage());
            return new CustomResponseDto(400);
        } catch (Exception e) {
            log.error("예약 수정 중 오류가 발생했습니다: {}", e.getMessage());
            return new CustomResponseDto(500);
        }
    }

    // 예약 삭제
    @Transactional
    public CustomResponseDto deleteReservation(User auth, String code) {
        userRepository.findByUserEmail(auth.getUsername())
                .orElseThrow(() -> new UsernameNotFoundException(auth.getUsername() + "를 찾을 수 없습니다."));
        Reservation reservation = reservationRepository.findByCode(code)
                .orElseThrow(() -> new IllegalArgumentException(code + "를 찾을 수 없습니다."));
        reservation.deleteReservation();
        List<ReservationMember> reservationMember = reservationMemberRepository.findByReservation(false, reservation.getId());
        if (reservationMember != null) {
            for (ReservationMember member : reservationMember) {
                reservationMemberRepository.delete(member);
            }
        }

        reservationRepository.save(reservation);
        return new CustomResponseDto(200);
    }

    // 예약 참가
    @Transactional
    public CustomResponseDto joinReservation(User auth, String code) {
        User user = userRepository.findByUserEmail(auth.getUsername())
                .orElseThrow(() -> new UsernameNotFoundException(auth.getUsername() + "를 찾을 수 없습니다."));
        Reservation reservation = reservationRepository.findByCode(code)
                .orElseThrow(() -> new IllegalArgumentException("예약을 찾을 수 없습니다: " + code));
        log.info("reservationMemberNum:{}", reservation.getReservationMembers().size());
        if (reservation.getStatus() != ReservationStatus.CONFIRMED) {
            log.error("예약가능한 상태가 아닙니다.");
            return new CustomResponseDto(400);
        }
       if (!checkUserReservation(user)){
           log.error("이미 참여중인 회원입니다.");
           return new CustomResponseDto(400);
       }

//        ReservationMember existingReservationMember = reservationMemberRepository.findByReservationAndUser(reservation, user);
//        if (existingReservationMember != null && !existingReservationMember.isStatus()) {
//            log.error("이미 참여중인 회원입니다.");
//            return new CustomResponseDto(400);
//        }
        if (reservation.getRoom().getCapacity() >= reservation.getReservationMembers().size()) {

            reservationMemberRepository.save(
                    ReservationMember.builder()
                            .reservation(reservation)
                            .user(auth)
                            .build()
            );
            return new CustomResponseDto(200);
        } else {
            log.error("강의실 예약인원 초과입니다.");
            return new CustomResponseDto(400);
        }

    }

    // 예약 참가 취소
    public CustomResponseDto joinCancelReservation(User auth, String code) {
        User user = userRepository.findByUserEmail(auth.getUsername())
                .orElseThrow(() -> new UsernameNotFoundException(auth.getUsername() + "를 찾을 수 없습니다."));
        Reservation reservation = reservationRepository.findByCode(code)
                .orElseThrow(() -> new IllegalArgumentException("예약을 찾을 수 없습니다: " + code));

        ReservationMember reservationMember = reservationMemberRepository.findByReservationAndUser(reservation, user);
        if (!reservationMember.isInvitor()){
            reservationMemberRepository.delete(reservationMember);
            return new CustomResponseDto(200);
        }else {
            log.info("예약 생성자는 참가 취소가 불가능합니다.");
            return new CustomResponseDto(400);
        }
    }

    // 강의실 체크인
    @Transactional
    public CustomResponseDto checkInReservation(User auth, String code) {
        User user = userRepository.findByUserEmail(auth.getUsername())
                .orElseThrow(() -> new UsernameNotFoundException(auth.getUsername() + "를 찾을 수 없습니다."));
        Reservation reservation = reservationRepository.findByCode(code)
                .orElseThrow(() -> new IllegalArgumentException("예약을 찾을 수 없습니다: " + code));

        if (reservation.getStatus() != ReservationStatus.CONFIRMED) {
            log.error("기존 예약이 있습니다.");
            return new CustomResponseDto(400);
        }

        ReservationMember existingReservationMember = reservationMemberRepository.findByReservationAndUser(reservation, user);
        if (existingReservationMember != null && !existingReservationMember.isStatus()) {
            log.error("이미 참여중인 회원입니다.");
            return new CustomResponseDto(400);
        }
        reservationMemberRepository.save(
                ReservationMember.builder()
                        .reservation(reservation)
                        .user(auth)
                        .build()
        );
        return new CustomResponseDto(200);
    }

    // 강의실 체크아웃
    public CustomResponseDto checkOutReservation(User auth, String code) {
        User user = userRepository.findByUserEmail(auth.getUsername())
                .orElseThrow(() -> new UsernameNotFoundException(""));
        Reservation reservation = reservationRepository.findByCode(code)
                .orElseThrow(() -> new IllegalArgumentException());

        ReservationMember reservationMember = reservationMemberRepository.findByReservationAndUser(reservation, user);

        if (reservationMember.isStatus()) {
            return new CustomResponseDto(400);
        }

        reservationMember.checkOutReservationMember();
        reservationMemberRepository.save(reservationMember);
        return new CustomResponseDto(200);
    }
}