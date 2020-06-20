const express = require('express');
const router = express.Router();
const locationsList = require('../data/locations');
const teamsList = require('../data/teams');

router.get("/", (req, res) => {
    // Returns each team with the related loaction distance as a property
    const teams = teamsList.map(club => {
        const location = locationsList.filter(venue => venue.locNum === club.locNum);
        const distance = location.map(place => place.distance);
        club["distance"] = distance;
        return club
    });
    res.status(200).json(teams);
})

router.get("/:id", (req, res) => {
    // Returns a team and its related location
    const team = teamsList.find(club => club.id === req.params.id);
    const location = locationsList.filter(venue => venue.locNum === team.locNum);
    res.status(200).send({
        "team": team,
        "location": location
    });
})

module.exports = router;