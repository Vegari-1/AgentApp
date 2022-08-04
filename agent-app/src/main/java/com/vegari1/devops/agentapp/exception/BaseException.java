package com.vegari1.devops.agentapp.exception;

import org.springframework.http.HttpStatus;

public class BaseException extends RuntimeException {

    protected HttpStatus statusCode;

    public BaseException(String message) {
        super(message);
    }

    public HttpStatus getStatusCode() {
        return statusCode;
    }
}
