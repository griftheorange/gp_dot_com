import React from 'react';
import { Divider } from 'semantic-ui-react';

import '../../../CSS/Summary.css'

function SummaryBlock(props) {

    function genParagraphs(){
        let pTags = []
        if(props.summary){
            let paragraphArr = props.summary.split('\n')
            for(let index in paragraphArr){
                pTags.push(
                    <p>{paragraphArr[index].split()}</p>
                )
            }
        }
        return pTags
    }

    return (
        <>
        <div className={'summary-block'}>
            <div className={'summary'}>
                <h3 className={'sub-block-title'}>Summary</h3>
                <Divider style={{width:'100%'}}/>
                {genParagraphs()}
            </div>
            <div className={'features'}>
                <h3 className={'sub-block-title'}>Setup</h3>
                <Divider style={{width:'100%'}}/>
            </div>
        </div>
        <Divider style={{borderTopWidth:'2px'}}/>
        </>
    );
}

export default SummaryBlock;