const express = require('express');
const router = express.Router();
const locationsList = require('../data/locations');
const teamsList = require('../data/teams');

router.get("/", (req, res) => {
    const locations = locationsList.map(place => {
        const team = teamsList.filter(club => club.locNum === place.locNum);
        ///////// returns each location with the related teams //////////
        // place["team"] = team;
        // return place
        const NumberOfTeams = team.length;
        place["numTeams"] = NumberOfTeams;
        return place
        
    });
    res.status(200).send(locations)
})

router.get("/:id", (req, res) => {
    const location = locationsList.find(place => place.id === req.params.id);
    const team = teamsList.filter(club => club.locNum === location.locNum);
    res.status(200).send({
        'location': location,
        'team': team
    })
})


module.exports = router;
