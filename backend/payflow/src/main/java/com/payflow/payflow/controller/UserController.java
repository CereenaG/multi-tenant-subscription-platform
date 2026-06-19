package com.payflow.payflow.controller;

import com.payflow.payflow.entity.User;

import com.payflow.payflow.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {
    @Autowired
    UserService userService;
    @Autowired
    PasswordEncoder passwordConfig;
    @GetMapping("/list")
    //userresponse entity
    public List<User> getUsers(){
        return userService.getUser();
    }

}
