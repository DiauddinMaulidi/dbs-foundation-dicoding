
const date = new Date();

const jakarta = date.toLocaleDateString("id-ID", {
    timeZone: "Asia/Makassar",
});

console.log(jakarta);
