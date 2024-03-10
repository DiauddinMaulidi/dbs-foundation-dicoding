// let car = {
//     brand: "ford",
//     color: "blue",
//     maxSpead: 200,
//     drive: () => {
//         console.log("driving");
//     },
//     turn: () => {
//         console.log("turning");
//     }
// }

// console.log(car.brand);
// console.log(car.color);
// console.log(car.maxSpead);

// car.drive();
// car.turn();
// ---------------------------------------

// contoh OOP di javascript

// // constructor function
// function Car(brand, color, maxSpead) {
//     this.brand = brand;
//     this.color = color;
//     this.maxSpead = maxSpead;
// }

// Car.prototype.drive = function () {
//     return `${this.brand} with ${this.color} color and max speed is ${this.maxSpead}`;
// }

// const car1 = new Car('Toyota', 'red', 100);
// const car2 = new Car('Honda', 'black', 180);
// const car3 = new Car('Suzuki', 'blue', 200);

// console.log(car1.drive());
// console.log(car2.drive());
// console.log(car3.drive());
// ----------------------------------------------

// constructor class
class Car {
    constructor(brand, color, maxSpeed) {
        this.brand = brand;
        this.color = color;
        this.maxSpeed = maxSpeed;
    }

    drive() {
        return `${this.brand} with ${this.color} color and max speed is ${this.maxSpeed}`;
    }
}

const car1 = new Car('Toyota', 'red', 100);
const car2 = new Car('Honda', 'black', 180);
const car3 = new Car('Suzuki', 'blue', 200);

console.log(car1.drive());
console.log(car3.drive());
console.log(car2.drive());