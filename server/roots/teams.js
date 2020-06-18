const express = require('express');
const router = express.Router();
const locationsList = require('../data/locations');
const teamsList = require('../data/teams');

router.get("/", (req, res) => {
    res.status(200).json(teamsList);
})

router.get("/:id", (req, res) => {
    const team = teamsList.find(club => club.id === req.params.id);
    res.status(200).json(team);
})


module.exports = router;