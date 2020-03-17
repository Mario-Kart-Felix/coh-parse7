meta:
  id: classes
  endian: le
  encoding: ascii
seq:
  - {id: header, type: header}
  - {id: len, type: u4}
  - {id: value, type: classes_array}
types:
  classes_array:
    seq:
      - {id: count, type: u4}
      - {id: value, type: classes_struct, repeat: expr, repeat-expr: count}
  classes_struct:
    seq:
      - {id: len, type: u4}
      - {id: value, type: classes_item, size: len}
  classes_item:
    seq:
      - {id: name, type: string}
      - {id: display, type: string}
      - {id: help, type: string}
      - {id: origins, type: string_array}
      - {id: restrictions, type: string_array}
      - {id: store, type: string}
      - {id: locked, type: string}
      - {id: product, type: string}
      - {id: reduction, type: string}
      - {id: reduce_as_a_v, type: u4}
      - {id: respecs, type: u4_array}
      - {id: short_help, type: string}
      - {id: icon, type: string}
      - {id: primary, type: string}
      - {id: secondary, type: string}
      - {id: pool, type: string}
      - {id: epic, type: string}
      - {id: attrib_min, type: attributes_array(0)}
      - {id: attrib_base, type: attributes_array(0)}
      - {id: strength_min, type: attributes_array(0)}
      - {id: resistance_min, type: attributes_array(0)}
      - {id: attrib_dimin_str_in, type: attributes_array(0)}
      - {id: attrib_dimin_str_out, type: attributes_array(0)}
      - {id: attrib_dimin_cur_in, type: attributes_array(0)}
      - {id: attrib_dimin_cur_out, type: attributes_array(0)}
      - {id: attrib_dimin_res_in, type: attributes_array(0)}
      - {id: attrib_dimin_res_out, type: attributes_array(0)}
      - {id: attrib_max_table, type: attributes_array(1)}
      - {id: attrib_max_max_table, type: attributes_array(1)}
      - {id: strength_max_table, type: attributes_array(1)}
      - {id: resistance_max_table, type: attributes_array(1)}
      - {id: mod_table, type: named_table_array}
      - {id: connect_h_p_and_status, type: u4}
      - {id: off_defiant_h_p_attrib, type: u4}
      - {id: defiant_scale, type: f4}
  named_table_array:
    seq:
      - {id: count, type: u4}
      - {id: value, type: named_table_struct, repeat: expr, repeat-expr: count}
  named_table_struct:
    seq:
      - {id: len, type: u4}
      - {id: value, type: named_table, size: len}
  named_table:
    seq:
      - {id: key, type: string}
      - {id: value, type: f4array(1)}
  attributes_array:
    params:
      - {id: z_is_array, type: u1}
    seq:
      - {id: count, type: u4}
      - {id: value, type: attributes_struct(z_is_array), repeat: expr, repeat-expr: count}
  attributes_struct:
    params:
      - {id: z_is_array, type: u1}
    seq:
      - {id: len, type: u4}
      - {id: value, type: attributes(z_is_array), size: len}
  attributes:
    params:
      - {id: z_is_array, type: u1}
    seq:
      - {id: damage, type: f4array(z_is_array), repeat: expr, repeat-expr: 20}
      - {id: hp, type: f4array(z_is_array)}
      - {id: absorb, type: f4array(z_is_array)}
      - {id: endurance, type: f4array(z_is_array)}
      - {id: insight, type: f4array(z_is_array)}
      - {id: rage, type: f4array(z_is_array)}
      - {id: to_hit, type: f4array(z_is_array)}
      - {id: defense, type: f4array(z_is_array), repeat: expr, repeat-expr: 20}
      - {id: defense_base, type: f4array(z_is_array)}
      - {id: speed_running, type: f4array(z_is_array)}
      - {id: speed_flying, type: f4array(z_is_array)}
      - {id: speed_swimming, type: f4array(z_is_array)}
      - {id: speed_jumping, type: f4array(z_is_array)}
      - {id: jump_height, type: f4array(z_is_array)}
      - {id: movement_control, type: f4array(z_is_array)}
      - {id: movement_friction, type: f4array(z_is_array)}
      - {id: stealth, type: f4array(z_is_array)}
      - {id: stealth_radius, type: f4array(z_is_array)}
      - {id: stealth_radius_player, type: f4array(z_is_array)}
      - {id: perception_radius, type: f4array(z_is_array)}
      - {id: regeneration, type: f4array(z_is_array)}
      - {id: recovery, type: f4array(z_is_array)}
      - {id: insight_recovery, type: f4array(z_is_array)}
      - {id: threat_level, type: f4array(z_is_array)}
      - {id: taunt, type: f4array(z_is_array)}
      - {id: placate, type: f4array(z_is_array)}
      - {id: confused, type: f4array(z_is_array)}
      - {id: afraid, type: f4array(z_is_array)}
      - {id: terrorized, type: f4array(z_is_array)}
      - {id: held, type: f4array(z_is_array)}
      - {id: immobilized, type: f4array(z_is_array)}
      - {id: stunned, type: f4array(z_is_array)}
      - {id: sleep, type: f4array(z_is_array)}
      - {id: fly, type: f4array(z_is_array)}
      - {id: jumppack, type: f4array(z_is_array)}
      - {id: teleport, type: f4array(z_is_array)}
      - {id: untouchable, type: f4array(z_is_array)}
      - {id: intangible, type: f4array(z_is_array)}
      - {id: only_affects_self, type: f4array(z_is_array)}
      - {id: experience_gain, type: f4array(z_is_array)}
      - {id: influence_gain, type: f4array(z_is_array)}
      - {id: prestige_gain, type: f4array(z_is_array)}
      - {id: null_bool, type: f4array(z_is_array)}
      - {id: knockup, type: f4array(z_is_array)}
      - {id: knockback, type: f4array(z_is_array)}
      - {id: repel, type: f4array(z_is_array)}
      - {id: accuracy, type: f4array(z_is_array)}
      - {id: radius, type: f4array(z_is_array)}
      - {id: arc, type: f4array(z_is_array)}
      - {id: range, type: f4array(z_is_array)}
      - {id: time_to_activate, type: f4array(z_is_array)}
      - {id: recharge_time, type: f4array(z_is_array)}
      - {id: interrupt_time, type: f4array(z_is_array)}
      - {id: endurance_discount, type: f4array(z_is_array)}
      - {id: insight_discount, type: f4array(z_is_array)}
      - {id: meter, type: f4array(z_is_array)}
      - {id: elusivity00, type: f4array(z_is_array), repeat: expr, repeat-expr: 20}
      - {id: elusivity_base, type: f4array(z_is_array)}
  f4array:
    params:
      - {id: z_is_array, type: u1}
    seq:
      - {id: count, type: u4, if: z_is_array == 1}
      - {id: value, type: f4, repeat: expr, repeat-expr: count, if: z_is_array == 1}
      - {id: val, type: f4, if: z_is_array == 0}
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
  header: {seq: [{size: 20},{id: s, type: u4},{size: ((s-1)/4+1)*4}]}
  string: {seq: [{id: ofs, type: u4}],instances: {value: {pos: ofs+24, type: strz, io: _root._io}}}
  string_array: {seq: [{id: count, type: u4}, {id: value, type: string, repeat: expr, repeat-expr: count}]}
