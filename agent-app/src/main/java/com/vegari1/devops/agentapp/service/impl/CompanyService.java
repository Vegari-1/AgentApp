package com.vegari1.devops.agentapp.service.impl;

import com.vegari1.devops.agentapp.exception.EntityExistsException;
import com.vegari1.devops.agentapp.exception.EntityNotFoundException;
import com.vegari1.devops.agentapp.exception.ForbiddenException;
import com.vegari1.devops.agentapp.model.*;
import com.vegari1.devops.agentapp.repository.*;
import com.vegari1.devops.agentapp.service.ICompanyService;
import lombok.AllArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;
import java.util.Map;

import static java.util.stream.Collectors.averagingDouble;
import static java.util.stream.Collectors.groupingBy;

@AllArgsConstructor
@Service
public class CompanyService implements ICompanyService {

    private final IUserRepository userRepository;
    private final ISalaryRepository salaryRepository;
    private final ICompanyRepository companyRepository;
    private final ICommentRepository commentRepository;
    private final IInterviewRepository interviewRepository;
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

    @Override
    public Comment createCompanyComment(Comment comment, Long companyId) throws EntityNotFoundException, ForbiddenException {
        Company company = companyRepository.findById(companyId)
                .orElseThrow(() -> new EntityNotFoundException("Company", "id"));
        User user = ((User)SecurityContextHolder.getContext().getAuthentication().getPrincipal());
        if (company.getOwner().equals(user))
            throw new ForbiddenException(company.getClass().getSimpleName());
        comment.setCompany(company);
        comment.setUser(user);
        comment.setTimestamp(new Date());
        return commentRepository.save(comment);
    }

    @Override
    public List<Comment> getCompanyComments(Long companyId) throws EntityNotFoundException {
        companyRepository.findById(companyId)
                .orElseThrow(() -> new EntityNotFoundException("Company", "id"));
        return commentRepository.findByCompanyId(companyId);
    }

    @Override
    public Interview createCompanyInterview(Interview interview, Long companyId) throws EntityNotFoundException, ForbiddenException {
        Company company = companyRepository.findById(companyId)
                .orElseThrow(() -> new EntityNotFoundException("Company", "id"));
        User user = ((User)SecurityContextHolder.getContext().getAuthentication().getPrincipal());
        if (company.getOwner().equals(user))
            throw new ForbiddenException(company.getClass().getSimpleName());
        interview.setCompany(company);
        interview.setUser(user);
        interview.setTimestamp(new Date());
        return interviewRepository.save(interview);
    }

    @Override
    public List<Interview> getCompanyInterviews(Long companyId) {
        companyRepository.findById(companyId)
                .orElseThrow(() -> new EntityNotFoundException("Company", "id"));
        return interviewRepository.findByCompanyId(companyId);
    }

    @Override
    public Salary createCompanySalary(Salary salary, Long companyId) {
        Company company = companyRepository.findById(companyId)
                .orElseThrow(() -> new EntityNotFoundException("Company", "id"));
        User user = ((User)SecurityContextHolder.getContext().getAuthentication().getPrincipal());
        if (company.getOwner().equals(user))
            throw new ForbiddenException(company.getClass().getSimpleName());
        salary.setCompany(company);
        salary.setUser(user);
        salary.setTimestamp(new Date());
        return salaryRepository.save(salary);
    }

    @Override
    public List<Salary> getCompanySalaries(Long companyId) {
        companyRepository.findById(companyId)
                .orElseThrow(() -> new EntityNotFoundException("Company", "id"));
        return salaryRepository.findByCompanyId(companyId);
    }

    @Override
    public Map<String, Double> getCompanyMeanSalaries(Long companyId) {
        companyRepository.findById(companyId)
                .orElseThrow(() -> new EntityNotFoundException("Company", "id"));

        List<Salary> salaries = salaryRepository.findByCompanyId(companyId);
        return salaries.stream()
                .collect(groupingBy(Salary::getPosition, averagingDouble(Salary::getAmount)));
    }
}
