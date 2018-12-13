import { ApolloClient } from 'apollo-client';
//import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
//import { onError } from 'apollo-link-error';
import { InMemoryCache } from 'apollo-cache-inmemory';

const URL = 'http://localhost:7000/graphql';

const httpLink = new HttpLink({
    uri: URL,
    headers: {
        'x-token': localStorage.getItem('token'),
        'x-refresh-token': localStorage.getItem('refreshToken')
    }
});


const cache = new InMemoryCache();

const client = new ApolloClient({
  link: httpLink,
  cache,
});

export default client;