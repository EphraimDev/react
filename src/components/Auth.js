import React from 'react';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';

const query = gql`
{
    allUsers{
        userId,
        fullname
    }
}
`;

const auth = () => (
    <Query query={query}>
        {({data, loading, error}) => {
            if(error) {
                console.log('Error')
            }

            console.log(data)
            return null

            
        }}

    </Query>

);



export default auth;