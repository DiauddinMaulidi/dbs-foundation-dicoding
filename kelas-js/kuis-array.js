/**
 * TODO:
 * Buatlah sebuah variabel dengan nama evenNumber yang merupakan sebuah array dengan ketentuan:
 *  -> Array tersebut menampung bilangan genap dari 1 hingga 100
*/

// let evenNumber = [];
// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//         evenNumber.push(i);
//     }
// }
// console.log(evenNumber);

// -------------------------------------------------------

/**
 * kuis Map
 * 1. Buatlah variabel currency yang merupakan Map dengan kriteria:
 *   - key "USD", value 14000
 *   - key "JPY", value 131
 *   - key "SGD", value 11000
 *   - key "MYR", value 3500
 * 2. Buatlah variabel priceInIDR yang bernilai dari hasil perkalian:
 *     - priceInJPY dengan nilai currency JPY
 */


// let currency = new Map([
//     ["USD", 14000],
//     ["JPY", 131],
//     ["SGD", 11000],
//     ["MYR", 3500]
// ]);

// const priceInJPY = 5000;
// let priceInIDR = priceInJPY * currency.get("JPY");
// console.log(priceInIDR);

const phoneticAlphabet = ["Alpha", "Bravo", "Delta"];
phoneticAlphabet.splice(2, 0, "charlie");
console.log(phoneticAlphabet);