const express = require('express');
const { v4: uuidv4 } = require('uuid');
const router = express.Router();
const player = require('../data/player');

// Gets the plauyer details list
router.get("/", (req, res) => {
    res.status(200).json(player);
})

// Gets a players abseed on id
router.get("/:id", (req, res) => {
    const playerId = player.find(user => user.id === req.params.id);
    res.status(200).json(playerId)
})

// Posts a new player to the player list
router.post("/", (req, res) => {
    const playerInfo = req.body;
    if (playerInfo.firstName && playerInfo.lastName && playerInfo.email){
        const newPlayer = {
            id: uuidv4(),
            firstName: playerInfo.firstName,
            lastName: playerInfo.lastName,
            email: playerInfo.email
        }

        player.unshift(newPlayer)
        res.status(200).json(player)
    } else {
        res.status(400).json("Player profile was not created");
    }
})

router.put("/", (req, res) => {
    const newInfo = req.body.updatedPlayer;
    console.log(newInfo)
    const playerInfo = player[0];
    if (newInfo.firstName && newInfo.lastName && newInfo.email){
        playerInfo.firstName = newInfo.firstName
        playerInfo.lastName = newInfo.lastName
        playerInfo.email = newInfo.email
        res.status(200).json(player)
    } else {
        res.status(400).json("Player profile was not updated");
    }
})

module.exports = router;