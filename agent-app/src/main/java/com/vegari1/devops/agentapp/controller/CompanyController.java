package com.vegari1.devops.agentapp.controller;

import com.vegari1.devops.agentapp.dto.*;
import com.vegari1.devops.agentapp.mapper.*;
import com.vegari1.devops.agentapp.model.*;
import com.vegari1.devops.agentapp.service.ICompanyService;
import com.vegari1.devops.agentapp.service.IJobOfferService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Map;

@AllArgsConstructor
@RestController
@RequestMapping(value = "/api/company")
public class CompanyController {

    private final ICompanyService companyService;
    private final IJobOfferService jobOfferService;
    private final SalaryMapper salaryMapper;
    private final CompanyMapper companyMapper;
    private final CommentMapper commentMapper;
    private final JobOfferMapper jobOfferMapper;
    private final InterviewMapper interviewMapper;
    private final CompanyRequestMapper companyRequestMapper;

    @PreAuthorize("hasRole('ROLE_USER')")
    @GetMapping
    public ResponseEntity<List<CompanyDto>> getCompanies() {
        List<Company> companies = companyService.getCompanies();
        return ResponseEntity.ok(companyMapper.toResponseList(companies));
    }

    @PreAuthorize("hasRole('ROLE_USER')")
    @GetMapping("/{companyId}")
    public ResponseEntity<CompanyDto> getCompanyById(@PathVariable Long companyId) {
        Company company = companyService.getCompanyById(companyId);
        return ResponseEntity.ok(companyMapper.toResponse(company));
    }

    @PreAuthorize("hasRole('ROLE_USER')")
    @PutMapping("/{companyId}")
    public ResponseEntity<CompanyDto> updateCompany(
            @PathVariable Long companyId, @RequestBody CompanyDto companyEditRequest) {
        Company company = companyService.updateCompanyInfo(companyId, companyMapper.toEntity(companyEditRequest));
        return ResponseEntity.ok(companyMapper.toResponse(company));
    }

    @PreAuthorize("hasRole('ROLE_USER')")
    @PostMapping("/request")
    public ResponseEntity<CompanyDto> createCompanyRegistrationRequest(
            @Valid @RequestBody CompanyDto companyRequestDto) {
        CompanyRegistrationRequest companyRequest =
                companyService.createCompanyRegReq(companyRequestMapper.toEntity(companyRequestDto));
        return new ResponseEntity<>(companyRequestMapper.toResponse(companyRequest), HttpStatus.CREATED);
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @GetMapping("/request")
    public ResponseEntity<List<CompanyDto>> getCompanyRegistrationRequest() {
        List<CompanyRegistrationRequest> companyRequests = companyService.getCompanyRegReqs();
        return ResponseEntity.ok(companyRequestMapper.toResponseList(companyRequests));
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @PostMapping("/request/{companyRequestId}")
    public ResponseEntity<CompanyDto> acceptCompanyRegistrationRequest(
            @PathVariable Long companyRequestId) {
        Company company = companyService.acceptCompanyRequest(companyRequestId);
        return new ResponseEntity<>(companyMapper.toResponse(company), HttpStatus.CREATED);
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @DeleteMapping("/request/{companyRequestId}")
    public ResponseEntity<Void> declineCompanyRegistrationRequest(
            @PathVariable Long companyRequestId) {
        companyService.declineCompanyRequest(companyRequestId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PreAuthorize("hasRole('ROLE_USER')")
    @GetMapping("/{companyId}/job-offer")
    public ResponseEntity<List<JobOfferResponse>> getAllCompanyJobOffers(
            @PathVariable Long companyId) {
        List<JobOffer> jobOffers = jobOfferService.getJobOfferByCompanyId(companyId);
        return new ResponseEntity<>(jobOfferMapper.toResponseList(jobOffers), HttpStatus.OK);
    }

    @PreAuthorize("hasRole('ROLE_USER')")
    @PostMapping("/{companyId}/job-offer")
    public ResponseEntity<JobOfferResponse> createJobOffer(
            @PathVariable Long companyId,
            @Valid @RequestBody JobOfferRequest jobOfferRequest) {
        JobOffer jobOffer = jobOfferService.createJobOffer(jobOfferMapper.toEntity(jobOfferRequest), companyId);
        return new ResponseEntity<>(jobOfferMapper.toResponse(jobOffer), HttpStatus.CREATED);
    }

    @PreAuthorize("hasRole('ROLE_USER')")
    @PostMapping("/{companyId}/comment")
    public ResponseEntity<ReviewResponse> createCompanyComment(
            @PathVariable Long companyId,
            @Valid @RequestBody ReviewRequest commentRequest) {
        Comment comment = companyService.createCompanyComment(commentMapper.toEntity(commentRequest), companyId);
        return new ResponseEntity<>(commentMapper.toResponse(comment), HttpStatus.CREATED);
    }

    @PreAuthorize("hasRole('ROLE_USER')")
    @GetMapping("/{companyId}/comment")
    public ResponseEntity<List<ReviewResponse>> getAllCompanyComments(
            @PathVariable Long companyId) {
        List<Comment> comments = companyService.getCompanyComments(companyId);
        return ResponseEntity.ok(commentMapper.toResponseList(comments));
    }

    @PreAuthorize("hasRole('ROLE_USER')")
    @PostMapping("/{companyId}/interview")
    public ResponseEntity<ReviewResponse> createCompanyInterview(
            @PathVariable Long companyId,
            @Valid @RequestBody ReviewRequest interviewRequest) {
        Interview interview = companyService.createCompanyInterview(interviewMapper.toEntity(interviewRequest), companyId);
        return new ResponseEntity<>(interviewMapper.toResponse(interview), HttpStatus.CREATED);
    }

    @PreAuthorize("hasRole('ROLE_USER')")
    @GetMapping("/{companyId}/interview")
    public ResponseEntity<List<ReviewResponse>> getAllCompanyInterviews(
            @PathVariable Long companyId) {
        List<Interview> interviews = companyService.getCompanyInterviews(companyId);
        return ResponseEntity.ok(interviewMapper.toResponseList(interviews));
    }

    @PreAuthorize("hasRole('ROLE_USER')")
    @PostMapping("/{companyId}/salary")
    public ResponseEntity<SalaryResponse> createCompanySalary(
            @PathVariable Long companyId,
            @Valid @RequestBody SalaryRequest salaryRequest) {
        Salary salary = companyService.createCompanySalary(salaryMapper.toEntity(salaryRequest), companyId);
        return new ResponseEntity<>(salaryMapper.toResponse(salary), HttpStatus.CREATED);
    }

    @PreAuthorize("hasRole('ROLE_USER')")
    @GetMapping("/{companyId}/salary")
    public ResponseEntity<List<SalaryResponse>> getAllCompanySalaries(
            @PathVariable Long companyId) {
        List<Salary> salaries = companyService.getCompanySalaries(companyId);
        return ResponseEntity.ok(salaryMapper.toResponseList(salaries));
    }

    @PreAuthorize("hasRole('ROLE_USER')")
    @GetMapping("/{companyId}/salary/mean")
    public ResponseEntity<List<SalaryMeanResponse>> getAllCompanyMeanSalaries(
            @PathVariable Long companyId) {
        Map<String, Double> meanSalaries = companyService.getCompanyMeanSalaries(companyId);
        return ResponseEntity.ok(salaryMapper.toResponseList(meanSalaries));
    }
}
