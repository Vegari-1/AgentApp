package com.vegari1.devops.agentapp.controller;

import com.vegari1.devops.agentapp.dto.*;
import com.vegari1.devops.agentapp.mapper.CommentMapper;
import com.vegari1.devops.agentapp.mapper.CompanyMapper;
import com.vegari1.devops.agentapp.mapper.CompanyRequestMapper;
import com.vegari1.devops.agentapp.mapper.InterviewMapper;
import com.vegari1.devops.agentapp.model.Comment;
import com.vegari1.devops.agentapp.model.Company;
import com.vegari1.devops.agentapp.model.CompanyRegistrationRequest;
import com.vegari1.devops.agentapp.model.Interview;
import com.vegari1.devops.agentapp.service.ICompanyService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping(value = "/api/company")
public class CompanyController {

    private final ICompanyService companyService;
    private final CompanyRequestMapper companyRequestMapper;
    private final CompanyMapper companyMapper;
    private final CommentMapper commentMapper;
    private final InterviewMapper interviewMapper;

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
    public ResponseEntity<CommentResponse> createCompanyComment(
            @PathVariable Long companyId,
            @Valid @RequestBody CommentRequest commentRequest) {
        Comment comment = companyService.createCompanyComment(commentMapper.toEntity(commentRequest), companyId);
        return new ResponseEntity<>(commentMapper.toResponse(comment), HttpStatus.CREATED);
    }

    @PreAuthorize("hasRole('ROLE_USER')")
    @GetMapping("/{companyId}/comment")
    public ResponseEntity<List<CommentResponse>> getAllCompanyComments(
            @PathVariable Long companyId) {
        List<Comment> comments = companyService.getCompanyComments(companyId);
        return ResponseEntity.ok(commentMapper.toResponseList(comments));
    }

    @PreAuthorize("hasRole('ROLE_USER')")
    @PostMapping("/{companyId}/interview")
    public ResponseEntity<InterviewResponse> createCompanyInterview(
            @PathVariable Long companyId,
            @Valid @RequestBody InterviewRequest interviewRequest) {
        Interview interview = companyService.createCompanyInterview(interviewMapper.toEntity(interviewRequest), companyId);
        return new ResponseEntity<>(interviewMapper.toResponse(interview), HttpStatus.CREATED);
    }

    @PreAuthorize("hasRole('ROLE_USER')")
    @GetMapping("/{companyId}/interview")
    public ResponseEntity<List<InterviewResponse>> getAllCompanyInterviews(
            @PathVariable Long companyId) {
        List<Interview> interviews = companyService.getCompanyInterviews(companyId);
        return ResponseEntity.ok(interviewMapper.toResponseList(interviews));
    }
}
