const csv = require('csv-parser')
const fs = require('fs');

async function readCSV() {
    return new Promise((resolve, reject) => {
        const results = [];
        fs.createReadStream('data.csv')
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
            resolve(results); 
        });
    });
}

module.exports = readCSV;