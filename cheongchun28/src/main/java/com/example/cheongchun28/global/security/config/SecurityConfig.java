package com.example.cheongchun28.global.security.config;

import com.example.cheongchun28.global.jwt.JwtAuthenticationFilter;
import com.example.cheongchun28.global.jwt.JwtUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.access.channel.ChannelProcessingFilter;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.Arrays;
import java.util.Collections;

@Configuration
@RequiredArgsConstructor
@EnableWebSecurity
@Slf4j
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    private final JwtUtil jwtUtil;
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        log.info("Configuring HttpSecurity");
        http

                .addFilterBefore(new CustomCorsFilter(), ChannelProcessingFilter.class)
                .httpBasic()
                .disable()

                .csrf().disable()
                .headers()
                .frameOptions().disable();
                http
                .authorizeRequests()
                //                .antMatchers("/user").authenticated()   //인증이 필요함(로그인이 필요함)
                //admin
                .antMatchers("/api/admin/permission").hasAnyAuthority("ADMIN", "MANAGER")
                .antMatchers("/api/admin/user").hasAnyAuthority("ADMIN", "MANAGER")

                .antMatchers("/api/admin/reservation").hasAnyAuthority("ADMIN", "MANAGER", "EMPLOYEE")

                //reservation
                .antMatchers("/api/reservation/**").hasAnyAuthority("ADMIN", "MANAGER", "EMPLOYEE", "USER")

                //mypage
                .antMatchers("/api/mypage/**").hasAnyAuthority("ADMIN", "MANAGER", "EMPLOYEE", "USER")

                //email
                .antMatchers("/api/email/reset-passwrod/**").hasAnyAuthority("ADMIN", "MANAGER", "EMPLOYEE", "USER")

//                .antMatchers("/api/user/**").permitAll() // 제한이 없음 (로그인을 하지 않아도 사용 가능)

                .and()
                .addFilterBefore(
                        new JwtAuthenticationFilter(jwtUtil), UsernamePasswordAuthenticationFilter.class);
        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
    }

    // AuthenticationManager Bean 등록
    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }
}