package com.chunjae.nest.domain.user.repository;

import com.chunjae.nest.domain.user.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Integer> {
}
