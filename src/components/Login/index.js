import React from 'react';
import { loginUser } from '../Auth/Login';
import { validateRegistration } from '../Validation/Register';
import { setToken } from '../Auth/SetToken';
import { validateState } from '../Validation/State';
import { loggedIn } from '../Auth/LoggedIn';
import { getProfile } from '../Auth/GetProfile';
import token from '../Auth/GetToken';
 
export default class Login extends React.Component {
  
    state = {
      email: '',
      password: '',
      errorMessage: ''
    };

    handleChange(evt) {
      evt.preventDefault();
      let target = evt.target;
      this.setState({
        [target.name]: target.value
      },
      ()=> {
        validateState(target.name, target.value)
      }
      );
    }

 async onSubmit(e) {
    e.preventDefault();
  document.getElementById("login").style.display = "block";
    const target = this.state;
    let data = {
      email: target.email,
      password: target.password
    }

    const validate = await validateRegistration(data);

    const login = await loginUser(data.email, data.password);
    
    if(!!validate === false && !!login === true ) {
        document.getElementById("login").style.display = "none";
        let userId = login.authUser.userId;
        await setToken(login.token);
        
        document.location.replace(`/user/${userId}`)
    } else if (!!validate === true ) {
      document.getElementById("login").style.display = "none";
      return validate
    } else {
      document.getElementById("login").style.display = "none";
        this.setState({
            errorMessage: 'Login was not successful, kindly try again'
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
    password = state.password;

    return (
      <div>
        <div className="breadcrumb-area">
        <div className="top-breadcrumb-area bg-img bg-overlay d-flex align-items-center justify-content-center" style={{backgroundImage: "url(img/bg-img/24.jpg)"}}>
            <h2>Log in to your account, we miss you</h2>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/"><i className="fa fa-home"></i> Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Login</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>

    <div id="login" style={{display: "none", textAlign: "center"}}>
        Loading....
    </div>
    

    <section className="contact-area">
        <div className="container">
            <div className="row align-items-center justify-content-between">
                <div className="col-12 col-lg-5">
                    <div className="section-heading">
                        <h2>Welcome Back</h2>
                        <span style={{color: "red"}}>{errorMessage}</span>
                    </div>
                    <div className="contact-form-area mb-100">
                        <form>
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group">
                                        <input type="email" value={email} onChange={evt => this.handleChange(evt)} name="email" className="form-control" id="login-email" placeholder="Your Email"/><span id="email-error" style={{display: "none", color: "red"}}>Please crosscheck your email</span>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <input type="password" value={password} onChange={evt => this.handleChange(evt)} name="password" className="form-control" id="login-password" placeholder="Your Password" /><span id="password-error" style={{display: "none", color: "red"}}>Password should be at least 8 characters, with an uppercase, a lowercase, a number and a special character</span>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button type="submit" onClick={e => this.onSubmit(e)} className="btn alazea-btn mt-15">Submit</button>
                                </div>
                                <div className="col-12 mt-15">
                                    <div className="col-6 form-link"><a href="/forgot-password" className="mt-15">Forgot
                                            password?</a></div>
                                    <div className="col-6 form-link"><a href="/register" className="mt-15">New to
                                            WizzyAgro?</a></div>
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