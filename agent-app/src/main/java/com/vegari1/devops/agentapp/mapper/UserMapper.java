package com.vegari1.devops.agentapp.mapper;

import com.vegari1.devops.agentapp.dto.LoginRequest;
import com.vegari1.devops.agentapp.dto.RegisterRequest;
import com.vegari1.devops.agentapp.dto.RegisterResponse;
import com.vegari1.devops.agentapp.model.User;
import org.springframework.stereotype.Component;

@Component
public class UserMapper implements IMapper<User, RegisterRequest, RegisterResponse> {

    public User toEntity(LoginRequest request) {
        User user = new User();
        user.setUsername(request.getUsername());
        user.setPassword(request.getPassword());
        return user;
    }

    @Override
    public User toEntity(RegisterRequest request) {
        User user = new User();
        user.setUsername(request.getUsername());
        user.setPassword(request.getPassword());
        user.setName(request.getName());
        user.setSurname(request.getSurname());
        user.setEnabled(true);
        return user;
    }

    @Override
    public RegisterResponse toResponse(User entity) {
        return new RegisterResponse(entity.getId(), entity.getUsername(), entity.getName(), entity.getSurname());
    }
}