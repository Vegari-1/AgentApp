package com.vegari1.devops.agentapp.controller;

import com.vegari1.devops.agentapp.dto.LoginRequest;
import com.vegari1.devops.agentapp.dto.RegisterRequest;
import com.vegari1.devops.agentapp.dto.RegisterResponse;
import com.vegari1.devops.agentapp.mapper.UserMapper;
import com.vegari1.devops.agentapp.model.User;
import com.vegari1.devops.agentapp.service.IUserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@AllArgsConstructor
@RestController
@RequestMapping(value = "/auth")
public class AuthenticationController {

    private final IUserService userService;
    private final UserMapper userMapper;

    @PostMapping("/login")
    public ResponseEntity<String> login(@Valid @RequestBody LoginRequest loginRequest) {
        String token = userService.login(userMapper.toEntity(loginRequest));
        return ResponseEntity.ok(token);
    }

    @PostMapping("/register")
    public ResponseEntity<RegisterResponse> register(@Valid @RequestBody RegisterRequest registerRequest) {
        User user = userService.register(userMapper.toEntity(registerRequest));
        return ResponseEntity.ok(userMapper.toResponse(user));
    }
}
