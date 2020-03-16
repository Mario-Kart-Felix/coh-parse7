const fs = require('fs');
const AttribNames = require('./gen/AttribNames');
const BoostSets = require('./gen/boostsets');
const Messages = require('./gen/Messages');
const KaitaiStream = require('kaitai-struct/KaitaiStream');

const attribNames = parse(AttribNames, './bins/attrib_names.bin');
fs.writeFileSync('./docs/attribNames.json', JSON.stringify(attribNames, null, 2));

const boostSets = parse(BoostSets, './bins/boostsets.bin');
fs.writeFileSync('./docs/boostSets.json', JSON.stringify(boostSets, null, 2));

const messages = parse(Messages, './bins/clientmessages-en.bin');
fs.writeFileSync('./docs/messages-raw.json', JSON.stringify(messages, null, 2));
const lookup = {};
for (let item of messages.stash) {
    item.message = messages.strings[item.message];
    item.help = messages.strings[item.help];
    for (let v in item.vars) item.vars[v] = messages.vars[item.vars[v]];
    lookup[item.id] = item.message;
}
fs.writeFileSync('./docs/messages-raw.json', JSON.stringify(messages.stash, null, 2));
fs.writeFileSync('./docs/messages.json', JSON.stringify(lookup, null, 2));

function parse(clazz, file) {
    return fixParsed(new clazz(new KaitaiStream(fs.readFileSync(file))));
}

function fixParsed(o) {
    function fixValue(o) {
        if (o.value !== undefined) return fixValue(o.value);
        if (typeof o !== 'object') return o;
        for (let f in o) {
            if (f.startsWith('_')) continue;
            o[f] = fixValue(o[f]);
        }
        return o;
    }
    function removeUnderscore(o) {
        if (typeof o !== 'object') return;
        for (let f in o) 
        {
            if (f.startsWith('_')) {delete o[f]; continue;}
            removeUnderscore(o[f]);
        }
    }
    o = fixValue(o);
    removeUnderscore(o);
    return o.value ? o.value : o;
}