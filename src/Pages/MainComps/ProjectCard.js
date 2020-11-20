import React, { useState } from 'react';
import { Icon } from 'semantic-ui-react'

function ProjectCard(props) {

    function handleMouseEnter(){
        document.getElementById(props.title).style.backgroundColor = '#e4e4e4'
    }
    function handleMouseLeave(){
        document.getElementById(props.title).style.backgroundColor = ''
    }
    function getStar(){
        if(props.star){
            return <Icon name='star' size='small' style={{position:'relative', bottom:'0.1em'}}/>
        }
        else {
            return null
        }
    }

    return (
        <div onMouseEnter={handleMouseEnter} 
             onMouseLeave={handleMouseLeave}
             onClick={()=>{props.history.push(`/project_overview/${props.title}`)}}
             id={props.title}>
            <Icon name={props.icon} size='huge'/>
            {/* <img src={props.icon}/> */}
            <div className={'project-details'}>
                <h3>{getStar()}{props.title}</h3>
                <h4 className={'subdetails'}>{props.details}</h4>
            </div>
        </div>
    );
}

export default ProjectCard;