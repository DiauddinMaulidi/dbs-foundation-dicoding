// perbedaan Map dan WeakMap

// const dataUser = new WeakMap();
const dataUser = new Map();

function getUser(user) {
    let count = dataUser.get(user) || 0;
    dataUser.set(user, count + 1);
}

let jhon = {name: "jhon"};
getUser(jhon);

jhon = null;

setTimeout(function() {
    console.log(dataUser.keys());
}, 1000);
