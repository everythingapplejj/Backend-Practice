const express = require('express');
const app = express();
const port = 8000

// Serve Static Files (Optional)
const path = require('path')

app.use(express.static(path.join(_dirname, 'Client/build')))
app.get('*', (req, res) => {
    res.sendFile(path.join(_dirname + 'client/build/index.html'))
})
// this is to serve your built frontend from the backend, use express serve static files 

// Middleware 
app.use(express.json())

app.get('/api/message', (req, res) => {
    res.status(200).send({message: "Hello from the backend!"});
})

app.listen(port, () => {
    console.log(`Server is currently running on http://localhost:${port}`);
})
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