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
public class JobOfferResponse {

    private Long id;
    private String title;
    private String position;
    private String jobDescription;
    private String qualifications;
    private Date startDate;
    private Date endDate;
    private CompanyDto company;

}
