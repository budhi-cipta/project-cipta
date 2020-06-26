/* tipe data
//string - deretan karakter yang diapit oleh sepasang tanda kutip;
number - bilangan bulat, pecahan, dan lain-lain;
boolean - nilai benar dari sebuah pernyataan yang dituliskan sebagai true atau false;
null - sebuah nilai yang berarti kosong atau menunjuk pada nilai yang tidak ada;
undefined - berbeda dari null, undefined menandakan kondisi variabel yang belum diberi sebuah nilai. Jadi pernyataan "nilai variabel itu adalah undefined" sebenarnya kurang tepat, sebab variabelnya memang tidak mempunyai sebuah nilai;
symbol - sebuah nilai unik yang dihasilkan tiap kali kita memanggil fungsi Symbol(). Nilai unik ini memiliki beberapa kegunaan seperti memberi nomor identifikasi unik dan berperan sebagai nama properti unik sebuah objek;
object - sebuah kumpulan pasangan properti dan nilai. Seperti objek dalam kehidupan sehari-hari saja. Misalnya objek Apel memiliki properti warna dengan nilai merah.
//variabel tipe data js ada string,integer,boolean
// variabel bisa di tulis var atau let (bisa dirubah), const (tidak bisa dirubah)
// string selalu dengan tanda petik
//number ada interger (1) dan float (1,5) atau number tanpa petik,
// boelan nilai true atau false
    let nama = 'quinn';
    const ibuKandung = 'evina';
    const umur = 30;
    const sudahMenikah = true;
    let jumlahAnak = ;
*/
/*
//console.log adalah salah satu syntax JavaScript untuk menampilkan nilai suatu variabel atau hasil operasi di tab console.
let nama = 'budhi';
const istri = 'evina'
let umurSkarang = 40
const namaAnak = 'quinn'
console.log(nama); //output budhi
console.log(istri); //  evina
console.log(umurSkarang); // 40
console.log(namaAnak);// quinn
*/
/*
//operator aritmatika :digunakan di operasi matematika yang melibatkan data dengan tipe number.
//+	Penjumlahan, contohnya 
let bilangan1 = 10;
let bilangan2 = 3;
console.log(bilangan1 + bilangan2);

// -	Pengurangan contohnya 
let a = 8;
let b = 3;
console.log(a - b);

// *	Perkalian
// /	Pembagian
// **	Eksponen (pangkat)
// %	Modulus (menghasilkan sisa hasil pembagian) contohnya
const q = 10;
const w = 3;
console.log(q % w);

// ++	Increment (menambah 1) contohny
let t = 10;
t++;
console.log(t);

// --	Decrement (mengurangi 1)

*/
//Assignment operator digunakan untuk memberikan nilai pada variabel.
//Assignment	Operator	Contoh Penggunaan	Setara Dengan
//    =		                x = y	                x = y
//    =	            +	    x += y                  x = x + y
//    =	            -       x -= y	                x = x - y
//    =	            *	    x *= y	                x = x * y
//    =             /	    x /= y	                x = x / y
//    =	            %	    x %= y	                x = x % y
//    =             **  	x **= y	                x = x ** y

let nama = 'budhi';
const istri = 'evina'
let umurSkarang = 40
const namaAnak = 'quinn'
//penambahan assignment 
umurSkarang += 10;
console.log( umurSkarang ) //output 50

//String operator digunakan untuk menggabungkan dua atau lebih data string. Operasi ini biasa dikenal dengan sebutan string concatenation.

//Ada 2 macam string operator, yaitu:

// +
// +=
let namaDepan = 'budhi';
let namaBelakang = 'arta';
console.log( namaDepan + ' ' + namaBelakang);

let kata = 'halo';
kata += ' dunia';
console.log(kata);

//JavaScript, jika kita menggabungkan data string dengan data number, maka hasil akhirnya juga akan menjadi string.
let anak = 'quinn skarang umur ';
let umur = 8 ;
console.log( anak + umur);

//Operator perbandingan digunakan untuk membandingkan dua data atau nilai.
/*
Operator	Deskripsi
==	        sama dengan (cek nilai)
===	        sama dengan (cek nilai dan tipe data)
!=	        tidak sama dengan (cek nilai)
!==	        tidak sama dengan (cek nilai dan tipe data)
>	        lebih dari
<	        kurang dari
>=	        lebih dari atau sama dengan
<=	        kurang dari atau sama dengan
? :	        ternary operator
Contoh penggunaan di JavaScript:
*/ 
let bilangan = 10;
console.log (bilangan == 10); //output true
console.log ( bilangan == 8); // output false
console.log (bilangan == '10'); // output true ( == cuma mengecek nilai saja 10, tp kalo ==== nilai false karena tipe datanya string)

// ? :	   syntaxnya
// variabel = (kondisi true) ? nilai1 : nilai2;
// Artinya apabila kondisi true, maka variabel akan diberi nilai1
// Apabila kondisi false, maka variabel akan diberi nilai2

let makanan = "daging";

let jenisHewan = makanan === "daging"  ? "karnivora" : "herbivora";

console.log(jenisHewan);

//Operator logika digunakan untuk menentukan logika antara dua kondisi atau nilai.

//  Operator	Deskripsi
//  &&	        AND (Dan)
//  ||	        OR (Atau)
//  !	        NOT (Bukan)
/*
Operator && (AND)
kondisi1 && kondisi2
Operator ini hanya akan menghasilkan output true apabila kedua operand-nya bernilai true (kondisi1 dan kondisi2 bernilai true).

Operator || (OR)
kondisi1 || kondisi2
Operator ini akan menghasilkan output true apabila salah satu dari operand-nya bernilai true (kondisi1 bernilai true atau kondisi2 bernilai true).

Operator ! (NOT)
!kondisi
Operator ini akan bernilai true apabila operand-nya bernilai false (negation). Dan sebaliknya, operator akan mengembalikan false apabila operand-nya bernilai true.

Tabel Perbandingan
Jika kedua kondisi bertipe boolean, maka hasil dari masing-masing operator logika akan seperti ini:

Operator	Kondisi 1	Kondisi 2	Hasil
    &&	        true	true	    true
    &&	        true	false	    false
    &&	        false	true	    false
    &&	        false	false	    false
    ||	        true	true	    true
    ||	        true	false	    true
    ||	        false	true	    true
    ||	        false	false	    false
    !	        true	 -	        false
    !	        false	 -	        true
Contoh penggunaan:
*/
let bilangan1 = 6;
let bilangan2 = 4;
console.log(bilangan1===6 && bilangan2===4);
console.log(bilangan1===6 && bilangan2>4);
console.log(bilangan1>6 && bilangan2===4);
console.log(bilangan1<4 && bilangan2>6);
console.log(bilangan1===6 || bilangan2===4);
console.log(bilangan1===6 || bilangan2<4);
console.log(bilangan1<6 || bilangan2===4);
console.log(bilangan1>6 || bilangan2>4);
console.log(!true);
console.log(!false);

/*Function
Apa yang dimaksud dengan fungsi (function) di JavaScript?
Di konsep JavaScript, fungsi bisa diilustrasikan sebagai berikut:
Seandainya kita mempunyai sebuah mesin pembuat kue. Kita bisa memasukkan bahan baku seperti tepung terigu, telur, gula, air, dan bahan lainnya ke dalam mesin tersebut, kemudian mesin itu akan mengolah bahan-bahan tersebut yang akhirnya akan menghasilkan kue.
Nah, dari gambaran tersebut, mesin pembuat kue adalah fungsi (function). Tepung terigu, telur, gula, air, dan bahan-bahan lain untuk membuat kue adalah input (parameter) dari sebuah fungsi. Kemudian kue yang dihasilkan dari proses pengolahan mesin kue adalah hasil (return value).

//Fungsi dapat berdiri sendiri atau disimpan di dalam sebuah variabel.

Cara mendeklarasikannya seperti ini:
// Fungsi yang berdiri sendiri
function namaFungsi(){
  // Kode yang akan dijalankan
}

// Fungsi yang disimpan di dalam variabel
let namaVariabelFungsi = function(){
  // Kode yang akan dijalankan
}

*/
//namaFungsi();
function lapar(){
    return 'makan nasi';
}
console.log(lapar());

//namaVariabelFungsi();
let haus = function(){
    return 'minum air'
}
console.log(haus());

