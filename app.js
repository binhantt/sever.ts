const express = require('express');
const cors = require('cors');
const router = require('./routes/router');
const { connectDB } = require('./config/database');
const { sever } = require('./config/sever');
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);
connectDB();
sever(app);
// Ensure the file is named 'server.js' (not 'sever.js')
// Make sure the file is in the correct directory (E:\adminshopgame\backend\)
// Double-check that all required modules are installed (express, cors)
// Verify that the paths to './routes/router' and './config/database' are correct


// /API/ADMIN/USERS/ 
// /API/WEB/USERS


