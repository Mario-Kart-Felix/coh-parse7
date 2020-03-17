// This is a generated file! Please edit source .ksy file and use kaitai-struct-compiler to rebuild

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['kaitai-struct/KaitaiStream', './Boostsets', './Powercats', './Powersets', './AttribNames', './Messages', './Classes'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('kaitai-struct/KaitaiStream'), require('./Boostsets'), require('./Powercats'), require('./Powersets'), require('./AttribNames'), require('./Messages'), require('./Classes'));
  } else {
    root.Pigg = factory(root.KaitaiStream, root.Boostsets, root.Powercats, root.Powersets, root.AttribNames, root.Messages, root.Classes);
  }
}(this, function (KaitaiStream, Boostsets, Powercats, Powersets, AttribNames, Messages, Classes) {
var Pigg = (function() {
  function Pigg(_io, _parent, _root) {
    this._io = _io;
    this._parent = _parent;
    this._root = _root || this;

    this._read();
  }
  Pigg.prototype._read = function() {
    this.magic = this._io.readBytes(4);
    if (!((KaitaiStream.byteArrayCompare(this.magic, [35, 1, 0, 0]) == 0))) {
      throw new KaitaiStream.ValidationNotEqualError([35, 1, 0, 0], this.magic, this._io, "/seq/0");
    }
    this.version = this._io.readU2le();
    this.readVersion = this._io.readU2le();
    this.archiveLen = this._io.readU2le();
    this.fileLen = this._io.readU2le();
    this.count = this._io.readU4le();
    this._raw_value = new Array(this.count);
    this.value = new Array(this.count);
    for (var i = 0; i < this.count; i++) {
      this._raw_value[i] = this._io.readBytes(this.fileLen);
      var _io__raw_value = new KaitaiStream(this._raw_value[i]);
      this.value[i] = new FileHeader(_io__raw_value, this, this._root);
    }
    this.strings = new Strings(this._io, this, this._root);
  }

  var FileHeader = Pigg.FileHeader = (function() {
    function FileHeader(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    FileHeader.prototype._read = function() {
      this.magic = this._io.readU4le();
      this.nameId = this._io.readU4le();
      this.size = this._io.readU4le();
      this.timestamp = this._io.readU4le();
      this.offset = this._io.readU4le();
      this.reserved = this._io.readU4le();
      this.headerDataId = this._io.readU4le();
      this.checksum = this._io.readBytes(16);
      this.packSize = this._io.readU4le();
    }
    Object.defineProperty(FileHeader.prototype, 'key', {
      get: function() {
        if (this._m_key !== undefined)
          return this._m_key;
        this._m_key = this._root.strings.value[this.nameId].value;
        return this._m_key;
      }
    });
    Object.defineProperty(FileHeader.prototype, 'value', {
      get: function() {
        if (this._m_value !== undefined)
          return this._m_value;
        var io = this._root._io;
        var _pos = io.pos;
        io.seek(this.offset);
        switch (this._root.strings.value[this.nameId].value) {
        case "bin/boostsets.bin":
          this._raw__raw__m_value = io.readBytes(this.packSize);
          this._raw__m_value = KaitaiStream.processZlib(this._raw__raw__m_value);
          var _io__raw__m_value = new KaitaiStream(this._raw__m_value);
          this._m_value = new Boostsets(_io__raw__m_value, this, null);
          break;
        case "bin/powercats.bin":
          this._raw__raw__m_value = io.readBytes(this.packSize);
          this._raw__m_value = KaitaiStream.processZlib(this._raw__raw__m_value);
          var _io__raw__m_value = new KaitaiStream(this._raw__m_value);
          this._m_value = new Powercats(_io__raw__m_value, this, null);
          break;
        case "bin/classes.bin":
          this._raw__raw__m_value = io.readBytes(this.packSize);
          this._raw__m_value = KaitaiStream.processZlib(this._raw__raw__m_value);
          var _io__raw__m_value = new KaitaiStream(this._raw__m_value);
          this._m_value = new Classes(_io__raw__m_value, this, null);
          break;
        case "bin/powersets.bin":
          this._raw__raw__m_value = io.readBytes(this.packSize);
          this._raw__m_value = KaitaiStream.processZlib(this._raw__raw__m_value);
          var _io__raw__m_value = new KaitaiStream(this._raw__m_value);
          this._m_value = new Powersets(_io__raw__m_value, this, null);
          break;
        case "bin/attrib_names.bin":
          this._raw__raw__m_value = io.readBytes(this.packSize);
          this._raw__m_value = KaitaiStream.processZlib(this._raw__raw__m_value);
          var _io__raw__m_value = new KaitaiStream(this._raw__m_value);
          this._m_value = new AttribNames(_io__raw__m_value, this, null);
          break;
        case "bin/clientmessages-en.bin":
          this._raw__raw__m_value = io.readBytes(this.packSize);
          this._raw__m_value = KaitaiStream.processZlib(this._raw__raw__m_value);
          var _io__raw__m_value = new KaitaiStream(this._raw__m_value);
          this._m_value = new Messages(_io__raw__m_value, this, null);
          break;
        default:
          this._raw__raw__m_value = io.readBytes(this.packSize);
          this._raw__m_value = KaitaiStream.processZlib(this._raw__raw__m_value);
          var _io__raw__m_value = new KaitaiStream(this._raw__m_value);
          this._m_value = new Nothing(_io__raw__m_value, this, this._root);
          break;
        }
        io.seek(_pos);
        return this._m_value;
      }
    });

    return FileHeader;
  })();

  var Nothing = Pigg.Nothing = (function() {
    function Nothing(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    Nothing.prototype._read = function() {
    }

    return Nothing;
  })();

  var Strings = Pigg.Strings = (function() {
    function Strings(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    Strings.prototype._read = function() {
      this.smagic = this._io.readBytes(4);
      if (!((KaitaiStream.byteArrayCompare(this.smagic, [137, 103, 0, 0]) == 0))) {
        throw new KaitaiStream.ValidationNotEqualError([137, 103, 0, 0], this.smagic, this._io, "/types/strings/seq/0");
      }
      this.count = this._io.readU4le();
      this.len = this._io.readU4le();
      this.value = new Array(this.count);
      for (var i = 0; i < this.count; i++) {
        this.value[i] = new U4string(this._io, this, this._root);
      }
    }

    return Strings;
  })();

  var U4string = Pigg.U4string = (function() {
    function U4string(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    U4string.prototype._read = function() {
      this.len = this._io.readU4le();
      this.value = KaitaiStream.bytesToStr(KaitaiStream.bytesTerminate(this._io.readBytes(this.len), 0, false), "ascii");
    }

    return U4string;
  })();

  return Pigg;
})();
return Pigg;
}));
