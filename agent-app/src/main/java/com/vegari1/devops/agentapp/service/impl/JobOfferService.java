package com.vegari1.devops.agentapp.service.impl;

import com.vegari1.devops.agentapp.exception.EntityNotFoundException;
import com.vegari1.devops.agentapp.exception.EntityNotValid;
import com.vegari1.devops.agentapp.exception.ForbiddenException;
import com.vegari1.devops.agentapp.model.Company;
import com.vegari1.devops.agentapp.model.JobOffer;
import com.vegari1.devops.agentapp.model.User;
import com.vegari1.devops.agentapp.repository.ICompanyRepository;
import com.vegari1.devops.agentapp.repository.IJobOfferRepository;
import com.vegari1.devops.agentapp.service.IJobOfferService;
import lombok.AllArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class JobOfferService implements IJobOfferService {

    private final IJobOfferRepository jobOfferRepository;
    private final ICompanyRepository companyRepository;

    @Override
    public JobOffer createJobOffer(JobOffer jobOffer, Long companyId) throws EntityNotFoundException, ForbiddenException {
        if (jobOffer.getEndDate().before(jobOffer.getStartDate()))
            throw new EntityNotValid("Job offer", "start date and end date");
        Company company = companyRepository.findById(companyId)
                .orElseThrow(() -> new EntityNotFoundException("Company", "id"));
        User owner = ((User) SecurityContextHolder.getContext().getAuthentication().getPrincipal());
        if (!owner.equals(company.getOwner()))
            throw new ForbiddenException(company.getClass().getSimpleName());
        jobOffer.setCompany(company);
        return jobOfferRepository.save(jobOffer);
    }

    @Override
    public JobOffer getJobOfferById(Long jobOfferId) throws EntityNotFoundException {
        return jobOfferRepository.findById(jobOfferId)
                .orElseThrow(() -> new EntityNotFoundException("Job offer", "id"));
    }

    @Override
    public List<JobOffer> getJobOfferByCompanyId(Long companyId) throws EntityNotFoundException {
        companyRepository.findById(companyId)
                .orElseThrow(() -> new EntityNotFoundException("Company", "id"));
        return jobOfferRepository.findByCompanyId(companyId);
    }
}
