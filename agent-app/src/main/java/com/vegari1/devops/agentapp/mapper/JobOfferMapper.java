package com.vegari1.devops.agentapp.mapper;

import com.vegari1.devops.agentapp.dto.JobOfferRequest;
import com.vegari1.devops.agentapp.dto.JobOfferResponse;
import com.vegari1.devops.agentapp.model.JobOffer;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@AllArgsConstructor
@Component
public class JobOfferMapper implements
        IMapper<JobOffer, JobOfferRequest, JobOfferResponse> {

    private final CompanyMapper companyMapper;

    @Override
    public JobOffer toEntity(JobOfferRequest request) {
        JobOffer jobOffer = new JobOffer();
        jobOffer.setTitle(request.getTitle());
        jobOffer.setPosition(request.getPosition());
        jobOffer.setJobDescription(request.getJobDescription());
        jobOffer.setQualifications(request.getQualifications());
        jobOffer.setStartDate(request.getStartDate());
        jobOffer.setEndDate(request.getEndDate());
        return jobOffer;
    }

    @Override
    public JobOfferResponse toResponse(JobOffer entity) {
        return new JobOfferResponse(entity.getId(), entity.getTitle(), entity.getPosition(), entity.getJobDescription(),
                entity.getQualifications(), entity.getStartDate(), entity.getEndDate(),
                companyMapper.toResponse(entity.getCompany()));
    }
}