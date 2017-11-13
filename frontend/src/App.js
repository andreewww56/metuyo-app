import React, { Component } from 'react';

import { Route, NavLink, HashRouter } from "react-router-dom";

import Home from './Pages/Home';
import Profile from './Pages/Profile';
import New from './Pages/New';
import Present from './Pages/Present';


class App extends Component {
  
  render() {
    return (
      <HashRouter>
        <div>
          <Route path='/home' component={Home} />
          <Route path='/learning-present' component={Present} />
          <Route path='/profile' component={Profile} />
          <Route path='/new-learning' component={New} />
        </div>
      </HashRouter>

    );
  }
}

export default App;
