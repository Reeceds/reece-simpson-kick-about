import React from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Venues from './pages/LocationList/LocationList'

import './partials/_global.scss'

function App() {
  return (
    <div className="App">
      <Header />
      <Venues />
      <Footer />
      {/* <BrowserRouter>
        <Switch>
          <Route path='/' exact component={} />;
        </Switch>
      </BrowserRouter> */}
      
    </div>
  );
}

export default App;
