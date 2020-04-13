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
    this._debug = {};

  }
  Classes.prototype._read = function() {
    this._debug.header = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.header = new Header(this._io, this, this._root);
    this.header._read();
    this._debug.header.end = this._io.pos;
    this._debug.len = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.len = this._io.readU4le();
    this._debug.len.end = this._io.pos;
    this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
    this.value = new ClassesArray(this._io, this, this._root);
    this.value._read();
    this._debug.value.end = this._io.pos;
  }

  var NamedTable = Classes.NamedTable = (function() {
    function NamedTable(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    NamedTable.prototype._read = function() {
      this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.value = new F4array(this._io, this, this._root, 1);
      this.value._read();
      this._debug.value.end = this._io.pos;
    }

    return NamedTable;
  })();

  var PstringArray = Classes.PstringArray = (function() {
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

  var StringArray = Classes.StringArray = (function() {
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

  var String = Classes.String = (function() {
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

  var Attributes = Classes.Attributes = (function() {
    function Attributes(_io, _parent, _root, zIsArray) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this.zIsArray = zIsArray;
      this._debug = {};

    }
    Attributes.prototype._read = function() {
      this._debug.damage = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.damage = new Array(20);
      this._debug.damage.arr = new Array(20);
      for (var i = 0; i < 20; i++) {
        this._debug.damage.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
        var _t_damage = new F4array(this._io, this, this._root, this.zIsArray);
        _t_damage._read();
        this.damage[i] = _t_damage;
        this._debug.damage.arr[i].end = this._io.pos;
      }
      this._debug.damage.end = this._io.pos;
      this._debug.hp = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.hp = new F4array(this._io, this, this._root, this.zIsArray);
      this.hp._read();
      this._debug.hp.end = this._io.pos;
      this._debug.absorb = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.absorb = new F4array(this._io, this, this._root, this.zIsArray);
      this.absorb._read();
      this._debug.absorb.end = this._io.pos;
      this._debug.endurance = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.endurance = new F4array(this._io, this, this._root, this.zIsArray);
      this.endurance._read();
      this._debug.endurance.end = this._io.pos;
      this._debug.insight = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.insight = new F4array(this._io, this, this._root, this.zIsArray);
      this.insight._read();
      this._debug.insight.end = this._io.pos;
      this._debug.rage = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.rage = new F4array(this._io, this, this._root, this.zIsArray);
      this.rage._read();
      this._debug.rage.end = this._io.pos;
      this._debug.toHit = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.toHit = new F4array(this._io, this, this._root, this.zIsArray);
      this.toHit._read();
      this._debug.toHit.end = this._io.pos;
      this._debug.defense = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.defense = new Array(20);
      this._debug.defense.arr = new Array(20);
      for (var i = 0; i < 20; i++) {
        this._debug.defense.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
        var _t_defense = new F4array(this._io, this, this._root, this.zIsArray);
        _t_defense._read();
        this.defense[i] = _t_defense;
        this._debug.defense.arr[i].end = this._io.pos;
      }
      this._debug.defense.end = this._io.pos;
      this._debug.defenseBase = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.defenseBase = new F4array(this._io, this, this._root, this.zIsArray);
      this.defenseBase._read();
      this._debug.defenseBase.end = this._io.pos;
      this._debug.speedRunning = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.speedRunning = new F4array(this._io, this, this._root, this.zIsArray);
      this.speedRunning._read();
      this._debug.speedRunning.end = this._io.pos;
      this._debug.speedFlying = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.speedFlying = new F4array(this._io, this, this._root, this.zIsArray);
      this.speedFlying._read();
      this._debug.speedFlying.end = this._io.pos;
      this._debug.speedSwimming = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.speedSwimming = new F4array(this._io, this, this._root, this.zIsArray);
      this.speedSwimming._read();
      this._debug.speedSwimming.end = this._io.pos;
      this._debug.speedJumping = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.speedJumping = new F4array(this._io, this, this._root, this.zIsArray);
      this.speedJumping._read();
      this._debug.speedJumping.end = this._io.pos;
      this._debug.jumpHeight = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.jumpHeight = new F4array(this._io, this, this._root, this.zIsArray);
      this.jumpHeight._read();
      this._debug.jumpHeight.end = this._io.pos;
      this._debug.movementControl = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.movementControl = new F4array(this._io, this, this._root, this.zIsArray);
      this.movementControl._read();
      this._debug.movementControl.end = this._io.pos;
      this._debug.movementFriction = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.movementFriction = new F4array(this._io, this, this._root, this.zIsArray);
      this.movementFriction._read();
      this._debug.movementFriction.end = this._io.pos;
      this._debug.stealth = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.stealth = new F4array(this._io, this, this._root, this.zIsArray);
      this.stealth._read();
      this._debug.stealth.end = this._io.pos;
      this._debug.stealthRadius = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.stealthRadius = new F4array(this._io, this, this._root, this.zIsArray);
      this.stealthRadius._read();
      this._debug.stealthRadius.end = this._io.pos;
      this._debug.stealthRadiusPlayer = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.stealthRadiusPlayer = new F4array(this._io, this, this._root, this.zIsArray);
      this.stealthRadiusPlayer._read();
      this._debug.stealthRadiusPlayer.end = this._io.pos;
      this._debug.perceptionRadius = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.perceptionRadius = new F4array(this._io, this, this._root, this.zIsArray);
      this.perceptionRadius._read();
      this._debug.perceptionRadius.end = this._io.pos;
      this._debug.regeneration = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.regeneration = new F4array(this._io, this, this._root, this.zIsArray);
      this.regeneration._read();
      this._debug.regeneration.end = this._io.pos;
      this._debug.recovery = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.recovery = new F4array(this._io, this, this._root, this.zIsArray);
      this.recovery._read();
      this._debug.recovery.end = this._io.pos;
      this._debug.insightRecovery = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.insightRecovery = new F4array(this._io, this, this._root, this.zIsArray);
      this.insightRecovery._read();
      this._debug.insightRecovery.end = this._io.pos;
      this._debug.threatLevel = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.threatLevel = new F4array(this._io, this, this._root, this.zIsArray);
      this.threatLevel._read();
      this._debug.threatLevel.end = this._io.pos;
      this._debug.taunt = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.taunt = new F4array(this._io, this, this._root, this.zIsArray);
      this.taunt._read();
      this._debug.taunt.end = this._io.pos;
      this._debug.placate = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.placate = new F4array(this._io, this, this._root, this.zIsArray);
      this.placate._read();
      this._debug.placate.end = this._io.pos;
      this._debug.confused = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.confused = new F4array(this._io, this, this._root, this.zIsArray);
      this.confused._read();
      this._debug.confused.end = this._io.pos;
      this._debug.afraid = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.afraid = new F4array(this._io, this, this._root, this.zIsArray);
      this.afraid._read();
      this._debug.afraid.end = this._io.pos;
      this._debug.terrorized = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.terrorized = new F4array(this._io, this, this._root, this.zIsArray);
      this.terrorized._read();
      this._debug.terrorized.end = this._io.pos;
      this._debug.held = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.held = new F4array(this._io, this, this._root, this.zIsArray);
      this.held._read();
      this._debug.held.end = this._io.pos;
      this._debug.immobilized = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.immobilized = new F4array(this._io, this, this._root, this.zIsArray);
      this.immobilized._read();
      this._debug.immobilized.end = this._io.pos;
      this._debug.stunned = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.stunned = new F4array(this._io, this, this._root, this.zIsArray);
      this.stunned._read();
      this._debug.stunned.end = this._io.pos;
      this._debug.sleep = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.sleep = new F4array(this._io, this, this._root, this.zIsArray);
      this.sleep._read();
      this._debug.sleep.end = this._io.pos;
      this._debug.fly = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.fly = new F4array(this._io, this, this._root, this.zIsArray);
      this.fly._read();
      this._debug.fly.end = this._io.pos;
      this._debug.jumppack = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.jumppack = new F4array(this._io, this, this._root, this.zIsArray);
      this.jumppack._read();
      this._debug.jumppack.end = this._io.pos;
      this._debug.teleport = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.teleport = new F4array(this._io, this, this._root, this.zIsArray);
      this.teleport._read();
      this._debug.teleport.end = this._io.pos;
      this._debug.untouchable = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.untouchable = new F4array(this._io, this, this._root, this.zIsArray);
      this.untouchable._read();
      this._debug.untouchable.end = this._io.pos;
      this._debug.intangible = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.intangible = new F4array(this._io, this, this._root, this.zIsArray);
      this.intangible._read();
      this._debug.intangible.end = this._io.pos;
      this._debug.onlyAffectsSelf = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.onlyAffectsSelf = new F4array(this._io, this, this._root, this.zIsArray);
      this.onlyAffectsSelf._read();
      this._debug.onlyAffectsSelf.end = this._io.pos;
      this._debug.experienceGain = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.experienceGain = new F4array(this._io, this, this._root, this.zIsArray);
      this.experienceGain._read();
      this._debug.experienceGain.end = this._io.pos;
      this._debug.influenceGain = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.influenceGain = new F4array(this._io, this, this._root, this.zIsArray);
      this.influenceGain._read();
      this._debug.influenceGain.end = this._io.pos;
      this._debug.prestigeGain = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.prestigeGain = new F4array(this._io, this, this._root, this.zIsArray);
      this.prestigeGain._read();
      this._debug.prestigeGain.end = this._io.pos;
      this._debug.nullBool = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.nullBool = new F4array(this._io, this, this._root, this.zIsArray);
      this.nullBool._read();
      this._debug.nullBool.end = this._io.pos;
      this._debug.knockup = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.knockup = new F4array(this._io, this, this._root, this.zIsArray);
      this.knockup._read();
      this._debug.knockup.end = this._io.pos;
      this._debug.knockback = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.knockback = new F4array(this._io, this, this._root, this.zIsArray);
      this.knockback._read();
      this._debug.knockback.end = this._io.pos;
      this._debug.repel = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.repel = new F4array(this._io, this, this._root, this.zIsArray);
      this.repel._read();
      this._debug.repel.end = this._io.pos;
      this._debug.accuracy = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.accuracy = new F4array(this._io, this, this._root, this.zIsArray);
      this.accuracy._read();
      this._debug.accuracy.end = this._io.pos;
      this._debug.radius = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.radius = new F4array(this._io, this, this._root, this.zIsArray);
      this.radius._read();
      this._debug.radius.end = this._io.pos;
      this._debug.arc = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.arc = new F4array(this._io, this, this._root, this.zIsArray);
      this.arc._read();
      this._debug.arc.end = this._io.pos;
      this._debug.range = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.range = new F4array(this._io, this, this._root, this.zIsArray);
      this.range._read();
      this._debug.range.end = this._io.pos;
      this._debug.timeToActivate = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.timeToActivate = new F4array(this._io, this, this._root, this.zIsArray);
      this.timeToActivate._read();
      this._debug.timeToActivate.end = this._io.pos;
      this._debug.rechargeTime = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.rechargeTime = new F4array(this._io, this, this._root, this.zIsArray);
      this.rechargeTime._read();
      this._debug.rechargeTime.end = this._io.pos;
      this._debug.interruptTime = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.interruptTime = new F4array(this._io, this, this._root, this.zIsArray);
      this.interruptTime._read();
      this._debug.interruptTime.end = this._io.pos;
      this._debug.enduranceDiscount = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.enduranceDiscount = new F4array(this._io, this, this._root, this.zIsArray);
      this.enduranceDiscount._read();
      this._debug.enduranceDiscount.end = this._io.pos;
      this._debug.insightDiscount = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.insightDiscount = new F4array(this._io, this, this._root, this.zIsArray);
      this.insightDiscount._read();
      this._debug.insightDiscount.end = this._io.pos;
      this._debug.meter = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.meter = new F4array(this._io, this, this._root, this.zIsArray);
      this.meter._read();
      this._debug.meter.end = this._io.pos;
      this._debug.elusivity00 = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.elusivity00 = new Array(20);
      this._debug.elusivity00.arr = new Array(20);
      for (var i = 0; i < 20; i++) {
        this._debug.elusivity00.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
        var _t_elusivity00 = new F4array(this._io, this, this._root, this.zIsArray);
        _t_elusivity00._read();
        this.elusivity00[i] = _t_elusivity00;
        this._debug.elusivity00.arr[i].end = this._io.pos;
      }
      this._debug.elusivity00.end = this._io.pos;
      this._debug.elusivityBase = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.elusivityBase = new F4array(this._io, this, this._root, this.zIsArray);
      this.elusivityBase._read();
      this._debug.elusivityBase.end = this._io.pos;
    }

    return Attributes;
  })();

  var Pstring = Classes.Pstring = (function() {
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

  var AttributesArray = Classes.AttributesArray = (function() {
    function AttributesArray(_io, _parent, _root, zIsArray) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this.zIsArray = zIsArray;
      this._debug = {};

    }
    AttributesArray.prototype._read = function() {
      this._debug.count = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.count = this._io.readU4le();
      this._debug.count.end = this._io.pos;
      this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.value = new Array(this.count);
      this._debug.value.arr = new Array(this.count);
      for (var i = 0; i < this.count; i++) {
        this._debug.value.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
        var _t_value = new AttributesStruct(this._io, this, this._root, this.zIsArray);
        _t_value._read();
        this.value[i] = _t_value;
        this._debug.value.arr[i].end = this._io.pos;
      }
      this._debug.value.end = this._io.pos;
    }

    return AttributesArray;
  })();

  var U4Array = Classes.U4Array = (function() {
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

  var F4array = Classes.F4array = (function() {
    function F4array(_io, _parent, _root, zIsArray) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this.zIsArray = zIsArray;
      this._debug = {};

    }
    F4array.prototype._read = function() {
      if (this.zIsArray == 1) {
        this._debug.count = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.count = this._io.readU4le();
        this._debug.count.end = this._io.pos;
      }
      if (this.zIsArray == 1) {
        this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.value = new Array(this.count);
        this._debug.value.arr = new Array(this.count);
        for (var i = 0; i < this.count; i++) {
          this._debug.value.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
          this.value[i] = this._io.readF4le();
          this._debug.value.arr[i].end = this._io.pos;
        }
        this._debug.value.end = this._io.pos;
      }
      if (this.zIsArray == 0) {
        this._debug.val = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.val = this._io.readF4le();
        this._debug.val.end = this._io.pos;
      }
    }

    return F4array;
  })();

  var Header = Classes.Header = (function() {
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

  var AttributesStruct = Classes.AttributesStruct = (function() {
    function AttributesStruct(_io, _parent, _root, zIsArray) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this.zIsArray = zIsArray;
      this._debug = {};

    }
    AttributesStruct.prototype._read = function() {
      this._debug.len = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.len = this._io.readU4le();
      this._debug.len.end = this._io.pos;
      this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._raw_value = this._io.readBytes(this.len);
      var _io__raw_value = new KaitaiStream(this._raw_value);
      this.value = new Attributes(_io__raw_value, this, this._root, this.zIsArray);
      this.value._read();
      this._debug.value.end = this._io.pos;
    }

    return AttributesStruct;
  })();

  var NamedTableArray = Classes.NamedTableArray = (function() {
    function NamedTableArray(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    NamedTableArray.prototype._read = function() {
      this._debug.count = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.count = this._io.readU4le();
      this._debug.count.end = this._io.pos;
      this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.value = new Array(this.count);
      this._debug.value.arr = new Array(this.count);
      for (var i = 0; i < this.count; i++) {
        this._debug.value.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
        var _t_value = new NamedTableStruct(this._io, this, this._root);
        _t_value._read();
        this.value[i] = _t_value;
        this._debug.value.arr[i].end = this._io.pos;
      }
      this._debug.value.end = this._io.pos;
    }

    return NamedTableArray;
  })();

  var ClassesArray = Classes.ClassesArray = (function() {
    function ClassesArray(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    ClassesArray.prototype._read = function() {
      this._debug.count = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.count = this._io.readU4le();
      this._debug.count.end = this._io.pos;
      this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.value = new Array(this.count);
      this._debug.value.arr = new Array(this.count);
      for (var i = 0; i < this.count; i++) {
        this._debug.value.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
        var _t_value = new ClassesStruct(this._io, this, this._root);
        _t_value._read();
        this.value[i] = _t_value;
        this._debug.value.arr[i].end = this._io.pos;
      }
      this._debug.value.end = this._io.pos;
    }

    return ClassesArray;
  })();

  var NamedTableStruct = Classes.NamedTableStruct = (function() {
    function NamedTableStruct(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    NamedTableStruct.prototype._read = function() {
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
      this.value = new NamedTable(_io__raw_value, this, this._root);
      this.value._read();
      this._debug.value.end = this._io.pos;
    }

    return NamedTableStruct;
  })();

  var ClassesItem = Classes.ClassesItem = (function() {
    function ClassesItem(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    ClassesItem.prototype._read = function() {
      this._debug.display = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.display = new String(this._io, this, this._root);
      this.display._read();
      this._debug.display.end = this._io.pos;
      this._debug.help = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.help = new String(this._io, this, this._root);
      this.help._read();
      this._debug.help.end = this._io.pos;
      this._debug.origins = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.origins = new StringArray(this._io, this, this._root);
      this.origins._read();
      this._debug.origins.end = this._io.pos;
      this._debug.restrictions = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.restrictions = new StringArray(this._io, this, this._root);
      this.restrictions._read();
      this._debug.restrictions.end = this._io.pos;
      this._debug.store = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.store = new String(this._io, this, this._root);
      this.store._read();
      this._debug.store.end = this._io.pos;
      this._debug.locked = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.locked = new String(this._io, this, this._root);
      this.locked._read();
      this._debug.locked.end = this._io.pos;
      this._debug.product = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.product = new String(this._io, this, this._root);
      this.product._read();
      this._debug.product.end = this._io.pos;
      this._debug.reduction = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.reduction = new String(this._io, this, this._root);
      this.reduction._read();
      this._debug.reduction.end = this._io.pos;
      this._debug.reduceAsAV = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.reduceAsAV = this._io.readU4le();
      this._debug.reduceAsAV.end = this._io.pos;
      this._debug.respecs = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.respecs = new U4Array(this._io, this, this._root);
      this.respecs._read();
      this._debug.respecs.end = this._io.pos;
      this._debug.shortHelp = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.shortHelp = new String(this._io, this, this._root);
      this.shortHelp._read();
      this._debug.shortHelp.end = this._io.pos;
      this._debug.icon = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.icon = new String(this._io, this, this._root);
      this.icon._read();
      this._debug.icon.end = this._io.pos;
      this._debug.primary = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.primary = new String(this._io, this, this._root);
      this.primary._read();
      this._debug.primary.end = this._io.pos;
      this._debug.secondary = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.secondary = new String(this._io, this, this._root);
      this.secondary._read();
      this._debug.secondary.end = this._io.pos;
      this._debug.pool = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.pool = new String(this._io, this, this._root);
      this.pool._read();
      this._debug.pool.end = this._io.pos;
      this._debug.epic = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.epic = new String(this._io, this, this._root);
      this.epic._read();
      this._debug.epic.end = this._io.pos;
      this._debug.attribMin = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.attribMin = new AttributesArray(this._io, this, this._root, 0);
      this.attribMin._read();
      this._debug.attribMin.end = this._io.pos;
      this._debug.attribBase = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.attribBase = new AttributesArray(this._io, this, this._root, 0);
      this.attribBase._read();
      this._debug.attribBase.end = this._io.pos;
      this._debug.strengthMin = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.strengthMin = new AttributesArray(this._io, this, this._root, 0);
      this.strengthMin._read();
      this._debug.strengthMin.end = this._io.pos;
      this._debug.resistanceMin = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.resistanceMin = new AttributesArray(this._io, this, this._root, 0);
      this.resistanceMin._read();
      this._debug.resistanceMin.end = this._io.pos;
      this._debug.attribDiminStrIn = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.attribDiminStrIn = new AttributesArray(this._io, this, this._root, 0);
      this.attribDiminStrIn._read();
      this._debug.attribDiminStrIn.end = this._io.pos;
      this._debug.attribDiminStrOut = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.attribDiminStrOut = new AttributesArray(this._io, this, this._root, 0);
      this.attribDiminStrOut._read();
      this._debug.attribDiminStrOut.end = this._io.pos;
      this._debug.attribDiminCurIn = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.attribDiminCurIn = new AttributesArray(this._io, this, this._root, 0);
      this.attribDiminCurIn._read();
      this._debug.attribDiminCurIn.end = this._io.pos;
      this._debug.attribDiminCurOut = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.attribDiminCurOut = new AttributesArray(this._io, this, this._root, 0);
      this.attribDiminCurOut._read();
      this._debug.attribDiminCurOut.end = this._io.pos;
      this._debug.attribDiminResIn = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.attribDiminResIn = new AttributesArray(this._io, this, this._root, 0);
      this.attribDiminResIn._read();
      this._debug.attribDiminResIn.end = this._io.pos;
      this._debug.attribDiminResOut = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.attribDiminResOut = new AttributesArray(this._io, this, this._root, 0);
      this.attribDiminResOut._read();
      this._debug.attribDiminResOut.end = this._io.pos;
      this._debug.attribMaxTable = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.attribMaxTable = new AttributesArray(this._io, this, this._root, 1);
      this.attribMaxTable._read();
      this._debug.attribMaxTable.end = this._io.pos;
      this._debug.attribMaxMaxTable = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.attribMaxMaxTable = new AttributesArray(this._io, this, this._root, 1);
      this.attribMaxMaxTable._read();
      this._debug.attribMaxMaxTable.end = this._io.pos;
      this._debug.strengthMaxTable = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.strengthMaxTable = new AttributesArray(this._io, this, this._root, 1);
      this.strengthMaxTable._read();
      this._debug.strengthMaxTable.end = this._io.pos;
      this._debug.resistanceMaxTable = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.resistanceMaxTable = new AttributesArray(this._io, this, this._root, 1);
      this.resistanceMaxTable._read();
      this._debug.resistanceMaxTable.end = this._io.pos;
      this._debug.modTable = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.modTable = new NamedTableArray(this._io, this, this._root);
      this.modTable._read();
      this._debug.modTable.end = this._io.pos;
      this._debug.connectHPAndStatus = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.connectHPAndStatus = this._io.readU4le();
      this._debug.connectHPAndStatus.end = this._io.pos;
      this._debug.offDefiantHPAttrib = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.offDefiantHPAttrib = this._io.readU4le();
      this._debug.offDefiantHPAttrib.end = this._io.pos;
      this._debug.defiantScale = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.defiantScale = this._io.readF4le();
      this._debug.defiantScale.end = this._io.pos;
    }

    return ClassesItem;
  })();

  var ClassesStruct = Classes.ClassesStruct = (function() {
    function ClassesStruct(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    ClassesStruct.prototype._read = function() {
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
      this.value = new ClassesItem(_io__raw_value, this, this._root);
      this.value._read();
      this._debug.value.end = this._io.pos;
    }

    return ClassesStruct;
  })();

  return Classes;
})();
return Classes;
}));
