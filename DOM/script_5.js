// DOM Events

// // event handler
// const p3 = document.querySelector('.p3');

// function ubahWarna() {
//     p3.style.backgroundColor = 'lightblue';
// }
// p3.onclick = ubahWarna;

// // addEventListener()
// const p4 = document.querySelector('section#b p');
// p4.addEventListener('click', function () {
//     const ul = document.querySelector('section#b ul');
//     const liBaru = document.createElement('li');
//     const teksBaru = document.createTextNode('Item Baru');
//     liBaru.appendChild(teksBaru);
//     ul.appendChild(liBaru);
// });

// // jika menggunakan event handler, maka event sebelumnya ditimpa
// // event ke 1
const p3 = document.querySelector('.p3');
// p3.onclick = function () {
//     p3.style.backgroundColor = 'lightblue';
// }
// // event ke 2
// p3.onclick = function () {
//     p3.style.color = 'red';
// }
// // maka yang akan tampak perubahannya adalah event ke 2


// jika menggunakan addEventListener, masing2 event akan ditangani tanpa menimpa event sebelumnya
// event 1
p3.addEventListener('click', function () {
    p3.style.backgroundColor = 'lightblue';
})
// event 2
p3.addEventListener('click', function () {
    p3.style.color = 'red';
})
// maka yang akan keduanya akan tampak perubahannya