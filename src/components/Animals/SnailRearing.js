import React from 'react';

const Cards = (props) => {
  return (
      <div className="col-12 col-md-6 col-lg-4">
      <div className="single-blog-post mb-100">
          <div className="post-thumbnail mb-30">
              <a href="/banana"><img src="https://i.imgur.com/z4R8rk7.jpg" alt="" /></a>
          </div>
          <div className="post-content">
              <a href="/" className="post-title">
                  <h5>Rearing of Snails</h5>
              </a>
              <p className="post-excerpt">We can supply you as many snails as you need. We will also help you set up your snail farm</p>
          </div>
      </div>
      </div>
  );
};

export default Cards;