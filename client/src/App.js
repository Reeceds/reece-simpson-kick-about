import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import LocationList from './pages/LocationList/LocationList'
import Location from './pages/Location/Location'
import Team from './pages/Team/Team'

import './partials/_global.scss'
import TeamList from './pages/TeamList/TeamList';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Header />

        <Switch>
          <Route path="/locations" exact component={LocationList} />;
          <Route path="/teams" exact component={TeamList} />;
          <Route path="/locations/:id" component={Location} />;
          <Route path="/teams/:id" component={Team} />;
        </Switch>
        <Footer />

      </BrowserRouter>

    </div>
  );
}

export default App;
