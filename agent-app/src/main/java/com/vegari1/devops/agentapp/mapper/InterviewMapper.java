package com.vegari1.devops.agentapp.mapper;

import com.vegari1.devops.agentapp.dto.InterviewRequest;
import com.vegari1.devops.agentapp.dto.ReviewResponse;
import com.vegari1.devops.agentapp.model.Interview;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@AllArgsConstructor
@Component
public class InterviewMapper implements
        IMapper<Interview, InterviewRequest, ReviewResponse> {

    private final UserMapper userMapper;

    @Override
    public Interview toEntity(InterviewRequest request) {
        Interview interview = new Interview();
        interview.setText(request.getInterviewText());
        return interview;
    }

    @Override
    public ReviewResponse toResponse(Interview entity) {
        return new ReviewResponse(entity.getId(), entity.getText(), entity.getTimestamp(),
                userMapper.toResponse(entity.getUser()));
    }
}