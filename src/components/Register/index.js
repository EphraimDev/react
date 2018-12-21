import React from 'react';
import { setToken } from '../Auth/SetToken';
import { register } from '../Auth/Register';
import { validateRegistration } from '../Validation/Register';
import { validateState } from '../Validation/State';
import token from '../Auth/GetToken';
import { loggedIn } from '../Auth/LoggedIn';
import { getProfile } from '../Auth/GetProfile';

export default class Register extends React.Component {
    state = {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        errorMessage: '',
    };

  handleChange(evt) {
    evt.preventDefault();
    let target = evt.target;
      this.setState({
        [target.name]: target.value},
        () => validateState(target.name, target.value)
    );
  }

 async handleSubmit(event) {
      event.preventDefault();
      document.getElementById("register").style.display = "block";

      
      const target = this.state;
      let data = {
        firstname:target.firstname,
        lastname: target.lastname,
        email: target.email,
        password: target.password
      }

      const validate = await validateRegistration(data);

      const userInfo = await register(data.firstname, data.lastname, data.email, data.password)

      if(!!validate === false && !!userInfo === true) {
        document.getElementById("register").style.display = "none";
        let userId = userInfo.userId;
       await setToken(userInfo.token);
       
        document.location.replace(`/user/${userId}`)
      } else if (!!validate === true) {
        document.getElementById("register").style.display = "none";
          return validate
      } else if (!!userInfo === false) {
        document.getElementById("register").style.display = "none";
            this.setState({
                errorMessage: 'Registration was unsuccessful'
            })
      }
  }

  async componentWillMount() {
    if(!!loggedIn()) {
        let profile = await getProfile(token)
        document.location.replace(`/user/${profile.id}`)
    }
}


  render() {
    let state = this.state,
    errorMessage = state.errorMessage,
    email= state.email,
    password = state.password,
    firstname = state.firstname,
    lastname = state.lastname;

    return (
      <div>
        <div className="breadcrumb-area">
        <div className="top-breadcrumb-area bg-img bg-overlay d-flex align-items-center justify-content-center" style={{backgroundImage: "url(img/bg-img/24.jpg)"}}>
            <h2>Welcome To The Register Page</h2>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/"><i className="fa fa-home"></i> Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Register</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
 
    <div id="register" style={{display: "none", textAlign: "center"}}>
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
                                        <input type="text" value={firstname} name="firstname" onChange={evt=>this.handleChange(evt)} className="form-control" id="register-firstname" placeholder="Your First Name" />
                                        <span id="firstname-error" style={{display: "none", color: "red"}}>First name is required</span>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <input type="text" value={lastname} name="lastname" onChange={evt=>this.handleChange(evt)} className="form-control" id="register-lastname" placeholder="Your Last Name" />
                                        <span id="lastname-error" style={{display: "none", color: "red"}}>Last name is required</span>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <input type="email" value={email} name="email" onChange={evt=>this.handleChange(evt)} className="form-control" id="register-email" placeholder="Your Email"/><span id="email-error" style={{display: "none", color: "red"}}>Please crosscheck your email</span>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <input type="password" value={password} name="password" onChange={evt=> this.handleChange(evt)} className="form-control" id="register-password" placeholder="Your Password"/><span id="password-error" style={{display: "none", color: "red"}}>Password should be at least 8 characters, with an uppercase, a lowercase, a number and a special character</span>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button type="submit" onClick={evt=> this.handleSubmit(evt)} className="btn alazea-btn mt-15">Submit</button>
                                </div>
                                <div className="col-12 mt-15">
                                    <div className="col-6 form-link"><a href="/login" className="mt-15">Have an account
                                            already?</a></div>
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