const express = require("express");
const router = express.Router();

const { registerUser, renderForm, userData, deleteProduct, updateProduct} = require("./userController");

router.route("/").get(renderForm);
router.route("/api/v1/register").post(registerUser);
router.route("/api/v1/userdata").get(userData);
router.route("/api/v1/product").delete(deleteProduct);
router.route("/api/v1/updateProduct").put(updateProduct);

module.exports = router;