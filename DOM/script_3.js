// DOM Manipulation 1

// innerHTML

// const judul = document.getElementById('judul');
// judul.innerHTML = '<em>Faishal Fawwaz</em>';

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = 'Hello world';

// const judul = document.querySelector('#judul');
// judul.style.color = 'lightblue';
// judul.style.backgroundColor = 'salmon';

// setAttribute();
const judul = document.getElementsByTagName('h1')[0];
judul.setAttribute('name', 'faishal'); // menambahkan attribute "nama" dengan nilai "faishal"

// classList --> untuk memanipulasi class pada elemen HTML
const p2 = document.querySelector('.p2');
p2.classList.add('newClass1'); // menambahkan class
p2.classList.add('newClass2'); // menambahkan class
p2.classList.remove('newClass2'); // menghapus class
p2.classList.toggle('newClass3'); // jika class belum ada maka ditambah, jika sudah ada maka dihapus