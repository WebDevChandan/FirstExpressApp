const express = require("express");
const bodyParser = require("body-parser");
const router = require("./userRoutes");

const app = express();
const PORT = process.env.PORT || 4000;
    
//Using Body-Parser: It will return a body object
app.use(bodyParser.urlencoded({ extended: false }));

//To retieve JSON data in Postman using POST method
app.use(express.json());

app.use(router);


app.listen(PORT, () => {
    console.log(`Server is running on Port: 4000`);
})