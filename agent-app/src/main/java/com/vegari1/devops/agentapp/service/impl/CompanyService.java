package com.vegari1.devops.agentapp.service.impl;

import com.vegari1.devops.agentapp.repository.ICompanyRepository;
import com.vegari1.devops.agentapp.service.ICompanyService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class CompanyService implements ICompanyService {

    private final ICompanyRepository companyRepository;

}
