package com.example.cheongchun28.global.security.config;

import com.example.cheongchun28.global.jwt.JwtAuthenticationFilter;
import com.example.cheongchun28.global.jwt.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

@Configuration
@RequiredArgsConstructor
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    private final JwtUtil jwtUtil;

    @Override
    protected void configure(HttpSecurity http) throws Exception {

        http.csrf()
                .disable()
                .authorizeRequests()
                //                .antMatchers("/user").authenticated()   //인증이 필요함(로그인이 필요함)
                //admin
                .antMatchers("/api/admin/user").hasAnyRole("ADMIN", "MANAGER")
                .antMatchers("/api/admin/permission").hasAnyRole("ADMIN", "MANAGER")
                .antMatchers("/api/admin/reservation").hasAnyRole("ADMIN", "MANAGER", "EMPLOYEE")
                .antMatchers("/api/admin/dashboard").hasAnyRole("ADMIN", "MANAGER", "EMPLOYEE")

                //reservation
                .antMatchers("/api/reservation/**").hasAnyRole("ADMIN", "MANAGER", "EMPLOYEE", "USER")

                //mypage
                .antMatchers("/api/mypage/**").hasAnyRole("ADMIN", "MANAGER", "EMPLOYEE", "USER")

                //email
                .antMatchers("/api/email/**").hasAnyRole("ADMIN", "MANAGER", "EMPLOYEE", "USER")

                .antMatchers("/api/user/**").permitAll() // 제한이 없음 (로그인을 하지 않아도 사용 가능)

                .and()
                .addFilterBefore(
                        new JwtAuthenticationFilter(jwtUtil), UsernamePasswordAuthenticationFilter.class);
        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        /*CorsConfiguration configuration = new CorsConfiguration();

        //addAllowedOrigin(): 허용할 도메인을 설정
        configuration.addAllowedOrigin("http://localhost:3000");
        configuration.addAllowedOrigin("http://10.41.0.161:3000");

        //addExposeHeader(): 메서드를 사용하여 클라이언트로 특정 키값을 노출시킬 헤더를 설정.
        configuration.addExposedHeader(JwtUtil.AUTHORIZATION_HEADER);

        //addAllowedHeader(), addAllowedHeader(): 메서드를 사용하여 허용할 HTTP 메
        configuration.addAllowedHeader("*");
        configuration.addAllowedMethod("*");

        configuration.setAllowCredentials(true);
        configuration.validateAllowCredentials();
        configuration.addExposedHeader("Access_Token");

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);

        return source;*/
        CorsConfiguration configuration = new CorsConfiguration();

        configuration.setAllowedOriginPatterns(Arrays.asList("*"));
        configuration.setAllowedMethods(Arrays.asList("HEAD", "POST", "GET", "DELETE", "PUT"));
        configuration.setAllowedHeaders(Arrays.asList("*"));
        configuration.setAllowCredentials(true);
        //addExposeHeader(): 메서드를 사용하여 클라이언트로 특정 키값을 노출시킬 헤더를 설정.
        configuration.addExposedHeader(JwtUtil.AUTHORIZATION_HEADER);
//        configuration.addExposedHeader("access-control-allow-origin");
//        configuration.addExposedHeader("access-control-allow-methods");
//        configuration.addExposedHeader("access-control-allow-headers");
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
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