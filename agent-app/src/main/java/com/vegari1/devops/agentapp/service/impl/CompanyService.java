package com.vegari1.devops.agentapp.service.impl;

import com.vegari1.devops.agentapp.exception.EntityExistsException;
import com.vegari1.devops.agentapp.exception.EntityNotFoundException;
import com.vegari1.devops.agentapp.exception.ForbiddenException;
import com.vegari1.devops.agentapp.model.Company;
import com.vegari1.devops.agentapp.model.CompanyRegistrationRequest;
import com.vegari1.devops.agentapp.model.User;
import com.vegari1.devops.agentapp.repository.ICompanyRegistrationRepository;
import com.vegari1.devops.agentapp.repository.ICompanyRepository;
import com.vegari1.devops.agentapp.repository.IUserRepository;
import com.vegari1.devops.agentapp.service.ICompanyService;
import lombok.AllArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class CompanyService implements ICompanyService {

    private final IUserRepository userRepository;
    private final ICompanyRepository companyRepository;
    private final ICompanyRegistrationRepository companyRegistrationRepository;

    @Override
    public Company getCompanyById(Long companyId) throws EntityNotFoundException {
        return companyRepository.findById(companyId)
                .orElseThrow(() -> new EntityNotFoundException(
                        Company.class.getSimpleName(), "id"));
    }

    @Override
    public Company updateCompanyInfo(Long companyId, String companyInfo) throws EntityNotFoundException, ForbiddenException {
        Company company = companyRepository.findById(companyId)
                .orElseThrow(() -> new EntityNotFoundException(
                        Company.class.getSimpleName(), "id"));
        User owner = ((User)SecurityContextHolder.getContext().getAuthentication().getPrincipal());
        if (!owner.equals(company.getOwner()))
            throw new ForbiddenException(company.getClass().getSimpleName());
        company.setCompanyInfo(companyInfo);
        return companyRepository.save(company);
    }

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
        Long ownerId = ((User)SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getId();
        User owner = userRepository.findById(ownerId)
                .orElseThrow(() -> new EntityNotFoundException(User.class.getSimpleName(), "id"));
        companyRegReq.setOwner(owner);
        return companyRegistrationRepository.save(companyRegReq);
    }

    @Override
    public Company acceptCompanyRequest(Long companyRequestId) {
        CompanyRegistrationRequest companyRegReq =
                companyRegistrationRepository.findById(companyRequestId)
                    .orElseThrow(() -> new EntityNotFoundException("Company registration request", "id"));
        Company company = new Company(companyRegReq);
        company = companyRepository.save(company);
        companyRegistrationRepository.delete(companyRegReq);
        return company;
    }

    @Override
    public void declineCompanyRequest(Long companyRequestId) {
        CompanyRegistrationRequest companyRegReq =
                companyRegistrationRepository.findById(companyRequestId)
                    .orElseThrow(() -> new EntityNotFoundException("Company registration request", "id"));
        companyRegistrationRepository.delete(companyRegReq);
    }
}
