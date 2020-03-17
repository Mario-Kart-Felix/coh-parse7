const fs = require('fs');
const zlib = require('zlib');
const Pigg = require('./gen/Pigg');
const KaitaiStream = require('kaitai-struct/KaitaiStream');
KaitaiStream.processZlib = buf => buf.length ? zlib.inflateSync(buf) : buf;
  
const pigg = parse(Pigg, './bins/bin.pigg');
fs.writeFileSync('./docs/pigg.json', JSON.stringify(pigg, null, 2));

function parse(clazz, file) {
    return fixParsed(new clazz(new KaitaiStream(fs.readFileSync(file))));
}

function fixParsed(o) {
    function fixValue(o) {
        if (o.value !== undefined) return fixValue(o.value);
        if (o.val !== undefined) return fixValue(o.val);
        if (typeof o !== 'object') return o;
        if (Array.isArray(o)) {
            if (o.length === 0) return [];
            if (o[0].key) {
                let r = {};
                for (i of o) {
                    let val = i.value;
                    if (val === undefined) val = i.val;
                    r[fixValue(i.key)] = fixValue(val);
                }
                return r;
            }
            let r = [];
            for (i of o) r.push(fixValue(i));
            return r;
        }
        let r = {};
        for (let f in o) {
            if (f.startsWith('_')) continue;
            if (f.match(/^z[A-Z]/)) continue;
            r[f] = fixValue(o[f]);
        }
        return r;
    }
    return fixValue(o);
}