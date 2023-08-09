package com.example.cheongchun28.domain.admin.service;

import com.example.cheongchun28.domain.admin.dto.AdminDto;
import com.example.cheongchun28.domain.reservation.dto.ReservationResponseDto;
import com.example.cheongchun28.domain.reservation.entity.Reservation;
import com.example.cheongchun28.domain.reservation.repository.ReservationRepository;
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
                    .nickName(reservation.getUser().getNickName())
                    .roomName(reservation.getRoom().getRoomName())
                    .resUser(resUser)
                    .startTime(reservation.getStartDate())
                    .endTime(reservation.getEndDate())
                    .build();
//                    new ReservationResponseDto.ReservationAllResponseDto(
//                    reservation.getUser().getNickName(),
//                    reservation.getRoom().getRoomName(),
//                    resUser,
//                    reservation.getStartDate(),
//                    reservation.getEndDate()
//            );
           reservationAllResponseDto.add(response);
        }
        return reservationAllResponseDto;
    }

}
