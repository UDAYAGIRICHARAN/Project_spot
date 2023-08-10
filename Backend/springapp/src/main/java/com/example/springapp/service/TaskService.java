package com.example.springapp.service;
import java.util.List;
import com.example.springapp.model.Task;
public interface TaskService {
    List<Task> getAllTasks();
    Task getTaskById(Long id);
    Task createTask(Task task);
    Task updateTask(Long id, Task taskDetails);
    void deleteTask(Long id);
    int getTotalTaskCount();
}
