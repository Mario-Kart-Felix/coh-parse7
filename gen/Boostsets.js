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
    this._debug = {};

  }
  Boostsets.prototype._read = function() {
    this._debug.header = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.header = new Header(this._io, this, this._root);
    this.header._read();
    this._debug.header.end = this._io.pos;
    this._debug.next = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.next = this._io.readU4le();
    this._debug.next.end = this._io.pos;
    this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this._raw_value = this._io.readBytes(this.next);
    var _io__raw_value = new KaitaiStream(this._raw_value);
    this.value = new BoostsetArray(_io__raw_value, this, this._root);
    this.value._read();
    this._debug.value.end = this._io.pos;
  }

  var Bonus = Boostsets.Bonus = (function() {
    function Bonus(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    Bonus.prototype._read = function() {
      this._debug.name = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.name = new Pstring(this._io, this, this._root);
      this.name._read();
      this._debug.name.end = this._io.pos;
      this._debug.minBoosts = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.minBoosts = this._io.readU4le();
      this._debug.minBoosts.end = this._io.pos;
      this._debug.maxBoosts = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.maxBoosts = this._io.readU4le();
      this._debug.maxBoosts.end = this._io.pos;
      this._debug.requires = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.requires = new StringArray(this._io, this, this._root);
      this.requires._read();
      this._debug.requires.end = this._io.pos;
      this._debug.autoPowers = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.autoPowers = new PstringArray(this._io, this, this._root);
      this.autoPowers._read();
      this._debug.autoPowers.end = this._io.pos;
      this._debug.bonusPower = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.bonusPower = new Pstring(this._io, this, this._root);
      this.bonusPower._read();
      this._debug.bonusPower.end = this._io.pos;
    }

    return Bonus;
  })();

  var BonusStruct = Boostsets.BonusStruct = (function() {
    function BonusStruct(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    BonusStruct.prototype._read = function() {
      this._debug.len = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.len = this._io.readU4le();
      this._debug.len.end = this._io.pos;
      this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._raw_value = this._io.readBytes(this.len);
      var _io__raw_value = new KaitaiStream(this._raw_value);
      this.value = new Bonus(_io__raw_value, this, this._root);
      this.value._read();
      this._debug.value.end = this._io.pos;
    }

    return BonusStruct;
  })();

  var PstringArray = Boostsets.PstringArray = (function() {
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

  var BoostsetStruct = Boostsets.BoostsetStruct = (function() {
    function BoostsetStruct(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    BoostsetStruct.prototype._read = function() {
      this._debug.len = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.len = this._io.readU4le();
      this._debug.len.end = this._io.pos;
      this._debug.key = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.key = new String(this._io, this, this._root);
      this.key._read();
      this._debug.key.end = this._io.pos;
      this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._raw_value = this._io.readBytes((this.len - 4));
      var _io__raw_value = new KaitaiStream(this._raw_value);
      this.value = new Boostset(_io__raw_value, this, this._root);
      this.value._read();
      this._debug.value.end = this._io.pos;
    }

    return BoostsetStruct;
  })();

  var StringArray = Boostsets.StringArray = (function() {
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

  var String = Boostsets.String = (function() {
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

  var Pstring = Boostsets.Pstring = (function() {
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

  var BoostNest = Boostsets.BoostNest = (function() {
    function BoostNest(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    BoostNest.prototype._read = function() {
      this._debug.len = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.len = this._io.readU4le();
      this._debug.len.end = this._io.pos;
      this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._raw_value = this._io.readBytes(this.len);
      var _io__raw_value = new KaitaiStream(this._raw_value);
      this.value = new PstringArray(_io__raw_value, this, this._root);
      this.value._read();
      this._debug.value.end = this._io.pos;
    }

    return BoostNest;
  })();

  var BoostsetArray = Boostsets.BoostsetArray = (function() {
    function BoostsetArray(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    BoostsetArray.prototype._read = function() {
      this._debug.count = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.count = this._io.readU4le();
      this._debug.count.end = this._io.pos;
      this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.value = new Array(this.count);
      this._debug.value.arr = new Array(this.count);
      for (var i = 0; i < this.count; i++) {
        this._debug.value.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
        var _t_value = new BoostsetStruct(this._io, this, this._root);
        _t_value._read();
        this.value[i] = _t_value;
        this._debug.value.arr[i].end = this._io.pos;
      }
      this._debug.value.end = this._io.pos;
    }

    return BoostsetArray;
  })();

  var Boostset = Boostsets.Boostset = (function() {
    function Boostset(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    Boostset.prototype._read = function() {
      this._debug.display = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.display = new String(this._io, this, this._root);
      this.display._read();
      this._debug.display.end = this._io.pos;
      this._debug.group = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.group = new String(this._io, this, this._root);
      this.group._read();
      this._debug.group.end = this._io.pos;
      this._debug.conversions = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.conversions = new ConversionGroupArray(this._io, this, this._root);
      this.conversions._read();
      this._debug.conversions.end = this._io.pos;
      this._debug.powers = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.powers = new PstringArray(this._io, this, this._root);
      this.powers._read();
      this._debug.powers.end = this._io.pos;
      this._debug.boosts = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.boosts = new BoostArray(this._io, this, this._root);
      this.boosts._read();
      this._debug.boosts.end = this._io.pos;
      this._debug.bonuses = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.bonuses = new BonusArray(this._io, this, this._root);
      this.bonuses._read();
      this._debug.bonuses.end = this._io.pos;
      this._debug.minLevel = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.minLevel = this._io.readU4le();
      this._debug.minLevel.end = this._io.pos;
      this._debug.maxLevel = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.maxLevel = this._io.readU4le();
      this._debug.maxLevel.end = this._io.pos;
      this._debug.storeProduct = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.storeProduct = new String(this._io, this, this._root);
      this.storeProduct._read();
      this._debug.storeProduct.end = this._io.pos;
    }

    return Boostset;
  })();

  var ConversionGroupArray = Boostsets.ConversionGroupArray = (function() {
    function ConversionGroupArray(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    ConversionGroupArray.prototype._read = function() {
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

    return ConversionGroupArray;
  })();

  var Header = Boostsets.Header = (function() {
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

  var BoostArray = Boostsets.BoostArray = (function() {
    function BoostArray(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    BoostArray.prototype._read = function() {
      this._debug.count = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.count = this._io.readU4le();
      this._debug.count.end = this._io.pos;
      this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.value = new Array(this.count);
      this._debug.value.arr = new Array(this.count);
      for (var i = 0; i < this.count; i++) {
        this._debug.value.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
        var _t_value = new BoostNest(this._io, this, this._root);
        _t_value._read();
        this.value[i] = _t_value;
        this._debug.value.arr[i].end = this._io.pos;
      }
      this._debug.value.end = this._io.pos;
    }

    return BoostArray;
  })();

  var BonusArray = Boostsets.BonusArray = (function() {
    function BonusArray(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    BonusArray.prototype._read = function() {
      this._debug.count = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.count = this._io.readU4le();
      this._debug.count.end = this._io.pos;
      this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.value = new Array(this.count);
      this._debug.value.arr = new Array(this.count);
      for (var i = 0; i < this.count; i++) {
        this._debug.value.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
        var _t_value = new BonusStruct(this._io, this, this._root);
        _t_value._read();
        this.value[i] = _t_value;
        this._debug.value.arr[i].end = this._io.pos;
      }
      this._debug.value.end = this._io.pos;
    }

    return BonusArray;
  })();

  return Boostsets;
})();
return Boostsets;
}));
