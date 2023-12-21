# REST API

Media Sharing Application API
This document provides an overview of the API routes for the Media Sharing Application, including endpoints for managing media items, users, likes, and comments.

API Endpoints
Media Items
GET /api/media: Retrieve a list of all media items.
GET /api/media/:id: Get a specific media item by its ID.
POST /api/media: Add a new media item. Include media details in the request body.
PUT /api/media/:id: Update an existing media item by ID. Include updated details in the request body.
DELETE /api/media/:id: Delete a media item by ID.
Users
GET /api/users: Retrieve a list of all users.
GET /api/users/:id: Get a specific user by their ID.
POST /api/users: Add a new user. Include user details in the request body.
PUT /api/users/:id: Update an existing user by ID. Include updated details in the request body.
DELETE /api/users/:id: Delete a user by ID.
Likes
POST /api/likes: Add a like to a media item. Include user_id and media_id in the request body.
DELETE /api/likes/:likeId: Remove a like by its ID.
Comments
POST /api/comments: Add a comment to a media item. Include user_id, media_id, and comment_text in the request body.
DELETE /api/comments/:commentId: Remove a comment by its ID.

Author
Ahmed

```

```
