package com.vegari1.devops.agentapp.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CompanyDto {

    private Long id;
    private String industrySector;
    private String companyName;
    private String companyEmail;
    private String companyWebsite;
    private String companyInfo;

}
