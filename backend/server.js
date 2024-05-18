require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');
const projectRoutes = require('./routes/projectRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT
const DATABASE_URL = process.env.DATABASE_URL;

app.use(express.json());

app.use('/blogs', blogRoutes);
app.use('/projects', projectRoutes);
app.use('/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

mongoose
  .connect(DATABASE_URL)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("Error connecting to MongoDB Atlas:", err));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
