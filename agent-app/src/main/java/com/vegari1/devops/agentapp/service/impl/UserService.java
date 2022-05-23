package com.vegari1.devops.agentapp.service.impl;

import com.vegari1.devops.agentapp.repository.IUserRepository;
import com.vegari1.devops.agentapp.service.IUserService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class UserService implements IUserService {

    private final IUserRepository userRepository;

}
