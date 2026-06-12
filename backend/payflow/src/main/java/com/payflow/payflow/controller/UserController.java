package com.payflow.payflow.controller;

import com.payflow.payflow.entity.User;

import com.payflow.payflow.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {
    @Autowired
    UserService userService;
    @GetMapping("/list")
    public List<User> getUsers(){
        return userService.getUser();
    }
    @PostMapping("/create")
    public User createUsers(@RequestBody User user){
        return userService.createUser(user);
    }
}
