# Webtoon API
A RESTful API built with Node.js, Express, and MongoDB to manage a collection of webtoons inspired by the article "Top 14 Castle Swimmer Characters You Need to Know." This API allows users to fetch, create, and delete webtoon entries, with authentication and rate limiting for secure usage.

## Demo
https://www.loom.com/share/205a2a5f0a5442ff8054398490ccde92?sid=cd8e4106-72fc-4f39-bda0-a9d6b83f9bf0

## Features
- **GET /api/webtoons**: Fetch all webtoons with basic details (title, description, and characters).
- **POST /api/webtoons**: Add a new webtoon entry (protected by JWT-based authentication).
- **GET /api/webtoons/:** Fetch a specific webtoon by its ID, returning detailed information.
- **DELETE /api/webtoons/** : Remove a webtoon by its ID (protected by JWT-based authentication).
- **Rate Limiting**: Ensures that each IP can make a maximum of 100 requests in 15 minutes.
- **JWT Authentication:** Protects POST and DELETE endpoints, requiring valid tokens for access.
 
## Technologies Used

- **Node.js**: JavaScript runtime for the backend.
- **Express**: Web framework for building the API.
- **MongoDB**: NoSQL database for storing webtoon data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB.
- **JWT (JSON Web Token)**: Used for user authentication.
- **dotenv**: For environment configuration.
- **express-rate-limit**: Middleware for rate limiting requests to prevent abuse.
