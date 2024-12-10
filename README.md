# Unhandled Async Error in Express.js Route Handler

This repository demonstrates a common error in Express.js applications: improper error handling within asynchronous route handlers.  When an asynchronous operation within a route handler throws an error, the application might become unresponsive if the error is not properly caught and handled.  The solution shows how to implement robust error handling to prevent this issue.

## Bug

The `bug.js` file contains an Express.js application with a route handler that performs an asynchronous operation (`someAsyncOperation`).  This operation may throw an error, but the error handling is incomplete, leading to the application not sending a response to the client and potentially appearing unresponsive.

## Solution

The `bugSolution.js` file demonstrates the correct way to handle errors in asynchronous route handlers. A `try...catch` block wraps the asynchronous operation, ensuring that errors are caught and handled appropriately.  The application then sends an appropriate error response to the client, ensuring that the server remains responsive.

## How to Run

1. Clone this repository.
2. Navigate to the repository directory.
3. Run `npm install` to install dependencies.
4. Run `node bug.js` to run the buggy application.  Then try to make many requests to see that server will stop responding to the requests.
5. Run `node bugSolution.js` to run the fixed application.