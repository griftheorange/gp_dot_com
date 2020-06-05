import React from 'react';
import { Header, Divider, List } from 'semantic-ui-react'

function Skillsets(props) {
    return (
        <div className={'skillsets'}>
            <div className={'skills-list'}>
                <Header id={'my-name'} as='h2'>Skills</Header>
                <Divider style={{marginBottom:0}}/>
                <List className={'skill-list-items'}>
                    <List.Item>
                        <span style={{fontWeight:'bold'}}>Web <span style={{fontWeight:'100'}}>{'&'}</span> Software Development</span>
                        <Divider style={{width:'19.5em', marginBottom:0}}/>
                        <List.List>
                            <List.Item>
                                <span>&bull; <span style={{fontWeight:'bold'}}>Javascript</span>: React</span>
                            </List.Item>
                            <List.Item>
                                <span>&bull; <span style={{fontWeight:'bold'}}>Ruby</span>: Rails</span>
                            </List.Item>
                            <List.Item>
                                <span>&bull; <span style={{fontWeight:'bold'}}>Python</span>: Flask</span>
                            </List.Item>
                            <List.Item>
                                <span>&bull; <span style={{fontWeight:'bold'}}>SQL</span>: MySQL, SQLite</span>
                            </List.Item>
                            <List.Item>
                                <span>&bull; <span style={{fontWeight:'bold'}}>HTML</span></span>
                            </List.Item>
                            <List.Item>
                                <span>&bull; <span style={{fontWeight:'bold'}}>Java</span></span>
                            </List.Item>
                        </List.List>
                    </List.Item>
                    <List.Item>
                        <span style={{fontWeight:'bold'}}>Data Visualization <span style={{fontWeight:'100'}}>{'&'}</span> Analysis</span>
                        <Divider style={{width:'18.5em', marginBottom:0}}/>
                        <List.List>
                            <List.Item>
                                <span>&bull; <span style={{fontWeight:'bold'}}>Python</span>: Pandas, Numpy</span>
                            </List.Item>
                            <List.Item>
                                <span>&bull; <span style={{fontWeight:'bold'}}>Javascript</span>: D3.js, Chart.js</span>
                            </List.Item>
                            <List.Item>
                                <span>&bull; <span style={{fontWeight:'bold'}}>Ruby</span>: Active Record</span>
                            </List.Item>
                        </List.List>
                    </List.Item>
                    <List.Item>
                        <span style={{fontWeight:'bold'}}>Soft Skills</span>
                        <Divider style={{width:'7em', marginBottom:0}}/>
                        <List.List>
                            <List.Item>
                                <span>&bull; Strong Passion for Data Visualization</span>
                                <span>&bull; Flatiron School Graduate of Software Engineering</span>
                                <span>&bull; Rutgers BA in Cell Biology and Neuroscience</span>
                                <span>&bull; Excellent Communication Skills</span>
                                <span>&bull; Very Strong Organization Skills</span>
                                <span>&bull; Highly Personable</span>
                            </List.Item>
                        </List.List>
                    </List.Item>
                </List>
            </div>
        </div>
    );
}

export default Skillsets;