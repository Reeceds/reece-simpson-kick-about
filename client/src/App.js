import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header'
// import Footer from './components/Footer/Footer'
import LocationList from './pages/LocationList/LocationList'
import Location from './pages/Location/Location'
import Team from './pages/Team/Team'
import TeamList from './pages/TeamList/TeamList';
import Signup from './pages/Signup/Signup';
import PlayerProfile from './pages/PlayerProfile/PlayerProfile.jsx'
import './partials/_global.scss'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />

        <Switch>
          <Route path="/" exact component={Signup} />;
          <Route path="/locations" exact component={LocationList} />;
          <Route path="/locations/:id" component={Location} />;
          <Route path="/teams" exact component={TeamList} />;
          <Route path="/teams/:id" component={Team} />;
          <Route path="/PlayerProfile" exact component={PlayerProfile} />;
        </Switch>
        {/* <Footer /> */}

      </BrowserRouter>

    </div>
  );
}

export default App;
