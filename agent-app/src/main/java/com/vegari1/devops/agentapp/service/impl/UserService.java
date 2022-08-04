package com.vegari1.devops.agentapp.service.impl;

import com.vegari1.devops.agentapp.auth.TokenUtils;
import com.vegari1.devops.agentapp.exception.EntityExistsException;
import com.vegari1.devops.agentapp.model.User;
import com.vegari1.devops.agentapp.repository.IUserRepository;
import com.vegari1.devops.agentapp.service.IUserService;
import lombok.AllArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.swing.text.html.parser.Entity;

@AllArgsConstructor
@Service
public class UserService implements IUserService {

    private final IUserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final TokenUtils tokenUtils;

    @Override
    public User register(User user) throws EntityExistsException {
        userRepository.findByUsername(user.getUsername())
                .ifPresent(existingUser -> {
                    throw new EntityExistsException(existingUser.getClass().getSimpleName(), "username");
                });
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    @Override
    public String login(User user) throws AuthenticationException {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        return tokenUtils.generateToken(user.getUsername(), user.getAuthorities());
    }
}
