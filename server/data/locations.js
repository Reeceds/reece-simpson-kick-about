import { v4 as uuidv4} from 'uuid';
import image1 from '../../client/src/assets/images/cherry-beach.jpg';
import image2 from '../../client/src/assets/images/flemingdom-park.jpg';
import image3 from '../../client/src/assets/images/academy-soccer.jpg';
import image4 from '../../client/src/assets/images/ashtonbee-park.jpg';
import image5 from '../../client/src/assets/images/ashtonbee-park.jpg';
import image6 from '../../client/src/assets/images/canoe-park.jpg';

const venues = 
[
    {
        id: 1,
        venue: "Cherry Beach Sports Fields",
        adddress: "275 Unwin Ave, Toronto, ON M5A 3K8",
        image: image1,
        distance: "9.1 km"
    },
    {
        id: 2,
        venue: "Flemingdon Park Soccer field",
        adddress: "739 Don Mills Rd, North York, ON M3C 1T1",
        image: image2,
        distance: "6.5 km"
    },
    {
        id: 3,
        venue: "Academy Soccer Field",
        adddress: "115 Hobson Ave, North York, ON M4A 2X3",
        image: image3,
        distance: "10 km"
    },
    {
        id: 4,
        venue: "Ashtonbee Park",
        adddress: "21 Ashtonbee Rd, Scarborough, ON M1L 3K9",
        image: image4,
        distance: "4.9 km"
    },
    {
        id: 5,
        venue: "Toronto FC Hangar Outdoor Dome Facility",
        adddress: "2E2, 77 Carl Hall Rd, North York, ON",
        image: image5,
        distance: "12.4 km"
    },
    {
        id: 6,
        venue: "Canoe Landing Park",
        adddress: "95 Fort York Blvd, Toronto, ON M5V 3Y2",
        image: image6,
        distance: "1 km"
    },
]

export default venues;