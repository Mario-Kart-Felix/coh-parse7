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

    this._read();
  }
  Powercats.prototype._read = function() {
    this.header = new Header(this._io, this, this._root);
    this.len = this._io.readU4le();
    this._raw_value = this._io.readBytes(this.len);
    var _io__raw_value = new KaitaiStream(this._raw_value);
    this.value = new PowercatArray(_io__raw_value, this, this._root);
  }

  var PowercatArray = Powercats.PowercatArray = (function() {
    function PowercatArray(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    PowercatArray.prototype._read = function() {
      this.count = this._io.readU4le();
      this.value = new Array(this.count);
      for (var i = 0; i < this.count; i++) {
        this.value[i] = new PowercatStruct(this._io, this, this._root);
      }
    }

    return PowercatArray;
  })();

  var PstringArray = Powercats.PstringArray = (function() {
    function PstringArray(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    PstringArray.prototype._read = function() {
      this.count = this._io.readU4le();
      this.value = new Array(this.count);
      for (var i = 0; i < this.count; i++) {
        this.value[i] = new Pstring(this._io, this, this._root);
      }
    }

    return PstringArray;
  })();

  var StringArray = Powercats.StringArray = (function() {
    function StringArray(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    StringArray.prototype._read = function() {
      this.count = this._io.readU4le();
      this.value = new Array(this.count);
      for (var i = 0; i < this.count; i++) {
        this.value[i] = new String(this._io, this, this._root);
      }
    }

    return StringArray;
  })();

  var String = Powercats.String = (function() {
    function String(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    String.prototype._read = function() {
      this.ofs = this._io.readU4le();
    }
    Object.defineProperty(String.prototype, 'value', {
      get: function() {
        if (this._m_value !== undefined)
          return this._m_value;
        var io = this._root._io;
        var _pos = io.pos;
        io.seek((this.ofs + 24));
        this._m_value = KaitaiStream.bytesToStr(io.readBytesTerm(0, false, true, true), "ascii");
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

      this._read();
    }
    Pstring.prototype._read = function() {
      this.len = this._io.readU2le();
      this.value = KaitaiStream.bytesToStr(this._io.readBytes(this.len), "ascii");
      this.pad = this._io.readBytes(KaitaiStream.mod((4 - this._io.pos), 4));
    }

    return Pstring;
  })();

  var Powercat = Powercats.Powercat = (function() {
    function Powercat(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    Powercat.prototype._read = function() {
      this.source = new String(this._io, this, this._root);
      this.name = new String(this._io, this, this._root);
      this.display = new String(this._io, this, this._root);
      this.help = new String(this._io, this, this._root);
      this.shortHelp = new String(this._io, this, this._root);
      this.powersets = new StringArray(this._io, this, this._root);
    }

    return Powercat;
  })();

  var PowercatStruct = Powercats.PowercatStruct = (function() {
    function PowercatStruct(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    PowercatStruct.prototype._read = function() {
      this.len = this._io.readU4le();
      this._raw_value = this._io.readBytes(this.len);
      var _io__raw_value = new KaitaiStream(this._raw_value);
      this.value = new Powercat(_io__raw_value, this, this._root);
    }

    return PowercatStruct;
  })();

  var Header = Powercats.Header = (function() {
    function Header(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    Header.prototype._read = function() {
      this._unnamed0 = this._io.readBytes(20);
      this.s = this._io.readU4le();
      this._unnamed2 = this._io.readBytes(((Math.floor((this.s - 1) / 4) + 1) * 4));
    }

    return Header;
  })();

  return Powercats;
})();
return Powercats;
}));
