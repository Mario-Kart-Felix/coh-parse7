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
      - {id: key, type: u4string}
      - {id: value, type: string_id}
      - {id: help, type: string_id}
      - {id: vars, type: var_array}
  u4string:
    seq:
      - {id: len, type: u4}
      - {id: value, type: str, size: len}
  string_id:
    seq: [{id: index, type: u4}]
    instances:
      value: 
        value: _root.strings.value.value[index]
  var_array:
    seq:
      - {id: count, type: u4}
      - {id: value, type: var_id, repeat: expr, repeat-expr: count}
  var_id:
    seq: [{id: index, type: u4}]
    instances:
      value:
        value: _root.vars.value.value[index]