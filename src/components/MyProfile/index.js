import React from 'react';
import { getProfile } from '../Auth/GetProfile';
import token from '../Auth/GetToken';
import { editProfile } from '../Auth/EditProfile';

export default class EditProfile extends React.Component {
    state = {
      address: '',
      city: '',
      state: '',
      zip: '',
      errorMessage: '',
  };


    handleChange(evt) {
    evt.preventDefault();
    this.setState({[evt.target.name]:evt.target.value})
  }

   async handleSubmit(event) {
      event.preventDefault();
      document.getElementById('edit-profile').style.display="block"
      const target = this.state;
      let data = {
        address:target.address,
        city: target.city,
        state: target.state,
        zip: target.zip
      }

      const profile = await getProfile(token)

      const edit = await editProfile(profile.id, data)

      document.getElementById('edit-profile').style.display='none';

      !!edit === false ? this.setState({errorMessage: 'Try again'}) : document.location.replace(`/user/${profile.id}`)        
  }

  render() {
    let state = this.state,
    errorMessage = state.errorMessage;

    return (
      <div>
        <div className="breadcrumb-area">
        <div className="top-breadcrumb-area bg-img bg-overlay d-flex align-items-center justify-content-center" style={{backgroundImage: "url(img/bg-img/24.jpg)"}}>
            <h2>Edit my profile</h2>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="./index.html"><i className="fa fa-home"></i> Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Edit Profile</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>

    <div id="edit-profile" style={{display: "none", textAlign: "center"}}>
        Loading....
    </div>

    <section className="contact-area">
        <div className="container">
            <div className="row align-items-center justify-content-between">
                <div className="col-12 col-lg-5">
                    <div className="section-heading">
                        <h2>Fill in your details</h2>
                        <span style={{color: "red"}}>{errorMessage}</span>
                    </div>
                    <div className="contact-form-area mb-100">
                        <form>
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group">
                                        <input type="text" name="address" onChange={evt=>this.handleChange(evt)} className="form-control" id="edit-profile-address" placeholder="Your Address" />
                                        <span id="address-error" style={{display: "none", color: "red"}}>Address is required</span>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <input type="text" name="city" onChange={evt=>this.handleChange(evt)} className="form-control" id="edit-profile-city" placeholder="Your City" />
                                        <span id="city-error" style={{display: "none", color: "red"}}>City is required</span>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <input type="text" name="state" onChange={evt=>this.handleChange(evt)} className="form-control" id="edit-profile-state" placeholder="Your State"/>
                                        <span id="state-error" style={{display: "none", color: "red"}}>State is required</span>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <input type="text" name="zip" onChange={evt=> this.handleChange(evt)} className="form-control" id="edit-profile-zip" placeholder="Your Zip Code"/>
                                        <span id="zip-error" style={{display: "none", color: "red"}}>Password should be a number</span>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button type="submit" onClick={evt=> this.handleSubmit(evt)} className="btn alazea-btn mt-15">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    </div>
    </section>
      </div>
    );
  }
}