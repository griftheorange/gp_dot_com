import React from 'react';
import { Divider, List } from 'semantic-ui-react'

function FeatureCard(props) {

    function genDetails(){
        let details = []
        for(let index in props.details){
            details.push(
                <List.Item>
                    <span>-{props.details[index]}</span>
                </List.Item>
            )
        }
        return details
    }

    console.log(props.animation)

    return (
        <div className={'feature-card'}>
            <div className={'feature-text'}>
                <h4>{props.title}</h4>
                <Divider style={{width:'50%', marginTop:'0.5em', marginBottom:0}}/>
                <List>
                    {genDetails()}
                </List>
            </div>
            <div className={'feature-gif'}>
                <img src={props.animation}/>
            </div>
        </div>
    );
}

export default FeatureCard;