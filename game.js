// game.js - funciones de UI: carrusel, nav toggle y utilidades
document.addEventListener('DOMContentLoaded',()=>{
// nav toggle
const navToggle = document.getElementById('nav-toggle');
const nav = document.getElementById('nav');
navToggle && navToggle.addEventListener('click', ()=>{
nav.classList.toggle('open');
document.body.classList.toggle('nav-open');
});

// simple carousel
const carousels = document.querySelectorAll('.carousel');
carousels.forEach(initCarousel);

function initCarousel(root){
const slidesWrap = root.querySelector('.slides');
const slides = Array.from(root.querySelectorAll('.slide'));
const prev = root.querySelector('.prev');
const next = root.querySelector('.next');
const dotsWrap = root.querySelector('.dots');
if(!slides.length) return;

let idx = 0;
// build dots
slides.forEach((s,i)=>{
const b = document.createElement('button');
b.addEventListener('click',()=>{go(i)});
dotsWrap.appendChild(b);
});
const dots = Array.from(dotsWrap.children);

function update(){
slidesWrap.style.transform = `translateX(-${idx*100}%)`;
dots.forEach((d,i)=>d.classList.toggle('active', i===idx));
}

function go(i){ idx = (i+slides.length) % slides.length; update(); }
prev && prev.addEventListener('click', ()=> go(idx-1));
next && next.addEventListener('click', ()=> go(idx+1));

// autoplay
if(root.dataset.autoplay === 'true'){
setInterval(()=>{ go(idx+1); }, 4500);
}

update();
}

});
