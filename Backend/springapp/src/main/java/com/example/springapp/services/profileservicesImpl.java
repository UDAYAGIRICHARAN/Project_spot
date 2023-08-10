package com.example.springapp.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springapp.dao.Profiledao;
import com.example.springapp.user.User;

import java.util.List;
import java.util.Optional;

@Service
public class profileservicesImpl implements profilesevices {

    private final Profiledao profileDao;

    @Autowired
    public profileservicesImpl(Profiledao profileDao) {
        this.profileDao = profileDao;
    }

    @Override
public Optional<User> getUser(long id) {
    return profileDao.findById(id);
}


    @Override
    public User updateUser(long id, User updatedUser) {
        Optional<User> optionalUser = profileDao.findById(id);
        if (optionalUser.isPresent()) {
            User existingUser = optionalUser.get();
            existingUser.setFirstname(updatedUser.getFirstname());
            existingUser.setLastname(updatedUser.getLastname());
            existingUser.setEmail(updatedUser.getEmail());
            existingUser.setUsername(updatedUser.getUsername());
            existingUser.setRole(updatedUser.getRole());
            return profileDao.save(existingUser);
        } else {
            throw new RuntimeException("User not found with ID: " + id);
        }
    }

    @Override
    public User createUser(User newUser) {
        return profileDao.save(newUser);
    }

    @Override
    public List<User> getUsers() {
        return profileDao.findAll();
    }
}
