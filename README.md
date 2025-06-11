# User Management REST API

A RESTful API built with Node.js, Express, and MongoDB for managing user data. This API provides complete CRUD operations for user management with database persistence.

## Features

- Create new users
- Get all users 
- Get user by ID
- Update user information
- Delete users
- MongoDB database integration
- Error handling and validation

## Prerequisites

- Node.js (v12 or higher)
- npm (Node Package Manager)
- MongoDB (local or Atlas instance)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Mithila-Stack-Training-and-Development/user-management.git
cd <project-directory>
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
Create a `.env` file in the root directory and add:
```env
PORT=3002
MONGODB_URI=your_mongodb_connection_string
```

## Running the Application

To start the server:
```bash
npm start
```

The server will start running at `http://localhost:3002`

## API Endpoints

### Users

#### Get All Users
- `GET /users`
- Query Parameters:
  - `page` (optional): Page number for pagination
  - `limit` (optional): Number of items per page
- Response: Array of user objects

#### Get User by ID
- `GET /users/:id`
- Parameters:
  - `id`: User's unique identifier
- Response: Single user object

#### Create User
- `POST /users`
- Request Body:
```json
{
  "name": "John",
  "age": 20,
  "city": "New York"
}
```
- Response: Created user object with ID

#### Update User
- `PUT /users/:id`
- Parameters:
  - `id`: User's unique identifier
- Request Body:
```json
{
  "name": "John Updated",
  "age": 21,
  "city": "Los Angeles"
}
```
- Response: Updated user object

#### Delete User
- `DELETE /users/:id`
- Parameters:
  - `id`: User's unique identifier
- Response: Success message

## Project Structure

```
├── controllers/     # Request handlers
├── models/         # Database models
├── routes/         # API routes
├── config/         # Configuration files
├── middleware/     # Custom middleware
└── utils/          # Utility functions
```

## Error Handling

The API implements proper error handling for:
- Invalid requests
- Not found resources
- Database errors
- Validation errors

## Database Schema

The User model includes the following fields:
- `name` (String, required)
- `age` (Number, required)
- `city` (String, required)
- `createdAt` (Date, auto-generated)
- `updatedAt` (Date, auto-generated)

## Example User Object

```json
{
  "id": 1,
  "name": "John",
  "age": 20,
  "city": "New York"
}
``` 