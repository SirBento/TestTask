# Hugly Developer Portal

## Overview
The Hugly Developer Portal is a comprehensive web application designed for developers to manage their profiles and access various services. This application features a modern tech stack with a **Kotlin and Spring Boot** backend and a **React** frontend, providing a seamless experience across devices.

## Project Structure
```
/testTask
│
├── /backend         # Contains the backend application
│   └── ...         # Backend code and resources
│
└── /frontend        # Contains the frontend application
    └── ...         # Frontend code and resources
```

## Features
- **User Authentication**: Secure login and profile management.
- **Responsive Design**: Optimized for both desktop and mobile views.
- **Dynamic Navigation**: Navigation adapts based on authentication status.
- **Toast Notifications**: User feedback messages using `react-toastify`.


## Technologies Used

### Frontend
- **Vite**: Fast development build tool.
- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React Router Dom**: For fast and easy navigation.
- **Axios**: Promise-based HTTP client for API requests.
- **React Icons**: Library for incorporating icons.
- **React Datepicker**: For select  date.
- **React Icons**: UI enhancements
- **React Lottie**: For Aninated Images
- **react-toastify**: To show toast to the user



### Backend
- **Kotlin**: Modern programming language for backend development.
- **Spring Boot**: Framework for simplifying Java application development.
- **Spring Data JPA**: For database interactions.
- **MySQL**: Database for user data storage.
- **JWT**: Secure user authentication.
- **BCrypt**: For password hashing

## Getting Started

### Prerequisites
Ensure you have the following installed:
- **For Frontend**:
  - Node.js (v14 or higher)
  - npm (v6 or higher)
- **For Backend**:
  - Java Development Kit (JDK 11 or higher)
  - Kotlin
  - Maven

### Installation

#### 1. Clone the repository:
```bash
git clone https://github.com/SirBento/TestTask.git
cd TestTask
```

#### 2. Set up the Backend:
- Navigate to the backend directory:
```bash
cd backend
```
- Build and run the backend application:
```bash
mvn clean install
mvn spring-boot:run
```

#### 3. Set up the Frontend:
- Navigate to the frontend directory:
```bash
cd frontend
```
- Install the frontend dependencies:
```bash
npm install
```
- Run the frontend application:
```bash
npm run dev
```

### Configuration
- Update the API endpoint in the Axios configuration to point to your backend server.
- Adjust any environment variables as needed for your configuration.

## Usage
- Access the application in your web browser at `http://localhost:5173`.
- Use the login form to access your developer portal.
- Explore the features including profile management and settings.

## API Endpoints
### User Registration
- **Endpoint**: `POST /api/v1/register` - **Request Body**:
```json 
{
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
```json 
{
"email": "john.doe@example.com",
"password": "securePassword123" 
}
```
### Get User Profile
- **Endpoint**: `GET /api/v1/user`
- **Authentication**: Requires JWT in a cookie.
### User Logout
- **Endpoint**: `POST /api/v1/logout`
- **Authentication**: Requires JWT in a cookie.
## CORS Configuration
The application is configured to allow CORS requests from specified origins, making it suitable for integration with frontend applications running on different ports.


## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/YourFeature
   ```
3. Make changes and commit:
   ```bash
   git commit -m 'Add new feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/YourFeature
   ```
5. Open a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments
- Thanks to the open-source community for the tools and libraries that made this project possible.
- Special thanks to all contributors who helped improve this project.

---

Feel free to customize this README further to suit your project's specific needs!
```

This README provides clear instructions for setting up both the frontend and backend while maintaining an overview of the entire project.
