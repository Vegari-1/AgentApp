package com.vegari1.devops.agentapp.repository;

import com.vegari1.devops.agentapp.model.Authority;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IAuthorityRepository extends JpaRepository<Authority, Long> {

    Authority findByName(String name);

}
