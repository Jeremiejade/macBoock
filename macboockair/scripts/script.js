let maxScrollY = 1000;
let macboock;
let reflectBottom;
let reflectTop;
let figuresTop
let textAir;
let aAir;
let rAir;
let reflectATop;
let reflectRTop;
let reflectABottom;
let reflectRBottom;

document.addEventListener("DOMContentLoaded", ()=> {
    figuresTop = document.querySelectorAll('#reflect-top figure');
    aAir = document.getElementById('a-air');
    rAir = document.getElementById('r-air');
    reflectTop = document.getElementById('reflect-top');
    reflectBottom = document.getElementById('reflect-bottom');
    macboock = document.getElementById('macboock');
    textAir = document.getElementById('txt-air');
    reflectATop =  document.getElementById('reflect-a-top');
    reflectRTop =  document.getElementById('reflect-r-top');
    reflectABottom =  document.getElementById('reflect-a-bottom');
    reflectRBottom =  document.getElementById('reflect-r-bottom');
  
    setTimeout(() => {
        macboock.classList.add('effet-result');
        setTimeout(() => {
            textAir.classList.add('effet-result');
            reflectTop.classList.add('effet-result');
            reflectBottom.classList.add('effet-result');
            figuresTop.forEach((figure)=>{
                figure.classList.add('effet-result');
            }) 
        }, 500)
    }, 500)
  });
  
  document.addEventListener('scroll', ()=>{
    macboock.style.transition = 'all .1s ease';
    reflectBottom.style.transition = 'all .1s ease';
    reflectTop.style.transition = 'all .1s ease';
      if(window.scrollY>0 && window.scrollY<=maxScrollY){
        macboock.style.opacity = `${1 - (window.scrollY/maxScrollY)}`;
        macboock.style.transform = `scale(${1-(window.scrollY*0.5/maxScrollY)})`;
        aAir.style.left = `${18.75*window.scrollY/maxScrollY}%`;
        rAir.style.right = `${18.75*window.scrollY/maxScrollY}%`;
        // GESTION DES REFLETS
        reflectATop.style.left = `${18.75*window.scrollY/maxScrollY}%`;
        reflectRTop.style.right = `${18.75*window.scrollY/maxScrollY}%`;
        reflectTop.style.top = `${13*window.scrollY/maxScrollY}px`;
        reflectTop.style.opacity = `${1 - (window.scrollY/maxScrollY)}`;
        reflectABottom.style.left = `${18.75*window.scrollY/maxScrollY}%`;
        reflectRBottom.style.right = `${18.75*window.scrollY/maxScrollY}%`;
        reflectBottom.style.bottom = `${13*window.scrollY/maxScrollY}px`;
        reflectBottom.style.opacity = `${1 - (window.scrollY/maxScrollY)}`;
      } 
  });