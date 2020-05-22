import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import { Header } from 'semantic-ui-react'

import Main from './MainComps/Main.js'
import ProjectRouter from './ProjectRouter.js'
import background from '../Resources/lukas-blazek-mcSDtbWXUZU-unsplash.jpg'
import {useBreakpoint} from './useBreakpoint.js'

import '../CSS/Framework.css';

function Framework(props) {

    const breakpoints = useBreakpoint()
    console.log(breakpoints)

    return (
            <Router>
                <div className={'full-window'}>
                    <div className={'image-wrapper'}>
                        <div className={'image-container'}>
                        <img src={background}/>
                        <div className={'header-box'}>
                            <Header className={breakpoints['md'] ? (breakpoints['xs'] ? 'main-header smallest' : 'main-header smaller') : 'main-header'} as='h1'>Griffin Poole</Header>
                            <Header.Subheader className={breakpoints['md'] ? (breakpoints['xs'] ? 'main-subheader smallest' : 'main-subheader smaller') : 'main-subheader'} as='h3'>Full Stack Web Developer, Neuroscience BA</Header.Subheader>
                        </div>
                        </div>
                    </div>
                    <div className={'content-wrapper'}>
                        <Switch>
                            <Route exact path='/' component={Main}/>
                            <Route path='/project_overview/:name' component={ProjectRouter}/>
                        </Switch>
                        <div className={'copyright'}><span>Copyright &copy;{(new Date(Date.now())).getFullYear()} Griffin A. Poole. All rights reserved.</span></div>
                    </div>
                </div>
            </Router>
    );
}

export default Framework;