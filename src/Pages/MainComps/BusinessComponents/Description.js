import React from 'react';
import { Header, Divider } from 'semantic-ui-react'

function Description(props) {
    return (
        <div className={'description'}>
            <Header id={'my-name'} as='h2'>About Me</Header>
            <Divider/>
            <p>Hello and Welcome!</p>
            <Divider style={{marginTop:0, marginBottom:0, width:'9.5em'}}/>
            <p>My name is Griffin Poole, and I am a full-stack web developer and software engineer aspiring to enter the wide world of data analysis.</p>
            <p>I began my career as a Neuroscience Researcher at Temple University and made the switch to coding full-time in October 2019.</p>
            <p>Since then, I have had the pleasure of working on many projects involving the traversal and analysis of large datasets, GUI development for data manipulation, graph generation, and so much more.</p>
            <p>I've assembled overviews of some of my personal favorites below. Feel free to have a look!</p>
        </div>
    );
}

export default Description;