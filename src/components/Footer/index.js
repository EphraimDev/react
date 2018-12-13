import React from 'react';

const Footer = (props) => {
  return (
    <footer className="footer-area bg-img" style={{backgroundImage: "url(img/bg-img/50.jpg)"}}>
        
        <div className="main-footer-area">
            <div className="container">
                <div className="row">

                    <div className="col-12 col-sm-6 col-lg-4">
                        <div className="single-footer-widget">
                            <div className="footer-logo mb-30">
                                <a href="/" className="footer-nav-brand">WIZZYAGRO</a>
                            </div>
                            <p>Feeding nations</p>
                            <div className="social-info">
                                <a href="/"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                <a href="/"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                <a href="/"><i className="fa fa-google-plus" aria-hidden="true"></i></a>
                                <a href="/"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                                <a href="/"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-4">
                        <div className="single-footer-widget">
                            <div className="widget-title">
                                <h5>QUICK LINK</h5>
                            </div>
                            <nav className="widget-nav">
                                <ul>
                                    <li><a href="/">FAQs</a></li>
                                    <li><a href="/">Blog</a></li>
                                    <li><a href="/">Career</a></li>
                                    <li><a href="/">Policies</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-4">
                        <div className="single-footer-widget">
                            <div className="widget-title">
                                <h5>CONTACT</h5>
                            </div>

                            <div className="contact-information">
                                <p><span>Address:</span> 2, Emmanuel Crescent, Ibafo</p>
                                <p><span>Phone:</span> +234 803 265 3787</p>
                                <p><span>Email:</span> info@wizzyagro.com</p>
                                <p><span>Weekdays opening hours:</span> Mon - Fri: 8 AM to 6 PM</p>
                                <p><span>Weekends opening hours:</span> Sat: 11 AM to 3 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="footer-bottom-area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="border-line"></div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="copywrite-text">
                            <p>&copy;
                                
                                Copyright &copy;<script>
                                    document.write(new Date().getFullYear());
                                </script> All rights reserved | This template is made with <i className="fa fa-heart-o"
                                    aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                                
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="footer-nav">
                            <nav>
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/">About</a></li>
                                    <li><a href="/">Services</a></li>
                                    <li><a href="/">Blog</a></li>
                                    <li><a href="/contact">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;