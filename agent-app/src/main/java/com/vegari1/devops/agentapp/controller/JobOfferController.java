package com.vegari1.devops.agentapp.controller;

import com.vegari1.devops.agentapp.service.ICompanyRegistrationService;
import com.vegari1.devops.agentapp.service.ICompanyService;
import com.vegari1.devops.agentapp.service.IJobOfferService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@AllArgsConstructor
@RestController
@RequestMapping(value = "/api/company")
public class JobOfferController {

    private final IJobOfferService jobOfferService;
}
