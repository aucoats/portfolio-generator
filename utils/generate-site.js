const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if there's an error, reject the promise and send the error to the Promise's .catch() method
            if (err) {
                reject(err);
                // return out of the function here to ensure the Promise doesn't accidentally execute resolve() also
                return;
            }

            // if everything went well, resolve the Promise and send the successful data ato the .then() method
            resolve({
                ok: true, 
                message: 'File created!'
            })
        })
    })
}

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.fs.copyFile('./src/style.css', './dist/style.css', err => {

            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true, 
                message: 'File copied!'
            })
            
        })
    })
}

// module.exports = {
//     writeFile: writeFile, 
//     copyFile: copyFile
// } OR THIS 

module.exports = { writeFile, copyFile }