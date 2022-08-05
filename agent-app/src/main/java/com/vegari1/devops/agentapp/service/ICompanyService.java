package com.vegari1.devops.agentapp.service;

import com.vegari1.devops.agentapp.exception.EntityExistsException;
import com.vegari1.devops.agentapp.model.CompanyRegistrationRequest;

public interface ICompanyService {

    CompanyRegistrationRequest createCompanyRegReq(CompanyRegistrationRequest companyRegReq)
            throws EntityExistsException;
}
