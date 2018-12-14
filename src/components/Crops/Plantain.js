import React from 'react';

const Cards = (props) => {
  return (
      <div className="col-12 col-md-6 col-lg-4">
      <div className="single-blog-post mb-100">
          <div className="post-thumbnail mb-30">
              <a href="/"><img src="https://i.imgur.com/IRT9h51.jpg" alt="Plantain" /></a>
          </div>
          <div className="post-content">
              <a href="single-post.html" className="post-title">
                  <h5>Plantain Plantaintion</h5>
              </a>
              <p className="post-excerpt">Get your plantain suckers and fruits from us. We can also assist with setting up your plantain farm</p>
          </div>
      </div>
  </div>
  );
};

export default Cards;