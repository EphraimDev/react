import React from 'react';
import './Articles.css'

export default class UserName extends React.Component {
    
        state = {
            articles: []
        }
    
    
    componentDidMount() {
        const request = new Request(`https://ephaig-web.herokuapp.com/api/v1/articles`);
    
        fetch(request)
        .then(res => res.json())
        .then(data => { 
            
            let articles = this.state.articles;
            for (let index = 0; index < data.articles.length; index++) {
                const element = data.articles[index].title;
                //console.log(element)
                articles.push(element)
            }
            this.setState({
                articles: articles
            })
        })
        .catch(err => {
            console.log(err);
        })
          
    }
    render() {
        let articles = this.state.articles;
        for (let i = 0; i < articles.length; i++) {
            const ulTag = document.querySelector('#list');
            const list = document.createElement('li');
            const link = document.createElement('a')
            const element = articles[i];
            let textnode = document.createTextNode(element);
            link.appendChild(textnode);
            list.appendChild(link).setAttribute("href", `/article/${element}`);
            ulTag.appendChild(list) 
        }
        return (
            <div className="col-12 articles-con" >
                <div className="col-12" ><h5>Articles</h5></div>
                <div id="articles"><ul id="list"></ul></div>
            </div>
            
        )
    }
}