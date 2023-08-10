package com.example.springapp.controller;

import com.example.springapp.model.Project;
import com.example.springapp.model.Task;
import com.example.springapp.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin
@RestController
// @RequestMapping("/tasks/project")

public class ProjectController {

	@Autowired
	ProjectService projectService;

	@GetMapping("/projects")
	public List<Project> getAllProjects() {
		return projectService.getAllProjects();
	}

	@PostMapping("/projects")
	public ResponseEntity<Project> createProject(@RequestBody Project project) {
		if (project != null) {

			return new ResponseEntity<>(projectService.createProject(project), HttpStatus.CREATED);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

	}

	@GetMapping("/projects/{id}")
	public ResponseEntity<Project> getProjectById(@PathVariable Long id) {
		if (id != null) {
			return new ResponseEntity<Project>(projectService.getProjectById(id), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@PutMapping("/projects/{id}")
	public ResponseEntity<Project> updateProject(@PathVariable Long id, @RequestBody Project ProjectDetails) {
		if (id != null) {
			return new ResponseEntity<Project>(projectService.updateProject(id, ProjectDetails), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/projects/{id}")
	public ResponseEntity<Void> deleteProject(@PathVariable Long id) {
		if (id != null) {
			projectService.deleteProject(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@GetMapping("/tasks/project/{id}")
	public ResponseEntity<Project> updateTask(@PathVariable long id) {
	// return new ResponseEntity<List<Task>>(projectService.getTaskByProjectId(id), HttpStatus.OK);
	return new ResponseEntity<Project>(projectService.getProjectById(id), HttpStatus.OK);
	}

	@PostMapping("/tasks/project/{id}")
	public String createTask(@PathVariable long id, @RequestBody Task tasks) {
		projectService.createTasksByProjectId(id, tasks);
		return "added";
	}
}