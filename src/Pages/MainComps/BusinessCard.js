import React from 'react';
import { Header, Divider, List} from 'semantic-ui-react'
import Contacts from './BusinessComponents/Contacts'
import Skillsets from './BusinessComponents/Skillsets'
import Description from './BusinessComponents/Description'
import ProfilePicture from './BusinessComponents/ProfilePicture'

function BusinessCard(props) {

    return (
        <div className={"business-card-container"}>
            <ProfilePicture/>
            <Contacts/>
            <Skillsets/>
            <Description/>
        </div>
    );
}

export default BusinessCard;