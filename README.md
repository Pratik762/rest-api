# RESTful API

This project is a simple RESTful API built using Express.js (Node.js).  It demonstrates the fundamentals of creating and managing APIs. 

## Internship Task

**Name:** Pratik Mohite
**Company:** CODTECH IT SOLUTIONS
**Intern ID:** CT12DS1091
**Domain:** Backend Interns
**Duration:** 15 Jun 2024 to 15 Aug 2024
**Mentor:** NEELA SANTOSH KUMAR

## Overview

This project guides you through the process of building a RESTful API. You'll learn how to:

- Set up a basic Express.js application.
- Create routes for handling HTTP methods (GET, POST, PUT, DELETE) to perform CRUD (Create, Read, Update, Delete) operations.
- Use middleware to handle requests and responses.
- Test your API using tools like Postman.

## Steps

1. **Project Setup:**
   - Initialize a new Node.js project using `npm init -y`.
   - Install the Express.js framework: `npm install express`.

2. **Create Server File:**
   - Create an `index.js` file in the project root.
   - This file will contain the Express.js server logic.

3. **Define Routes:**
   - Define routes for your API endpoints.
   - Example:
      ```javascript
      app.get('/users', getUsers); // GET request to retrieve users
      app.post('/users', createUser); // POST request to create a new user
      app.put('/users/:id', updateUser); // PUT request to update a user
      app.delete('/users/:id', deleteUser); // DELETE request to delete a user
      ```

4. **Create Handlers:**
   - Implement functions for each route to handle the requests.
   - These functions will perform the necessary actions, such as retrieving data from a database, validating input, or sending responses.

5. **Test the API:**
   - Start the server by running `node index.js`.
   - Use tools like Postman to send requests to your API endpoints and verify that they work as expected.

## Example Code (index.js)

```javascript
const express = require('express');
const app = express();
const port = 3000;

// Define your routes and handlers here...

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
![Screenshot 2024-07-02 115901](https://github.com/Pratik762/rest-api/assets/126477894/1afb1285-aa5b-4a0b-8b92-17aed1591c1a)
![Screenshot 2024-07-02 120047](https://github.com/Pratik762/rest-api/assets/126477894/31118e5e-3b24-47c5-819b-28150ae29d09)
