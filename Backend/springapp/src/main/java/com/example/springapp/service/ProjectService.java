package com.example.springapp.service;

import com.example.springapp.model.Project;
import com.example.springapp.model.Task;

import java.util.List;

public interface ProjectService {
    List<Project> getAllProjects();

    Project getProjectById(Long id);

    Project createProject(Project project);

    Project updateProject(Long id, Project project);

    Project deleteProject(Long id);

    List<Task> getTaskByProjectId(Long id);

	String createTasksByProjectId(Long id, Task tasks);
    
    int getTotalProjectCount();
}