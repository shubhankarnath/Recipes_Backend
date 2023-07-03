require('dotenv').config();

const mongoose = require('mongoose');
mongoose.set("strictQuery", true);
const databaseUrl = process.env.DATABASE_URL;

mongoose.connect(databaseUrl, {
  
}).then(() => {
  console.log('Connected to database');
}).catch((error) => {
  console.error(error);
});
