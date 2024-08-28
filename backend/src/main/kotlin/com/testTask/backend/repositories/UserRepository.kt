package com.testTask.backend.repositories

import com.testTask.backend.models.User
import org.springframework.data.jpa.repository.JpaRepository

// Repository interface for User entity, extending JpaRepository
interface UserRepository: JpaRepository<User, Int> {
    // Method to find a user by their email address, returns null if not found
    fun findByEmail(email: String): User?
}