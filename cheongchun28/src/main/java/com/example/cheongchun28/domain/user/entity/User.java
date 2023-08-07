package com.example.cheongchun28.domain.user.entity;

import com.example.cheongchun28.domain.reservation.entity.Reservation;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@NoArgsConstructor
@EntityListeners(AuditingEntityListener.class)
@Data
@Entity
@Table(name = "T_USER")
public class User implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "USER_SEQUENCE_ID", nullable = false)
    private Long userSequenceId;

    @CreatedDate
    @Column(name = "CREATED_AT", nullable = false)
    private LocalDateTime createdAt;

    @LastModifiedDate
    @Column(name = "MODIFIED_AT")
    private LocalDateTime modifiedAt;

    @Column(name = "ROLE", nullable = false)
    private String role;

    @Column(name = "EMAIL", nullable = false, unique = true)
    private String userEmail;

    @Column(name = "PASSWORD", nullable = false)
    private String encodedPassword;

    @Column(name = "NICK_NAME", nullable = false, unique = true)
    private String nickName;

    @Column(name = "PROFILE_IMAGE", nullable = false)
    private String profileImage;

    @Column(name = "DELETED", nullable = false)
    private boolean deleted;

    @Column(name = "EMP_NUMBER", unique = true)
    private String empNumber;

    @Column(name = "NOTIFICATION_AGREEMENT", nullable = false)
    private boolean notificationAgreement;

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    private List<Reservation> reservations = new ArrayList<>();


    public User(String userEmail, String password, String userName, String profileImage, String empNumber) {
        this.role = "USER";
        this.userEmail = userEmail;
        this.encodedPassword = password;
        this.nickName = userName;
        this.profileImage = profileImage;
        this.deleted = false;
        this.empNumber = empNumber;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        String authority = this.getRole();
        SimpleGrantedAuthority simpleGrantedAuthority = new SimpleGrantedAuthority(authority);
        Collection<GrantedAuthority> authorities = new ArrayList<>();
        authorities.add(simpleGrantedAuthority);

        return authorities;
    }


    @Override
    public String getUsername() {
        return this.userEmail;
    }
    @Override
    public String getPassword() {
        return this.encodedPassword;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
