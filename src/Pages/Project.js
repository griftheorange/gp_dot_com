import React from 'react';

function Project(props) {

    console.log(props)
    return (
        <div className={'card-container'} style={{height:'100%'}}>
            <div className={'card'}>
                Project {props.match.params.name}
            </div>
        </div>
    );
}

export default Project;