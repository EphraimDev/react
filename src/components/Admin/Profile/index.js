import React from 'react';

import Name from './Name';
import Articles from './Articles';
import Icons from './Icons';

const Profile = (props) => {
    
    if(localStorage.getItem('email') !== 'admin@wizzyagro.com') {
        return document.location.replace('/')
     }
    return (
        <div className="container">
            <div className="sub-container name"><Name /></div>
            <div className="sub-container admin-icons"><Icons /></div>
            <div className="sub-container admin-articles"><Articles /></div>
        </div>
    );
};

export default Profile;