package com.chunjae.nest.domain.user.repository;

import com.chunjae.nest.domain.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {

    User findByUserId(String userId);
}
