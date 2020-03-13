const fs = require('fs');
const AttribNames = require('./gen/AttribNames');
const BoostSets = require('./gen/boostsets');
const KaitaiStream = require('kaitai-struct/KaitaiStream');

const attribNames = parse(AttribNames, './bins/attrib_names.bin');
fs.writeFileSync('./docs/attribNames.json', JSON.stringify(attribNames, null, 2));
const boostSets = parse(BoostSets, './bins/boostsets.bin');
fs.writeFileSync('./docs/boostSets.json', JSON.stringify(boostSets, null, 2));

function parse(clazz, file) {
    return fixParsed(new clazz(new KaitaiStream(fs.readFileSync(file))));
}

function fixParsed(o) {
    function fixValue(o) {
        for (let f in o) {
            if (f.startsWith('_')) continue;
            if (o[f].value !== undefined) o[f] = o[f].value;
            if (Array.isArray(o[f])) for (let d of o[f]) fixValue(d);
            if (typeof o[f] === 'object') fixValue(o[f]);
        }
    }
    function removeUnderscore(o) {
        for (let f in o) 
        {
            if (f.startsWith('_')) {delete o[f]; continue;}
            if (Array.isArray(o[f])) for (let d of o[f]) removeUnderscore(d);
            if (typeof o[f] === 'object') removeUnderscore(o[f]);
        }
    }
    fixValue(o);
    removeUnderscore(o);
    return o.value ? o.value : o;
}