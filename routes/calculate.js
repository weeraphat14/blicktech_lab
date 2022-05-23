const express = require('express')
const router = express.Router();
const fs = require('fs')
const { HttpResponse } = require('../utils/response');

router.get('/cal', (req, res) => {
    let filePath = "./data.json"
    let data = JSON.parse(fs.readFileSync(filePath));
    let ans_plus = parseInt(data.variable_a) + parseInt(data.variable_b) + parseInt(data.variable_c)
    let ans_minus = parseInt(data.variable_a) - parseInt(data.variable_b) - parseInt(data.variable_c)
    let ans_multiply = parseInt(data.variable_a) * parseInt(data.variable_b) * parseInt(data.variable_c)
    let ans_divide = parseInt(data.variable_a) / parseInt(data.variable_b) / parseInt(data.variable_c)
    let response = { "plus": ans_plus, "minus": ans_minus, "multiply": ans_multiply, "divide": ans_divide }
    res.status(200).json(new HttpResponse(response, 'calculat success'));
})

module.exports = router