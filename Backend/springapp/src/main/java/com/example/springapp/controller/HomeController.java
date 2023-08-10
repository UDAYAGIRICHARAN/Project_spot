package com.example.springapp.controller ;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import com.example.springapp.services.profilesevices;
import com.example.springapp.service.ProjectService;
import com.example.springapp.service.TaskService;
import com.example.springapp.user.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

@CrossOrigin
@RestController
@RequestMapping("/Home")

public class HomeController {
    @Autowired
    private profilesevices td;
    @Autowired
    private ProjectService projectService;
    @Autowired
    private TaskService taskService;

    @GetMapping("/logged-in-user-id")
    public ResponseEntity<Map<String, Long>> getLoggedInUserId() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        if (userDetails instanceof User) {
            User user = (User) userDetails;
            Long loggedInUserId = user.getId();
            Map<String, Long> response = new HashMap<>();
            response.put("userId", loggedInUserId);
            return ResponseEntity.ok().body(response);
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("users/{id}")
    public ResponseEntity<User> getUserById(@PathVariable("id") Integer id) {
        Optional<User> optionalUser = td.getUser(id);
        return optionalUser.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/totalProjectCount")
    public ResponseEntity<Integer> getTotalProjectCount() {
        int totalProjectCount = projectService.getTotalProjectCount();
        return new ResponseEntity<>(totalProjectCount, HttpStatus.OK);
    }
    @GetMapping("/totalTaskCount")
    public ResponseEntity<Integer> getTotalTaskCount() {
        int totalTaskCount = taskService.getTotalTaskCount();
        return new ResponseEntity<>(totalTaskCount, HttpStatus.OK);
    }
}

