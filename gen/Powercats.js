// This is a generated file! Please edit source .ksy file and use kaitai-struct-compiler to rebuild

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['kaitai-struct/KaitaiStream'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('kaitai-struct/KaitaiStream'));
  } else {
    root.Powercats = factory(root.KaitaiStream);
  }
}(this, function (KaitaiStream) {
var Powercats = (function() {
  function Powercats(_io, _parent, _root) {
    this._io = _io;
    this._parent = _parent;
    this._root = _root || this;
    this._debug = {};

  }
  Powercats.prototype._read = function() {
    this._debug.header = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.header = new Header(this._io, this, this._root);
    this.header._read();
    this._debug.header.end = this._io.pos;
    this._debug.len = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.len = this._io.readU4le();
    this._debug.len.end = this._io.pos;
    this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this._raw_value = this._io.readBytes(this.len);
    var _io__raw_value = new KaitaiStream(this._raw_value);
    this.value = new PowercatArray(_io__raw_value, this, this._root);
    this.value._read();
    this._debug.value.end = this._io.pos;
  }

  var PowercatArray = Powercats.PowercatArray = (function() {
    function PowercatArray(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    PowercatArray.prototype._read = function() {
      this._debug.count = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.count = this._io.readU4le();
      this._debug.count.end = this._io.pos;
      this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.value = new Array(this.count);
      this._debug.value.arr = new Array(this.count);
      for (var i = 0; i < this.count; i++) {
        this._debug.value.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
        var _t_value = new PowercatStruct(this._io, this, this._root);
        _t_value._read();
        this.value[i] = _t_value;
        this._debug.value.arr[i].end = this._io.pos;
      }
      this._debug.value.end = this._io.pos;
    }

    return PowercatArray;
  })();

  var PstringArray = Powercats.PstringArray = (function() {
    function PstringArray(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    PstringArray.prototype._read = function() {
      this._debug.count = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.count = this._io.readU4le();
      this._debug.count.end = this._io.pos;
      this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.value = new Array(this.count);
      this._debug.value.arr = new Array(this.count);
      for (var i = 0; i < this.count; i++) {
        this._debug.value.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
        var _t_value = new Pstring(this._io, this, this._root);
        _t_value._read();
        this.value[i] = _t_value;
        this._debug.value.arr[i].end = this._io.pos;
      }
      this._debug.value.end = this._io.pos;
    }

    return PstringArray;
  })();

  var StringArray = Powercats.StringArray = (function() {
    function StringArray(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    StringArray.prototype._read = function() {
      this._debug.count = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.count = this._io.readU4le();
      this._debug.count.end = this._io.pos;
      this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.value = new Array(this.count);
      this._debug.value.arr = new Array(this.count);
      for (var i = 0; i < this.count; i++) {
        this._debug.value.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
        var _t_value = new String(this._io, this, this._root);
        _t_value._read();
        this.value[i] = _t_value;
        this._debug.value.arr[i].end = this._io.pos;
      }
      this._debug.value.end = this._io.pos;
    }

    return StringArray;
  })();

  var String = Powercats.String = (function() {
    function String(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    String.prototype._read = function() {
      this._debug.ofs = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.ofs = this._io.readU4le();
      this._debug.ofs.end = this._io.pos;
    }
    Object.defineProperty(String.prototype, 'value', {
      get: function() {
        if (this._m_value !== undefined)
          return this._m_value;
        var io = this._root._io;
        var _pos = io.pos;
        io.seek((this.ofs + 24));
        this._debug._m_value = { start: io.pos, ioOffset: io.byteOffset };
        this._m_value = KaitaiStream.bytesToStr(io.readBytesTerm(0, false, true, true), "ascii");
        this._debug._m_value.end = io.pos;
        io.seek(_pos);
        return this._m_value;
      }
    });

    return String;
  })();

  var Pstring = Powercats.Pstring = (function() {
    function Pstring(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    Pstring.prototype._read = function() {
      this._debug.len = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.len = this._io.readU2le();
      this._debug.len.end = this._io.pos;
      this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.value = KaitaiStream.bytesToStr(this._io.readBytes(this.len), "ascii");
      this._debug.value.end = this._io.pos;
      this._debug.pad = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.pad = this._io.readBytes(KaitaiStream.mod((4 - this._io.pos), 4));
      this._debug.pad.end = this._io.pos;
    }

    return Pstring;
  })();

  var Powercat = Powercats.Powercat = (function() {
    function Powercat(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    Powercat.prototype._read = function() {
      this._debug.display = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.display = new String(this._io, this, this._root);
      this.display._read();
      this._debug.display.end = this._io.pos;
      this._debug.help = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.help = new String(this._io, this, this._root);
      this.help._read();
      this._debug.help.end = this._io.pos;
      this._debug.shortHelp = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.shortHelp = new String(this._io, this, this._root);
      this.shortHelp._read();
      this._debug.shortHelp.end = this._io.pos;
      this._debug.powersets = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.powersets = new StringArray(this._io, this, this._root);
      this.powersets._read();
      this._debug.powersets.end = this._io.pos;
    }

    return Powercat;
  })();

  var PowercatStruct = Powercats.PowercatStruct = (function() {
    function PowercatStruct(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    PowercatStruct.prototype._read = function() {
      this._debug.len = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.len = this._io.readU4le();
      this._debug.len.end = this._io.pos;
      this._debug.source = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.source = new String(this._io, this, this._root);
      this.source._read();
      this._debug.source.end = this._io.pos;
      this._debug.key = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.key = new String(this._io, this, this._root);
      this.key._read();
      this._debug.key.end = this._io.pos;
      this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._raw_value = this._io.readBytes((this.len - 8));
      var _io__raw_value = new KaitaiStream(this._raw_value);
      this.value = new Powercat(_io__raw_value, this, this._root);
      this.value._read();
      this._debug.value.end = this._io.pos;
    }

    return PowercatStruct;
  })();

  var Header = Powercats.Header = (function() {
    function Header(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    Header.prototype._read = function() {
      this._debug._unnamed0 = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._unnamed0 = this._io.readBytes(20);
      this._debug._unnamed0.end = this._io.pos;
      this._debug.s = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.s = this._io.readU4le();
      this._debug.s.end = this._io.pos;
      this._debug._unnamed2 = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._unnamed2 = this._io.readBytes(((Math.floor((this.s - 1) / 4) + 1) * 4));
      this._debug._unnamed2.end = this._io.pos;
    }

    return Header;
  })();

  return Powercats;
})();
return Powercats;
}));
