package com.example.springapp.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.springapp.model.Task;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

public interface TaskRepository extends JpaRepository<Task, Long> {
    // Additional methods can be defined here if needed
    @Query(value = "select *from task where project_project_id =:id", nativeQuery = true)
    List<Task> getTaskByProjectId(Long id);
}
