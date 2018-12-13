import React, { Component } from 'react';

class Investment extends Component {

  render() {
      return (
        <section className="alazea-portfolio-area section-padding-100-0">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="section-heading text-center">
                        <h2>Invest In Agriculture</h2>
                        <p>Are you interested in investing in agriculture? We can
                            advise you appropriately so you don't end up losing your money
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <div className="alazea-portfolio-filter">
                        <div className="portfolio-filter">
                            <button className="btn active" data-filter="*">Click to invest</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
  }
}


export default Investment;