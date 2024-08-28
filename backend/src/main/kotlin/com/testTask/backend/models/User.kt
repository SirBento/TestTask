package com.testTask.backend.models

import com.fasterxml.jackson.annotation.JsonIgnore
import jakarta.persistence.*
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder

// Entity class representing a User in the database
@Entity
class User {
    // Unique identifier for the user, auto-generated
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    var id: Int = 0

    // User's first name
    @Column
    var firstname = ""

    // User's surname
    @Column
    var surname = ""

    // User's email address, must be unique
    @Column(unique = true)
    var email = ""

    // User's identification number
    @Column
    var idNumber = ""

    // User's gender
    @Column
    var gender = ""

    // User's date of birth
    @Column
    var dob = ""

    // User's phone number
    @Column
    var phoneNumber = ""

    // User's physical address
    @Column
    var physicalAddress = ""

    // User's role (e.g., admin, user)
    @Column
    var role = ""

    // User's department (if applicable)
    @Column
    var department = ""

    // User's company name
    @Column
    var companyName = ""

    // User's company address
    @Column
    var companyAddress = ""

    // User's password, stored securely
    @Column
    var password = ""
        @JsonIgnore // Prevents password from being serialized to JSON
        get() = field
        set(value) {
            // Encrypt the password before storing it
            val passwordEncoder = BCryptPasswordEncoder()
            field = passwordEncoder.encode(value)
        }

    // Method to compare a given password with the stored password
    fun comparePassword(password: String): Boolean {
        return BCryptPasswordEncoder().matches(password, this.password) // Check if passwords match
    }
}