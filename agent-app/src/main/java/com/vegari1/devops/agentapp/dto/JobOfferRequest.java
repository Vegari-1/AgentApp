package com.vegari1.devops.agentapp.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class JobOfferRequest {

    @NotEmpty(message = "Title must not be empty")
    private String title;
    @NotEmpty(message = "Position must not be empty")
    private String position;
    @NotEmpty(message = "Job description must not be empty")
    private String jobDescription;
    @NotEmpty(message = "Qualifications must not be empty")
    private String qualifications;
    @NotNull(message = "Start date must not be empty")
    private Date startDate;
    @NotNull(message = "End date must not be empty")
    private Date endDate;

}
