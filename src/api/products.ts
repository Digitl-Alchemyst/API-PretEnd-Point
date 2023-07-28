import { singleProduct } from '../../mockData/singleProductData';
// import * as path from 'path';
// import * as fs from 'fs';
import express from 'express';

// Setup Express Router
const app = express();
// const router = express.Router();

// Load the Mock Data File
let products = [...singleProduct];
// const productDataFilePath = path.join(__dirname, '../mockData/singleProductData.ts');

// Initial data from the singleUser array
// let users: UserInfo[] = [...singleUser];

// GET PRODUCTS
app.get('/api/products', (req, res) => {
  res.json(products);
});

// GET PRODUCT
app.get('/api/products/:id', (req, res) => {
  const product = products.find(
    // eslint-disable-next-line @typescript-eslint/no-shadow
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