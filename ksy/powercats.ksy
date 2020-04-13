meta:
  id: powercats
  endian: le
  encoding: ascii
seq:
  - {id: header, type: header}
  - {id: len, type: u4}
  - {id: value, type: powercat_array, size: len}
types:
  powercat_array:
    seq:
      - {id: count, type: u4}
      - {id: value, type: powercat_struct, repeat: expr, repeat-expr: count}
  powercat_struct:
    seq:
      - {id: len, type: u4}
      - {id: source, type: string}
      - {id: key, type: string}
      - {id: value, type: powercat, size: len - 8}
  powercat:
    seq:
      - {id: display, type: string}
      - {id: help, type: string}
      - {id: short_help, type: string}
      - {id: powersets, type: string_array}
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
