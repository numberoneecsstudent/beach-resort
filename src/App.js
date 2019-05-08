import React from 'react';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';

import {Route, Switch} from 'react-router-dom';

import NavBar from './components/Navbar';

import './App.css';

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/rooms/" component={Rooms} />
      <Route exact path="/single-room/:id" component={SingleRoom} />
      <Route component={Error}/>
      </Switch>
    </div>
    
  );
}

export default App;
