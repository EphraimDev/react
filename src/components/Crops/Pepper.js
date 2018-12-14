import React from 'react';

const CardTwo = (props) => {
  return (
      <div className="col-12 col-md-6 col-lg-4">
      <div className="single-blog-post mb-100">
          <div className="post-thumbnail mb-30">
              <a href="/"><img src="https://i.imgur.com/V3XW5o4.jpg" alt="Pepper Farming" /></a>
          </div>
          <div className="post-content">
              <a href="single-post.html" className="post-title">
                  <h5>Pepper Farming</h5>
              </a>
              <p className="post-excerpt">We can supply you as many baskets of pepper you want. We can also help you establish a pepper farm</p>
          </div>
      </div>
  </div>
  );
};

export default CardTwo;