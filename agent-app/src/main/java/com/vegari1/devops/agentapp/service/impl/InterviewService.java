package com.vegari1.devops.agentapp.service.impl;

import com.vegari1.devops.agentapp.repository.IInterviewRepository;
import com.vegari1.devops.agentapp.service.IInterviewService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class InterviewService implements IInterviewService {

    private final IInterviewRepository interviewRepository;

}
