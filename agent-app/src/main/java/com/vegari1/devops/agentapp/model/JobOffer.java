package com.vegari1.devops.agentapp.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

@Entity
public class JobOffer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String position;
    private String jobDescription;
    private String qualifications;
    private Date startDate;
    private Date endDate;

    @ManyToOne
    @JoinColumn(name = "company_id", nullable = false)
    private Company company;

}
