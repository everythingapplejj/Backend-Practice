const app = require('express')(); // intialize 

const port = 8080

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); // this is a callback function 