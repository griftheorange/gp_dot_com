import React from 'react';
import { Header, Divider, List} from 'semantic-ui-react'
import profile from '../../Resources/DSC_1989.JPG'
import Contacts from './BusinessComponents/Contacts'
import Skillsets from './BusinessComponents/Skillsets';
import Description from './BusinessComponents/Description'
import {useBreakpoint} from '../useBreakpoint'

function BusinessCard(props) {

    const breakpoint = useBreakpoint()

    return (
        <div className={breakpoint['lg'] ? 'business-card-container lg' : 'business-card-container'}>
            <img className={'profile-img'} src={profile}/>
            <Contacts/>
            <Skillsets/>
            <Description/>
        </div>
    );
}

export default BusinessCard;