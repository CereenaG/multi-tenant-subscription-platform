package com.payflow.payflow.controller;

import com.payflow.payflow.entity.User;
import com.payflow.payflow.repository.UserRepository;
import com.payflow.payflow.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Controller
public class UserController {
    @Autowired
    UserService userService;
    @GetMapping("/list")
    private List<User> getUsers(){
        return userService.getUser();
    }
    @PostMapping("/create")
    private User createUsers(@RequestBody User user){
        return userService.createUser(user);
    }
}
