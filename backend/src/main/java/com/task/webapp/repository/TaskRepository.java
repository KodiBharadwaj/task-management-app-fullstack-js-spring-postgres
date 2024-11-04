package com.task.webapp.repository;

import com.task.webapp.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;

public interface TaskRepository extends JpaRepository<Task, Integer> {

    @Query("SELECT t FROM Task t WHERE t.status = :status")
    List<Task> findByStatus(@Param("status") String status);

    @Query("SELECT t FROM Task t ORDER BY t.date")
    List<Task> getTasksBySortedDates();

    @Query("SELECT t FROM Task t WHERE t.date < :currentDate ORDER BY t.date")
    List<Task> getTasksByOverDueDates(@Param("currentDate") LocalDate currentDate);

    @Query("SELECT t FROM Task t where deleteTask = 'DELETED'")
    List<Task> getDeletedTasks();
}
