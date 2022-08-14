package com.vegari1.devops.agentapp.model;

import com.vegari1.devops.agentapp.repository.ListToStringConverter;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

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
    @Convert(converter = ListToStringConverter.class)
    private List<String> qualifications;
    private Date startDate;
    private Date endDate;

    private Date timestamp;

    @ManyToOne
    @JoinColumn(name = "company_id", nullable = false)
    private Company company;

}
