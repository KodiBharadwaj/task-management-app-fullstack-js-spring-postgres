package com.task.webapp.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;


@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "task_db")
public class Task {
    @Id
    @Column(name = "task_id")
    private int id;

    @Column(name = "task_name", length = 100)
    private String username;

    @Column(length = 250)
    private String description;

    @Column(name = "date")
    private LocalDate date;

    @Column(name = "status")
    private String status;

    @Enumerated(EnumType.STRING)
    private DeleteTask deleteTask;
}
