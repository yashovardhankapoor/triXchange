const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

// Middleware to parse JSON in request body
app.use(express.json());

// Serve static files
app.use(express.static('public'));

// MongoDB connection URL
const url = 'mongodb://localhost:27017';

// Database and collection names
const dbName = 'mydatabase';
const collectionName = 'users';

// Handle form submission
app.post('/signup', async (req, res) => {
  try {
    const { name, email, phone, username, password } = req.body;

    // Connect to MongoDB
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);

    // Insert user data into the collection
    const result = await db.collection(collectionName).insertOne({
      name,
      email,
      phone,
      username,
      password
    });

    client.close();

    res.status(200).send('Account created successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred.');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

