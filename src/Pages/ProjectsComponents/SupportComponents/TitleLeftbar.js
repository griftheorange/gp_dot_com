import React from 'react';
import { List, Divider } from 'semantic-ui-react'
import {useBreakpoint} from '../../useBreakpoint.js'

function TitleLeftbar(props) {

    const breakpoint = useBreakpoint()

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

    function genGithubRepos(){
        let headerFives = []
        if(props.github){
            let keys = Object.keys(props.github)
            for(let keyindex in keys){
                headerFives.push(
                    <h5>{keys[keyindex].slice(0,1).toUpperCase()+keys[keyindex].slice(1)} - <a target='_blank' href={props.github[keys[keyindex]]}>Github</a></h5>
                )
            }
        }
        return headerFives
    }

    function genDemoVideo(){
        if(props.demo){
            return (
                <h5><a target='_blank' href={props.demo}>Demo Video</a></h5>
            )
        }
    }

    function genBlogLink(){
        if(props.blog){
            return (
                <h5><a target='_blank' href={props.blog}>Blog Article</a></h5>
            )
        }
    }

    return (
        <div className={breakpoint['lg'] ? 'titlecard-text-lg' : 'titlecard-text'}>
            <div className={'text-title'}>
                <h2>{props.title}</h2>
                <h4>{props.subtitle}</h4>
                {genGithubRepos()}
                {genDemoVideo()}
                {genBlogLink()}
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