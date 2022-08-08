package com.vegari1.devops.agentapp.controller;

import com.vegari1.devops.agentapp.dto.*;
import com.vegari1.devops.agentapp.mapper.CommentMapper;
import com.vegari1.devops.agentapp.mapper.CompanyMapper;
import com.vegari1.devops.agentapp.mapper.CompanyRequestMapper;
import com.vegari1.devops.agentapp.model.Comment;
import com.vegari1.devops.agentapp.model.Company;
import com.vegari1.devops.agentapp.model.CompanyRegistrationRequest;
import com.vegari1.devops.agentapp.service.ICompanyService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@AllArgsConstructor
@RestController
@RequestMapping(value = "/api/company")
public class CompanyController {

    private final ICompanyService companyService;
    private final CompanyRequestMapper companyRequestMapper;
    private final CompanyMapper companyMapper;
    private final CommentMapper commentMapper;

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

}
