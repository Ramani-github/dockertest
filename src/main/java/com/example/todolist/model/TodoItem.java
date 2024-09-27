package com.example.todolist.model;

public class TodoItem {
    private String id;
    private String task;
    private boolean completed;

    // Getters and Setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }
    public String getTask() { return task; }
    public void setTask(String task) { this.task = task; }
    public boolean isCompleted() { return completed; }
    public void setCompleted(boolean completed) { this.completed = completed; }
}
