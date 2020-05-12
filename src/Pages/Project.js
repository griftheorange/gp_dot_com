import React from 'react';

function Project(props) {

    console.log(props)
    return (
        <div>
            Project {props.match.params.name}
        </div>
    );
}

export default Project;