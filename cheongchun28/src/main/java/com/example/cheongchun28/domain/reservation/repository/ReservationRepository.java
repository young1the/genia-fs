package com.example.cheongchun28.domain.reservation.repository;

import com.example.cheongchun28.domain.reservation.entity.Reservation;
import com.example.cheongchun28.domain.reservation.entity.Room;
import com.example.cheongchun28.domain.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation, Long> {

    List<Reservation> findByUserAndStartDateBetweenAndEndDateBetween(User user, LocalDateTime startDate1, LocalDateTime endDate1, LocalDateTime startDate2, LocalDateTime endDate2);

    Optional<Reservation> findByCode(String code);

    @Query("SELECT r FROM Reservation r WHERE r.status = '0' AND r.user.userEmail = :email")
    Reservation findWaitingReservationByEmail(@Param("email") String email);

    @Query(value = "SELECT * FROM t_reservation r WHERE r.reservation_Code = :code AND r.status In ('0')" , nativeQuery = true)
    Reservation findByReservationCode(@Param("code") String code);

    List<Reservation> findAllByUser(User user);

    List<Reservation> findAllByRoom(Room room);
    @Query(value = "SELECT * FROM t_reservation r WHERE r.status != 'CANCELLED' AND (r.start_date < ?2 AND r.end_date > ?1)", nativeQuery = true)
    List<Reservation> findOverlappingReservationsInDateRange(@Param("startDate") LocalDateTime startDate, @Param("endDate") LocalDateTime endDate);
}
