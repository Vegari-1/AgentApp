package com.vegari1.devops.agentapp.repository;

import com.vegari1.devops.agentapp.model.CompanyRegistrationRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ICompanyRegistrationRepository extends JpaRepository<CompanyRegistrationRequest, Long> {

    Optional<CompanyRegistrationRequest> findByCompanyNameOrCompanyEmail(String companyName, String companyEmail);
    Optional<CompanyRegistrationRequest> findByOwnerId(Long ownerId);

}
