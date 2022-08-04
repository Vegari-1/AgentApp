package com.vegari1.devops.agentapp.dto;

import lombok.Data;

import javax.validation.constraints.NotEmpty;

@Data
public class LoginRequest {

    @NotEmpty(message = "Username must not be empty")
    private String username;
    @NotEmpty(message = "Password must not be empty")
    private String password;

}
