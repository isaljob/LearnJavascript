// percabangan dengan switch
// catatan: jika menggunakan prompt karakter yang diinput terbaca string walaupun kit memasukkan integer
var angka = parseInt(prompt('Silakan masukkan angka:'));

switch (angka) {
    case 1:
        alert('Anda memasukkan angka 1');
        break;
    case 2:
        alert('Anda memasukkan angka 2');
        break;
    case 3:
        alert("Anda memasukkan angka 3");
        break;
    default:
        alert('Anda memasukkan angka yang salah');
        break;
}