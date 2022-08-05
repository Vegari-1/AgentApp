package com.vegari1.devops.agentapp.service.impl;

import com.vegari1.devops.agentapp.exception.EntityExistsException;
import com.vegari1.devops.agentapp.model.CompanyRegistrationRequest;
import com.vegari1.devops.agentapp.repository.ICompanyRegistrationRepository;
import com.vegari1.devops.agentapp.repository.ICompanyRepository;
import com.vegari1.devops.agentapp.service.ICompanyService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class CompanyService implements ICompanyService {

    private final ICompanyRepository companyRepository;
    private final ICompanyRegistrationRepository companyRegistrationRepository;

    @Override
    public CompanyRegistrationRequest createCompanyRegReq(CompanyRegistrationRequest companyRegReq)
            throws EntityExistsException {
        companyRegistrationRepository.findByCompanyNameOrCompanyEmail(
                companyRegReq.getCompanyName(), companyRegReq.getCompanyEmail())
                .ifPresent(existingCompanyRequest -> {
                    throw new EntityExistsException(
                            "Company registration request",
                            "company name or company email");
                });
        companyRepository.findByCompanyNameOrCompanyEmail(
                        companyRegReq.getCompanyName(), companyRegReq.getCompanyEmail())
                .ifPresent(existingCompany -> {
                    throw new EntityExistsException(
                            existingCompany.getClass().getSimpleName(),
                            "company name or company email");
                });
        return companyRegistrationRepository.save(companyRegReq);
    }
}
