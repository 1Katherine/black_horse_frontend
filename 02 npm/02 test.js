const TIME = require("./01 dataFormat");

const dt = new Date();
console.log(dt);

const newDt = TIME.dateFormat(dt);
console.log(newDt);
