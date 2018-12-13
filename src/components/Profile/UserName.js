import React from 'react';

export default class UserName extends React.Component {
    
        state = {
            firstname: localStorage.getItem('firstname'),
            lastname: localStorage.getItem('lastname'),
            address: '',
            city: '',
            state: '',
            zip: ''
        }
    
    
    componentDidMount() {
        let userId = localStorage.getItem('current-user-id');
        const request = new Request(`https://ephaig-web.herokuapp.com/api/v1/user/${userId}`, {
                headers: new Headers({
                'Authorization': localStorage.getItem('x-access-token')
            }),
            mode: 'cors'
        });
    
        fetch(request)
        .then(res => res.json())
        .then(data => {
            this.setState({
                address: data.profile.address,
                city: data.profile.city,
                state: data.profile.state,
                zip: data.profile.zip
            });
            console.log(document.getElementById('address'))
        })
        .catch(err => {
            console.log(err);
            return this.setState({error: false})
        })
          
    }
    render() {
        let firstname = this.state.firstname;
        let lastname = this.state.lastname;
        let address = this.state.address,
            state = this.state.state,
            city = this.state.city,
            zip = this.state.zip;
            
            
        return (
            <div className="breadcrumb-area">
                <div className="top-breadcrumb-area bg-img bg-overlay d-flex align-items-center justify-content-center" style={{backgroundImage: "url(../img/bg-img/50.jpg)"}}>
                    <h2>{firstname} {lastname}</h2>
                    <h5 id="address" style={{display: "none"}}>{address}, {city}, {state}</h5>
                    <h6>{zip}</h6>
                </div>
            </div>
            
        )
    }
}