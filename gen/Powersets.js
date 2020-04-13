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
    this._debug = {};

  }
  Powersets.prototype._read = function() {
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
    this.value = new PowersetArray(_io__raw_value, this, this._root);
    this.value._read();
    this._debug.value.end = this._io.pos;
  }

  var PowersetStruct = Powersets.PowersetStruct = (function() {
    function PowersetStruct(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    PowersetStruct.prototype._read = function() {
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
      this.value = new Powerset(_io__raw_value, this, this._root);
      this.value._read();
      this._debug.value.end = this._io.pos;
    }

    return PowersetStruct;
  })();

  var PstringArray = Powersets.PstringArray = (function() {
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

  var StringArray = Powersets.StringArray = (function() {
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

  var String = Powersets.String = (function() {
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

  var Pstring = Powersets.Pstring = (function() {
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

  var PowersetArray = Powersets.PowersetArray = (function() {
    function PowersetArray(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    PowersetArray.prototype._read = function() {
      this._debug.count = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.count = this._io.readU4le();
      this._debug.count.end = this._io.pos;
      this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.value = new Array(this.count);
      this._debug.value.arr = new Array(this.count);
      for (var i = 0; i < this.count; i++) {
        this._debug.value.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
        var _t_value = new PowersetStruct(this._io, this, this._root);
        _t_value._read();
        this.value[i] = _t_value;
        this._debug.value.arr[i].end = this._io.pos;
      }
      this._debug.value.end = this._io.pos;
    }

    return PowersetArray;
  })();

  var U4Array = Powersets.U4Array = (function() {
    function U4Array(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    U4Array.prototype._read = function() {
      this._debug.count = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.count = this._io.readU4le();
      this._debug.count.end = this._io.pos;
      this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.value = new Array(this.count);
      this._debug.value.arr = new Array(this.count);
      for (var i = 0; i < this.count; i++) {
        this._debug.value.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.value[i] = this._io.readU4le();
        this._debug.value.arr[i].end = this._io.pos;
      }
      this._debug.value.end = this._io.pos;
    }

    return U4Array;
  })();

  var Header = Powersets.Header = (function() {
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
      this._unnamed2 = this._io.readBytes((this.s + KaitaiStream.mod((4 - this.s), 4)));
      this._debug._unnamed2.end = this._io.pos;
    }

    return Header;
  })();

  var Powerset = Powersets.Powerset = (function() {
    function Powerset(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    Powerset.prototype._read = function() {
      this._debug._unnamed0 = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._unnamed0 = new String(this._io, this, this._root);
      this._unnamed0._read();
      this._debug._unnamed0.end = this._io.pos;
      this._debug.system = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.system = this._io.readU4le();
      this._debug.system.end = this._io.pos;
      this._debug.shared = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.shared = this._io.readU4le();
      this._debug.shared.end = this._io.pos;
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
      this._debug.icon = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.icon = new String(this._io, this, this._root);
      this.icon._read();
      this._debug.icon.end = this._io.pos;
      this._debug.costumeKeys = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.costumeKeys = new StringArray(this._io, this, this._root);
      this.costumeKeys._read();
      this._debug.costumeKeys.end = this._io.pos;
      this._debug.costumeParts = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.costumeParts = new StringArray(this._io, this, this._root);
      this.costumeParts._read();
      this._debug.costumeParts.end = this._io.pos;
      this._debug.accountRequires = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.accountRequires = new String(this._io, this, this._root);
      this.accountRequires._read();
      this._debug.accountRequires.end = this._io.pos;
      this._debug.accountTooltip = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.accountTooltip = new String(this._io, this, this._root);
      this.accountTooltip._read();
      this._debug.accountTooltip.end = this._io.pos;
      this._debug.accountProduct = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.accountProduct = new String(this._io, this, this._root);
      this.accountProduct._read();
      this._debug.accountProduct.end = this._io.pos;
      this._debug.buyRequires = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.buyRequires = new StringArray(this._io, this, this._root);
      this.buyRequires._read();
      this._debug.buyRequires.end = this._io.pos;
      this._debug.buyRequiresFailed = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.buyRequiresFailed = new String(this._io, this, this._root);
      this.buyRequiresFailed._read();
      this._debug.buyRequiresFailed.end = this._io.pos;
      this._debug.showInInventory = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.showInInventory = this._io.readU4le();
      this._debug.showInInventory.end = this._io.pos;
      this._debug.showInManage = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.showInManage = this._io.readU4le();
      this._debug.showInManage.end = this._io.pos;
      this._debug.showInInfo = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.showInInfo = this._io.readU4le();
      this._debug.showInInfo.end = this._io.pos;
      this._debug.specializeAt = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.specializeAt = this._io.readU4le();
      this._debug.specializeAt.end = this._io.pos;
      this._debug.specializeRequires = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.specializeRequires = new StringArray(this._io, this, this._root);
      this.specializeRequires._read();
      this._debug.specializeRequires.end = this._io.pos;
      this._debug.powers = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.powers = new StringArray(this._io, this, this._root);
      this.powers._read();
      this._debug.powers.end = this._io.pos;
      this._debug.available = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.available = new U4Array(this._io, this, this._root);
      this.available._read();
      this._debug.available.end = this._io.pos;
      this._debug.aimaxLevel = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.aimaxLevel = new U4Array(this._io, this, this._root);
      this.aimaxLevel._read();
      this._debug.aimaxLevel.end = this._io.pos;
      this._debug.aiminRankCon = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.aiminRankCon = new U4Array(this._io, this, this._root);
      this.aiminRankCon._read();
      this._debug.aiminRankCon.end = this._io.pos;
      this._debug.aimaxRankCon = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.aimaxRankCon = new U4Array(this._io, this, this._root);
      this.aimaxRankCon._read();
      this._debug.aimaxRankCon.end = this._io.pos;
      this._debug.minDifficulty = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.minDifficulty = new U4Array(this._io, this, this._root);
      this.minDifficulty._read();
      this._debug.minDifficulty.end = this._io.pos;
      this._debug.maxDifficulty = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.maxDifficulty = new U4Array(this._io, this, this._root);
      this.maxDifficulty._read();
      this._debug.maxDifficulty.end = this._io.pos;
      this._debug.forceLevelBought = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.forceLevelBought = this._io.readU4le();
      this._debug.forceLevelBought.end = this._io.pos;
    }

    /**
     * name
     */

    return Powerset;
  })();

  return Powersets;
})();
return Powersets;
}));
