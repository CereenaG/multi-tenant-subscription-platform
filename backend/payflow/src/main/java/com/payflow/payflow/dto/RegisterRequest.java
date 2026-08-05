package com.payflow.payflow.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RegisterRequest {
    @NotBlank(message="Name must not be blank")
    private String name;
    @NotBlank(message="Email must not be blank")
    @Email(message="Invalid email")
    private String email;
    @NotBlank(message="Password is required")
    @Size(min=8,message="Password must be atleast 8 characters")
    private String password;
    private Long roleId;
}
