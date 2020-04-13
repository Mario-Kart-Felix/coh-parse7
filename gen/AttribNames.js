// This is a generated file! Please edit source .ksy file and use kaitai-struct-compiler to rebuild

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['kaitai-struct/KaitaiStream'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('kaitai-struct/KaitaiStream'));
  } else {
    root.AttribNames = factory(root.KaitaiStream);
  }
}(this, function (KaitaiStream) {
var AttribNames = (function() {
  function AttribNames(_io, _parent, _root) {
    this._io = _io;
    this._parent = _parent;
    this._root = _root || this;
    this._debug = {};

  }
  AttribNames.prototype._read = function() {
    this._debug.header = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.header = new Header(this._io, this, this._root);
    this.header._read();
    this._debug.header.end = this._io.pos;
    this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.value = new Body(this._io, this, this._root);
    this.value._read();
    this._debug.value.end = this._io.pos;
  }

  var Body = AttribNames.Body = (function() {
    function Body(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    Body.prototype._read = function() {
      this._debug.damageAttribs = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.damageAttribs = new Attribarray(this._io, this, this._root);
      this.damageAttribs._read();
      this._debug.damageAttribs.end = this._io.pos;
      this._debug.defenseAttribs = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.defenseAttribs = new Attribarray(this._io, this, this._root);
      this.defenseAttribs._read();
      this._debug.defenseAttribs.end = this._io.pos;
      this._debug.boostAttribs = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.boostAttribs = new Attribarray(this._io, this, this._root);
      this.boostAttribs._read();
      this._debug.boostAttribs.end = this._io.pos;
      this._debug.groupAttribs = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.groupAttribs = new Attribarray(this._io, this, this._root);
      this.groupAttribs._read();
      this._debug.groupAttribs.end = this._io.pos;
      this._debug.modeAttribs = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.modeAttribs = new Attribarray(this._io, this, this._root);
      this.modeAttribs._read();
      this._debug.modeAttribs.end = this._io.pos;
      this._debug.elusivityAttribs = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.elusivityAttribs = new Attribarray(this._io, this, this._root);
      this.elusivityAttribs._read();
      this._debug.elusivityAttribs.end = this._io.pos;
      this._debug.stackAttribs = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.stackAttribs = new Attribarray(this._io, this, this._root);
      this.stackAttribs._read();
      this._debug.stackAttribs.end = this._io.pos;
    }

    return Body;
  })();

  var Attribname = AttribNames.Attribname = (function() {
    function Attribname(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    Attribname.prototype._read = function() {
      this._debug._unnamed0 = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._unnamed0 = this._io.readU4le();
      this._debug._unnamed0.end = this._io.pos;
      this._debug.name = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.name = new String(this._io, this, this._root);
      this.name._read();
      this._debug.name.end = this._io.pos;
      this._debug.display = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.display = new String(this._io, this, this._root);
      this.display._read();
      this._debug.display.end = this._io.pos;
      this._debug.icon = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.icon = new String(this._io, this, this._root);
      this.icon._read();
      this._debug.icon.end = this._io.pos;
    }

    return Attribname;
  })();

  var String = AttribNames.String = (function() {
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
        var _pos = this._io.pos;
        this._io.seek((this.ofs + 24));
        this._debug._m_value = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this._m_value = KaitaiStream.bytesToStr(this._io.readBytesTerm(0, false, true, true), "ascii");
        this._debug._m_value.end = this._io.pos;
        this._io.seek(_pos);
        return this._m_value;
      }
    });

    return String;
  })();

  var Attribarray = AttribNames.Attribarray = (function() {
    function Attribarray(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    Attribarray.prototype._read = function() {
      this._debug.count = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.count = this._io.readU4le();
      this._debug.count.end = this._io.pos;
      this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.value = new Array(this.count);
      this._debug.value.arr = new Array(this.count);
      for (var i = 0; i < this.count; i++) {
        this._debug.value.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
        var _t_value = new Attribname(this._io, this, this._root);
        _t_value._read();
        this.value[i] = _t_value;
        this._debug.value.arr[i].end = this._io.pos;
      }
      this._debug.value.end = this._io.pos;
    }

    return Attribarray;
  })();

  var Header = AttribNames.Header = (function() {
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
      this._unnamed2 = this._io.readBytes(this.s);
      this._debug._unnamed2.end = this._io.pos;
      this._debug._unnamed3 = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._unnamed3 = this._io.readBytes(4);
      this._debug._unnamed3.end = this._io.pos;
    }

    return Header;
  })();

  return AttribNames;
})();
return AttribNames;
}));
