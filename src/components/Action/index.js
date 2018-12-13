const Navbar = () => {
    // Variables
    var navContainer = document.querySelector('.classy-nav-container');
    var classy_nav = document.querySelector('.classynav ul');
    var classy_navli = document.querySelectorAll('.classynav > ul > li');
    var navbarToggler = document.querySelector('.classy-navbar-toggler');
    var closeIcon = document.querySelector('.classycloseIcon');
    var navToggler = document.querySelector('.navbarToggler');
    var classyMenu = document.querySelector('.classy-menu');
    //var var_window = document.querySelector(window);

    // default options
    var defaultOpt = {
        theme: 'light',
        breakpoint: 991,
        openCloseSpeed: 350,
        megaopenCloseSpeed: 700,
        alwaysHidden: false,
        openMobileMenu: 'left',
        dropdownRtl: false,
        stickyNav: false,
        stickyFooterNav: false
    };

        // light or dark theme
        if (defaultOpt.theme === 'light' || defaultOpt.theme === 'dark') {
            navContainer.classList.add(defaultOpt.theme);
        }

        // open mobile menu direction 'left' or 'right' side
        if (defaultOpt.openMobileMenu === 'left' || defaultOpt.openMobileMenu === 'right') {
            navContainer.classList.add(defaultOpt.openMobileMenu);
        }

        // dropdown rtl
        if (defaultOpt.dropdownRtl === true) {
            navContainer.classList.add('dropdown-rtl');
        }

        // navbar toggler
        navbarToggler.addEventListener('click', function () {
            navToggler.classList.toggle('active');
            classyMenu.classList.toggle('menu-on');
        });

        // close icon
        closeIcon.addEventListener('click', function () {
            classyMenu.classList.remove('menu-on');
            navToggler.classList.remove('active');
        });

        // add dropdown class in parent li class
        for (let i=0; i < classy_navli.length; i++) {
            if(classy_navli[i].querySelector('.dropdown')) {
                classy_navli[i].classList.add('cn-dropdown-item');
            }
        }

        // add megamenu class in parent li class
        for (let i=0; i < classy_navli.length; i++) {
            if(classy_navli[i].querySelector('.megamenu')) {
                classy_navli[i].classList.add('megamenu-item');
            }
        }

        // adds toggle button to li items that have children
        for (let i=0; i < classy_nav.length; i++) {
            if(classy_nav[i].querySelector('li')) {
                classy_navli[i].querySelector('li').classList.add('has-down').append('<span class="dd-trigger"></span>');
            }
        }

        // check browser width in real-time
        function breakpointCheck() {
            var windoWidth = window.innerWidth;
            console.log(windoWidth);
            console.log(navContainer)
            if (windoWidth <= defaultOpt.breakpoint) {
                navContainer.classList.remove('breakpoint-off');
                navContainer.classList.add('breakpoint-on');
            } else {
                navContainer.classList.remove('breakpoint-on');
                navContainer.classList.add('breakpoint-off');
            }
        }

        breakpointCheck();


            // expands the dropdown menu on each click
        for (let i=0; i < classy_nav.length; i++) {
            let findClassyNav = classy_nav[i].querySelector('li .dd-trigger')
            if(findClassyNav) {
                classy_nav[i].querySelector('li .dd-trigger').addEventListener('click', (e)=> {
                    e.preventDefault();
                    findClassyNav.querySelector('ul')
                })
                classy_navli[i].querySelector('li').classList.add('has-down').append('<span class="dd-trigger"></span>');
            }
        }
}

export default Navbar;