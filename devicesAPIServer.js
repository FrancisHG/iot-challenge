// devicesAPI.js - Device for queries about Devices

const express = require('express');
const app = express();
var port = 80;
if (process.argv[2])
    port = process.argv[2];
const fs = require('fs');
const devices = require('./devices');
//json spaces 0 // Dev = 2, Prod = 0

// ############# Public HTTP API

// Params: id for lookup
// Return: The found JSON object
app.get('/devices/getById/:id', function(req, res) {
    let idParam = req.params.id;

    res.setHeader('Content-Type', 'application/json');

    res.json(devices.getById(idParam));
})

// Params: id for lookup
// Return: The found JSON object
app.get('/devices/getByType/:type', function(req, res) {
    let typeParam = req.params.type;

    res.setHeader('Content-Type', 'application/json');

    res.json(devices.getByType(typeParam));
})

app.listen(port, () => console.log(`Devices API online port ${port}`))