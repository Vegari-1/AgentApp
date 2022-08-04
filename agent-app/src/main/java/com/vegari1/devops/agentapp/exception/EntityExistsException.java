package com.vegari1.devops.agentapp.exception;

import org.springframework.http.HttpStatus;

public class EntityExistsException extends BaseException {

    public EntityExistsException(String type, String entityFields) {
        super(String.format("%s with given %s already exists", type, entityFields));
        this.statusCode = HttpStatus.CONFLICT;
    }

}
