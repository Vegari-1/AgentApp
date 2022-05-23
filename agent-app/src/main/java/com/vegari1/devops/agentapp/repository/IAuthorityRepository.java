package com.vegari1.devops.agentapp.repository;

import com.vegari1.devops.agentapp.model.Authority;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Set;

@Repository
public interface IAuthorityRepository extends JpaRepository<Authority, Long> {

    Set<Authority> findByName(String name);

}
