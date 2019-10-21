// // alert
// alert("Halo mari belajar Javascript");

// // prompt
// var nama = prompt("masukan nama"); // meminta input dan di return
// console.log(nama);

// // confirm
// var respon = confirm("Anda yakin akan menghapus?"); // meminta konfirmasi, me-return True atau False
// console.log(respon);


// ---- contoh program sederhana gabungan alert, prompt, dan confirm ----

alert("Halo selamat datang di Website ini, klik OK untuk melanjutkan.");
var respon = true;
var nama =  "nama";

while (respon === true) {
    nama = prompt("Silakan masukkan nama Anda:");
    alert("Selamat datang " + nama);
    respon = confirm("Apakah Anda akan memasukan nama lainnya?");
}