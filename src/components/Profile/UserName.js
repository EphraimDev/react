import React from 'react';


const userName = props => {


    return (
        <div className="breadcrumb-area">
            <div className="top-breadcrumb-area bg-img bg-overlay d-flex align-items-center justify-content-center" style={{backgroundImage: "url(../img/bg-img/50.jpg)"}}>
                <h2>{props.firstname} {props.lastname}</h2>
            </div>
        </div>
    )

}

export default userName