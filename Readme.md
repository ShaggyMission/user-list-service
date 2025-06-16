# 📋 User List Service - Shaggy Mission

<div align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
  <img src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white" alt="Sequelize" />
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
</div>

<div align="center">
  <h3>🚀 Paginated User Directory Microservice for Pet Rescue Platform</h3>
  <p><em>Part of the Shaggy Mission ecosystem - Listing all heroes in our rescue mission! 🐾</em></p>
</div>

---

## 🌟 Overview

The **User List Service** is a specialized directory microservice in the Shaggy Mission platform that provides paginated user listing capabilities. This service enables administrators and coordinators to browse through all registered volunteers, adopters, veterinarians, and contributors in an organized and efficient manner for better rescue mission management.

## 🎯 What This Service Does

- **Paginated User Listing**: Retrieves user lists with efficient pagination support
- **Security-First Design**: Excludes sensitive information like passwords from responses  
- **Ordered Results**: Returns users sorted by registration date (newest first)
- **Performance Optimization**: Uses limit/offset queries for fast data retrieval
- **Complete User Profiles**: Provides comprehensive user information including timestamps
- **Scalable Architecture**: Implements repository pattern with service layer separation

## 🛠️ Tech Stack

- **Runtime**: Node.js with Express.js framework
- **Database**: PostgreSQL with Sequelize ORM
- **Architecture**: Clean architecture with repository and service layers
- **Query Optimization**: Efficient pagination with findAndCountAll
- **Documentation**: Swagger UI integration
- **Data Security**: Automatic password field exclusion

## 📡 API Endpoints

### Paginated User List Endpoint
**`GET /users/list?page=1`**
- Retrieves paginated list of all registered users
- Supports page parameter for navigation (defaults to page 1)
- Returns 10 users per page with pagination metadata
- Excludes sensitive password information
- Orders results by registration date (newest first)

```json
{
  "users": [
    {
      "id": "mV-Wcd5G7sgh",
      "firstName": "Lisseth",
      "lastName": "Pacheco", 
      "email": "lis.18905@hotmail.com",
      "phone": "0995488400",
      "createdAt": "2025-06-04T04:25:03.000Z",
      "updatedAt": "2025-06-04T04:25:03.000Z"
    }
  ],
  "pagination": {
    "currentPage": 1,
    "pageSize": 10,
    "totalItems": 25,
    "totalPages": 3
  }
}
```

### API Documentation Endpoint  
**`GET /users/listUsers-docs`**
- Interactive Swagger UI documentation
- Complete API specification and testing interface

```json
{
  "swagger": "2.0",
  "info": {
    "title": "User List API",
    "version": "1.0.0"
  }
}
```

## 🔧 Core Functionality

### Pagination System
The service implements efficient pagination by calculating offset values based on page numbers, using Sequelize's findAndCountAll for optimized queries, returning both user data and total count in single database calls, and providing comprehensive pagination metadata including current page, page size, total items, and total pages.

### Data Security
Security is built into the core functionality by automatically excluding password fields from all responses, ensuring sensitive user information never leaves the database layer, and maintaining data privacy while providing necessary user directory information.

### Performance Architecture
The service follows clean architecture principles with separated repository, service, and controller layers, enabling efficient data access patterns, optimized database queries, and maintainable code structure for scalable user directory operations.

## 🌐 Service Integration

This microservice serves as the user directory component for the Shaggy Mission platform, enabling administrators and coordinators to browse through all platform users for rescue mission coordination, volunteer management, and community oversight.

## 🗃️ Database Operations

The service performs optimized database operations using Sequelize's findAndCountAll method for efficient pagination, ORDER BY clauses for consistent result ordering, attribute exclusion for security, and limit/offset patterns for performance optimization.

## 📊 Response Structure

Returns structured responses with user arrays containing complete profile information (excluding passwords), pagination objects with navigation metadata, consistent data formatting across all requests, and timestamp information for user registration tracking.

---

<div align="center">
  <p><strong>Built with ❤️ for street dogs and cats everywhere 🐕🐱</strong></p>
  <p><em>Every user listed brings our rescue community together!</em></p>
</div>