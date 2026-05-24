
//const express = require('express');
import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
// to use this version of import, we need to do to package.json and cange the line
//      > "type": "module"
// CommonJS by default but this overwrites it to ES Modules
import authRoutes from './routes/authRoutes.js';
import todoRoutes from './routes/todoRoutes.js';

const app = express();
// checks if there's a port environment variable, not use 5000
const PORT = process.env.PORT || 5000;


// get the file path from the URL of the current directory
const __filename = fileURLToPath(import.meta.url);//gets file name
// get the directory from the file path
const __dirname = dirname(__filename);// where files can be found


//Middleware
// allows our app to expect and use JSON
app.use(express.json());
// Serves the HTML file from the /public directory
// tells express to serve all files from the public folder as static assets/files
// Any requests for the css will be resolved to the public directory
// without this, it defaults the route to the /src folder
app.use(express.static(path.join(__dirname, '../public')));


// endpoint
app.get('/', (req, res) => {
    // serving up the HTML file from the /public directory
    // path allows us to construct the path to find the files/folders
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

// routes
// for any path that has /auth, use the authRoutes file
app.use('/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`Server has started on port: ${PORT}`);
})