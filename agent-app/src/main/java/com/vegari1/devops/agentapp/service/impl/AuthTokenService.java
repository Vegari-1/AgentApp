package com.vegari1.devops.agentapp.service.impl;

import com.vegari1.devops.agentapp.repository.IAuthTokenRepository;
import com.vegari1.devops.agentapp.service.IAuthTokenService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class AuthTokenService implements IAuthTokenService {

    private final IAuthTokenRepository authTokenRepository;

}
