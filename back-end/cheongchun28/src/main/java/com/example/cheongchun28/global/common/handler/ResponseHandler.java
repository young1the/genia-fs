package com.example.cheongchun28.global.common.handler;

import com.example.cheongchun28.global.common.dto.CustomResponseDto;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

@Component
public class ResponseHandler {
    public ResponseEntity<CustomResponseDto> responseEntity(CustomResponseDto customResponseDto) {
        if (customResponseDto.getStatusCode() == 200) {
            return ResponseEntity.ok(customResponseDto);
        } else {
            return ResponseEntity.badRequest().body(customResponseDto);
        }
    }
}
