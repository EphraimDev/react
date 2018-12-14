import React from 'react';

class Preload extends React.Component {

    componentDidMount() {
        const browserWindow = window;

//document.body.addEventListener('load', preloader);

const preloader = () => {
    const preload = document.getElementById('preloader');
    preload.classList.add('hide-preload');
}
browserWindow.setTimeout(preloader, 1000);
    }

    render() {
        return (
            
  <div id="preloader" className="preloader align-items-center justify-content-center">
  <div className="preloader-circle"></div>
  <div className="preloader-img">
    <img src="img/core-img/leaf.png" alt="" />
  </div>
</div>
        )
    }
}

export default Preload;