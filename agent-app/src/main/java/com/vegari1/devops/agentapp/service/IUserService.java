package com.vegari1.devops.agentapp.service;

import com.vegari1.devops.agentapp.exception.BadCredentialsException;
import com.vegari1.devops.agentapp.exception.EntityExistsException;
import com.vegari1.devops.agentapp.model.User;

public interface IUserService {

    User register(User user) throws EntityExistsException;
    String login(User user) throws BadCredentialsException;
}
