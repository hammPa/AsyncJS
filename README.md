# AsyncJS
Kesimpulan Materi Belajar Async JS

1. Single-threaded and Synchronous Nature of JavaScript
JavaScript berjalan di thread tunggal, dan secara default, kode dijalankan secara sinkron, baris demi baris.
Jika ada operasi yang memerlukan waktu lama, seperti operasi I/O, ini dapat menyebabkan "lag" atau penundaan pada eksekusi kode berikutnya.

2. Asynchronous Programming
JavaScript menangani operasi asinkron dengan menggunakan berbagai mekanisme seperti setTimeout, Promises, dan async/await.

3. Callback Functions
Callback adalah fungsi yang diteruskan sebagai argumen ke fungsi lain dan dipanggil setelah operasi selesai.
Callback Hell atau Pyramid of Doom adalah masalah umum saat menggunakan callbacks secara berlapis, membuat kode sulit dibaca dan dipelihara.

4. Promises
Promises menawarkan cara yang lebih bersih untuk menangani operasi asinkron, dengan state seperti pending, resolve, dan reject.
Anda menggunakan .then() untuk menangani hasil yang berhasil dan .catch() untuk menangani kesalahan.
Chaining promises memungkinkan Anda untuk menulis kode asinkron yang lebih rapi dan terstruktur.

5. Async/Await
async/await adalah sintaks yang lebih baru di JavaScript untuk menangani kode asinkron dengan cara yang mirip dengan kode sinkron.
async mendeklarasikan fungsi yang mengembalikan Promise, dan await digunakan di dalam fungsi async untuk menunggu hasil Promise.
Ini membuat kode asinkron lebih mudah dibaca dan dikelola dibandingkan dengan callback dan chaining Promises.
