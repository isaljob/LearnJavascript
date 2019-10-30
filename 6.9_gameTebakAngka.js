// input data yang ditangkap dari prompt
var angkaInput = parseInt(prompt('Tebak angka dari 1-10, Anda diberi kesempatan 3 kali, silakan masukkan angka:'));

// generate angka random untuk ditebak
var angkaRandom = Math.round(Math.random() * 10, 1);

// compare angka random dengan angka input, kesempatan menebak sebanyak 3 kali, dan tampilkan hasil
var kesempatan = 3;
var hasil = '';
while (kesempatan >= 1) {
    if (kesempatan < 3) {
        angkaInput = parseInt(prompt('Kesempatan Anda tersisa ' + kesempatan + 'x lagi, silakan masukkan angka:'));
    }
    if (angkaInput == angkaRandom) {
        alert('Tebakan Anda BENAR');
        kesempatan = 0;
    } else {
        if (angkaInput < angkaRandom) {
            alert('Tebakan Anda SALAH, angka Anda terlalu kecil');
        } else {
            alert('Tebakan Anda SALAH, angka Anda terlalu besar');
        }
    }
    kesempatan--;
}