const browserWindow = window;

//document.body.addEventListener('load', preloader);

const preloader = () => {
    const preload = document.getElementById('preloader');
    preload.classList.add('hide-preload');
}
console.log(browserWindow)
browserWindow.setTimeout(preloader, 3000);