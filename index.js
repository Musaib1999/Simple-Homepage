const sunButton = document.querySelector('.sun-btn');
const toggleButton = document.querySelector('.toggle-btn');
const moonButtonWhite = document.querySelector('.moon-btn');
const moonButtonBlack = document.querySelector('.moon-btn-blk');
const  logo = document.querySelector('.logo');
const logoDark = document.querySelector('.logo-drk');
const nav = document.querySelector('.nav') ;
const smallHeading = document.querySelector('.small-heading');
const mainHeading = document.querySelector('.main-heading');
const hamOpen = document.querySelector('.ham-open');
const hamClose = document.querySelector('.ham-close');
const hamNav = document.querySelector('.ham-nav');
toggleButton.onclick = ()=> {
    sunButton.style.backgroundColor = '#232323' ;
    moonButtonBlack.style.display = 'inline' ;
    moonButtonWhite.style.display = 'none';
    logo.style.display = 'none';
    logoDark.style.display = 'inline' ;
    document.body.style.backgroundColor = '#000' ;
    nav.style.color  ='#fff' ;
    smallHeading.style.color = '#fff' ;
    mainHeading.style.color = '#fff' ;
}
hamOpen.onclick = () =>  {
    hamNav.style.display = 'inline';
    hamOpen.style.display = 'none' ;
    hamClose.style.display = 'inline' ;
}
hamClose.onclick = () => {
    hamNav.style.display = 'none' ;
    hamOpen.style.display = 'inline' ;
    hamClose.style.display = 'none' ;
}