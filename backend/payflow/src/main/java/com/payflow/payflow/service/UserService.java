package com.payflow.payflow.service;

import com.payflow.payflow.entity.User;
import com.payflow.payflow.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    UserRepository userrepo;

    public List<User> getUser(){
        return userrepo.findAll();
    }
    public User createUser(User user){
        return userrepo.save(user);
    }



}
