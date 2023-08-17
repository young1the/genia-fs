package com.example.cheongchun28.domain.admin.service;

import com.example.cheongchun28.domain.admin.dto.AdminDto;
import com.example.cheongchun28.domain.reservation.dto.ReservationResponseDto;
import com.example.cheongchun28.domain.reservation.entity.Reservation;
import com.example.cheongchun28.domain.reservation.entity.ReservationStatus;
import com.example.cheongchun28.domain.reservation.repository.ReservationRepository;
import com.example.cheongchun28.domain.reservation.service.ReservationService;
import com.example.cheongchun28.domain.user.entity.User;
import com.example.cheongchun28.domain.user.repository.UserRepository;
import com.example.cheongchun28.global.common.dto.CustomResponseDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class AdminService {

    private final UserRepository userRepository;
    private final ReservationRepository reservationRepository;
    private final ReservationService reservationService;

    public CustomResponseDto setPermission(AdminDto.setPermissionRequestDto requestDto) throws SQLException {
        User user = userRepository.findByUserEmail(requestDto.getEmail()).orElseThrow(
                () -> new SQLException("찾으시는 값이 없습니다.")
        );

        user.setRole(requestDto.getRole());
        userRepository.save(user);
        return new CustomResponseDto(200);
    }

    public CustomResponseDto deleteUser(AdminDto.deleteUserRequestDto requestDto) throws SQLException {
        User user = userRepository.findByUserEmail(requestDto.getEmail()).orElseThrow(
                () -> new SQLException("찾으시는 값이 없습니다.")
        );
        user.setDeleted(true);
        userRepository.save(user);
        return new CustomResponseDto(200);
    }

    public CustomResponseDto setUser(AdminDto.setUserRequestDto requestDto) throws SQLException {
        User user = userRepository.findByUserEmail(requestDto.getEmail()).orElseThrow(
                () -> new SQLException("찾으시는 값이 없습니다.")
        );

        user.setNickName(requestDto.getNickName());
        user.setEmpNumber(requestDto.getEmpNumber());

        userRepository.save(user);
        return new CustomResponseDto(200);
    }


    public List<ReservationResponseDto.ReservationAllResponseDto> getAllReservations() {
        List<Reservation> reservations = reservationRepository.findAll();
        List<ReservationResponseDto.ReservationAllResponseDto> reservationAllResponseDto = new ArrayList<>();
        for (Reservation reservation : reservations) {
           List<String> memberUser = reservation.getReservationMembers()
                    .stream()
                    .map(res -> res.getUser().getNickName())
                    .collect(Collectors.toList());

            log.info("memberUser:{}", memberUser.size());
            ReservationResponseDto.ReservationAllResponseDto response = ReservationResponseDto.ReservationAllResponseDto
                    .builder()
                    .reservationCode(reservation.getCode())
                    .topic(reservation.getTopic())
                    .status(String.valueOf(reservation.getStatus()))
                    .nickName(reservation.getUser().getNickName())
                    .roomName(reservation.getRoom().getRoomName())
                    .user(memberUser)
                    .startDate(reservation.getStartDate())
                    .endDate(reservation.getEndDate())
                    .build();
           reservationAllResponseDto.add(response);
        }
        return reservationAllResponseDto;
    }


    @Transactional
    public CustomResponseDto cancelReservation(AdminDto.cancelRequestDto requestDto) {
        Reservation reservation = reservationRepository.findByReservationCode(requestDto.getReservationCode());
        if (reservation.getStatus() != ReservationStatus.CONFIRMED){
            log.error("선택한 회원의 진행중인 예약내역이 없습니다");
            return new CustomResponseDto(400);
        }
        reservationService.deleteReservationAndMember(reservation);
        log.info("선택한 회원의 예약내역을 취소했습니다.");
        return new CustomResponseDto(200);
    }

    public List<ReservationResponseDto.UserAllResponseDto> getAllUserInfo() {
        List<User> users = userRepository.findAll();
        List<ReservationResponseDto.UserAllResponseDto> responseDtos = new ArrayList<>();
        for (User user : users) {
            ReservationResponseDto.UserAllResponseDto dto = new ReservationResponseDto.UserAllResponseDto();
            dto.setEmail(user.getUserEmail());
            dto.setNickName(user.getNickName());
            dto.setEmpNumber(user.getEmpNumber());
            dto.setRole(user.getRole());
            dto.setNotificationAgreement(user.isNotificationAgreement());
            responseDtos.add(dto);
        }
        return responseDtos;
    }
}