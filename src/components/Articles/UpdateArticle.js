import React from 'react';
import {matchPath} from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../ContactForm/Contact.css';

export default class Example extends React.Component {
    state = {
        title: '',
        image: '',
        article: '',
        articleId: '',
        errorMessage: ''
    };


  handleChange(evt) {
    evt.preventDefault();
    this.setState({[evt.target.name]:evt.target.value});
  }

  handleSubmit(event) {
      event.preventDefault();
      const target = this.state;
      let data = {
        title:target.title,
        image: target.image,
        article: target.article
      }

    let articleId = this.state.articleId;

      const request = new Request(`http://localhost:2000/api/v1/update-article/${articleId}`, {
        method: 'PUT',
        headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('x-access-token'),
        }),
        body: JSON.stringify(data)
      });

      fetch(request)
      .then(res => res.json())
      .then(data => {
          this.setState({
            title: '',
            image: '',
            article: '',
            errorMessage: ''
          });
          document.location.replace('/articles');
      })
        .catch(err => {
          console.log(err);
        })
        
  }

  componentDidMount() {
    if(localStorage.getItem('email') !== 'admin@wizzyagro.com') {
      document.location.replace('/')
    }

    let pathway = matchPath(window.location.pathname, {
        path: "/update/:title",
        strict: false
    });

    let title = pathway.params.title;

    const request = new Request(`http://localhost:2000/api/v1/article/${title}`);

    fetch(request)
    .then(res => res.json())
    .then(data => {
        this.setState({
            title: data.article.title,
            article: data.article.article,
            articleId: data.article.articleId
        })
    })
    .catch(err => {
        console.log(err);
    })
  }
  render() {
      let title = this.state.title,
            image = this.state.image,
            article = this.state.article;
    return (
      <Form className="contact-form" >
        <div><h3>Write An Article</h3></div>
        <FormGroup>
            <Label for="name">Title</Label>
            <Input onChange={evt => this.handleChange(evt)} type="text" name="title" id="name" value={title} />
        </FormGroup>
        <FormGroup>
          <Label for="image">Image</Label>
          <Input className="file-upload" onChange={evt => this.handleChange(evt)} type="file" name="image" accept="image/*" id="image" value={image} />
        </FormGroup>
        <FormGroup>
          <Label for="article">Article</Label>
          <Input onChange={evt => this.handleChange(evt)} type="textarea" rows="6" name="article" id="article" value={article} />
        </FormGroup>
        <Button onClick={(event) => this.handleSubmit(event)}>Submit</Button>
      </Form>
    );
  }
}