// untuk menangani asynchronus pertama, ada namanya callback
// callback adalah function yang di passing sebagai argument pada sebuah outer function
// jika belum mengetahui tentang ini, mohon dipelajari dulu materi tentang Higher Order Function

// misal kita ambil data dari internet, variabel yang ada misal adalah callback dan juga sinyal :
function getData(isOffline, callback){
    if(isOffline) console.log("Kamu offline");
    else {
        setTimeout(() => {
            console.log("Data : ");
            const data = ["satu.png", "dua.png", "tiga.png"];
            callback(data);
        }, 4000);
        console.log("Sedang mengambil data...");
        setTimeout(() => console.log("1"), 1000);
        setTimeout(() => console.log("2"), 2000);
        setTimeout(() => console.log("3"), 3000);
    }
}

function display(data){
    console.log(data);
}

getData(false, display);
getData(true, display);

// karena saat mengambil data dari internet berkemungkinan error, makanya pakai parameter is offline


// kelihatannya sudah bagus kan ? tapi bagaiimana jika data yang kita ambil banyak ?
// misal kita menggunakan callbacknya secara langsung tanpa membuatnya di luar, seperti :

function getDataPyramidDoom(isOffline, callback){
    if(isOffline) console.log("Kamu offline");
    else {
        setTimeout(() => {
            const data = ["doom_satu.png", "doom_dua.png", "doom_tiga.png"];
            callback(data);
        }, 4000);
        console.log("Sedang mengambil data...");
    }
}

getDataPyramidDoom(false, (data) => {
    console.log("Data_doom 1 : ");
    console.log(data);
    getDataPyramidDoom(false, (data) => {
        console.log("Data_doom 2 : ");
        console.log(data);
        getDataPyramidDoom(false, (data) => {
            console.log("Data_doom 3 : ");
            console.log(data);
            getDataPyramidDoom(false, (data) => {
                console.log("Data_doom 4 : ");
                console.log(data);
                getDataPyramidDoom(false, (data) => {
                    console.log("Data_doom 5 : ");
                    console.log(data);
                });        
            });
    
        });
        
    });
});



// ini dinamakan callback hell, sangat pusing melihat syntax seperti ini, karena itu ks ES8 memperkenalkan Promise
// untuk mencegah callback hell
