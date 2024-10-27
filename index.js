require('dotenv').config()
const express = require('express') // its like import express from "express"

const app = express() // app mai express ki sari functionality aa gyi hai

const port = 4000 

app.get('/', (req, res) => { // "/" is home route req = request, res = response
  res.send('Hello World!')
})

app.get('/codechef', (req, res) => {
  res.send("cpopandey")
})

app.get('/login', (req, res) => {
  res.send('<h1>Please Login at chai aur code</h1>')
})

app.get('/youtube', (req,res) => {
  res.send('<h2>Chai aur code</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})