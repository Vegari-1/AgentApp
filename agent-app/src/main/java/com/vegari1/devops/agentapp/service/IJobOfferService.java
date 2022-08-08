package com.vegari1.devops.agentapp.service;

import com.vegari1.devops.agentapp.exception.EntityNotFoundException;
import com.vegari1.devops.agentapp.exception.ForbiddenException;
import com.vegari1.devops.agentapp.model.JobOffer;

public interface IJobOfferService {

    JobOffer createJobOffer(JobOffer jobOffer, Long companyId) throws EntityNotFoundException, ForbiddenException;

}
