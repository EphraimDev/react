import React from 'react';

export default class UserName extends React.Component {
    
        state = {
            articles: []
        }
    
    
    componentDidMount() {
        const request = new Request(`https://ephaig-web.herokuapp.com/api/v1/articles`);
    
        fetch(request)
        .then(res => res.json())
        .then(data => { 
            console.log(data.articles);
            let articles = this.state.articles;
            for (let index = 0; index < data.articles.length; index++) {
                const element = data.articles[index];
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
        articles.forEach(article => {
            const section = document.querySelector('#list');
            const img = document.createElement('img');
            const h5 = document.createElement('h5');
            const p = document.createElement('p');
            let title = document.createTextNode(article.title);
            let image = article.image;
            let story = article.article.substr(0, 100) + '...';
            let date = document.createTextNode(article.createdAt.substr(0,10));
            let post = document.createTextNode(story);
            let firstDiv = document.createElement('div');
            firstDiv.className = "col-12 col-md-6 col-lg-4";
            let secondDiv = document.createElement('div');
            secondDiv.className = "single-blog-post mb-100";
            let thirdDiv = document.createElement('div');
            thirdDiv.className = 'post-thumbnail mb-30';
            let fourthDiv = document.createElement('div');
            fourthDiv.className = 'post-content';
            let fifthDiv = document.createElement('div');
            fifthDiv.className='post-meta';
            let firstA = document.createElement('a');
            firstA.setAttribute('href', `/article/${article.title}`);
            let secondA = document.createElement('a');
            secondA.setAttribute('href', `/article/${article.title}`);
            secondA.className = 'post-title';
            let thirdA = document.createElement('a');
            thirdA.setAttribute('href', '/');
            p.className = 'post-excerpt';
            p.appendChild(post);
            img.setAttribute('src', image);
            img.setAttribute('alt', '');
            firstA.appendChild(img);
            h5.appendChild(title);
            let firstI = document.createElement('i');
            firstI.classList.add('fa', 'fa-clock-o');
            firstI.setAttribute('aria-hidden', 'true');
            secondA.appendChild(h5);
            thirdA.appendChild(firstI);
            thirdA.appendChild(date);
            fourthDiv.appendChild(secondA);
            fifthDiv.appendChild(thirdA);
            fourthDiv.appendChild(fifthDiv);
            fourthDiv.appendChild(p);
            thirdDiv.appendChild(firstA);
            secondDiv.appendChild(thirdDiv);
            secondDiv.appendChild(fourthDiv);
            firstDiv.appendChild(secondDiv);
            section.appendChild(firstDiv)
        });
        return (
            <div>
                <div className="breadcrumb-area">
        <div className="top-breadcrumb-area bg-img bg-overlay d-flex align-items-center justify-content-center" style={{backgroundImage: "url(img/bg-img/51.jpg)"}}>
            <h2>This is the blog page</h2>
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
    
    <section className="alazea-blog-area section-padding-100-0">
                <div id="list" className="row justify-content-center">
                  
                </div>
        </section>
            </div>
        )
    }
}