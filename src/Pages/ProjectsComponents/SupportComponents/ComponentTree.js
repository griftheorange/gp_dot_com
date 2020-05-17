import React from 'react';
import { Divider } from 'semantic-ui-react'

function ComponentTree(props) {
    return (
        <>
        <div className={'component-tree'}>
            <h3>Component Tree</h3>
            <Divider/>
            <img src={props.image}/>
        </div>
        <Divider style={{borderTopWidth:'3px'}}/>
        </>
    );
}

export default ComponentTree;