/* Tipe data number ini terdiri dari number integer (angka bilangan bulat) dan floating number (angka bilangan desimal.)

Ada banyak operasi untuk tipe data number ini, seperti perkalian(*), pembagian(/), penjumlahan(+), dan pengurangan(-).

Selain tipe data number biasa, juga ada tipe data number special numeric values.
Yang termasuk dalam tipe data number special numeric values, ini adalah :

- Infinity: Nilai khusus yang lebih besar daripada angka berapapun. 
Kita bisa mendapatkan nilai infinity ini dari hasil pembagian dengan nol.

- NaN (Not a Number): Kesalahan komputasi yang terjadi karena operasi matematika yang salah.

Contoh:
*/

console.log( 1/0 ); // Output: Infinity
console.log( "Bukan number" /2 );
// Output NaN, pembagian yang salah yaitu string dan number

/*Jika operasi yang pertama adalah NaN, maka operasi selanjutnya gak bisa dijalankan: */
console.log( "Bukan number" /2+5);
//Output: NaN


