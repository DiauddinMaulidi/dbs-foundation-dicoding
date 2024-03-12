// array sort

// const array1 = [1, 20, 200, 3];
const array1 = ['a', 'c', 'b', 'f', 'e'];

// dicompare/dibandingkan terlebih dahulu
const banding = (a,b) => {
    return a - b;
}

const newArray = array1.sort(banding)

console.log(newArray);

/* Pada compare function, fungsi akan membandingkan 2 nilai yang akan menghasilkan 3 result yaitu negatif (-), 0, dan positif (+).

Jika negative, maka `a` akan diletakkan sebelum `b`
Jika positive, maka `b` akan diletakkan sebelum `a`
Jika 0, maka tidak ada perubahan posisi.
*/