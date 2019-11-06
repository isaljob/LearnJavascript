// DOM Selection
// document.querySelector() --> mengembalikan elemen
const p4 = document.querySelector('#b p');
p4.style.color = 'green';
p4.style.fontSize = '30px';

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'tomato';

const p = document.querySelector('p');
p.innerHTML = 'paragraf ini diubah dengan javascript DOM querySelector';


// document.querySelectorAll() --> mengembalikan NodeList
const par = document.querySelectorAll('p');
for (let i = 0; i < par.length; i++) {
    par[i].style.backgroundColor = 'skyblue';
}