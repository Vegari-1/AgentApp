package com.vegari1.devops.agentapp.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

@Entity
public class Company {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String industrySector;
    private String companyName;
    private String companyEmail;
    private String companyWebsite;
    private String companyInfo;

    @OneToMany(mappedBy = "company")
    private Set<JobOffer> jobOffers;

    @OneToMany(mappedBy = "company")
    private Set<Interview> interviews;

    @OneToMany(mappedBy = "company")
    private Set<Rating> ratings;

    @OneToMany(mappedBy = "company")
    private Set<Comment> comments;

    @OneToMany(mappedBy = "company")
    private Set<Salary> salaries;

    public Company(CompanyRegistrationRequest registrationRequest) {
        this.industrySector = registrationRequest.getIndustrySector();
        this.companyName = registrationRequest.getCompanyName();
        this.companyEmail = registrationRequest.getCompanyEmail();
        this.companyWebsite = registrationRequest.getCompanyWebsite();
        this.companyInfo = registrationRequest.getCompanyInfo();
    }
}
