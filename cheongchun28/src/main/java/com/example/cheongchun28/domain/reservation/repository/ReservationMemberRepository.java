package com.example.cheongchun28.domain.reservation.repository;

import com.example.cheongchun28.domain.reservation.entity.Reservation;
import com.example.cheongchun28.domain.reservation.entity.ReservationMember;
import com.example.cheongchun28.domain.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository

public interface ReservationMemberRepository extends JpaRepository<ReservationMember, Long> {

    ReservationMember findByReservationAndUser(Reservation reservation, User user);
    @Query(value ="select * from t_reservation_member where user_sequence_id=?", nativeQuery = true)
    List<ReservationMember> findReservationMemberByUser(User user);
    @Query(value = "SELECT * FROM t_reservation_member r WHERE r.status = :status AND r.reservation_sequence_id = :reservationId", nativeQuery = true)
    List<ReservationMember> findByReservation(@Param("status") boolean status, @Param("reservationId") Long reservationId);

}