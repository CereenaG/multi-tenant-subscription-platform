package com.payflow.payflow.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginRequest {
    @Email(message="Invalid email")
    private String email;
    @Size(min=8,message = "Password must contain atleast 8 characters")
    private String password;

}
