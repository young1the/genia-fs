package com.example.cheongchun28.domain.user.repository;

import com.example.cheongchun28.domain.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.swing.text.html.Option;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUserEmail(String email);

    User findByNickName(String nickName);
}
