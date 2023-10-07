// Soal Nomor 1 (If, Else dan Nested If)
// Contoh 1: If dan Else
let angka = 65;

if (angka >= 70) {
  console.log("selamat kamu tidak perlu mengikuti remidial");
} else {
  console.log("Sayang sekali kamu harus ikut remidial");
}

// Contoh 1: Nested if
let nilai = 70;

if (nilai >= 95) {
  console.log("Selamat kamu mendapatkan Nilai A, pertahankan nilai ini ya!");
} else if (nilai >= 75) {
  console.log("Selamat kamu mendapat Nilai B, tingkstkan lagi ya");
} else if (nilai >= 50) {
  console.log("Kamu mendapat Nilai C, kamu harus belajar lebih giat lagi");
} else {
  console.log("Anda perlu belajar lebih keras lagi untuk mendapatkan nilai yang lebih baik");
}


// Soal Nomor 2 (Switch Case)
// Contoh 1:
var hari = 3;

switch (hari) {
  case 1:
    console.log("Senin");
    break;
  case 2:
    console.log("Selasa");
    break;
  case 3:
    console.log("Rabu");
    break;
  case 4:
    console.log("Kamis");
    break;
  case 5:
    console.log("Jumat");
    break;
  case 6:
    console.log("Sabtu");
    break;
  case 7:
    console.log("Minggu");
    break;  
  default:
    console.log("Hari tidak valid");
}

// Contoh 2: 
let operator = "*";
let hasil;

switch (operator) {
  case "*":
    hasil = 25 * 5;
    break;
  case "+":
    hasil = 25 + 5;
    break;
  default:
    hasil = "Hasil tidak valid";
}

console.log("Hasil operasi: " + hasil);


// Soal Nomor 3 (For Statement)
// Contoh 1:
let idol = ["AKB48", "JKT48", "MNL48"];

for (let i = 0; i < idol.length; i++) {
  console.log("Idol ke-" + (i + 1) + ": " + idol[i]);
}

// Contoh 2:
for (let i = 20; i > 0; i -= 5) {
  console.log("Iterasi ke-" + i);
}


// Soal Nomor 4 (while, do while)
// Contoh 1:
let n = 5;

while (n <= 10) {
  console.log("Iterasi while ke-" + n);
  n++;
}


// Soal Nomor 5 (Function)
// Contoh 1: 
function kali(a, b) {
  return a * b;
}

let hasilPerkalian = kali(10, 15);
console.log("Hasil perkalian: " + hasilPerkalian);

// Contoh 2: 
function sebutNama(nama) {
  console.log("Halo, " + nama + "! Apa kabar?");
}

sebutNama("Ikhmar Panji Nugraha");
sebutNama("Reva Fidela Adel Pantjoro");