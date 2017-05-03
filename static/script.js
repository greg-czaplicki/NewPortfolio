$(document).ready(function () {
    $(".button-collapse").sideNav();
    $('.scrollspy').scrollSpy();

    window.sr = ScrollReveal();
    sr.reveal('.img-portfolio', {duration: 2000, viewFactor: 0.5, scale: 0.8});
    sr.reveal('.box', {duration: 2000, viewFactor: 0.5, scale: 0.8});
});