package com.vegari1.devops.agentapp.mapper;

import com.vegari1.devops.agentapp.dto.CompanyRequestDto;
import com.vegari1.devops.agentapp.model.CompanyRegistrationRequest;
import org.springframework.stereotype.Component;

@Component
public class CompanyRequestMapper implements
        IMapper<CompanyRegistrationRequest, CompanyRequestDto, CompanyRequestDto> {

    @Override
    public CompanyRegistrationRequest toEntity(CompanyRequestDto request) {
        return new CompanyRegistrationRequest(null, request.getIndustrySector(), request.getCompanyName(),
                request.getCompanyEmail(), request.getCompanyWebsite(), request.getCompanyInfo(), null);
    }

    @Override
    public CompanyRequestDto toResponse(CompanyRegistrationRequest entity) {
        return new CompanyRequestDto(entity.getId(), entity.getIndustrySector(), entity.getCompanyName(),
                entity.getCompanyEmail(), entity.getCompanyWebsite(), entity.getCompanyInfo());
    }
}