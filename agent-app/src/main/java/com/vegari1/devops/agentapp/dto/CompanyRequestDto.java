package com.vegari1.devops.agentapp.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotEmpty;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CompanyRequestDto {

    private Long id;

    @NotEmpty(message = "Industry sector must not be empty")
    private String industrySector;
    @NotEmpty(message = "Company name must not be empty")
    private String companyName;
    @NotEmpty(message = "Company email must not be empty")
    private String companyEmail;
    @NotEmpty(message = "Company website must not be empty")
    private String companyWebsite;
    @NotEmpty(message = "Company info must not be empty")
    private String companyInfo;

}
