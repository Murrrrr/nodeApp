const express = require('express');
const app = express();
const path = require('path');
const http = require('http');

const port = 8000;

app.get("/", (req, res)=>{
    res.send("pong");
})

app.listen(port, ()=>{
    console.log("123");
})