/* parameter & argument
Hati-hati, istilah parameter dan argument suka dianggap sama, jadi pemakaian kedua kata ini suka terbalik-balik.

Parameter adalah syarat input yang harus dimasukkan ke dalam suatu fungsi dan dideklarasikan bersama dengan deklarasi fungsi. Sementara argument adalah nilai yang dimasukan ke dalam suatu fungsi, sesuai dengan persyaratan parameter, di mana argument dituliskan bersamaan dengan pemanggilan fungsi.

Bisa digambarkan seperti ini:
function operasiPerkalian(angka1, angka2){
  return angka1 * angka2;
}
console.log(operasiPerkalian(2, 6)) // Output: 12
Penjelasan kode di atas:

angka1 & angka2 adalah parameter. Pada contoh di atas, parameter harus bertipe number, agar bisa diolah oleh fungsi, yaitu perkalian kedua parameter.

2 & 6 adalah argument. Sesuai kan dengan syarat parameter? Yap, mereka bertipe number.
*/ // s adalah sisi karena sisi x sisi mempunyai nama sama jadi ditulis cuma (s) 

function luasPersegi (s){
    return s*s;
  }
  console.log(luasPersegi(3,4));

/*
//Function Hoisting
Fungsi JavaScript
Ada hal keren yang dimiliki oleh fungsi JavaScript, yaitu kita bisa memanggilnya terlebih dahulu, padahal deklarasi fungsi ada di baris setelahnya.

"Apa kerennya? Perasaan biasa saja" mungkin kalian akan berpikir seperti itu.

Contoh:console.log(operasiPerkalian(5, 5)); // Output: 25

function operasiPerkalian(angka1, angka2) {
  return angka1 * angka2;
}
Secara logika, harusnya kita mendeklarasikan fungsi terlebih dahulu, setelah itu barulah kita menggunakan fungsi tersebut (pada contoh di atas, fungsi operasiPerkalian dipanggil di dalam console.log padahal deklarasinya ditulis setelah console.log). Nah, keistimewaan inilah yang disebut dengan Function Hoisting.

Tapi, ini tidak berlaku jika fungsi tersebut dideklarasi di dalam sebuah variabel.

Contoh:

console.log(operasiPerkalian(5, 5)); // Output: Uncaught ReferenceError: Cannot access 'operasiPerkalian' before initialization

const operasiPerkalian = function(angka1, angka2) {
  return angka1 * angka2;
};

//function lingkup global dan lokal
Lingkup Global
Lingkup global adalah ketika sebuah variabel bisa diakses dari mana saja, baik di dalam maupun di luar dari suatu fungsi atau blok (grup) kode.

Contoh:
*/
let namaOlahRaga = 'basketball';
function namaAtlet(){
    let atlet = 'messi';
    const noAtlet = 10;
    console.log(namaOlahRaga);
    if (namaOlahRaga === 'basketball'){
        atlet = 'kobe brant '
        const noAtlet = 24;
        console.log(namaOlahRaga);
    }
    return atlet;
}
console.log(namaAtlet());
console.log(namaOlahRaga);

//object
//Cara mendeklarasikan objek dengan object literal adalah sebagai berikut:
let buah = {nama: 'mangga', warna: 'kuning', harga: 5000};
// bisa juga seperti ini:
let peserta = {
    nama: 'budhi',
    umur: 30,
    pekerjaan:'programer',
};
//Mengakses Properti Objek
/*
Objek JavaScript
Jika kita ingin menggunakan nilai yang terdapat di dalam properti suatu objek, maka kita harus mengakses properti objek tersebut.
Caranya bagaimana?
Ada 2 cara yaitu:
// Dot Notation
let objek = {
   namaProperti: nilaiProperti
};

// Dot Notation
objek.namaProperti // Output: nilaiProperti
//contoh seperti object diatas:
*/
let pesertaq = {
    nama: 'budhi',
    umur: 30,
    pekerjaan:'programer',
};
console.log(pesertaq.nama);
console.log(pesertaq.umur);
console.log(pesertaq.pekerjaan);

//braket notation 
//let objek = {
 //   namaProperti: nilaiProperti
 //};
 
 // Bracket Notation
 //objek["namaProperti"] // Output: nilaiProperti
 
 // bisa juga menggunakan single quote
 //objek['namaProperti'] // Output: nilaiProperti

 let peserta1 = {
     nama : 'evina',
     umur : 20,
     pekerjaan : 'developer',
 };
 console.log(peserta1['nama']);
 console.log(peserta1["umur"]);
 //Perlu kita perhatikan yang berikut ini ketika kita mau mengakses properti objek secara dynamic (dinamis).
 //Yang dimaksud dengan mengakses properti objek secara dinamis adalah ketika kita menggunakan nama dari suatu variabel sebagai nama properti saat mengakses properti objek tersebut.
 //let namaVariabel = namaProperti;

//let objek = {
//  namaProperti: nilaiProperti
//};

// kita bisa mengakses properti objek secara dinamis
// dengan cara berikut
//objek[namaVariabel] // Output: nilaiProperti
//contoh :

const peserta2 = {
    nama : "quinn",
    umur : 8,
    gawe :"artpainting"
};
const hobby = "gawe";
console.log(peserta2[hobby])


const smartphone = {
    kamera: "10MP",
    memori: "128GB"
};

const tes = "kamera";
console.log(smartphone[tes])

//menambah properti baru pada object
//Cara menambah properti baru ke dalam suatu objek mirip dengan cara mendeklarasikannya.

//Dot Notation
//let objek = { namaProperti1: nilaiProperti1 };

//objek.namaProperti2 = nilaiProperti2;

//console.log(objek); // output: { namaProperti1: nilaiProperti1, namaProperti2: nilaiProperti2 }
let peserta3 = {
    nama: 'budhi',
    umur: 30,
    pekerjaan:'programer',
};
peserta3.hoby = 'melali';
console.log(peserta3);

//Bracket Notation
//let objek = { namaProperti1: nilaiProperti1 };
//objek['namaProperti2'] = nilaiProperti2;
//console.log(objek); // output: { namaProperti1: nilaiProperti1, namaProperti2: nilaiProperti2 }
let peserta4 = {
    nama: 'budhi',
    umur: 30,
    pekerjaan:'programer',
};
peserta4['hoby'] = 'surfing';
console.log(peserta4);

let manusia = {
    kepala: true,
    badan: true,
    tangan: true
  };
  manusia.ekor = false;
  console.log(manusia);

//Menghapus Properti Objek
//Objek JavaScript
//Gunakan kata kunci delete jika ingin menghapus salah satu //properti pada objek.
//Contoh:
let nama5 = {
    anak : 'quinn',
    umur : 9,
    hobby : 'mengambar'
};
delete nama5.umur;
delete nama5['hobby'];
console.log(nama5)

//menambah function di dalam object
//Fungsi yang terhubung pada sebuah objek kita sebut dengan istilah method.
//Jadi, objek sebenarnya bisa menampung fungsi di dalam propertinya, seperti ini contohnya:

//let objek = {
//    namaProperti1: nilaiProperti1,
//    namaProperti2: function() {...} // nilai dari namaProperti2 adalah method dari variabel objek
// };
let kalkulator = {
    namaOperasi : 'penjumlahan',
    jumlah : function (angka1,angka2){
        return angka1 + angka2
    }
};

/*
"Lalu bagaimana cara mengakses method yang berada di dalam objek? Apakah sama dengan cara mengakses properti objek biasa?"

Hampir mirip, hanya tinggal tambahkan tanda kurung () dan isi parameter di dalam tanda kurung tersebut jika method tersebut membutuhkan parameter.

Contoh:

let kalkulator = {
  namaOperasi: 'penjumlahan',
  jumlah: function(angka1, angka2) {
    return angka1 + angka2;
  }
};
console.log(kalkulator.jumlah(2, 3)); // Output: 5
*/
let kalkulator1 = {
    namaOperasi1 : 'penjumlahan',
    jumlah : function (angka1,angka2){
        return angka1 + angka2
    }
};
console.log(kalkulator1.jumlah(8,5))
/*
//Menghindari konflik penamaan fungsi
Misalkan kita mempunyai dua objek, kucing dan anjing. Lalu kita ingin membuat dua buah fungsi suara yang mengembalikan suara dari kedua hewan tersebut. Tentu kita tidak bisa melakukannya seperti di bawah ini. Sebab saat kita mendefinisikan fungsi yang namanya sama dengan fungsi sebelumnya, fungsi baru itu akan menimpa fungsi yang lama.
*/
const kucing = {
  // isi properti dan nilai objek kucing
};

function suara() { return "Meong"; }

const anjing = {
  // isi properti dan nilai objek anjing
};

