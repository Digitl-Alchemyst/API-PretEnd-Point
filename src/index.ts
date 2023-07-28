import * as dotenv from 'dotenv';
import app from './app';
dotenv.config();

// Check if Node.js loaded env var PORT if so parse its value as a number and create an instance of Express otherwise exit
if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10) || 6713;

// Initialize Server

app.listen(PORT, () => {
  /* eslint-disable no-console */
  console.log(`API Pret-End Point is listening on port ${PORT}`);
  /* eslint-enable no-console */
});

