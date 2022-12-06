package com.tasktracker.backend;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.time.LocalDate;


@Entity
@Table(name = "tasks")
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "task")
    private String task;

    @Column(name = "dateDue")
    private LocalDate dateDue;

    @Column(name = "dateCreated")
    private LocalDate dateCreated;

    public Task() {} 

    public Task(Long id, String task, String dateDue, String dateCreated) {
        this.id = id;
        this.task = task; 
        this.dateDue = LocalDate.parse(dateDue);
        this.dateCreated = LocalDate.parse(dateCreated);
    }

    public Long getId() {
        return this.id; 
    }

    public String getTask() {
        return this.task;
    }

    public void setTask(String taskName) {
        this.task = taskName;
    }

    public LocalDate getDateDue() {
        return this.dateDue;
    }

    public void setDateDue(LocalDate newDateDue) {
        this.dateDue = newDateDue;
    }

    public LocalDate getDateCreated() {
        return this.dateCreated;
    }    
}
