import React from 'react';
import { getProfile } from '../Auth/GetProfile';
import token from '../Auth/GetToken';
import { userProfile } from '../Auth/GetUserName';

import UserName from './UserName';
import Data from './Profile';
import RecentProduct from './LastProduct';
import RecentService from './LastService';
import { loggedIn } from '../Auth/LoggedIn';

class Profile extends React.Component {

    state={
        userId: '',
        firstname: '',
        lastname: '',
        training: '',
        products: '',
        investment: '',
        address: '',
        city: '',
        state: '',
        zip: ''
    }

    componentWillMount() {
        if(!loggedIn) {
            document.location.replace(`/login`);
        }
    }

     async componentDidMount() {
        let profile = await getProfile(token);

        let userName = await userProfile(profile.id);

        if(!!userName === true) {
            this.setState({
                firstname: userName.username.firstname,
                lastname: userName.username.lastname,
                userId: userName.username.userId,
                products: userName.profile.products_services,
               training: userName.profile.training_consultancy,
               investment: userName.profile.investment,
               zip: userName.profile.zip,
               address: userName.profile.address,
               city: userName.profile.city,
               state: userName.profile.state,
            })
        } 
     }
     
      render() {

       let firstname = this.state.firstname;
       let lastname = this.state.lastname,
            training = this.state.training,
            product = this.state.products,
            address = this.state.address,
           state = this.state.state,
           city = this.state.city,
           zip = this.state.zip,
           userId= this.state.userId,
            investment = this.state.investment;

        return (
            <div>
                <UserName firstname={firstname} lastname={lastname} />
                <Data 
                    training={training}
                    product={product}
                    address={address}
                    state={state}
                    city={city}
                    zip={zip}
                    investment={investment}
                    userId={userId}
                />
                <RecentProduct />
                <RecentService />
            </div>
        )
    }
}

export default Profile;