# React + Vite

# Hugly Developer Portal

## Overview

The Hugly Developer Portal is a web application designed for developers to manage their profiles and access various services. This application leverages a modern tech stack, including React, Tailwind CSS, Axios, React Icons, and a Spring Boot Kotlin backend. The project is initialized using Vite for a fast and efficient development experience.

## Features

- **User Authentication**: Users can log in and manage their profiles securely.
- **Responsive Design**: The application is fully responsive, providing a seamless experience on both desktop and mobile devices.
- **Dynamic Navigation**: A user-friendly navigation bar that adapts based on the user's authentication status.
- **Toast Notifications**: Feedback messages for user actions using `react-toastify`.
- **Profile Management**: Users can view and edit their profiles with ease.

## Tech Stack

- **Frontend**:
  - **React**: A JavaScript library for building user interfaces.
  - **Tailwind CSS**: A utility-first CSS framework for styling.
  - **Axios**: A promise-based HTTP client for making requests to the backend.
  - **React Icons**: A library for including icons in the application.
  - **Vite**: A build tool that provides a fast development experience.

- **Backend**:
  - **Spring Boot**: A framework that simplifies the development of Java applications.
  - **Kotlin**: A modern programming language that runs on the JVM, used for the backend development.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (v14 or higher)
- npm (v6 or higher)
- Java Development Kit (JDK 11 or higher)
- Kotlin

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/SirBento/TestTask.git
  
   ```

2. **Install the frontend dependencies**:

   ```bash
   cd frontend
   npm install
   ```

3. **Run the frontend application**:

   ```bash
   npm run dev
   ```

4. **Set up the backend**:
   - Navigate to your backend directory (e.g., `backend`).
   - Use your preferred method to run the Spring Boot application (e.g., using IntelliJ or running the JAR file).

### Configuration

- Update the API endpoint in the Axios configuration to point to your backend server.
- Adjust any environment variables as needed for your configuration.

## Usage

- Navigate to the application in your web browser (usually `http://localhost:5173`).
- Use the login form to access your developer portal.
- Explore the features, including profile management and settings.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to the open-source community for providing the tools and libraries that made this project possible.
- Special thanks to the contributors who helped improve this project.

---

Feel free to customize this README further to suit your project's specific needs!
