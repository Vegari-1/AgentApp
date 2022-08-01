package com.vegari1.devops.agentapp.config;

import org.springframework.boot.autoconfigure.condition.AnyNestedCondition;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;

class EnvConfigCondition extends AnyNestedCondition {

    public EnvConfigCondition() {
        super(ConfigurationPhase.PARSE_CONFIGURATION);
    }

    @ConditionalOnProperty(name = "stage", havingValue = "test")
    static class TestCondition {

    }

    @ConditionalOnProperty(name = "stage", havingValue = "prod")
    static class ProdCondition {

    }

}