meta:
  id: boostsets
  endian: le
  encoding: ascii
seq:
  - {id: header, type: header}
  - {id: next, type: u4}
  - {id: value, size: next, type: boostset_array}
types:
  boostset_array:
    seq:
      - {id: count, type: u4}
      - {id: value, type: boostset_struct, repeat: expr, repeat-expr: count}
  boostset_struct:
    seq:
      - {id: len, type: u4}
      - {id: value, size: len, type: boostset}
  boostset:
    seq:
      - {id: name, type: string}
      - {id: display, type: string}
      - {id: group, type: string}
      - {id: conversions, type: conversion_group_array}
      - {id: powers, type: pstring_array}
      - {id: boosts, type: boost_array}
      - {id: bonuses, type: bonus_array}
      - {id: min_level, type: u4}
      - {id: max_level, type: u4}
      - {id: store_product, type: string}
  conversion_group_array:
    seq:
      - {id: count, type: u4}
      - {id: value, type: string, repeat: expr, repeat-expr: count}
  boost_array:
    seq:
      - {id: count, type: u4}
      - {id: value, type: boost_nest, repeat: expr, repeat-expr: count}
  boost_nest:
    seq:
      - {id: len, type: u4}
      - {id: value, type: pstring_array, size: len}
  bonus_array:
    seq:
      - {id: count, type: u4}
      - {id: value, type: bonus_struct, repeat: expr, repeat-expr: count}
  bonus_struct:
    seq:
      - {id: len, type: u4}
      - {id: value, type: bonus, size: len}
  bonus:
    seq:
      - {id: name, type: pstring}
      - {id: min_boosts, type: u4}
      - {id: max_boosts, type: u4}
      - {id: requires, type: string_array}
      - {id: auto_powers, type: pstring_array}
      - {id: bonus_power, type: pstring}
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