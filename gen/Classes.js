// This is a generated file! Please edit source .ksy file and use kaitai-struct-compiler to rebuild

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['kaitai-struct/KaitaiStream'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('kaitai-struct/KaitaiStream'));
  } else {
    root.Classes = factory(root.KaitaiStream);
  }
}(this, function (KaitaiStream) {
var Classes = (function() {
  function Classes(_io, _parent, _root) {
    this._io = _io;
    this._parent = _parent;
    this._root = _root || this;

    this._read();
  }
  Classes.prototype._read = function() {
    this.header = new Header(this._io, this, this._root);
    this.len = this._io.readU4le();
    this.value = new ClassesArray(this._io, this, this._root);
  }

  var NamedTable = Classes.NamedTable = (function() {
    function NamedTable(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    NamedTable.prototype._read = function() {
      this.key = new String(this._io, this, this._root);
      this.value = new F4array(this._io, this, this._root, 1);
    }

    return NamedTable;
  })();

  var PstringArray = Classes.PstringArray = (function() {
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

  var StringArray = Classes.StringArray = (function() {
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

  var String = Classes.String = (function() {
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

  var Attributes = Classes.Attributes = (function() {
    function Attributes(_io, _parent, _root, zIsArray) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this.zIsArray = zIsArray;

      this._read();
    }
    Attributes.prototype._read = function() {
      this.damage = new Array(20);
      for (var i = 0; i < 20; i++) {
        this.damage[i] = new F4array(this._io, this, this._root, this.zIsArray);
      }
      this.hp = new F4array(this._io, this, this._root, this.zIsArray);
      this.absorb = new F4array(this._io, this, this._root, this.zIsArray);
      this.endurance = new F4array(this._io, this, this._root, this.zIsArray);
      this.insight = new F4array(this._io, this, this._root, this.zIsArray);
      this.rage = new F4array(this._io, this, this._root, this.zIsArray);
      this.toHit = new F4array(this._io, this, this._root, this.zIsArray);
      this.defense = new Array(20);
      for (var i = 0; i < 20; i++) {
        this.defense[i] = new F4array(this._io, this, this._root, this.zIsArray);
      }
      this.defenseBase = new F4array(this._io, this, this._root, this.zIsArray);
      this.speedRunning = new F4array(this._io, this, this._root, this.zIsArray);
      this.speedFlying = new F4array(this._io, this, this._root, this.zIsArray);
      this.speedSwimming = new F4array(this._io, this, this._root, this.zIsArray);
      this.speedJumping = new F4array(this._io, this, this._root, this.zIsArray);
      this.jumpHeight = new F4array(this._io, this, this._root, this.zIsArray);
      this.movementControl = new F4array(this._io, this, this._root, this.zIsArray);
      this.movementFriction = new F4array(this._io, this, this._root, this.zIsArray);
      this.stealth = new F4array(this._io, this, this._root, this.zIsArray);
      this.stealthRadius = new F4array(this._io, this, this._root, this.zIsArray);
      this.stealthRadiusPlayer = new F4array(this._io, this, this._root, this.zIsArray);
      this.perceptionRadius = new F4array(this._io, this, this._root, this.zIsArray);
      this.regeneration = new F4array(this._io, this, this._root, this.zIsArray);
      this.recovery = new F4array(this._io, this, this._root, this.zIsArray);
      this.insightRecovery = new F4array(this._io, this, this._root, this.zIsArray);
      this.threatLevel = new F4array(this._io, this, this._root, this.zIsArray);
      this.taunt = new F4array(this._io, this, this._root, this.zIsArray);
      this.placate = new F4array(this._io, this, this._root, this.zIsArray);
      this.confused = new F4array(this._io, this, this._root, this.zIsArray);
      this.afraid = new F4array(this._io, this, this._root, this.zIsArray);
      this.terrorized = new F4array(this._io, this, this._root, this.zIsArray);
      this.held = new F4array(this._io, this, this._root, this.zIsArray);
      this.immobilized = new F4array(this._io, this, this._root, this.zIsArray);
      this.stunned = new F4array(this._io, this, this._root, this.zIsArray);
      this.sleep = new F4array(this._io, this, this._root, this.zIsArray);
      this.fly = new F4array(this._io, this, this._root, this.zIsArray);
      this.jumppack = new F4array(this._io, this, this._root, this.zIsArray);
      this.teleport = new F4array(this._io, this, this._root, this.zIsArray);
      this.untouchable = new F4array(this._io, this, this._root, this.zIsArray);
      this.intangible = new F4array(this._io, this, this._root, this.zIsArray);
      this.onlyAffectsSelf = new F4array(this._io, this, this._root, this.zIsArray);
      this.experienceGain = new F4array(this._io, this, this._root, this.zIsArray);
      this.influenceGain = new F4array(this._io, this, this._root, this.zIsArray);
      this.prestigeGain = new F4array(this._io, this, this._root, this.zIsArray);
      this.nullBool = new F4array(this._io, this, this._root, this.zIsArray);
      this.knockup = new F4array(this._io, this, this._root, this.zIsArray);
      this.knockback = new F4array(this._io, this, this._root, this.zIsArray);
      this.repel = new F4array(this._io, this, this._root, this.zIsArray);
      this.accuracy = new F4array(this._io, this, this._root, this.zIsArray);
      this.radius = new F4array(this._io, this, this._root, this.zIsArray);
      this.arc = new F4array(this._io, this, this._root, this.zIsArray);
      this.range = new F4array(this._io, this, this._root, this.zIsArray);
      this.timeToActivate = new F4array(this._io, this, this._root, this.zIsArray);
      this.rechargeTime = new F4array(this._io, this, this._root, this.zIsArray);
      this.interruptTime = new F4array(this._io, this, this._root, this.zIsArray);
      this.enduranceDiscount = new F4array(this._io, this, this._root, this.zIsArray);
      this.insightDiscount = new F4array(this._io, this, this._root, this.zIsArray);
      this.meter = new F4array(this._io, this, this._root, this.zIsArray);
      this.elusivity00 = new Array(20);
      for (var i = 0; i < 20; i++) {
        this.elusivity00[i] = new F4array(this._io, this, this._root, this.zIsArray);
      }
      this.elusivityBase = new F4array(this._io, this, this._root, this.zIsArray);
    }

    return Attributes;
  })();

  var Pstring = Classes.Pstring = (function() {
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

  var AttributesArray = Classes.AttributesArray = (function() {
    function AttributesArray(_io, _parent, _root, zIsArray) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this.zIsArray = zIsArray;

      this._read();
    }
    AttributesArray.prototype._read = function() {
      this.count = this._io.readU4le();
      this.value = new Array(this.count);
      for (var i = 0; i < this.count; i++) {
        this.value[i] = new AttributesStruct(this._io, this, this._root, this.zIsArray);
      }
    }

    return AttributesArray;
  })();

  var U4Array = Classes.U4Array = (function() {
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

  var F4array = Classes.F4array = (function() {
    function F4array(_io, _parent, _root, zIsArray) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this.zIsArray = zIsArray;

      this._read();
    }
    F4array.prototype._read = function() {
      if (this.zIsArray == 1) {
        this.count = this._io.readU4le();
      }
      if (this.zIsArray == 1) {
        this.value = new Array(this.count);
        for (var i = 0; i < this.count; i++) {
          this.value[i] = this._io.readF4le();
        }
      }
      if (this.zIsArray == 0) {
        this.val = this._io.readF4le();
      }
    }

    return F4array;
  })();

  var Header = Classes.Header = (function() {
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

  var AttributesStruct = Classes.AttributesStruct = (function() {
    function AttributesStruct(_io, _parent, _root, zIsArray) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this.zIsArray = zIsArray;

      this._read();
    }
    AttributesStruct.prototype._read = function() {
      this.len = this._io.readU4le();
      this._raw_value = this._io.readBytes(this.len);
      var _io__raw_value = new KaitaiStream(this._raw_value);
      this.value = new Attributes(_io__raw_value, this, this._root, this.zIsArray);
    }

    return AttributesStruct;
  })();

  var NamedTableArray = Classes.NamedTableArray = (function() {
    function NamedTableArray(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    NamedTableArray.prototype._read = function() {
      this.count = this._io.readU4le();
      this.value = new Array(this.count);
      for (var i = 0; i < this.count; i++) {
        this.value[i] = new NamedTableStruct(this._io, this, this._root);
      }
    }

    return NamedTableArray;
  })();

  var ClassesArray = Classes.ClassesArray = (function() {
    function ClassesArray(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    ClassesArray.prototype._read = function() {
      this.count = this._io.readU4le();
      this.value = new Array(this.count);
      for (var i = 0; i < this.count; i++) {
        this.value[i] = new ClassesStruct(this._io, this, this._root);
      }
    }

    return ClassesArray;
  })();

  var NamedTableStruct = Classes.NamedTableStruct = (function() {
    function NamedTableStruct(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    NamedTableStruct.prototype._read = function() {
      this.len = this._io.readU4le();
      this._raw_value = this._io.readBytes(this.len);
      var _io__raw_value = new KaitaiStream(this._raw_value);
      this.value = new NamedTable(_io__raw_value, this, this._root);
    }

    return NamedTableStruct;
  })();

  var ClassesItem = Classes.ClassesItem = (function() {
    function ClassesItem(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    ClassesItem.prototype._read = function() {
      this.name = new String(this._io, this, this._root);
      this.display = new String(this._io, this, this._root);
      this.help = new String(this._io, this, this._root);
      this.origins = new StringArray(this._io, this, this._root);
      this.restrictions = new StringArray(this._io, this, this._root);
      this.store = new String(this._io, this, this._root);
      this.locked = new String(this._io, this, this._root);
      this.product = new String(this._io, this, this._root);
      this.reduction = new String(this._io, this, this._root);
      this.reduceAsAV = this._io.readU4le();
      this.respecs = new U4Array(this._io, this, this._root);
      this.shortHelp = new String(this._io, this, this._root);
      this.icon = new String(this._io, this, this._root);
      this.primary = new String(this._io, this, this._root);
      this.secondary = new String(this._io, this, this._root);
      this.pool = new String(this._io, this, this._root);
      this.epic = new String(this._io, this, this._root);
      this.attribMin = new AttributesArray(this._io, this, this._root, 0);
      this.attribBase = new AttributesArray(this._io, this, this._root, 0);
      this.strengthMin = new AttributesArray(this._io, this, this._root, 0);
      this.resistanceMin = new AttributesArray(this._io, this, this._root, 0);
      this.attribDiminStrIn = new AttributesArray(this._io, this, this._root, 0);
      this.attribDiminStrOut = new AttributesArray(this._io, this, this._root, 0);
      this.attribDiminCurIn = new AttributesArray(this._io, this, this._root, 0);
      this.attribDiminCurOut = new AttributesArray(this._io, this, this._root, 0);
      this.attribDiminResIn = new AttributesArray(this._io, this, this._root, 0);
      this.attribDiminResOut = new AttributesArray(this._io, this, this._root, 0);
      this.attribMaxTable = new AttributesArray(this._io, this, this._root, 1);
      this.attribMaxMaxTable = new AttributesArray(this._io, this, this._root, 1);
      this.strengthMaxTable = new AttributesArray(this._io, this, this._root, 1);
      this.resistanceMaxTable = new AttributesArray(this._io, this, this._root, 1);
      this.modTable = new NamedTableArray(this._io, this, this._root);
      this.connectHPAndStatus = this._io.readU4le();
      this.offDefiantHPAttrib = this._io.readU4le();
      this.defiantScale = this._io.readF4le();
    }

    return ClassesItem;
  })();

  var ClassesStruct = Classes.ClassesStruct = (function() {
    function ClassesStruct(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    ClassesStruct.prototype._read = function() {
      this.len = this._io.readU4le();
      this._raw_value = this._io.readBytes(this.len);
      var _io__raw_value = new KaitaiStream(this._raw_value);
      this.value = new ClassesItem(_io__raw_value, this, this._root);
    }

    return ClassesStruct;
  })();

  return Classes;
})();
return Classes;
}));
