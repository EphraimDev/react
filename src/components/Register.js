import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';

class Register extends React.Component {
    state = {
        fullname: '',
        email: '',
        password: '',
        isAdmin: false
    }

    onChange =(e) => {
        if(e.target.name !== 'isAdmin') {
            this.setState({
                [e.target.name]: e.target.value
            })
        } else {
            this.setState({
                [e.target.name]: !this.state.isAdmin
            })
        }
        
    }

    onSubmit=() => {
        this.props.mutate({
            variables: this.state
        })
    }

  render() {
    return (
      <Form className="graph-form">
        <FormGroup className= "graph-input">
            <Label for="exampleEmail">Full Name</Label>
            <Input type="text" name="fullname" id="example" onChange={(e) => this.onChange(e)} />
        </FormGroup>
        <FormGroup className= "graph-input" >
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" onChange={(e) => this.onChange(e)} />
        </FormGroup>
        <FormGroup className= "graph-input">
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" onChange={(e) => this.onChange(e)} />
        </FormGroup>
        <FormGroup  check>
          <Label check>
            <Input className="graph-check" type="checkbox" name="isAdmin" onChange={(e) => this.onChange(e)} />
            Admin?
          </Label>
        </FormGroup>
        <Button className="graph-button" onClick={()=>this.onSubmit()}>Submit</Button>
      </Form>
    );
  }
}

const registerMutation = gql`
mutation($fullname: String!, $email: String!, $password: String!, $isAdmin: Boolean){
    register(fullname: $fullname, email: $email, password: $password, isAdmin: $isAdmin){
        userId
    }
}
`;

export default graphql(registerMutation)(Register);