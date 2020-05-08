// This is a generated file! Please edit source .ksy file and use kaitai-struct-compiler to rebuild

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['kaitai-struct/KaitaiStream'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('kaitai-struct/KaitaiStream'));
  } else {
    root.VillainDef = factory(root.KaitaiStream);
  }
}(this, function (KaitaiStream) {
var VillainDef = (function() {
  function VillainDef(_io, _parent, _root) {
    this._io = _io;
    this._parent = _parent;
    this._root = _root || this;
    this._debug = {};

  }
  VillainDef.prototype._read = function() {
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
    this.value = new VillainArray(_io__raw_value, this, this._root);
    this.value._read();
    this._debug.value.end = this._io.pos;
  }

  var PetCommandStruct = VillainDef.PetCommandStruct = (function() {
    function PetCommandStruct(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    PetCommandStruct.prototype._read = function() {
      this._debug.len = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.len = this._io.readU4le();
      this._debug.len.end = this._io.pos;
      this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._raw_value = this._io.readBytes(this.len);
      var _io__raw_value = new KaitaiStream(this._raw_value);
      this.value = new PetCommand(_io__raw_value, this, this._root);
      this.value._read();
      this._debug.value.end = this._io.pos;
    }

    return PetCommandStruct;
  })();

  var LevelsArray = VillainDef.LevelsArray = (function() {
    function LevelsArray(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    LevelsArray.prototype._read = function() {
      this._debug.count = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.count = this._io.readU4le();
      this._debug.count.end = this._io.pos;
      this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.value = new Array(this.count);
      this._debug.value.arr = new Array(this.count);
      for (var i = 0; i < this.count; i++) {
        this._debug.value.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
        var _t_value = new LevelsStruct(this._io, this, this._root);
        _t_value._read();
        this.value[i] = _t_value;
        this._debug.value.arr[i].end = this._io.pos;
      }
      this._debug.value.end = this._io.pos;
    }

    return LevelsArray;
  })();

  var PetCommand = VillainDef.PetCommand = (function() {
    function PetCommand(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    PetCommand.prototype._read = function() {
      this._debug.passive = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.passive = new StringArray(this._io, this, this._root);
      this.passive._read();
      this._debug.passive.end = this._io.pos;
      this._debug.defensive = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.defensive = new StringArray(this._io, this, this._root);
      this.defensive._read();
      this._debug.defensive.end = this._io.pos;
      this._debug.aggressive = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.aggressive = new StringArray(this._io, this, this._root);
      this.aggressive._read();
      this._debug.aggressive.end = this._io.pos;
      this._debug.attackTarget = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.attackTarget = new StringArray(this._io, this, this._root);
      this.attackTarget._read();
      this._debug.attackTarget.end = this._io.pos;
      this._debug.attackNoTarget = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.attackNoTarget = new StringArray(this._io, this, this._root);
      this.attackNoTarget._read();
      this._debug.attackNoTarget.end = this._io.pos;
      this._debug.stayHere = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.stayHere = new StringArray(this._io, this, this._root);
      this.stayHere._read();
      this._debug.stayHere.end = this._io.pos;
      this._debug.usePower = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.usePower = new StringArray(this._io, this, this._root);
      this.usePower._read();
      this._debug.usePower.end = this._io.pos;
      this._debug.usePowerNone = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.usePowerNone = new StringArray(this._io, this, this._root);
      this.usePowerNone._read();
      this._debug.usePowerNone.end = this._io.pos;
      this._debug.followMe = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.followMe = new StringArray(this._io, this, this._root);
      this.followMe._read();
      this._debug.followMe.end = this._io.pos;
      this._debug.gotoSpot = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.gotoSpot = new StringArray(this._io, this, this._root);
      this.gotoSpot._read();
      this._debug.gotoSpot.end = this._io.pos;
      this._debug.dismiss = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.dismiss = new StringArray(this._io, this, this._root);
      this.dismiss._read();
      this._debug.dismiss.end = this._io.pos;
    }

    return PetCommand;
  })();

  var Levels = VillainDef.Levels = (function() {
    function Levels(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    Levels.prototype._read = function() {
      this._debug.level = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.level = this._io.readU4le();
      this._debug.level.end = this._io.pos;
      this._debug.display = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.display = new StringArray(this._io, this, this._root);
      this.display._read();
      this._debug.display.end = this._io.pos;
      this._debug.costumes = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.costumes = new StringArray(this._io, this, this._root);
      this.costumes._read();
      this._debug.costumes.end = this._io.pos;
      this._debug.experience = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.experience = this._io.readU4le();
      this._debug.experience.end = this._io.pos;
    }

    return Levels;
  })();

  var Flags = VillainDef.Flags = (function() {
    function Flags(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    Flags.prototype._read = function() {
      this._debug._unnamed0 = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._unnamed0 = this._io.readBitsInt(5);
      this._debug._unnamed0.end = this._io.pos;
      this._debug.mA = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.mA = this._io.readBitsInt(1) != 0;
      this._debug.mA.end = this._io.pos;
      this._debug.coVOnly = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.coVOnly = this._io.readBitsInt(1) != 0;
      this._debug.coVOnly.end = this._io.pos;
      this._debug.coHOnly = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.coHOnly = this._io.readBitsInt(1) != 0;
      this._debug.coHOnly.end = this._io.pos;
      this._debug._unnamed4 = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._unnamed4 = this._io.readBitsInt(24);
      this._debug._unnamed4.end = this._io.pos;
      this._io.alignToByte();
      this._debug.unknown = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.unknown = new Bool(this._io, this, this._root);
      this.unknown._read();
      this._debug.unknown.end = this._io.pos;
      this._debug.ignoreCombatMods = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.ignoreCombatMods = new Bool(this._io, this, this._root);
      this.ignoreCombatMods._read();
      this._debug.ignoreCombatMods.end = this._io.pos;
      this._debug.copyCreatorMods = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.copyCreatorMods = new Bool(this._io, this, this._root);
      this.copyCreatorMods._read();
      this._debug.copyCreatorMods.end = this._io.pos;
      this._debug.ignoreReduction = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.ignoreReduction = new Bool(this._io, this, this._root);
      this.ignoreReduction._read();
      this._debug.ignoreReduction.end = this._io.pos;
      this._debug.canZone = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.canZone = new Bool(this._io, this, this._root);
      this.canZone._read();
      this._debug.canZone.end = this._io.pos;
    }

    return Flags;
  })();

  var Villain = VillainDef.Villain = (function() {
    Villain.Gender = Object.freeze({
      UNDEFINED: 0,
      NEUTER: 1,
      MALE: 2,
      FEMALE: 3,

      0: "UNDEFINED",
      1: "NEUTER",
      2: "MALE",
      3: "FEMALE",
    });

    Villain.Rank = Object.freeze({
      NONE: 0,
      SMALL: 1,
      MINION: 2,
      LIEUTENANT: 3,
      SNIPER: 4,
      BOSS: 5,
      ELITE: 6,
      ARCHVILLAIN: 7,
      ARCHVILLAIN2: 8,
      BIG_MONSTER: 9,
      PET: 10,
      DESTRUCTIBLE: 11,

      0: "NONE",
      1: "SMALL",
      2: "MINION",
      3: "LIEUTENANT",
      4: "SNIPER",
      5: "BOSS",
      6: "ELITE",
      7: "ARCHVILLAIN",
      8: "ARCHVILLAIN2",
      9: "BIG_MONSTER",
      10: "PET",
      11: "DESTRUCTIBLE",
    });

    function Villain(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    Villain.prototype._read = function() {
      this._debug.class = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.class = new String(this._io, this, this._root);
      this.class._read();
      this._debug.class.end = this._io.pos;
      this._debug.gender = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "VillainDef.Villain.Gender" };
      this.gender = this._io.readU4le();
      this._debug.gender.end = this._io.pos;
      this._debug.description = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.description = new String(this._io, this, this._root);
      this.description._read();
      this._debug.description.end = this._io.pos;
      this._debug.groupDescription = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.groupDescription = new String(this._io, this, this._root);
      this.groupDescription._read();
      this._debug.groupDescription.end = this._io.pos;
      this._debug.classDisplay = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.classDisplay = new String(this._io, this, this._root);
      this.classDisplay._read();
      this._debug.classDisplay.end = this._io.pos;
      this._debug.aiConfig = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.aiConfig = new String(this._io, this, this._root);
      this.aiConfig._read();
      this._debug.aiConfig.end = this._io.pos;
      this._debug.group = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.group = this._io.readU4le();
      this._debug.group.end = this._io.pos;
      this._debug.powers = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.powers = new PowersArray(this._io, this, this._root);
      this.powers._read();
      this._debug.powers.end = this._io.pos;
      this._debug.levels = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.levels = new LevelsArray(this._io, this, this._root);
      this.levels._read();
      this._debug.levels.end = this._io.pos;
      this._debug.rank = { start: this._io.pos, ioOffset: this._io.byteOffset, enumName: "VillainDef.Villain.Rank" };
      this.rank = this._io.readU4le();
      this._debug.rank.end = this._io.pos;
      this._debug.gang = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.gang = new String(this._io, this, this._root);
      this.gang._read();
      this._debug.gang.end = this._io.pos;
      this._debug.flags = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.flags = new Flags(this._io, this, this._root);
      this.flags._read();
      this._debug.flags.end = this._io.pos;
      this._debug.spawnLimit = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.spawnLimit = this._io.readU4le();
      this._debug.spawnLimit.end = this._io.pos;
      this._debug.spawnLimitMission = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.spawnLimitMission = this._io.readU4le();
      this._debug.spawnLimitMission.end = this._io.pos;
      this._debug.additionalRewards = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.additionalRewards = new StringArray(this._io, this, this._root);
      this.additionalRewards._read();
      this._debug.additionalRewards.end = this._io.pos;
      this._debug.favoriteWeapon = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.favoriteWeapon = new String(this._io, this, this._root);
      this.favoriteWeapon._read();
      this._debug.favoriteWeapon.end = this._io.pos;
      this._debug.skillHpRewards = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.skillHpRewards = new StringArray(this._io, this, this._root);
      this.skillHpRewards._read();
      this._debug.skillHpRewards.end = this._io.pos;
      this._debug.skillStatusRewards = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.skillStatusRewards = new StringArray(this._io, this, this._root);
      this.skillStatusRewards._read();
      this._debug.skillStatusRewards.end = this._io.pos;
      this._debug.rewardScale = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.rewardScale = this._io.readF4le();
      this._debug.rewardScale.end = this._io.pos;
      this._debug.powerTags = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.powerTags = new StringArray(this._io, this, this._root);
      this.powerTags._read();
      this._debug.powerTags.end = this._io.pos;
      this._debug.specialPetPower = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.specialPetPower = new String(this._io, this, this._root);
      this.specialPetPower._read();
      this._debug.specialPetPower.end = this._io.pos;
      this._debug.fileName = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.fileName = new String(this._io, this, this._root);
      this.fileName._read();
      this._debug.fileName.end = this._io.pos;
      this._debug.fileAge = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.fileAge = this._io.readU4le();
      this._debug.fileAge.end = this._io.pos;
      this._debug.petCommandStrings = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.petCommandStrings = new PetCommandArray(this._io, this, this._root);
      this.petCommandStrings._read();
      this._debug.petCommandStrings.end = this._io.pos;
      this._debug.petVisibility = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.petVisibility = this._io.readU4le();
      this._debug.petVisibility.end = this._io.pos;
      this._debug.petCommandability = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.petCommandability = this._io.readU4le();
      this._debug.petCommandability.end = this._io.pos;
      this._debug.customBadgeStat = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.customBadgeStat = new String(this._io, this, this._root);
      this.customBadgeStat._read();
      this._debug.customBadgeStat.end = this._io.pos;
      this._debug.badgeFlags = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.badgeFlags = this._io.readU4le();
      this._debug.badgeFlags.end = this._io.pos;
      this._debug._unnamed28 = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._unnamed28 = this._io.readBytes(4);
      this._debug._unnamed28.end = this._io.pos;
    }

    return Villain;
  })();

  var PetCommandArray = VillainDef.PetCommandArray = (function() {
    function PetCommandArray(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    PetCommandArray.prototype._read = function() {
      this._debug.count = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.count = this._io.readU4le();
      this._debug.count.end = this._io.pos;
      this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.value = new Array(this.count);
      this._debug.value.arr = new Array(this.count);
      for (var i = 0; i < this.count; i++) {
        this._debug.value.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
        var _t_value = new PetCommandStruct(this._io, this, this._root);
        _t_value._read();
        this.value[i] = _t_value;
        this._debug.value.arr[i].end = this._io.pos;
      }
      this._debug.value.end = this._io.pos;
    }

    return PetCommandArray;
  })();

  var PowersStruct = VillainDef.PowersStruct = (function() {
    function PowersStruct(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    PowersStruct.prototype._read = function() {
      this._debug.len = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.len = this._io.readU4le();
      this._debug.len.end = this._io.pos;
      this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._raw_value = this._io.readBytes(this.len);
      var _io__raw_value = new KaitaiStream(this._raw_value);
      this.value = new Powers(_io__raw_value, this, this._root);
      this.value._read();
      this._debug.value.end = this._io.pos;
    }

    return PowersStruct;
  })();

  var PstringArray = VillainDef.PstringArray = (function() {
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

  var StringArray = VillainDef.StringArray = (function() {
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

  var String = VillainDef.String = (function() {
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

  var Pstring = VillainDef.Pstring = (function() {
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

  var VillainStruct = VillainDef.VillainStruct = (function() {
    function VillainStruct(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    VillainStruct.prototype._read = function() {
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
      this.value = new Villain(_io__raw_value, this, this._root);
      this.value._read();
      this._debug.value.end = this._io.pos;
    }

    return VillainStruct;
  })();

  var Bool = VillainDef.Bool = (function() {
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

  var U4Array = VillainDef.U4Array = (function() {
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

  var PowersArray = VillainDef.PowersArray = (function() {
    function PowersArray(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    PowersArray.prototype._read = function() {
      this._debug.count = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.count = this._io.readU4le();
      this._debug.count.end = this._io.pos;
      this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.value = new Array(this.count);
      this._debug.value.arr = new Array(this.count);
      for (var i = 0; i < this.count; i++) {
        this._debug.value.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
        var _t_value = new PowersStruct(this._io, this, this._root);
        _t_value._read();
        this.value[i] = _t_value;
        this._debug.value.arr[i].end = this._io.pos;
      }
      this._debug.value.end = this._io.pos;
    }

    return PowersArray;
  })();

  var Powers = VillainDef.Powers = (function() {
    function Powers(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    Powers.prototype._read = function() {
      this._debug.category = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.category = new String(this._io, this, this._root);
      this.category._read();
      this._debug.category.end = this._io.pos;
      this._debug.powerset = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.powerset = new String(this._io, this, this._root);
      this.powerset._read();
      this._debug.powerset.end = this._io.pos;
      this._debug.power = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.power = new String(this._io, this, this._root);
      this.power._read();
      this._debug.power.end = this._io.pos;
      this._debug.level = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.level = this._io.readU4le();
      this._debug.level.end = this._io.pos;
      this._debug.remove = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.remove = new Bool(this._io, this, this._root);
      this.remove._read();
      this._debug.remove.end = this._io.pos;
      this._debug.dontSetStance = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.dontSetStance = new Bool(this._io, this, this._root);
      this.dontSetStance._read();
      this._debug.dontSetStance.end = this._io.pos;
    }

    return Powers;
  })();

  var Header = VillainDef.Header = (function() {
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

  var LevelsStruct = VillainDef.LevelsStruct = (function() {
    function LevelsStruct(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    LevelsStruct.prototype._read = function() {
      this._debug.len = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.len = this._io.readU4le();
      this._debug.len.end = this._io.pos;
      this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this._raw_value = this._io.readBytes(this.len);
      var _io__raw_value = new KaitaiStream(this._raw_value);
      this.value = new Levels(_io__raw_value, this, this._root);
      this.value._read();
      this._debug.value.end = this._io.pos;
    }

    return LevelsStruct;
  })();

  var VillainArray = VillainDef.VillainArray = (function() {
    function VillainArray(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._debug = {};

    }
    VillainArray.prototype._read = function() {
      this._debug.count = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.count = this._io.readU4le();
      this._debug.count.end = this._io.pos;
      this._debug.value = { start: this._io.pos, ioOffset: this._io.byteOffset };
      this.value = new Array(this.count);
      this._debug.value.arr = new Array(this.count);
      for (var i = 0; i < this.count; i++) {
        this._debug.value.arr[i] = { start: this._io.pos, ioOffset: this._io.byteOffset };
        var _t_value = new VillainStruct(this._io, this, this._root);
        _t_value._read();
        this.value[i] = _t_value;
        this._debug.value.arr[i].end = this._io.pos;
      }
      this._debug.value.end = this._io.pos;
    }

    return VillainArray;
  })();

  return VillainDef;
})();
return VillainDef;
}));
