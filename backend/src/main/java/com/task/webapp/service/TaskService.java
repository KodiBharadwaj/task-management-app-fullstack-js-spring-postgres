package com.task.webapp.service;

import com.task.webapp.dto.TaskDto;
import com.task.webapp.model.Task;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface TaskService {

    public TaskDto save(TaskDto taskDto);

    public List<TaskDto> getAllTasks();

    public TaskDto getTaskByid(int id);

    public List<TaskDto> getTaskByStatus(String status);

    public List<TaskDto> getTasksBySortedDates();

    public List<TaskDto> getTasksByOverDueDates();

    public List<TaskDto> getDeletedTasks();

    public void deleteTask(int id);

    public TaskDto updateTaskById(int id, TaskDto taskDto);
}
