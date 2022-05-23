package com.vegari1.devops.agentapp.repository;

import com.vegari1.devops.agentapp.model.CompanyRegistrationRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICompanyRegistrationRepository extends JpaRepository<CompanyRegistrationRequest, Long> {
}
