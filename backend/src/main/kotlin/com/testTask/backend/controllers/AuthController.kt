package com.testTask.backend.controllers

import com.testTask.backend.dtos.LoginDTO
import com.testTask.backend.dtos.Message
import com.testTask.backend.dtos.RegisterDTO
import com.testTask.backend.models.User
import com.testTask.backend.services.UserService
import io.jsonwebtoken.Jwts
import io.jsonwebtoken.security.Keys
import io.jsonwebtoken.SignatureAlgorithm
import jakarta.servlet.http.Cookie
import jakarta.servlet.http.HttpServletResponse
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import java.util.*

@RestController
@RequestMapping("api/v1/")
class AuthController(private val userService: UserService) {

     val secretKey = Keys.hmacShaKeyFor("t€stTaskB@ckendC00k!eSecret@K£y".toByteArray())

    @PostMapping("register")
    fun register(@RequestBody body: RegisterDTO): ResponseEntity<User> {
        val user = User()
        user.firstname= body.firstname
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

        return ResponseEntity.ok(this.userService.save(user))
    }

    @PostMapping("login")
    fun login(@RequestBody body: LoginDTO, response: HttpServletResponse): ResponseEntity<Any> {
        val user = this.userService.findByEmail(body.email)
            ?: return ResponseEntity.badRequest().body(Message("user not found!"))

        if (!user.comparePassword(body.password)) {
            return ResponseEntity.badRequest().body(Message("invalid password!"))
        }

        val issuer = user.id.toString()

        val jwt = Jwts.builder()
            .issuer(issuer)
            .expiration(Date(System.currentTimeMillis() + 60 * 24 * 1000))// 1 day
            .signWith(secretKey, Jwts.SIG.HS256)
            .compact()

        //.signWith(SignatureAlgorithm.HS512, "secret").compact()
        //.signWith(SignatureAlgorithm.HS512).compact()
        // .signWith("secret", Jwts.SIG.HS512,)

        val cookie = Cookie("jwt", jwt)

        //secure cookie from frontend access
        cookie.isHttpOnly = true

        response.addCookie(cookie)

        return ResponseEntity.ok(Message("success"))
    }

    @GetMapping("user")
    fun user(@CookieValue("jwt") jwt: String?): ResponseEntity<Any> {
        try {
            if (jwt == null) {
                return ResponseEntity.status(401).body(Message("unauthenticated"))
            }

            //Jwts.parser().setSigningKey("secret").parseClaimsJws(jwt).body
            val body = Jwts.parser()
                       .verifyWith(secretKey)
                       .build()
                       .parseSignedClaims(jwt)
                       .payload

            return ResponseEntity.ok(this.userService.getById(body.issuer.toInt()))
        } catch (e: Exception) {
            return ResponseEntity.status(401).body(Message("unauthenticated"))
        }
    }

    @PostMapping("logout")
    fun logout(response: HttpServletResponse): ResponseEntity<Any> {
        val cookie = Cookie("jwt", "")
        cookie.maxAge = 0

        response.addCookie(cookie)

        return ResponseEntity.ok(Message("success"))
    }
}