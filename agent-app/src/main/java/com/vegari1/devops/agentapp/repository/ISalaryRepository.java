package com.vegari1.devops.agentapp.repository;

import com.vegari1.devops.agentapp.model.Salary;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ISalaryRepository extends JpaRepository<Salary, Long> {

    List<Salary> findByCompanyId(Long companyId);

}
