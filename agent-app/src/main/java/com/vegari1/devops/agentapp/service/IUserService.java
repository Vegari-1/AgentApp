package com.vegari1.devops.agentapp.service;

import com.vegari1.devops.agentapp.exception.EntityExistsException;
import com.vegari1.devops.agentapp.model.User;
import org.springframework.security.authentication.BadCredentialsException;

public interface IUserService {

    User register(User user) throws EntityExistsException;
    String login(User user) throws BadCredentialsException;
}
