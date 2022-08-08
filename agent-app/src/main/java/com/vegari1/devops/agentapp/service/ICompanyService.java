package com.vegari1.devops.agentapp.service;

import com.vegari1.devops.agentapp.exception.EntityExistsException;
import com.vegari1.devops.agentapp.exception.EntityNotFoundException;
import com.vegari1.devops.agentapp.exception.ForbiddenException;
import com.vegari1.devops.agentapp.model.Comment;
import com.vegari1.devops.agentapp.model.Company;
import com.vegari1.devops.agentapp.model.CompanyRegistrationRequest;
import com.vegari1.devops.agentapp.model.Interview;

import java.util.List;

public interface ICompanyService {

    Company getCompanyById(Long companyId) throws EntityNotFoundException;

    Company updateCompanyInfo(Long companyId, String companyInfo) throws EntityNotFoundException, ForbiddenException;

    CompanyRegistrationRequest createCompanyRegReq(CompanyRegistrationRequest companyRegReq)
            throws EntityExistsException;

    Company acceptCompanyRequest(Long companyRequestId);

    void declineCompanyRequest(Long companyRequestId);

    Comment createCompanyComment(Comment comment, Long companyId) throws EntityNotFoundException, ForbiddenException;

    List<Comment> getCompanyComments(Long companyId) throws EntityNotFoundException;

    Interview createCompanyInterview(Interview interview, Long companyId) throws EntityNotFoundException, ForbiddenException;

    List<Interview> getCompanyInterviews(Long companyId);
}
