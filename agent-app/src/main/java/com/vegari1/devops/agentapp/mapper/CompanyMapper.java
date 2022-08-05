package com.vegari1.devops.agentapp.mapper;

import com.vegari1.devops.agentapp.dto.CompanyDto;
import com.vegari1.devops.agentapp.model.Company;
import org.springframework.stereotype.Component;

@Component
public class CompanyMapper implements
        IMapper<Company, CompanyDto, CompanyDto> {

    @Override
    public Company toEntity(CompanyDto request) {
        Company company = new Company();
        company.setIndustrySector(request.getIndustrySector());
        company.setCompanyName(request.getCompanyName());
        company.setCompanyEmail(request.getCompanyEmail());
        company.setCompanyWebsite(request.getCompanyWebsite());
        company.setCompanyInfo(request.getCompanyInfo());
        return company;
    }

    @Override
    public CompanyDto toResponse(Company entity) {
        return new CompanyDto(entity.getId(), entity.getIndustrySector(), entity.getCompanyName(),
                entity.getCompanyEmail(), entity.getCompanyWebsite(), entity.getCompanyInfo());
    }
}