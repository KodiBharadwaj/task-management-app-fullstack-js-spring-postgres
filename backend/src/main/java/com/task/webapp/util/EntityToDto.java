package com.task.webapp.util;

import com.task.webapp.dto.TaskDto;
import com.task.webapp.model.Task;

public class EntityToDto {

    public static Task converToEntity(TaskDto taskDto){
        Task task = new Task(taskDto.id(), taskDto.username(), taskDto.description(), taskDto.date(), taskDto.status(), taskDto.deleteTask());
        return task;
    }

    public static TaskDto convertToDto(Task task){
        TaskDto taskDto = new TaskDto(task.getId(), task.getUsername(), task.getDescription(), task.getDate(), task.getStatus(), task.getDeleteTask());
        return taskDto;
    }
}
