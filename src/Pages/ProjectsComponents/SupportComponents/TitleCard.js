import React from 'react';
import { Divider } from 'semantic-ui-react'

function TitleCard(props) {

    return (
        <>
            <div className={"project-titlecard"}>
                {props.children}
            </div>
            <Divider style={{borderTopWidth:'3px'}}/>
        </>
    );
}

export default TitleCard;