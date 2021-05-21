window.onscroll = function() {
    hidefunction();
}

window.onload = function() {
    removeLoading();
}

function removeLoading() {
    $('.logo-tagline').removeClass('loading');
    setTimeout(() => {
        $('.loading-div').addClass('loaded');
        $('.loading-body').removeClass('loading-body');
    }, 2000)
}

var prevScrollpos = window.pageYOffset;
var nav = document.getElementsByTagName('button')[0];
var header = document.getElementById('header');
var headerheadings = document.getElementsByClassName('header-heading');

function hidefunction() {
    var currentScrollPos = window.pageYOffset;
    if (navbutton.className != "navbar-toggler navdisplay navhide") {
        if (prevScrollpos > currentScrollPos) {
            header.style.top = "0";
            header.style.transition = "0.5s";
            headerheadings[0].className = "one header-heading animate-heading";
            // header.style.position = "sticky";
        } else {
            header.style.top = "-100px";
            header.style.transition = "0.5s";
            headerheadings[0].className = "one header-heading";
            // header.style.position = "fixed";
        }
        prevScrollpos = currentScrollPos;
    }
}

document.addEventListener("scroll", () => {

    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        header.className = " headerscroll ";
    } else {
        header.className = "  ";
    }
});

var links = document.getElementsByClassName('butt');
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
        var active = document.getElementsByClassName('nav-a');
        active[0].className = active[0].className.replace(" nav-a", "");
        this.className += " nav-a";
    });
}

var navbutton = document.querySelector('.navdisplay');

navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('navhide');
});

var mq = window.matchMedia("(max-width: 800px)");
if (mq.matches) {
    function navhide() {
        navbutton.click();
    }
} else {
    // gsap.registerPlugin(ScrollTrigger);

    // gsap.to(".title", {
    //     x: "-110%",
    //     y: 0,
    //     scrollTrigger: {
    //         trigger: ".what-we-do",
    //         toggleActions: "play complete reverse none",
    //         start: "center center",
    //         endTrigger: ".what-we-do",
    //         end: "bottom top",
    //         scrub: true,
    //         markers: false,
    //         pin: true
    //     }
    // });

    // gsap.to(".what-we-do .oneRow", {
    //     x: "110%",
    //     y: 0,
    //     scrollTrigger: {
    //         trigger: ".what-we-do",
    //         toggleActions: "play complete reverse none",
    //         start: "top top+=200",
    //         endTrigger: ".what-we-do",
    //         end: "center top",
    //         scrub: true,
    //         markers: false,
    //         pin: true
    //     }
    // });

    // gsap.to(".what-we-do .twoRow", {
    //     x: "-110%",
    //     y: 0,
    //     scrollTrigger: {
    //         trigger: ".what-we-do",
    //         toggleActions: "play complete reverse none",
    //         start: "top top+=200",
    //         endTrigger: ".what-we-do",
    //         end: "center top",
    //         scrub: true,
    //         markers: false,
    //         pin: true
    //     }
    // });

    // gsap.to(".tagline", {
    //     y: "-800px",
    //     scrollTrigger: {
    //         trigger: ".what-we-do",
    //         toggleActions: "play complete reverse none",
    //         start: "bottom center+=200",
    //         endTrigger: ".what-we-do",
    //         end: "bottom center",
    //         scrub: true,
    //         markers: false,
    //         pin: true
    //     }
    // });

    // gsap.from(".title", {
    //     x: "70%",
    //     y: 0,
    //     scrollTrigger: {
    //         trigger: ".what-we-do",
    //         toggleActions: "play complete reverse none",
    //         start: "top top",
    //         end: "bottom top",
    //         scrub: 1,
    //         markers: false,
    //         pin: true
    //     }
    // });

    function navhide() {

    }
}

$('.navbar-nav>li>a').on('click', function() {
    $('.navbar-collapse').collapse('hide');
});