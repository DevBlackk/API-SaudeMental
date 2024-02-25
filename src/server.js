import express from 'express';
import { testConnection } from './database/connection.js';

const app = express();

app.use(express.json());






app.listen(3333, () => {
  testConnection(),
  console.log('server on in port 3333!')
});