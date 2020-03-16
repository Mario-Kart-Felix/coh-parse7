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

    this._read();
  }
  Messages.prototype._read = function() {
    this._unnamed0 = this._io.readU4le();
    this.strings = new Strings(this._io, this, this._root);
    this.vars = new Strings(this._io, this, this._root);
    this.stash = new Stash(this._io, this, this._root);
  }

  var Stash = Messages.Stash = (function() {
    function Stash(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    Stash.prototype._read = function() {
      this.count = this._io.readU4le();
      this.value = new Array(this.count);
      for (var i = 0; i < this.count; i++) {
        this.value[i] = new Item(this._io, this, this._root);
      }
    }

    return Stash;
  })();

  var String = Messages.String = (function() {
    function String(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    String.prototype._read = function() {
      this.value = [];
      var i = 0;
      while (!this._io.isEof()) {
        this.value.push(KaitaiStream.bytesToStr(this._io.readBytesTerm(0, false, true, true), "ascii"));
        i++;
      }
    }

    return String;
  })();

  var Strings = Messages.Strings = (function() {
    function Strings(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    Strings.prototype._read = function() {
      this.count = this._io.readU4le();
      this.len = this._io.readU4le();
      this._raw_value = this._io.readBytes(this.len);
      var _io__raw_value = new KaitaiStream(this._raw_value);
      this.value = new String(_io__raw_value, this, this._root);
    }

    return Strings;
  })();

  var U4string = Messages.U4string = (function() {
    function U4string(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    U4string.prototype._read = function() {
      this.len = this._io.readU4le();
      this.value = KaitaiStream.bytesToStr(this._io.readBytes(this.len), "ascii");
    }

    return U4string;
  })();

  var VarArray = Messages.VarArray = (function() {
    function VarArray(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    VarArray.prototype._read = function() {
      this.count = this._io.readU4le();
      this.value = new Array(this.count);
      for (var i = 0; i < this.count; i++) {
        this.value[i] = this._io.readU4le();
      }
    }

    return VarArray;
  })();

  var Item = Messages.Item = (function() {
    function Item(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    Item.prototype._read = function() {
      this.id = new U4string(this._io, this, this._root);
      this.message = this._io.readU4le();
      this.help = this._io.readU4le();
      this.vars = new VarArray(this._io, this, this._root);
    }

    return Item;
  })();

  return Messages;
})();
return Messages;
}));
