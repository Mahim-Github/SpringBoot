# Spring Boot + Angular CRUD Application
Java
Spring Boot
Angular
MySQL(AIVEN)

A full-stack CRUD application with modern architecture, built with Spring Boot backend and Angular frontend, deployed on Aiven for managed database services.

## 🚀 Features
Backend (Spring Boot)
✅ Complete REST API with proper status codes
✅ Spring Data JPA with Hibernate ORM
✅ Layered architecture (Controller → Service → Repository)
✅ Exception handling with custom error responses
✅ Input validation with Jakarta Bean Validation
✅ Pagination and sorting support
✅ CORS configuration for frontend integration

Frontend (Angular)
✅ Responsive UI with Angular Material/Bootstrap
✅ Modular component architecture
✅ Angular Routing with lazy loading
✅ Reactive forms with validation
✅ HTTP Interceptors for error handling
✅ Service layer for API communication
✅ Toast notifications for user feedback

Database (Aiven MySQL)
🔒 Fully-managed cloud database
⚡ Automatic scaling and backups
📊 Performance monitoring included
🔐 Enterprise-grade security

## 🛠️ Tech Stack
**Frontend:**
- Angular
- TypeScript
- HTML/CSS
- Bootstrap (optional)

**Backend:**
- Spring Boot
- Java
- Spring Data JPA
- H2 or MySQL Database
- Maven

## 📁 Project Structure
```
user-management-app/
├── backend/                  # Spring Boot application
│   ├── src/main/java/
│   │   ├── com/example/user/
│   │   │   ├── config/       # Configuration classes
│   │   │   ├── controller/   # REST controllers
│   │   │   ├── dto/          # Data Transfer Objects
│   │   │   ├── exception/    # Exception handling
│   │   │   ├── model/        # Entity classes
│   │   │   ├── repository/   # JPA repositories
│   │   │   ├── service/      # Business logic
│   │   │   └── UserApp.java  # Main class
│   │   └── resources/
│   │       ├── application.yml # Config
│   │       └── ...          
│   └── pom.xml               # Maven config
│
├── frontend/                 # Angular application
│   ├── src/app/
│   │   ├── components/       # UI components
│   │   ├── models/           # TypeScript interfaces
│   │   ├── services/         # API services
│   │   ├── shared/           # Shared modules
│   │   ├── utils/            # Utility functions
│   │   └── app.module.ts     # Root module
│   └── ...                   
│
├── docker-compose.yml        # Container orchestration
├── README.md                 # This file
└── LICENSE                   # Project license
```

Prerequisites
Java 17+
Node.js 16+
Angular CLI 15+
MySQL 8.0+ (or Aiven account)

Installation
Clone the repository
git clone https://github.com/your-repo/user-management-app.git
cd user-management-app

Set up backend
cd backend
mvn clean install
Configure database in application.yml

Set up frontend

cd ../frontend
npm install
Run both applications

# In backend directory
mvn spring-boot:run

# In frontend directory
ng serve
🌐 API Endpoints
Method	Endpoint	Description
GET	/api/users	Get all users
GET	/api/users/{id}	Get user by ID
POST	/api/users	Create new user
PUT	/api/users/{id}	Update user
DELETE	/api/users/{id}	Delete user

