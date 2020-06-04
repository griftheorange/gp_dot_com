import React from 'react';
import { Divider } from 'semantic-ui-react'
import {useBreakpoint} from '../../useBreakpoint.js'

function TitleCard(props) {

    const breakpoints = useBreakpoint()
    console.log(breakpoints)
    return (
        <>
            <div className={breakpoints['lg'] ? 'project-titlecard-lg' : 'project-titlecard'}>
                {props.children}
            </div>
            <Divider style={{borderTopWidth:'3px'}}/>
        </>
    );
}

export default TitleCard;