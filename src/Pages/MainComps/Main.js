import React from 'react';

import '../../CSS/Main.css'
import BusinessCard from './BusinessCard';
import ProjectsList from './ProjectsList'

function Main(props) {

    return (
        <div>
            <h3 className={'card-tag'}>Information</h3>
            <div className={'card-container'}>
                <div className={'card business-card-sizer'} style={{display:'flex'}}>
                    <BusinessCard/>
                </div>
            </div>
            <h3 className={'card-tag'}>Projects</h3>
            <div className={'card-container'}>
                <div className={'card project-card-sizer'} style={{overflowX:'hidden', overflowY:'auto'}}>
                    <ProjectsList history={props.history}/>
                </div>
            </div>
        </div>
    );
}

export default Main;