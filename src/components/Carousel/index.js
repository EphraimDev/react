import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
} from 'reactstrap';

const items = [
  {
    src: 'img/bg-img/51.jpg',
    altText: 'WizzyAgro',
  }
];

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
    
    
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  componentDidMount() {
    if(localStorage.getItem('x-access-token')) {
      document.getElementById('register-button').style.display = 'none'
    }
    }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <div className="carousel-img"><img src={item.src} alt={item.altText} className="bg-img" /></div>
          <div className="container ">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="hero-slides-content text-center">
                                <h2>We specialize in managing farms for optimum yield</h2>
                                <p>We have many years of experience managing farms with diverse crops and rearing of
                                    animals,
                                    with a long line of success. We will take your farm from scratch and turn it to
                                    money making machine. We can work with your budget. </p>
                                <div className="welcome-btn-group">
                                    <a id="register-button" href="/register" className="btn alazea-btn mr-30">GET STARTED</a>
                                    <a href="/contact" className="btn alazea-btn active">CONTACT US</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        {slides}
      </Carousel>
    );
  }
}


export default Slider;