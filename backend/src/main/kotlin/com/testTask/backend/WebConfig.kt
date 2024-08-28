package com.testTask.backend

import org.springframework.context.annotation.Configuration
import org.springframework.web.servlet.config.annotation.CorsRegistry
import org.springframework.web.servlet.config.annotation.EnableWebMvc
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer

// Configuration class for setting up CORS (Cross-Origin Resource Sharing)
@Configuration
@EnableWebMvc // Enables Spring MVC support
class WebConfig : WebMvcConfigurer {

    // Method to configure CORS settings
    override fun addCorsMappings(registry: CorsRegistry) {
        registry.addMapping("/**") // Allow CORS for all endpoints
            .allowedOrigins(
                "http://localhost:5173",
                "http://localhost:3000",
                "http://localhost:8080",
                "http://localhost:4200"
            ) // Specify allowed origins
            .allowCredentials(true) // Allows the frontend to send credentials (e.g., cookies)
    }
}