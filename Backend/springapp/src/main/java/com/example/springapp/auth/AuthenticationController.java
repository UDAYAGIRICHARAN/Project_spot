package com.example.springapp.auth;

import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.neo4j.Neo4jProperties;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@ComponentScan
@CrossOrigin
public class AuthenticationController {
    
    @Autowired
    private final AuthenticationService service;
    @PostMapping("/users")
    public ResponseEntity<AuthenticationResponce> register(
            @RequestBody RegisterRequest request
    ){
        return ResponseEntity.ok(service.register(request));
    }



    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponce> authenticate(
            @RequestBody AuthenticateRequest request
    ){
        return ResponseEntity.ok(service.authenticate(request));
    }
}
