package com.vegari1.devops.agentapp.mapper;

import com.vegari1.devops.agentapp.dto.ReviewRequest;
import com.vegari1.devops.agentapp.dto.ReviewResponse;
import com.vegari1.devops.agentapp.model.Comment;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@AllArgsConstructor
@Component
public class CommentMapper implements
        IMapper<Comment, ReviewRequest, ReviewResponse> {

    private final UserMapper userMapper;

    @Override
    public Comment toEntity(ReviewRequest request) {
        Comment comment = new Comment();
        comment.setText(request.getContent());
        return comment;
    }

    @Override
    public ReviewResponse toResponse(Comment entity) {
        return new ReviewResponse(entity.getId(), entity.getText(), entity.getTimestamp(),
                userMapper.toResponse(entity.getUser()));
    }
}