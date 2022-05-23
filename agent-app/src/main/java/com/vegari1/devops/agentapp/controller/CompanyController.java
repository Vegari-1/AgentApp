package com.vegari1.devops.agentapp.controller;

import com.vegari1.devops.agentapp.service.ICompanyRegistrationService;
import com.vegari1.devops.agentapp.service.ICompanyService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@AllArgsConstructor
@RestController
@RequestMapping(value = "/api/company")
public class CompanyController {

    private final ICompanyService companyService;
    private final ICompanyRegistrationService companyRegistrationService;
}
