package com.vegari1.devops.agentapp.service.impl;

import com.vegari1.devops.agentapp.repository.ICommentRepository;
import com.vegari1.devops.agentapp.service.ICommentService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class CommentService implements ICommentService {

    private final ICommentRepository commentRepository;

}
