const path = require('path');
const fs = require('fs');
const request = require('request');

let dataPath = (path.join(__dirname, '../chirps.json'));

fs.readFile(dataPath, {
    encoding: "utf-8"
}, (err, data) => {

    let chirpsArr = JSON.parse(data)
    for (let i = 0; i < chirpsArr.length; i++) {
        console.log(chirpsArr[i].name)
        console.log(chirpsArr[i].message)
    }
})