//fungsi ini akan menimpa fungsi suara yang pertama
function suara() { return "Gukguk"; }

console.log(suara()); // Output: Gukguk
/*
Dengan membuat fungsi suara sebagai method dari masing-masing objek, kita tetap dapat menghindari konflik tersebut. Sebab fungsi suara sekarang akan terhubung dengan objek yang berbeda. Jadi pada saat pemanggilannya, kita juga mengawalinya dengan nama objek di mana method tersebut didefinisikan.
*/
const kucing1 = {
  // isi properti dan nilai objek kucing,
  suara: function() { return "Meong"; }
};

const anjing1 = {
  // isi properti dan nilai objek anjing
  suara: function() { return "Gukguk"; }
};

//panggil method suara dalam masing-masing objek
console.log(kucing1.suara()); //Output: Meong
console.log(anjing1.suara()); // Output: Gukguk

//Definisi fungsi yang terpusat
const user = {
    nama :'budhi',
    umur : 30,
};
//secara manual kita akan menulis
function fungsiA() {
    //isi dari fungsiA
    console.log(`Nama saya ${user.nama}. Saya berumur ${user.umur} tahun`);
  }
  function fungsiB() {
    //isi dari fungsiB
    console.log(`Nama saya ${user.nama}. Saya berumur ${user.umur} tahun`);
  }
  
  function fungsiC() {
    //isi dari fungsiC
    console.log(`Nama saya ${user.nama}. Saya berumur ${user.umur} tahun`);
  }
  /*
  Tapi misalkan sekarang kita ingin menambahkan properti baru makananFavorit: "Pizza" ke objek user. Tentu kita juga ingin mengubah kalimat perkenalannya menjadi "Nama saya Stefan. Saya berumur 21 tahun. Saya suka Pizza". Tapi karena kita membuat kalimatnya secara manual pada fungsiA, fungsiB, dan fungsiC, kita harus mengubah secara manual juga di ketiga fungsi tersebut.

"Repot banget dong kalau begitu"

Nah, dengan membuat sebuah method di objek user yang mengembalikan kalimat perkenalan tadi, kita cukup memanggil method tersebut di tempat kita ingin menggunakan kalimat tersebut saja.
  
 ini masih salah
 const user1 = {
     nama : 'budhi',
     umur : 30,
     makananFavorit : 'pizza'
     perkenalanDiri : function () = { 
        return `Nama saya ${this.nama}. Saya berumur ${this.umur}. Saya suka ${this.makananFavorit}`;
     }
  };
  
 function fungsiAA(){
     console.log(user.memperkenalkanDiri());
 }
 */
/*
 // mengenal array
 Array
Array adalah tipe variabel yang dapat menampung berbagai jenis data dengan tipe yang bermacam-macam, dengan jumlah yang tidak terbatas. Array di JavaScript memiliki ciri khas yaitu data yang ditampung dibungkus dengan sepasang kurung siku [ ].

let namaArray = [ nilai1, nilai2, nilai3, ...];
Di bawah ini adalah perbandingan jika kita menyimpan data di variabel satu-per-satu dengan menyimpan banyak data di satu variabel array:
*/
let murid1 = 'quinn',
    murid2 = 'evina',
    murid3 = 'budhi'
//dengan aray kita bisa membuatnya seperti ini
let murid = ['quinn','evina','budhi'];

//deklarasi aray 
let muridku = ['quinn','evina','budhi'];
let buahq = [ 'mangga','pisang','nangka'];
let harga = [2000,'3000',4000];
//di array bisa diisi dengan beda tipe data
//penulisan array mengunakan tanda kurung 
let muridkw = new Array('quinn','evina','budhi');
let buahw = new Array( 'mangga','pisang','nangka');
let hargaq = new Array(2000,'3000',4000);

// nomor index di aray selalu dimulai dengan 0
// array length : untuk mengetahui jumlah nilai yang ada
let muridkq = ['quinn','evina','budhi'];
let buahe = [ 'mangga','pisang','nangka','jeruk'];
let hargaw = [2000,'3000',4000];
let sayur = [];
console.log(muridkq.length);
console.log(buahe.length);
console.log(hargaw.length);
console.log(sayur.length)

// mengakses data/element dalam array sintax yg digunakan. namaArray[nomorIndex]
let buahz = [ 'mangga','pisang','nangka','jeruk'];
console.log(buahz[3]);
console.log(buahz[2]);
// jika jumlah data kita banyak maka caranya bisa dengan. nomor index element terakhir array = jumlah data array - 1
console.log(buahz[buahz.length - 1]);
console.log(buahz)

// mengubah data element di array
//Data/element dari suatu array bisa kita ubah dengan syntax seperti ini:
//namaArray[nomorIndex] = nilaiBaru;
//Contohnya:
let buahg = [ 'mangga','pisang','nangka','jeruk'];
buahg [2] = 'anggur';
console.log(buahg)
/*
Apakah kalian masih ingat di beberapa topik sebelumnya, kita sempat membahas tentang penggunaan let dan const di mana variabel yang dideklarasikan dengan menggunakan const tidak bisa diubah datanya terkecuali variabel itu adalah tipe objek atau array.

Jadi untuk array JavaScript, pengubahan nilai element seperti berikut tidak akan memunculkan error walaupun variabel array-nya dideklarasikan dengan const:

const namaArray = [nilaiElement1, nilaiElement2];

// mengubah data di element pertama
namaArray[0] = nilaiElementBaru;

// menambah element baru ke array
namaArray[2] = nilaiElement3;

//Mengubah Element Array Menjadi String dengan toString()
Method toString() akan menggabungkan semua element array dan mengubahnya ke tipe data string dengan penghubung tanda koma , di antara element array.

Contoh:
*/
let game = ['cooked',1,2,3,true];
console.log(game.toString());
/*
Menggabungkan Element Array dengan join()
Method join() menggabungkan semua element array, kemudian mengubahnya menjadi string. Konsepnya hampir sama dengan method toString(), namun perbedaannya kita bisa menambahkan karakter tertentu sebagai penghubung antara element array.

array.join(penghubung);
Penjelasan syntax di atas:

Parameter penghubung adalah optional parameter, yaitu parameter yang boleh diisi, boleh juga dikosongkan. penghubung menentukan karakter apa yang mau ditambahkan sebagai penghubung antara element array. Secara default, apabila dikosongkan, array.join() akan menggunakan tanda koma , sebagai penghubung element array.
Contoh:
*/
let computer = ['mac','window',1,5,true,'halo'];
console.log(computer.join('#'));
// Menambah dan Mengeluarkan (Menghapus) Element Array dengan pop(), push(), shift(), dan unshift()
//pop(), mengeluarkan element terakhir dari sebuah array.
let computer1 = ['mac','window',1,5,true,'halo'];
computer1.pop();
console.log(computer1)
//push(), menambah element di bagian akhir dari sebuah array.
computer1.push('selamat pagi');
console.log(computer1);
//shift(), mengeluarkan element pertama dari sebuah array.
computer1.shift()
console.log(computer1);
//unshift(), menambah element di bagian awal array.
computer1.unshift('mahal');
console.log(computer1);
//Menambah, Menghapus, dan Mengganti Element Array dengan splice()
/*
Digunakan untuk menambah, menghapus, dan mengganti element di sebuah array.

array.splice(index, jumlah, item1, ..., itemX);
Penjelasan syntax di atas:

Parameter index adalah required parameter, yaitu parameter yang wajib diisi ketika memanggil array method splice. index menjelaskan posisi di mana element harus ditambah atau dihapus.
Parameter jumlah adalah optional parameter, yaitu parameter yang boleh diisi, boleh juga dikosongkan. jumlah menentukan jumlah element yang mau dihapus di array.
Parameter item1, ..., itemX adalah optional parameter. item1, ..., itemX merupakan element baru yang mau ditambah ke dalam array.
Contoh:
*/
let computer2 = ['mac','window',1,5,true,'halo'];
computer2.splice(3,0,'mahal','bagus','murah');
console.log(computer2);
computer2.splice(0,4,'daftar');
console.log(computer2);

