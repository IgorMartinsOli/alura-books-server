# Alura Books Server

## Description

This is a Node.js application using Express that provides API endpoints to manage a collection of books. It allows you to perform CRUD operations (Create, Read, Update, and Delete) on books stored in a JSON file.

## Prerequisites

- Node.js installed on your system
- npm (Node Package Manager) or yarn installed

## Getting Started

1. Clone this repository to your local machine.
2. Install the required dependencies using npm or yarn. Open the terminal in the project directory and run:

   ```bash
   npm install
   ```
or

   ```bash
yarn
   ```

Create a file named livros.json in the root of the project and add some initial book data in the JSON format as shown below:

```json
[
  {"id": "1", "nome": "Livro irado"},
  {"id": "2", "nome": "O livro alterado"},
  {"id": "3", "nome": "Mais que demais"}
]
```
How to Use
Start the application by running:

```bash
npm start
```
This will start the server on the specified port (by default 3000) and make it ready to accept requests.

The application provides the following API endpoints:

GET /livros: Retrieve all books from the collection.

GET /livros/:id: Retrieve a specific book by its ID.

POST /livros: Add a new book to the collection.

PATCH /livros/:id: Update a book by its ID.

DELETE /livros/:id: Delete a book from the collection by its ID.

To interact with the API, you can use tools like Postman or cURL, or build a front-end application to send requests to these endpoints.

## Dependencies
This application uses the following dependencies:

express: A popular web application framework for Node.js.
dotenv: Allows the application to read environment variables from a .env file.
## Scripts
The package.json file contains the following script:

start: Starts the application using the nodemon package, which allows for automatic reloading when changes are made to the source code.
