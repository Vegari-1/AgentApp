package com.vegari1.devops.agentapp.repository;

import com.vegari1.devops.agentapp.model.Authority;
import com.vegari1.devops.agentapp.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Set;

@Repository
public interface IAuthorityRepository extends JpaRepository<User, Long> {

    Set<Authority> findByName(String name);

}