//Menggabungkan Lebih Dari Satu Array dengan concat()
//Method concat() digunakan untuk menggabungkan 2 array atau lebih.
//array1.concat(array2, array3, ..., arrayX)
let buah0 = ['mangga','jeruk','grape'];
let sayur0 = ['wortel','kol','tomat'];
let daging =['sapi','babi','udang'];
let makanan0 = buah0.concat(sayur0,daging);
console.log(makanan0);
/*
Mengambil Element Array dengan slice()
Method slice() digunakan untuk mengambil beberapa element pada array, dan menaruhnya pada array baru.

array.slice(mulai, akhir)
Penjelasan syntax di atas:

Parameter mulai adalah optional parameter. mulai menentukan permulaan index dari element yang akan diambil.
Parameter akhir adalah optional parameter. akhir menentukan batas akhir index element yang akan diambil (tanpa diikutsertakan). Apabila dikosongkan, maka semua element dimulai dari index mulai sampai ke element terakhir dari array akan diambil.
Contoh:
*/
let buahEnak = ['durian','nangka','wani','avocado','delima','pisang'];
buahBerlemak = buahEnak.slice(0,3);
buahSehat = buahEnak.slice(3);
console.log(buahBerlemak);
console.log(buahSehat);

/*
//Mengurutkan Array dengan sort()
Method sort() akan mengurutkan element di suatu array, bisa dari nilai yang terkecil hingga yang terbesar, bisa juga sebaliknya. Secara default, sort() mengurutkan element array dari nilai string yang terkecil hingga yang terbesar.

array.sort(fungsiPembanding)
*/
let mobil = ['honda','mazda','toyota','suzuki'];
mobil.sort();
console.log(mobil);
//ini hasil urutann sudah benar

let urutanAngka = [90,7,25,8,2.5,1.7,2,3,1];
urutanAngka.sort();
console.log(urutanAngka);
//karena ada angka (,)untuk memperbaiki hal ini kita bisa gunakan compare function
let urutDariTerkecil = function(a, b) {
  return a - b;
};
let urutDariTerbesar = function(a, b) {
  return b - a;
};
console.log(urutanAngka.sort(urutDariTerkecil));
console.log(urutanAngka.sort(urutDariTerbesar));
/*
Memutar urutan Array dengan reverse()
Method reverse() akan mengurutkan element pada array dari index yang terbesar hingga index yang terkecil, bukan nilai yang terbesar hingga yang terkecil.

array.reverse()
Contoh:
*/
let mobil1 = ['honda','mazda','toyota','suzuki'];
mobil1.reverse();
console.log(mobil1);
//Lalu, bagaimana caranya untuk mengurutkan nilai element pada array dari yang terbesar hingga yang terkecil? Caranya adalah menggunakan kombinasi dari method sort() dan reverse().
mobil1.sort().reverse();
console.log(mobil1);
//Array buah akan diurutkan terlebih dahulu element-elementnya dari nilai yang terkecil, hingga yang terbesar dengan menggunakan sort(). ["suzuki", "toyota", "mazda", "honda"]
//Kemudian, elementnya akan dibalik urutannya berdasarkan index dari yang terbesar hingga yang terkecil dengan menggunakan reverse().["toyota", "suzuki", "mazda", "honda"]

//Mengenal Objek Math
//Objek Math
//Sekarang, kita akan mempelajari objek yang sudah merupakan "bawaan" dari javascript (dinamakan built-in object), salah satunya adalah Objek Math (Math Object).
//Sama seperti objek pada umumnya, objek Math memiliki properti, nilai, dan method.
//Objek Math hanya bisa digunakan untuk tipe data number, dan tidak bisa digunakan untuk tipe data BigInt.
//let result = Math.sqrt(9); // Output: 3

//let result = Math.sqrt(BigInt(9)); // Output: TypeError: Cannot convert a BigInt value to a number
//Keuntungan memakai objek Math adalah kita tidak perlu lagi mikir dalam menulis kode ketika membuat operasi Matematika.

//Ada 8 properti objek Math, yaitu:
/*
Math.E               // Bilangan Euler
Math.LN2             // Log 2 
Math.LN10            // Log 10
Math.LOG2E           // Log E di Basis 2
Math.LOG10E          // Log E di Basis 10
Math.PI              // Pi
Math.SQRT1_2         // Akar Kuadrat dari 0.5
Math.SQRT2           // Akar Kuadrat dari 2
Biasanya, properti-properti ini digunakan untuk operasi matematika yang lebih kompleks.

Namun, saat ini saya cuma ingin memperkenalkan satu properti objek Math saja, yaitu Math.PI. Kalian tahu π? Jika kalian ingat pelajaran SD dalam menghitung luas lingkaran, maka rumusnya akan seperti ini:

Luas Lingkaran = π r2

Luas Lingkaran = 3.14 x (jari-jari lingkaran2)

Jadi, π hanyalah nilai konstan yang bernilai 3.14 (sebenarnya sih 3.14 sekian sekian sekian.....banyak banget deh angkanya).

Nah, di JavaScript, apabila kita lupa nilai konstan dari π itu sebenarnya berapa, kita bisa menggunakan properti Math.PI ini sebagai penggantinya.

Contoh:

let r = 10;
let luasLingkaran = Math.PI * (r ** 2);

console.log(luasLingkaran); // Output: 314.1592653589793

*///object match
//Math.abs(x)
//Digunakan untuk mengubah angka x yang bernilai negatif menjadi positif.

let bilangan01 = -70.5;
console.log(Math.abs(bilangan));
//Math.pow(x, y)
//Digunakan untuk menghitung hasil dari x pangkat y.
let bilangan02 = 6;
let pangkat = 2;
console.log(Math.pow(bilangan, pangkat)); 

//Math.sqrt(x)
//Digunakan untuk menghitung akar kuadrat dari x.
let bilangan03 = 64;
console.log(Math.sqrt(bilangan));

//Math.cbrt(x)
//Digunakan untuk menghitung akar pangkat 3 dari x.
let bilangan04 = 8;
console.log(Math.cbrt(bilangan));

//Math.round(x)
//Digunakan untuk membulatkan angka desimal x menjadi bilangan bulat. Pembulatan ke atas bila angka di belakang koma lebih besar atau sama dengan 5, dan pembulatan ke bawah jika angka di belakang koma kurang dari 5.

let bilangan11 = 5.7;
let bilangan21 = 5.4;
console.log(Math.round(bilangan1)); // Output: 6
console.log(Math.round(bilangan2)); // Output: 5

//Math.floor(x)
//Digunakan untuk membulatkan angka desimal x ke bawah.
let bilangan10 = 5.7;
let bilangan20 = 5.4;
console.log(Math.floor(bilangan1)); // Output: 5
console.log(Math.round(bilangan2)); // Output: 5

//Math.ceil(x)
//Digunakan untuk membulatkan angka desimal x ke atas.
let bilangan19 = 5.7;
let bilangan29 = 5.4;
console.log(Math.ceil(bilangan1)); // Output: 6
console.log(Math.ceil(bilangan2)); // Output: 6

//Math.random()
//Digunakan untuk menampilkan angka secara acak antara 0 hingga 1 (0 termasuk. 1 tidak).

console.log(Math.random()); // Output: 0.14087695004117018
console.log(Math.random()); // Output: 0.17923176966306498

//Math.max(x, y, z, ..., n)
//Digunakan untuk mencari angka terbesar di antara parameter x, y, z, ..., n.

console.log(Math.max(1, 4, 6, 7)); // Output: 7

//Math.min(x, y, z, ..., n)
//Digunakan untuk mencari angka terkecil di antara parameter x, y, z, ..., n.

console.log(Math.min(1, 4, 6, 7)); // Output: 1

/*
//Apa itu JavaScript Conditional?
Di JavaScript ada dua cara menulis perintah conditional, yaitu:
Menggunakan if, else if dan else.
Menggunakan switch dan case.
if
Digunakan apabila hanya ada 1 kondisi dan 1 keputusan yang dijalankan.
if (kondisi1) {
  // masukkan kode yang akan dijalankan di sini apabila kondisi1 tercapai
}
if...else
Digunakan apabila ada 1 kondisi dan 2 keputusan yang dijalankan.

if (kondisi1) {
  // masukkan kode yang akan dijalankan di sini apabila kondisi1 tercapai
} else {
  // masukkan kode yang akan dijalankan di sini apabila kondisi1 TIDAK tercapai
}
if...else if...else
Digunakan apabila ada beberapa kondisi dan beberapa keputusan yang dijalankan.

if (kondisi1) {
  // masukkan kode yang akan dijalankan di sini apabila kondisi1 tercapai
} else if (kondisi2) {
  // masukkan kode yang akan dijalankan di sini apabila kondisi1 tidak tercapai dan kondisi2 tercapai
} else if (kondisi3) {
  // masukkan kode yang akan dijalankan di sini apabila kondisi1 dan kondisi2 tidak tercapai, dan kondisi3 tercapai
} ... {
} else {
  // masukkan kode yang akan dijalankan di sini apabila semua kondisi di atas TIDAK tercapai
}
Coba bayangkan sebuah aplikasi yang bisa menampilkan kalimat:

"SANGAT MEMUASKAN" jika nilai di atas 80
"MEMUASKAN" jika nilai berada di antara 60 hingga 80, dan
"JANGAN MENYERAH, COBA LAGI!" jika nilai di bawah 60
Ternyata, Andi mendapatkan nilai 95. Maka, Andi seharusnya mendapatkan kalimat "SANGAT MEMUASKAN" bukan?

Bagaimana cara membuat aplikasinya? Yaitu seperti berikut ini:
*/
let nilaiAndi = 95;
if (nilaiAndi>80){
    console.log('sangat memuaskan');
}else if (nilaiAndi>=60 && nilaiAndi<=80){
    console.log('memuaskan');
    }else {
        console.log('jangan menyerah')
    }
