package com.vegari1.devops.agentapp.exception;

import org.springframework.http.HttpStatus;

public class BadCredentialsException extends BaseException {

    public BadCredentialsException(String message) {
        super(message);
        this.statusCode = HttpStatus.UNAUTHORIZED;
    }

}
