import React from 'react';
import Contact from '../ContactHomePage';

export default class Example extends React.Component {
    state = {
        name: '',
        email: '',
        phoneNumber: '',
        message: '',
        errorMessage: ''
    };


  handleChange(evt) {
    evt.preventDefault();
    this.setState({[evt.target.name]:evt.target.value});
    console.log(evt.target.value)
  }

  handleSubmit(event) {
      event.preventDefault();
      const target = this.state;
      let data = {
        name:target.name,
        email: target.email,
        phoneNumber: target.phoneNumber,
        message: target.message,
      }

      const request = new Request('https://ephaig-web.herokuapp.com/api/v1/contact-us', {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        mode: 'no-cors',
        body: JSON.stringify(data)
      });

      fetch(request)
      .then(res => res.json())
      .then(() => {
          this.setState({
            name: '',
            email: '',
            phoneNumber: '',
            message: '',
            errorMessage: ''
          });
        setTimeout(() => {
            document.location.replace(`/contact`);
          }, 1000);
      })
        .catch(err => {
          console.log(err);
        })
        
  }

  componentDidMount() {
    console.log('Contact Component has mounted');
  }
  render() {
    return (
      <div>
        <div className="breadcrumb-area">
        <div className="top-breadcrumb-area bg-img bg-overlay d-flex align-items-center justify-content-center" style={{backgroundImage: "url(img/bg-img/24.jpg)"}}>
            <h2>Contact Us</h2>
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
    <Contact />
      </div>
    );
  }
}