// Menggunakan switch dan case
//    JavaScript Conditional
//Jika kita memiliki banyak pilihan kondisi, menggunakan perintah if, else if dan else akan kurang efisien karena kode yang ditulis akan menjadi sangat panjang sekali.
/*
Ada cara yang lebih efisien yaitu dengan menggunakan perintah switch dan case.

Syntaxnya seperti ini:

switch (pernyataan) {
  case kondisi1:
    // keputusan yang dijalankan ketika kondisi1 tercapai
    break;
  case kondisi2:
    // keputusan yang dijalankan ketika kondisi2 tercapai
    break;
  case kondisi3:
    // keputusan yang dijalankan ketika kondisi3 tercapai
    break;
  ...
  default:
    // keputusan yang dijalankan ketika semua kondisi tidak tercapai
}
*/
//Seandainya kita disuruh menulis sebuah aplikasi yang akan menampilkan jenis seragam apa yang harus dikenakan murid sesuai dengan harinya. Contohnya seperti di bawah ini:
let seragamSekolah;
let hari = 'senin' 
switch (hari) {
    case "senin":
      seragamSekolah = "kemeja putih bawahan merah";
      break;
    case "selasa":
      seragamSekolah = "kemeja hijau bawahan hitam";
      break;
    case "rabu":
      seragamSekolah = "kemeja putih bawahan putih";
      break;
    case "kamis":
      seragamSekolah = "kemeja batik merah bawahan hitam";
      break;
    case "jumat":
      seragamSekolah = "baju pramuka";
      break;
    default:
      seragamSekolah = "baju bebas";
  }
  
  console.log(seragamSekolah); // Output: kemeja putih bawahan merah
  /*Penjelasan kode di atas:

switch digunakan untuk mendeklarasikan pernyataan yang menjadi patokan kondisi. Pada contoh di atas, kita akan melihat variabel hari digunakan sebagai patokan kondisi untuk merubah nilai dari variabel seragamSekolah sesuai dengan nilai hari-nya (kondisi).
case digunakan untuk menulis masing-masing kondisi dari hasil pernyataan yang akan diperiksa. Pada contoh di atas, jika variabel hari bernilai "senin", maka variabel seragamSekolah bernilai "kemeja putih bawahan merah", dan seterusnya.
break digunakan untuk menghentikan program berjalan ketika sudah menemukan kondisi yang tercapai. Pada contoh di atas, program akan berhenti pada case bernilai "senin".
default adalah keputusan yang akan dijalankan apabila hasil pernyataan di switch tidak ada yang sesuai dengan masing-masing kondisi di case (tidak ada kondisi yang tercapai). Fungsinya sama seperti else di topik sebelumnya . Pada contoh di atas, apabila nilai variabelhari yang dimasukkan misalnya "sabtu", maka seragamSekolah akan bernilai "baju bebas".
Apabila kita mempunyai dua atau lebih kondisi yang berbeda, tetapi keputusan yang akan dijalankan sama, kita bisa menggabungkan beberapa perintah case tanpa menggunakan break dan hanya menggunakan break di kondisi terakhir.
*/

//Misalnya pada contoh kita di atas, murid diharuskan mengenakan seragam "kemeja putih bawahan merah" untuk hari "senin" sampai "kamis", maka kita bisa mengubah kode di atas menjadi:

let seragamSekolah1;
let hari1 = "senin";

switch (hari1) {
  case "senin":
  case "selasa":
  case "rabu":
  case "kamis":
    seragamSekolah1 = "kemeja putih bawahan merah";
    break;
  case "jumat":
    seragamSekolah1 = "baju pramuka";
    break;
  default:
    seragamSekolah1 = "baju bebas";
}
console.log(seragamSekolah1); // Output: kemeja putih bawahan merah
/*
Apa itu Loop?
JavaScript Loop
Loop dalam Bahasa Indonesia artinya putaran. Dalam JavaScript, maksudnya adalah perulangan. Jadi, loop adalah sekumpulan kode yang akan dijalankan berulang kali sampai batas yang ditentukan.

Ada 5 jenis loop di JavaScript, yaitu:
for
for...in
for...of
while
do...while
Semua loop di atas pada dasarnya sama saja (terkecuali untuk for..in dan for...of ada sedikit perbedaan), jadi terserah kalian saja ingin memakai yang mana. Hanya saja, yang sering digunakan pada umumnya adalah for dan while loop.
Syntax yang digunakan ketika menggunakan for loop adalah sebagai berikut:
for (pernyataan1; pernyataan2; pernyataan3) {
  // kode yang akan dijalankan ketika pernyataan2 benar (true)
}
Penjelasan kode di atas:
pernyataan1 digunakan untuk menentukan nilai awal berjalannya loop.
pernyataan2 digunakan untuk mendefinisikan kondisi berjalannya sebuah loop. Apabila nilai kondisinya false, maka loop akan berakhir.
pernyataan3 digunakan untuk menambah atau mengurangi nilai awal pada pernyataan1 setiap kali loop dijalankan.
Contoh Penggunaan
Kita akan menampilkan angka 1 sampai dengan 10 di console. Caranya adalah:
*/
for(nilai = 0; nilai <= 10; nilai++)
console.log(nilai);
let angka = [1, 46, 75, 12, 89, 54, 101];
let genap = [];
for (angka = 2; angka%2; angka++){
    genap.push(angka)
}
/*
Berbeda dengan for loop dari topik sebelumnya, for...in digunakan untuk mengulang setiap properti dari sebuah objek.
Syntax yang digunakan ketika menggunakan for...in loop adalah sebagai berikut:
for (propertiObjek in namaObjek) {
  // kode yang akan dijalankan
}
Penjelasan kode di atas:
for (propertiObjek in namaObjek) berarti untuk setiap propertiObjek di namaObjek, maka jalankan kode di dalam {}. Variabel propertiObjek bisa diganti dengan nama variabel apapun.*/
//Seandainya kita memiliki sebuah objek mobil, dan kita mau menampilkan masing-masing nama properti dan nilainya di console. Caranya adalah:
let mobilq = {
    warna : 'merah',
    tahun : 2004,
    merk : 'mazda',
};
for(x in mobilq){
    console.log(x,':',mobilq[x]);
}
/*
For/Of Loop
JavaScript Loop
Berbeda dengan for loop dari topik sebelumnya, for...of digunakan untuk mengulang setiap element dari objek yang bisa diulang (contoh array atau string).

Syntax yang digunakan ketika menggunakan for...of loop adalah sebagai berikut:

for (element of namaVariabel) {
  // kode yang akan dijalankan
}
Penjelasan kode di atas:

for (element of namaVariabel) berarti untuk setiap element di namaVariabel, maka jalankan kode di dalam {}. Variabel element bisa diganti dengan nama variabel apapun.
*/
/*
const buku = ["Game of Thrones: A Song of Ice and Fire",  
   "Harry Potter and The Philosopher's Stone", 
   "Lord of The Rings: The Fellowship of The Ring"
];

for (x of buku) {
  console.log(x);
}

/*
Output:
Game of Thrones: A Song of Ice and Fire
Harry Potter and The Philosopher's Stone
Lord of The Rings: The Fellowship of The Ring
*/
let angkar = [1, 46, 75, 12, 89, 54, 101];
let ganjilr = [];
//Push angka-angka ganjil dari variabel angka ke dalam variabel ganjil dengan menggunakan for...of loop
//Variabel ganjil harus berisi [1, 75, 89, 101]
//for(let i of angkar){ 
//    if(i%2==1){ 
//      ganjilr.push(i) 
//      }
//   }

 /*  JavaScript Loop
Syntax dalam menggunakan while loop adalah sebagai berikut:

while (kondisi) {
  // kode yang akan dijalankan ketika kondisi benar (true)
}
Penjelasan kode di atas:

while (kondisi) berarti ketika kondisi yang ditentukan benar (true), maka jalankan semua kode yang ada di dalam {}.

let i = 1;

while (i <= 10) {
  console.log(i);
  i++;
}
*/
let angkaqq = [];
while(x >= 5){
  console.log(x);
  x--;
}

