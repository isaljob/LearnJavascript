// DOM Manipulation 2
// Manipulasi NODE
// document.createElement()
// document.createTextNode()
// node.appendChild()
// node.insertBefore()
// parentNode.removeChild()
// parentNode.replaceChild()

// menambah elemen baru ke akhir section
// buat elemen p baru
const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('Paragraf Baru');
// simpan tulisan ke dalam tag paragraf
pBaru.appendChild(teksPBaru);
// simpan pBaru di akhir Section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

// menyisipkan elemen baru diantara li dalam ul
// buat elemen li baru
const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('Item Baru');
liBaru.appendChild(teksLiBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)'); // ditambahkan pseudo code css, maksudnya li ke 2 dari ul

ul.insertBefore(liBaru, li2);

// menghapus element
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

// mengganti element
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('Judul Baru');

h2Baru.appendChild(teksH2Baru);
sectionB.replaceChild(h2Baru, p4);

pBaru.style.backgroundColor = 'lightblue';
h2Baru.style.backgroundColor = 'lightblue';
liBaru.style.backgroundColor = 'lightblue';