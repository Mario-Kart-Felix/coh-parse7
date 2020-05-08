const { getConfig, findFile, allPiggs } = require("./config");
const fs = require('fs');
const zlib = require('zlib');
const binPigg = require('./gen/Bin');
const KaitaiStream = require('kaitai-struct/KaitaiStream');
KaitaiStream.processZlib = buf => buf.length ? zlib.inflateSync(buf) : buf;

getConfig().then(() => {
    for (let pigg of allPiggs()) {
        parsePigg(findFile(pigg), pigg);
    }
});

function parsePigg(piggFile, name) {
    const pigg = parse(binPigg, piggFile);
    let i = 0;
    for (let f of pigg.value) {
        if (f.packSize == 0) continue;
        let file = f.key;
        if (!file.match(/Archery/i)) continue;
        console.log(name, file);
    }
}

function parse(clazz, file) {
    let pigg = new clazz(new KaitaiStream(fs.readFileSync(file)));
    pigg._read();
    return pigg;
}

