import React from 'react';

import UserName from './UserName';
import Data from './Profile';
import RecentProduct from './LastProduct';
import RecentService from './LastService';

const Profile = (props) => {
    if(!localStorage.getItem('x-access-token')) {
        document.location.replace(`/login`);
    }
    console.log(document.getElementById('address'))
    return (
        <div>
            <UserName />
            <Data />
            <RecentService />
            <RecentProduct />
        </div>
    );
};

export default Profile;