const btnAcak = document.createElement('button');
const txt = document.createTextNode('Klik Disini');
btnAcak.appendChild(txt);
btnAcak.setAttribute('type', 'button')
btnAcak.className = 'btn';

const arr = document.querySelector('h2');
const head = document.querySelector('.container h1');

arr.after(btnAcak);

btnAcak.addEventListener('click', function() {
    const r = Math.floor(Math.random() * 255 + 1);
    const g = Math.floor(Math.random() * 255 + 1);
    const b = Math.floor(Math.random() * 255 + 1);

    document.body.style.backgroundColor = 'rgb('+ r +' '+ g +' '+ b +')';

    head.style.color = 'rgb('+ b +' '+ r +' '+ g +')';
})

// Container 2
const sRed = document.querySelector('input[name = red]');
const sGreen = document.querySelector('input[name = green]');
const sBlue = document.querySelector('input[name = blue]');

sRed.addEventListener('input', function() {
    const r = sRed.value;
    const g = sGreen.value;
    const b = sBlue.value;
    
    document.body.style.backgroundColor = 'rgb('+ r +' '+ g +' '+ b +')';
})

sGreen.addEventListener('input', function() {
    const r = sRed.value;
    const g = sGreen.value;
    const b = sBlue.value;
    
    document.body.style.backgroundColor = 'rgb('+ r +' '+ g +' '+ b +')';
})

sBlue.addEventListener('input', function() {
    const r = sRed.value;
    const g = sGreen.value;
    const b = sBlue.value;
    
    document.body.style.backgroundColor = 'rgb('+ r +' '+ g +' '+ b +')';
})

// Container 3
const box = document.getElementById('box');

box.addEventListener('mouseover', function(e) {
    const x = Math.floor(Math.random() * 255 + 1);
    const y = Math.floor(Math.random() * 255 + 1);

    
    document.body.style.backgroundColor = 'rgb('+ x +', '+ y +', 99)'
})