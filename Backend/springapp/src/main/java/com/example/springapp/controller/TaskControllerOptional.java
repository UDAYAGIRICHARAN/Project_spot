//package com.example.springapp.controller;
//
//import com.example.springapp.exception.ResourceNotFoundException;
//import com.example.springapp.model.Task;
//import com.example.springapp.repository.TaskRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//import com.example.springapp.repository.ProjectRepository;
//import java.util.List;
//
//@RestController
//@CrossOrigin()
//@RequestMapping()
//public class TaskController {
//
//    @Autowired
//    private ProjectRepository projectRepository;
//
//    @Autowired
//    private TaskRepository taskRepository;
//
//  @GetMapping("/tasks/{id}")
//  public ResponseEntity<Task> getTasksByProjectId(@PathVariable(value = "id") Long id) {
//    Task task = taskRepository.findById(id)
//        .orElseThrow(() -> new ResourceNotFoundException("Not found task with id = " + id));
//
//    return new ResponseEntity<>(task, HttpStatus.OK);
//  }
//
//    @GetMapping("/tasks/{id}")
//    public ResponseEntity<Task> getTaskById(@PathVariable(value = "id") Long id) {
//        Task task = taskRepository.findById(id)
//                .orElseThrow(() -> new ResourceNotFoundException("Task not found with id: " + id));
//        return ResponseEntity.ok(task);
//   }
//    @GetMapping("/tasks")
//    List<Task> getAllTasks() {
//        return taskRepository.findAll();
//    }
//}