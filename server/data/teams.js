const { v4: uuidv4 } = require('uuid');

const teamsList =
[
    {
        id: uuidv4(),
        teamName: "Giroud awakening",
        username: "Ben Roberts",
        message: "Need two palyers for a friendly game :)",
        playersNeeded: 2,
        time: "20:00",
        locNum: 1
    },
    {
        id: uuidv4(),
        teamName: "Krul Intentions",
        username: "Jack Mawdsley",
        message: "Need a replacement player ASAP!",
        playersNeeded: 1,
        time: "18:30",
        locNum: 1
    },
    {
        id: uuidv4(),
        teamName: "Delph and Safety",
        username: "Nigel Morris",
        message: "Putting a team together, need three outfield palyers",
        playersNeeded: 3,
        time: "19:15",
        locNum: 2
    },
    {
        id: uuidv4(),
        teamName: "Emery Little Helps",
        username: "Matt Agnew",
        message: "Desperately in ened of a goalkeeper!",
        playersNeeded: 1,
        time: "19:00",
        locNum: 3
    },
    {
        id: uuidv4(),
        teamName: "Willian Dollar Baby",
        username: "Jake Whitelock",
        message: "Looking for two defenders",
        playersNeeded: 2,
        time: "18:00",
        locNum: 3
    },
    {
        id: uuidv4(),
        teamName: "Game of Stones",
        username: "Tom Waddington",
        message: "Need one striker, one midfilder and one defender",
        playersNeeded: 3,
        time: "19:45",
        locNum: 4
    },
    {
        id: uuidv4(),
        teamName: "Luke KyleWalker",
        username: "Alex Barker",
        message: "One player needed for a late night game",
        playersNeeded: 1,
        time: "21:00",
        locNum: 5
    },
    {
        id: uuidv4(),
        teamName: "Silva lining",
        username: "Ashley Raey",
        message: "Looking for two wingers!",
        playersNeeded: 2,
        time: "20:30",
        locNum: 6
    },
    {
        id: uuidv4(),
        teamName: "Cech yourself, before you wreck yourself",
        message: "Had a player drop out, need a replacement",
        username: "Ryan Wood",
        playersNeeded: 1,
        time: "19:45",
        locNum: 6
    }
]

module.exports = teamsList; 
