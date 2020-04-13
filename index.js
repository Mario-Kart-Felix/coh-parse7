const fs = require('fs');
const zlib = require('zlib');
const Pigg = require('./gen/Pigg');
const Powers = require('./gen/Powers');
const KaitaiStream = require('kaitai-struct/KaitaiStream');
KaitaiStream.processZlib = buf => buf.length ? zlib.inflateSync(buf) : buf;

const depth = {
    boostsets: 1,
    classes: 1,
    powercats: 1,
    powersets: 2
};
const rename = {
    classes: 'archetypes'
};

const pigg = parse(Pigg, './bins/bin.pigg');
for (let f in pigg) {
    let str = JSON.stringify(pigg[f], null, 2);
    if (str == '{}') continue;
    let name = f.replace(/^bin\//, '').replace(/\.bin$/, '');
    console.log(name);
    writeFiles(replacePMessages(hierarchy(pigg[f]), pigg['bin/clientmessages-en.bin']), rename[name] || name, depth[name] || 0);
}
const powers = parse(Pigg, './bins/bin_powers.pigg')["bin/powers.bin"];
writeFiles(hierarchy(powers), 'powers', 3, pigg['bin/clientmessages-en.bin']);

function hierarchy(input) {
    const output = {};
    for (let full in input) {
        let [a,b,c] = full.split('.');
        if (!b) return input;
        if (!output[a]) output[a] = {};
        if (!c) {
            output[a][b] = input[full];
            continue;
        }
        if (!output[a][b]) output[a][b] = {};
        output[a][b][c] = input[full];
    }
    return output;
}

function replacePMessages(input, messages) {
    if (typeof input === 'string') return messages[input] || input;
    if (typeof input === 'object') for (let i in input) input[i] = replacePMessages(input[i], messages);
    return input;
}

function writeFiles(output, name, depth, messages) {
    fs.writeFileSync(`./docs/${name}.json`, JSON.stringify(output));
    if (depth == 0) return;
    if (messages) output = replacePMessages(output, messages);
    for (let a in output) {
        if (!fs.existsSync(`docs/${name}`)) fs.mkdirSync(`docs/${name}`);
        fs.writeFileSync(`./docs/${name}/${a}.json`, JSON.stringify(output[a], null, 2));
        if (depth == 1) continue;
        for (let b in output[a]) {
            if (!fs.existsSync(`docs/${name}/${a}`)) fs.mkdirSync(`docs/${name}/${a}`);
            fs.writeFileSync(`./docs/${name}/${a}/${b}.json`, JSON.stringify(output[a][b], null, 2));
            if (depth == 2) continue;
            for (let c in output[a][b]) {
                if (!fs.existsSync(`docs/${name}/${a}/${b}`)) fs.mkdirSync(`docs/${name}/${a}/${b}`);
                fs.writeFileSync(`./docs/${name}/${a}/${b}/${c}.json`, JSON.stringify(output[a][b][c], null, 2));
            }
        }
    }
}

function parse(clazz, file) {
    return fixParsed(new clazz(new KaitaiStream(fs.readFileSync(file))));
}

function fixParsed(o) {
    function fixValue(o, name) {
        if (o.value !== undefined) {
            if (o._debug && o._debug.value && o._debug.value.enumName) {
                if (Array.isArray(o.value)) {
                    return o.value.map(v => eval(`${o._debug.value.enumName}[${v}]`))
                }
                return eval(`${o._debug.value.enumName}[${o.value}]`);
            }
            else
               return fixValue(o.value, name);
        }
        if (o.val !== undefined) return fixValue(o.val, name);
        if (typeof o !== 'object') return o;
        if (Array.isArray(o)) {
            if (o.length === 0) return [];
            if (o[0].key) {
                let r = {};
                for (i of o) {
                    let val = i.value;
                    if (val === undefined) val = i.val;
                    r[fixValue(i.key, name)] = fixValue(val, fixValue(i.key));
                }
                return r;
            }
            let r = [];
            for (i of o) r.push(fixValue(i, name));
            return r;
        }
        if (name.match(/[fF]lags$/)) {
            let flags = [];
            let e = fixValue(o, 'flagob');
            for (let f in e) {
                if (f.match(/^_/)) continue;
                if (e[f] === true) {
                    flags.push(f);
                }
            }
            return flags;
        }
        let r = {};
        for (let f in o) {
            if (f.startsWith('_')) continue;
            if (f.match(/^z[A-Z]/)) continue;
            if (f == 'fx' || f == 'key') continue;
            if (o._debug && o._debug[f].enumName)
                r[f] = eval(`${o._debug[f].enumName}[${o[f]}]`);
            else
                r[f] = fixValue(o[f], f);
        }
        return r;
    }
    o._read();
    return fixValue(o, "root");
}