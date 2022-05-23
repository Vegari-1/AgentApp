package com.vegari1.devops.agentapp.service.impl;

import com.vegari1.devops.agentapp.repository.ICompanyRegistrationRepository;
import com.vegari1.devops.agentapp.service.ICompanyRegistrationService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class CompanyRegistrationService implements ICompanyRegistrationService {

    private final ICompanyRegistrationRepository companyRegistrationRepository;

}
