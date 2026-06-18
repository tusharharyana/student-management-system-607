package com.example.sms.config;

import com.example.sms.service.JwtService;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import java.io.IOException;
import java.util.Collections;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;

@Component
public class JwtFilter extends OncePerRequestFilter {

    @Autowired
    private JwtService jwtService;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

        String header = request.getHeader("Authorization");

        if(header != null && header.startsWith("Bearer ")){
            String token = header.substring(7);

            System.out.println(token);
            System.out.println(jwtService.isValid(token));

            if(jwtService.isValid(token)){
                    String username = jwtService.getUsername(token);

            UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(username, null, Collections.emptyList());			
			SecurityContextHolder.getContext().setAuthentication(auth);
            }
        }
        
        filterChain.doFilter(request, response);
    }
}