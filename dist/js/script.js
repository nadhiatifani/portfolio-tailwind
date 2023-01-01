//navbar fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const backTop = document.querySelector('#back');

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        backTop.classList.remove('hidden');
        backTop.classList.add('flex');


    }else{
        header.classList.remove('navbar-fixed'); 
        backTop.classList.remove('flex');
        backTop.classList.add('hidden');
    }
}



// hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');


hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

//klik diluar hamburger
window.addEventListener('click', function (e) {
    if(e. target != hamburger && e.target != navMenu){
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
});

// dark mode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function() {
    if (darkToggle.checked){
        html.classList.add('dark');
    }else{
        html.classList.remove('dark');
    }
    
})