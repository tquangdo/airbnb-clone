import React from 'react';
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import SearchPage from './SearchPage'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HOME1_URL, HOME2_URL, SEARCH_KW_URL } from './constants';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />

        <Switch>
          <Route exact path={HOME1_URL}>
            <Home />
          </Route>
          <Route path={HOME2_URL}>
            <Home />
          </Route>
          <Route path={SEARCH_KW_URL}>
            <SearchPage />
          </Route>
        </Switch>

        <Footer />
      </ Router>
    </div>
  );
}

export default App;
