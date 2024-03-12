// contoh kalimat deklaratif dan imperatif
// imperatif
const insertionSortArray = (array) => {
    for (let i = 1; i < array.length; i++) {
        // console.log(i);
        for (let j = i-1; j > -1; j--) {
            // console.log(j);
            if ( array[j+1] < array[j] ) {
                [array[j+1], array[j]] = [array[j], array[j+1]]
                // console.log(array);
            }
        }
    }
    return array
}
console.log(insertionSortArray([1,4,2,34,5]));

// deklaratif
const arraynya = [1,4,2,34,5];
const compare = (a,b) => {
    return a-b;
}
arraynya.sort(compare)
console.log(arraynya);


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