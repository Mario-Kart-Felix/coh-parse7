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

  var VarId = Messages.VarId = (function() {
    function VarId(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    VarId.prototype._read = function() {
      this.index = this._io.readU4le();
    }
    Object.defineProperty(VarId.prototype, 'value', {
      get: function() {
        if (this._m_value !== undefined)
          return this._m_value;
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

  var StringId = Messages.StringId = (function() {
    function StringId(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    StringId.prototype._read = function() {
      this.index = this._io.readU4le();
    }
    Object.defineProperty(StringId.prototype, 'value', {
      get: function() {
        if (this._m_value !== undefined)
          return this._m_value;
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
        this.value[i] = new VarId(this._io, this, this._root);
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
      this.key = new U4string(this._io, this, this._root);
      this.value = new StringId(this._io, this, this._root);
      this.help = new StringId(this._io, this, this._root);
      this.vars = new VarArray(this._io, this, this._root);
    }

    return Item;
  })();

  return Messages;
})();
return Messages;
}));
