import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';

class Login extends React.Component {
    state = {
        email: '',
        password: '',
    }

    onChange =(e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        
    }

    onSubmit= async () => {
        const response = await this.props.mutate({
            variables: this.state
        })
        const {token, refreshToken} = response.data.login;
        localStorage.setItem('token', token);
        localStorage.setItem('refreshToken', refreshToken);
    }

  render() {
    return (
      <Form className="graph-form">
        <FormGroup className= "graph-input" >
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" onChange={(e) => this.onChange(e)} />
        </FormGroup>
        <FormGroup className= "graph-input">
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" onChange={(e) => this.onChange(e)} />
        </FormGroup>
        <Button className="graph-button" onClick={()=>this.onSubmit()}>Submit</Button>
      </Form>
    );
  }
}

const loginMutation = gql`
mutation($email: String!, $password: String!){
    login(email: $email, password: $password){
        token,
        refreshToken
    }
}
`;

export default graphql(loginMutation)(Login);