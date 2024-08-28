package com.testTask.backend.services

import com.testTask.backend.models.User
import com.testTask.backend.repositories.UserRepository
import org.springframework.stereotype.Service

// Service class to handle user-related operations
@Service
class UserService(private val userRepository: UserRepository) {

    // Method to save a new user to the repository
    fun save(user: User): User {
        return this.userRepository.save(user) // Save the user and return the saved entity
    }

    // Method to find a user by their email address
    fun findByEmail(email: String): User? {
        return this.userRepository.findByEmail(email) // Return the user if found, otherwise null
    }

    // Method to retrieve a user by their ID
    fun getById(id: Int): User {
        return this.userRepository.getById(id) // Fetch the user by ID from the repository
    }
}