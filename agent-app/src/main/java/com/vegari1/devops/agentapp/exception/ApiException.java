package com.vegari1.devops.agentapp.exception;

import org.springframework.http.HttpStatus;

public class ApiException extends BaseException {

    public ApiException() {
        super("There was an error in contacting the third party API");
        this.statusCode = HttpStatus.SERVICE_UNAVAILABLE;
    }

}
