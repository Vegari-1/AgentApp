package com.vegari1.devops.agentapp.service.impl;

import com.vegari1.devops.agentapp.dto.DislinktJobOfferRequest;
import com.vegari1.devops.agentapp.exception.ApiException;
import com.vegari1.devops.agentapp.exception.EntityNotFoundException;
import com.vegari1.devops.agentapp.model.JobOffer;
import com.vegari1.devops.agentapp.model.User;
import com.vegari1.devops.agentapp.repository.IJobOfferRepository;
import com.vegari1.devops.agentapp.service.IDislinktService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.HttpServerErrorException;
import org.springframework.web.client.RestTemplate;

@RequiredArgsConstructor
@Service
public class DislinktService implements IDislinktService {

    @Value("${dislinkt.api.url}")
    private String dislinktApiUrl;

    @Value("${cors.origin}")
    private String frontendUrl;

    @Value("${company.url}")
    private String companyUrl;

    private final RestTemplate restTemplate;
    private final IJobOfferRepository jobOfferRepository;

    @Override
    public void shareJobOffer(Long jobOfferId) throws EntityNotFoundException, ApiException {
        JobOffer jobOffer = jobOfferRepository.findById(jobOfferId)
                .orElseThrow(() -> new EntityNotFoundException("Job offer", "id"));
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        DislinktJobOfferRequest jobOfferRequest = new DislinktJobOfferRequest(
                        user.getApiKey(),
                        jobOffer.getPosition(),
                        jobOffer.getJobDescription(),
                        jobOffer.getQualifications().toArray(new String[0]),
                        frontendUrl + companyUrl + "/" + jobOffer.getId());
        try {
            restTemplate.postForEntity(
                    dislinktApiUrl,
                    jobOfferRequest,
                    Void.class);
        } catch (HttpClientErrorException | HttpServerErrorException ex) {
            throw new ApiException();
        }
    }
}
