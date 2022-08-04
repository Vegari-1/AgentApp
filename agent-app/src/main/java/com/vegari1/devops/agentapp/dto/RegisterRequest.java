package com.vegari1.devops.agentapp.dto;

import lombok.*;

import javax.validation.constraints.NotEmpty;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class RegisterRequest {

    @NotEmpty(message = "Username must not be empty")
    private String username;
    @NotEmpty(message = "Password must not be empty")
    private String password;
    @NotEmpty(message = "Name must not be empty")
    private String name;
    @NotEmpty(message = "Surname must not be empty")
    private String surname;

}
