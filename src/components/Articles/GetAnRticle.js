import React from 'react';
import {matchPath} from 'react-router-dom';
import './Articles.css'

export default class Example extends React.Component {
    state = {
        title: '',
        image: '',
        article: ''
    };
  
  componentDidMount() {
    let pathway = matchPath(window.location.pathname, {
        path: "/article/:title",
        strict: false
    });

    let title = pathway.params.title;

    const request = new Request(`http://localhost:2000/api/v1/article/${title}`);

    fetch(request)
    .then(res => res.json())
    .then(data => {
        this.setState({
            title: data.article.title,
            image: data.article.image,
            article: data.article.article
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
        <div className="readArticle" >
            <div><h5>{title}</h5></div>
            <div><img src={image} alt={title} /></div>
            <div><p>{article}</p></div>
            <div className="update-article" ><a href={`/update/${title}`} >Update</a><a href={`/delete/${title}`} >Delete</a></div>
        </div>
    );
  }
}