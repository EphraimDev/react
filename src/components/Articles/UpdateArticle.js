import React from 'react';
import {matchPath} from 'react-router-dom';
import {storage} from '../../firebase';
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
    if(evt.target.name === 'image') {
      this.setState({image: evt.target.files[0]})
    } else {
      this.setState({[evt.target.name]:evt.target.value});
    }
  }

  handleSubmit(event) {
      event.preventDefault();

      const {image} = this.state;
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on('state_changed', 
          (snapshot) => {
              // progress function
          },
          (error) => {
              // error function
              console.log(error)
          },
          () => {
              // complete function
              storage.ref('images').child(image.name).getDownloadURL().then(url => {
                  this.setState({image:url})
              })
              .then(() => {
                const target = this.state;

                let data = {
                  title:target.title,
                  image: target.image,
                  article: target.article
                }

              let articleId = this.state.articleId;

              const request = new Request(`https://ephaig-web.herokuapp.com/api/v1/update-article/${articleId}`, {
                method: 'PUT',
                headers: new Headers({
                  'Content-Type': 'application/json',
                  'Authorization': localStorage.getItem('x-access-token'),
                }),
                mode: 'cors',
                body: JSON.stringify(data)
              });

              fetch(request)
              .then(res => res.json())
              .then(data => {
                  document.location.replace('/articles');
              })
                .catch(err => {
                  console.log(err);
                })
          })
        });
      
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

    const request = new Request(`https://ephaig-web.herokuapp.com/api/v1/article/${title}`);

    fetch(request)
    .then(res => res.json())
    .then(data => {
        this.setState({
            title: data.article.title,
            article: data.article.article,
            articleId: data.article.articleId,
            image: data.article.image
        });
        console.log(this.state.image)
    })
    .catch(err => {
        console.log(err);
    })
  }
  render() {
      let title = this.state.title,
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
          <Input className="file-upload" onChange={evt => this.handleChange(evt)} type="file" name="image" accept="image/*" id="image" />
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