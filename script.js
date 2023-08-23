const button = document.getElementById ('button')
const title = document.querySelector('.title')

button.addEventListener('click',() =>{
title.classList.toggle('active')
})