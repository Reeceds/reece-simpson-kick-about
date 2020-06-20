const { v4: uuidv4 } = require('uuid');

const locationsList = 
[
    {
        id: uuidv4(),
        venue: "Cherry Beach Sports Fields",
        description: "In September 2008, Waterfront Toronto officially opened the Cherry Beach Sports Fields. The two regulation-sized elite soccer and lacrosse fields help meet the high demand for playing fields in Toronto.",
        adddress: "275 Unwin Ave, Toronto, ON M5A 3K8",
        image: "http://localhost:8080/images/cherry-beach.jpg",
        distance: 9,
        locNum: 1
    },
    {
        id: uuidv4(),
        venue: "Flemingdon Park Soccer field",
        description: "This 13.3 hectare park near Don Mills Road and Eglinton Avenue East runs along the hydro corridor in Don Mills east to the Don Valley Parkway.",
        adddress: "739 Don Mills Rd, North York, ON M3C 1T1",
        image: "http://localhost:8080/images/flemingdom-park.jpg",
        distance: 6,
        locNum: 2
    },
    {
        id: uuidv4(),
        venue: "Academy Soccer Field",
        description: "A 1.5 hectare park near Bermondsey Road and Eglinton Avenue East that features a soccer field and naturalized areas.",
        adddress: "115 Hobson Ave, North York, ON M4A 2X3",
        image: "http://localhost:8080/images/academy-soccer.jpg",
        distance: 10,
        locNum: 3
    },
    {
        id: uuidv4(),
        venue: "Ashtonbee Park",
        description: "A 9.2 hectare park incorporating the Ashtonbee Reservoir and the adjacent hydro corridor. This park found near Pharmacy Road and Eglinton Avenue East features three cricket pitches and three multipurpose sports fields.",
        adddress: "21 Ashtonbee Rd, Scarborough, ON M1L 3K9",
        image: "http://localhost:8080/images/ashtonbee-park.jpg",
        distance: 4,
        locNum: 4
    },
    {
        id: uuidv4(),
        venue: "Toronto FC Hangar Outdoor Dome Facility",
        description: "The venue consisted of five indoor artificial turf fields, and was a catalyst for the growth of indoor soccer in Ontario.",
        adddress: "2E2, 77 Carl Hall Rd, North York, ON",
        image: "http://localhost:8080/images/toronto-fc-hanger.jpg",
        distance: 12,
        locNum: 5
    },
    {
        id: uuidv4(),
        venue: "Canoe Landing Park",
        description: "A 3.1 hectare park near Spadina Avenue and Lake Shore Boulevard West. It features two multipurpose sports fields and many walking paths.",
        adddress: "95 Fort York Blvd, Toronto, ON M5V 3Y2",
        image: "http://localhost:8080/images/canoe-park.jpg",
        distance: 1,
        locNum: 6
    },
]

module.exports = locationsList; 
