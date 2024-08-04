// promise punya callback, jadi kita tidak usah lagi membuat callback manual
// cara menggunakan promise adalah dengan menggunakannya sebagai return dari function, misal :

function promise(isOffline){
    return new Promise((resolve, reject) => {
        if(isOffline) reject("Gagal mengambil data, kamu offline");
        const data = [100, 200, 300];
        resolve(data);
    });
}

promise(false);

// kenapa tidak berjalan ? sebenarnya fungsi tersebut berjalan tapi datanya belum di ambil
// alasannya karena data dalam promise memiliki 3 state yaitu :
// 1. pending : saat dipanggil
// 2. reject : saat error
// 3. resolve : saat berhasil

// untuk mengammbil resolve kita menggunakan .then, dan reject dengan .catch
// contoh :

promise(false)
    .then(result => console.log(result))
    .catch(err => console.log("Error : ", err.name));
    
promise(true)
    .then(result => console.log(result))
    .catch(err => console.log("Error : ", err));
    
// misal kita mengambil banyak data, maka akan seperti ini :
console.log("\nDoom : \n\n");
promise(false)
    .then(result => {
        console.log(result);
        promise(false)
        .then(result => {
            console.log(result);
            promise(false)
                .then(result => {
                    console.log(result);
                })
                .catch(err => console.log("Error : ", err.name));
        })
        .catch(err => console.log("Error : ", err.name));
    })
    .catch(err => console.log("Error : ", err.name));


// katanya untuk menanggulangi callback, tapi masih mirip callback
// iya, bisa seperti itu, tetapi promise punya kelebihan yaitu fungsinya bisa dilakukan chaining
// chaining akan di jelaskna dimateri selanjutnya
