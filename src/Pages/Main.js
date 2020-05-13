import React from 'react';
import { Link } from 'react-router-dom'
import { Header, Image, Divider, List, Button, Icon, Container } from 'semantic-ui-react'
import profile from '../Resources/profile.jpg'

import '../CSS/Main.css'

function Main(props) {
    return (
        <>
        <div className={'card-container'} style={{height:'53%'}}>
            <div className={'card-shadow'}/>
            <div className={'card'} style={{display:'flex'}}>
                <img className={'profile-img'} src={profile}/>
                <div className={'business-card-right'}>
                    <div className={'about-me'}>
                        <div className={'contacts'}>
                            <div className={'contact-info'}>
                                <Header id={'welcome'}>Hello and Welcome</Header>
                                <Header id={'my-name'} as='h2'><span>IM</span> Griffin Poole</Header>
                                <Divider/>
                                <List>
                                    <List.Item>
                                        <List.Icon name='map marker alternate'/>
                                        <List.Content>Address: 55 Oak Ridge Drive</List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Icon name='call'/>
                                        <List.Content>Phone: 856-701-2293</List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Icon name='mail outline'/>
                                        <List.Content>Email: <a href='mailto:griffinpoole5@gmail.com' target='_blank'>griffinpoole5@gmail.com</a></List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Icon name='globe'/>
                                        <List.Content>Website: <a href='http://griffinpoole.com'>griffinpoole.com</a></List.Content>
                                    </List.Item>
                                </List>
                            </div>
                            <div className={'links'}>
                                <div style={{display:'flex', flexDirection:'column'}}>
                                    <Button onClick={()=>{window.open('https://www.linkedin.com/in/griffin-poole/', '_blank')}} style={{margin:'auto'}} icon circular size='large' color='blue'>
                                        <Icon name='linkedin'/>
                                    </Button>
                                    <p style={{fontSize:'0.8em', color:'#3c3b3b', fontWeight:'bold', fontFamily:'Roboto, Verdana, Helvetica'}}>LinkedIn</p>
                                </div>
                                <div style={{display:'flex', flexDirection:'column'}}>
                                    <Button onClick={()=>{window.open('https://drive.google.com/file/d/1dHYWJGBJfG-V0gv7QXOFzRm1IUQ1vx3x/view?usp=sharing', '_blank')}} style={{margin:'auto'}} icon circular size='large' color='orange'>
                                        <Icon name='download'/>
                                    </Button>
                                    <p style={{fontSize:'0.8em', color:'#3c3b3b', fontWeight:'bold', fontFamily:'Roboto, Verdana, Helvetica'}}>Resume</p>
                                </div>
                                <div style={{display:'flex', flexDirection:'column'}}>
                                    <Button onClick={()=>{window.open('https://github.com/griftheorange', '_blank')}} style={{margin:'auto'}} icon circular size='large' color='black'>
                                        <Icon name='github'/>
                                    </Button>
                                    <p style={{fontSize:'0.8em', color:'#3c3b3b', fontWeight:'bold', fontFamily:'Roboto, Verdana, Helvetica'}}>Github</p>
                                </div>
                                <div style={{display:'flex', flexDirection:'column'}}>
                                    <Button onClick={()=>{window.open('https://medium.com/@griffinpoole5', '_blank')}} style={{margin:'auto'}} icon circular size='large' color='grey'>
                                        <Icon name='medium m'/>
                                    </Button>
                                    <p style={{fontSize:'0.8em', color:'#3c3b3b', fontWeight:'bold', fontFamily:'Roboto, Verdana, Helvetica'}}>Blog</p>
                                </div>
                                <div style={{display:'flex', flexDirection:'column'}}>
                                    <Button onClick={()=>{window.open('https://www.facebook.com/griffin.poole.9', '_blank')}} style={{margin:'auto'}} icon circular size='large' color='blue'>
                                        <Icon name='facebook'/>
                                    </Button>
                                    <p style={{fontSize:'0.8em', color:'#3c3b3b', fontWeight:'bold', fontFamily:'Roboto, Verdana, Helvetica'}}>Facebook</p>
                                </div>
                            </div>
                        </div>
                        <div className={'description'}>

                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div className={'card-container'} style={{height:'45%'}}>
            <div className={'card-shadow'}/>
            <div className={'card'}>
                
            </div>
        </div>
        </>
    );
}

export default Main;