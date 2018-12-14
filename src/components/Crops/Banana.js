import React from 'react';

const CardOne = (props) => {
  return (

<div className="col-12 col-md-6 col-lg-4">
<div className="single-blog-post mb-100">
    <div className="post-thumbnail mb-30">
        <a href="/banana"><img src="https://i.imgur.com/eQEUyNl.jpg" alt="" /></a>
    </div>
    <div className="post-content">
        <a href="/" className="post-title">
            <h5>Banana Plantaintion</h5>
        </a>
        <p className="post-excerpt">We can supply you bunches of banana, banana suckers or nurture your banana farm for you.</p>
    </div>
</div>
</div>
  );
};

export default CardOne;

