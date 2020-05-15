import React from 'react';
import { List, Divider } from 'semantic-ui-react'

function TitleLeftbar(props) {

    function genListItems(){
        let elements = []
        let keys = Object.keys(props.listHash)
        for(let keyIndex in keys){
            elements.push(
                <List.Item>
                    <h4>{keys[keyIndex]}</h4>
                    <Divider style={{width:'80%', marginTop:0, marginBottom:0}}/>
                    <List.List>
                        {genSubItems(props.listHash[keys[keyIndex]])}
                    </List.List>
                </List.Item>
            )
        }
        return elements
    }

    function genSubItems(valueArr){
        return (
            valueArr.map((value) => {
                return (
                    <List.Item>
                        <span>&bull; {value}</span>
                    </List.Item>
                )
            })
        )
    }

    return (
        <div className={'titlecard-text'}>
            <div className={'text-title'}>
                <h2>{props.title}</h2>
                <h4>{props.subtitle}</h4>
            </div>
            <Divider style={{borderTopWidth:'3px'}}/>
            <div className={'text-tools'}>
                <h2>Dev Tools</h2>
                <List>
                    {genListItems()}
                </List>
            </div>
        </div>
    );
}

export default TitleLeftbar;