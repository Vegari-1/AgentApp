package com.vegari1.devops.agentapp.exception;

import org.springframework.http.HttpStatus;

public class EntityNotFoundException extends BaseException {

    public EntityNotFoundException(String type, String entityFields) {
        super(String.format("%s with given %s not found", type, entityFields));
        this.statusCode = HttpStatus.NOT_FOUND;
    }

}
