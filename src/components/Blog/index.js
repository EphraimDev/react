import React, { Component } from 'react';

class Blog extends Component {

  render() {
      return (
        <section className="alazea-blog-area section-padding-100-0">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="section-heading text-center">
                        <h2>LATEST NEWS</h2>
                        <p>The breaking news about planting crops, rearing animals
                            &amp; investment opportunities in agriculture</p>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center">

                <div className="col-12 col-md-6 col-lg-4">
                    <div className="single-blog-post mb-100">
                        <div className="post-thumbnail mb-30">
                            <a href="single-post.html"><img src="img/bg-img/6.jpg" alt="" /></a>
                        </div>
                        <div className="post-content">
                            <a href="single-post.html" className="post-title">
                                <h5>Why you should eat more of rabbit meat</h5>
                            </a>
                            <div className="post-meta">
                                <a href="/articles"><i className="fa fa-clock-o" aria-hidden="true"></i> 20 Jun 2018</a>
                                <a href="/articles"><i className="fa fa-user" aria-hidden="true"></i> Alan Jackson</a>
                            </div>
                            <p className="post-excerpt">Rabbit meat is one of the most fat free meat
                                available to humans. It is recommended by ...</p>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-4">
                    <div className="single-blog-post mb-100">
                        <div className="post-thumbnail mb-30">
                            <a href="single-post.html"><img src="img/bg-img/7.jpg" alt="" /></a>
                        </div>
                        <div className="post-content">
                            <a href="single-post.html" className="post-title">
                                <h5>How to secure your farm from invaders?</h5>
                            </a>
                            <div className="post-meta">
                                <a href="/articles"><i className="fa fa-clock-o" aria-hidden="true"></i> 20 Jun 2018</a>
                                <a href="/articles"><i className="fa fa-user" aria-hidden="true"></i> Christina Aguilera</a>
                            </div>
                            <p className="post-excerpt">A lot of people have complained about the large of crops
                                that gets stolen from their farm on daily, weekly or monthly basis...</p>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-4">
                    <div className="single-blog-post mb-100">
                        <div className="post-thumbnail mb-30">
                            <a href="single-post.html"><img src="img/bg-img/8.jpg" alt="" /></a>
                        </div>
                        <div className="post-content">
                            <a href="single-post.html" className="post-title">
                                <h5>Why you should invest in agriculture?</h5>
                            </a>
                            <div className="post-meta">
                                <a href="/articles"><i className="fa fa-clock-o" aria-hidden="true"></i> 19 Jun 2018</a>
                                <a href="/articles"><i className="fa fa-user" aria-hidden="true"></i> Mason Jenkins</a>
                            </div>
                            <p className="post-excerpt">So many data and statistics online point to the fact that
                                the agriculture sector is the most funded sector in Nigeria currently...</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    );
  }
}


export default Blog;