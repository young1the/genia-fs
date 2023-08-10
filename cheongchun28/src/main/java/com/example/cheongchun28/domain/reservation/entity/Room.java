package com.example.cheongchun28.domain.reservation.entity;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Table(name = "T_ROOM")
@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Room {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ROOM_SEQUENCE_ID")
    private Long id;

    @Column(name = "ROOM_NAME")
    private String roomName;

    @Column(name = "BEAM_PROJECTOR")
    private boolean beamProjector;

    @Column(name = "COMPUTER")
    private boolean computer;

    @Column(name = "BLACKBOARD")
    private boolean blackBoard;

    @Column(name = "CAPACITY")
    private int capacity;

    @JsonIgnore
    @OneToMany(mappedBy = "room", fetch = FetchType.LAZY)
    private final List<Reservation> reservations = new ArrayList<>();


    public boolean isRoomReserved(LocalDateTime startDate, LocalDateTime endDate) {
        for (Reservation reservation : reservations) {
            LocalDateTime reservationStartDate = reservation.getStartDate();
            LocalDateTime reservationEndDate = reservation.getEndDate();
            if (reservationStartDate.isBefore(endDate) && reservationEndDate.isAfter(startDate)) {
                return true;
            }
        }
        return false;
    }

}
