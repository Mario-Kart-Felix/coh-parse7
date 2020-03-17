meta:
  id: powersets
  endian: le
  encoding: ascii
seq:
  - {id: header, type: header}
  - {id: len, type: u4}
  - {id: value, type: powerset_array, size: len}
types:
  powerset_array:
    seq:
      - {id: count, type: u4}
      - {id: value, type: powerset_struct, repeat: expr, repeat-expr: count}
  powerset_struct:
    seq:
      - {id: len, type: u4}
      - {id: value, type: powerset, size: len}
    -webide-representation: "{value.fullName}"
  powerset:
    seq:
      - {id: source, type: string}
      - {id: full_name, type: string}
      - {id: name, type: string}
      - {id: system, type: u4}
      - {id: shared, type: u4}
      - {id: display, type: string}
      - {id: help, type: string}
      - {id: short_help, type: string}
      - {id: icon, type: string}
      - {id: costume_keys, type: string_array}
      - {id: costume_parts, type: string_array}
      - {id: account_requires, type: string}
      - {id: account_tooltip, type: string}
      - {id: account_product, type: string}
      - {id: buy_requires, type: string_array}
      - {id: buy_requires_failed, type: string}
      - {id: show_in_inventory, type: u4}
      - {id: show_in_manage, type: u4}
      - {id: show_in_info, type: u4}
      - {id: specialize_at, type: u4}
      - {id: specialize_requires, type: string_array}
      - {id: powers, type: string_array}
      - {id: available, type: u4_array}
      - {id: aimax_level, type: u4_array}
      - {id: aimin_rank_con, type: u4_array}
      - {id: aimax_rank_con, type: u4_array}
      - {id: min_difficulty, type: u4_array}
      - {id: max_difficulty, type: u4_array}
      - {id: force_level_bought, type: u4}
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
  string: {seq: [{id: ofs, type: u4}], instances: {value: {pos: ofs+24, type: strz, io: _root._io}},-webide-representation: "{value}"}
  string_array: {seq: [{id: count, type: u4}, {id: value, type: string, repeat: expr, repeat-expr: count}]}
