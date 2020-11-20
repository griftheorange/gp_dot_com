import React from 'react';
import profile from '../../../Resources/DSC_1989.JPG'


function ProfilePicture(props) {
    return (
        <div className={'profile-picture'}>
            <img className={'profile-img'} src={profile}/>
        </div>
    );
}

export default ProfilePicture;