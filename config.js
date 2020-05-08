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

exports.allPiggs = function allPiggs() {
    let files = {};
    for (let file of fs.readdirSync(`${config.path}/homecoming`)) if (file.match(/\.pigg$/)) files[file] = true;
    for (let file of fs.readdirSync(`${config.path}/piggs`)) if (file.match(/\.pigg$/)) files[file] = true;
    for (let file of fs.readdirSync(`${config.path}`)) if (file.match(/\.pigg$/)) files[file] = true;
    let fl = [];
    for (let f in files) fl.push(f);
    return fl;
}
