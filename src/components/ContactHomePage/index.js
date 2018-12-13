import React, { Component } from 'react';

class ContactHomePage extends Component {

  render() {
      return (
        <section className="contact-area section-padding-100-0">
        <div className="container">
            <div className="row align-items-center justify-content-between">
                <div className="col-12 col-lg-5">
                    <div className="section-heading">
                        <h2>GET IN TOUCH</h2>
                        <p>Send us a message, we will call back later</p>
                    </div>
                    <div className="contact-form-area mb-100">
                        <form action="#" method="post">
                            <div className="row">
                                <div className="col-12 col-sm-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="contact-name" placeholder="Your Name" />
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <div className="form-group">
                                        <input type="email" className="form-control" id="contact-email" placeholder="Your Email" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="contact-subject" placeholder="Subject" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <textarea className="form-control" name="message" id="message" cols="30" rows="10"
                                            placeholder="Message"></textarea>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="btn alazea-btn mt-15">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
  }
}


export default ContactHomePage;