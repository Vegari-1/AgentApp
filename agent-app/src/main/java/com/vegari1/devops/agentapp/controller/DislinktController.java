package com.vegari1.devops.agentapp.controller;

import com.vegari1.devops.agentapp.dto.ApiKeyRequest;
import com.vegari1.devops.agentapp.mapper.UserMapper;
import com.vegari1.devops.agentapp.service.IUserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@AllArgsConstructor
@RestController
@RequestMapping(value = "/api/dislinkt")
public class DislinktController {

    private final IUserService userService;

    @PreAuthorize("hasRole('ROLE_USER')")
    @PostMapping("/api-key")
    public ResponseEntity<Void> storeApiKey(@Valid @RequestBody ApiKeyRequest apiKeyRequest) {
        userService.storeApiKey(apiKeyRequest.getApiKey());
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

}
