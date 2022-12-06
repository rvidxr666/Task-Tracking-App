package com.tasktracker.backend;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TaskService {
    
    private final TaskRepository taskRepository;

    @Autowired
    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public List<Task> getAllTasks() {
        return this.taskRepository.findAll();
    }

    public Task insertTask(Task task) {
        Task savedTask = this.taskRepository.save(task); 
        this.taskRepository.flush(); 
        return savedTask;
    }

    public Optional<Task> getTaskById(Long id) {
        Optional<Task> savedTask = this.taskRepository.findById(id); 
        return savedTask;
    }

    public void deleteTaskById(Long id) {
        this.taskRepository.deleteById(id);
    }
}
