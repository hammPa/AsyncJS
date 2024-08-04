function promise(isOffline){
    return new Promise((resolve, reject) => {
        if(isOffline) reject("Gagal mengambil data, kamu offline");
        const data = [100, 200, 300];
        resolve(data);
    });
}

// berikut adalah contoh dari chaining : 

promise(false)
    .then(result1 => {
        console.log("result 1 : ", result1);
        return promise(false);
    })
    .then(result2 => {
        console.log("result 2 : ", result2);
        return promise(false);
    })
    .then(result3 => {
        console.log("result 3 : ", result3);
    })
    .catch(err => console.log("Error : ", err.name));


// bagaimana ? lebih mudah dibaca bukan ? itulah keunggulan dari promise dibandingkan dengan callback
// karena dengan chaining kode kita bisa menjadi lebih rapi dan mudah di pahami

// tapi ada satu cara lagi agar kode asynchronus kita menjadi lebih lebih mudah lagi
// methode ini emmbuat kode asynchronus kita terlihat seperti kode synchronus
// ini akan dipelajari dimateri selanjutnya
