package com.vegari1.devops.agentapp.repository;

import com.vegari1.devops.agentapp.model.Company;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ICompanyRepository extends JpaRepository<Company, Long> {

    Optional<Company> findByCompanyNameOrCompanyEmail(String companyName, String companyEmail);

}
