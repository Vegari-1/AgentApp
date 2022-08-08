package com.vegari1.devops.agentapp.controller;

import com.vegari1.devops.agentapp.dto.JobOfferRequest;
import com.vegari1.devops.agentapp.dto.JobOfferResponse;
import com.vegari1.devops.agentapp.dto.RegisterRequest;
import com.vegari1.devops.agentapp.dto.RegisterResponse;
import com.vegari1.devops.agentapp.mapper.JobOfferMapper;
import com.vegari1.devops.agentapp.model.JobOffer;
import com.vegari1.devops.agentapp.model.User;
import com.vegari1.devops.agentapp.service.IJobOfferService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping(value = "/api/job-offer")
public class JobOfferController {

    private final IJobOfferService jobOfferService;
    private final JobOfferMapper jobOfferMapper;

    @PreAuthorize("hasRole('ROLE_USER')")
    @PostMapping("/{companyId}")
    public ResponseEntity<JobOfferResponse> createJobOffer(
            @PathVariable Long companyId,
            @Valid @RequestBody JobOfferRequest jobOfferRequest) {
        JobOffer jobOffer = jobOfferService.createJobOffer(jobOfferMapper.toEntity(jobOfferRequest), companyId);
        return new ResponseEntity<>(jobOfferMapper.toResponse(jobOffer), HttpStatus.CREATED);
    }

    @PreAuthorize("hasRole('ROLE_USER')")
    @GetMapping("/{jobOfferId}")
    public ResponseEntity<JobOfferResponse> getJobOfferById(
            @PathVariable Long jobOfferId) {
        JobOffer jobOffer = jobOfferService.getJobOfferById(jobOfferId);
        return new ResponseEntity<>(jobOfferMapper.toResponse(jobOffer), HttpStatus.OK);
    }

    @PreAuthorize("hasRole('ROLE_USER')")
    @GetMapping("/company/{companyId}")
    public ResponseEntity<List<JobOfferResponse>> getAllCompanyJobOffers(
            @PathVariable Long companyId) {
        List<JobOffer> jobOffers = jobOfferService.getJobOfferByCompanyId(companyId);
        return new ResponseEntity<>(jobOfferMapper.toResponseList(jobOffers), HttpStatus.OK);
    }

}
