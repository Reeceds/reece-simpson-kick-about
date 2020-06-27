const express = require('express');
const { v4: uuidv4 } = require('uuid');
const router = express.Router();
const player = require('../data/player');

// Gets the player details list
router.get("/", (req, res) => {
    res.status(200).json(player);
})

// Gets a player based on id
router.get("/:id", (req, res) => {
    const playerId = player.find(user => user.id === req.params.id);
    res.status(200).json(playerId)
})

// Posts a new player to the player list
router.post("/", (req, res) => {
    const playerInfo = req.body;
    if (playerInfo.firstName && playerInfo.lastName && playerInfo.username && playerInfo.email){
        const newPlayer = {
            id: uuidv4(),
            firstName: playerInfo.firstName,
            lastName: playerInfo.lastName,
            username: playerInfo.username,
            email: playerInfo.email
        }

        player.unshift(newPlayer)
        res.status(200).json(player)
    } else {
        res.status(400).json("Player profile was not created");
    }
})

// Edits and updates a players details
router.put("/", (req, res) => {
    const newInfo = req.body.updatedPlayer;
    const playerInfo = player[0];
    if (newInfo.firstName && newInfo.lastName && newInfo.username && newInfo.email){
        playerInfo.firstName = newInfo.firstName
        playerInfo.lastName = newInfo.lastName
        playerInfo.username = newInfo.username
        playerInfo.email = newInfo.email

        res.status(200).json(player)
    } else {
        res.status(400).json("Player profile was not updated");
    }
})

module.exports = router;