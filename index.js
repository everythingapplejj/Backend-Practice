const express = require('express'); // Correctly require express
const app = express(); // Initialize express

const port = 8080;

app.use(express.json())

// Handle GET request for the root path
app.get('/tshirt', (req, res) => {
    res.status(200).send({
        message: 'Hello World!',
        price: 100
    });
    console.log("This is working");
});

app.post('/tshirt/:id', (req, res) => {
    const {id} = req.params;
    const {logo} = req.body;
    if(!logo) {
        res.status(418).send({message: 'We need a logo'});
    }
    res.send({
        tshirt: `��� with your ${logo} and ID of ${id}`,
    }); // another example of rest api
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
