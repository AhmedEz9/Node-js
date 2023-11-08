# REST API

This is a Rest API developed with Node.js. It provides basic CRUD operations for managing a list of items without persistent storage.

## Installation

To run this project locally, clone the repo and install the required npm packages:

```sh
git clone https://github.com/AhmedEz9/Node-js.git
cd Node-js
npm install
Usage
Start the server with:

sh
Copy code
npm run dev
The API will be available at http://localhost:3000.

Endpoints
GET /items

Retrieves a list of items.
GET /items/:id

Retrieves an item by id.
POST /items

Adds a new item.
Payload example: { "name": "new item" }
PUT /items/:id

Updates an existing item by id.
Payload example: { "name": "updated item" }
DELETE /items/:id

Deletes an item by id.
Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

License
MIT

Author
<Your Name>
```
