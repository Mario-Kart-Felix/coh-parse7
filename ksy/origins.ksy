meta:
  id: origins
  endian: le
  encoding: ascii
seq:
  - {id: header, type: header}
  - {id: len, type: u4}
  - {id: value, type: origin_array, size: len}
types:
  origin_array:
    seq:
      - {id: count, type: u4}
      - {id: value, type: origin_struct, repeat: expr, repeat-expr: count}
  origin_struct:
    seq:
      #- {id: len, type: u4}
      - {id: value, type: origin}
  origin:
    seq:
      - {id: display, type: string}
      - {id: name, type: string}
      - {id: name_message, type: string}
      - {id: help, type: string}
      - {id: short_help, type: string}
      - {id: icon, type: string}
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
