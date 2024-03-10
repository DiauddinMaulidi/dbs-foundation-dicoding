
const date = new Date();

const jakarta = date.toLocaleDateString("id-ID", {
    timeZone: "Asia/Jayapura",
});

console.log(jakarta);
