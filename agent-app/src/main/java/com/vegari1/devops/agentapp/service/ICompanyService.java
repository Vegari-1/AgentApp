package com.vegari1.devops.agentapp.service;

import com.vegari1.devops.agentapp.exception.EntityExistsException;
import com.vegari1.devops.agentapp.exception.EntityNotFoundException;
import com.vegari1.devops.agentapp.exception.ForbiddenException;
import com.vegari1.devops.agentapp.model.*;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

public interface ICompanyService {

    List<Company> getCompanies();

    Company getCompanyById(Long companyId) throws EntityNotFoundException;

    Company updateCompanyInfo(Long companyId, Company editCompany) throws EntityNotFoundException, ForbiddenException;

    CompanyRegistrationRequest createCompanyRegReq(CompanyRegistrationRequest companyRegReq)
            throws EntityExistsException;

    List<CompanyRegistrationRequest> getCompanyRegReqs();

    Company acceptCompanyRequest(Long companyRequestId);

    void declineCompanyRequest(Long companyRequestId);

    Comment createCompanyComment(Comment comment, Long companyId) throws EntityNotFoundException, ForbiddenException;

    List<Comment> getCompanyComments(Long companyId) throws EntityNotFoundException;

    Interview createCompanyInterview(Interview interview, Long companyId) throws EntityNotFoundException, ForbiddenException;

    List<Interview> getCompanyInterviews(Long companyId);

    Salary createCompanySalary(Salary salary, Long companyId);

    List<Salary> getCompanySalaries(Long companyId);

    Map<String, Double> getCompanyMeanSalaries(Long companyId);
}
