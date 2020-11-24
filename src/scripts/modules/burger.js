const menu = document.querySelector('.menu');
const burger = document.querySelector('.burger');
const body =document.querySelector('body');

burger.addEventListener('click', () =>{
  menu.classList.toggle('active');
  body.classList.toggle('active');
  burger.classList.toggle('active');
});