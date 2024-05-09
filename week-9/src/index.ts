import { QueryResult } from "pg";

// Import the pg library
const { Client } = require('pg');

// Define your connection string (replace placeholders with your actual data)
const connectionString = 'postgresql://postgres:mysecretpassword@localhost:5432/postgres';

// Create a new client instance with the connection string
const client = new Client({
  connectionString: connectionString
});
type error = String;
// Connect to the database
client.connect((err : Error) => {
  if (err) {
    console.error('connection error', err.stack);
  } else {
    console.log('connected to the database');
  }
});

// Run a simple query (Example: Fetching the current date and time from PostgreSQL)
client.query('SELECT NOW()', (err : Error, res : QueryResult) => {
  if (err) {
    console.error(err);
  } else {
    console.log(res.rows[0]);
  }

  // Close the connection
  client.end();
});