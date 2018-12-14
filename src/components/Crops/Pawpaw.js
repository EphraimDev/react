import React from 'react';

const Cards = (props) => {
  return (
      <div className="col-12 col-md-6 col-lg-4">
      <div className="single-blog-post mb-100">
          <div className="post-thumbnail mb-30">
              <a href="/"><img src="https://i.imgur.com/4LxhKiH.jpg" alt="" /></a>
          </div>
          <div className="post-content">
              <a href="single-post.html" className="post-title">
                  <h5>Pawpaw Farming</h5>
              </a>
              <p className="post-excerpt">Get your quality pawpaw seeds and fruits from Wizzy Agro. We can also help you start and maintain a pawpaw farm</p>
          </div>
      </div>
  </div>
  );
};

export default Cards;