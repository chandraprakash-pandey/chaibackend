require('dotenv').config()
const express = require('express') // its like import express from "express"

const app = express() // app mai express ki sari functionality aa gyi hai

const port = 4000 

const githubData = {
  "login": "chandraprakash-pandey",
  "id": 140066376,
  "node_id": "U_kgDOCFk-SA",
  "avatar_url": "https://avatars.githubusercontent.com/u/140066376?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/chandraprakash-pandey",
  "html_url": "https://github.com/chandraprakash-pandey",
  "followers_url": "https://api.github.com/users/chandraprakash-pandey/followers",
  "following_url": "https://api.github.com/users/chandraprakash-pandey/following{/other_user}",
  "gists_url": "https://api.github.com/users/chandraprakash-pandey/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/chandraprakash-pandey/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/chandraprakash-pandey/subscriptions",
  "organizations_url": "https://api.github.com/users/chandraprakash-pandey/orgs",
  "repos_url": "https://api.github.com/users/chandraprakash-pandey/repos",
  "events_url": "https://api.github.com/users/chandraprakash-pandey/events{/privacy}",
  "received_events_url": "https://api.github.com/users/chandraprakash-pandey/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Chandraprakash Pandey",
  "company": null,
  "blog": "",
  "location": "Pune, Maharashtra, India",
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 32,
  "public_gists": 0,
  "followers": 4,
  "following": 6,
  "created_at": "2023-07-20T10:11:47Z",
  "updated_at": "2024-10-13T12:36:52Z"
}

app.get('/', (req, res) => { // "/" is home route req = request, res = response
  res.send('Hello World!')
})

app.get('/codechef', (req, res) => {
  res.send("cpopandey")
})

app.get('/github', (req, res) => {
  res.json(githubData)
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