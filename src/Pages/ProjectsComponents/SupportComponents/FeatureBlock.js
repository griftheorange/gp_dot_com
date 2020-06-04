import React from 'react';
import { Divider } from 'semantic-ui-react';

import FeatureCard from './FeatureCard.js'
import '../../../CSS/Summary.css'

function FeatureBlock(props) {

    function genFeatures(){
        let featureElements = []
        if(props.features){
            let features = Object.keys(props.features)
            for(let index in features){
                featureElements.push(
                    <FeatureCard title={features[index]}
                                 details={props.features[features[index]]['details']}
                                 animation={props.features[features[index]]['animation']}/>
                )
            }
        }
        return featureElements
    }

    return (
        <>
        <div className={'feature-block'}>
            <h3 className={'feature-title'}>Features</h3>
            <Divider style={{width:'100%'}}/>
            {genFeatures()}
        </div>
        <Divider style={{borderTopWidth:'3px'}}/>
        </>
    );
}

export default FeatureBlock;