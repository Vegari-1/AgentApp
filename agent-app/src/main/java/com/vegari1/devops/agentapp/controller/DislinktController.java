package com.vegari1.devops.agentapp.controller;

import com.vegari1.devops.agentapp.dto.ApiKeyRequest;
import com.vegari1.devops.agentapp.model.Config;
import com.vegari1.devops.agentapp.service.IDislinktService;
import com.vegari1.devops.agentapp.service.IUserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@AllArgsConstructor
@RestController
@RequestMapping(value = "/api/dislinkt")
public class DislinktController {

    private final IUserService userService;
    private final IDislinktService dislinktService;

    @PreAuthorize("hasRole('ROLE_USER')")
    @PostMapping("/api-key")
    public ResponseEntity<Void> storeApiKey(@Valid @RequestBody ApiKeyRequest apiKeyRequest) {
        userService.storeApiKey(apiKeyRequest.getApiKey());
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PreAuthorize("hasRole('ROLE_USER')")
    @PostMapping("/share/{jobOfferId}")
    public ResponseEntity<Void> shareJobOffer(@PathVariable Long jobOfferId) {
        dislinktService.shareJobOffer(jobOfferId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/config")
    public ResponseEntity<Config> updateDislinktConfig(@RequestBody String url) {
        Config config = dislinktService.updateConfigUrl(url);
        return new ResponseEntity<>(config, HttpStatus.OK);
    }
}
