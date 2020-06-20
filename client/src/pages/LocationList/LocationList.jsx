import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import LocationListCard from '../../components/LocationListCard/LocationListCard';
import '../LocationList/LocationList.scss';

const URL = "http://localhost:8080/locations";

class LocationList extends React.Component {

    state = {
        locations: []
    }

    componentDidMount() {
        axios.get(URL)
        .then(res => {
            this.setState({
                locations: res.data,
            })
        })
    }

    render(){
        return ( 
            <div className="site-container">
                <div className="location-list-page-description-container">
                    <h1 className="location-list-main-header">Locations</h1>
                    <h3 className="location-list-page-description">Find the nearest venues that host football matches in your area</h3>
                </div>
                
                {this.state.locations.map(location => {
                    return (<Link key={location.id} to={`/locations/${location.id}`}><LocationListCard location={location} /></Link>)
                })}
                
            </div>
         );
    }
    
}
 
export default LocationList;



// import React from 'react';
// import { Link } from 'react-router-dom';
// import Slider, { createSliderWithTooltip }  from 'rc-slider';
// import axios from 'axios';
// import LocationListCard from '../../components/LocationListCard/LocationListCard';
// import '../LocationList/LocationList.scss';
// import 'rc-slider/assets/index.css';


// const URL = "http://localhost:8080/locations";

// const style = { width: 600, margin: 50 };

// function log(value) {
//     console.log(value); //eslint-disable-line
//   }
  
// function percentFormatter(v) {
// return `${v} %`;
// }

// const SliderWithTooltip = createSliderWithTooltip(Slider);


// class LocationList extends React.Component {

//     state = {
//         locations: [],
//         value: null,
//     }

//     componentDidMount() {
//         axios.get(URL)
//         .then(res => {
//             console.log(res.data)
//             this.setState({
//                 locations: res.data,
//             })
//         })
//     }

//     onSliderChange = value => {
//         log(value);
//         this.setState({
//           value,
//         });
//       };
    
//       onAfterChange = value => {
//         console.log(value); //eslint-disable-line
//       };
    
//     //   reset = () => {
//     //     console.log('reset value'); // eslint-disable-line
//     //     this.setState({ value: null });
//     //   };

      

//     render(){
//         return ( 
//             <div className="site-container">
//                 <div className="location-list-page-description-container">
//                     <h1 className="location-list-main-header">Locations</h1>
//                     <h3 className="location-list-page-description">Find the nearest venues that host football matches in your area</h3>
//                 </div>

//                 <Slider
//                     value={this.state.value}
//                     onChange={this.onSliderChange}
//                     onAfterChange={this.onAfterChange}
//                     defaultValue={1}
//                     min={1}
//                     max={12}
//                 />
//                 {/* <button type="button" onClick={this.reset}>
//                     Reset
//                 </button> */}
                
//                 {this.state.locations.map(location => {
//                     return (<Link key={location.id} to={`/locations/${location.id}`}><LocationListCard location={location} /></Link>)
//                 })}
                
//             </div>
//          );
//     }
    
// }
 
// export default LocationList;