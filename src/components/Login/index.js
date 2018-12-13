import React from 'react';
 
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
        [target.name]: target.value},
        ()=> {
    const emailRegex = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@(([0-9a-zA-Z])+([-\w]*[0-9a-zA-Z])*\.)+[a-zA-Z]{2,9})$/;
    const regPass = /^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[#?!@$%^&*\-_]).{8,}$/;
          if(target.name === 'email'){
            if(!emailRegex.test(target.value)) {
              document.getElementById('email-error').style.display='block'
            } else {
              document.getElementById('email-error').style.display='none'
            }
          }
          if(target.name === 'password') {
            if(!regPass.test(target.value)) {
              document.getElementById('password-error').style.display='block'
            } else {
              document.getElementById('password-error').style.display='none'
            }
          }
        });
    }

  onSubmit(e) {
    e.preventDefault();
  document.getElementById("fetchLoader").style.display = "block";
    const target = this.state;
    let data = {
      email: target.email,
      password: target.password
    }

    const request = new Request('https://ephaig-web.herokuapp.com/api/v1/login', {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        mode: 'cors',
        body: JSON.stringify(data)
      });

      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          const element = data[key];
        if(!element || element.length < 2) {
          return document.getElementById(`${key}-error`).style.display='block'
        } else {
          document.getElementById(`${key}-error`).style.display='none'
        }
        }
      }

      fetch(request)
        .then(res => res.json())
        .then(data => {
          console.log(data)
          document.getElementById("fetchLoader").style.display = "none";
          if(data.authUser.email === 'admin@wizzyagro.com') {
            this.setState({errorMessage: ""});
            const token = `${data.token}`;
            const userId = `${data.authUser.userId}`;
            const firstname = `${data.authUser.firstname}`;
            const email = data.authUser.email;
            localStorage.setItem('x-access-token', token);
            localStorage.setItem('firstname', firstname);
            localStorage.setItem('current-user-id', userId);
            localStorage.setItem('email', email);
            
              return document.location.replace(`/admin`)
          }
          if(data.message === 'Invalid Credentials') {
            return this.setState({
              errorMessage: 'Login details is incorrect',
              email: '',
              password: ''
            });
          }
          else {
            this.setState({errorMessage: ""});
            const token = `${data.token}`;
            const userId = `${data.authUser.userId}`;
            const firstname = `${data.authUser.firstname}`;
            const lastname = `${data.authUser.lastname}`;
            localStorage.setItem('current-user-id', userId);
            localStorage.setItem('x-access-token', token);
            localStorage.setItem('firstname', firstname);
            localStorage.setItem('lastname', lastname);
            localStorage.setItem('email', this.state.email)
            
              document.location.replace(`/user/${userId}`)
          }
        })
        .catch(err => {
          console.log(err);
          document.getElementById("fetchLoader").style.display = "none";
          return this.setState({
            errorMessage: 'Login was not successful, kindly try again',
            email: '',
            password: ''
          });
        })
  }

  componentDidMount() {
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
                            <li className="breadcrumb-item"><a href="./index.html"><i className="fa fa-home"></i> Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Login</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>

    <div id="fetchLoader" className="fetchLoader align-items-center justify-content-center" style={{display: "none"}}>
        <div className="preloader-circle"></div>
        <div className="preloader-img">
            <img src="img/core-img/leaf.png" alt="" />
        </div>
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