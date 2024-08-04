// js adalah bahasa yang single thread dan synchronus secarra default
// programnya di eksekusi baris perbaris
// jika ada program yang membutuhkan waktu lama maka kode akan terhenti dan menyebabkan semacam efek lag
// baru akan lanjut ke kode berikutnya

// untuk menanggulangi ini javascript menyediakan mode asynchronus
// terdapat beberapa cara untuk menangani asynchronus, tapi sebelumnya harus memahami dulu tentang asynchronus itu sendiri

// pertama, lihat kode biasa ini :
console.log("1");
console.log("2");
console.log("3");

// tentu saat dijalankan akan tampil 1 2 3


// tapi di javascript kita punya method asynchronus yaitu setTimeout, conth=ohnya :
console.log("1");
setTimeout(() => {
    console.log("2");
}, 1000);
console.log("3");


// coba tebak apa yang tampil ? 123 ? salah, ini akan tampil 132 karena 2 akan tampil setelah menunggu satu detik
// begini kira kira proses asynchronus berjalan, saat kode asynchronus berjalan, dia tidak mengganggu kode selanjutnya
// tapi akan berjalan di latar belakang

// disini kita akan menganggap kalau setTimeout itu sebagai lama nya delay data diambil dari internet
