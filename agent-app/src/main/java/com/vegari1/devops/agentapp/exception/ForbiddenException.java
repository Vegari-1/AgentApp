package com.vegari1.devops.agentapp.exception;

import org.springframework.http.HttpStatus;

public class ForbiddenException extends BaseException {

    public ForbiddenException(String type) {
        super(String.format("Forbidden access to requested %s", type));
        this.statusCode = HttpStatus.FORBIDDEN;
    }

}
