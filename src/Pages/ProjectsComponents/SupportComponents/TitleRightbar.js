import React from 'react';
import {useBreakpoint} from '../../useBreakpoint.js'

function TitleRightbar(props) {

    const breakpoint = useBreakpoint()

    return (
        <div className={breakpoint['lg'] ? 'titlecard-animation-lg': 'titlecard-animation'}>
            <img src={props.gif}/>
        </div>
    );
}

export default TitleRightbar;