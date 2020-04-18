// This is a generated file! Please edit source .ksy file and use kaitai-struct-compiler to rebuild

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['kaitai-struct/KaitaiStream'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('kaitai-struct/KaitaiStream'));
  } else {
    root.Bin = factory(root.KaitaiStream);
  }
}(this, function (KaitaiStream) {
var Bin = (function() {
  function Bin(_io, _parent, _root) {
    this._io = _io;
    this._parent = _parent;
    this._root = _root || this;
    this._debug = {};

  }
  Bin.prototype._read = function() {
    this._debug.magic = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.magic = this._io.readBytes(4);
    this._debug.magic.end = this._io.pos;
    if (!((KaitaiStream.byteArrayCompare(this.magic, [35, 1, 0, 0]) == 0))) {
      throw new KaitaiStream.ValidationNotEqualError([35, 1, 0, 0], this.magic, this._io, "/seq/0");
    }
    this._debug.version = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.version = this._io.readU2le();
    this._debug.version.end = this._io.pos;
    this._debug.readVersion = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.readVersion = this._io.readU2le();
    this._debug.readVersion.end = this._io.pos;
    this._debug.archiveLen = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.archiveLen = this._io.readU2le();
    this._debug.archiveLen.end = this._io.pos;
    this._debug.fileLen = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.fileLen = this._io.readU2le();
    this._debug.fileLen.end = this._io.pos;
    this._debug.count = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.count = this._io.readU4le();
    this._debug.count.end = this._io.pos;
    this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this._raw_value = new Array(this.count);
    this.value = new Array(this.count);
    this._debug.value.arr = new Array(this.count);
    for (var i = 0; i < this.count; i++) {
      this._debug.value.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._raw_value[i] = this._io.readBytes(this.fileLen);
      var _io__raw_value = new KaitaiStream(this._raw_value[i]);
      var _t_value = new FileHeader(_io__raw_value, this, this._root);
      _t_value._read();
      this.value[i] = _t_value;
      this._debug.value.arr[i].end = this._io.pos;
    }
    this._debug.value.end = this._io.pos;
    this._debug.strings = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.strings = new Strings(this._io, this, this._root);
    this.strings._read();
    this._debug.strings.end = this._io.pos;
  }

  var FileHeader = Bin.FileHeader = (function() {
    function FileHeader(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    FileHeader.prototype._read = function() {
      this._debug.magic = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.magic = this._io.readU4le();
      this._debug.magic.end = this._io.pos;
      this._debug.nameId = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.nameId = this._io.readU4le();
      this._debug.nameId.end = this._io.pos;
      this._debug.size = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.size = this._io.readU4le();
      this._debug.size.end = this._io.pos;
      this._debug.timestamp = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.timestamp = this._io.readU4le();
      this._debug.timestamp.end = this._io.pos;
      this._debug.offset = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.offset = this._io.readU4le();
      this._debug.offset.end = this._io.pos;
      this._debug.reserved = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.reserved = this._io.readU4le();
      this._debug.reserved.end = this._io.pos;
      this._debug.headerDataId = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.headerDataId = this._io.readU4le();
      this._debug.headerDataId.end = this._io.pos;
      this._debug.checksum = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.checksum = this._io.readBytes(16);
      this._debug.checksum.end = this._io.pos;
      this._debug.packSize = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.packSize = this._io.readU4le();
      this._debug.packSize.end = this._io.pos;
    }
    Object.defineProperty(FileHeader.prototype, 'key', {
      get: function() {
        if (this._m_key !== undefined)
          return this._m_key;
        this._debug._m_key = {  };
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
        this._debug._m_value = { start: io.pos, ioOffset: io.byteOffset };
        this._raw__m_value = io.readBytes(this.packSize);
        this._m_value = KaitaiStream.processZlib(this._raw__m_value);
        this._debug._m_value.end = io.pos;
        io.seek(_pos);
        return this._m_value;
      }
    });

    return FileHeader;
  })();

  var Strings = Bin.Strings = (function() {
    function Strings(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    Strings.prototype._read = function() {
      this._debug.smagic = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.smagic = this._io.readBytes(4);
      this._debug.smagic.end = this._io.pos;
      if (!((KaitaiStream.byteArrayCompare(this.smagic, [137, 103, 0, 0]) == 0))) {
        throw new KaitaiStream.ValidationNotEqualError([137, 103, 0, 0], this.smagic, this._io, "/types/strings/seq/0");
      }
      this._debug.count = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.count = this._io.readU4le();
      this._debug.count.end = this._io.pos;
      this._debug.len = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.len = this._io.readU4le();
      this._debug.len.end = this._io.pos;
      this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.value = new Array(this.count);
      this._debug.value.arr = new Array(this.count);
      for (var i = 0; i < this.count; i++) {
        this._debug.value.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
        var _t_value = new U4string(this._io, this, this._root);
        _t_value._read();
        this.value[i] = _t_value;
        this._debug.value.arr[i].end = this._io.pos;
      }
      this._debug.value.end = this._io.pos;
    }

    return Strings;
  })();

  var U4string = Bin.U4string = (function() {
    function U4string(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    U4string.prototype._read = function() {
      this._debug.len = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.len = this._io.readU4le();
      this._debug.len.end = this._io.pos;
      this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.value = KaitaiStream.bytesToStr(KaitaiStream.bytesTerminate(this._io.readBytes(this.len), 0, false), "ascii");
      this._debug.value.end = this._io.pos;
    }

    return U4string;
  })();

  return Bin;
})();
return Bin;
}));
