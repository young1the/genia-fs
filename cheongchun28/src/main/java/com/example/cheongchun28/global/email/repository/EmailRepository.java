package com.example.cheongchun28.global.email.repository;

import com.example.cheongchun28.global.email.entity.EmailEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface EmailRepository extends JpaRepository<EmailEntity, Long> {

    Optional<EmailEntity> findByEmail(String email);

    Optional<EmailEntity> deleteByEmail(String email);
}
