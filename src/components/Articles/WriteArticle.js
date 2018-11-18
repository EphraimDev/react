import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../ContactForm/Contact.css';

export default class Example extends React.Component {
    state = {
        title: '',
        image: '',
        article: '',
        errorMessage: ''
    };


  handleChange(evt) {
    evt.preventDefault();
    if(evt.target.name === 'image') {
      this.setState({image: evt.target.files[0]})
    } else {
      this.setState({[evt.target.name]:evt.target.value});
    console.log(evt.target.value)
    }
    
  }

  handleSubmit(event) {
      event.preventDefault();
      
      let img = this.state.image;
      let formData = new FormData();
      formData.append('image', img);
      formData.append('title', this.state.title);
      formData.append('article', this.state.article);

      console.log(formData)

      const request = new Request('https://ephaig-web.herokuapp.com/api/v1/article', {
        method: 'POST',
        headers: new Headers({
          'Authorization': localStorage.getItem('x-access-token'),
        }),
        mode: 'cors',
        body: formData
      });

      fetch(request)
      .then(data => {
        console.log(data);
        if(data.message !== 'Successful') {
          return this.setState({
            errorMessage: 'Please try again'
          })
        }
          this.setState({
            title: '',
            image: '',
            article: '',
            errorMessage: ''
          });
          document.location.replace('/admin');
      })
        .catch(err => {
          console.log(err);
        })
        
  }

  componentDidMount() {
    if(localStorage.getItem('email') !== 'admin@wizzyagro.com') {
      document.location.replace('/')
    }
  }
  render() {
    let errorMessage = this.state.errorMessage;
    return (
      <Form className="contact-form" encType="multipart/form-data" >
        <div><h3>Write An Article</h3></div>
        <span>{errorMessage}</span>
        <FormGroup>
            <Label for="name">Title</Label>
            <Input onChange={evt => this.handleChange(evt)} type="text" name="title" id="name" />
        </FormGroup>
        <FormGroup>
          <Label for="image">Image</Label>
          <Input className="file-upload" onChange={evt => this.handleChange(evt)} type="file" name="image" accept="image/*" id="image" />
        </FormGroup>
        <FormGroup>
          <Label for="article">Article</Label>
          <Input onChange={evt => this.handleChange(evt)} type="textarea" rows="6" name="article" id="article" />
        </FormGroup>
        <Button onClick={(event) => this.handleSubmit(event)}>Submit</Button>
      </Form>
    );
  }
}