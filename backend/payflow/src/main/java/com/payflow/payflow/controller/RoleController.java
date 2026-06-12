package com.payflow.payflow.controller;

import com.payflow.payflow.entity.Role;
import com.payflow.payflow.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class RoleController {
    @Autowired
    RoleService roleService;

    @GetMapping("/list/role")
    public List<Role> getRoles(){
        return roleService.getRole();
    }

    @PostMapping("create/role")
    public Role createRoles(@RequestBody Role role){
        return roleService.createRole(role);
    }
}
