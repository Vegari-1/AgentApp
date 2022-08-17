package com.vegari1.devops.agentapp.controller;

import com.vegari1.devops.agentapp.dto.*;
import com.vegari1.devops.agentapp.mapper.*;
import com.vegari1.devops.agentapp.model.*;
import com.vegari1.devops.agentapp.service.ICompanyService;
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
    private final SalaryMapper salaryMapper;
    private final CompanyMapper companyMapper;
    private final CommentMapper commentMapper;
    private final InterviewMapper interviewMapper;
    private final CompanyRequestMapper companyRequestMapper;

    @PreAuthorize("hasAnyRole('ROLE_USER', 'ROLE_ADMIN')")
    @GetMapping("/{companyId}")
    public ResponseEntity<CompanyDto> getCompanyById(@PathVariable Long companyId) {
        Company company = companyService.getCompanyById(companyId);
        return ResponseEntity.ok(companyMapper.toResponse(company));
    }

    @PreAuthorize("hasRole('ROLE_USER')")
    @PatchMapping("/{companyId}")
    public ResponseEntity<CompanyDto> updateCompanyInfo(
            @PathVariable Long companyId, @RequestBody CompanyInfoRequest companyInfoRequest) {
        Company company = companyService.updateCompanyInfo(companyId, companyInfoRequest.getCompanyInfo());
        return ResponseEntity.ok(companyMapper.toResponse(company));
    }

    @PreAuthorize("hasRole('ROLE_USER')")
    @PostMapping("/request")
    public ResponseEntity<CompanyRequestDto> createCompanyRegistrationRequest(
            @Valid @RequestBody CompanyRequestDto companyRequestDto) {
        CompanyRegistrationRequest companyRequest =
                companyService.createCompanyRegReq(companyRequestMapper.toEntity(companyRequestDto));
        return new ResponseEntity<>(companyRequestMapper.toResponse(companyRequest), HttpStatus.CREATED);
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @GetMapping("/request")
    public ResponseEntity<List<CompanyRequestDto>> getCompanyRegistrationRequest() {
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
