import * as dotenv from 'dotenv';
import app from "./app"
dotenv.config();

// Check if Node.js loaded env var PORT if so parse its value as a number and create an instance of Express otherwise exit
if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);





// Init Server


app.listen(PORT, () => {
  console.log(`API Pret-End Point is listening on port ${PORT}`);
});

