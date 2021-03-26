import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import './App.css';

import { Navbar } from "./components/navbar/Navbar";

import Home from './components/home'
import Contact from './components/contact'
import Service from './components/service'
import Portfolio from './components/portfolio'
import About from './components/about'
import Teams from './components/teams'

const App = () => {
  return (

      <Router>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/services" component={Service} />
            <Route exact path="/teams" component={Teams} />
            <Route exact path="/potfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/disscus" component={Contact} />
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
  )
}

export default App;
