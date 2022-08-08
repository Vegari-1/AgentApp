package com.vegari1.devops.agentapp.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SalaryRequest {

    @NotNull(message = "Salary must not be empty")
    @Min(value = 0, message = "Salary amount must not be less than 0")
    private double amount;

    @NotEmpty(message = "Position must not be empty")
    private String position;

}
