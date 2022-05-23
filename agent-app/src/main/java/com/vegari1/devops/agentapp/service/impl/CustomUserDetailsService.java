package com.vegari1.devops.agentapp.service.impl;

import com.vegari1.devops.agentapp.repository.IUserRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class CustomUserDetailsService implements UserDetailsService {

    private final IUserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return  userRepository.findByUsername(username).orElseThrow(() ->
                new UsernameNotFoundException(String.format("No user found with username '%s'.", username)));

    }
}
