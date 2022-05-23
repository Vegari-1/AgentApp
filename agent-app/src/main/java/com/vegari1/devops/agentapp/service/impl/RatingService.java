package com.vegari1.devops.agentapp.service.impl;

import com.vegari1.devops.agentapp.repository.IRatingRepository;
import com.vegari1.devops.agentapp.service.IRatingService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class RatingService implements IRatingService {

    private final IRatingRepository ratingRepository;

}
