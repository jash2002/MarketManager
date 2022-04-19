package backend.marketmanagerbackend.controller;

import java.util.List;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;


import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

import backend.marketmanagerbackend.model.User;
import backend.marketmanagerbackend.repository.UserRepository;
import backend.marketmanagerbackend.payload.request.SignupRequest;
import backend.marketmanagerbackend.payload.request.LoginRequest;
import backend.marketmanagerbackend.payload.response.JwtResponse;
import backend.marketmanagerbackend.payload.response.MessageResponse;
import backend.marketmanagerbackend.security.jwt.JwtUtils;
import backend.marketmanagerbackend.security.services.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    PasswordEncoder encoder;
    @Autowired
    JwtUtils jwtUtils;

    @GetMapping("/users")
    public List < User > getUsers() {
        return this.userRepository.findAll();
    }

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));
		SecurityContextHolder.getContext().setAuthentication(authentication);
		String jwt = jwtUtils.generateJwtToken(authentication);
        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        return ResponseEntity.ok(new JwtResponse(jwt, userDetails.getUsername(), userDetails.getEmail(), userDetails.getTickers()));
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
        if (userRepository.existsByUsername(signUpRequest.getUsername())) {
			return ResponseEntity
					.badRequest()
					.body(new MessageResponse("Error: Username is already taken!"));
		}
		if (userRepository.existsByEmail(signUpRequest.getEmail())) {
			return ResponseEntity
					.badRequest()
					.body(new MessageResponse("Error: Email is already in use!"));
		}
        User user = new User(signUpRequest.getEmail(), encoder.encode(signUpRequest.getPassword()), signUpRequest.getTickers());
        userRepository.save(user);
		return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
    }

    // Code for update and delete
    // @PutMapping("/update")
    // public User updateUser(@Valid @RequestBody LoginRequest loginRequest, @RequestBody User user) {
    //     Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));
	// 	SecurityContextHolder.getContext().setAuthentication(authentication);
	// 	String jwt = jwtUtils.generateJwtToken(authentication);
    //     UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
    //     return accService.updateUser(user);
    //     // return ResponseEntity.ok(new JwtResponse(jwt, accService.updateUser(user));
    // }

    // @DeleteMapping("/delete/{id}")
    // public String deleteUser(@PathVariable int id) {


    //     return accService.deleteUser(id);
    // }
}