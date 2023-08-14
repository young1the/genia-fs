package com.example.cheongchun28.domain.admin.service;

import com.example.cheongchun28.domain.admin.dto.AdminDto;
import com.example.cheongchun28.domain.reservation.dto.ReservationResponseDto;
import com.example.cheongchun28.domain.reservation.entity.Reservation;
import com.example.cheongchun28.domain.reservation.repository.ReservationRepository;
import com.example.cheongchun28.domain.reservation.entity.ReservationMember;
import com.example.cheongchun28.domain.reservation.repository.ReservationMemberRepository;
import com.example.cheongchun28.domain.user.entity.User;
import com.example.cheongchun28.domain.user.repository.UserRepository;
import com.example.cheongchun28.global.common.dto.CustomResponseDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

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
    private final ReservationMemberRepository reservationMemberRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

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
        user.setEncodedPassword(bCryptPasswordEncoder.encode(requestDto.getPassword()));
        user.setEmpNumber(requestDto.getEmpNumber());

        userRepository.save(user);
        return new CustomResponseDto(200);
    }


    public List<ReservationResponseDto.ReservationAllResponseDto> getAllReservations() {
        List<Reservation> reservations = reservationRepository.findAll();
        List<ReservationResponseDto.ReservationAllResponseDto> reservationAllResponseDto = new ArrayList<>();
        for (Reservation reservation : reservations) {
            List<String> resUser = reservation.getRoom()
                    .getReservations()
                    .stream()
                    .map(res -> res.getUser().getNickName())
                    .collect(Collectors.toList());

            ReservationResponseDto.ReservationAllResponseDto response = ReservationResponseDto.ReservationAllResponseDto
                    .builder()
                    .reservationCode(reservation.getCode())
                    .nickName(reservation.getUser().getNickName())
                    .roomName(reservation.getRoom().getRoomName())
                    .user(resUser)
                    .startDate(reservation.getStartDate())
                    .endDate(reservation.getEndDate())
                    .build();
           reservationAllResponseDto.add(response);
        }
        return reservationAllResponseDto;
    }


    public CustomResponseDto canselReservation(AdminDto.canselRequestDto requestDto) throws SQLException{
        User user = userRepository.findByNickName(requestDto.getNickName());

        ReservationMember member = reservationMemberRepository.findByStatusAndUser(false, user.getUserSequenceId()).orElseThrow(
                () -> new SQLException("찾으시는 값이 없습니다.")
        );

        reservationMemberRepository.delete(member);

        return new CustomResponseDto(200);
    }

}