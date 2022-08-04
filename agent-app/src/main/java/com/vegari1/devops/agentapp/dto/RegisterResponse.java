package com.vegari1.devops.agentapp.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class RegisterResponse {

    private Long id;
    private String username;
    private String name;
    private String surname;

}
