const { getConfig, findFile } = require("./config");
const fs = require('fs');
const zlib = require('zlib');
const binPigg = require('./gen/Bin');
const KaitaiStream = require('kaitai-struct/KaitaiStream');
KaitaiStream.processZlib = buf => buf.length ? zlib.inflateSync(buf) : buf;

getConfig().then(() => parsePigg(findFile('bin.pigg')));

function parsePigg(piggFile) {
    const pigg = parse(binPigg, piggFile);
    let i = 0;
    console.log(pigg);
    for (let f of pigg.value) {
        if (f.packSize == 0) continue;
        let file = f.key;
        console.log(file);
        if (!file.startsWith("bin/VillainDef.bin")) continue;
        fs.writeFileSync(`bins/VillainDef.bin`, f.value);
    }
}

function parse(clazz, file) {
    return new clazz(new KaitaiStream(fs.readFileSync(file)));
}

