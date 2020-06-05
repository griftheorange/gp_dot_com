import React from 'react';
import { Header, Divider, List, Button, Icon } from 'semantic-ui-react'

function Contacts(props) {
    return (
        <div className={'about-me'}>
            <div className={'contacts'}>
                <div className={'contact-info'}>
                    <Header id={'my-name'} as='h2'>Contact</Header>
                    <Divider style={{marginBottom:0}}/>
                    <List className={'contact-list'}>
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
                    <Header id={'my-name'} as='h2'>Résumé <span>{'&'}</span> Social Media</Header>
                    <Divider style={{marginBottom:0}}/>
                    <div className={'links'}>
                        <div style={{display:'flex', flexDirection:'column'}}>
                            <Button title={'Resume'} onClick={()=>{window.open('https://drive.google.com/file/d/16pIlbeaiZHVhvdLk_CnQyuoohcVZwgLn/view?usp=sharing')}} style={{margin:'auto'}} icon circular size='large' color='orange'>
                                <Icon name='download'/>
                            </Button>
                        </div>
                        <div style={{display:'flex', flexDirection:'column'}}>
                            <Button title={'LinkedIn'} onClick={()=>{window.open('https://www.linkedin.com/in/griffin-poole/')}} style={{margin:'auto'}} icon circular size='large' color='linkedin'>
                                <Icon name='linkedin'/>
                            </Button>
                        </div>
                        <div style={{display:'flex'}}>
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
    );
}

export default Contacts;