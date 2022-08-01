package com.vegari1.devops.agentapp.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@AllArgsConstructor
@RestController
@RequestMapping(value = "/api/test")
public class TestController {

    @GetMapping
    public ResponseEntity<String> testCors() {
        return new ResponseEntity<>("Hello from the back", HttpStatus.OK);
    }
}
