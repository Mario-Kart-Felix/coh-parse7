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

    this._read();
  }
  AttribNames.prototype._read = function() {
    this.header = new Header(this._io, this, this._root);
    this.value = new Body(this._io, this, this._root);
  }

  var Body = AttribNames.Body = (function() {
    function Body(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    Body.prototype._read = function() {
      this.damageAttribs = new Attribarray(this._io, this, this._root);
      this.defenseAttribs = new Attribarray(this._io, this, this._root);
      this.boostAttribs = new Attribarray(this._io, this, this._root);
      this.groupAttribs = new Attribarray(this._io, this, this._root);
      this.modeAttribs = new Attribarray(this._io, this, this._root);
      this.elusivityAttribs = new Attribarray(this._io, this, this._root);
      this.stackAttribs = new Attribarray(this._io, this, this._root);
    }

    return Body;
  })();

  var Attribname = AttribNames.Attribname = (function() {
    function Attribname(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    Attribname.prototype._read = function() {
      this._unnamed0 = this._io.readU4le();
      this.name = new String(this._io, this, this._root);
      this.display = new String(this._io, this, this._root);
      this.icon = new String(this._io, this, this._root);
    }

    return Attribname;
  })();

  var String = AttribNames.String = (function() {
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
        var _pos = this._io.pos;
        this._io.seek((this.ofs + 24));
        this._m_value = KaitaiStream.bytesToStr(this._io.readBytesTerm(0, false, true, true), "ascii");
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

      this._read();
    }
    Attribarray.prototype._read = function() {
      this.count = this._io.readU4le();
      this.value = new Array(this.count);
      for (var i = 0; i < this.count; i++) {
        this.value[i] = new Attribname(this._io, this, this._root);
      }
    }

    return Attribarray;
  })();

  var Header = AttribNames.Header = (function() {
    function Header(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    Header.prototype._read = function() {
      this._unnamed0 = this._io.readBytes(20);
      this.s = this._io.readU4le();
      this._unnamed2 = this._io.readBytes(this.s);
      this._unnamed3 = this._io.readBytes(4);
    }

    return Header;
  })();

  return AttribNames;
})();
return AttribNames;
}));
