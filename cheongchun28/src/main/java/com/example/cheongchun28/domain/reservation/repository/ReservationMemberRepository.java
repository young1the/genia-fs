package com.example.cheongchun28.domain.reservation.repository;

import com.example.cheongchun28.domain.reservation.entity.Reservation;
import com.example.cheongchun28.domain.reservation.entity.ReservationMember;
import com.example.cheongchun28.domain.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository

public interface ReservationMemberRepository extends JpaRepository<ReservationMember, Long> {

    ReservationMember findByReservationAndUser(Reservation reservation, User user);

    @Query(value = "SELECT * FROM t_reservation_member r WHERE r.status = :status AND r.reservation_sequence_id = :reservationId", nativeQuery = true)
    List<ReservationMember> findByReservation(@Param("status") boolean status, @Param("reservationId") Long reservationId);

    @Query(value = "SELECT * FROM t_reservation_member r WHERE r.status = :status AND r.user_sequence_id = :user_sequence_id", nativeQuery = true)
    Optional<ReservationMember> findByStatusAndUser(@Param("status") boolean status, @Param("user_sequence_id") Long user_sequence_id);

}