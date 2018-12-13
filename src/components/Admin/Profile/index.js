import React from 'react';

import Icons from './Icons';

const Profile = (props) => {
    
    if(localStorage.getItem('email') !== 'admin@wizzyagro.com') {
        return document.location.replace('/')
     }
    return (
        <div className="">
            <div className="breadcrumb-area">
        <div className="top-breadcrumb-area bg-img bg-overlay d-flex align-items-center justify-content-center" style={{backgroundImage: "url(img/bg-img/51.jpg)"}}>
            <h2>Welcome Admin</h2>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="./index.html"><i className="fa fa-home"></i> Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Admin</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
            <div className=""><Icons /></div>
        </div>
    );
};

export default Profile;