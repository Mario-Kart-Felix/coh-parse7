// This is a generated file! Please edit source .ksy file and use kaitai-struct-compiler to rebuild

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['kaitai-struct/KaitaiStream'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('kaitai-struct/KaitaiStream'));
  } else {
    root.Powers = factory(root.KaitaiStream);
  }
}(this, function (KaitaiStream) {
var Powers = (function() {
  function Powers(_io, _parent, _root) {
    this._io = _io;
    this._parent = _parent;
    this._root = _root || this;
    this._debug = {};

  }
  Powers.prototype._read = function() {
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
    this.value = new PowerArray(_io__raw_value, this, this._root);
    this.value._read();
    this._debug.value.end = this._io.pos;
  }

  var Messages = Powers.Messages = (function() {
    function Messages(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    Messages.prototype._read = function() {
      this._debug.attackerHit = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.attackerHit = new String(this._io, this, this._root);
      this.attackerHit._read();
      this._debug.attackerHit.end = this._io.pos;
      this._debug.victimHit = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.victimHit = new String(this._io, this, this._root);
      this.victimHit._read();
      this._debug.victimHit.end = this._io.pos;
      this._debug.float = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.float = new String(this._io, this, this._root);
      this.float._read();
      this._debug.float.end = this._io.pos;
      this._debug.defenseFloat = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.defenseFloat = new String(this._io, this, this._root);
      this.defenseFloat._read();
      this._debug.defenseFloat.end = this._io.pos;
    }

    return Messages;
  })();

  var VarStruct = Powers.VarStruct = (function() {
    function VarStruct(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    VarStruct.prototype._read = function() {
      this._debug.len = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.len = this._io.readU4le();
      this._debug.len.end = this._io.pos;
      this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._raw_value = this._io.readBytes(this.len);
      var _io__raw_value = new KaitaiStream(this._raw_value);
      this.value = new Var(_io__raw_value, this, this._root);
      this.value._read();
      this._debug.value.end = this._io.pos;
    }

    return VarStruct;
  })();

  var PowerBlock = Powers.PowerBlock = (function() {
    function PowerBlock(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    PowerBlock.prototype._read = function() {
    }
    Object.defineProperty(PowerBlock.prototype, 'value', {
      get: function() {
        if (this._m_value !== undefined)
          return this._m_value;
        var _pos = this._io.pos;
        this._io.seek(0);
        this._debug._m_value = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this._raw__m_value = this._io.readBytesFull();
        var _io__raw__m_value = new KaitaiStream(this._raw__m_value);
        this._m_value = new Power(_io__raw__m_value, this, this._root);
        this._m_value._read();
        this._debug._m_value.end = this._io.pos;
        this._io.seek(_pos);
        return this._m_value;
      }
    });

    return PowerBlock;
  })();

  var BoostType = Powers.BoostType = (function() {
    BoostType.BoostType = Object.freeze({
      SCIENCE: 0,
      MUTATION: 1,
      MAGIC: 2,
      TECHNOLOGY: 3,
      NATURAL: 4,
      ACCURACY: 5,
      BUFF_DEFENSE: 6,
      BUFF_TOHIT: 7,
      CONFUSE: 8,
      DAMAGE: 9,
      DEBUFF_DEFENSE: 10,
      DEBUFF_TOHIT: 11,
      FEAR: 12,
      SPEEDFLYING: 13,
      HEAL: 14,
      IMMOBILIZED: 15,
      JUMP: 16,
      KNOCKBACK: 17,
      RECHARGE: 18,
      SPEEDRUNNING: 19,
      SLEEP: 20,
      STUNNED: 21,
      RANGE: 22,
      ENDURANCEDISCOUNT: 23,
      BUFF_DAMAGE: 24,
      DEBUFF_DAMAGE: 25,
      RADIUS: 26,
      CONE: 27,
      TAUNT: 28,
      SLOW: 29,
      HOLD: 30,
      INTANGIBLE: 31,
      INTERRUPT: 32,
      RECOVERY: 33,
      ENDURANCE_DRAIN: 34,
      RES_DAMAGE: 35,
      HAMIDON: 36,
      INCARNATE_JUDGEMENT: 37,
      INCARNATE_INTERFACE: 38,
      INCARNATE_LORE: 39,
      INCARNATE_DESTINY: 40,

      0: "SCIENCE",
      1: "MUTATION",
      2: "MAGIC",
      3: "TECHNOLOGY",
      4: "NATURAL",
      5: "ACCURACY",
      6: "BUFF_DEFENSE",
      7: "BUFF_TOHIT",
      8: "CONFUSE",
      9: "DAMAGE",
      10: "DEBUFF_DEFENSE",
      11: "DEBUFF_TOHIT",
      12: "FEAR",
      13: "SPEEDFLYING",
      14: "HEAL",
      15: "IMMOBILIZED",
      16: "JUMP",
      17: "KNOCKBACK",
      18: "RECHARGE",
      19: "SPEEDRUNNING",
      20: "SLEEP",
      21: "STUNNED",
      22: "RANGE",
      23: "ENDURANCEDISCOUNT",
      24: "BUFF_DAMAGE",
      25: "DEBUFF_DAMAGE",
      26: "RADIUS",
      27: "CONE",
      28: "TAUNT",
      29: "SLOW",
      30: "HOLD",
      31: "INTANGIBLE",
      32: "INTERRUPT",
      33: "RECOVERY",
      34: "ENDURANCE_DRAIN",
      35: "RES_DAMAGE",
      36: "HAMIDON",
      37: "INCARNATE_JUDGEMENT",
      38: "INCARNATE_INTERFACE",
      39: "INCARNATE_LORE",
      40: "INCARNATE_DESTINY",
    });

    function BoostType(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    BoostType.prototype._read = function() {
      this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "Powers.BoostType.BoostType" };
      this.value = this._io.readU4le();
      this._debug.value.end = this._io.pos;
    }

    return BoostType;
  })();

  var ParamsStruct = Powers.ParamsStruct = (function() {
    function ParamsStruct(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    ParamsStruct.prototype._read = function() {
      this._debug.recType = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.recType = this._io.readU4le();
      this._debug.recType.end = this._io.pos;
      if (this.recType > 0) {
        this._debug.len = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.len = this._io.readU4le();
        this._debug.len.end = this._io.pos;
      }
      if (this.recType > 0) {
        this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
        switch (this.recType) {
        case 10:
          this._raw_value = this._io.readBytes(this.len);
          var _io__raw_value = new KaitaiStream(this._raw_value);
          this.value = new Filter(_io__raw_value, this, this._root);
          this.value._read();
          break;
        case 4:
          this._raw_value = this._io.readBytes(this.len);
          var _io__raw_value = new KaitaiStream(this._raw_value);
          this.value = new PowerParam(_io__raw_value, this, this._root);
          this.value._read();
          break;
        case 6:
          this._raw_value = this._io.readBytes(this.len);
          var _io__raw_value = new KaitaiStream(this._raw_value);
          this.value = new Teleport(_io__raw_value, this, this._root);
          this.value._read();
          break;
        case 7:
          this._raw_value = this._io.readBytes(this.len);
          var _io__raw_value = new KaitaiStream(this._raw_value);
          this.value = new Behavior(_io__raw_value, this, this._root);
          this.value._read();
          break;
        case 1:
          this._raw_value = this._io.readBytes(this.len);
          var _io__raw_value = new KaitaiStream(this._raw_value);
          this.value = new Costume(_io__raw_value, this, this._root);
          this.value._read();
          break;
        case 3:
          this._raw_value = this._io.readBytes(this.len);
          var _io__raw_value = new KaitaiStream(this._raw_value);
          this.value = new EntCreate(_io__raw_value, this, this._root);
          this.value._read();
          break;
        case 5:
          this._raw_value = this._io.readBytes(this.len);
          var _io__raw_value = new KaitaiStream(this._raw_value);
          this.value = new Phase(_io__raw_value, this, this._root);
          this.value._read();
          break;
        case 8:
          this._raw_value = this._io.readBytes(this.len);
          var _io__raw_value = new KaitaiStream(this._raw_value);
          this.value = new SZEValue(_io__raw_value, this, this._root);
          this.value._read();
          break;
        case 9:
          this._raw_value = this._io.readBytes(this.len);
          var _io__raw_value = new KaitaiStream(this._raw_value);
          this.value = new Token(_io__raw_value, this, this._root);
          this.value._read();
          break;
        case 2:
          this._raw_value = this._io.readBytes(this.len);
          var _io__raw_value = new KaitaiStream(this._raw_value);
          this.value = new Reward(_io__raw_value, this, this._root);
          this.value._read();
          break;
        default:
          this.value = this._io.readBytes(this.len);
          break;
        }
        this._debug.value.end = this._io.pos;
      }
    }

    var SZEValue = ParamsStruct.SZEValue = (function() {
      function SZEValue(_io, _parent, _root) {
        this._io = _io;
        this._parent = _parent;
        this._root = _root || this;
        this._debug = {};

      }
      SZEValue.prototype._read = function() {
        this._debug.scriptId = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.scriptId = new StringArray(this._io, this, this._root);
        this.scriptId._read();
        this._debug.scriptId.end = this._io.pos;
        this._debug.scriptValue = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.scriptValue = new StringArray(this._io, this, this._root);
        this.scriptValue._read();
        this._debug.scriptValue.end = this._io.pos;
      }

      return SZEValue;
    })();

    var Phase = ParamsStruct.Phase = (function() {
      function Phase(_io, _parent, _root) {
        this._io = _io;
        this._parent = _parent;
        this._root = _root || this;
        this._debug = {};

      }
      Phase.prototype._read = function() {
        this._debug.combatPhases = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.combatPhases = new U4Array(this._io, this, this._root);
        this.combatPhases._read();
        this._debug.combatPhases.end = this._io.pos;
        this._debug.visionPhases = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.visionPhases = new U4Array(this._io, this, this._root);
        this.visionPhases._read();
        this._debug.visionPhases.end = this._io.pos;
        this._debug.exclusiveVisionPhase = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.exclusiveVisionPhase = this._io.readU4le();
        this._debug.exclusiveVisionPhase.end = this._io.pos;
      }

      return Phase;
    })();

    var Reward = ParamsStruct.Reward = (function() {
      function Reward(_io, _parent, _root) {
        this._io = _io;
        this._parent = _parent;
        this._root = _root || this;
        this._debug = {};

      }
      Reward.prototype._read = function() {
        this._debug.rewards = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.rewards = new StringArray(this._io, this, this._root);
        this.rewards._read();
        this._debug.rewards.end = this._io.pos;
      }

      return Reward;
    })();

    var Filter = ParamsStruct.Filter = (function() {
      function Filter(_io, _parent, _root) {
        this._io = _io;
        this._parent = _parent;
        this._root = _root || this;
        this._debug = {};

      }
      Filter.prototype._read = function() {
        this._debug.categories = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.categories = new StringArray(this._io, this, this._root);
        this.categories._read();
        this._debug.categories.end = this._io.pos;
        this._debug.powersets = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.powersets = new StringArray(this._io, this, this._root);
        this.powersets._read();
        this._debug.powersets.end = this._io.pos;
        this._debug.powers = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.powers = new StringArray(this._io, this, this._root);
        this.powers._read();
        this._debug.powers.end = this._io.pos;
        this._debug.tags = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.tags = new StringArray(this._io, this, this._root);
        this.tags._read();
        this._debug.tags.end = this._io.pos;
      }

      return Filter;
    })();

    var Token = ParamsStruct.Token = (function() {
      function Token(_io, _parent, _root) {
        this._io = _io;
        this._parent = _parent;
        this._root = _root || this;
        this._debug = {};

      }
      Token.prototype._read = function() {
        this._debug.tokens = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.tokens = new StringArray(this._io, this, this._root);
        this.tokens._read();
        this._debug.tokens.end = this._io.pos;
      }

      return Token;
    })();

    var Teleport = ParamsStruct.Teleport = (function() {
      function Teleport(_io, _parent, _root) {
        this._io = _io;
        this._parent = _parent;
        this._root = _root || this;
        this._debug = {};

      }
      Teleport.prototype._read = function() {
        this._debug.destination = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.destination = new String(this._io, this, this._root);
        this.destination._read();
        this._debug.destination.end = this._io.pos;
      }

      return Teleport;
    })();

    var PowerParam = ParamsStruct.PowerParam = (function() {
      function PowerParam(_io, _parent, _root) {
        this._io = _io;
        this._parent = _parent;
        this._root = _root || this;
        this._debug = {};

      }
      PowerParam.prototype._read = function() {
        this._debug.categories = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.categories = new StringArray(this._io, this, this._root);
        this.categories._read();
        this._debug.categories.end = this._io.pos;
        this._debug.powersets = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.powersets = new StringArray(this._io, this, this._root);
        this.powersets._read();
        this._debug.powersets.end = this._io.pos;
        this._debug.powers = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.powers = new StringArray(this._io, this, this._root);
        this.powers._read();
        this._debug.powers.end = this._io.pos;
        this._debug.count = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.count = this._io.readU4le();
        this._debug.count.end = this._io.pos;
      }

      return PowerParam;
    })();

    var EntCreate = ParamsStruct.EntCreate = (function() {
      function EntCreate(_io, _parent, _root) {
        this._io = _io;
        this._parent = _parent;
        this._root = _root || this;
        this._debug = {};

      }
      EntCreate.prototype._read = function() {
        this._debug.entityDef = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.entityDef = new String(this._io, this, this._root);
        this.entityDef._read();
        this._debug.entityDef.end = this._io.pos;
        this._debug.class = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.class = new String(this._io, this, this._root);
        this.class._read();
        this._debug.class.end = this._io.pos;
        this._debug.costumeName = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.costumeName = new String(this._io, this, this._root);
        this.costumeName._read();
        this._debug.costumeName.end = this._io.pos;
        this._debug.display = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.display = new String(this._io, this, this._root);
        this.display._read();
        this._debug.display.end = this._io.pos;
        this._debug.priorityList = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.priorityList = new String(this._io, this, this._root);
        this.priorityList._read();
        this._debug.priorityList.end = this._io.pos;
        this._debug.aiConfig = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.aiConfig = new String(this._io, this, this._root);
        this.aiConfig._read();
        this._debug.aiConfig.end = this._io.pos;
        this._debug.categories = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.categories = new StringArray(this._io, this, this._root);
        this.categories._read();
        this._debug.categories.end = this._io.pos;
        this._debug.powersets = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.powersets = new StringArray(this._io, this, this._root);
        this.powersets._read();
        this._debug.powersets.end = this._io.pos;
        this._debug.powers = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.powers = new StringArray(this._io, this, this._root);
        this.powers._read();
        this._debug.powers.end = this._io.pos;
        this._debug._unnamed9 = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this._unnamed9 = this._io.readBytes(4);
        this._debug._unnamed9.end = this._io.pos;
      }

      return EntCreate;
    })();

    var Behavior = ParamsStruct.Behavior = (function() {
      function Behavior(_io, _parent, _root) {
        this._io = _io;
        this._parent = _parent;
        this._root = _root || this;
        this._debug = {};

      }
      Behavior.prototype._read = function() {
        this._debug.behaviors = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.behaviors = new StringArray(this._io, this, this._root);
        this.behaviors._read();
        this._debug.behaviors.end = this._io.pos;
      }

      return Behavior;
    })();

    var Costume = ParamsStruct.Costume = (function() {
      function Costume(_io, _parent, _root) {
        this._io = _io;
        this._parent = _parent;
        this._root = _root || this;
        this._debug = {};

      }
      Costume.prototype._read = function() {
        this._debug.costumeName = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.costumeName = new String(this._io, this, this._root);
        this.costumeName._read();
        this._debug.costumeName.end = this._io.pos;
        this._debug.priority = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.priority = this._io.readU4le();
        this._debug.priority.end = this._io.pos;
      }

      return Costume;
    })();

    return ParamsStruct;
  })();

  var TargetInfoStruct = Powers.TargetInfoStruct = (function() {
    function TargetInfoStruct(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    TargetInfoStruct.prototype._read = function() {
      this._debug.len = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.len = this._io.readU4le();
      this._debug.len.end = this._io.pos;
      this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._raw_value = this._io.readBytes(this.len);
      var _io__raw_value = new KaitaiStream(this._raw_value);
      this.value = new TargetInfo(_io__raw_value, this, this._root);
      this.value._read();
      this._debug.value.end = this._io.pos;
    }

    return TargetInfoStruct;
  })();

  var AttribFlags = Powers.AttribFlags = (function() {
    function AttribFlags(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    AttribFlags.prototype._read = function() {
      this._debug.resistMagnitude = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.resistMagnitude = this._io.readBitsInt(1) != 0;
      this._debug.resistMagnitude.end = this._io.pos;
      this._debug.ignoreCombatMods = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.ignoreCombatMods = this._io.readBitsInt(1) != 0;
      this._debug.ignoreCombatMods.end = this._io.pos;
      this._debug.ignoreResistance = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.ignoreResistance = this._io.readBitsInt(1) != 0;
      this._debug.ignoreResistance.end = this._io.pos;
      this._debug.ignoreStrength = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.ignoreStrength = this._io.readBitsInt(1) != 0;
      this._debug.ignoreStrength.end = this._io.pos;
      this._debug.nearGround = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.nearGround = this._io.readBitsInt(1) != 0;
      this._debug.nearGround.end = this._io.pos;
      this._debug.cancelOnMiss = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.cancelOnMiss = this._io.readBitsInt(1) != 0;
      this._debug.cancelOnMiss.end = this._io.pos;
      this._debug.boostIgnoreDiminishing = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.boostIgnoreDiminishing = this._io.readBitsInt(1) != 0;
      this._debug.boostIgnoreDiminishing.end = this._io.pos;
      this._debug.noFloaters = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.noFloaters = this._io.readBitsInt(1) != 0;
      this._debug.noFloaters.end = this._io.pos;
      this._debug.noHitDelay = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.noHitDelay = this._io.readBitsInt(1) != 0;
      this._debug.noHitDelay.end = this._io.pos;
      this._debug.delayEval = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.delayEval = this._io.readBitsInt(1) != 0;
      this._debug.delayEval.end = this._io.pos;
      this._debug.keepThroughDeath = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.keepThroughDeath = this._io.readBitsInt(1) != 0;
      this._debug.keepThroughDeath.end = this._io.pos;
      this._debug.hideZero = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.hideZero = this._io.readBitsInt(1) != 0;
      this._debug.hideZero.end = this._io.pos;
      this._debug.boost = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.boost = this._io.readBitsInt(1) != 0;
      this._debug.boost.end = this._io.pos;
      this._debug.combatModDuration = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.combatModDuration = this._io.readBitsInt(1) != 0;
      this._debug.combatModDuration.end = this._io.pos;
      this._debug.combatModMagnitude = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.combatModMagnitude = this._io.readBitsInt(1) != 0;
      this._debug.combatModMagnitude.end = this._io.pos;
      this._debug.resistDuration = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.resistDuration = this._io.readBitsInt(1) != 0;
      this._debug.resistDuration.end = this._io.pos;
      this._debug._unnamed16 = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._unnamed16 = this._io.readBitsInt(4);
      this._debug._unnamed16.end = this._io.pos;
      this._debug.ignoreSuppressErrors = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.ignoreSuppressErrors = this._io.readBitsInt(1) != 0;
      this._debug.ignoreSuppressErrors.end = this._io.pos;
      this._debug.stackExactPower = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.stackExactPower = this._io.readBitsInt(1) != 0;
      this._debug.stackExactPower.end = this._io.pos;
      this._debug.stackByAttribAndKey = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.stackByAttribAndKey = this._io.readBitsInt(1) != 0;
      this._debug.stackByAttribAndKey.end = this._io.pos;
      this._debug.noProjectileDelay = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.noProjectileDelay = this._io.readBitsInt(1) != 0;
      this._debug.noProjectileDelay.end = this._io.pos;
      this._debug._unnamed21 = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._unnamed21 = this._io.readBitsInt(8);
      this._debug._unnamed21.end = this._io.pos;
      this._debug.noCreatorModFx = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.noCreatorModFx = this._io.readBitsInt(1) != 0;
      this._debug.noCreatorModFx.end = this._io.pos;
      this._debug.copyCreatorMods = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.copyCreatorMods = this._io.readBitsInt(1) != 0;
      this._debug.copyCreatorMods.end = this._io.pos;
      this._debug.copyBoosts = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.copyBoosts = this._io.readBitsInt(1) != 0;
      this._debug.copyBoosts.end = this._io.pos;
      this._debug.doNotTintCostume = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.doNotTintCostume = this._io.readBitsInt(1) != 0;
      this._debug.doNotTintCostume.end = this._io.pos;
      this._debug.revokeAll = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.revokeAll = this._io.readBitsInt(1) != 0;
      this._debug.revokeAll.end = this._io.pos;
      this._debug.noTokenTime = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.noTokenTime = this._io.readBitsInt(1) != 0;
      this._debug.noTokenTime.end = this._io.pos;
      this._debug.doNotDisplayShift = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.doNotDisplayShift = this._io.readBitsInt(1) != 0;
      this._debug.doNotDisplayShift.end = this._io.pos;
      this._debug.vanishEntOnTimeout = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.vanishEntOnTimeout = this._io.readBitsInt(1) != 0;
      this._debug.vanishEntOnTimeout.end = this._io.pos;
      this._debug._unnamed30 = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._unnamed30 = this._io.readBitsInt(5);
      this._debug._unnamed30.end = this._io.pos;
      this._debug.petCommandable = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.petCommandable = this._io.readBitsInt(1) != 0;
      this._debug.petCommandable.end = this._io.pos;
      this._debug.petVisible = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.petVisible = this._io.readBitsInt(1) != 0;
      this._debug.petVisible.end = this._io.pos;
      this._debug.pseudoPet = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.pseudoPet = this._io.readBitsInt(1) != 0;
      this._debug.pseudoPet.end = this._io.pos;
      this._debug._unnamed34 = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._unnamed34 = this._io.readBitsInt(16);
      this._debug._unnamed34.end = this._io.pos;
    }

    return AttribFlags;
  })();

  var AttribMod = Powers.AttribMod = (function() {
    AttribMod.CasterStackType = Object.freeze({
      INDIVIDUAL: 0,
      COLLECTIVE: 1,

      0: "INDIVIDUAL",
      1: "COLLECTIVE",
    });

    AttribMod.AttribType = Object.freeze({
      DURATION: 0,
      MAGNITUDE: 1,
      CONSTANT: 2,
      EXPRESSION: 3,
      SKILL_MAGNITUDE: 4,

      0: "DURATION",
      1: "MAGNITUDE",
      2: "CONSTANT",
      3: "EXPRESSION",
      4: "SKILL_MAGNITUDE",
    });

    AttribMod.Aspect = Object.freeze({
      MODIFIERS: 0,
      MAXIMUM: 8,
      STRENGTH: 16,
      RESIST: 24,
      ABSOLUTE: 32,

      0: "MODIFIERS",
      8: "MAXIMUM",
      16: "STRENGTH",
      24: "RESIST",
      32: "ABSOLUTE",
    });

    AttribMod.StackType = Object.freeze({
      STACK: 0,
      IGNORE: 1,
      EXTEND: 2,
      REPLACE: 3,
      OVERLAP: 4,
      STACK_THEN_IGNORE: 5,
      REFRESH: 6,
      REFRESH_TO_COUNT: 7,
      MAXIMIZE: 8,
      SUPPRESS: 9,

      0: "STACK",
      1: "IGNORE",
      2: "EXTEND",
      3: "REPLACE",
      4: "OVERLAP",
      5: "STACK_THEN_IGNORE",
      6: "REFRESH",
      7: "REFRESH_TO_COUNT",
      8: "MAXIMIZE",
      9: "SUPPRESS",
    });

    AttribMod.Target = Object.freeze({
      SELF: 0,
      SELF_AND_PETS: 1,
      TARGET: 2,
      TARGET_AND_PETS: 3,
      AFFECTED: 4,
      AFFECTED_AND_PETS: 5,
      MARKER: 6,

      0: "SELF",
      1: "SELF_AND_PETS",
      2: "TARGET",
      3: "TARGET_AND_PETS",
      4: "AFFECTED",
      5: "AFFECTED_AND_PETS",
      6: "MARKER",
    });

    AttribMod.ApplicationType = Object.freeze({
      TICK: 0,
      ACTIVATE: 1,
      DEACTIVATE: 2,
      EXPIRE: 3,
      ENABLE: 4,
      DISABLE: 5,

      0: "TICK",
      1: "ACTIVATE",
      2: "DEACTIVATE",
      3: "EXPIRE",
      4: "ENABLE",
      5: "DISABLE",
    });

    function AttribMod(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    AttribMod.prototype._read = function() {
      this._debug.attrib = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.attrib = new AttribArray(this._io, this, this._root);
      this.attrib._read();
      this._debug.attrib.end = this._io.pos;
      this._debug.aspect = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "Powers.AttribMod.Aspect" };
      this.aspect = this._io.readU4le();
      this._debug.aspect.end = this._io.pos;
      this._debug.applicationType = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "Powers.AttribMod.ApplicationType" };
      this.applicationType = this._io.readU4le();
      this._debug.applicationType.end = this._io.pos;
      this._debug.type = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "Powers.AttribMod.AttribType" };
      this.type = this._io.readU4le();
      this._debug.type.end = this._io.pos;
      this._debug.target = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "Powers.AttribMod.Target" };
      this.target = this._io.readU4le();
      this._debug.target.end = this._io.pos;
      this._debug.targetInfo = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.targetInfo = new TargetInfoArray(this._io, this, this._root);
      this.targetInfo._read();
      this._debug.targetInfo.end = this._io.pos;
      this._debug.table = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.table = new String(this._io, this, this._root);
      this.table._read();
      this._debug.table.end = this._io.pos;
      this._debug.scale = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.scale = this._io.readF4le();
      this._debug.scale.end = this._io.pos;
      this._debug.duration = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.duration = this._io.readF4le();
      this._debug.duration.end = this._io.pos;
      this._debug.magnitude = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.magnitude = this._io.readF4le();
      this._debug.magnitude.end = this._io.pos;
      this._debug.durationExpr = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.durationExpr = new StringArray(this._io, this, this._root);
      this.durationExpr._read();
      this._debug.durationExpr.end = this._io.pos;
      this._debug.magnitudeExpr = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.magnitudeExpr = new StringArray(this._io, this, this._root);
      this.magnitudeExpr._read();
      this._debug.magnitudeExpr.end = this._io.pos;
      this._debug.delay = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.delay = this._io.readF4le();
      this._debug.delay.end = this._io.pos;
      this._debug.period = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.period = this._io.readF4le();
      this._debug.period.end = this._io.pos;
      this._debug.tickChance = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.tickChance = this._io.readF4le();
      this._debug.tickChance.end = this._io.pos;
      this._debug.delayedRequires = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.delayedRequires = new StringArray(this._io, this, this._root);
      this.delayedRequires._read();
      this._debug.delayedRequires.end = this._io.pos;
      this._debug.casterStack = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "Powers.AttribMod.CasterStackType" };
      this.casterStack = this._io.readU4le();
      this._debug.casterStack.end = this._io.pos;
      this._debug.stack = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "Powers.AttribMod.StackType" };
      this.stack = this._io.readU4le();
      this._debug.stack.end = this._io.pos;
      this._debug.stackLimit = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.stackLimit = this._io.readU4le();
      this._debug.stackLimit.end = this._io.pos;
      this._debug.stackKey = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.stackKey = this._io.readU4le();
      this._debug.stackKey.end = this._io.pos;
      this._debug.cancelEvents = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.cancelEvents = new PowerEventArray(this._io, this, this._root);
      this.cancelEvents._read();
      this._debug.cancelEvents.end = this._io.pos;
      this._debug.suppress = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.suppress = new SuppressArray(this._io, this, this._root);
      this.suppress._read();
      this._debug.suppress.end = this._io.pos;
      this._debug.boostModAllowed = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.boostModAllowed = new Attrib(this._io, this, this._root);
      this.boostModAllowed._read();
      this._debug.boostModAllowed.end = this._io.pos;
      this._debug.flags = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.flags = new AttribFlags(this._io, this, this._root);
      this.flags._read();
      this._debug.flags.end = this._io.pos;
      this._debug.messages = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.messages = new MessagesArray(this._io, this, this._root);
      this.messages._read();
      this._debug.messages.end = this._io.pos;
      this._debug.fx = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.fx = new FxArray(this._io, this, this._root);
      this.fx._read();
      this._debug.fx.end = this._io.pos;
      this._debug.params = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.params = new ParamsStruct(this._io, this, this._root);
      this.params._read();
      this._debug.params.end = this._io.pos;
    }

    return AttribMod;
  })();

  var CustomFxArray = Powers.CustomFxArray = (function() {
    function CustomFxArray(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    CustomFxArray.prototype._read = function() {
      this._debug.count = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.count = this._io.readU4le();
      this._debug.count.end = this._io.pos;
      this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.value = new Array(this.count);
      this._debug.value.arr = new Array(this.count);
      for (var i = 0; i < this.count; i++) {
        this._debug.value.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
        var _t_value = new CustomFxStruct(this._io, this, this._root);
        _t_value._read();
        this.value[i] = _t_value;
        this._debug.value.arr[i].end = this._io.pos;
      }
      this._debug.value.end = this._io.pos;
    }

    return CustomFxArray;
  })();

  var FxStruct = Powers.FxStruct = (function() {
    function FxStruct(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    FxStruct.prototype._read = function() {
      this._debug.len = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.len = this._io.readU4le();
      this._debug.len.end = this._io.pos;
      this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._raw_value = this._io.readBytes(this.len);
      var _io__raw_value = new KaitaiStream(this._raw_value);
      this.value = new Fx(_io__raw_value, this, this._root);
      this.value._read();
      this._debug.value.end = this._io.pos;
    }

    return FxStruct;
  })();

  var PowerRedirectStruct = Powers.PowerRedirectStruct = (function() {
    function PowerRedirectStruct(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    PowerRedirectStruct.prototype._read = function() {
      this._debug.len = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.len = this._io.readU4le();
      this._debug.len.end = this._io.pos;
      this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._raw_value = this._io.readBytes(this.len);
      var _io__raw_value = new KaitaiStream(this._raw_value);
      this.value = new PowerRedirect(_io__raw_value, this, this._root);
      this.value._read();
      this._debug.value.end = this._io.pos;
    }

    return PowerRedirectStruct;
  })();

  var Rgba = Powers.Rgba = (function() {
    function Rgba(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    Rgba.prototype._read = function() {
      this._debug.r = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.r = this._io.readU4le();
      this._debug.r.end = this._io.pos;
      this._debug.g = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.g = this._io.readU4le();
      this._debug.g.end = this._io.pos;
      this._debug.b = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.b = this._io.readU4le();
      this._debug.b.end = this._io.pos;
      this._debug.a = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.a = this._io.readU4le();
      this._debug.a.end = this._io.pos;
    }

    return Rgba;
  })();

  var SuppressArray = Powers.SuppressArray = (function() {
    function SuppressArray(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    SuppressArray.prototype._read = function() {
      this._debug.count = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.count = this._io.readU4le();
      this._debug.count.end = this._io.pos;
      this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.value = new Array(this.count);
      this._debug.value.arr = new Array(this.count);
      for (var i = 0; i < this.count; i++) {
        this._debug.value.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
        var _t_value = new SuppressStruct(this._io, this, this._root);
        _t_value._read();
        this.value[i] = _t_value;
        this._debug.value.arr[i].end = this._io.pos;
      }
      this._debug.value.end = this._io.pos;
    }

    return SuppressArray;
  })();

  var TargetTypeArray = Powers.TargetTypeArray = (function() {
    function TargetTypeArray(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    TargetTypeArray.prototype._read = function() {
      this._debug.count = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.count = this._io.readU4le();
      this._debug.count.end = this._io.pos;
      this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.value = new Array(this.count);
      this._debug.value.arr = new Array(this.count);
      for (var i = 0; i < this.count; i++) {
        this._debug.value.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
        var _t_value = new TargetType(this._io, this, this._root);
        _t_value._read();
        this.value[i] = _t_value;
        this._debug.value.arr[i].end = this._io.pos;
      }
      this._debug.value.end = this._io.pos;
    }

    return TargetTypeArray;
  })();

  var Effect = Powers.Effect = (function() {
    function Effect(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    Effect.prototype._read = function() {
      this._debug.tag = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.tag = new StringArray(this._io, this, this._root);
      this.tag._read();
      this._debug.tag.end = this._io.pos;
      this._debug.chance = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.chance = this._io.readF4le();
      this._debug.chance.end = this._io.pos;
      this._debug.procsPerMinute = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.procsPerMinute = this._io.readF4le();
      this._debug.procsPerMinute.end = this._io.pos;
      this._debug.delay = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.delay = this._io.readF4le();
      this._debug.delay.end = this._io.pos;
      this._debug.radiusInner = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.radiusInner = this._io.readF4le();
      this._debug.radiusInner.end = this._io.pos;
      this._debug.radiusOuter = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.radiusOuter = this._io.readF4le();
      this._debug.radiusOuter.end = this._io.pos;
      this._debug.requires = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.requires = new StringArray(this._io, this, this._root);
      this.requires._read();
      this._debug.requires.end = this._io.pos;
      this._debug.flags = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.flags = new EffectFlags(this._io, this, this._root);
      this.flags._read();
      this._debug.flags.end = this._io.pos;
      this._debug.evalFlags = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.evalFlags = this._io.readU4le();
      this._debug.evalFlags.end = this._io.pos;
      this._debug.attribMod = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.attribMod = new AttribModArray(this._io, this, this._root);
      this.attribMod._read();
      this._debug.attribMod.end = this._io.pos;
      this._debug.effect = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.effect = new EffectArray(this._io, this, this._root);
      this.effect._read();
      this._debug.effect.end = this._io.pos;
    }

    return Effect;
  })();

  var PstringArray = Powers.PstringArray = (function() {
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

  var PowerStruct = Powers.PowerStruct = (function() {
    function PowerStruct(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    PowerStruct.prototype._read = function() {
      this._debug.len = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.len = this._io.readU4le();
      this._debug.len.end = this._io.pos;
      this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._raw_value = this._io.readBytes(this.len);
      var _io__raw_value = new KaitaiStream(this._raw_value);
      this.value = new PowerBlock(_io__raw_value, this, this._root);
      this.value._read();
      this._debug.value.end = this._io.pos;
    }
    Object.defineProperty(PowerStruct.prototype, 'key', {
      get: function() {
        if (this._m_key !== undefined)
          return this._m_key;
        this._debug._m_key = {  };
        this._m_key = this.value.value.key;
        return this._m_key;
      }
    });

    return PowerStruct;
  })();

  var Fx = Powers.Fx = (function() {
    function Fx(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    Fx.prototype._read = function() {
      this._debug.continuingBits = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.continuingBits = new U4Array(this._io, this, this._root);
      this.continuingBits._read();
      this._debug.continuingBits.end = this._io.pos;
      this._debug.continuingFx = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.continuingFx = new String(this._io, this, this._root);
      this.continuingFx._read();
      this._debug.continuingFx.end = this._io.pos;
      this._debug.conditionalBits = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.conditionalBits = new U4Array(this._io, this, this._root);
      this.conditionalBits._read();
      this._debug.conditionalBits.end = this._io.pos;
      this._debug.conditionalFx = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.conditionalFx = new String(this._io, this, this._root);
      this.conditionalFx._read();
      this._debug.conditionalFx.end = this._io.pos;
    }

    return Fx;
  })();

  var PowerRedirectArray = Powers.PowerRedirectArray = (function() {
    function PowerRedirectArray(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    PowerRedirectArray.prototype._read = function() {
      this._debug.count = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.count = this._io.readU4le();
      this._debug.count.end = this._io.pos;
      this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.value = new Array(this.count);
      this._debug.value.arr = new Array(this.count);
      for (var i = 0; i < this.count; i++) {
        this._debug.value.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
        var _t_value = new PowerRedirectStruct(this._io, this, this._root);
        _t_value._read();
        this.value[i] = _t_value;
        this._debug.value.arr[i].end = this._io.pos;
      }
      this._debug.value.end = this._io.pos;
    }

    return PowerRedirectArray;
  })();

  var EffectStruct = Powers.EffectStruct = (function() {
    function EffectStruct(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    EffectStruct.prototype._read = function() {
      this._debug.len = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.len = this._io.readU4le();
      this._debug.len.end = this._io.pos;
      this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._raw_value = this._io.readBytes(this.len);
      var _io__raw_value = new KaitaiStream(this._raw_value);
      this.value = new Effect(_io__raw_value, this, this._root);
      this.value._read();
      this._debug.value.end = this._io.pos;
    }

    return EffectStruct;
  })();

  var StringArray = Powers.StringArray = (function() {
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

  var Suppress = Powers.Suppress = (function() {
    function Suppress(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    Suppress.prototype._read = function() {
      this._debug.event = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.event = this._io.readU4le();
      this._debug.event.end = this._io.pos;
      this._debug.seconds = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.seconds = this._io.readU4le();
      this._debug.seconds.end = this._io.pos;
      this._debug.always = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.always = new Bool(this._io, this, this._root);
      this.always._read();
      this._debug.always.end = this._io.pos;
    }

    return Suppress;
  })();

  var String = Powers.String = (function() {
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

  var CastFlags = Powers.CastFlags = (function() {
    function CastFlags(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    CastFlags.prototype._read = function() {
      this._debug.nearGround = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.nearGround = new Bool(this._io, this, this._root);
      this.nearGround._read();
      this._debug.nearGround.end = this._io.pos;
      this._debug.targetNearGround = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.targetNearGround = new Bool(this._io, this, this._root);
      this.targetNearGround._read();
      this._debug.targetNearGround.end = this._io.pos;
      this._debug._unnamed2 = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._unnamed2 = this._io.readBitsInt(6);
      this._debug._unnamed2.end = this._io.pos;
      this._debug.castableDeadOrAlive = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.castableDeadOrAlive = this._io.readBitsInt(1) != 0;
      this._debug.castableDeadOrAlive.end = this._io.pos;
      this._debug.castableAfterDeath = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.castableAfterDeath = this._io.readBitsInt(1) != 0;
      this._debug.castableAfterDeath.end = this._io.pos;
      this._debug._unnamed5 = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._unnamed5 = this._io.readBitsInt(24);
      this._debug._unnamed5.end = this._io.pos;
      this._io.alignToByte();
      this._debug.castThroughHold = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.castThroughHold = new Bool(this._io, this, this._root);
      this.castThroughHold._read();
      this._debug.castThroughHold.end = this._io.pos;
      this._debug.castThroughSleep = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.castThroughSleep = new Bool(this._io, this, this._root);
      this.castThroughSleep._read();
      this._debug.castThroughSleep.end = this._io.pos;
      this._debug.castThroughStun = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.castThroughStun = new Bool(this._io, this, this._root);
      this.castThroughStun._read();
      this._debug.castThroughStun.end = this._io.pos;
      this._debug.castThroughTerrorize = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.castThroughTerrorize = new Bool(this._io, this, this._root);
      this.castThroughTerrorize._read();
      this._debug.castThroughTerrorize.end = this._io.pos;
      this._debug.toggleIgnoreHold = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.toggleIgnoreHold = new Bool(this._io, this, this._root);
      this.toggleIgnoreHold._read();
      this._debug.toggleIgnoreHold.end = this._io.pos;
      this._debug.toggleIgnoreSleep = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.toggleIgnoreSleep = new Bool(this._io, this, this._root);
      this.toggleIgnoreSleep._read();
      this._debug.toggleIgnoreSleep.end = this._io.pos;
      this._debug.toggleIgnoreStun = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.toggleIgnoreStun = new Bool(this._io, this, this._root);
      this.toggleIgnoreStun._read();
      this._debug.toggleIgnoreStun.end = this._io.pos;
      this._debug.ignoreLevelBought = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.ignoreLevelBought = new Bool(this._io, this, this._root);
      this.ignoreLevelBought._read();
      this._debug.ignoreLevelBought.end = this._io.pos;
      this._debug.shootThroughUntouchable = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.shootThroughUntouchable = new Bool(this._io, this, this._root);
      this.shootThroughUntouchable._read();
      this._debug.shootThroughUntouchable.end = this._io.pos;
      this._debug.interruptLikeSleep = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.interruptLikeSleep = new Bool(this._io, this, this._root);
      this.interruptLikeSleep._read();
      this._debug.interruptLikeSleep.end = this._io.pos;
    }

    return CastFlags;
  })();

  var Pstring = Powers.Pstring = (function() {
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

  var PowerRedirect = Powers.PowerRedirect = (function() {
    function PowerRedirect(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    PowerRedirect.prototype._read = function() {
      this._debug.power = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.power = new String(this._io, this, this._root);
      this.power._read();
      this._debug.power.end = this._io.pos;
      this._debug.requires = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.requires = new StringArray(this._io, this, this._root);
      this.requires._read();
      this._debug.requires.end = this._io.pos;
      this._debug.showInInfo = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.showInInfo = this._io.readU4le();
      this._debug.showInInfo.end = this._io.pos;
    }

    return PowerRedirect;
  })();

  var PowerArray = Powers.PowerArray = (function() {
    function PowerArray(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    PowerArray.prototype._read = function() {
      this._debug.count = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.count = this._io.readU4le();
      this._debug.count.end = this._io.pos;
      this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.value = new Array(this.count);
      this._debug.value.arr = new Array(this.count);
      for (var i = 0; i < this.count; i++) {
        this._debug.value.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
        var _t_value = new PowerStruct(this._io, this, this._root);
        _t_value._read();
        this.value[i] = _t_value;
        this._debug.value.arr[i].end = this._io.pos;
      }
      this._debug.value.end = this._io.pos;
    }

    return PowerArray;
  })();

  var TargetInfoArray = Powers.TargetInfoArray = (function() {
    function TargetInfoArray(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    TargetInfoArray.prototype._read = function() {
      this._debug.count = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.count = this._io.readU4le();
      this._debug.count.end = this._io.pos;
      this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.value = new Array(this.count);
      this._debug.value.arr = new Array(this.count);
      for (var i = 0; i < this.count; i++) {
        this._debug.value.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
        var _t_value = new TargetInfoStruct(this._io, this, this._root);
        _t_value._read();
        this.value[i] = _t_value;
        this._debug.value.arr[i].end = this._io.pos;
      }
      this._debug.value.end = this._io.pos;
    }

    return TargetInfoArray;
  })();

  var TargetInfo = Powers.TargetInfo = (function() {
    function TargetInfo(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    TargetInfo.prototype._read = function() {
      this._debug.marker = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.marker = new StringArray(this._io, this, this._root);
      this.marker._read();
      this._debug.marker.end = this._io.pos;
      this._debug.count = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.count = new U4Array(this._io, this, this._root);
      this.count._read();
      this._debug.count.end = this._io.pos;
    }

    return TargetInfo;
  })();

  var AttribArray = Powers.AttribArray = (function() {
    function AttribArray(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    AttribArray.prototype._read = function() {
      this._debug.count = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.count = this._io.readU4le();
      this._debug.count.end = this._io.pos;
      this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.value = new Array(this.count);
      this._debug.value.arr = new Array(this.count);
      for (var i = 0; i < this.count; i++) {
        this._debug.value.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
        var _t_value = new Attrib(this._io, this, this._root);
        _t_value._read();
        this.value[i] = _t_value;
        this._debug.value.arr[i].end = this._io.pos;
      }
      this._debug.value.end = this._io.pos;
    }

    return AttribArray;
  })();

  var Bool = Powers.Bool = (function() {
    function Bool(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    Bool.prototype._read = function() {
      this._debug._unnamed0 = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._unnamed0 = this._io.readBitsInt(7);
      this._debug._unnamed0.end = this._io.pos;
      this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.value = this._io.readBitsInt(1) != 0;
      this._debug.value.end = this._io.pos;
      this._io.alignToByte();
      this._debug._unnamed2 = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._unnamed2 = this._io.readBytes(3);
      this._debug._unnamed2.end = this._io.pos;
    }

    return Bool;
  })();

  var AttribModArray = Powers.AttribModArray = (function() {
    function AttribModArray(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    AttribModArray.prototype._read = function() {
      this._debug.count = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.count = this._io.readU4le();
      this._debug.count.end = this._io.pos;
      this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.value = new Array(this.count);
      this._debug.value.arr = new Array(this.count);
      for (var i = 0; i < this.count; i++) {
        this._debug.value.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
        var _t_value = new AttribModStruct(this._io, this, this._root);
        _t_value._read();
        this.value[i] = _t_value;
        this._debug.value.arr[i].end = this._io.pos;
      }
      this._debug.value.end = this._io.pos;
    }

    return AttribModArray;
  })();

  var PowerEventArray = Powers.PowerEventArray = (function() {
    PowerEventArray.PowerEvent = Object.freeze({
      ACTIVATE: 0,
      ACTIVATE_ATTACK_CLICK: 1,
      ATTACKED: 2,
      ATTACKED_NO_EXCEPTION: 3,
      HELPED: 4,
      HIT: 5,
      MISS: 6,
      END_ACTIVATE: 7,
      ATTACKED_BY_OTHER: 8,
      ATTACKED_BY_OTHER_CLICK: 9,
      HELPED_BY_OTHER: 10,
      HIT_BY_OTHER: 11,
      HIT_BY_FRIEND: 12,
      HIT_BY_FOE: 13,
      MISS_BY_OTHER: 14,
      MISS_BY_FRIEND: 15,
      MISS_BY_FOE: 16,
      DAMAGED: 17,
      HEALED: 18,
      STUNNED: 19,
      IMMOBILIZED: 20,
      HELD: 21,
      SLEEP: 22,
      TERRORIZED: 23,
      CONFUSED: 24,
      UNTOUCHABLE: 25,
      INTANGIBLE: 26,
      ONLY_AFFECTS_SELF: 27,
      ANY_STATUS: 28,
      KNOCKED: 29,
      DEFEATED: 30,
      MISSION_OBJECT_CLICK: 31,
      MOVED: 32,
      DEFIANT: 33,

      0: "ACTIVATE",
      1: "ACTIVATE_ATTACK_CLICK",
      2: "ATTACKED",
      3: "ATTACKED_NO_EXCEPTION",
      4: "HELPED",
      5: "HIT",
      6: "MISS",
      7: "END_ACTIVATE",
      8: "ATTACKED_BY_OTHER",
      9: "ATTACKED_BY_OTHER_CLICK",
      10: "HELPED_BY_OTHER",
      11: "HIT_BY_OTHER",
      12: "HIT_BY_FRIEND",
      13: "HIT_BY_FOE",
      14: "MISS_BY_OTHER",
      15: "MISS_BY_FRIEND",
      16: "MISS_BY_FOE",
      17: "DAMAGED",
      18: "HEALED",
      19: "STUNNED",
      20: "IMMOBILIZED",
      21: "HELD",
      22: "SLEEP",
      23: "TERRORIZED",
      24: "CONFUSED",
      25: "UNTOUCHABLE",
      26: "INTANGIBLE",
      27: "ONLY_AFFECTS_SELF",
      28: "ANY_STATUS",
      29: "KNOCKED",
      30: "DEFEATED",
      31: "MISSION_OBJECT_CLICK",
      32: "MOVED",
      33: "DEFIANT",
    });

    function PowerEventArray(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    PowerEventArray.prototype._read = function() {
      this._debug.count = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.count = this._io.readU4le();
      this._debug.count.end = this._io.pos;
      this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "Powers.PowerEventArray.PowerEvent" };
      this.value = new Array(this.count);
      this._debug.value.arr = new Array(this.count);
      for (var i = 0; i < this.count; i++) {
        this._debug.value.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "Powers.PowerEventArray.PowerEvent" };
        this.value[i] = this._io.readU4le();
        this._debug.value.arr[i].end = this._io.pos;
      }
      this._debug.value.end = this._io.pos;
    }

    return PowerEventArray;
  })();

  var PowerFx = Powers.PowerFx = (function() {
    function PowerFx(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    PowerFx.prototype._read = function() {
      this._debug.attackBits = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.attackBits = new U4Array(this._io, this, this._root);
      this.attackBits._read();
      this._debug.attackBits.end = this._io.pos;
      this._debug.blockBits = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.blockBits = new U4Array(this._io, this, this._root);
      this.blockBits._read();
      this._debug.blockBits.end = this._io.pos;
      this._debug.windUpBits = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.windUpBits = new U4Array(this._io, this, this._root);
      this.windUpBits._read();
      this._debug.windUpBits.end = this._io.pos;
      this._debug.hitBits = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.hitBits = new U4Array(this._io, this, this._root);
      this.hitBits._read();
      this._debug.hitBits.end = this._io.pos;
      this._debug.deathBits = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.deathBits = new U4Array(this._io, this, this._root);
      this.deathBits._read();
      this._debug.deathBits.end = this._io.pos;
      this._debug.activationBits = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.activationBits = new U4Array(this._io, this, this._root);
      this.activationBits._read();
      this._debug.activationBits.end = this._io.pos;
      this._debug.deactivationBits = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.deactivationBits = new U4Array(this._io, this, this._root);
      this.deactivationBits._read();
      this._debug.deactivationBits.end = this._io.pos;
      this._debug.initialAttackBits = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.initialAttackBits = new U4Array(this._io, this, this._root);
      this.initialAttackBits._read();
      this._debug.initialAttackBits.end = this._io.pos;
      this._debug.continuingBits = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.continuingBits = new U4Array(this._io, this, this._root);
      this.continuingBits._read();
      this._debug.continuingBits.end = this._io.pos;
      this._debug.conditionalBits = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.conditionalBits = new U4Array(this._io, this, this._root);
      this.conditionalBits._read();
      this._debug.conditionalBits.end = this._io.pos;
      this._debug.activationFx = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.activationFx = new String(this._io, this, this._root);
      this.activationFx._read();
      this._debug.activationFx.end = this._io.pos;
      this._debug.deactivationFx = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.deactivationFx = new String(this._io, this, this._root);
      this.deactivationFx._read();
      this._debug.deactivationFx.end = this._io.pos;
      this._debug.attackFx = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.attackFx = new String(this._io, this, this._root);
      this.attackFx._read();
      this._debug.attackFx.end = this._io.pos;
      this._debug.secondaryAttackFx = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.secondaryAttackFx = new String(this._io, this, this._root);
      this.secondaryAttackFx._read();
      this._debug.secondaryAttackFx.end = this._io.pos;
      this._debug.hitFx = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.hitFx = new String(this._io, this, this._root);
      this.hitFx._read();
      this._debug.hitFx.end = this._io.pos;
      this._debug.windUpFx = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.windUpFx = new String(this._io, this, this._root);
      this.windUpFx._read();
      this._debug.windUpFx.end = this._io.pos;
      this._debug.blockFx = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.blockFx = new String(this._io, this, this._root);
      this.blockFx._read();
      this._debug.blockFx.end = this._io.pos;
      this._debug.deathFx = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.deathFx = new String(this._io, this, this._root);
      this.deathFx._read();
      this._debug.deathFx.end = this._io.pos;
      this._debug.initialAttackFx = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.initialAttackFx = new String(this._io, this, this._root);
      this.initialAttackFx._read();
      this._debug.initialAttackFx.end = this._io.pos;
      this._debug.continuingFx = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.continuingFx = new String(this._io, this, this._root);
      this.continuingFx._read();
      this._debug.continuingFx.end = this._io.pos;
      this._debug.continuingFx1 = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.continuingFx1 = new String(this._io, this, this._root);
      this.continuingFx1._read();
      this._debug.continuingFx1.end = this._io.pos;
      this._debug.continuingFx2 = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.continuingFx2 = new String(this._io, this, this._root);
      this.continuingFx2._read();
      this._debug.continuingFx2.end = this._io.pos;
      this._debug.continuingFx3 = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.continuingFx3 = new String(this._io, this, this._root);
      this.continuingFx3._read();
      this._debug.continuingFx3.end = this._io.pos;
      this._debug.continuingFx4 = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.continuingFx4 = new String(this._io, this, this._root);
      this.continuingFx4._read();
      this._debug.continuingFx4.end = this._io.pos;
      this._debug.conditionalFx = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.conditionalFx = new String(this._io, this, this._root);
      this.conditionalFx._read();
      this._debug.conditionalFx.end = this._io.pos;
      this._debug.conditionalFx1 = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.conditionalFx1 = new String(this._io, this, this._root);
      this.conditionalFx1._read();
      this._debug.conditionalFx1.end = this._io.pos;
      this._debug.conditionalFx2 = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.conditionalFx2 = new String(this._io, this, this._root);
      this.conditionalFx2._read();
      this._debug.conditionalFx2.end = this._io.pos;
      this._debug.conditionalFx3 = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.conditionalFx3 = new String(this._io, this, this._root);
      this.conditionalFx3._read();
      this._debug.conditionalFx3.end = this._io.pos;
      this._debug.conditionalFx4 = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.conditionalFx4 = new String(this._io, this, this._root);
      this.conditionalFx4._read();
      this._debug.conditionalFx4.end = this._io.pos;
      this._debug.modeBits = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.modeBits = new U4Array(this._io, this, this._root);
      this.modeBits._read();
      this._debug.modeBits.end = this._io.pos;
      this._debug.framesBeforeHit = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.framesBeforeHit = this._io.readU4le();
      this._debug.framesBeforeHit.end = this._io.pos;
      this._debug.framesBeforeSecondaryHit = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.framesBeforeSecondaryHit = this._io.readU4le();
      this._debug.framesBeforeSecondaryHit.end = this._io.pos;
      this._debug.delayedHit = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.delayedHit = new Bool(this._io, this, this._root);
      this.delayedHit._read();
      this._debug.delayedHit.end = this._io.pos;
      this._debug.attackFrames = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.attackFrames = this._io.readU4le();
      this._debug.attackFrames.end = this._io.pos;
      this._debug.initialFramesBeforeHit = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.initialFramesBeforeHit = this._io.readU4le();
      this._debug.initialFramesBeforeHit.end = this._io.pos;
      this._debug.initialAttackFxframeDelay = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.initialAttackFxframeDelay = this._io.readU4le();
      this._debug.initialAttackFxframeDelay.end = this._io.pos;
      this._debug.projectileSpeed = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.projectileSpeed = this._io.readF4le();
      this._debug.projectileSpeed.end = this._io.pos;
      this._debug.secondaryProjectileSpeed = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.secondaryProjectileSpeed = this._io.readF4le();
      this._debug.secondaryProjectileSpeed.end = this._io.pos;
      this._debug.initialFramesBeforeBlock = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.initialFramesBeforeBlock = this._io.readU4le();
      this._debug.initialFramesBeforeBlock.end = this._io.pos;
      this._debug.ignoreAttackTimeErrors = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.ignoreAttackTimeErrors = new String(this._io, this, this._root);
      this.ignoreAttackTimeErrors._read();
      this._debug.ignoreAttackTimeErrors.end = this._io.pos;
      this._debug.framesBeforeBlock = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.framesBeforeBlock = this._io.readU4le();
      this._debug.framesBeforeBlock.end = this._io.pos;
      this._debug.fxImportant = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.fxImportant = new Bool(this._io, this, this._root);
      this.fxImportant._read();
      this._debug.fxImportant.end = this._io.pos;
      this._debug.primaryTint = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.primaryTint = new Rgba(this._io, this, this._root);
      this.primaryTint._read();
      this._debug.primaryTint.end = this._io.pos;
      this._debug.secondaryTint = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.secondaryTint = new Rgba(this._io, this, this._root);
      this.secondaryTint._read();
      this._debug.secondaryTint.end = this._io.pos;
    }

    return PowerFx;
  })();

  var MessagesArray = Powers.MessagesArray = (function() {
    function MessagesArray(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    MessagesArray.prototype._read = function() {
      this._debug.count = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.count = this._io.readU4le();
      this._debug.count.end = this._io.pos;
      this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.value = new Array(this.count);
      this._debug.value.arr = new Array(this.count);
      for (var i = 0; i < this.count; i++) {
        this._debug.value.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
        var _t_value = new MessagesStruct(this._io, this, this._root);
        _t_value._read();
        this.value[i] = _t_value;
        this._debug.value.arr[i].end = this._io.pos;
      }
      this._debug.value.end = this._io.pos;
    }

    return MessagesArray;
  })();

  var U4Array = Powers.U4Array = (function() {
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

  var BoostTypeArray = Powers.BoostTypeArray = (function() {
    function BoostTypeArray(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    BoostTypeArray.prototype._read = function() {
      this._debug.count = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.count = this._io.readU4le();
      this._debug.count.end = this._io.pos;
      this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.value = new Array(this.count);
      this._debug.value.arr = new Array(this.count);
      for (var i = 0; i < this.count; i++) {
        this._debug.value.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
        var _t_value = new BoostType(this._io, this, this._root);
        _t_value._read();
        this.value[i] = _t_value;
        this._debug.value.arr[i].end = this._io.pos;
      }
      this._debug.value.end = this._io.pos;
    }

    return BoostTypeArray;
  })();

  var CustomFx = Powers.CustomFx = (function() {
    function CustomFx(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    CustomFx.prototype._read = function() {
      this._debug.token = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.token = new String(this._io, this, this._root);
      this.token._read();
      this._debug.token.end = this._io.pos;
      this._debug.altTheme = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.altTheme = new StringArray(this._io, this, this._root);
      this.altTheme._read();
      this._debug.altTheme.end = this._io.pos;
      this._debug.sourceFile = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.sourceFile = new String(this._io, this, this._root);
      this.sourceFile._read();
      this._debug.sourceFile.end = this._io.pos;
      this._debug.category = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.category = new String(this._io, this, this._root);
      this.category._read();
      this._debug.category.end = this._io.pos;
      this._debug.displayName = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.displayName = new String(this._io, this, this._root);
      this.displayName._read();
      this._debug.displayName.end = this._io.pos;
      this._debug.powerFx = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.powerFx = new PowerFx(this._io, this, this._root);
      this.powerFx._read();
      this._debug.powerFx.end = this._io.pos;
      this._debug.palette = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.palette = new String(this._io, this, this._root);
      this.palette._read();
      this._debug.palette.end = this._io.pos;
    }

    return CustomFx;
  })();

  var Mode = Powers.Mode = (function() {
    Mode.Mode = Object.freeze({
      SERVER_TRAY_OVERRIDE: 0,
      PEACEBRINGER_BLASTER_MODE: 1,
      PEACEBRINGER_TANKER_MODE: 2,
      PEACEBRINGER_LIGHT_MODE: 3,
      WARSHADE_BLASTER_MODE: 4,
      WARSHADE_TANKER_MODE: 5,
      SHIVAN_MODE: 6,
      DISABLE_TRAVEL: 7,
      DISABLE_POOL: 8,
      DISABLE_TEMP: 9,
      DISABLE_TELEPORT: 10,
      DISABLE_PORTALS: 11,
      DISABLE_ALL: 12,
      DISABLE_INSPIRATION: 13,
      DISABLE_INSPIRATION_SMALL: 14,
      DISABLE_INSPIRATION_MEDIUM: 15,
      DISABLE_INSPIRATION_LARGE: 16,
      DISABLE_INSPIRATION_SPECIAL: 17,
      DISABLE_SET_BONUS: 18,
      DISABLE_RECALL: 19,
      DISABLE_WALK: 20,
      DISABLE_SUICIDE: 21,
      DISABLE_ROCKET_BOARD: 22,
      DISABLE_FLYING_CARPET: 23,
      DISABLE_VOID_SKIFF: 24,
      DISABLE_STEAM_JUMP: 25,
      DISABLE_JUMP_PACK: 26,
      ARENA: 27,
      DISABLE_AWAKEN: 28,
      DISABLE_TOGGLE: 29,
      MASTERMIND_UPGRADE_1: 30,
      MASTERMIND_UPGRADE_2: 31,
      DOMINATION: 32,
      DOMINATION_ACTIVE: 33,
      VENGEANCE_MODE: 34,
      PROC_MODE: 35,
      NO_SHOPPING: 36,
      DISABLE_EPIC: 37,
      RAID_DEFENDER_MODE: 38,
      RAID_ATTACKER_MODE: 39,
      RANGE_FINDER_MODE: 40,
      TEMPORAL_DISRUPTION: 41,
      DD_STATUS_MODE_1: 42,
      DD_STATUS_MODE_2: 43,
      DD_DEBUFF_MODE_1: 44,
      DD_DEBUFF_MODE_2: 45,
      DD_BONUS_AO_EMODE_1: 46,
      DD_BONUS_AO_EMODE_2: 47,
      DD_BONUS_DO_TMODE_1: 48,
      DD_BONUS_DO_TMODE_2: 49,
      KILL_TK: 50,
      ENGAGED: 51,
      DEFIANT: 52,
      LOST_CURE: 53,
      MIDNIGHT_DISGUISE: 54,
      CHAIN_INDUCTION: 55,
      CHAIN_STUN_MODE: 56,
      CHAIN_JOLT_MODE: 57,
      CHAIN_CONFUSE_MODE: 58,
      SEQUESTOR_1: 59,
      SEQUESTOR_2: 60,
      SEQUESTOR_3: 61,
      NO_NUKES: 62,
      HAC_OFFENSE: 63,
      HAC_DEFENSE: 64,
      DISABLE_JUGGERNAUT: 65,
      TOWER_PROTECTION: 66,
      PANACEA: 67,
      GROUNDED: 68,
      LETHAL_AMMO: 69,
      ICE_AMMO: 70,
      FIRE_AMMO: 71,
      TOXIC_AMMO: 72,
      ARCHITECT_MISSION_MODE: 73,
      CO_OP_TEAM: 74,
      BROKEN: 75,
      DISABLE_FORTUNE_BUFFS: 76,
      IN_COSTUME: 77,
      WINTERY_AEGIS: 78,
      ROIDED_IDF: 79,
      HARMONIC_DESTABILIZER: 80,
      HIDDEN_ATTACK: 81,
      SIPHON_MODE: 82,
      TURRET_STAGE1: 83,
      TURRET_STAGE2: 84,
      TURRET_STAGE3: 85,
      TURRET_STAGE4: 86,
      TURRET_STAGE5: 87,
      DEFEATED_OIL_SLICK: 88,
      MARKED_FOR_DEATH: 89,
      ENRAGED: 90,
      TARGETING_RETICULE: 91,
      NOT_IN_COMBAT: 92,
      ULTIMATE_INSPIRE: 93,
      AMBROSIA_INSPIRE: 94,
      EO_EINSPIRE: 95,
      FAST_MODE: 96,
      OPPORTUNITY: 97,
      OPPORTUNITY_LOCK: 98,
      OPPORTUNITY_SUSTAIN: 99,
      OPPORTUNITY_SMASHING: 100,
      OPPORTUNITY_LETHAL: 101,
      OPPORTUNITY_FIRE: 102,
      OPPORTUNITY_COLD: 103,
      OPPORTUNITY_ENERGY: 104,
      OPPORTUNITY_NEGATIVE: 105,
      OPPORTUNITY_TOXIC: 106,
      OPPORTUNITY_PSIONIC: 107,
      INFECTED_01: 108,
      INFECTED_02: 109,
      INFECTED_03: 110,
      INCARNATE_EQUIPPED: 111,
      ONE_POWER_CELL: 112,
      TWO_POWER_CELL: 113,
      THREE_POWER_CELL: 114,
      ENTANGLED_A: 115,
      ENTANGLED_B: 116,
      HUNTER_MODE: 117,
      PROWLER_MODE: 118,
      PROWLER_CLOAK_MODE: 119,
      HYBRID_LOCKOUT: 120,
      RESTED_ADAPTATION: 121,
      DEFENSIVE_ADAPTATION: 122,
      OFFENSIVE_ADAPTATION: 123,
      CLEAR_SKIES: 124,
      CLOUDED_SKIES: 125,
      SPEEDOF_SOUND_ON: 126,
      MIGHTY_LEAP_ON: 127,
      JETPACK_ON: 128,
      MYSTIC_FLIGHT_ON: 129,
      FREE_RUNNING_ON: 130,
      ENERGY_FOCUS: 131,

      0: "SERVER_TRAY_OVERRIDE",
      1: "PEACEBRINGER_BLASTER_MODE",
      2: "PEACEBRINGER_TANKER_MODE",
      3: "PEACEBRINGER_LIGHT_MODE",
      4: "WARSHADE_BLASTER_MODE",
      5: "WARSHADE_TANKER_MODE",
      6: "SHIVAN_MODE",
      7: "DISABLE_TRAVEL",
      8: "DISABLE_POOL",
      9: "DISABLE_TEMP",
      10: "DISABLE_TELEPORT",
      11: "DISABLE_PORTALS",
      12: "DISABLE_ALL",
      13: "DISABLE_INSPIRATION",
      14: "DISABLE_INSPIRATION_SMALL",
      15: "DISABLE_INSPIRATION_MEDIUM",
      16: "DISABLE_INSPIRATION_LARGE",
      17: "DISABLE_INSPIRATION_SPECIAL",
      18: "DISABLE_SET_BONUS",
      19: "DISABLE_RECALL",
      20: "DISABLE_WALK",
      21: "DISABLE_SUICIDE",
      22: "DISABLE_ROCKET_BOARD",
      23: "DISABLE_FLYING_CARPET",
      24: "DISABLE_VOID_SKIFF",
      25: "DISABLE_STEAM_JUMP",
      26: "DISABLE_JUMP_PACK",
      27: "ARENA",
      28: "DISABLE_AWAKEN",
      29: "DISABLE_TOGGLE",
      30: "MASTERMIND_UPGRADE_1",
      31: "MASTERMIND_UPGRADE_2",
      32: "DOMINATION",
      33: "DOMINATION_ACTIVE",
      34: "VENGEANCE_MODE",
      35: "PROC_MODE",
      36: "NO_SHOPPING",
      37: "DISABLE_EPIC",
      38: "RAID_DEFENDER_MODE",
      39: "RAID_ATTACKER_MODE",
      40: "RANGE_FINDER_MODE",
      41: "TEMPORAL_DISRUPTION",
      42: "DD_STATUS_MODE_1",
      43: "DD_STATUS_MODE_2",
      44: "DD_DEBUFF_MODE_1",
      45: "DD_DEBUFF_MODE_2",
      46: "DD_BONUS_AO_EMODE_1",
      47: "DD_BONUS_AO_EMODE_2",
      48: "DD_BONUS_DO_TMODE_1",
      49: "DD_BONUS_DO_TMODE_2",
      50: "KILL_TK",
      51: "ENGAGED",
      52: "DEFIANT",
      53: "LOST_CURE",
      54: "MIDNIGHT_DISGUISE",
      55: "CHAIN_INDUCTION",
      56: "CHAIN_STUN_MODE",
      57: "CHAIN_JOLT_MODE",
      58: "CHAIN_CONFUSE_MODE",
      59: "SEQUESTOR_1",
      60: "SEQUESTOR_2",
      61: "SEQUESTOR_3",
      62: "NO_NUKES",
      63: "HAC_OFFENSE",
      64: "HAC_DEFENSE",
      65: "DISABLE_JUGGERNAUT",
      66: "TOWER_PROTECTION",
      67: "PANACEA",
      68: "GROUNDED",
      69: "LETHAL_AMMO",
      70: "ICE_AMMO",
      71: "FIRE_AMMO",
      72: "TOXIC_AMMO",
      73: "ARCHITECT_MISSION_MODE",
      74: "CO_OP_TEAM",
      75: "BROKEN",
      76: "DISABLE_FORTUNE_BUFFS",
      77: "IN_COSTUME",
      78: "WINTERY_AEGIS",
      79: "ROIDED_IDF",
      80: "HARMONIC_DESTABILIZER",
      81: "HIDDEN_ATTACK",
      82: "SIPHON_MODE",
      83: "TURRET_STAGE1",
      84: "TURRET_STAGE2",
      85: "TURRET_STAGE3",
      86: "TURRET_STAGE4",
      87: "TURRET_STAGE5",
      88: "DEFEATED_OIL_SLICK",
      89: "MARKED_FOR_DEATH",
      90: "ENRAGED",
      91: "TARGETING_RETICULE",
      92: "NOT_IN_COMBAT",
      93: "ULTIMATE_INSPIRE",
      94: "AMBROSIA_INSPIRE",
      95: "EO_EINSPIRE",
      96: "FAST_MODE",
      97: "OPPORTUNITY",
      98: "OPPORTUNITY_LOCK",
      99: "OPPORTUNITY_SUSTAIN",
      100: "OPPORTUNITY_SMASHING",
      101: "OPPORTUNITY_LETHAL",
      102: "OPPORTUNITY_FIRE",
      103: "OPPORTUNITY_COLD",
      104: "OPPORTUNITY_ENERGY",
      105: "OPPORTUNITY_NEGATIVE",
      106: "OPPORTUNITY_TOXIC",
      107: "OPPORTUNITY_PSIONIC",
      108: "INFECTED_01",
      109: "INFECTED_02",
      110: "INFECTED_03",
      111: "INCARNATE_EQUIPPED",
      112: "ONE_POWER_CELL",
      113: "TWO_POWER_CELL",
      114: "THREE_POWER_CELL",
      115: "ENTANGLED_A",
      116: "ENTANGLED_B",
      117: "HUNTER_MODE",
      118: "PROWLER_MODE",
      119: "PROWLER_CLOAK_MODE",
      120: "HYBRID_LOCKOUT",
      121: "RESTED_ADAPTATION",
      122: "DEFENSIVE_ADAPTATION",
      123: "OFFENSIVE_ADAPTATION",
      124: "CLEAR_SKIES",
      125: "CLOUDED_SKIES",
      126: "SPEEDOF_SOUND_ON",
      127: "MIGHTY_LEAP_ON",
      128: "JETPACK_ON",
      129: "MYSTIC_FLIGHT_ON",
      130: "FREE_RUNNING_ON",
      131: "ENERGY_FOCUS",
    });

    function Mode(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    Mode.prototype._read = function() {
      this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "Powers.Mode.Mode" };
      this.value = this._io.readU4le();
      this._debug.value.end = this._io.pos;
    }

    return Mode;
  })();

  var TargetType = Powers.TargetType = (function() {
    TargetType.TargetType = Object.freeze({
      NONE: 0,
      CASTER: 1,
      PLAYER: 2,
      PLAYER_HERO: 3,
      PLAYER_VILLAIN: 4,
      DEAD_PLAYER: 5,
      DEAD_PLAYER_FRIEND: 6,
      DEAD_PLAYER_FOE: 7,
      TEAMMATE: 8,
      DEAD_TEAMMATE: 9,
      DEAD_OR_ALIVE_TEAMMATE: 10,
      VILLAIN: 11,
      DEAD_VILLAIN: 12,
      NPC: 13,
      DEAD_OR_ALIVE_FRIEND: 14,
      DEAD_FRIEND: 15,
      FRIEND: 16,
      DEAD_OR_ALIVE_FOE: 17,
      DEAD_FOE: 18,
      FOE: 19,
      LOCATION: 20,
      ANY: 21,
      TELEPORT: 22,
      DEAD_OR_ALIVE_MY_PET: 23,
      DEAD_MY_PET: 24,
      MY_PET: 25,
      MY_OWNER: 26,
      MY_CREATOR: 27,
      MY_CREATION: 28,
      DEAD_MY_CREATION: 29,
      DEAD_OR_ALIVE_MY_CREATION: 30,
      LEAGUEMATE: 31,
      DEAD_LEAGUEMATE: 32,
      DEAD_OR_ALIVE_LEAGUEMATE: 33,
      POSITION: 34,

      0: "NONE",
      1: "CASTER",
      2: "PLAYER",
      3: "PLAYER_HERO",
      4: "PLAYER_VILLAIN",
      5: "DEAD_PLAYER",
      6: "DEAD_PLAYER_FRIEND",
      7: "DEAD_PLAYER_FOE",
      8: "TEAMMATE",
      9: "DEAD_TEAMMATE",
      10: "DEAD_OR_ALIVE_TEAMMATE",
      11: "VILLAIN",
      12: "DEAD_VILLAIN",
      13: "NPC",
      14: "DEAD_OR_ALIVE_FRIEND",
      15: "DEAD_FRIEND",
      16: "FRIEND",
      17: "DEAD_OR_ALIVE_FOE",
      18: "DEAD_FOE",
      19: "FOE",
      20: "LOCATION",
      21: "ANY",
      22: "TELEPORT",
      23: "DEAD_OR_ALIVE_MY_PET",
      24: "DEAD_MY_PET",
      25: "MY_PET",
      26: "MY_OWNER",
      27: "MY_CREATOR",
      28: "MY_CREATION",
      29: "DEAD_MY_CREATION",
      30: "DEAD_OR_ALIVE_MY_CREATION",
      31: "LEAGUEMATE",
      32: "DEAD_LEAGUEMATE",
      33: "DEAD_OR_ALIVE_LEAGUEMATE",
      34: "POSITION",
    });

    function TargetType(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    TargetType.prototype._read = function() {
      this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "Powers.TargetType.TargetType" };
      this.value = this._io.readU4le();
      this._debug.value.end = this._io.pos;
    }

    return TargetType;
  })();

  var Header = Powers.Header = (function() {
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

  var FxArray = Powers.FxArray = (function() {
    function FxArray(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    FxArray.prototype._read = function() {
      this._debug.count = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.count = this._io.readU4le();
      this._debug.count.end = this._io.pos;
      this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.value = new Array(this.count);
      this._debug.value.arr = new Array(this.count);
      for (var i = 0; i < this.count; i++) {
        this._debug.value.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
        var _t_value = new FxStruct(this._io, this, this._root);
        _t_value._read();
        this.value[i] = _t_value;
        this._debug.value.arr[i].end = this._io.pos;
      }
      this._debug.value.end = this._io.pos;
    }

    return FxArray;
  })();

  var Power = Powers.Power = (function() {
    Power.AiReport = Object.freeze({
      ALWAYS: 0,
      NEVER: 1,
      HIT_ONLY: 2,
      MISS_ONLY: 3,

      0: "ALWAYS",
      1: "NEVER",
      2: "HIT_ONLY",
      3: "MISS_ONLY",
    });

    Power.ToggleDroppable = Object.freeze({
      SOMETIMES: 0,
      ALWAYS: 1,
      FIRST: 2,
      LAST: 3,
      NEVER: 4,

      0: "SOMETIMES",
      1: "ALWAYS",
      2: "FIRST",
      3: "LAST",
      4: "NEVER",
    });

    Power.PowerType = Object.freeze({
      CLICK: 0,
      AUTO: 1,
      TOGGLE: 2,
      BOOST: 3,
      INSPIRATION: 4,
      GLOBAL_BOOST: 5,

      0: "CLICK",
      1: "AUTO",
      2: "TOGGLE",
      3: "BOOST",
      4: "INSPIRATION",
      5: "GLOBAL_BOOST",
    });

    Power.ShowPowerSetting = Object.freeze({
      NEVER: 0,
      DEFAULT: 1,
      ALWAYS: 2,
      IF_USABLE: 3,
      IF_OWNED: 4,

      0: "NEVER",
      1: "DEFAULT",
      2: "ALWAYS",
      3: "IF_USABLE",
      4: "IF_OWNED",
    });

    Power.EffectArea = Object.freeze({
      CHARACTER: 0,
      CONE: 1,
      SPHERE: 2,
      LOCATION: 3,
      CHAIN: 4,
      VOLUME: 5,
      NAMEDVOLUME: 6,
      MAP: 7,
      ROOM: 8,
      TOUCH: 9,
      BOX: 10,

      0: "CHARACTER",
      1: "CONE",
      2: "SPHERE",
      3: "LOCATION",
      4: "CHAIN",
      5: "VOLUME",
      6: "NAMEDVOLUME",
      7: "MAP",
      8: "ROOM",
      9: "TOUCH",
      10: "BOX",
    });

    Power.ProcAllowed = Object.freeze({
      ALL: 0,
      NONE: 1,
      POWER_ONLY: 2,
      GLOBAL_ONLY: 3,

      0: "ALL",
      1: "NONE",
      2: "POWER_ONLY",
      3: "GLOBAL_ONLY",
    });

    Power.TargetVisibility = Object.freeze({
      LINE_OF_SIGHT: 0,
      NONE: 1,

      0: "LINE_OF_SIGHT",
      1: "NONE",
    });

    function Power(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    Power.prototype._read = function() {
      this._debug.key = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.key = new String(this._io, this, this._root);
      this.key._read();
      this._debug.key.end = this._io.pos;
      this._debug._unnamed1 = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._unnamed1 = this._io.readU4le();
      this._debug._unnamed1.end = this._io.pos;
      this._debug._unnamed2 = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._unnamed2 = new String(this._io, this, this._root);
      this._unnamed2._read();
      this._debug._unnamed2.end = this._io.pos;
      this._debug._unnamed3 = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._unnamed3 = new String(this._io, this, this._root);
      this._unnamed3._read();
      this._debug._unnamed3.end = this._io.pos;
      this._debug._unnamed4 = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._unnamed4 = new String(this._io, this, this._root);
      this._unnamed4._read();
      this._debug._unnamed4.end = this._io.pos;
      this._debug._unnamed5 = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._unnamed5 = this._io.readU4le();
      this._debug._unnamed5.end = this._io.pos;
      this._debug.autoIssue = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.autoIssue = new Bool(this._io, this, this._root);
      this.autoIssue._read();
      this._debug.autoIssue.end = this._io.pos;
      this._debug.autoIssueSaveLevel = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.autoIssueSaveLevel = new Bool(this._io, this, this._root);
      this.autoIssueSaveLevel._read();
      this._debug.autoIssueSaveLevel.end = this._io.pos;
      this._debug.free = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.free = new Bool(this._io, this, this._root);
      this.free._read();
      this._debug.free.end = this._io.pos;
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
      this._debug.targetHelp = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.targetHelp = new String(this._io, this, this._root);
      this.targetHelp._read();
      this._debug.targetHelp.end = this._io.pos;
      this._debug.targetShortHelp = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.targetShortHelp = new String(this._io, this, this._root);
      this.targetShortHelp._read();
      this._debug.targetShortHelp.end = this._io.pos;
      this._debug.attackerAttack = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.attackerAttack = new String(this._io, this, this._root);
      this.attackerAttack._read();
      this._debug.attackerAttack.end = this._io.pos;
      this._debug.attackerAttackFloater = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.attackerAttackFloater = new String(this._io, this, this._root);
      this.attackerAttackFloater._read();
      this._debug.attackerAttackFloater.end = this._io.pos;
      this._debug.attackerHit = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.attackerHit = new String(this._io, this, this._root);
      this.attackerHit._read();
      this._debug.attackerHit.end = this._io.pos;
      this._debug.victimHit = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.victimHit = new String(this._io, this, this._root);
      this.victimHit._read();
      this._debug.victimHit.end = this._io.pos;
      this._debug.confirm = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.confirm = new String(this._io, this, this._root);
      this.confirm._read();
      this._debug.confirm.end = this._io.pos;
      this._debug.floatRewarded = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.floatRewarded = new String(this._io, this, this._root);
      this.floatRewarded._read();
      this._debug.floatRewarded.end = this._io.pos;
      this._debug.powerDefenseFloat = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.powerDefenseFloat = new String(this._io, this, this._root);
      this.powerDefenseFloat._read();
      this._debug.powerDefenseFloat.end = this._io.pos;
      this._debug.icon = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.icon = new String(this._io, this, this._root);
      this.icon._read();
      this._debug.icon.end = this._io.pos;
      this._debug.type = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "Powers.Power.PowerType" };
      this.type = this._io.readU4le();
      this._debug.type.end = this._io.pos;
      this._debug.numAllowed = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.numAllowed = this._io.readU4le();
      this._debug.numAllowed.end = this._io.pos;
      this._debug.attackTypes = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.attackTypes = new AttribArray(this._io, this, this._root);
      this.attackTypes._read();
      this._debug.attackTypes.end = this._io.pos;
      this._debug.buyRequires = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.buyRequires = new StringArray(this._io, this, this._root);
      this.buyRequires._read();
      this._debug.buyRequires.end = this._io.pos;
      this._debug.activateRequires = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.activateRequires = new StringArray(this._io, this, this._root);
      this.activateRequires._read();
      this._debug.activateRequires.end = this._io.pos;
      this._debug.slotRequires = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.slotRequires = new StringArray(this._io, this, this._root);
      this.slotRequires._read();
      this._debug.slotRequires.end = this._io.pos;
      this._debug.targetRequires = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.targetRequires = new StringArray(this._io, this, this._root);
      this.targetRequires._read();
      this._debug.targetRequires.end = this._io.pos;
      this._debug.rewardRequires = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.rewardRequires = new StringArray(this._io, this, this._root);
      this.rewardRequires._read();
      this._debug.rewardRequires.end = this._io.pos;
      this._debug.auctionRequires = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.auctionRequires = new StringArray(this._io, this, this._root);
      this.auctionRequires._read();
      this._debug.auctionRequires.end = this._io.pos;
      this._debug.rewardFallback = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.rewardFallback = new String(this._io, this, this._root);
      this.rewardFallback._read();
      this._debug.rewardFallback.end = this._io.pos;
      this._debug.accuracy = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.accuracy = this._io.readF4le();
      this._debug.accuracy.end = this._io.pos;
      this._debug.castFlags = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.castFlags = new CastFlags(this._io, this, this._root);
      this.castFlags._read();
      this._debug.castFlags.end = this._io.pos;
      this._debug.aiReport = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "Powers.Power.AiReport" };
      this.aiReport = this._io.readU4le();
      this._debug.aiReport.end = this._io.pos;
      this._debug.effectArea = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "Powers.Power.EffectArea" };
      this.effectArea = this._io.readU4le();
      this._debug.effectArea.end = this._io.pos;
      this._debug.maxTargetsHit = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.maxTargetsHit = this._io.readU4le();
      this._debug.maxTargetsHit.end = this._io.pos;
      this._debug.unknown = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.unknown = this._io.readF4le();
      this._debug.unknown.end = this._io.pos;
      this._debug.radius = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.radius = this._io.readF4le();
      this._debug.radius.end = this._io.pos;
      this._debug.arc = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.arc = this._io.readF4le();
      this._debug.arc.end = this._io.pos;
      this._debug.chainDelay = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.chainDelay = this._io.readF4le();
      this._debug.chainDelay.end = this._io.pos;
      this._debug.chainEff = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.chainEff = new StringArray(this._io, this, this._root);
      this.chainEff._read();
      this._debug.chainEff.end = this._io.pos;
      this._debug.chainFork = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.chainFork = new U4Array(this._io, this, this._root);
      this.chainFork._read();
      this._debug.chainFork.end = this._io.pos;
      this._debug.boxOffset = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.boxOffset = new Array(3);
      this._debug.boxOffset.arr = new Array(3);
      for (var i = 0; i < 3; i++) {
        this._debug.boxOffset.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.boxOffset[i] = this._io.readF4le();
        this._debug.boxOffset.arr[i].end = this._io.pos;
      }
      this._debug.boxOffset.end = this._io.pos;
      this._debug.boxSize = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.boxSize = new Array(3);
      this._debug.boxSize.arr = new Array(3);
      for (var i = 0; i < 3; i++) {
        this._debug.boxSize.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
        this.boxSize[i] = this._io.readF4le();
        this._debug.boxSize.arr[i].end = this._io.pos;
      }
      this._debug.boxSize.end = this._io.pos;
      this._debug.range = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.range = this._io.readF4le();
      this._debug.range.end = this._io.pos;
      this._debug.rangeSecondary = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.rangeSecondary = this._io.readF4le();
      this._debug.rangeSecondary.end = this._io.pos;
      this._debug.timeToActivate = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.timeToActivate = this._io.readF4le();
      this._debug.timeToActivate.end = this._io.pos;
      this._debug.rechargeTime = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.rechargeTime = this._io.readF4le();
      this._debug.rechargeTime.end = this._io.pos;
      this._debug.activatePeriod = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.activatePeriod = this._io.readF4le();
      this._debug.activatePeriod.end = this._io.pos;
      this._debug.enduranceCost = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.enduranceCost = this._io.readF4le();
      this._debug.enduranceCost.end = this._io.pos;
      this._debug.ideaCost = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.ideaCost = this._io.readF4le();
      this._debug.ideaCost.end = this._io.pos;
      this._debug.timeToConfirm = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.timeToConfirm = this._io.readU4le();
      this._debug.timeToConfirm.end = this._io.pos;
      this._debug.selfConfirm = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.selfConfirm = this._io.readU4le();
      this._debug.selfConfirm.end = this._io.pos;
      this._debug.confirmRequires = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.confirmRequires = new StringArray(this._io, this, this._root);
      this.confirmRequires._read();
      this._debug.confirmRequires.end = this._io.pos;
      this._debug.destroyOnLimit = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.destroyOnLimit = new Bool(this._io, this, this._root);
      this.destroyOnLimit._read();
      this._debug.destroyOnLimit.end = this._io.pos;
      this._debug.stackingUsage = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.stackingUsage = new Bool(this._io, this, this._root);
      this.stackingUsage._read();
      this._debug.stackingUsage.end = this._io.pos;
      this._debug.numCharges = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.numCharges = this._io.readU4le();
      this._debug.numCharges.end = this._io.pos;
      this._debug.maxNumCharges = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.maxNumCharges = this._io.readU4le();
      this._debug.maxNumCharges.end = this._io.pos;
      this._debug.usageTime = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.usageTime = this._io.readF4le();
      this._debug.usageTime.end = this._io.pos;
      this._debug.maxUsageTime = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.maxUsageTime = this._io.readF4le();
      this._debug.maxUsageTime.end = this._io.pos;
      this._debug.lifetime = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.lifetime = this._io.readF4le();
      this._debug.lifetime.end = this._io.pos;
      this._debug.maxLifetime = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.maxLifetime = this._io.readF4le();
      this._debug.maxLifetime.end = this._io.pos;
      this._debug.lifetimeInGame = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.lifetimeInGame = this._io.readF4le();
      this._debug.lifetimeInGame.end = this._io.pos;
      this._debug.maxLifetimeInGame = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.maxLifetimeInGame = this._io.readF4le();
      this._debug.maxLifetimeInGame.end = this._io.pos;
      this._debug.interruptTime = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.interruptTime = this._io.readF4le();
      this._debug.interruptTime.end = this._io.pos;
      this._debug.targetVisibility = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "Powers.Power.TargetVisibility" };
      this.targetVisibility = this._io.readU4le();
      this._debug.targetVisibility.end = this._io.pos;
      this._debug.target = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.target = new TargetType(this._io, this, this._root);
      this.target._read();
      this._debug.target.end = this._io.pos;
      this._debug.targetSecondary = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.targetSecondary = new TargetType(this._io, this, this._root);
      this.targetSecondary._read();
      this._debug.targetSecondary.end = this._io.pos;
      this._debug.autoHit = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.autoHit = new TargetTypeArray(this._io, this, this._root);
      this.autoHit._read();
      this._debug.autoHit.end = this._io.pos;
      this._debug.affected = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.affected = new TargetTypeArray(this._io, this, this._root);
      this.affected._read();
      this._debug.affected.end = this._io.pos;
      this._debug.targetsThroughVisionPhase = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.targetsThroughVisionPhase = new Bool(this._io, this, this._root);
      this.targetsThroughVisionPhase._read();
      this._debug.targetsThroughVisionPhase.end = this._io.pos;
      this._debug.boostsAllowed = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.boostsAllowed = new BoostTypeArray(this._io, this, this._root);
      this.boostsAllowed._read();
      this._debug.boostsAllowed.end = this._io.pos;
      this._debug.groupMembership = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.groupMembership = new GroupArray(this._io, this, this._root);
      this.groupMembership._read();
      this._debug.groupMembership.end = this._io.pos;
      this._debug.modesRequired = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.modesRequired = new ModeArray(this._io, this, this._root);
      this.modesRequired._read();
      this._debug.modesRequired.end = this._io.pos;
      this._debug.modesDisallowed = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.modesDisallowed = new ModeArray(this._io, this, this._root);
      this.modesDisallowed._read();
      this._debug.modesDisallowed.end = this._io.pos;
      this._debug.aiGroups = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.aiGroups = new StringArray(this._io, this, this._root);
      this.aiGroups._read();
      this._debug.aiGroups.end = this._io.pos;
      this._debug.redirect = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.redirect = new PowerRedirectArray(this._io, this, this._root);
      this.redirect._read();
      this._debug.redirect.end = this._io.pos;
      this._debug.effects = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.effects = new EffectArray(this._io, this, this._root);
      this.effects._read();
      this._debug.effects.end = this._io.pos;
      this._debug.ignoreStrength = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.ignoreStrength = new Bool(this._io, this, this._root);
      this.ignoreStrength._read();
      this._debug.ignoreStrength.end = this._io.pos;
      this._debug.showBuffIcon = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.showBuffIcon = new Bool(this._io, this, this._root);
      this.showBuffIcon._read();
      this._debug.showBuffIcon.end = this._io.pos;
      this._debug.showInInventory = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "Powers.Power.ShowPowerSetting" };
      this.showInInventory = this._io.readU4le();
      this._debug.showInInventory.end = this._io.pos;
      this._debug.showInManage = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.showInManage = new Bool(this._io, this, this._root);
      this.showInManage._read();
      this._debug.showInManage.end = this._io.pos;
      this._debug.showInInfo = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.showInInfo = new Bool(this._io, this, this._root);
      this.showInInfo._read();
      this._debug.showInInfo.end = this._io.pos;
      this._debug.deletable = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.deletable = new Bool(this._io, this, this._root);
      this.deletable._read();
      this._debug.deletable.end = this._io.pos;
      this._debug.tradeable = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.tradeable = new Bool(this._io, this, this._root);
      this.tradeable._read();
      this._debug.tradeable.end = this._io.pos;
      this._debug.maxBoosts = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.maxBoosts = this._io.readU4le();
      this._debug.maxBoosts.end = this._io.pos;
      this._debug.doNotSave = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.doNotSave = new Bool(this._io, this, this._root);
      this.doNotSave._read();
      this._debug.doNotSave.end = this._io.pos;
      this._debug.boostFlags = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.boostFlags = new BoostFlags(this._io, this, this._root);
      this.boostFlags._read();
      this._debug.boostFlags.end = this._io.pos;
      this._debug.boostCatalystConversion = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.boostCatalystConversion = new String(this._io, this, this._root);
      this.boostCatalystConversion._read();
      this._debug.boostCatalystConversion.end = this._io.pos;
      this._debug.storeProduct = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.storeProduct = new String(this._io, this, this._root);
      this.storeProduct._read();
      this._debug.storeProduct.end = this._io.pos;
      this._debug.boostLicenseLevel = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.boostLicenseLevel = this._io.readU4le();
      this._debug.boostLicenseLevel.end = this._io.pos;
      this._debug.minSlotLevel = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.minSlotLevel = this._io.readS4le();
      this._debug.minSlotLevel.end = this._io.pos;
      this._debug.maxSlotLevel = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.maxSlotLevel = this._io.readU4le();
      this._debug.maxSlotLevel.end = this._io.pos;
      this._debug.maxBoostLevel = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.maxBoostLevel = this._io.readU4le();
      this._debug.maxBoostLevel.end = this._io.pos;
      this._debug.var = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.var = new VarArray(this._io, this, this._root);
      this.var._read();
      this._debug.var.end = this._io.pos;
      this._debug.toggleDroppable = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "Powers.Power.ToggleDroppable" };
      this.toggleDroppable = this._io.readU4le();
      this._debug.toggleDroppable.end = this._io.pos;
      this._debug.procAllowed = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "Powers.Power.ProcAllowed" };
      this.procAllowed = this._io.readU4le();
      this._debug.procAllowed.end = this._io.pos;
      this._debug.strengthsDisallowed = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.strengthsDisallowed = new AttribArray(this._io, this, this._root);
      this.strengthsDisallowed._read();
      this._debug.strengthsDisallowed.end = this._io.pos;
      this._debug.procMainTargetOnly = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.procMainTargetOnly = new Bool(this._io, this, this._root);
      this.procMainTargetOnly._read();
      this._debug.procMainTargetOnly.end = this._io.pos;
      this._debug.animMainTargetOnly = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.animMainTargetOnly = new Bool(this._io, this, this._root);
      this.animMainTargetOnly._read();
      this._debug.animMainTargetOnly.end = this._io.pos;
      this._debug.highlightEval = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.highlightEval = new StringArray(this._io, this, this._root);
      this.highlightEval._read();
      this._debug.highlightEval.end = this._io.pos;
      this._debug.highlightIcon = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.highlightIcon = new String(this._io, this, this._root);
      this.highlightIcon._read();
      this._debug.highlightIcon.end = this._io.pos;
      this._debug.highlightRing = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.highlightRing = new Rgba(this._io, this, this._root);
      this.highlightRing._read();
      this._debug.highlightRing.end = this._io.pos;
      this._debug.travelSuppression = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.travelSuppression = this._io.readF4le();
      this._debug.travelSuppression.end = this._io.pos;
      this._debug.preferenceMultiplier = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.preferenceMultiplier = this._io.readF4le();
      this._debug.preferenceMultiplier.end = this._io.pos;
      this._debug.dontSetStance = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.dontSetStance = new Bool(this._io, this, this._root);
      this.dontSetStance._read();
      this._debug.dontSetStance.end = this._io.pos;
      this._debug.pointValue = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.pointValue = this._io.readF4le();
      this._debug.pointValue.end = this._io.pos;
      this._debug.pointMultiplier = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.pointMultiplier = this._io.readF4le();
      this._debug.pointMultiplier.end = this._io.pos;
      this._debug.chainIntoPower = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.chainIntoPower = new String(this._io, this, this._root);
      this.chainIntoPower._read();
      this._debug.chainIntoPower.end = this._io.pos;
      this._debug.instanceLocked = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.instanceLocked = new Bool(this._io, this, this._root);
      this.instanceLocked._read();
      this._debug.instanceLocked.end = this._io.pos;
      this._debug.isEnvironmentHit = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.isEnvironmentHit = new Bool(this._io, this, this._root);
      this.isEnvironmentHit._read();
      this._debug.isEnvironmentHit.end = this._io.pos;
      this._debug.shuffleTargets = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.shuffleTargets = new Bool(this._io, this, this._root);
      this.shuffleTargets._read();
      this._debug.shuffleTargets.end = this._io.pos;
      this._debug.forceLevelBought = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.forceLevelBought = this._io.readS4le();
      this._debug.forceLevelBought.end = this._io.pos;
      this._debug.refreshesOnActivePlayerChange = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.refreshesOnActivePlayerChange = new Bool(this._io, this, this._root);
      this.refreshesOnActivePlayerChange._read();
      this._debug.refreshesOnActivePlayerChange.end = this._io.pos;
      this._debug.cancelable = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.cancelable = new Bool(this._io, this, this._root);
      this.cancelable._read();
      this._debug.cancelable.end = this._io.pos;
      this._debug.ignoreToggleMaxDistance = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.ignoreToggleMaxDistance = new Bool(this._io, this, this._root);
      this.ignoreToggleMaxDistance._read();
      this._debug.ignoreToggleMaxDistance.end = this._io.pos;
      this._debug.serverTrayPriority = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.serverTrayPriority = this._io.readU4le();
      this._debug.serverTrayPriority.end = this._io.pos;
      this._debug.serverTrayRequires = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.serverTrayRequires = new StringArray(this._io, this, this._root);
      this.serverTrayRequires._read();
      this._debug.serverTrayRequires.end = this._io.pos;
      this._debug.abusiveBuff = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.abusiveBuff = new Bool(this._io, this, this._root);
      this.abusiveBuff._read();
      this._debug.abusiveBuff.end = this._io.pos;
      this._debug.fx = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.fx = new Graphics(this._io, this, this._root);
      this.fx._read();
      this._debug.fx.end = this._io.pos;
    }

    /**
     * full_name
     */

    /**
     * crc
     */

    /**
     * source
     */

    /**
     * name
     */

    /**
     * source_name
     */

    /**
     * system
     */

    return Power;
  })();

  var GroupArray = Powers.GroupArray = (function() {
    function GroupArray(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    GroupArray.prototype._read = function() {
      this._debug.count = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.count = this._io.readU4le();
      this._debug.count.end = this._io.pos;
      this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.value = new Array(this.count);
      this._debug.value.arr = new Array(this.count);
      for (var i = 0; i < this.count; i++) {
        this._debug.value.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
        var _t_value = new Group(this._io, this, this._root);
        _t_value._read();
        this.value[i] = _t_value;
        this._debug.value.arr[i].end = this._io.pos;
      }
      this._debug.value.end = this._io.pos;
    }

    return GroupArray;
  })();

  var EffectFlags = Powers.EffectFlags = (function() {
    function EffectFlags(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    EffectFlags.prototype._read = function() {
      this._debug._unnamed0 = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._unnamed0 = this._io.readBitsInt(4);
      this._debug._unnamed0.end = this._io.pos;
      this._debug.linkedChance = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.linkedChance = this._io.readBitsInt(1) != 0;
      this._debug.linkedChance.end = this._io.pos;
      this._debug.fallback = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.fallback = this._io.readBitsInt(1) != 0;
      this._debug.fallback.end = this._io.pos;
      this._debug.pVPOnly = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.pVPOnly = this._io.readBitsInt(1) != 0;
      this._debug.pVPOnly.end = this._io.pos;
      this._debug.pVEOnly = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.pVEOnly = this._io.readBitsInt(1) != 0;
      this._debug.pVEOnly.end = this._io.pos;
      this._debug._unnamed5 = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._unnamed5 = this._io.readBitsInt(24);
      this._debug._unnamed5.end = this._io.pos;
    }

    return EffectFlags;
  })();

  var SuppressStruct = Powers.SuppressStruct = (function() {
    function SuppressStruct(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    SuppressStruct.prototype._read = function() {
      this._debug.len = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.len = this._io.readU4le();
      this._debug.len.end = this._io.pos;
      this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._raw_value = this._io.readBytes(this.len);
      var _io__raw_value = new KaitaiStream(this._raw_value);
      this.value = new Suppress(_io__raw_value, this, this._root);
      this.value._read();
      this._debug.value.end = this._io.pos;
    }

    return SuppressStruct;
  })();

  var EffectArray = Powers.EffectArray = (function() {
    function EffectArray(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    EffectArray.prototype._read = function() {
      this._debug.count = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.count = this._io.readU4le();
      this._debug.count.end = this._io.pos;
      this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.value = new Array(this.count);
      this._debug.value.arr = new Array(this.count);
      for (var i = 0; i < this.count; i++) {
        this._debug.value.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
        var _t_value = new EffectStruct(this._io, this, this._root);
        _t_value._read();
        this.value[i] = _t_value;
        this._debug.value.arr[i].end = this._io.pos;
      }
      this._debug.value.end = this._io.pos;
    }

    return EffectArray;
  })();

  var ModeArray = Powers.ModeArray = (function() {
    function ModeArray(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    ModeArray.prototype._read = function() {
      this._debug.count = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.count = this._io.readU4le();
      this._debug.count.end = this._io.pos;
      this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.value = new Array(this.count);
      this._debug.value.arr = new Array(this.count);
      for (var i = 0; i < this.count; i++) {
        this._debug.value.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
        var _t_value = new Mode(this._io, this, this._root);
        _t_value._read();
        this.value[i] = _t_value;
        this._debug.value.arr[i].end = this._io.pos;
      }
      this._debug.value.end = this._io.pos;
    }

    return ModeArray;
  })();

  var MessagesStruct = Powers.MessagesStruct = (function() {
    function MessagesStruct(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    MessagesStruct.prototype._read = function() {
      this._debug.len = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.len = this._io.readU4le();
      this._debug.len.end = this._io.pos;
      this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._raw_value = this._io.readBytes(this.len);
      var _io__raw_value = new KaitaiStream(this._raw_value);
      this.value = new Messages(_io__raw_value, this, this._root);
      this.value._read();
      this._debug.value.end = this._io.pos;
    }

    return MessagesStruct;
  })();

  var VarArray = Powers.VarArray = (function() {
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
        var _t_value = new VarStruct(this._io, this, this._root);
        _t_value._read();
        this.value[i] = _t_value;
        this._debug.value.arr[i].end = this._io.pos;
      }
      this._debug.value.end = this._io.pos;
    }

    return VarArray;
  })();

  var Group = Powers.Group = (function() {
    Group.Group = Object.freeze({
      FLYING: 0,
      SPEED: 1,
      SPRINT: 2,
      LEAP: 3,
      FLYINGROOT: 4,
      SPEEDROOT: 5,
      SPRINTROOT: 6,
      LEAPROOT: 7,
      ROCK_ARMOR: 8,
      BRIMSTONE_ARMOR: 9,
      CRYSTAL_ARMOR: 10,
      MINERAL_ARMOR: 11,
      STEALTH: 12,
      HIDE: 13,
      REST: 14,
      KHELDIAN: 15,
      ASCENDANT: 16,
      DARKNESS: 17,
      AMMO: 18,
      HAC: 19,
      VANITYPET: 20,
      COMBATPET: 21,
      PRIMALIST: 22,
      BIO: 23,
      COMBATPET: 24,
      AFTERBURNER: 25,

      0: "FLYING",
      1: "SPEED",
      2: "SPRINT",
      3: "LEAP",
      4: "FLYINGROOT",
      5: "SPEEDROOT",
      6: "SPRINTROOT",
      7: "LEAPROOT",
      8: "ROCK_ARMOR",
      9: "BRIMSTONE_ARMOR",
      10: "CRYSTAL_ARMOR",
      11: "MINERAL_ARMOR",
      12: "STEALTH",
      13: "HIDE",
      14: "REST",
      15: "KHELDIAN",
      16: "ASCENDANT",
      17: "DARKNESS",
      18: "AMMO",
      19: "HAC",
      20: "VANITYPET",
      21: "COMBATPET",
      22: "PRIMALIST",
      23: "BIO",
      24: "COMBATPET",
      25: "AFTERBURNER",
    });

    function Group(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    Group.prototype._read = function() {
      this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "Powers.Group.Group" };
      this.value = this._io.readU4le();
      this._debug.value.end = this._io.pos;
    }

    return Group;
  })();

  var Attrib = Powers.Attrib = (function() {
    Attrib.Attrib = Object.freeze({
      SMASHING_DMG: 0,
      LETHAL_DMG: 4,
      FIRE_DMG: 8,
      COLD_DMG: 12,
      ENERGY_DMG: 16,
      NEGATIVE_ENERGY_DMG: 20,
      PSIONIC_DMG: 24,
      HEALING_DMG: 28,
      SPECIAL_DMG: 32,
      TOXIC_DMG: 36,
      RADIATION_DMG: 40,
      ELECTRICAL_DMG: 44,
      UNIQUE1_DMG: 48,
      UNIQUE2_DMG: 52,
      UNIQUE3_DMG: 56,
      UNIQUE4_DMG: 60,
      UNIQUE5_DMG: 64,
      UNIQUE6_DMG: 68,
      UNIQUE7_DMG: 72,
      UNIQUE8_DMG: 76,
      HIT_POINTS: 80,
      ABSORB: 84,
      ENDURANCE: 88,
      INSIGHT: 92,
      RAGE: 96,
      TO_HIT: 100,
      RANGED_DEF: 104,
      MELEE_DEF: 108,
      AREA_DEF: 112,
      SMASHING_DEF: 116,
      LETHAL_DEF: 120,
      FIRE_DEF: 124,
      COLD_DEF: 128,
      ENERGY_DEF: 132,
      NEGATIVE_ENERGY_DEF: 136,
      PSIONIC_DEF: 140,
      TOXIC_DEF: 144,
      UNIQUE1_DEF: 148,
      UNIQUE2_DEF: 152,
      UNIQUE3_DEF: 156,
      UNIQUE4_DEF: 160,
      UNIQUE5_DEF: 164,
      UNIQUE6_DEF: 168,
      UNIQUE7_DEF: 172,
      UNIQUE8_DEF: 176,
      UNIQUE9_DEF: 180,
      DEFENSE: 184,
      RUNNING_SPEED: 188,
      FLYING_SPEED: 192,
      SWIMMING_SPEED: 196,
      JUMPING_SPEED: 200,
      JUMP_HEIGHT: 204,
      MOVEMENT_CONTROL: 208,
      MOVEMENT_FRICTION: 212,
      STEALTH: 216,
      STEALTH_RADIUS_P_V_E: 220,
      STEALTH_RADIUS_P_V_P: 224,
      PERCEPTION_RADIUS: 228,
      REGENERATION: 232,
      RECOVERY: 236,
      INSIGHT_RECOVERY: 240,
      THREAT_LEVEL: 244,
      TAUNT: 248,
      PLACATE: 252,
      CONFUSED: 256,
      AFRAID: 260,
      TERRORIZED: 264,
      HELD: 268,
      IMMOBILIZED: 272,
      STUNNED: 276,
      SLEEP: 280,
      FLY: 284,
      JUMP_PACK: 288,
      TELEPORT: 292,
      UNTOUCHABLE: 296,
      INTANGIBLE: 300,
      ONLY_AFFECTS_SELF: 304,
      EXPERIENCE_GAIN: 308,
      INFLUENCE_GAIN: 312,
      PRESTIGE_GAIN: 316,
      EVADE: 320,
      KNOCKUP: 324,
      KNOCKBACK: 328,
      REPEL: 332,
      ACCURACY: 336,
      RADIUS: 340,
      ARC: 344,
      RANGE: 348,
      TIME_TO_ACTIVATE: 352,
      RECHARGE_TIME: 356,
      INTERRUPT_TIME: 360,
      ENDURANCE_DISCOUNT: 364,
      INSIGHT_DISCOUNT: 368,
      METER: 372,
      RANGED_ELUDE: 376,
      MELEE_ELUDE: 380,
      AOE_ELUDE: 384,
      SMASHING_ELUDE: 388,
      LETHAL_ELUDE: 392,
      FIRE_ELUDE: 396,
      COLD_ELUDE: 400,
      ENERGY_ELUDE: 404,
      NEGATIVE_ENERGY_ELUDE: 408,
      PSIONIC_ELUDE: 412,
      TOXIC_ELUDE: 416,
      UNIQUE1_ELUDE: 420,
      UNIQUE2_ELUDE: 424,
      UNIQUE3_ELUDE: 428,
      UNIQUE4_ELUDE: 432,
      UNIQUE5_ELUDE: 436,
      UNIQUE6_ELUDE: 440,
      UNIQUE7_ELUDE: 444,
      UNIQUE8_ELUDE: 448,
      UNIQUE9_ELUDE: 452,
      ELUSIVITY_BASE: 456,
      TRANSLUCENCY: 460,
      ENT_CREATE: 461,
      CLEAR_DAMAGERS: 462,
      SILENT_KILL: 463,
      X_P_DEBT_PROTECTION: 464,
      SET_MODE: 465,
      SET_COSTUME: 466,
      GLIDE: 467,
      NULL: 468,
      AVOID: 469,
      REWARD: 470,
      X_P_DEBT: 471,
      DROP_TOGGLES: 472,
      GRANT_POWER: 473,
      REVOKE_POWER: 474,
      UNSET_MODE: 475,
      GLOBAL_CHANCE_MOD: 476,
      POWER_CHANCE_MOD: 477,
      GRANT_BOOSTED_POWER: 478,
      VIEW_ATTRIB: 479,
      REWARD_SOURCE: 480,
      REWARD_SOURCE_TEAM: 481,
      CLEAR_FOG: 482,
      COMBAT_PHASE: 483,
      COMBAT_MOD_SHIFT: 484,
      RECHARGE_POWER: 485,
      VISION_PHASE: 486,
      NINJA_RUN: 487,
      WALK: 488,
      BEAST_RUN: 489,
      STEAM_JUMP: 490,
      DESIGNER_STATUS: 491,
      EXCLUSIVE_VISION_PHASE: 492,
      HOVER_BOARD: 493,
      SET_S_Z_E_VALUE: 494,
      ADD_BEHAVIOR: 495,
      MAGIC_CARPET: 496,
      TOKEN_ADD: 497,
      TOKEN_SET: 498,
      TOKEN_CLEAR: 499,
      LUA_EXEC: 500,
      FORCE_MOVE: 501,
      PARKOUR_RUN: 502,
      CANCEL_MODS: 503,
      EXECUTE_POWER: 504,
      POWER_REDIRECT: 1460,

      0: "SMASHING_DMG",
      4: "LETHAL_DMG",
      8: "FIRE_DMG",
      12: "COLD_DMG",
      16: "ENERGY_DMG",
      20: "NEGATIVE_ENERGY_DMG",
      24: "PSIONIC_DMG",
      28: "HEALING_DMG",
      32: "SPECIAL_DMG",
      36: "TOXIC_DMG",
      40: "RADIATION_DMG",
      44: "ELECTRICAL_DMG",
      48: "UNIQUE1_DMG",
      52: "UNIQUE2_DMG",
      56: "UNIQUE3_DMG",
      60: "UNIQUE4_DMG",
      64: "UNIQUE5_DMG",
      68: "UNIQUE6_DMG",
      72: "UNIQUE7_DMG",
      76: "UNIQUE8_DMG",
      80: "HIT_POINTS",
      84: "ABSORB",
      88: "ENDURANCE",
      92: "INSIGHT",
      96: "RAGE",
      100: "TO_HIT",
      104: "RANGED_DEF",
      108: "MELEE_DEF",
      112: "AREA_DEF",
      116: "SMASHING_DEF",
      120: "LETHAL_DEF",
      124: "FIRE_DEF",
      128: "COLD_DEF",
      132: "ENERGY_DEF",
      136: "NEGATIVE_ENERGY_DEF",
      140: "PSIONIC_DEF",
      144: "TOXIC_DEF",
      148: "UNIQUE1_DEF",
      152: "UNIQUE2_DEF",
      156: "UNIQUE3_DEF",
      160: "UNIQUE4_DEF",
      164: "UNIQUE5_DEF",
      168: "UNIQUE6_DEF",
      172: "UNIQUE7_DEF",
      176: "UNIQUE8_DEF",
      180: "UNIQUE9_DEF",
      184: "DEFENSE",
      188: "RUNNING_SPEED",
      192: "FLYING_SPEED",
      196: "SWIMMING_SPEED",
      200: "JUMPING_SPEED",
      204: "JUMP_HEIGHT",
      208: "MOVEMENT_CONTROL",
      212: "MOVEMENT_FRICTION",
      216: "STEALTH",
      220: "STEALTH_RADIUS_P_V_E",
      224: "STEALTH_RADIUS_P_V_P",
      228: "PERCEPTION_RADIUS",
      232: "REGENERATION",
      236: "RECOVERY",
      240: "INSIGHT_RECOVERY",
      244: "THREAT_LEVEL",
      248: "TAUNT",
      252: "PLACATE",
      256: "CONFUSED",
      260: "AFRAID",
      264: "TERRORIZED",
      268: "HELD",
      272: "IMMOBILIZED",
      276: "STUNNED",
      280: "SLEEP",
      284: "FLY",
      288: "JUMP_PACK",
      292: "TELEPORT",
      296: "UNTOUCHABLE",
      300: "INTANGIBLE",
      304: "ONLY_AFFECTS_SELF",
      308: "EXPERIENCE_GAIN",
      312: "INFLUENCE_GAIN",
      316: "PRESTIGE_GAIN",
      320: "EVADE",
      324: "KNOCKUP",
      328: "KNOCKBACK",
      332: "REPEL",
      336: "ACCURACY",
      340: "RADIUS",
      344: "ARC",
      348: "RANGE",
      352: "TIME_TO_ACTIVATE",
      356: "RECHARGE_TIME",
      360: "INTERRUPT_TIME",
      364: "ENDURANCE_DISCOUNT",
      368: "INSIGHT_DISCOUNT",
      372: "METER",
      376: "RANGED_ELUDE",
      380: "MELEE_ELUDE",
      384: "AOE_ELUDE",
      388: "SMASHING_ELUDE",
      392: "LETHAL_ELUDE",
      396: "FIRE_ELUDE",
      400: "COLD_ELUDE",
      404: "ENERGY_ELUDE",
      408: "NEGATIVE_ENERGY_ELUDE",
      412: "PSIONIC_ELUDE",
      416: "TOXIC_ELUDE",
      420: "UNIQUE1_ELUDE",
      424: "UNIQUE2_ELUDE",
      428: "UNIQUE3_ELUDE",
      432: "UNIQUE4_ELUDE",
      436: "UNIQUE5_ELUDE",
      440: "UNIQUE6_ELUDE",
      444: "UNIQUE7_ELUDE",
      448: "UNIQUE8_ELUDE",
      452: "UNIQUE9_ELUDE",
      456: "ELUSIVITY_BASE",
      460: "TRANSLUCENCY",
      461: "ENT_CREATE",
      462: "CLEAR_DAMAGERS",
      463: "SILENT_KILL",
      464: "X_P_DEBT_PROTECTION",
      465: "SET_MODE",
      466: "SET_COSTUME",
      467: "GLIDE",
      468: "NULL",
      469: "AVOID",
      470: "REWARD",
      471: "X_P_DEBT",
      472: "DROP_TOGGLES",
      473: "GRANT_POWER",
      474: "REVOKE_POWER",
      475: "UNSET_MODE",
      476: "GLOBAL_CHANCE_MOD",
      477: "POWER_CHANCE_MOD",
      478: "GRANT_BOOSTED_POWER",
      479: "VIEW_ATTRIB",
      480: "REWARD_SOURCE",
      481: "REWARD_SOURCE_TEAM",
      482: "CLEAR_FOG",
      483: "COMBAT_PHASE",
      484: "COMBAT_MOD_SHIFT",
      485: "RECHARGE_POWER",
      486: "VISION_PHASE",
      487: "NINJA_RUN",
      488: "WALK",
      489: "BEAST_RUN",
      490: "STEAM_JUMP",
      491: "DESIGNER_STATUS",
      492: "EXCLUSIVE_VISION_PHASE",
      493: "HOVER_BOARD",
      494: "SET_S_Z_E_VALUE",
      495: "ADD_BEHAVIOR",
      496: "MAGIC_CARPET",
      497: "TOKEN_ADD",
      498: "TOKEN_SET",
      499: "TOKEN_CLEAR",
      500: "LUA_EXEC",
      501: "FORCE_MOVE",
      502: "PARKOUR_RUN",
      503: "CANCEL_MODS",
      504: "EXECUTE_POWER",
      1460: "POWER_REDIRECT",
    });

    function Attrib(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    Attrib.prototype._read = function() {
      this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "Powers.Attrib.Attrib" };
      this.value = this._io.readU4le();
      this._debug.value.end = this._io.pos;
    }

    return Attrib;
  })();

  var Graphics = Powers.Graphics = (function() {
    function Graphics(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    Graphics.prototype._read = function() {
      this._debug.positionCenter = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.positionCenter = this._io.readU4le();
      this._debug.positionCenter.end = this._io.pos;
      this._debug.positionDistance = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.positionDistance = this._io.readF4le();
      this._debug.positionDistance.end = this._io.pos;
      this._debug.positionHeight = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.positionHeight = this._io.readF4le();
      this._debug.positionHeight.end = this._io.pos;
      this._debug.positionYaw = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.positionYaw = this._io.readF4le();
      this._debug.positionYaw.end = this._io.pos;
      this._debug.faceTarget = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.faceTarget = new Bool(this._io, this, this._root);
      this.faceTarget._read();
      this._debug.faceTarget.end = this._io.pos;
      this._debug.attribCache = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.attribCache = new AttribArray(this._io, this, this._root);
      this.attribCache._read();
      this._debug.attribCache.end = this._io.pos;
      this._debug.sourceFile = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.sourceFile = new String(this._io, this, this._root);
      this.sourceFile._read();
      this._debug.sourceFile.end = this._io.pos;
      this._debug.powerFx = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.powerFx = new PowerFx(this._io, this, this._root);
      this.powerFx._read();
      this._debug.powerFx.end = this._io.pos;
      this._debug.customFx = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.customFx = new CustomFxArray(this._io, this, this._root);
      this.customFx._read();
      this._debug.customFx.end = this._io.pos;
    }

    return Graphics;
  })();

  var Var = Powers.Var = (function() {
    function Var(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    Var.prototype._read = function() {
      this._debug.index = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.index = this._io.readU4le();
      this._debug.index.end = this._io.pos;
      this._debug.name = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.name = new String(this._io, this, this._root);
      this.name._read();
      this._debug.name.end = this._io.pos;
      this._debug.min = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.min = this._io.readF4le();
      this._debug.min.end = this._io.pos;
      this._debug.max = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.max = this._io.readF4le();
      this._debug.max.end = this._io.pos;
    }

    return Var;
  })();

  var AttribModStruct = Powers.AttribModStruct = (function() {
    function AttribModStruct(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    AttribModStruct.prototype._read = function() {
      this._debug.len = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.len = this._io.readU4le();
      this._debug.len.end = this._io.pos;
      this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._raw_value = this._io.readBytes(this.len);
      var _io__raw_value = new KaitaiStream(this._raw_value);
      this.value = new AttribMod(_io__raw_value, this, this._root);
      this.value._read();
      this._debug.value.end = this._io.pos;
    }

    return AttribModStruct;
  })();

  var CustomFxStruct = Powers.CustomFxStruct = (function() {
    function CustomFxStruct(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    CustomFxStruct.prototype._read = function() {
      this._debug.len = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.len = this._io.readU4le();
      this._debug.len.end = this._io.pos;
      this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._raw_value = this._io.readBytes(this.len);
      var _io__raw_value = new KaitaiStream(this._raw_value);
      this.value = new CustomFx(_io__raw_value, this, this._root);
      this.value._read();
      this._debug.value.end = this._io.pos;
    }

    return CustomFxStruct;
  })();

  var BoostFlags = Powers.BoostFlags = (function() {
    function BoostFlags(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    BoostFlags.prototype._read = function() {
      this._debug.boostIgnoreEffectiveness = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.boostIgnoreEffectiveness = new Bool(this._io, this, this._root);
      this.boostIgnoreEffectiveness._read();
      this._debug.boostIgnoreEffectiveness.end = this._io.pos;
      this._debug.boostAlwaysCountForSet = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.boostAlwaysCountForSet = new Bool(this._io, this, this._root);
      this.boostAlwaysCountForSet._read();
      this._debug.boostAlwaysCountForSet.end = this._io.pos;
      this._debug.boostTradeable = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.boostTradeable = new Bool(this._io, this, this._root);
      this.boostTradeable._read();
      this._debug.boostTradeable.end = this._io.pos;
      this._debug.boostCombinable = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.boostCombinable = new Bool(this._io, this, this._root);
      this.boostCombinable._read();
      this._debug.boostCombinable.end = this._io.pos;
      this._debug.boostAccountBound = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.boostAccountBound = new Bool(this._io, this, this._root);
      this.boostAccountBound._read();
      this._debug.boostAccountBound.end = this._io.pos;
      this._debug.boostBoostable = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.boostBoostable = new Bool(this._io, this, this._root);
      this.boostBoostable._read();
      this._debug.boostBoostable.end = this._io.pos;
      this._debug.boostUsePlayerLevel = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.boostUsePlayerLevel = new Bool(this._io, this, this._root);
      this.boostUsePlayerLevel._read();
      this._debug.boostUsePlayerLevel.end = this._io.pos;
    }

    return BoostFlags;
  })();

  return Powers;
})();
return Powers;
}));
