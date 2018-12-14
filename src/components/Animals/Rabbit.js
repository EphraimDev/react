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
                  <h5>Rearing of Rabbits</h5>
              </a>
              <p className="post-excerpt">Rabbit meat is one of the most recommended meats for adults. We will teach you how to start and manage a rabbit farm</p>
          </div>
      </div>
      </div>
  );
};

export default Cards;