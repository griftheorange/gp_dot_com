import React from 'react';
import { Divider, List } from 'semantic-ui-react';
import {useBreakpoint} from '../../useBreakpoint.js'

import '../../../CSS/Summary.css'

function SummaryBlock(props) {

    const breakpoint = useBreakpoint()

    function genParagraphs(){
        let pTags = []
        if(props.summary){
            let paragraphArr = props.summary.split('\n')
            for(let index in paragraphArr){
                pTags.push(
                    <p dangerouslySetInnerHTML={{__html: paragraphArr[index].split()}}/>
                )
            }
        }
        return pTags
    }

    function genSetupSteps(){
        let topLevelItems = []
        if(props.setup){
            let keys = Object.keys(props.setup)
            for(let keyIndex in keys){
                topLevelItems.push(
                    <List.Item>
                        <span className={'settup-titles'}>{keys[keyIndex].slice(0,1).toUpperCase() + keys[keyIndex].slice(1)}:</span>
                        <List.List>
                            {genSubItems(props.setup[keys[keyIndex]])}
                        </List.List>
                    </List.Item>
                )
            }
        }
        return (
            <List>
                {topLevelItems}
            </List>
        )
    }

    function genSubItems(setup){
        let steps = []
        for(let stepIndex in setup['steps']){
            steps.push(
                <List.Item>
                    <span className={'settup-items'}>{parseInt(stepIndex) + 1}. {setup['steps'][stepIndex]}</span>
                </List.Item>
            )
        }
        return steps
    }

    return (
        <>
        <div className={breakpoint['lg'] ? 'summary-block-lg' : 'summary-block'}>
            <div className={breakpoint['lg'] ? 'summary-lg' : 'summary'}>
                <h3 className={'sub-block-title'}>Summary</h3>
                <Divider style={{width:'100%'}}/>
                {genParagraphs()}
            </div>
            <div className={breakpoint['lg'] ? 'features-lg' : 'features'}>
                <h3 className={'sub-block-title'}>Setup</h3>
                <Divider style={{width:'100%'}}/>
                {genSetupSteps()}
            </div>
        </div>
        <Divider style={{borderTopWidth:'3px'}}/>
        </>
    );
}

export default SummaryBlock;