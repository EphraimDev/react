import React from 'react';

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

  handleSubmit(event) {
      event.preventDefault();
      document.getElementById("register").style.display = "block";
      const target = this.state;
      let data = {
        firstname:target.firstname,
        lastname: target.lastname,
        email: target.email,
        password: target.password
      }


      const request = new Request('https://ephaig-web.herokuapp.com/api/v1/register-user', {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
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
        document.getElementById("register").style.display = "none";
        if(data.message === 'Password must have at least 8 characters, a upper case letter, a number and a special character'){
          return this.setState({errorMessage: 'Password must have at least 8 characters, a upper case letter, a number and a special character',
          firstname: '',
          lastname: '',
          email: '',
          password: ''
        })
        }
        if(!data.success) {
          document.getElementById("register").style.display = "none";
          return this.setState({errorMessage: "Crosscheck your data",
          firstname: '',
          lastname: '',
          email: '',
          password: ''
        });
        } else {
          this.setState({errorMessage: ""});
            const token = `${data.token}`;
            const userId = `${data.userId}`;
            const firstname = `${data.firstname}`;
            const lastname = `${data.lastname}`;
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
          document.getElementById("register").style.display = "none";
          this.setState({
            errorMessage: "Sign Up wasn't successful"
          })
        })
        
  }

  componentDidMount() {
    console.log('Component has mounted');
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