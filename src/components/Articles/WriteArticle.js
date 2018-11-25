import React from 'react';
import {storage} from '../../firebase';
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
    }
  }

  handleSubmit(event) {
      event.preventDefault();
      document.getElementById("loader").style.display = "block";
      const {image} = this.state;
      if (image === '' ) {
        let data = {
          title: this.state.title,
          article: this.state.article
        }
  
        const request = new Request('https://ephaig-web.herokuapp.com/api/v1/article', {
          method: 'POST',
          headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('x-access-token'),
          }),
          mode: 'cors',
          body: JSON.stringify(data)
        });
  
        return fetch(request)
        .then(data => {
          if(data.status === 409) {
            document.getElementById("loader").style.display = "none";
            this.setState({
              errorMessage: 'Title of article already exists'
            })
            return setTimeout(() => {
              document.location.replace('/post-article');
              }, 2000);
          }
          if(data.message !== 'Successful') {
            document.getElementById("loader").style.display = "none";
           this.setState({
              errorMessage: 'Please try again',
            });
            return setTimeout(() => {
              document.location.replace('/post-article');
              }, 1000);
          }
          //console.log(data.newArticle)
          document.location.replace('/admin');
        })
          .catch(err => {
            document.getElementById("loader").style.display = "none";
            this.setState({
              errorMessage: 'Kindly try again'
            });
            return setTimeout(() => {
            document.location.replace('/post-article');
            }, 1000);
          })
  
      }
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on('state_changed', 
            (snapshot) => {
                // progress function
            },
            (error) => {
                // error function
                document.getElementById("loader").style.display = "none";
                document.location.replace('/post-article');
                return this.setState({
                  errorMessage: 'Kindly try again'
                })
            },
            () => {
                // complete function
                storage.ref('images').child(image.name).getDownloadURL().then(url => {
                    this.setState({image:url})
                })
                .then(() => {
                  let data = {
                    title: this.state.title,
                    image: this.state.image,
                    article: this.state.article
                  }
            
                  const request = new Request('https://ephaig-web.herokuapp.com/api/v1/article', {
                    method: 'POST',
                    headers: new Headers({
                      'Content-Type': 'application/json',
                      'Authorization': localStorage.getItem('x-access-token'),
                    }),
                    mode: 'cors',
                    body: JSON.stringify(data)
                  });
            
                  fetch(request)
                  .then(data => {
                    console.log(data)
                    if(data.status === 409) {
                      document.getElementById("loader").style.display = "none";
                      this.setState({
                        errorMessage: 'Title of article already exists'
                      })
                      return setTimeout(() => {
                        document.location.replace('/post-article');
                        }, 1000);
                    }
                    if(data.message !== 'Successful') {
                      document.getElementById("loader").style.display = "none";
                      this.setState({
                        errorMessage: 'Kindly try again'
                      })
                      return setTimeout(() => {
                        document.location.replace('/post-article');
                        }, 1000);
                    }
                    //console.log(data.newArticle)
                    document.location.replace('/admin');
                  })
                    .catch(err => {
                      document.getElementById("loader").style.display = "none";
                      this.setState({
                        errorMessage: 'Kindly try again'
                      })
                      return setTimeout(() => {
                        document.location.replace('/post-article');
                        }, 1000);
                    })
                })
                .catch(err => {
                  document.getElementById("loader").style.display = "none";
                  this.setState({
                    errorMessage: 'Kindly try again'
                  })
                  return setTimeout(() => {
                    document.location.replace('/post-article');
                    }, 1000);
                })
            }
        );
      
      
        
  }

  componentDidMount() {
    if(localStorage.getItem('email') !== 'admin@wizzyagro.com') {
      document.location.replace('/')
    }
  }
  render() {
    let errorMessage = this.state.errorMessage,
    title = this.state.title,
    article = this.state.article;
    
    return (
      <div>
        <Form className="contact-form" encType="multipart/form-data" >
          <div><h3>Write An Article</h3></div>
          <span>{errorMessage}</span>
          <FormGroup>
              <Label for="name">Title</Label>
              <Input onChange={evt => this.handleChange(evt)} type="text" name="title" id="name" value={title} required />
          </FormGroup>
          <FormGroup>
            <Label for="image">Image</Label>
            <Input className="file-upload" onChange={evt => this.handleChange(evt)} type="file" name="image" accept="image/*" id="image" />
          </FormGroup>
          <FormGroup>
            <Label for="article">Article</Label>
            <Input onChange={evt => this.handleChange(evt)} type="textarea" rows="6" name="article" id="article" value={article} required />
          </FormGroup>
          <Button onClick={(event) => this.handleSubmit(event)}>Submit</Button>
          
        </Form>
        <div id="loader" style={{display:"none"}}></div>
      </div>
      
    );
  }
}