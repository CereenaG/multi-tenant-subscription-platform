package com.payflow.payflow.service;

import com.payflow.payflow.entity.Role;
import com.payflow.payflow.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoleService {
    @Autowired
    RoleRepository roleRepository;

    public List<Role> getRole(){
        return roleRepository.findAll();
    }
    public Role createRole(Role role){
        return roleRepository.save(role);
    }
}
