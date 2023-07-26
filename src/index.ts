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
  const id = parseInt(req.params.id);
  const userIndex = users.findIndex((user) => user.id === id);
  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found' });
  }
  const deletedUser = users[userIndex]; // Save the deleted user for logging purposes
  users.splice(userIndex, 1); // Remove the user from the array

  // Read the existing data from the file to preserve TypeScript type definitions
  fs.readFile(userDataFilePath, 'utf8', (readErr, data) => {
    if (readErr) {
      console.error('Error reading user data from file:', readErr);
      return res
        .status(500)
        .json({ message: 'Error reading user data from file' });
    }

    // Extract the TypeScript type definitions
    const typeDefinitionsRegex = /export type UserInfo = \{[^]*?\};/;
    const typeDefinitionsMatch = data.match(typeDefinitionsRegex);

    if (!typeDefinitionsMatch) {
      console.error('Type definitions not found in the data file.');
      return res
        .status(500)
        .json({ message: 'Type definitions not found in the data file.' });
    }

    const typeDefinitions = typeDefinitionsMatch[0];
    const formattedUserEntries = users.map(
      (user) => `  ${formatUserEntry(user)},`,
    );
    const updatedData = `${typeDefinitions}\n\nexport const singleUser: UserInfo[] = [\n${formattedUserEntries.join(
      '\n',
    )}\n];`;

    // Write updated user data back to the file
    fs.writeFile(userDataFilePath, updatedData, (writeErr) => {
      if (writeErr) {
        console.error('Error writing user data to file:', writeErr);
        res.status(500).json({ message: 'Error writing user data to file' });
      } else {
        console.log(
          'User deleted from the API Endpoint:',
          id,
          deletedUser.info.fullname,
        );
        res.json('User deleted!');
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
