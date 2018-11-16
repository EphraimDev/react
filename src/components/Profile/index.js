import React from 'react';

import './Profile.css';
import UserName from './UserName';
import Icons from './StaticDetails';
import Products from '../Products/ProduceOrdered';

const Profile = (props) => {
    if(!localStorage.getItem('x-access-token')) {
        document.location.replace(`/login`);
    }
    return (
        <div className="container">
            <div className="sub-container name"><UserName /></div>
            <div className="sub-container"><Icons /></div>
            <div className="sub-container"><Products /></div>

        </div>
    );
};

export default Profile;