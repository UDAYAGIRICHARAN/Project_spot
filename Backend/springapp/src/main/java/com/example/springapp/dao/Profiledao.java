package com.example.springapp.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.springapp.user.User;

public interface Profiledao extends JpaRepository<User, Long> {

}
