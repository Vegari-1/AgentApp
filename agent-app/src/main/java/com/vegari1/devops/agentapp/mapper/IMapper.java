package com.vegari1.devops.agentapp.mapper;

import java.util.ArrayList;
import java.util.List;

public interface IMapper<E, Q, R> {

    E toEntity(Q request);

    R toResponse(E entity);

    default List<E> toEntityList(List<Q> requestList) {
        List<E> entityList = new ArrayList<>();
        for(Q dto : requestList) {
            entityList.add(toEntity(dto));
        }
        return entityList;
    }

    default List<R> toResponseList(List<E> entityList) {
        List<R> responseList = new ArrayList<>();
        for(E entity : entityList) {
            responseList.add(toResponse(entity));
        }
        return responseList;
    }
}

