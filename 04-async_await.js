// materi ini adalh async await
// ini digunakan untuk kode asynchronus agar terlihat seperti kode synchronus
// contoh :

function promise(isOffline){
    return new Promise((resolve, reject) => {
        if(isOffline) reject("Gagal mengambil data, kamu offline");
        const data = ["himmel", "eisen", "frieren", "heiter"];
        resolve(data);
    });
}

// untuk memanggilnya harus menggunakan keyword await, dan didalam fungsi async
// contoh :
async function getData() {
    try {
        const data1 = await promise(false);
        console.log("Data 1 : ", data1);
        const data2 = await promise(false);
        console.log("Data 2 : ", data2);
        const data3 = await promise(false);
        console.log("Data 3 : ", data3);
        const data4 = await promise(true);
        console.log("Data 4 : ", data4);
    } catch (err){
        console.log(err);
    }
}

getData();
