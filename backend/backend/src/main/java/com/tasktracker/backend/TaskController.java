package com.tasktracker.backend;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@RestController
public class TaskController {

    private final TaskService taskService;

    @Autowired
    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }
    
    @GetMapping("/tasks")
    public List<Task> getAllTasks() {
        return this.taskService.getAllTasks();
    }

    @PostMapping("/tasks")
    public ResponseEntity<Task> addTask(@RequestBody Task task) {
        try {
            Task savedTask = this.taskService.insertTask(task);
            return new ResponseEntity<>(savedTask, HttpStatus.OK); 
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("tasks/{id}")
    public ResponseEntity<Task> getTask(@PathVariable("id") Long id) {
        Optional<Task> foundTask = taskService.getTaskById(id);

        if (foundTask.isPresent()) {
            Task task = foundTask.get();
            return new ResponseEntity<>(task,HttpStatus.OK);  
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("tasks/{id}")
    public ResponseEntity<Task> modifyTask(@PathVariable("id") Long id, @RequestBody Task reqTask) {
        Optional<Task> checkTask = taskService.getTaskById(id);

        if (checkTask.isPresent()) {
            Task foundTask = checkTask.get();
            foundTask.setTask(reqTask.getTask());
            foundTask.setDateDue(reqTask.getDateDue());
            this.taskService.insertTask(foundTask);
            return new ResponseEntity<>(foundTask,HttpStatus.OK);  
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("tasks/{id}")
    public ResponseEntity<Task> modifyTask(@PathVariable("id") Long id) {
		try {
			taskService.deleteTaskById(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
    }
}