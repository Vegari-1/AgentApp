package com.vegari1.devops.agentapp.service.impl;

import com.vegari1.devops.agentapp.repository.IJobOfferRepository;
import com.vegari1.devops.agentapp.service.IJobOfferService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class JobOfferService implements IJobOfferService {

    private final IJobOfferRepository jobOfferRepository;

}
