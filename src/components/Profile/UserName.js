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
        console.log('OK')
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
            })
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
            <div className="col-12 username" >
                <div><h3>Welcome, {firstname} {lastname}</h3></div>
                <div>
                    <p>{address}, {city}, {state}</p>
                </div>
                <div>
                    <p>{zip}</p>
                </div>
            </div>
            
        )
    }
}