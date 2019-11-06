// DOM Selection
// document.getElementById() --> mengembalikan elemen
const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = 'black';
judul.innerHTML = 'Huawei Services';

// document.getElementsByTagName() --> mengembalikan array
const p = document.getElementsByTagName('p');
// jika ingin mengubah attribut salah satu atau semua elemen pada HTMLcollection
// harus disertai index elemen array-nya
p[0].style.color = 'green';
// bisa juga menggunakan looping
for (let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'tomato';
}

// [0] --> artinya ambil elemen h1 index pertama dari array HTMLcollection
const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';

// document.getElementsByClassName() --> mengembalikan array
const p1 = document.getElementsByClassName('p1');
p1[0].style.color = 'white';



// document.querySelector() --> mengembalikan elemen



// document.querySelectorAll() --> mengembalikan NodeList