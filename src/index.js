import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Main from './Pages/Main.js'
import Project from './Pages/Project.js'

import './CSS/index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div style={{height:'200vh', width:'100%', display: 'flex', flexDirection:'column'}}>
          <div className='background' style={{zIndex:'-2', width:'100%', backgroundColor:'#d69412e8'}}>
            <img src='isaac-smith-6EnTPvPPL6I-unsplash.jpg' style={{width:'100%'}}></img>
          </div>
          <div style={{zIndex:'-1', flexGrow:'1', width:'100%', backgroundColor:'#d69412e8', position:'relative'}}>
            <div className='content' style={{width:'85%',
                                             position:'relative',
                                             bottom:'5em',
                                             height:'100%',
                                             left:'7.5%'}}>
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
