// This is a generated file! Please edit source .ksy file and use kaitai-struct-compiler to rebuild

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['kaitai-struct/KaitaiStream'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('kaitai-struct/KaitaiStream'));
  } else {
    root.Boostsets = factory(root.KaitaiStream);
  }
}(this, function (KaitaiStream) {
var Boostsets = (function() {
  function Boostsets(_io, _parent, _root) {
    this._io = _io;
    this._parent = _parent;
    this._root = _root || this;

    this._read();
  }
  Boostsets.prototype._read = function() {
    this.header = new Header(this._io, this, this._root);
    this.next = this._io.readU4le();
    this._raw_value = this._io.readBytes(this.next);
    var _io__raw_value = new KaitaiStream(this._raw_value);
    this.value = new BoostsetArray(_io__raw_value, this, this._root);
  }

  var Bonus = Boostsets.Bonus = (function() {
    function Bonus(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    Bonus.prototype._read = function() {
      this.name = new Pstring(this._io, this, this._root);
      this.minBoosts = this._io.readU4le();
      this.maxBoosts = this._io.readU4le();
      this.requires = new StringArray(this._io, this, this._root);
      this.autoPowers = new PstringArray(this._io, this, this._root);
      this.bonusPower = new Pstring(this._io, this, this._root);
    }

    return Bonus;
  })();

  var BonusStruct = Boostsets.BonusStruct = (function() {
    function BonusStruct(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    BonusStruct.prototype._read = function() {
      this.len = this._io.readU4le();
      this._raw_value = this._io.readBytes(this.len);
      var _io__raw_value = new KaitaiStream(this._raw_value);
      this.value = new Bonus(_io__raw_value, this, this._root);
    }

    return BonusStruct;
  })();

  var PstringArray = Boostsets.PstringArray = (function() {
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

  var BoostsetStruct = Boostsets.BoostsetStruct = (function() {
    function BoostsetStruct(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    BoostsetStruct.prototype._read = function() {
      this.len = this._io.readU4le();
      this._raw_value = this._io.readBytes(this.len);
      var _io__raw_value = new KaitaiStream(this._raw_value);
      this.value = new Boostset(_io__raw_value, this, this._root);
    }

    return BoostsetStruct;
  })();

  var StringArray = Boostsets.StringArray = (function() {
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

  var String = Boostsets.String = (function() {
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

  var Pstring = Boostsets.Pstring = (function() {
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

  var BoostNest = Boostsets.BoostNest = (function() {
    function BoostNest(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    BoostNest.prototype._read = function() {
      this.len = this._io.readU4le();
      this._raw_value = this._io.readBytes(this.len);
      var _io__raw_value = new KaitaiStream(this._raw_value);
      this.value = new PstringArray(_io__raw_value, this, this._root);
    }

    return BoostNest;
  })();

  var BoostsetArray = Boostsets.BoostsetArray = (function() {
    function BoostsetArray(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    BoostsetArray.prototype._read = function() {
      this.count = this._io.readU4le();
      this.value = new Array(this.count);
      for (var i = 0; i < this.count; i++) {
        this.value[i] = new BoostsetStruct(this._io, this, this._root);
      }
    }

    return BoostsetArray;
  })();

  var Boostset = Boostsets.Boostset = (function() {
    function Boostset(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    Boostset.prototype._read = function() {
      this.name = new String(this._io, this, this._root);
      this.display = new String(this._io, this, this._root);
      this.group = new String(this._io, this, this._root);
      this.conversions = new ConversionGroupArray(this._io, this, this._root);
      this.powers = new PstringArray(this._io, this, this._root);
      this.boosts = new BoostArray(this._io, this, this._root);
      this.bonuses = new BonusArray(this._io, this, this._root);
      this.minLevel = this._io.readU4le();
      this.maxLevel = this._io.readU4le();
      this.storeProduct = new String(this._io, this, this._root);
    }

    return Boostset;
  })();

  var ConversionGroupArray = Boostsets.ConversionGroupArray = (function() {
    function ConversionGroupArray(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    ConversionGroupArray.prototype._read = function() {
      this.count = this._io.readU4le();
      this.value = new Array(this.count);
      for (var i = 0; i < this.count; i++) {
        this.value[i] = new String(this._io, this, this._root);
      }
    }

    return ConversionGroupArray;
  })();

  var Header = Boostsets.Header = (function() {
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

  var BoostArray = Boostsets.BoostArray = (function() {
    function BoostArray(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    BoostArray.prototype._read = function() {
      this.count = this._io.readU4le();
      this.value = new Array(this.count);
      for (var i = 0; i < this.count; i++) {
        this.value[i] = new BoostNest(this._io, this, this._root);
      }
    }

    return BoostArray;
  })();

  var BonusArray = Boostsets.BonusArray = (function() {
    function BonusArray(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    BonusArray.prototype._read = function() {
      this.count = this._io.readU4le();
      this.value = new Array(this.count);
      for (var i = 0; i < this.count; i++) {
        this.value[i] = new BonusStruct(this._io, this, this._root);
      }
    }

    return BonusArray;
  })();

  return Boostsets;
})();
return Boostsets;
}));