//do while
//do {
  // kode yang akan dijalankan ketika kondisi benar (true)
//} while (kondisi);

let q = 1;
do {
  console.log(q);
  q++;
}while(q<=10);

//mengenal dom
/*
Dengan adanya DOM ini, JavaScript diberi akses untuk membuat HTML menjadi dinamis, seperti:

Mengubah element HTML pada halaman website.
Mengubah attribute HTML pada halaman website.
Mengubah CSS style pada halaman website.
Menambah dan/atau menghapus element maupun attribute HTML.
Menambah HTML event (contoh: efek klik pada mouse, hover pada mouse, dan lain-lain) pada halaman website.
Berinteraksi dengan semua HTML event di website.
Di HTML DOM, semua element HTML dari sebuah website dianggap sebagai objek. Dan sama seperti objek JavaScript pada umumnya, objek element HTML di HTML DOM juga mempunyai properti dan method atau yang lebih dikenal dengan istilah DOM Property dan DOM Method.
//mengakses dom dengan get element by id
Jadi untuk mengubah nilai properti dari element HTML, kita bisa menggunakan DOM Property dan untuk memanggil fungsi dari suatu element HTML, kita bisa menggunakan DOM Method.
Misalnya kita mempunyai element HTML sebagai berikut:

<input id="umur" type="text" value="20" />
Untuk mengakses value dari <input> di atas, maka bisa dilakukan dengan cara sebagai berikut:
*/
let umurzz = document.getElementById('umurzz').value;

console.log(umurzz); // Output: 20
/*Penjelasan kode di atas:

document adalah akar dari semua objek di sebuah website. Jadi untuk mengakses element HTML apapun di satu website, selalu dimulai dengan objek document ini.
getElementById merupakan method dari objek document.
value merupakan properti dari objek element HTML yang dikembalikan dari method getElementById yaitu <input>.
Karena ada banyak sekali jenis properti dan method di JavaScript HTML DOM, di topik selanjutnya kita akan membahas beberapa contoh penggunaan properti dan method yang seringkali digunakan.
// get element by tag name
*/
let smuaTagH1 = document.getElementsByTagName ('h1')
console.log(smuaTagH1);
console.log(smuaTagH1[0]);
console.log(smuaTagH1[1]);
//kita bisa mengakses element by class jg
let smuaClasHeader = document.getElementsByClassName ('header');
console.log(smuaClasHeader);
console.log(smuaClasHeader[0]);
console.log(smuaClasHeader[1]);

//querySelectorAll(cssSelector)
//adalah mengakses element css

let allClasHeader = document.querySelectorAll('.header');
console.log(allClasHeader);
console.log(allClasHeader[1]);

let idbebek = document.querySelectorAll('h1#title');
console.log(idbebek);

/* DOM Event
Syntax-nya adalah sebagai berikut:

onclick = kodeJavaScript
Contoh Penggunaan
Seandainya kita mempunyai satu <button> yang akan menampilkan popup window dengan pesan "Hello, World!", maka caranya kira-kira seperti ini:
*/
let demo = document.getElementById('click');
demo.onclick = showMessage;
function showMessage(){
  alert('anda akan dihubungi oleh staf kami ');
}
/*

Mengubah Element HTML
JavaScript HTML DOM
Kita bisa menggunakan DOM Property innerHTML untuk mengambil/mengubah isi HTML dari sebuah element.

Contoh:
*/
let perbaikan = document.getElementById ( 'mengubah');
perbaikan.innerHTML = 'hallo dunia';
console.log(perbaikan.innerHTML);

//element.attribute
//Nah, mungkin kalian sudah bisa menebak kira-kira apa itu element.attribute. element.attribute merupakan DOM Property yang bisa digunakan untuk mengambil/mengubah/menambah nilai attribute dari sebuah element.
//Contoh:

let anjingInfek = document.getElementById ("anjingCorona");
console.log(anjingInfek.src);
console.log(anjing.alt);
anjingInfek.src = "https://www.law-justice.co/img_post/1/2019/2019-09-09/7d514d7e56a9a792ddf964dc75b3155d_1.jpg";
anjingInfek.alt = "kucing";
anjingInfek.width = 400;
console.log(kucing.src);
console.log(kucing.alt);
console.log(kucing.width)

//element.setAttribute(attribute, nilai)
//setAttribute(attribute, nilai) fungsinya hampir sama dengan element.attribute = nilai hanya saja setAttribute itu termasuk DOM Method sedangkan element.attribute itu DOM Property.

let catImage = document.getElementById("cat-image");

catImage.setAttribute("src", "https://go.aws/2vT5mXU");
catImage.setAttribute("alt", "Fish");
catImage.setAttribute("width", "400");

console.log(catImage.src); // Output: https://go.aws/2vT5mXU
console.log(catImage.alt); // Output: Fish
console.log(catImage.width); // Output: 400

//element.style.property
//Kegunaan dari element.style.property adalah untuk mengambil/mengubah/menambah CSS dari element HTML.
let dmo = document.getElementById("coba");

console.log(dmo.style.color); // Output: blue

dmo.style.color = "red";
dmo.style.fontSize = "18px";

console.log(dmo.style.color); // Output: red
console.log(dmo.style.fontSize); // Output: 18px
/* ES6
Template Literal
Template literal adalah cara untuk menanamkan ekspresi JavaScript ke dalam sebuah string. Template literal dibungkus dengan sepasang tanda `(backtick), dan ekspresi JavaScript-nya dibungkus dengan tanda ${ }.

Syntax-nya seperti berikut ini:

let namaVariabel = `${ekspresiJavaScript}`;

*"Ekspresi? Menanamkan? Pelan-pelan dong Mbak"*

Ekspresi dalam JavaScript adalah sesuatu yang jika dievaluasi akan menghasilkan sebuah nilai tunggal. Bisa itu variabel, operasi matematika, atau operasi logika.

*"Jadi di tengah-tengah string nanti bisa ada variabel atau operasi matematika gitu?"*

Iya, Benar sekali!

Coba kita ambil contoh pertama ya.
*/
let namam = 'budhi';
let umurm = 40;
let kalimat = `namanya ${namam}. umurnya ${ umurm} tahun`;
console.log(kalimat);

let umurt = 30;
let revisi = `umur saya taun depan adalah ${umurt + 1}`;
console.log(revisi);
let revisi2 = `tahun depan saya  ${umurt + 1 >= 31 ? 'bisa' : 'tidak bisa'} ikut ke jepang`;
console.log(revisi2);

//Jangankan variabel dan operasi matematika, fungsi pun bisa. Perhatikan contoh berikut:

// fungsi yang mengembalikan sebuah string
function myName (){
  return 'budhi arta';
}
let perkenalan = `nama saya ${myName()}`;
console.log(perkenalan);

//Menggunakan Arrow Function
//Masih ingat cara mendeklarasikan fungsi?

//Untuk mengingat kembali, mari lihat contoh di bawah ini:
/*
function ucapkanSalam() {
  return "Selamat Pagi";
};

Di Javascript ES6, ada cara baru dalam penulisan sebuah fungsi, yaitu menggunakan arrow function. Kelebihan menggunakan arrow function adalah penulisan fungsi menjadi lebih singkat dan lebih mudah dibaca.

Syntax menggunakan arrow function adalah sebagai berikut:

// Arrow function
const namaFungsi = (parameter1, ..., parameterX) => {
  // kode yang ingin dijalankan dalam fungsi
};

// atau bila fungsi tersebut tidak memiliki parameter sama sekali
const namaFungsiTanpaParameter = () => {
  // kode yang ingin dijalankan dalam fungsi
};
*/
// fungsi dengan parameter
const operasiPenjumlahan = (bilangan1, bilangan2) => {
  const hasil =  bilangan1 + bilangan2;
  return hasil;
};

console.log(operasiPenjumlahan(3, 4)); // Output: 7

// fungsi yang tidak memiliki parameter
const namaJenisAnjing = () => {
  const anjing = ["Pug", "Bulldog", "Poodle"];
  return anjing[Math.floor(Math.random()*(anjing.length))];
}

