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
public class DislinktJobOfferRequest {

    @NotEmpty(message = "API key must not be empty")
    private String apiKey;
    @NotEmpty(message = "Position name must not be empty")
    private String positionName;
    @NotEmpty(message = "Job description must not be empty")
    private String description;
    @NotEmpty(message = "Qualifications must not be empty")
    private String[] qualifications;
    @NotEmpty(message = "Company link must not be empty")
    private String companyLink;

}
