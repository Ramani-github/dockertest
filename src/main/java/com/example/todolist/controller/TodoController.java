package com.example.todolist.controller;

import com.example.todolist.model.TodoItem;
import com.example.todolist.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/todos")
public class TodoController {
    @Autowired
    private TodoService todoService;

    @GetMapping
    public List<TodoItem> getAllTodos() {
        return todoService.getTodoItems();
    }

    @PostMapping
    public void addTodo(@RequestBody TodoItem todoItem) {
        todoService.addTodoItem(todoItem);
    }
}
