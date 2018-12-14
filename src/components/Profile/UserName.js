import React from 'react';

export default class UserName extends React.Component {
    
        state = {
            firstname: localStorage.getItem('firstname'),
            lastname: localStorage.getItem('lastname'),
        }
    
    
    componentDidMount() {
        // let userId = localStorage.getItem('current-user-id');
        // const request = new Request(`https://ephaig-web.herokuapp.com/api/v1/user/${userId}`, {
        //         headers: new Headers({
        //         'Authorization': localStorage.getItem('x-access-token')
        //     }),
        //     mode: 'cors'
        // });
    
        // fetch(request)
        // .then(res => res.json())
        // .then(data => {
        //     this.setState({
        //     });
        // })
        // .catch(err => {
        //     console.log(err);
        //     return this.setState({error: false})
        // })
          
    }
    render() {
        let firstname = this.state.firstname;
        let lastname = this.state.lastname;
        
        //!address ? console.log(1) : console.log(address)
            
        return (
            <div className="breadcrumb-area">
                <div className="top-breadcrumb-area bg-img bg-overlay d-flex align-items-center justify-content-center" style={{backgroundImage: "url(../img/bg-img/50.jpg)"}}>
                    <h2>{firstname} {lastname}</h2>
                </div>
            </div>
            
        )
    }
}