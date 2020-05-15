import React from 'react';
import { Header, Divider, List, Button, Icon } from 'semantic-ui-react'
import profile from '../../Resources/DSC_1989.JPG'

function BusinessCard(props) {
    return (
        <>
            <img className={'profile-img'} src={profile}/>
            <div className={'business-card-container'}>
                <div className={'about-me'}>
                    <div className={'contacts'}>
                        <div className={'contact-info'}>
                            <Header id={'my-name'} as='h2'>Contact</Header>
                            <Divider style={{marginBottom:0}}/>
                            <List className={'contact-list'}>
                                <List.Item>
                                    <List.Icon name='calendar outline'/>
                                    <span style={{display:'block'}}>Age: {(new Date(Date.now() - (new Date('1996-07-15')))).getUTCFullYear() - 1970}</span>
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='map marker alternate'/>
                                    <span style={{display:'block'}}>Location: Brooklyn, NY</span>
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='mail outline'/>
                                    <span style={{display:'block'}}>Email: <a href='mailto:griffinpoole5@gmail.com' target='_blank'>griffinpoole5@gmail.com</a></span>
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='globe'/>
                                    <span style={{display:'block'}}>Website: <a href='http://griffinpoole.com'>griffinpoole.com</a></span>
                                </List.Item>
                            </List>
                        </div>
                        <Divider style={{marginBottom:0, marginTop:0}}/>
                        <div className={'links-container'}>
                            <Header id={'my-name'} as='h2'>Resume <span>{'&'}</span> Social Media</Header>
                            <Divider style={{marginBottom:0}}/>
                            <div className={'links'}>
                                <div style={{display:'flex', flexDirection:'column'}}>
                                    <Button title={'Resume'} onClick={()=>{window.open('https://drive.google.com/file/d/1dHYWJGBJfG-V0gv7QXOFzRm1IUQ1vx3x/view?usp=sharing')}} style={{margin:'auto'}} icon circular size='large' color='orange'>
                                        <Icon name='download'/>
                                    </Button>
                                </div>
                                <div style={{display:'flex', flexDirection:'column'}}>
                                    <Button title={'LinkedIn'} onClick={()=>{window.open('https://www.linkedin.com/in/griffin-poole/')}} style={{margin:'auto'}} icon circular size='large' color='linkedin'>
                                        <Icon name='linkedin'/>
                                    </Button>
                                </div>
                                <div style={{display:'flex', flexDirection:'column'}}>
                                    <Button title={'Github'} onClick={()=>{window.open('https://github.com/griftheorange')}} style={{margin:'auto'}} icon circular size='large' color='black'>
                                        <Icon name='github'/>
                                    </Button>
                                </div>
                                <div style={{display:'flex', flexDirection:'column'}}>
                                    <Button title={'Medium'} onClick={()=>{window.open('https://medium.com/@griffinpoole5')}} style={{margin:'auto'}} icon circular size='large' color='grey'>
                                        <Icon name='medium m'/>
                                    </Button>
                                </div>
                                <div style={{display:'flex', flexDirection:'column'}}>
                                    <Button title={'Facebook'} onClick={()=>{window.open('https://www.facebook.com/griffin.poole.9')}} style={{margin:'auto'}} icon circular size='large' color='facebook'>
                                        <Icon name='facebook'/>
                                    </Button>
                                </div>
                                <div style={{display:'flex', flexDirection:'column'}}>
                                    <Button title={'Instagram'} onClick={()=>{window.open('https://www.instagram.com/gryphondore/?hl=en')}} style={{margin:'auto'}} icon circular size='large' color='instagram'>
                                        <Icon name='instagram'/>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'skillsets'}>
                    <div className={'skills-list'}>
                        <Header id={'my-name'} as='h2'>Skills</Header>
                        <Divider style={{marginBottom:0}}/>
                        <List className={'skill-list-items'}>
                            <List.Item>
                                <span style={{fontWeight:'bold'}}>Web <span style={{fontWeight:'100'}}>{'&'}</span> Software Developement</span>
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
                <div className={'description'}>
                    <Header id={'my-name'} as='h2'>About Me</Header>
                    <Divider/>
                    <p>Hello and Welcome!</p>
                    <Divider style={{marginTop:0, marginBottom:0, width:'9.5em'}}/>
                    <p>My name is Griffin Poole, and I am a full-stack web developer and software engineer aspiring to enter the wide world of data analysis.</p>
                    <p>I began my career as a Neuroscience Researcher at Temple University and made the switch to coding full-time in October 2019.</p>
                    <p>Since then, I have had the pleasure of working on many projects involving traversal/analysis of large datasets, GUI development for data manipulation, graph generation, and so much more.</p>
                    <p>I've assembled overviews of some of my personal favorites below. Feel free to have a look!</p>
                </div>
            </div>
        </>
    );
}

export default BusinessCard;