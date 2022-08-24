const navToggle = document.querySelector('.nav-toggle');

const navlinks = document.querySelectorAll('.nav__link');
const navlinks2 = document.querySelectorAll('.social-list__link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navlinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    });
});

const btn = document.getElementById('to-top');

btn.addEventListener('click',function(){
    
    window.scrollTo(0,0);
})



navlinks2.forEach(link2 => {
    link2.addEventListener('click', () => {
        document.body.classList.toggle('nav-open');
    });
});

document.onclick = e => {
    if (
        e.target.className !== 'nav__list' &&
        e.target.className !== 'nav-toggle' &&
        e.target.className !== 'hamburger' &&
        e.target.className !== 'nav__list2' 
    ) {
        document.body.classList.remove('nav-open');
        
    }
};


window.addEventListener('keydown', e =>{
    if(e.key === 'Escape'){
        document.body.classList.remove('nav-open');
    }

})

