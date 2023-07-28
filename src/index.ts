import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import * as fs from 'fs';
import * as path from 'path';

import { singleUser, UserInfo } from '../mockData/singleUserData';
import { singleProduct } from '../mockData/singleProductData';

dotenv.config();

// Check if Node.js loaded env var PORT if so parse its value as a number and create an instance of Express otherwise exit
if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

// CONFIGURATION
app.use(helmet()); // Sets HTTP response headers
app.use(cors()); // Enable Cors
app.use(express.json()); // Parse incoming request with JSON payloads

// Configure API for Vercel
app.get('/', (req, res) => {
  res.send('Express on Vercel');
});

// Load Mock Data
const userDataFilePath = path.join(__dirname, '../mockData/singleUserData.ts');
let products = [...singleProduct];

// Initial data from the singleUser array
let users: UserInfo[] = [...singleUser];

// API Endpoints

// ****  USERS ****

// GET ALL USERS
app.get('/api/users', (req, res) => {
  res.json(users);
});

// GET USER
app.get('/api/users/:id', (req, res) => {
  const user = users.find((user) => user.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json(user);
});

// Function to format the entire user entry from JSON to .ts
function formatUserEntry(user: UserInfo): string {
  const formattedUserEntry = JSON.stringify(user, null, 2);
  const formattedLines = formattedUserEntry
    .split('\n')
    .map((line) => line.replace(/"(\w+)":/g, '$1:'));

  return formattedLines.join('\n');
}

// ADD USER
app.post('/api/users', (req, res) => {
  const newUser = req.body;

  // Write a better function this can mess up the array by deleting a user and adding another the count + 1 should = the last id number in this case.
  // Generate a unique ID for the new user
  newUser.id = users.length > 0 ? users[users.length - 1].id + 1 : 1;
  users.push(newUser); // Append the new user to the existing array

  // Read the existing data from the file
  fs.readFile(userDataFilePath, 'utf8', (readErr, data) => {
    if (readErr) {
      console.error('Error reading user data from file:', readErr);
      return res
        .status(500)
        .json({ message: 'Error reading user data from file' });
    }

    const existingData = data.trim(); // Remove leading/trailing whitespace
    const formattedNewUserEntry = formatUserEntry(newUser);
    const updatedData = `${existingData.slice(
      0,
      -2,
    )},\n${formattedNewUserEntry}\n  \n];`;

    // Write updated user data back to the file
    fs.writeFile(userDataFilePath, updatedData, (writeErr) => {
      if (writeErr) {
        console.error('Error writing user data to file:', writeErr);
        return res
          .status(500)
          .json({ message: 'Error writing user data to file' });
      } else {
        console.log(
          'New User added to the API Endpoint:',
          newUser.id,
          newUser.fullname,
        );
        res.json(users);
      }
    });
  });
});

// DELETE USER
app.delete('/api/users/:id', (req, res) => {
  const userIdToDelete = parseInt(req.params.id);
  const filteredUsers = users.filter((user) => user.id !== userIdToDelete);

  if (users.length === filteredUsers.length) {
    // No user with the given ID found
    return res.status(404).json({ message: 'User not found' });
  }

  users = filteredUsers; // Update in-memory data

  // Read the existing data from the file
  fs.readFile(userDataFilePath, 'utf8', (readErr, data) => {
    if (readErr) {
      console.error('Error reading user data from file:', readErr);
      return res.status(500).json({ message: 'Error reading user data from file' });
    }

    const existingData = data.trim(); // Remove leading/trailing whitespace

    // Find the index where the "singleUser" array starts and ends in the data file
    const startIndex = existingData.indexOf('export const singleUser: UserInfo[] = [');
    const endIndex = existingData.lastIndexOf('];') + 2;

    // Extract the part of the data file before and after the "singleUser" array
    const beforeSingleUser = existingData.slice(0, startIndex);
    const afterSingleUser = existingData.slice(endIndex);

    // Create the updated data content with the modified "singleUser" array
    const formattedUsersData =
      beforeSingleUser +
      `export const singleUser: UserInfo[] = [\n${users.map(formatUserEntry).join(',\n')}\n];` +
      afterSingleUser;

    // Write the updated data back to the file
    fs.writeFile(userDataFilePath, formattedUsersData, (writeErr) => {
      if (writeErr) {
        console.error('Error writing user data to file:', writeErr);
        return res.status(500).json({ message: 'Error writing user data to file' });
      } else {
        console.log('User deleted:', userIdToDelete);
        res.json(users);
      }
    });
  });
});


// ****  PRODUCTS ****

// GET PRODUCTS
app.get('/api/products', (req, res) => {
  res.json(products);
});

// GET PRODUCT
app.get('/api/products/:id', (req, res) => {
  const product = products.find(
    (product) => product.id === parseInt(req.params.id),
  );
  res.json(product);
});

// ADD PRODUCT
app.post('/api/products', (req, res) => {
  products.unshift(req.body);
  res.json(products);
});

// DELETE PRODUCT
app.delete('/api/products/:id', (req, res) => {
  products = products.filter(
    (product) => product.id !== parseInt(req.params.id),
  );
  res.json('Product deleted!');
});

// Init Server
app.listen(PORT, () => {
  console.log(`API Pret-End Point is listening on port ${PORT}`);
});

module.exports = app;