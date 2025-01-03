---

# Project Name

Green_leaf

## Server-Side Implementation

The server-side of **Green Leaf** is built with modern web technologies to ensure robust functionality, scalability, and seamless integration with the front end. Here are the details:

### Technologies Used
- **Node.js**: A fast and lightweight runtime for executing JavaScript on the server.
- **Express.js**: A flexible Node.js web application framework used for building the RESTful API.
- **MongoDB**: A NoSQL database for storing user data, posts, comments, and other relevant information.
- **Mongoose**: An Object Data Modeling (ODM) library for MongoDB and Node.js.
- **Cloudinary**: For storing and managing user-uploaded images (profile pictures, post images).
- **Stripe API**: Handles secure payments for premium content subscriptions.
- **JWT (JSON Web Token)**: For user authentication and role-based authorization.
- **Middleware**: Custom middleware for request validation, authentication, and error handling.

### Key Features
1. **User Authentication**: 
   - Secure user login and registration.
   - Passwords are encrypted using industry-standard algorithms.

2. **Premium Content Access**:
   - Payment integration using Stripe for unlocking premium features and content.
   - User roles are dynamically updated upon successful payment.

3. **Dynamic API Endpoints**:
   - CRUD operations for posts, comments, and user profiles.
   - Endpoints for filtering, searching, and sorting gardening content by category.

4. **Real-Time Features**:
   - Follow/unfollow functionality for users.
   - Upvote/downvote system for interactive post engagement.

5. **Image Management**:
   - Upload, update, and manage images seamlessly via Cloudinary.
   - Optimized image storage and delivery.

6. **Admin Controls**:
   - Manage users, posts, and payments.
   - Analytics endpoints for tracking user activity and premium content engagement.
     
 ```plaintext
/src
 ├── /app
 │   ├── /config
 │   │    ├── multer.config.ts       # Configuration for Multer file uploads
 │   │    ├── index.ts               # Main configuration entry
 │   │    └── cloudinary.config.ts   # Configuration for Cloudinary
 │   │
 │   ├── /error
 │   │    ├── handleCastError.ts       # Handler for MongoDB CastError
 │   │    ├── handleZodError.ts        # Handler for Zod validation errors
 │   │    ├── handleValidationError.ts # Handler for general validation errors
 │   │    ├── handleDuplicateError.ts  # Handler for duplicate key errors
 │   │    └── error.ts                 # General error utilities
 │   │
 │   ├── /interface
 │   │    ├── notFound.ts             # Interface for handling 404 errors
 │   │    ├── index.d.ts              # Global TypeScript declarations
 │   │    └── error.ts                # Error handling interfaces
 │   │
 │   ├── /middleware
 │   │    ├── validationRequest.ts    # Middleware to validate incoming requests
 │   │    ├── globalErrorHandler.ts   # Middleware for handling global errors
 │   │    └── auth.ts                 # Authentication middleware
 │   │
 │   ├── /modules
 │   │    ├── /comment
 │   │    │    ├── comment.services.ts   # Business logic for comments
 │   │    │    ├── comment.router.ts     # API routes for comments
 │   │    │    ├── comment.model.ts      # Mongoose schema for comments
 │   │    │    ├── comment.interface.ts  # Interface for comments
 │   │    │    └── comment.controller.ts # Controller for comment endpoints
 │   │    │
 │   │    ├── /user
 │   │    │    ├── user.validation.ts    # Validation schema for users
 │   │    │    ├── user.utils.ts         # Utility functions for users
 │   │    │    ├── user.services.ts      # Business logic for users
 │   │    │    ├── user.router.ts        # API routes for users
 │   │    │    ├── user.model.ts         # Mongoose schema for users
 │   │    │    ├── user.interface.ts     # Interface for users
 │   │    │    ├── user.controller.ts    # Controller for user endpoints
 │   │    │    └── user.constants.ts     # Constants related to users
 │   │    │
 │   │    ├── /post
 │   │    │    ├── post.validation.ts    # Validation schema for posts
 │   │    │    ├── post.services.ts      # Business logic for posts
 │   │    │    ├── post.router.ts        # API routes for posts
 │   │    │    ├── post.model.ts         # Mongoose schema for posts
 │   │    │    ├── post.interface.ts     # Interface for posts
 │   │    │    └── post.controller.ts    # Controller for post endpoints
 │   │    │
 │   │    └── /payment
 │   │         ├── payment.services.ts   # Business logic for payments
 │   │         ├── payment.router.ts     # API routes for payments
 │   │         ├── payment.model.ts      # Mongoose schema for payments
 │   │         ├── payment.interface.ts  # Interface for payments
 │   │         └── payment.controller.ts # Controller for payment endpoints
 │   │
 │   ├── /router
 │   │    └── router.ts                  # Main router combining all module routes
 │   │
 │   ├── /utils
 │   │    ├── sendResponse.ts            # Utility for sending consistent API responses
 │   │    └── catchAsync.ts              # Wrapper to catch async errors
 │
 ├── app.ts           # Core application setup
 ├── server.ts        # Server setup and initialization

```


### How to Run the Server
1. Clone the repository:
   ```bash
   [git clone https://github.com/yourusername/green-leaf.git](https://github.com/Akahad1/Green_Leaf_Server_Site.git)
   cd Green_Leaf_Server_Site
   
2. npm install
 
3, PORT=5000

   MONGO_URI=your_mongodb_connection_string,

   JWT_SECRET=your_secret_key,

   CLOUDINARY_NAME=your_cloudinary_name,

   CLOUDINARY_API_KEY=your_api_key,

   CLOUDINARY_API_SECRET=your_api_secret,

   STRIPE_SECRET_KEY=your_stripe_secret_key,

4, npm start

#URl

- server_url =https://key-craft-server-site.vercel.app/
- client-url= https://green-leaf-theta.vercel.app

