package com.vegari1.devops.agentapp.service;

import com.vegari1.devops.agentapp.exception.EntityNotFoundException;
import com.vegari1.devops.agentapp.exception.ForbiddenException;
import com.vegari1.devops.agentapp.model.JobOffer;

import java.util.List;

public interface IJobOfferService {

    JobOffer createJobOffer(JobOffer jobOffer, Long companyId) throws EntityNotFoundException, ForbiddenException;

    JobOffer getJobOfferById(Long jobOfferId) throws EntityNotFoundException;

    List<JobOffer> getJobOfferByCompanyId(Long companyId) throws EntityNotFoundException;
}
