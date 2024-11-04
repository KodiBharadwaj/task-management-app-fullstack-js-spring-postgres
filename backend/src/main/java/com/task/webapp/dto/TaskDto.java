package com.task.webapp.dto;

import com.task.webapp.model.DeleteTask;

import java.time.LocalDate;

public record TaskDto(int id, String username, String description, LocalDate date, String status, DeleteTask deleteTask) {
}
