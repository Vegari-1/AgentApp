package com.vegari1.devops.agentapp.service;

import com.vegari1.devops.agentapp.exception.EntityExistsException;
import com.vegari1.devops.agentapp.exception.EntityNotFoundException;
import com.vegari1.devops.agentapp.exception.ForbiddenException;
import com.vegari1.devops.agentapp.model.Company;
import com.vegari1.devops.agentapp.model.CompanyRegistrationRequest;

public interface ICompanyService {

    Company getCompanyById(Long companyId) throws EntityNotFoundException;

    Company updateCompanyInfo(Long companyId, String companyInfo) throws EntityNotFoundException, ForbiddenException;

    CompanyRegistrationRequest createCompanyRegReq(CompanyRegistrationRequest companyRegReq)
            throws EntityExistsException;

    Company acceptCompanyRequest(Long companyRequestId);

    void declineCompanyRequest(Long companyRequestId);
}