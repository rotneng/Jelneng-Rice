const express = require('express');
const mongoose = require('mongoose'); 
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const app = express();

app.use(helmet());                
app.use(morgan('dev'));           
app.use(cors());                  
app.use(express.json());          

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
  .then(() => console.log('🍃 Jelneng Database: Connected Successfully'))
  .catch((err) => console.error('❌ Database Connection Error:', err));

app.get('/api/status', (req, res) => {
  res.json({ 
    status: "active", 
    message: "Jelneng Rice API is connected to MongoDB and ready." 
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`---`);
  console.log(`✅ Server running on: http://localhost:${PORT}`);
  console.log(`---`);
});