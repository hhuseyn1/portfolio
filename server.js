require("dotenv").config()
const express = require('express');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes')
const projectRoutes = require('./routes/projectRoutes')
const app = express();
const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

mongoose
  .connect(DATABASE_URL)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("Error connecting to MongoDB Atlas:", err));
 
app.use("/blogs", blogRoutes);
app.use("/projects", projectRoutes);