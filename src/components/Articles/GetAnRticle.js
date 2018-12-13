import React from 'react';
import {matchPath} from 'react-router-dom';


export default class Example extends React.Component {
    state = {
        title: '',
        image: '',
        article: '',
        date: ''
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
            article: data.article.article,
            date: data.article.createdAt
        })
    })
    .catch(err => {
        console.log(err);
    })
    
  }
  render() {
      let title = this.state.title,
        image = this.state.image,
        article = this.state.article,
        date = this.state.date.substr(0, 10);
    return (
        <div className="" >
            <div className="breadcrumb-area">
        <div className="top-breadcrumb-area bg-img bg-overlay d-flex align-items-center justify-content-center" style={{backgroundImage: "url(../img/bg-img/50.jpg)"}}>
            <h2>{title}</h2>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/"><i className="fa fa-home"></i> Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Admin</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    <section className="blog-content-area section-padding-0-100">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8">
                    <div className="blog-posts-area">

                        <div className="single-post-details-area">
                                <div className="post-content">
                                <h4 className="post-title">{title}</h4>
                                <div className="post-meta mb-30">
                                    <a href="#"><i className="fa fa-clock-o" aria-hidden="true"></i> {date}</a>
                                </div>
                                <div className="post-thumbnail mb-30">
                                    <img src={image} alt="" />
                                </div>
                                <p>{article}</p>
                                </div>
                            </div>
                            <div className="post-tags-share d-flex justify-content-between align-items-center">
                            <div className="post-share">
                                <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                <a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a>
                                <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        </div>
    );
  }
}