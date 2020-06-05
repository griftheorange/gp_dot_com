import React from 'react';
import { Divider } from 'semantic-ui-react'
import {useBreakpoint} from '../../useBreakpoint'

function ComponentTree(props) {

    const breakpoint = useBreakpoint()

    function genFileTreeBlocks(){
        let images = []
        for(let [key, value] of Object.entries(props.images)){
            images.push(
                <>
                <div className={breakpoint['lg'] ? 'tree-img-container-lg' : 'tree-img-container'}>
                    <h4>{key.slice(0,1).toUpperCase() + key.slice(1)}</h4>
                    <Divider style={{marginTop:0, marginBottom:'0.2em'}}/>
                    <img src={value}/>
                </div>
                </>
            )
        }
        return images
    }

    return (
        <>
        <div className={'component-tree'}>
            <h3>File Trees</h3>
            <Divider/>
            <div className={'tree-container'}>
                {genFileTreeBlocks()}
            </div>
        </div>
        <Divider style={{borderTopWidth:'3px'}}/>
        </>
    );
}

export default ComponentTree;