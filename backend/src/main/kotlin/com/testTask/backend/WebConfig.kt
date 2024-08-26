package com.testTask.backend

import org.springframework.context.annotation.Configuration
import org.springframework.web.servlet.config.annotation.CorsRegistry
import org.springframework.web.servlet.config.annotation.EnableWebMvc
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer

@Configuration
@EnableWebMvc
class WebConfig : WebMvcConfigurer {
    //Avoid frontend backend communication problems due to different local hosts
    override fun addCorsMappings(registry: CorsRegistry) {
        registry.addMapping("/**")
            .allowedOrigins( "localhost:5173","http://localhost:3000", "http://localhost:8080", "http://localhost:4200")
            .allowCredentials(true) //allows frontend to get the cookie
    }
}