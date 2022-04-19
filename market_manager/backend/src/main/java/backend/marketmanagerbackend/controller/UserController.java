package backend.marketmanagerbackend.controller;

import java.util.List;
import java.util.Optional;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;
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
import backend.marketmanagerbackend.payload.request.TickersUpdateRequest;
import backend.marketmanagerbackend.payload.response.JwtResponse;
import backend.marketmanagerbackend.payload.response.MessageResponse;
import backend.marketmanagerbackend.security.jwt.JwtUtils;
import backend.marketmanagerbackend.security.services.UserDetailsImpl;

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

    @PostMapping("/updatetickers")
    public ResponseEntity<?> updateTickers(@Valid @RequestBody TickersUpdateRequest tickersUpdateRequest) {
        if(!(jwtUtils.validateJwtToken(tickersUpdateRequest.getAccessToken()))) {
            return ResponseEntity.badRequest().body(new MessageResponse("Error: Cannot validate JWT!"));
        }
        String username = jwtUtils.getUserNameFromJwtToken(tickersUpdateRequest.getAccessToken());
        Optional<User> user = userRepository.findByUsername(username);
        if(user.isPresent()) {
            User _user = user.get();
            _user.setTickers(tickersUpdateRequest.getTickers());
            userRepository.save(_user);
            return ResponseEntity.ok(new MessageResponse("Tickers updated successfully!"));
        } else {
            return ResponseEntity.badRequest().body(new MessageResponse("Error: Could not update tickers!"));
        }
    }
}