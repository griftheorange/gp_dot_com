import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { Header } from 'semantic-ui-react'

import Main from './Pages/Main.js'
import Project from './Pages/Project.js'

import './CSS/index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div className={'full-window'}>
          <div className={'image-header'}>
            <img src='isaac-smith-6EnTPvPPL6I-unsplash.jpg'></img>
            <div className={'header-box'}>
              <Header className={'main-header'} as='h1'>Griffin Poole</Header>
              <Header.Subheader className={'main-subheader'} as='h3'>Full Stack Web Developer, Neuroscience BA</Header.Subheader>
            </div>
          </div>
          <div className={'content-wrapper'}>
            <div className={'content'}>
              <Switch>
                <Route exact path='/' component={Main}/>
                <Route path='/project/:name' component={Project}/>
              </Switch>
            </div>
          </div>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
