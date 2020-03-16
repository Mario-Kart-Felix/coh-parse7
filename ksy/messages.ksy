meta:
  id: messages
  endian: le
  encoding: ascii
seq:
  - {type: u4}
  - {id: strings, type: strings}
  - {id: vars, type: strings}
  - {id: stash, type: stash}
types:
  strings:
    seq:
      - {id: count, type: u4}
      - {id: len, type: u4}
      - {id: value, type: string, size: len}
  string:
    seq:
      - {id: value, type: strz, repeat: eos}
  stash:
    seq:
      - {id: count, type: u4}
      - {id: value, type: item, repeat: expr, repeat-expr: count}
  item:
    seq:
      - {id: id, type: u4string}
      - {id: message, type: u4}
      - {id: help, type: u4}
      - {id: vars, type: var_array}
  u4string:
    seq:
      - {id: len, type: u4}
      - {id: value, type: str, size: len}
  var_array:
    seq:
      - {id: count, type: u4}
      - {id: value, type: u4, repeat: expr, repeat-expr: count}
