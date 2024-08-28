package com.testTask.backend.controllers

import com.testTask.backend.dtos.LoginDTO
import com.testTask.backend.dtos.Message
import com.testTask.backend.dtos.RegisterDTO
import com.testTask.backend.models.User
import com.testTask.backend.services.UserService
import io.jsonwebtoken.Jwts
import io.jsonwebtoken.security.Keys
import jakarta.servlet.http.Cookie
import jakarta.servlet.http.HttpServletResponse
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import java.util.*

@RestController
@RequestMapping("api/v1/")
class AuthController(private val userService: UserService) {

    // Secret key for JWT signing
    val secretKey = Keys.hmacShaKeyFor("t€stTaskB@ckendC00k!eSecret@K£y".toByteArray())

    // Endpoint for user registration
    @PostMapping("register")
    fun register(@RequestBody body: RegisterDTO): ResponseEntity<User> {
        val user = User()
        // Set user properties from the registration DTO
        user.firstname = body.firstname
        user.surname = body.surname
        user.email = body.email
        user.idNumber = body.idNumber
        user.gender = body.gender
        user.dob = body.dob
        user.phoneNumber = body.phoneNumber
        user.physicalAddress = body.physicalAddress
        user.role = body.role
        user.department = body.department
        user.companyName = body.companyName
        user.companyAddress = body.companyAddress
        user.password = body.password

        // Save the user and return the response
        return ResponseEntity.ok(this.userService.save(user))
    }

    // Endpoint for user login
    @PostMapping("login")
    fun login(@RequestBody body: LoginDTO, response: HttpServletResponse): ResponseEntity<Any> {
        // Find user by email
        val user = this.userService.findByEmail(body.email)
            ?: return ResponseEntity.badRequest().body(Message("user not found!"))

        // Check if the provided password matches
        if (!user.comparePassword(body.password)) {
            return ResponseEntity.badRequest().body(Message("invalid password!"))
        }

        // Create JWT token
        val issuer = user.id.toString()
        val jwt = Jwts.builder()
            .issuer(issuer)
            .expiration(Date(System.currentTimeMillis() + 60 * 24 * 1000)) // 1 day expiration
            .signWith(secretKey, Jwts.SIG.HS256)
            .compact()

        // Create a secure cookie to store the JWT
        val cookie = Cookie("jwt", jwt)
        cookie.isHttpOnly = true // Prevents client-side access to the cookie

        // Add the cookie to the response
        response.addCookie(cookie)

        // Return success message
        return ResponseEntity.ok(Message("success"))
    }

    // Endpoint to get user details based on JWT
    @GetMapping("user")
    fun user(@CookieValue("jwt") jwt: String?): ResponseEntity<Any> {
        try {
            // Check if JWT is present
            if (jwt == null) {
                return ResponseEntity.status(401).body(Message("unauthenticated"))
            }

            // Parse the JWT and extract user details
            val body = Jwts.parser()
                .verifyWith(secretKey)
                .build()
                .parseSignedClaims(jwt)
                .payload

            // Retrieve and return user information
            return ResponseEntity.ok(this.userService.getById(body.issuer.toInt()))
        } catch (e: Exception) {
            // Handle any exceptions and return unauthenticated message
            return ResponseEntity.status(401).body(Message("unauthenticated"))
        }
    }

    // Endpoint for user logout
    @PostMapping("logout")
    fun logout(response: HttpServletResponse): ResponseEntity<Any> {
        // Create a cookie to invalidate the JWT
        val cookie = Cookie("jwt", "")
        cookie.maxAge = 0 // Set cookie age to 0 to delete it

        // Add the cookie to the response
        response.addCookie(cookie)

        // Return success message
        return ResponseEntity.ok(Message("success"))
    }
}