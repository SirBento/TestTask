# Test Task Backend
This project is a backend application built with Kotlin and Spring Boot, designed to handle user authentication and management. It provides RESTful APIs for user registration, login, and profile management, utilizing JWT for secure authentication.
## Features
- User registration with detailed information
- User login with JWT authentication
- Secure password storage using BCrypt hashing - CORS configuration for frontend integration
- User profile retrieval and management
- Logout functionality
## Technologies Used
- **Kotlin**: Programming language
- **Spring Boot**: Framework for building web applications
- **Spring Data JPA**: For database interactions
- **MySQL Database**: In-memory database for development - **JWT**: JSON Web Tokens for secure user authentication - **BCrypt**: For password hashing
## API Endpoints
### User Registration
- **Endpoint**: `POST /api/v1/register` - **Request Body**:
```json {
"firstname": "John",
"surname": "Doe",
"email": "john.doe@example.com", "idNumber": "123456789",
"gender": "Male",
"dob": "1990-01-01",
"phoneNumber": "123-456-7890", "physicalAddress": "123 Main St", "role": "User",
"department": "IT",
"companyName": "Example Corp", "companyAddress": "456 Business Rd", "password": "securePassword123"
}

 ```
### User Login
- **Endpoint**: `POST /api/v1/login` - **Request Body**:
```json {
"email": "john.doe@example.com",
"password": "securePassword123" }
```
### Get User Profile
- **Endpoint**: `GET /api/v1/user`
- **Authentication**: Requires JWT in a cookie.
### User Logout
- **Endpoint**: `POST /api/v1/logout`
- **Authentication**: Requires JWT in a cookie.
## CORS Configuration
The application is configured to allow CORS requests from specified origins, making it suitable for integration with frontend applications running on different ports.
## Getting Started
### Prerequisites
- JDK 11 or higher
- Maven
- An IDE (e.g., IntelliJ IDEA, Eclipse)
### Installation
1. Clone the repository: ```bash
git clone https://github.com/SirBento/TestTask.git cd backend ```
2. Build the project: ```bash
mvn clean install ```
3. Run the application:

 ```bash
mvn spring-boot:run ```
### Testing
You can test the API endpoints using tools like Postman or cURL. Ensure to set the appropriate headers and request bodies as specified.
## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.
## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```
### Adjustments Made
- Maven commands are specified for building and running the application.
- The structure remains clear and informative, making it easy for users to understand how to use the project.
