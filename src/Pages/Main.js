import React from 'react';
import { Link } from 'react-router-dom'
import { Header } from 'semantic-ui-react'

function Main(props) {
    return (
        <>
            <div style={{position:'absolute',  top:'1%', left:'1%', height:'53%', width:'100%', backgroundColor:'#80808078'}}/>
            <div className='buisnessCard' style={{position:'absolute', height:'53%', width:'100%', backgroundColor:'rgb(239, 233, 233)'}}>
                <div style={{paddingTop:'3em', paddingLeft:'2em', paddingRight:'2em'}}>
                    <Header as='h1'
                            style={{fontFamily:'Verdana, Helvetica', 
                                    fontWeight:'bold', 
                                    fontSize:'2.5em',
                                    marginBottom:0,
                                    color:'#353535'}}>Griffin Poole</Header>
                    <Header.Subheader as='h3' 
                                    style={{marginTop:0, 
                                            color:'#757577'}}>Full Stack Web Developer, Neuroscience BA</Header.Subheader>
                </div>

            </div>
            <div style={{position:'absolute',  top:'56%', left:'1%', height:'45%', width:'100%', backgroundColor:'#80808078'}}/>
            <div className='projectsCard' style={{position:'absolute', top:'55%', height:'45%', width:'100%', backgroundColor:'rgb(239, 233, 233)'}}>
                
            </div>
        </>
    );
}

export default Main;