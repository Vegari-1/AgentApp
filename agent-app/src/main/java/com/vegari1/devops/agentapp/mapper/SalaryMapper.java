package com.vegari1.devops.agentapp.mapper;

import com.vegari1.devops.agentapp.dto.SalaryMeanResponse;
import com.vegari1.devops.agentapp.dto.SalaryRequest;
import com.vegari1.devops.agentapp.dto.SalaryResponse;
import com.vegari1.devops.agentapp.model.Salary;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@AllArgsConstructor
@Component
public class SalaryMapper implements
        IMapper<Salary, SalaryRequest, SalaryResponse> {

    private final UserMapper userMapper;

    @Override
    public Salary toEntity(SalaryRequest request) {
        Salary salary = new Salary();
        String wordsCapitalized = Arrays.stream(
                request.getPosition().trim().toLowerCase().split("\\s+"))
                .map(t -> t.substring(0, 1).toUpperCase() + t.substring(1))
                .collect(Collectors.joining(" "));
        salary.setPosition(wordsCapitalized);
        salary.setAmount(request.getAmount());
        return salary;
    }

    @Override
    public SalaryResponse toResponse(Salary entity) {
        return new SalaryResponse(entity.getId(), entity.getAmount(),
                entity.getPosition(), entity.getTimestamp(), userMapper.toResponse(entity.getUser()));
    }

    public List<SalaryMeanResponse> toResponseList(Map<String, Double> meanSalaryMap) {
        List<SalaryMeanResponse> meanSalaries = new ArrayList<>();
        for (Map.Entry<String, Double> meanSalary : meanSalaryMap.entrySet()) {
            meanSalaries.add(new SalaryMeanResponse(meanSalary.getKey(), meanSalary.getValue()));
        }
        return meanSalaries;
    }
}