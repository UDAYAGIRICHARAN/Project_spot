package com.example.springapp.services;

import com.example.springapp.user.User;

import java.util.List;
import java.util.Optional;

public interface profilesevices {
    Optional<User> getUser(long id);
    User updateUser(long id, User updatedUser);
    User createUser(User newUser);
    List<User> getUsers();
}
