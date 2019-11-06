// THIS adalah suatu keyword special yang secara otomatis didefinisikan pada function
// this
// console.log(this);



// // review membuat object

// // cara 1 - function declaration
// function halo() {
//     console.log(this);
//     console.log('halo');
// }
// window.halo(); // atau
// this.halo();
// // this mengmbalikan object Global

// // cara 2 - object literal
// var obj = {};
// obj.halo = function () {
//     console.log(this);
//     console.log('halo');
// }
// obj.halo();
// // this mengembalikan object yang bersangkutan

// cara 3 - constructor
function Halo() {
    console.log(this);
    console.log('halo');
}
new Halo();
// this mengembalikan object yang baru dibuat