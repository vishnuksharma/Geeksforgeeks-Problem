const http = require("https");
const { resolve } = require("node:path");


const getAPIRes = () => {
    const URL = 'http://dummy.restapiexample.com/api/v1/employees';
    return new Promise((resolve, reject) => {
        http.get(URL, (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                return resolve(data);
            });
        })
        .on('error', (e) => {
            reject(e);
            console.log(e);
        });
    });
}

console.log(getAPIRes());