console.log(namaJenisAnjing()); // Output: Pug (hasil random)
/*
Implicit Return Value
Yang dimaksud dengan implicit return value adalah suatu kondisi di mana sebuah fungsi langsung mengembalikan nilai tanpa ada deklarasi variabel atau operasi lainnya di dalamnya.

Misalnya kita mempunyai satu fungsi seperti berikut ini:
*/
function greeting(nama) {
   return `Hi ${nama}`;
}

console.log(greeting('Einstein')); // Output: Hi Einstein
//Kode di atas bisa disingkat dengan menggunakan arrow function sebagai berikut:

const greeting1 = (nama) => `Hi ${nama}`;

console.log(greeting1('Einstein')); // Output: Hi Einstein
//Untuk fungsi yang tidak memiliki parameter, syntax arrow function untuk implicit return value adalah sebagai berikut:

//const namaFungsi = () => nilaiReturn;
//Jadi kita tidak lagi perlu capek-capek menulis kurung kurawal {} dan kata return lagi.
/*
Default Parameter
JavaScript ES6
Kalian masih ingat tidak apa itu parameter dan argument? Biar tidak lupa, mari kita coba bahas sedikit yuk.

Parameter adalah syarat input yang harus dimasukkan ke dalam suatu fungsi dan dideklarasikan bersama dengan deklarasi fungsi.

Sementara argument adalah nilai yang dimasukkan ke dalam suatu fungsi, sesuai dengan persyaratan parameter, di mana argument dituliskan bersamaan dengan pemanggilan fungsi.

Contoh
*/
function panggang(bahan, durasi, suhu) {
  return `Panggang ${bahan} selama ${durasi} pada suhu ${suhu}`;
}

panggang("Roti", "10 menit", "100 C"); // Output: Panggang Roti selama 10 menit pada suhu 100 C
/*
Default Parameter
Default parameter adalah nilai pengganti yang akan diberikan ke sebuah fungsi apabila fungsi tersebut tidak diberikan argument yang cocok dengan parameter fungsi tersebut (atau argument yang diberikan bernilai undefined).

Syntax-nya adalah seperti ini:

function namaFungsi(parameter1 = defaultParameter1) {
  // kode yang akan dijalankan di dalam fungsi
}
Jadi kalau misalnya fungsi tersebut tidak menerima argument yang seharusnya menjadi nilai parameter1, nilai default yang akan diambil oleh parameter1 adalah defaultParameter1.


Kita ambil contoh fungsi yang pertama tadi.
function panggang(bahan = "makanannya", durasi = "yang diperlukan", suhu = "yang cocok") {
  return `Panggang ${bahan} selama ${durasi} pada suhu ${suhu}`;
}
Sehingga kalau kita memanggil fungsi tersebut tanpa argument yang lengkap, hasilnya akan seperti ini:

panggang("Risoles", "5 menit"); // Output: Panggang Risoles selama 5 menit pada suhu yang cocok

panggang(); // Output: Panggang makanannya selama yang diperlukan pada su

*/
/*
Rest Parameter & Spread Operator
JavaScript ES6
Rest parameter dan spread operator itu bisa kita bilang kembar: mirip tapi tidak sama. Sebab keduanya sama-sama menggunakan tanda ... (elipsis atau tiga buah titik) sebagai bagian dari syntaxnya, namun fungsinya sangat berbeda.

Penasaran tidak kegunaannya? Mari kita bahas satu per-satu.

Rest Parameter
Rest Parameter adalah parameter yang mewakili nilai dari semua (atau sisa) argument yang diberikan kepada suatu fungsi.

Contoh:

const foo = (...params) => {
  console.log(params);
};

foo("A", "B", "C"); // Output: ["A", "B", "C"]
Rest Parameter Sebagai Parameter Terakhir
Rest parameter juga bisa digunakan saat ada parameter lain pada fungsi yang sama. Dalam kasus ini, rest parameter akan mewakili sisa argument yang belum "dipetakan" ke parameter-parameter sebelumnya.

Contoh:

const bar = (param1, param2, ...params) => {
  console.log("Argument pertama ", param1);
  console.log("Argument pertama ", param2);
  console.log("Sisa argument ", params);
}

bar("A", "B", "C", "D", "E");
// Output:
// Argument pertama  A
// Argument pertama  B
// Sisa argument ["C", "D", "E"]
Pada kode di atas,

param1 mewakili argument pertama, yaitu "A",
param2 mewakili argument pertama, yaitu "B",
params mewakili sisa argument, yaitu "C", "D", dan "E".
Rest as Last Paramater

Paham ya, kalau rest parameter ditaruh sebagai parameter terakhir, ia akan mengambil sisa dari argument yang kita berikan pada fungsi tersebut.

Pada dasarnya, hanya bisa ada satu rest parameter dalam sebuah fungsi. Dan dia harus ditempatkan di paling belakang. Kalau tidak, akan muncul error saat kita mendeklarasikan fungsinya.

Contohnya:

// Tempatkan rest parameter di tengah-tengah parameter lainnya
const buzz = (param1, ...params, param2) => {
  console.log(param1);
  console.log(params);
  console.log(param2);
}

// Output: SyntaxError: Rest parameter must be last formal parameter
Spread Operator
Berlawanan dengan rest parameter, sifat dari spread operator justru memisahkan/memecahkan. Ia memecah sebuah array menjadi element-elementnya (atau dalam kasus objek, memecah objek menjadi pasangan properti-nilai yang membentuknya).

Spread Operator Dengan Array
let arrayBilangan = [1, 2, 3, 4, 5];

// tanpa spread operator
console.log(arrayBilangan); // Output: [1, 2, 3, 4, 5]

// kalau pakai spread operator
console.log(...arrayBilangan); // Output: 1, 2, 3, 4, 5
Saat menggunakan spread operator, outputnya bukan lagi array, melainkan element-element pembentuknya secara individu.

Spread operator pada array memiliki beberapa kegunaan:

membuat array duplikat

let arrayAsli = [1, 2, 3];

let arrayDuplikat = [...arrayAsli];
Sekarang arrayDuplikat adalah array baru yang memiliki element-element yang sama dengan arrayAsli.

Kalian mungkin bertanya "Kenapa tidak langsung seperti ini saja?"

let arrayAsli = [1, 2, 3];

let arrayDuplikat = arrayAsli;
Dalam kode di atas, arrayAsli dan arrayDuplikat itu menunjuk pada array yang sama, sehingga kalau kita membuat perubahan pada arrayDuplikat, arrayAsli juga ikut berubah. Sebaliknya juga begitu.

menggabungkan array (concatenate)

let array1 = ["foo", "bar"];
let array2 = ["fizz", "buzz"];

// menggunakan spread operator
array1 = [...array1, ...array2];

console.log(array1); // Output: ["foo", "bar", "fizz", "buzz"]
Spread Operator Dengan Objek
Mirip pada array, spread operator memecah objek menjadi pasangan properti-nilai yang membentuknya. Hal ini memiliki beberapa kegunaan:

menambah beberapa properti sekaligus

let orang = {
  nama: "Yudistya",
  umur: 32
};
Untuk menambahkan beberapa properti lainnya, kita bisa melakukan ini:

orang.pekerjaan = "arsitek";
orang.pendidikan = "S1";
atau bisa juga lebih singkat dengan menggunakan spread operator seperti ini:

orang = {...orang, pekerjaan: "arsitek", pendidikan: "S1"};
menggabungkan objek

Spread operator juga memungkinkan kita untuk menggabungkan dua (atau lebih) objek.

Sebelum ES6, kita harus menggunakan method .assign() dari Object seperti ini:

const objek1 = {a: 1, b: 2};
const objek2 = {c: 3, d: 4};
const objekGabungan = Object.assign({}, objek1, objek2);

console.log(objekGabungan); // Output: {a: 1, b: 2, c: 3, d: 4}
Tapi dengan spread operator, kita cukup menambahkan elipsis di depan nama arraynya lalu membungkus semuanya dengan sepasang kurung kurawal.

const objek1 = {a: 1, b: 2};
const objek2 = {c: 3, d: 4};
const objekGabungan = {...objek1, ...objek2};

console.log(objekGabungan); // Output: {a: 1, b: 2, c: 3, d: 4}
*/
let namaBuah1 = ['apel', 'mangga'];
let namaBuah2 = ['sirsak', 'semangka'];

let semuaNamaBuah = [...namaBuah1,...namaBuah2];

