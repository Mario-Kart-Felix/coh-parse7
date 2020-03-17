meta:
  id: attrib_names
  endian: le
  encoding: ascii
seq:
  - {id: header, type: header}
  - {id: value, type: body}
types:
  body:
    seq:
      - {id: damage_attribs, type: attribarray}
      - {id: defense_attribs, type: attribarray}
      - {id: boost_attribs, type: attribarray}
      - {id: group_attribs, type: attribarray}
      - {id: mode_attribs, type: attribarray}
      - {id: elusivity_attribs, type: attribarray}
      - {id: stack_attribs, type: attribarray}
  attribarray: 
    seq:
      - {id: count, type: u4}
      - {id: value, type: attribname, repeat: expr, repeat-expr: count}
  attribname:
    seq:
      - {type: u4}
      - {id: name, type: string}
      - {id: display, type: string}
      - {id: icon, type: string}
  header: {seq: [{size: 20},{id: s, type: u4},{size: s},{size: 4}]}
  string: {seq: [{id: ofs, type: u4}],instances: {value: {pos: ofs+24, type: strz}}}