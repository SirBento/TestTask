package com.testTask.backend.models

import com.fasterxml.jackson.annotation.JsonIgnore
import jakarta.persistence.*
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
// import javax.persistence.*

@Entity
class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    var id: Int = 0

    @Column
    var firstname = ""

    @Column
    var surname = ""

    @Column(unique = true)
    var email = ""

    @Column
    var idNumber = ""

    @Column
    var gender = ""

    @Column
    var dob = ""

    @Column
    var phoneNumber = ""

    @Column
    var physicalAddress = ""

    @Column
    var role = ""

    @Column
    var department = ""

    @Column
    var companyName = ""

    @Column
    var companyAddress = ""
    @Column
    var password = ""
        @JsonIgnore
        get() = field
        set(value) {
            val passwordEncoder = BCryptPasswordEncoder()
            field = passwordEncoder.encode(value)
        }

    fun comparePassword(password: String): Boolean {
        return BCryptPasswordEncoder().matches(password, this.password)
    }
}