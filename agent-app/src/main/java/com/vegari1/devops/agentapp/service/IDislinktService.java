package com.vegari1.devops.agentapp.service;

import com.vegari1.devops.agentapp.exception.ApiException;
import com.vegari1.devops.agentapp.exception.EntityNotFoundException;
import com.vegari1.devops.agentapp.model.Config;

public interface IDislinktService {

    void shareJobOffer(Long jobOfferId) throws EntityNotFoundException, ApiException;

    Config updateConfigUrl(String url);
}
