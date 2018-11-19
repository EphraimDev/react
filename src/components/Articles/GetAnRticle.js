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

    const request = new Request(`https://ephaig-web.herokuapp.com/api/v1/article/${title}`, {
        mode: 'cors'
    });

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
            <div className='article-body'><h5>{title}</h5></div>
            <div className='article-body'><img src={image} alt={title} /></div>
            <div className='article-body'><p>{article}</p></div>
            <div className="update-article" ><a href={`/update/${title}`} >Update</a><a href={`/delete/${title}`} >Delete</a></div>
        </div>
    );
  }
}