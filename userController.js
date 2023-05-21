const path = require("path");
const registerUser = (req, res) => {
    const userName = req.body.name;
    const userEmail = req.body.email;
    const userPassword = req.body.password;

    res.json({
        Name: userName,
        Email: userEmail,
        Password: userPassword,
        Success: true,
    });
}

const renderForm = (req, res) => {
    res.sendFile(path.join(__dirname + "/index.html"));
}

const userData = (req, res) => {
    // res.sendFile(path.join(__dirname + "/index.html"));
    res.json({
        name: "Chandan",
        email: "hirechandan@gmail.com",
        password: "Chadan@123"
    });
}

const deleteProduct = (req, res) => {
    res.json({
        success: true,
    });
}

const updateProduct = (req, res) => {
    res.json({
        success: true,
    });
}


module.exports = { registerUser, renderForm, userData, deleteProduct, updateProduct };