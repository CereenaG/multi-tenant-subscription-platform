package com.payflow.payflow.controller;

import com.payflow.payflow.dto.AuthResponse;
import com.payflow.payflow.dto.LoginRequest;
import com.payflow.payflow.dto.RegisterRequest;
import com.payflow.payflow.dto.UserResponse;
import com.payflow.payflow.service.AuthService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<UserResponse> register(@Valid @RequestBody RegisterRequest register){
        return ResponseEntity.status(HttpStatus.CREATED).body(authService.register(register));
    }
    //change the response to authresponse
    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@Valid @RequestBody LoginRequest login){
        return ResponseEntity.ok(authService.login(login));
    }
    }
