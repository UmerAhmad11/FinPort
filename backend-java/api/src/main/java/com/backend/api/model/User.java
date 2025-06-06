package com.backend.api.model;

import java.util.UUID;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "users")
public class User {

    @Id
    private UUID id;

    private String username;

    private String email;

    private String password;

    private String name;

    public User() {}

    public User(UUID id, String username, String email, String password, String name) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.name = name;
    }

    // Getters and Setters (or use Lombok @Data if preferred)
}
