//server.js
const express = require("express");
const SpotifyWebApi = require("spotify-web-api-node");

const app = express();

app.post("/login", (req, res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
      redirectUri: 'http://localhost:3000',
      clientId: '527cba8010a3440ab8bef6bda1dc558a',
      clientSecret: 'c1d404a4e8564a778481f05e04cfb593',
    })
  
    spotifyApi
      .authorizationCodeGrant(code)
      .then(data => {
        res.json({
          accessToken: data.body.access_token,
          refreshToken: data.body.refresh_token,
          expiresIn: data.body.expires_in,
        })
      })
      .catch(err => {
        res.sendStatus(400)
      })
  })