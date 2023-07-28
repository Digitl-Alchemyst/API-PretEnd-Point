import { singleUser, UserInfo } from '../../mockData/singleUserData';
import * as path from 'path';
import * as fs from 'fs';
import express from 'express';

// Setup Express Router
const app = express();
const router = express.Router();


// Load the Mock Data File
const userDataFilePath = path.join(__dirname, '../mockData/singleUserData.ts');

// Initial data from the singleUser array
let users: UserInfo[] = [...singleUser];

// GET ALL USERS
app.get('/api/users', (req, res) => {
  res.json(users);
});

// GET USER
app.get('/api/users/:id', (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-shadow
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
      return res
        .status(500)
        .json({ message: 'Error reading user data from file' });
    }

    const existingData = data.trim(); // Remove leading/trailing whitespace

    // Find the index where the "singleUser" array starts and ends in the data file
    const startIndex = existingData.indexOf(
      'export const singleUser: UserInfo[] = [',
    );
    const endIndex = existingData.lastIndexOf('];') + 2;

    // Extract the part of the data file before and after the "singleUser" array
    const beforeSingleUser = existingData.slice(0, startIndex);
    const afterSingleUser = existingData.slice(endIndex);

    // Create the updated data content with the modified "singleUser" array
    const formattedUsersData =
      beforeSingleUser +
      `export const singleUser: UserInfo[] = [\n${users
        .map(formatUserEntry)
        .join(',\n')}\n];` +
      afterSingleUser;

    // Write the updated data back to the file
    fs.writeFile(userDataFilePath, formattedUsersData, (writeErr) => {
      if (writeErr) {
        console.error('Error writing user data to file:', writeErr);
        return res
          .status(500)
          .json({ message: 'Error writing user data to file' });
      } else {
        console.log('User deleted:', userIdToDelete);
        res.json(users);
      }
    });
  });
});

export default router;