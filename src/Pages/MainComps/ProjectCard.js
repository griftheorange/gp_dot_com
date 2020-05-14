import React, { useState } from 'react';

function ProjectCard(props) {

    function handleMouseEnter(){
        document.getElementById(props.title).style.backgroundColor = '#e4e4e4'
    }
    function handleMouseLeave(){
        document.getElementById(props.title).style.backgroundColor = ''
    }

    return (
        <div onMouseEnter={handleMouseEnter} 
             onMouseLeave={handleMouseLeave}
             onClick={()=>{props.history.push(`/project/${props.title}`)}}
             className={'project-card'}
             id={props.title}>
            <img src={props.icon}/>
            <div className={'project-details'}>
                <h3>{props.title}</h3>
                <h4 className={'subdetails'}>{props.details}</h4>
            </div>
        </div>
    );
}

export default ProjectCard;