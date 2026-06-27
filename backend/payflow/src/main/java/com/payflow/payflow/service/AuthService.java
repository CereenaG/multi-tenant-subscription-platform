package com.payflow.payflow.service;

import com.payflow.payflow.dto.AuthResponse;
import com.payflow.payflow.dto.LoginRequest;
import com.payflow.payflow.dto.RegisterRequest;
import com.payflow.payflow.dto.UserResponse;
import com.payflow.payflow.entity.Role;
import com.payflow.payflow.entity.User;
import com.payflow.payflow.exception.EmailAlreadyExistException;
import com.payflow.payflow.exception.InvalidCredentialsException;
import com.payflow.payflow.repository.RoleRepository;
import com.payflow.payflow.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final UserRepository userrepo;
    private final PasswordEncoder passwordEncoder;
    private final RoleRepository roleRepository;

    public UserResponse register(RegisterRequest request) {
        if(userrepo.findByEmail(request.getEmail()).isPresent()){
            throw new EmailAlreadyExistException("Email already registered");
        }
        User user = new User();
        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        Role role = roleRepository.findByName("USER").orElseThrow(()->new RuntimeException("Role not found"));
        user.setRole(role);
        User saved=userrepo.save(user);
        return mapToResponse(saved);
    }

    public AuthResponse login(LoginRequest login) {
        User user = userrepo.findByEmail(login.getEmail())
                .orElseThrow(() -> new InvalidCredentialsException("Invalid Credentials"));
        if (!passwordEncoder.matches(login.getPassword(), user.getPassword())) {
            throw new InvalidCredentialsException("Invalid Credentials");

        }
        return new AuthResponse("token coming soon");
    }
    private UserResponse mapToResponse(User user){
        return new UserResponse(user.getId(),
        user.getName(),
        user.getEmail(),
        user.getRole().getName()
    );
    }
}
