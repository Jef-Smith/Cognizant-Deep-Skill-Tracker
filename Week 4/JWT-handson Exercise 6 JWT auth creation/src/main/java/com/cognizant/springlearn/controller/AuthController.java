package com.cognizant.springlearn.controller;

import com.cognizant.springlearn.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import java.util.Base64;



import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpServletRequest;

@RestController
public class AuthController {

    @Autowired
    private JwtUtil jwtUtil;

    @GetMapping("/authenticate")
    public ResponseEntity<?> authenticate(HttpServletRequest request) {
        //System.out.println("✅ AuthController hit!");
        String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);

        if (authHeader != null && authHeader.startsWith("Basic ")) {
            String base64Credentials = authHeader.substring("Basic ".length());
            byte[] credDecoded = Base64.getDecoder().decode(base64Credentials);

            String credentials = new String(credDecoded);
            String[] userAndPass = credentials.split(":", 2);

            if ("user".equals(userAndPass[0]) && "pwd".equals(userAndPass[1])) {
                String token = jwtUtil.generateToken(userAndPass[0]);
                return ResponseEntity.ok().body("{\"token\":\"" + token + "\"}");
            }
        }

        return ResponseEntity.status(401).body("Invalid credentials");
    }
}
