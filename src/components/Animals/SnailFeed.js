import React from 'react';

const Cards = (props) => {
  return (
      <div className="col-12 col-md-6 col-lg-4">
      <div className="single-blog-post mb-100">
          <div className="post-thumbnail mb-30">
              <a href="/banana"><img src="https://i.imgur.com/0vzGqh8.jpg" alt="" /></a>
          </div>
          <div className="post-content">
              <a href="/" className="post-title">
                  <h5>Production of Snail Feed</h5>
              </a>
              <p className="post-excerpt">We have years of experience producing snail feed for snail farm owners. We can produce snail feeds for you</p>
          </div>
      </div>
      </div>
  );
};

export default Cards;