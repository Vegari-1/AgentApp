package com.vegari1.devops.agentapp.exception;

import org.springframework.http.HttpStatus;

public class EntityNotValid extends BaseException {

    public EntityNotValid(String type, String entityFields) {
        super(String.format("%s with given %s is not valid", type, entityFields));
        this.statusCode = HttpStatus.BAD_REQUEST;
    }

}