// Tulis kode kalian di bawah ini
console.log(semuaNamaBuah);

//Destrukturisasi
//JavaScript ES6
//Destrukturisasi adalah cara untuk membongkar isi dari array atau objek dan menyimpan hasilnya ke dalam variabel-variabel lain.
/*
Destrukturisasi Array
Sebelum ES6, cara untuk menyimpan nilai dari masing-masing element dari sebuah array ke dalam variabel adalah sebagai berikut:

let buah = ["mangga", "pisang", "anggur"];

let buah1 = buah[0];
let buah2 = buah[1];
let buah3 = buah[2];

console.log(buah1); // Output: mangga
console.log(buah2); // Output: pisang
console.log(buah3); // Output: anggur

*/
// dgn method baru
//Kalian juga bisa memilih element mana saja yang tidak ingin disimpan di dalam variabel dengan menggunakan "koma kosong", atau tidak menyebutkan element tersebut saat destrukturisasi.

// gunakan koma kosong untuk melewati element kedua dan keempat
let [namaDepan, , namaBelakang, , buku] = ["Joanne", "K", "Rowling", "pengarang", "Harry Potter"];

console.log(namaDepan); // Output: Joanne
console.log(namaBelakang); // Output: Rowling
console.log(buku); // Output: Harry Potter
/*
Kalian juga bisa memilih element mana saja yang tidak ingin disimpan di dalam variabel dengan menggunakan "koma kosong", atau tidak menyebutkan element tersebut saat destrukturisasi.

Contoh:

// gunakan koma kosong untuk melewati element kedua dan keempat
let [namaDepan, , namaBelakang, , buku] = ["Joanne", "K", "Rowling", "pengarang", "Harry Potter"];

console.log(namaDepan); // Output: Joanne
console.log(namaBelakang); // Output: Rowling
console.log(buku); // Output: Harry Potter
Pada Javascript ES6, caranya lebih singkat, yaitu dengan destrukturisasi.

Syntax untuk destrukturisasi objek adalah seperti ini:

let { namaProperti1, namaProperti2, namaProperti3 } = namaObjek;
Cara di atas hanya bekerja jika nama variabel baru untuk destrukturisasi itu sama dengan nama properti pada objek yang akan didestrukturisasi ya. Kalau tidak nanti isi dari variabelnya adalah undefined.

Misalnya:

let orang = {
  nama: "Joko",
  umur: 22,
  sudahMenikah: false
};

// Destrukturisasi Objek
let { nama, umur, statusMenikah } = orang;

console.log(nama); // Output: Joko
console.log(umur); // Output: 22
console.log(statusMenikah); // Output: undefined karena nama variabel dan properti berbeda
Tapi kalau kalian ingin agar nama variabelnya berbeda dari nama properti, kalian bisa menambahkan titik dua setelah nama properti dan diikuti nama variabel yang baru, seperti ini:

let {
  namaProperti1: namaVariabelBaru1,
  namaProperti2: namaVariabelBaru2
} = namaObjek;
Contoh:

let orang = {
  name: "Joko",
  age: 22,
};

// buat variabel nama berisi nilai dari properti name pada orang
// buat variabel age berisi nilai dari properti umur pada orang
let { name: nama, age: umur } = orang;

console.log(nama); // Output: Joko
console.log(umur); // Output: 22
Destrukturisasi Objek Bertingkat
Jika objek-nya bertingkat (ada objek di dalam objek) apa tetap bisa didestrukturisasi?

Bisa!

Contohnya seperti ini:

let murid = {
  kelas: "12a",
  nama: ["ani", "yahya", "sinto"],
  prestasi: {
    olahraga: "juara 1",
    akademik: "juara 2"
  }
};

let {
  prestasi: { olahraga }
} = murid;

console.log(olahraga); // Output: juara 1
Kalau kalian cermati, nilai "juara 1" adalah nilai dari properti "olahraga", yang mana adalah properti dari objek prestasi. Maka saat melakukan destrukturisasi, kita juga harus mengikuti struktur objek tersebut.

*/
/* Object Shorthand
JavaScript ES6
Object Shorthand di Variabel
Object shorthand di variabel sebenarnya kebalikan dari destrukturisasi objek. Jika destrukturisasi objek menyimpan nilai properti objek di variabel, maka object shorthand menyimpan nilai variabel di properti objek.

Jika ada beberapa variabel yang nilainya ingin dijadikan sebagai properti sebuah objek, maka cara mendeklarasikan objek tersebut adalah sebagai berikut:

let suaraKucing = "Meow";
let suaraAnjing = "Gukguk";
let suaraTikus = "Citcitcit";

let suaraHewan = {
  suaraKucing: suaraKucing,
  suaraAnjing: suaraAnjing,
  suaraTikus: suaraTikus
};

console.log(suaraHewan); // Output:  { suaraKucing: 'Meow', suaraAnjing: 'Gukguk', suaraTikus: 'Citcitcit' }
console.log(suaraHewan.suaraKucing); // Output: Meow
console.log(suaraHewan.suaraAnjing); // Output: Gukguk
console.log(suaraHewan.suaraTikus); // Output: Citcitcit
Coba bayangkan, bagaimana kalau variabel yang mau disimpan di dalam properti objeknya ada banyak?

Ada cara lebih singkat ketika menuliskan objek di atas, yaitu dengan menggunakan object shorthand. Aturan utama ketika menggunakan cara object shorthand adalah nama variabel dan nama properti di objek yang bersangkutan harus sama.

Contoh:

let suaraKucing = "Meow";
let suaraAnjing = "Gukguk";
let suaraTikus = "Citcitcit";

let suaraHewan = { suaraKucing, suaraAnjing, suaraTikus };

console.log(suaraHewan); // Output:  { suaraKucing: 'Meow', suaraAnjing: 'Gukguk', suaraTikus: 'Citcitcit' }
console.log(suaraHewan.suaraKucing); // Output: Meow
console.log(suaraHewan.suaraAnjing); // Output: Gukguk
console.log(suaraHewan.suaraTikus); // Output: Citcitcit

Object Shorthand di Parameter Fungsi
Object shorthand bisa juga digunakan untuk mengambil parameter dari sebuah fungsi dan dijadikan sebagai nilai properti di objek yang dideklarasikan di dalam fungsi tersebut.

Sama seperti di variabel, object shorthand hanya bisa digunakan apabila nama parameter pada fungsi sama dengan nama properti dari objek yang bersangkutan.

Contoh:

// Pada JavaScript ES5 (tanpa object shorthand)
function membuatBiodata(nama, umur, jenisKelamin) {
  return {
    nama: nama,
    umur: umur,
    jenisKelamin: jenisKelamin
  };
}

console.log(membuatBiodata("Andi", 22, "pria")); // Output: { nama: 'Andi', umur: 22, jenisKelamin: 'pria' }
Dengan menggunakan object shorthand maka akan menjadi seperti ini:

// Di sini selain menggunakan object shorthand, kita juga akan menggunakan arrow function dari ES6
let membuatBiodata = (nama, umur, jenisKelamin) => {
   return { nama, umur, jenisKelamin };
};

console.log(membuatBiodata("Andi", 22, "pria")); // Output: { nama: 'Andi',

Object Shorthand untuk Mendeklarasikan Method
Masih ingat method kan? Method adalah fungsi yang menjadi nilai properti di suatu objek.

Masih ingat juga kan bagaimana cara mendeklarasikan method di objek?

Lihatlah contoh di bawah ini:

let operasiMatematika = {
  nama: "Penjumlahan",
  operasi: function(angka1, angka2) {
    let hasil = angka1 + angka2;
    return `${this.nama} dari ${angka1} dan ${angka2} adalah ${hasil}`;
  }
};

console.log(operasiMatematika.operasi(3, 5)); // Output: Penjumlahan dari 3 dan 5 adalah 8
Namun dengan object shorthand, objek di atas bisa ditulis dengan cara berikut:

let operasiMatematika = {
  nama: "Penjumlahan",
  operasi(angka1, angka2) {
    let hasil = angka1 + angka2;
    return `${this.nama} dari ${angka1} dan ${angka2} adalah ${hasil}`;
  }
};

console.log(operasiMatematika.operasi(3, 5)); // Output: Penjumlahan dari 3 dan 5 adalah 8
Perhatikan perbedaan cara mendeklarasikan method operasi di kedua contoh di atas. Dengan cara object shorthand, kita tidak perlu lagi menulis nama properti secara spesifik selama nama fungsi sama dengan nama properti di objek yang bersangkutan.







































































