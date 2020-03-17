// This is a generated file! Please edit source .ksy file and use kaitai-struct-compiler to rebuild

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['kaitai-struct/KaitaiStream'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('kaitai-struct/KaitaiStream'));
  } else {
    root.Powersets = factory(root.KaitaiStream);
  }
}(this, function (KaitaiStream) {
var Powersets = (function() {
  function Powersets(_io, _parent, _root) {
    this._io = _io;
    this._parent = _parent;
    this._root = _root || this;

    this._read();
  }
  Powersets.prototype._read = function() {
    this.header = new Header(this._io, this, this._root);
    this.len = this._io.readU4le();
    this._raw_value = this._io.readBytes(this.len);
    var _io__raw_value = new KaitaiStream(this._raw_value);
    this.value = new PowersetArray(_io__raw_value, this, this._root);
  }

  var PowersetStruct = Powersets.PowersetStruct = (function() {
    function PowersetStruct(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    PowersetStruct.prototype._read = function() {
      this.len = this._io.readU4le();
      this._raw_value = this._io.readBytes(this.len);
      var _io__raw_value = new KaitaiStream(this._raw_value);
      this.value = new Powerset(_io__raw_value, this, this._root);
    }

    return PowersetStruct;
  })();

  var PstringArray = Powersets.PstringArray = (function() {
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

  var StringArray = Powersets.StringArray = (function() {
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

  var String = Powersets.String = (function() {
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

  var Pstring = Powersets.Pstring = (function() {
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

  var PowersetArray = Powersets.PowersetArray = (function() {
    function PowersetArray(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    PowersetArray.prototype._read = function() {
      this.count = this._io.readU4le();
      this.value = new Array(this.count);
      for (var i = 0; i < this.count; i++) {
        this.value[i] = new PowersetStruct(this._io, this, this._root);
      }
    }

    return PowersetArray;
  })();

  var U4Array = Powersets.U4Array = (function() {
    function U4Array(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    U4Array.prototype._read = function() {
      this.count = this._io.readU4le();
      this.value = new Array(this.count);
      for (var i = 0; i < this.count; i++) {
        this.value[i] = this._io.readU4le();
      }
    }

    return U4Array;
  })();

  var Header = Powersets.Header = (function() {
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

  var Powerset = Powersets.Powerset = (function() {
    function Powerset(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    Powerset.prototype._read = function() {
      this.source = new String(this._io, this, this._root);
      this.fullName = new String(this._io, this, this._root);
      this.name = new String(this._io, this, this._root);
      this.system = this._io.readU4le();
      this.shared = this._io.readU4le();
      this.display = new String(this._io, this, this._root);
      this.help = new String(this._io, this, this._root);
      this.shortHelp = new String(this._io, this, this._root);
      this.icon = new String(this._io, this, this._root);
      this.costumeKeys = new StringArray(this._io, this, this._root);
      this.costumeParts = new StringArray(this._io, this, this._root);
      this.accountRequires = new String(this._io, this, this._root);
      this.accountTooltip = new String(this._io, this, this._root);
      this.accountProduct = new String(this._io, this, this._root);
      this.buyRequires = new StringArray(this._io, this, this._root);
      this.buyRequiresFailed = new String(this._io, this, this._root);
      this.showInInventory = this._io.readU4le();
      this.showInManage = this._io.readU4le();
      this.showInInfo = this._io.readU4le();
      this.specializeAt = this._io.readU4le();
      this.specializeRequires = new StringArray(this._io, this, this._root);
      this.powers = new StringArray(this._io, this, this._root);
      this.available = new U4Array(this._io, this, this._root);
      this.aimaxLevel = new U4Array(this._io, this, this._root);
      this.aiminRankCon = new U4Array(this._io, this, this._root);
      this.aimaxRankCon = new U4Array(this._io, this, this._root);
      this.minDifficulty = new U4Array(this._io, this, this._root);
      this.maxDifficulty = new U4Array(this._io, this, this._root);
      this.forceLevelBought = this._io.readU4le();
    }

    return Powerset;
  })();

  return Powersets;
})();
return Powersets;
}));
