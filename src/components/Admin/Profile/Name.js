import React from 'react';

export default class UserName extends React.Component {
    
        state = {
            name: '',
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
                name: localStorage.getItem('firstname')
            })
        })
        .catch(err => {
            console.log(err);
        })
          
    }
    render() {
        let name = this.state.name
        return (
            <div className="col-12 username" >
                <div><h3>Welcome, {name}</h3></div>
            </div>
            
        )
    }
}