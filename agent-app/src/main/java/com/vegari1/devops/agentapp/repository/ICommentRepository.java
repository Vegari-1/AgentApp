package com.vegari1.devops.agentapp.repository;

import com.vegari1.devops.agentapp.model.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ICommentRepository extends JpaRepository<Comment, Long> {

    List<Comment> findByCompanyId(Long companyId);

}
