package com.vegari1.devops.agentapp.mapper;

import com.vegari1.devops.agentapp.dto.CommentRequest;
import com.vegari1.devops.agentapp.dto.CommentResponse;
import com.vegari1.devops.agentapp.model.Comment;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@AllArgsConstructor
@Component
public class CommentMapper implements
        IMapper<Comment, CommentRequest, CommentResponse> {

    private final UserMapper userMapper;

    @Override
    public Comment toEntity(CommentRequest request) {
        Comment comment = new Comment();
        comment.setText(request.getCommentText());
        return comment;
    }

    @Override
    public CommentResponse toResponse(Comment entity) {
        return new CommentResponse(entity.getId(), entity.getText(), entity.getTimestamp(),
                userMapper.toResponse(entity.getUser()));
    }
}