const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '../client/build'))); // okay dang this works!

// Handle API routes
app.get('/api/message', (req, res) => {
    res.status(200).send({ message: 'Hello from the backend!' });
});

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
/*
    URL -> http:// -> protocal non-encrypted 
    URL -> https:// -> protocal encrypted

    HTTP -> Hypertext Transfer Protocol
    HOST -> tell the internet (server)
    path -> what the client wants like different routes
    Query -> Query parameters -> whuch tells the server  -> alter the response 
    get, post, put, delete -> method 
    Secure database 
    REST API -> Representational State Transfer API
    create, read, update, delete -> crud
*/