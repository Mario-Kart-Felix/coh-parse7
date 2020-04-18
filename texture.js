const { getConfig, findFile } = require("./config");
const fs = require('fs');
const {execSync} = require('child_process');
const zlib = require('zlib');
const texPigg = require('./gen/texpigg');
const KaitaiStream = require('kaitai-struct/KaitaiStream');
KaitaiStream.processZlib = buf => buf.length ? zlib.inflateSync(buf) : buf;

async function go() {
    getConfig();
    parsePigg(findFile('stage1b.pigg'));
    parsePigg(findFile('stage2.pigg'));
    parsePigg(findFile('texture_gui.pigg'));
}
go();

function parsePigg(piggFile) {
    console.log(piggFile);
    const pigg = parse(texPigg, piggFile);
    let i = 0;
    for (let f of pigg.value) {
        if (f.packSize == 0) continue;
        let file = f.value.name;
        if (!file.startsWith("texture_library/GUI/Icons/")) continue;
        file = file.replace("texture_library/GUI/Icons/", "");
        console.log(file);
        let parts = file.split('/');
        let path = '';
        for (let i = 0; i < parts.length - 1; i++) {
            path = path + parts[i] + '/';
            if (!fs.existsSync(`docs/icon/${path}`)) fs.mkdirSync(`docs/icon/${path}`);
        }
        file = parts[parts.length - 1];
        fs.writeFileSync(`textures/${file}`, f.value.dds);
        let name = file.replace(/\.[^.]*$/, '');
        execSync(`magick convert ".\\textures\\${file}" -strip ".\\docs\\icon\\${path}\\${name}.png"`);
    }
}

function parse(clazz, file) {
    let pigg = new clazz(new KaitaiStream(fs.readFileSync(file)));
    pigg._read();
    return pigg;
}

