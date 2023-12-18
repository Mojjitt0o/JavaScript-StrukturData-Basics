/* Untuk mengetahui tipe data, kita bisa melakukan checking pada codingan yang ada.
Caranya, dengan menggunakan operator typeof. Penulisan syntax typeof dapat dilakukan sebagai berikut :

- Sebagai operator -> typeof x
- Sebagai function -> typeof(x)

Contoh penggunaannya berikut:

*/

let pesan = "Hello World";
console.log(typeof pesan);
// Output: String

console.log(typeof 10);
// Output: Number

console.log(typeof(true));
//Output: Boolean 




/* Sekaran bisa  lanjut bahas tipe data primitif, ada string, number, boolean, null, dan undefined 

- String ; adalah tipe data yang menyimpan karakter sebagai nilainnya. Bisa dalam format huruf, angka, simbol,
dan sebagainya. Kemudian karakter tersebut akan diapit oleh tanda kutip (' atau ") . 
Hasil dari data string ini dapat ditampilkan sesuai dengan karakter yang ditulis di antara tanda kutip (' atau ").

Berikut contohnyta;
*/

//kutip dua
const stringBiasa = "Ini string pake kutip dua";
const stringAneh = "Ini string karakter aneh-aneh $!^@&@*&";
const stringPakeAngka = " Ini string yang pake angka 123456";

// Kutip satu
const stringIsiKutipDua = 'Ini string tapi aku bisa nulis kutip dua disini, liat nih",. tuh kan!';
const stringKutipSatu = 'Gapapa kan kalo pake kutip satu?';

//Backtick
const stringPakeBacktick = `Ini pake kutip kebalik`;
const stringPakeEnter = 
` 
Aku bisa enter?
Dih, Beneran bisa?
Bisa cuy!
`;


/* Didalam string, kita bisa memanggil ulang variabel yang sudah kita deklarasikan untuk membuat suatu ekspresi tertentu.
Hal itu disebut template literal.

Template literal ini wajib memakai backtick (`). Kemudian untuk menambahkan suatu kode yang akan dieksekusi
di dalam string, kita menambahkan karakter ${...}.

kemudian, kode-kode yang ada di dalam karakter itu akan dijalankan oleh JavaScript.

Contoh:
*/

const nama = "Sabrina";
const pekerjaan = "Fasilitator Binar.";

console.log(`Halo, namaku ${nama}, aku kerja sebagai ${pekerjaan}`);
// Output: Halo namaku Sabrina, aku kerja sebagai Fasilitator Binar.

