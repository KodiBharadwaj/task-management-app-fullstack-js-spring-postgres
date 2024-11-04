package com.task.webapp.controller;

import com.task.webapp.dto.TaskDto;
import com.task.webapp.model.Task;
import com.task.webapp.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import static com.task.webapp.util.EntityToDto.converToEntity;
import static com.task.webapp.util.EntityToDto.convertToDto;

@CrossOrigin("http://127.0.0.1:5500")
@RestController
@RequestMapping("/api/v1/tasks")
public class TaskRestController {

    @Autowired
    private TaskService taskService;

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public Task saveTask(@RequestBody Task task){
        TaskDto taskDto = convertToDto(task);
        TaskDto obj = taskService.save(taskDto);
        return converToEntity(obj);
    }

    @GetMapping("/{id}")
    @ResponseStatus(code = HttpStatus.OK)
    public TaskDto getTraineeById(@PathVariable("id") int id){
        return taskService.getTaskByid(id);
    }

    @GetMapping
    @ResponseStatus(code = HttpStatus.OK)
    public List<TaskDto> getAllTasks(){
        return taskService.getAllTasks();
    }

    @GetMapping("/status")
    @ResponseStatus(code = HttpStatus.OK)
    public List<TaskDto> getTaskByStatus(@RequestParam("name") String status){
        return taskService.getTaskByStatus(status);
    }

    @GetMapping("/by-dates")
    @ResponseStatus(code = HttpStatus.OK)
    public List<TaskDto> getTasksBySortedDates(){
        return taskService.getTasksBySortedDates();
    }

    @GetMapping("/overdue-dates")
    @ResponseStatus(code = HttpStatus.OK)
    public List<TaskDto> getTasksByoverDueDates(){
        return taskService.getTasksByOverDueDates();
    }

    @GetMapping("/deleted-tasks")
    @ResponseStatus(code = HttpStatus.OK)
    public List<TaskDto> getDeletedTasks(){
        return taskService.getDeletedTasks();
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(code = HttpStatus.NO_CONTENT)
    public void deleteTaskById(@PathVariable("id") int id){
        taskService.deleteTask(id);
    }

    @PutMapping("/{id}")
    @ResponseStatus(code = HttpStatus.ACCEPTED)
    public TaskDto updateTask(@PathVariable("id") int id, @RequestBody TaskDto taskDto){
        return taskService.updateTaskById(id, taskDto);
    }

}
