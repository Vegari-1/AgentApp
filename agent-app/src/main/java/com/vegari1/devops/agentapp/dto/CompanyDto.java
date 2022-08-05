package com.vegari1.devops.agentapp.dto;

import com.vegari1.devops.agentapp.model.Comment;
import com.vegari1.devops.agentapp.model.Interview;
import com.vegari1.devops.agentapp.model.Rating;
import com.vegari1.devops.agentapp.model.Salary;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.OneToMany;
import java.util.Set;

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
//    private Set<JobOffer> jobOffers;
//    private Set<Interview> interviews;
//    private Set<Rating> ratings;
//    private Set<Comment> comments;
//    private Set<Salary> salaries;

}
