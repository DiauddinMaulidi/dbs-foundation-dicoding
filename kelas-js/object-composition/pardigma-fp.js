// Paradigma Functional Programing
    // adalah paradigma pemrograman yang menggunakan gaya deklaratif (ringkas dan jelas) yang dengan pendekatam What To Solve, tidak menggunakan gaya imperatif yang penulisannya lebih panjang dengan pendekatan How To Solve
    
const createPersonWithAge = (age, person) => {
    return { ...person, age };
}

const person = {
    name: "asep"
};

const newPerson = createPersonWithAge(18, person);
console.log({
    person,
    newPerson
});

// rekursif dalam countDown
const countDown = start => {
    console.log(start);
    if ( start > 0 ) countDown(start-1);
}

countDown(10);