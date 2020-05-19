import React from 'react';
import { Grid } from 'semantic-ui-react'

import ProjectCard from './ProjectCard';

function ProjectsList(props) {
    return (
        <Grid style={{height:'100%', width:'100%', paddingTop:'1em', paddingLeft:'2em'}} columns={4} divided>
            <Grid.Row style={{height:'50%', width:'100%'}}>
                <Grid.Column style={{height:'100%', width:'25%'}}>
                    <ProjectCard icon={'area graph'} history={props.history} details={'A React/Flask App for Personal Finance Tracking'} title={'Budget.web'} star={true}/>
                </Grid.Column>
                <Grid.Column style={{height:'100%', width:'25%'}}>
                    <ProjectCard icon={'line graph'} history={props.history} details={'A React/Rails App for Visualizing USGS Seismic Event Data'} title={'SeisMix'} star={true}/>
                </Grid.Column>
                <Grid.Column style={{height:'100%', width:'25%'}}>
                    <ProjectCard icon={'tag'} history={props.history} details={'A React App and my Personal Webpage. Click for details on the making of'} title={'GP.com'} star={true}/>
                </Grid.Column>
                <Grid.Column style={{height:'100%', width:'25%'}}>
                    <ProjectCard icon={'globe'} history={props.history} details={'A D3.js/React App for rendering Geographic Data in a React Setting'} title={'TopoGlobe'} star={false}/>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row style={{height:'50%', width:'100%'}}>
                <Grid.Column style={{height:'100%', width:'25%'}}>
                    <ProjectCard icon={'chart bar'} history={props.history} details={'A Javascript webpage for custom plotting CSV Data'} title={'Graph.js'} star={false}/>
                </Grid.Column>
                <Grid.Column style={{height:'100%', width:'25%'}}>
                    <ProjectCard icon={'book'} history={props.history} details={'A Command Line Interface for DnD API navigation'} title={'CLI DnD'} star={false}/>
                </Grid.Column>
                <Grid.Column style={{height:'100%', width:'25%'}}>
                    <ProjectCard icon={'game'} history={props.history} details={'A Procedurally Generated RogueLike game written in Python'} title={'Python Roguelike'} star={false}/>
                </Grid.Column>
                <Grid.Column style={{height:'100%', width:'25%'}}>
                    <ProjectCard icon={'calendar check outline'} history={props.history} details={'A JavaFX GUI TodoList App'} title={'JavaTodo'} star={false}/>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
}

export default ProjectsList;