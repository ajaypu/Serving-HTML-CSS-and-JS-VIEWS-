const path = require("path");

module.exports = path.dirname(process.mainModule.filename);
// process => global variable(available in all files)
// mainModule => property , it will return to the main module that started your application i.e app.js
// filename => it will findout which fill
