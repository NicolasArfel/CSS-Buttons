

const btn = document.querySelector('.button');
var value = btn.value;
btn.addEventListener('click', ()=> {
    document.body.classList.toggle('ok');
    btn.classList.toggle('ok');
}) 