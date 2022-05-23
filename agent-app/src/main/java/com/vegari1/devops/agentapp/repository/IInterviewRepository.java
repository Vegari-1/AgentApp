package com.vegari1.devops.agentapp.repository;

import com.vegari1.devops.agentapp.model.Interview;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IInterviewRepository extends JpaRepository<Interview, Long> {
}
