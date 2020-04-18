const fs = require('fs');
let config;

exports.getConfig = async function () {
    return new Promise(resolve => {
        try {
            config = require('./config.json');
            resolve();
        }
        catch {
            console.log('in catch');
            const readline = require("readline");
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });
            rl.question("Path to Tequila: ", function (path) {
                config = { path: path.replace(/\\/g, '/') };
                fs.writeFileSync("config.json", JSON.stringify(config, null, 2));
                resolve();
            });
        }
    });
}

exports.findFile = function findFile(file) {
    for (let path of [`${config.path}/homecoming/${file}`, `${config.path}/piggs/${file}`, `${config.path}/${file}`])
        if (fs.existsSync(path)) return path;
    return null;
}
