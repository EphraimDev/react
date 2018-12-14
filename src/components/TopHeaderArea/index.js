import React from 'react';

const TopHeaderArea = () => {
    
    return (
        <div className="top-header-area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="top-header-content d-flex align-items-center justify-content-between">
                            <div className="top-header-meta">
                                <a data-toggle="tooltip" data-placement="bottom" title="contact@wizzyagro.com"><i
                                        className="fa fa-envelope-o" aria-hidden="true"></i> <span>Email:
                                        info@wizzyagro.com</span></a>
                                <a data-toggle="tooltip" data-placement="bottom" title="+234 803 265 3787"><i
                                        className="fa fa-phone" aria-hidden="true"></i> <span>Call Us: +234 803 265 3787</span></a>
                            </div>

                            <div id="login-top-header-area" className="top-header-meta d-flex">
                                <div className="login">
                                    <a href="/login"><i className="fa fa-user" aria-hidden="true"></i> <span>Login</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopHeaderArea;