
class Car {
    #chassisNumber = null;

    constructor ( brand, color, maxSpeed ) {
        this.brand = brand;
        this.color = color;
        this.maxSpeed = maxSpeed;
        this.#chassisNumber = this.#generateChassisNumber();
    }

    drive() {
        return `${this.brand} with ${this.color} color and max speed is ${this.maxSpeed}`;
    }

    turn(direction) {
        return `${this.brand} ${this.color} is turning ${direction}`;
    }

    #generateChassisNumber() {
        return `${this.brand}-${Math.floor(Math.random() * 1000)}`;
    }
    
    chassisNumber(){
        return `${this.#generateChassisNumber()}`;
    }
}

const car1 = new Car('Toyota', 'red', 100);
const car2 = new Car('Honda', 'black', 180);
const car3 = new Car('Suzuki', 'blue', 200);

console.log(car1.drive());
console.log(car3.turn("left"));
console.log(car2.chassisNumber());

