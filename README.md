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

### Folder Structure

/server
  ├── /config           # Configuration files (e.g., database, environment variables)
  │    ├── db.js         # MongoDB connection setup
  │    └── cloudinary.js # Cloudinary configuration for image uploads
  │
  ├── /controllers      # Logic for handling requests and responses
  │    ├── authController.js  # User authentication and authorization logic
  │    ├── postController.js  # CRUD operations for posts
  │    ├── commentController.js # CRUD operations for comments
  │    ├── userController.js   # User profile management logic
  │    └── paymentController.js # Stripe payment handling
  │
  ├── /models           # Mongoose schemas for MongoDB collections
  │    ├── User.js       # User schema
  │    ├── Post.js       # Post schema
  │    ├── Comment.js    # Comment schema
  │    └── Payment.js    # Payment history schema
  │
  ├── /routes           # API endpoints for different features
  │    ├── authRoutes.js  # Authentication-related routes
  │    ├── postRoutes.js  # Routes for posts
  │    ├── commentRoutes.js # Routes for comments
  │    ├── userRoutes.js   # Routes for user-related operations
  │    └── paymentRoutes.js # Payment-related routes
  │
  ├── /middleware       # Middleware functions for validation and error handling
  │    ├── authMiddleware.js  # JWT authentication middleware
  │    ├── errorHandler.js    # Global error handler
  │    └── uploadMiddleware.js # Multer setup for image uploads
  │
  ├── /utils            # Utility functions and helpers
  │    ├── emailHelper.js  # Functions for sending emails
  │    └── pdfGenerator.js # Functions to generate PDFs
  │
  ├── /docs             # API documentation (optional)
  │    └── api-docs.json  # Swagger or Postman API collection
  │
  ├── /tests            # Test files for unit and integration testing
  │    ├── auth.test.js  # Tests for authentication routes
  │    └── post.test.js  # Tests for post-related routes
  │
  ├── .env              # Environment variables (not included in version control)
  ├── .gitignore        # Files and folders to ignore in Git
  ├── package.json      # Node.js dependencies and scripts
  ├── README.md         # Project documentation
  └── server.js         # Main entry point of the server


       
   


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

