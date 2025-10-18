# Dashboard API

A Node.js API for providing data to a dashboard. Includes user statistics and performance metrics.

## Features

*   User authentication (JWT)
*   User management (create, read, update, delete)
*   Dashboard data endpoints (user statistics, performance metrics)
*   Database integration (MongoDB)

## Installation

1.  Clone the repository:

    
    git clone <repository_url>
    

2.  Install dependencies:

    
    npm install
    

3.  Configure environment variables:

    Create a `.env` file in the root directory and set the following variables:

    
    PORT=3000
    MONGODB_URI=mongodb://localhost:27017/dashboard
    JWT_SECRET=your-secret-key
    

4.  Run the application:

    
    npm start
    

## Endpoints

*   `POST /api/auth/register`:  Register a new user.
*   `POST /api/auth/login`:  Login and get a JWT token.
*   `GET /api/users`: Get all users (requires authentication).
*   `GET /api/users/:id`: Get a specific user (requires authentication).
*   `PUT /api/users/:id`: Update a user (requires authentication).
*   `DELETE /api/users/:id`: Delete a user (requires authentication).
*   `GET /api/dashboard/user-statistics`: Get user statistics (requires authentication).
*   `GET /api/dashboard/performance-metrics`: Get performance metrics (requires authentication).

## Technologies

*   Node.js
*   Express.js
*   MongoDB
*   Mongoose
*   JSON Web Tokens (JWT)
*   Bcrypt

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

MIT