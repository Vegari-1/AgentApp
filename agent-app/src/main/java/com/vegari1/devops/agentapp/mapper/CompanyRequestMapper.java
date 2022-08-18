package com.vegari1.devops.agentapp.mapper;

import com.vegari1.devops.agentapp.dto.CompanyDto;
import com.vegari1.devops.agentapp.model.CompanyRegistrationRequest;
import org.springframework.stereotype.Component;

@Component
public class CompanyRequestMapper implements
        IMapper<CompanyRegistrationRequest, CompanyDto, CompanyDto> {

    @Override
    public CompanyRegistrationRequest toEntity(CompanyDto request) {
        return new CompanyRegistrationRequest(null, request.getIndustrySector(), request.getCompanyName(),
                request.getCompanyEmail(), request.getCompanyWebsite(), request.getCompanyInfo(), null);
    }

    @Override
    public CompanyDto toResponse(CompanyRegistrationRequest entity) {
        return new CompanyDto(entity.getId(), entity.getIndustrySector(), entity.getCompanyName(),
                entity.getCompanyEmail(), entity.getCompanyWebsite(), entity.getCompanyInfo());
    }
}