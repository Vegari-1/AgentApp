package com.vegari1.devops.agentapp.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SalaryResponse {

    private Long salaryId;
    private double amount;
    private String position;
    private Date timestamp;
    private UserResponse author;

}
