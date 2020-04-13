// This is a generated file! Please edit source .ksy file and use kaitai-struct-compiler to rebuild

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['kaitai-struct/KaitaiStream'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('kaitai-struct/KaitaiStream'));
  } else {
    root.Messages = factory(root.KaitaiStream);
  }
}(this, function (KaitaiStream) {
var Messages = (function() {
  function Messages(_io, _parent, _root) {
    this._io = _io;
    this._parent = _parent;
    this._root = _root || this;
    this._debug = {};

  }
  Messages.prototype._read = function() {
    this._debug._unnamed0 = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this._unnamed0 = this._io.readU4le();
    this._debug._unnamed0.end = this._io.pos;
    this._debug.strings = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.strings = new Strings(this._io, this, this._root);
    this.strings._read();
    this._debug.strings.end = this._io.pos;
    this._debug.vars = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.vars = new Strings(this._io, this, this._root);
    this.vars._read();
    this._debug.vars.end = this._io.pos;
    this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.value = new Stash(this._io, this, this._root);
    this.value._read();
    this._debug.value.end = this._io.pos;
  }

  var Stash = Messages.Stash = (function() {
    function Stash(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    Stash.prototype._read = function() {
      this._debug.count = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.count = this._io.readU4le();
      this._debug.count.end = this._io.pos;
      this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.value = new Array(this.count);
      this._debug.value.arr = new Array(this.count);
      for (var i = 0; i < this.count; i++) {
        this._debug.value.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
        var _t_value = new Item(this._io, this, this._root);
        _t_value._read();
        this.value[i] = _t_value;
        this._debug.value.arr[i].end = this._io.pos;
      }
      this._debug.value.end = this._io.pos;
    }

    return Stash;
  })();

  var String = Messages.String = (function() {
    function String(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    String.prototype._read = function() {
      this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.value = [];
      this._debug.value.arr = [];
      var i = 0;
      while (!this._io.isEof()) {
        this._debug.value.arr[this.value.length] = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.value.push(KaitaiStream.bytesToStr(this._io.readBytesTerm(0, false, true, true), "ascii"));
        this._debug.value.arr[this.value.length - 1].end = this._io.pos;
        i++;
      }
      this._debug.value.end = this._io.pos;
    }

    return String;
  })();

  var VarId = Messages.VarId = (function() {
    function VarId(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    VarId.prototype._read = function() {
      this._debug.index = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.index = this._io.readU4le();
      this._debug.index.end = this._io.pos;
    }
    Object.defineProperty(VarId.prototype, 'value', {
      get: function() {
        if (this._m_value !== undefined)
          return this._m_value;
        this._debug._m_value = {  };
        this._m_value = this._root.vars.value.value[this.index];
        return this._m_value;
      }
    });

    return VarId;
  })();

  var Strings = Messages.Strings = (function() {
    function Strings(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    Strings.prototype._read = function() {
      this._debug.count = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.count = this._io.readU4le();
      this._debug.count.end = this._io.pos;
      this._debug.len = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.len = this._io.readU4le();
      this._debug.len.end = this._io.pos;
      this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._raw_value = this._io.readBytes(this.len);
      var _io__raw_value = new KaitaiStream(this._raw_value);
      this.value = new String(_io__raw_value, this, this._root);
      this.value._read();
      this._debug.value.end = this._io.pos;
    }

    return Strings;
  })();

  var StringId = Messages.StringId = (function() {
    function StringId(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    StringId.prototype._read = function() {
      this._debug.index = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.index = this._io.readU4le();
      this._debug.index.end = this._io.pos;
    }
    Object.defineProperty(StringId.prototype, 'value', {
      get: function() {
        if (this._m_value !== undefined)
          return this._m_value;
        this._debug._m_value = {  };
        this._m_value = this._root.strings.value.value[this.index];
        return this._m_value;
      }
    });

    return StringId;
  })();

  var U4string = Messages.U4string = (function() {
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
      this.value = KaitaiStream.bytesToStr(this._io.readBytes(this.len), "ascii");
      this._debug.value.end = this._io.pos;
    }

    return U4string;
  })();

  var VarArray = Messages.VarArray = (function() {
    function VarArray(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    VarArray.prototype._read = function() {
      this._debug.count = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.count = this._io.readU4le();
      this._debug.count.end = this._io.pos;
      this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.value = new Array(this.count);
      this._debug.value.arr = new Array(this.count);
      for (var i = 0; i < this.count; i++) {
        this._debug.value.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
        var _t_value = new VarId(this._io, this, this._root);
        _t_value._read();
        this.value[i] = _t_value;
        this._debug.value.arr[i].end = this._io.pos;
      }
      this._debug.value.end = this._io.pos;
    }

    return VarArray;
  })();

  var Item = Messages.Item = (function() {
    function Item(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    Item.prototype._read = function() {
      this._debug.key = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.key = new U4string(this._io, this, this._root);
      this.key._read();
      this._debug.key.end = this._io.pos;
      this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.value = new StringId(this._io, this, this._root);
      this.value._read();
      this._debug.value.end = this._io.pos;
      this._debug.help = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.help = new StringId(this._io, this, this._root);
      this.help._read();
      this._debug.help.end = this._io.pos;
      this._debug.vars = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.vars = new VarArray(this._io, this, this._root);
      this.vars._read();
      this._debug.vars.end = this._io.pos;
    }

    return Item;
  })();

  return Messages;
})();
return Messages;
}));
