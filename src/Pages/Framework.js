import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import { Header, Image } from 'semantic-ui-react'

import Main from './MainComps/Main.js'
import Project from './Project.js'
import background from '../Resources/lukas-blazek-mcSDtbWXUZU-unsplash.jpg'
import profile from '../Resources/profile.jpg'

import '../CSS/Framework.css';

function Framework(props) {
    
    return (
        <Router>
            <div className={'full-window'}>
                <div className={'image-wrapper'}>
                    <div className={'image-container'}>
                    <img src={background}/>
                    <div className={'header-box'}>
                        <Header className={'main-header'} as='h1'>Griffin Poole</Header>
                        <Header.Subheader className={'main-subheader'} as='h3'>Full Stack Web Developer, Neuroscience BA</Header.Subheader>
                    </div>
                    </div>
                </div>
                <div className={'content-wrapper'}>
                    <div className={'content'}>
                    <Switch>
                        <Route exact path='/' component={Main}/>
                        <Route path='/project_overview/:name' component={Project}/>
                    </Switch>
                    </div>
                    <div className={'copyright'}><span>Copyright &copy;{(new Date(Date.now())).getFullYear()} Griffin A. Poole. All rights reserved.</span></div>
                </div>
            </div>
        </Router>
    );
}

export default Framework;