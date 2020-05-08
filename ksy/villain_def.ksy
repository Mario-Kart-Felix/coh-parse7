meta:
  id: villain_def
  endian: le
  encoding: ascii
seq:
  - {id: header, type: header}
  - {id: len, type: u4}
  - {id: value, type: villain_array, size: len}
types:
  villain_array:
    seq:
      - {id: count, type: u4}
      - {id: value, type: villain_struct, repeat: expr, repeat-expr: count}
  villain_struct:
    seq:
      - {id: len, type: u4}
      - {id: key, type: string}
      - {id: value, type: villain, size: len-4}
  villain:
    seq:
      - {id: class, type: string}
      - {id: gender, type: u4, enum: gender}
      - {id: description, type: string}
      - {id: group_description, type: string}
      - {id: class_display, type: string}
      - {id: ai_config, type: string}
      - {id: group, type: u4}
      - {id: powers, type: powers_array}
      - {id: levels, type: levels_array}
      - {id: rank, type: u4, enum: rank}
      - {id: gang, type: string}
      - {id: flags, type: flags}
      - {id: spawn_limit, type: u4}
      - {id: spawn_limit_mission, type: u4}
      - {id: additional_rewards, type: string_array}
      - {id: favorite_weapon, type: string}
      - {id: skill_hp_rewards, type: string_array}
      - {id: skill_status_rewards, type: string_array}
      - {id: reward_scale, type: f4}
      - {id: power_tags, type: string_array}
      - {id: special_pet_power, type: string}
      - {id: file_name, type: string}
      - {id: file_age, type: u4}
      - {id: pet_command_strings, type: pet_command_array}
      - {id: pet_visibility, type: u4}
      - {id: pet_commandability, type: u4}
      - {id: custom_badge_stat, type: string}
      - {id: badge_flags, type: u4}
      - {size: 4}
    enums:
      gender:
        0: undefined
        1: neuter
        2: male
        3: female
      rank:
        0: none
        1: small
        2: minion
        3: lieutenant
        4: sniper
        5: boss
        6: elite
        7: archvillain
        8: archvillain2
        9: big_monster
        10: pet
        11: destructible
  pet_command_array:
    seq:
      - {id: count, type: u4}
      - {id: value, type: pet_command_struct, repeat: expr, repeat-expr: count}
  pet_command_struct:
    seq:
      - {id: len, type: u4}
      - {id: value, type: pet_command, size: len}
  pet_command:
    seq:
      - {id: passive, type: string_array}
      - {id: defensive, type: string_array}
      - {id: aggressive, type: string_array}
      - {id: attack_target, type: string_array}
      - {id: attack_no_target, type: string_array}
      - {id: stay_here, type: string_array}
      - {id: use_power, type: string_array}
      - {id: use_power_none, type: string_array}
      - {id: follow_me, type: string_array}
      - {id: goto_spot, type: string_array}
      - {id: dismiss, type: string_array}
  flags:
    seq:
      - {type: b5}
      - {id: m_a, type: b1}
      - {id: co_v_only, type: b1}
      - {id: co_h_only, type: b1}
      - {type: b24}
      - {id: unknown, type: bool}
      - {id: ignore_combat_mods, type: bool}
      - {id: copy_creator_mods, type: bool}
      - {id: ignore_reduction, type: bool}
      - {id: can_zone, type: bool}
  levels_array:
    seq:
      - {id: count, type: u4}
      - {id: value, type: levels_struct, repeat: expr, repeat-expr: count}
  levels_struct:
    seq:
      - {id: len, type: u4}
      - {id: value, type: levels, size: len}
  levels:
    seq:
      - {id: level, type: u4}
      - {id: display, type: string_array}
      - {id: costumes, type: string_array}
      - {id: experience, type: u4}
  powers_array:
    seq:
      - {id: count, type: u4}
      - {id: value, type: powers_struct, repeat: expr, repeat-expr: count}
  powers_struct:
    seq:
      - {id: len, type: u4}
      - {id: value, type: powers, size: len}
  powers:
    seq:
      - {id: category, type: string}
      - {id: powerset, type: string}
      - {id: power, type: string}
      - {id: level, type: u4}
      - {id: remove, type: bool}
      - {id: dont_set_stance, type: bool}
  bool:
    seq:
      - {type: b7}
      - {id: value, type: b1}
      - {size: 3}
    -webide-representation: "{value}"
  u4_array:
    seq:
      - {id: count, type: u4}
      - {id: value, type: u4, repeat: expr, repeat-expr: count}
  pstring_array:
    seq:
      - {id: count, type: u4}
      - {id: value, type: pstring, repeat: expr, repeat-expr: count}
  pstring:
    seq:
      - {id: len, type: u2}
      - {id: value, type: str, size: len}
      - {id: pad, size: (4 - _io.pos) % 4}
    -webide-representation: "{value}"
  header: {seq: [{size: 20},{id: s, type: u4},{size: s + (4 - s) % 4}]}
  string:
    seq: [{id: ofs, type: u4}]
    instances: {value: {pos: ofs+24, type: strz, io: _root._io, -webide-parse-mode: eager }}
    -webide-representation: "{value}"
  string_array: {seq: [{id: count, type: u4}, {id: value, type: string, repeat: expr, repeat-expr: count}]}
