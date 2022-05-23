package com.vegari1.devops.agentapp.service.impl;

import com.vegari1.devops.agentapp.repository.ISalaryRepository;
import com.vegari1.devops.agentapp.service.ISalaryService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class SalaryService implements ISalaryService {

    private final ISalaryRepository salaryRepository;

}
