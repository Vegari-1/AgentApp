package com.vegari1.devops.agentapp.repository;

import com.vegari1.devops.agentapp.model.JobOffer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IJobOfferRepository extends JpaRepository<JobOffer, Long> {

    List<JobOffer> findByCompanyId(Long companyId);

}
