package com.testTask.backend.repositories

import com.testTask.backend.models.User
import org.springframework.data.jpa.repository.JpaRepository

interface UserRepository: JpaRepository<User, Int> {
    fun findByEmail(email:String): User?
}