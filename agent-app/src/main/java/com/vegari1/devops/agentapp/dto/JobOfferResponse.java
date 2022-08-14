package com.vegari1.devops.agentapp.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class JobOfferResponse {

    private Long id;
    private String title;
    private String position;
    private String jobDescription;
    private List<String> qualifications;
    private Date startDate;
    private Date endDate;
    private Date timestamp;
    private CompanyDto company;

}
