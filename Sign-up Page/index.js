
$('#menu-icon').click(function () { 
    $('#menu-icon').toggleClass('bx-x');
    $('.navlist').toggleClass('open');

});

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
})

sr.reveal('.hero-text', {delay: 200, origin:'top'})
sr.reveal('.form', {delay: 450, origin:'bottom'})
sr.reveal('.social-icons', {delay: 500, origin:'right'})
sr.reveal('.scroll-down', {delay: 200, origin:'left'})
sr.reveal('.logo', {delay: 200, origin:'right'})





