const express = require('express');
const router = express.Router();

const { loginPeople } = require('../controllers/loginController')

router.post("/", loginPeople);

module.exports = router