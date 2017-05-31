$(document).ready(function () {

    $(".button-collapse").sideNav();
    $('.collapsible').collapsible();
    var isMobile = window.matchMedia("only screen and (max-width: 760px)");

    if (isMobile.matches) {
        window.sr = ScrollReveal();
        sr.reveal('h1', {
            origin: 'bottom',
            duration: 5000,
            distance: '50px',
            viewFactor: 0.2,
            scale: 1,
            opacity: 0
        });
        sr.reveal('img.img-portfolio', {
            origin: 'bottom',
            duration: 2000,
            distance: '50px',
            viewFactor: 0.25,
            scale: 1,
            opacity: 0
        });
        sr.reveal('.card', {
            origin: 'bottom',
            duration: 2000,
            distance: '50px',
            viewFactor: 0.01,
            scale: 1,
            opacity: 0
        });
        sr.reveal('h5', {
            origin: 'bottom',
            duration: 2000,
            distance: '50px',
            viewFactor: 0.25,
            scale: 1,
            opacity: 0
        });
        sr.reveal('h6', {
            origin: 'bottom',
            duration: 2000,
            distance: '50px',
            viewFactor: 0.25,
            scale: 1,
            opacity: 0
        });
        sr.reveal('.contact', {
            origin: 'bottom',
            duration: 2000,
            distance: '50px',
            viewFactor: 0.25,
            scale: 1,
            opacity: 0
        });
    }
    else {
        $('.scrollspy').scrollSpy();
        $('.tooltipped').tooltip({delay: 500});

        window.sr = ScrollReveal();
        sr.reveal('h1', {
            origin: 'bottom',
            duration: 5000,
            distance: '50px',
            viewFactor: 0.5,
            scale: 1,
            opacity: 0
        });
        sr.reveal('img.img-portfolio', {
            origin: 'bottom',
            duration: 2000,
            distance: '50px',
            viewFactor: 0.5,
            scale: 1,
            opacity: 0
        });
        sr.reveal('.card', {
            origin: 'bottom',
            duration: 2000,
            distance: '50px',
            viewFactor: 0.20,
            scale: 1,
            opacity: 0
        });
        sr.reveal('h5', {
            origin: 'bottom',
            duration: 4000,
            distance: '50px',
            viewFactor: 0.5,
            scale: 1,
            opacity: 0
        });
        sr.reveal('h6', {
            origin: 'bottom',
            duration: 5000,
            distance: '50px',
            viewFactor: 0.5,
            scale: 1,
            opacity: 0
        });
        sr.reveal('.contact', {
            origin: 'bottom',
            duration: 2000,
            distance: '50px',
            viewFactor: 0.5,
            scale: 1,
            opacity: 0
        });
    }
});