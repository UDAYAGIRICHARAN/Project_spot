package com.example.springapp.service;

import com.example.springapp.model.Project;
import com.example.springapp.model.Task;
import com.example.springapp.repository.ProjectRepository;
import com.example.springapp.repository.TaskRepository;
import com.example.springapp.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProjectServiceImpl implements ProjectService {

    @Autowired
    private TaskRepository taskRepository;
    @Autowired
    private ProjectRepository projectRepository;

    public ProjectServiceImpl(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    @Override
    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }
    @Override
    public int getTotalProjectCount() {
        return getAllProjects().size();
    }
    @Override
    public Project createProject(Project project) {
        return projectRepository.save(project);
    }

    @Override
    public Project getProjectById(Long id) {
        return projectRepository.findById(id).orElse(null);
    }

    @Override
    public Project updateProject(Long id, Project ProjectDetails) {
        Project project = projectRepository.findById(id).orElseThrow(() -> new RuntimeException("Project not found with id: " + id));
        if (project != null) {
            project.setProjectName(ProjectDetails.getProjectName());
            project.setProjectDescription(ProjectDetails.getProjectDescription());
            project.setProjectStartDate(ProjectDetails.getProjectStartDate());
            project.setProjectEndDate(ProjectDetails.getProjectEndDate());
            return projectRepository.save(project);
        }
        return null;
    }

    @Override
    public Project deleteProject(Long id) {
        projectRepository.deleteById(id);
        return null;

    }

    @Override
    public List<Task> getTaskByProjectId(Long id) {
    	
    	Project proj = projectRepository.findById(id).orElseThrow(()->new RuntimeException("User Id is not found"));

    	return proj.getTaskList();
    }

	@Override
	public String createTasksByProjectId(Long id, Task tasks) {
    	Project proj = projectRepository.findById(id).orElseThrow(()->new RuntimeException("User Id is not found" +id));
    	tasks.setProject(proj);
    	this.taskRepository.save(tasks);
    	return "added";
	}
}