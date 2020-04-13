meta:
  id: powers
  endian: le
  encoding: ascii
seq:
  - {id: header, type: header}
  - {id: len, type: u4}
  - {id: value, type: power_array, size: len}
types:
  power_array:
    seq:
      - {id: count, type: u4}
      - {id: value, type: power_struct, repeat: expr, repeat-expr: count}
  power_struct:
    seq:
      - {id: len, type: u4}
      - {id: value, type: power_block, size: len}
    instances:
      key:
        value: value.value.key
    -webide-representation: "{key}"
  power_block:
    instances:
      value: {pos: 0, type: power, size-eos: true}
  power:
    seq:
      - {id: key, type: string, doc: 'full_name'}
      - {type: u4, doc: 'crc'}
      - {type: string, doc: 'source'}
      - {type: string, doc: 'name'}
      - {type: string, doc: 'source_name'}
      - {type: u4, doc: 'system'}
      - {id: auto_issue, type: bool}
      - {id: auto_issue_save_level, type: bool}
      - {id: free, type: bool}
      - {id: display, type: string}
      - {id: help, type: string}
      - {id: short_help, type: string}
      - {id: target_help, type: string}
      - {id: target_short_help, type: string}
      - {id: attacker_attack, type: string}
      - {id: attacker_attack_floater, type: string}
      - {id: attacker_hit, type: string}
      - {id: victim_hit, type: string}
      - {id: confirm, type: string}
      - {id: float_rewarded, type: string}
      - {id: power_defense_float, type: string}
      - {id: icon, type: string}
      - {id: type, type: u4, enum: power_type}
      - {id: num_allowed, type: u4}
      - {id: attack_types, type: attrib_array}
      - {id: buy_requires, type: string_array}
      - {id: activate_requires, type: string_array}
      - {id: slot_requires, type: string_array}
      - {id: target_requires, type: string_array}
      - {id: reward_requires, type: string_array}
      - {id: auction_requires, type: string_array}
      - {id: reward_fallback, type: string}
      - {id: accuracy, type: f4}
      - {id: cast_flags, type: cast_flags}
      - {id: ai_report, type: u4, enum: ai_report}
      - {id: effect_area, type: u4, enum: effect_area}
      - {id: max_targets_hit, type: u4}
      - {id: unknown, type: f4}
      - {id: radius, type: f4}
      - {id: arc, type: f4}
      - {id: chain_delay, type: f4}
      - {id: chain_eff, type: string_array}
      - {id: chain_fork, type: u4_array}
      - {id: box_offset, type: f4, repeat: expr, repeat-expr: 3}
      - {id: box_size, type: f4, repeat: expr, repeat-expr: 3}
      - {id: range, type: f4}
      - {id: range_secondary, type: f4}
      - {id: time_to_activate, type: f4}
      - {id: recharge_time, type: f4}
      - {id: activate_period, type: f4}
      - {id: endurance_cost, type: f4}
      - {id: idea_cost, type: f4}
      - {id: time_to_confirm, type: u4}
      - {id: self_confirm, type: u4}
      - {id: confirm_requires, type: string_array}
      - {id: destroy_on_limit, type: bool}
      - {id: stacking_usage, type: bool}
      - {id: num_charges, type: u4}
      - {id: max_num_charges, type: u4}
      - {id: usage_time, type: f4}
      - {id: max_usage_time, type: f4}
      - {id: lifetime, type: f4}
      - {id: max_lifetime, type: f4}
      - {id: lifetime_in_game, type: f4}
      - {id: max_lifetime_in_game, type: f4}
      - {id: interrupt_time, type: f4}
      - {id: target_visibility, type: u4, enum: target_visibility}
      - {id: target, type: target_type}
      - {id: target_secondary, type: target_type}
      - {id: auto_hit, type: target_type_array}
      - {id: affected, type: target_type_array}
      - {id: targets_through_vision_phase, type: bool}
      - {id: boosts_allowed, type: boost_type_array}
      - {id: group_membership, type: group_array}
      - {id: modes_required, type: mode_array}
      - {id: modes_disallowed, type: mode_array}
      - {id: ai_groups, type: string_array}
      - {id: redirect, type: power_redirect_array}
      - {id: effects, type: effect_array}
      - {id: ignore_strength, type: bool}
      - {id: show_buff_icon, type: bool}
      - {id: show_in_inventory, type: u4, enum: show_power_setting}
      - {id: show_in_manage, type: bool}
      - {id: show_in_info, type: bool}
      - {id: deletable, type: bool}
      - {id: tradeable, type: bool}
      - {id: max_boosts, type: u4}
      - {id: do_not_save, type: bool}
      - {id: boost_flags, type: boost_flags}
      - {id: boost_catalyst_conversion, type: string}
      - {id: store_product, type: string}
      - {id: boost_license_level, type: u4}
      - {id: min_slot_level, type: s4}
      - {id: max_slot_level, type: u4}
      - {id: max_boost_level, type: u4}
      - {id: var, type: var_array}
      - {id: toggle_droppable, type: u4, enum: toggle_droppable}
      - {id: proc_allowed, type: u4, enum: proc_allowed}
      - {id: strengths_disallowed, type: attrib_array}
      - {id: proc_main_target_only, type: bool}
      - {id: anim_main_target_only, type: bool}
      - {id: highlight_eval, type: string_array}
      - {id: highlight_icon, type: string}
      - {id: highlight_ring, type: rgba}
      - {id: travel_suppression, type: f4}
      - {id: preference_multiplier, type: f4}
      - {id: dont_set_stance, type: bool}
      - {id: point_value, type: f4}
      - {id: point_multiplier, type: f4}
      - {id: chain_into_power, type: string}
      - {id: instance_locked, type: bool}
      - {id: is_environment_hit, type: bool}
      - {id: shuffle_targets, type: bool}
      - {id: force_level_bought, type: s4}
      - {id: refreshes_on_active_player_change, type: bool}
      - {id: cancelable, type: bool}
      - {id: ignore_toggle_max_distance, type: bool}
      - {id: server_tray_priority, type: u4}
      - {id: server_tray_requires, type: string_array}
      - {id: abusive_buff, type: bool}
      - {id: fx, type: graphics}
    enums:
      show_power_setting:
        0: never
        1: default
        2: always
        3: if_usable
        4: if_owned
      target_visibility:
        0: line_of_sight
        1: none
      effect_area:
        0: character
        1: cone
        2: sphere
        3: location
        4: chain
        5: volume
        6: namedvolume
        7: map
        8: room
        9: touch
        10: box
      ai_report:
        0: always
        1: never
        2: hit_only
        3: miss_only
      power_type:
        0: click
        1: auto
        2: toggle
        3: boost
        4: inspiration
        5: global_boost
      toggle_droppable:
        0: sometimes
        1: always
        2: first
        3: last
        4: never
      proc_allowed:
        0: all
        1: none
        2: power_only
        3: global_only
  boost_flags:
    seq:
      - {id: boost_ignore_effectiveness, type: bool}
      - {id: boost_always_count_for_set, type: bool}
      - {id: boost_tradeable, type: bool}
      - {id: boost_combinable, type: bool}
      - {id: boost_account_bound, type: bool}
      - {id: boost_boostable, type: bool}
      - {id: boost_use_player_level, type: bool}
  mode_array:
    seq:
      - {id: count, type: u4}
      - {id: value, type: mode, repeat: expr, repeat-expr: count}
  mode:
    seq:
      - {id: value, type: u4, enum: mode}
    enums:
      mode:
        0: server_tray_override
        1: peacebringer_blaster_mode
        2: peacebringer_tanker_mode
        3: peacebringer_light_mode
        4: warshade_blaster_mode
        5: warshade_tanker_mode
        6: shivan_mode
        7: disable_travel
        8: disable_pool
        9: disable_temp
        10: disable_teleport
        11: disable_portals
        12: disable_all
        13: disable_inspiration
        14: disable_inspiration_small
        15: disable_inspiration_medium
        16: disable_inspiration_large
        17: disable_inspiration_special
        18: disable_set_bonus
        19: disable_recall
        20: disable_walk
        21: disable_suicide
        22: disable_rocket_board
        23: disable_flying_carpet
        24: disable_void_skiff
        25: disable_steam_jump
        26: disable_jump_pack
        27: arena
        28: disable_awaken
        29: disable_toggle
        30: mastermind_upgrade_1
        31: mastermind_upgrade_2
        32: domination
        33: domination_active
        34: vengeance_mode
        35: proc_mode
        36: no_shopping
        37: disable_epic
        38: raid_defender_mode
        39: raid_attacker_mode
        40: range_finder_mode
        41: temporal_disruption
        42: dd_status_mode_1
        43: dd_status_mode_2
        44: dd_debuff_mode_1
        45: dd_debuff_mode_2
        46: dd_bonus_ao_emode_1
        47: dd_bonus_ao_emode_2
        48: dd_bonus_do_tmode_1
        49: dd_bonus_do_tmode_2
        50: kill_tk
        51: engaged
        52: defiant
        53: lost_cure
        54: midnight_disguise
        55: chain_induction
        56: chain_stun_mode
        57: chain_jolt_mode
        58: chain_confuse_mode
        59: sequestor_1
        60: sequestor_2
        61: sequestor_3
        62: no_nukes
        63: hac_offense
        64: hac_defense
        65: disable_juggernaut
        66: tower_protection
        67: panacea
        68: grounded
        69: lethal_ammo
        70: ice_ammo
        71: fire_ammo
        72: toxic_ammo
        73: architect_mission_mode
        74: co_op_team
        75: broken
        76: disable_fortune_buffs
        77: in_costume
        78: wintery_aegis
        79: roided_idf
        80: harmonic_destabilizer
        81: hidden_attack
        82: siphon_mode
        83: turret_stage1
        84: turret_stage2
        85: turret_stage3
        86: turret_stage4
        87: turret_stage5
        88: defeated_oil_slick
        89: marked_for_death
        90: enraged
        91: targeting_reticule
        92: not_in_combat
        93: ultimate_inspire
        94: ambrosia_inspire
        95: eo_einspire
        96: fast_mode
        97: opportunity
        98: opportunity_lock
        99: opportunity_sustain
        100: opportunity_smashing
        101: opportunity_lethal
        102: opportunity_fire
        103: opportunity_cold
        104: opportunity_energy
        105: opportunity_negative
        106: opportunity_toxic
        107: opportunity_psionic
        108: infected_01
        109: infected_02
        110: infected_03
        111: incarnate_equipped
        112: one_power_cell
        113: two_power_cell
        114: three_power_cell
        115: entangled_a
        116: entangled_b
        117: hunter_mode
        118: prowler_mode
        119: prowler_cloak_mode
        120: hybrid_lockout
        121: rested_adaptation
        122: defensive_adaptation
        123: offensive_adaptation
        124: clear_skies
        125: clouded_skies
        126: speedof_sound_on
        127: mighty_leap_on
        128: jetpack_on
        129: mystic_flight_on
        130: free_running_on
        131: energy_focus
  group_array:
    seq:
      - {id: count, type: u4}
      - {id: value, type: group, repeat: expr, repeat-expr: count}
  group:
    seq:
      - {id: value, type: u4, enum: group}
    enums:
      group:
        0: flying
        1: speed
        2: sprint
        3: leap
        4: flyingroot
        5: speedroot
        6: sprintroot
        7: leaproot
        8: rock_armor
        9: brimstone_armor
        10: crystal_armor
        11: mineral_armor
        12: stealth
        13: hide
        14: rest
        15: kheldian
        16: ascendant
        17: darkness
        18: ammo
        19: hac
        20: vanitypet
        21: combatpet
        22: primalist
        23: bio
        24: combatpet
        25: afterburner
  boost_type_array:
    seq:
      - {id: count, type: u4}
      - {id: value, type: boost_type, repeat: expr, repeat-expr: count}
  boost_type:
    seq:
      - {id: value, type: u4, enum: boost_type}
    enums:
      boost_type:
        0: science
        1: mutation
        2: magic
        3: technology
        4: natural
        5: accuracy
        6: buff_defense
        7: buff_tohit
        8: confuse
        9: damage
        10: debuff_defense
        11: debuff_tohit
        12: fear
        13: speedflying
        14: heal
        15: immobilized
        16: jump
        17: knockback
        18: recharge
        19: speedrunning
        20: sleep
        21: stunned
        22: range
        23: endurancediscount
        24: buff_damage
        25: debuff_damage
        26: radius
        27: cone
        28: taunt
        29: slow
        30: hold
        31: intangible
        32: interrupt
        33: recovery
        34: endurance_drain
        35: res_damage
        36: hamidon
        37: incarnate_judgement
        38: incarnate_interface
        39: incarnate_lore
        40: incarnate_destiny
  target_type_array:
    seq:
      - {id: count, type: u4}
      - {id: value, type: target_type, repeat: expr, repeat-expr: count}
  target_type:
    seq:
      - {id: value, type: u4, enum: target_type}
    enums:
      target_type:
        0: none
        1: caster
        2: player
        3: player_hero
        4: player_villain
        5: dead_player
        6: dead_player_friend
        7: dead_player_foe
        8: teammate
        9: dead_teammate
        10: dead_or_alive_teammate
        11: villain
        12: dead_villain
        13: npc
        14: dead_or_alive_friend
        15: dead_friend
        16: friend
        17: dead_or_alive_foe
        18: dead_foe
        19: foe
        20: location
        21: any
        22: teleport
        23: dead_or_alive_my_pet
        24: dead_my_pet
        25: my_pet
        26: my_owner
        27: my_creator
        28: my_creation
        29: dead_my_creation
        30: dead_or_alive_my_creation
        31: leaguemate
        32: dead_leaguemate
        33: dead_or_alive_leaguemate
        34: position
  cast_flags:
    seq:
      - {id: near_ground, type: bool}
      - {id: target_near_ground, type: bool}
      - {type: b6}
      - {id: castable_dead_or_alive, type: b1}
      - {id: castable_after_death, type: b1}
      - {type: b24}
      - {id: cast_through_hold, type: bool}
      - {id: cast_through_sleep, type: bool}
      - {id: cast_through_stun, type: bool}
      - {id: cast_through_terrorize, type: bool}
      - {id: toggle_ignore_hold, type: bool}
      - {id: toggle_ignore_sleep, type: bool}
      - {id: toggle_ignore_stun, type: bool}
      - {id: ignore_level_bought, type: bool}
      - {id: shoot_through_untouchable, type: bool}
      - {id: interrupt_like_sleep, type: bool}
  graphics:
    seq:
      - {id: position_center, type: u4}
      - {id: position_distance, type: f4}
      - {id: position_height, type: f4}
      - {id: position_yaw, type: f4}
      - {id: face_target, type: bool}
      - {id: attrib_cache, type: attrib_array}
      - {id: source_file, type: string}
      - {id: power_fx, type: power_fx}
      - {id: custom_fx, type: custom_fx_array}
  custom_fx_array:
    seq:
      - {id: count, type: u4}
      - {id: value, type: custom_fx_struct, repeat: expr, repeat-expr: count}
  custom_fx_struct:
    seq:
      - {id: len, type: u4}
      - {id: value, type: custom_fx, size: len}
  custom_fx:
    seq:
      - {id: token, type: string}
      - {id: alt_theme, type: string_array}
      - {id: source_file, type: string}
      - {id: category, type: string}
      - {id: display_name, type: string}
      - {id: power_fx, type: power_fx}
      - {id: palette, type: string}
  power_fx:
    seq:
      - {id: attack_bits, type: u4_array}
      - {id: block_bits, type: u4_array}
      - {id: wind_up_bits, type: u4_array}
      - {id: hit_bits, type: u4_array}
      - {id: death_bits, type: u4_array}
      - {id: activation_bits, type: u4_array}
      - {id: deactivation_bits, type: u4_array}
      - {id: initial_attack_bits, type: u4_array}
      - {id: continuing_bits, type: u4_array}
      - {id: conditional_bits, type: u4_array}
      - {id: activation_fx, type: string}
      - {id: deactivation_fx, type: string}
      - {id: attack_fx, type: string}
      - {id: secondary_attack_fx, type: string}
      - {id: hit_fx, type: string}
      - {id: wind_up_fx, type: string}
      - {id: block_fx, type: string}
      - {id: death_fx, type: string}
      - {id: initial_attack_fx, type: string}
      - {id: continuing_fx, type: string}
      - {id: continuing_fx1, type: string}
      - {id: continuing_fx2, type: string}
      - {id: continuing_fx3, type: string}
      - {id: continuing_fx4, type: string}
      - {id: conditional_fx, type: string}
      - {id: conditional_fx1, type: string}
      - {id: conditional_fx2, type: string}
      - {id: conditional_fx3, type: string}
      - {id: conditional_fx4, type: string}
      - {id: mode_bits, type: u4_array}
      - {id: frames_before_hit, type: u4}
      - {id: frames_before_secondary_hit, type: u4}
      - {id: delayed_hit, type: bool}
      - {id: attack_frames, type: u4}
      - {id: initial_frames_before_hit, type: u4}
      - {id: initial_attack_fxframe_delay, type: u4}
      - {id: projectile_speed, type: f4}
      - {id: secondary_projectile_speed, type: f4}
      - {id: initial_frames_before_block, type: u4}
      - {id: ignore_attack_time_errors, type: string}
      - {id: frames_before_block, type: u4}
      - {id: fx_important, type: bool}
      - {id: primary_tint, type: rgba}
      - {id: secondary_tint, type: rgba}
  power_redirect_array:
    seq:
      - {id: count, type: u4}
      - {id: value, type: power_redirect_struct, repeat: expr, repeat-expr: count}
  power_redirect_struct:
    seq:
      - {id: len, type: u4}
      - {id: value, type: power_redirect, size: len}
  power_redirect:
    seq:
      - {id: power, type: string}
      - {id: requires, type: string_array}
      - {id: show_in_info, type: u4}
  effect_array:
    seq:
      - {id: count, type: u4}
      - {id: value, type: effect_struct, repeat: expr, repeat-expr: count}
  effect_struct:
    seq:
      - {id: len, type: u4}
      - {id: value, size: len, type: effect}
  effect:
    seq:
      - {id: tag, type: string_array}
      - {id: chance, type: f4}
      - {id: procs_per_minute, type: f4}
      - {id: delay, type: f4}
      - {id: radius_inner, type: f4}
      - {id: radius_outer, type: f4}
      - {id: requires, type: string_array}
      - {id: flags, type: effect_flags}
      - {id: eval_flags, type: u4}
      - {id: attrib_mod, type: attrib_mod_array}
      - {id: effect, type: effect_array}
  effect_flags:
    seq:
      - {type: b4}
      - {id: linked_chance, type: b1}
      - {id: fallback, type: b1}
      - {id: p_v_p_only, type: b1}
      - {id: p_v_e_only, type: b1}
      - {type: b24}
  attrib_mod_array:
    seq:
      - {id: count, type: u4}
      - {id: value, type: attrib_mod_struct, repeat: expr, repeat-expr: count}
  attrib_mod_struct:
    seq:
      - {id: len, type: u4}
      - {id: value, size: len, type: attrib_mod}
  attrib_mod:
    seq:
      - {id: attrib, type: attrib_array}
      - {id: aspect, type: u4, enum: aspect}
      - {id: application_type, type: u4, enum: application_type}
      - {id: type, type: u4, enum: attrib_type}
      - {id: target, type: u4, enum: target}
      - {id: target_info, type: target_info_array}
      - {id: table, type: string}
      - {id: scale, type: f4}
      - {id: duration, type: f4}
      - {id: magnitude, type: f4}
      - {id: duration_expr, type: string_array}
      - {id: magnitude_expr, type: string_array}
      - {id: delay, type: f4}
      - {id: period, type: f4}
      - {id: tick_chance, type: f4}
      - {id: delayed_requires, type: string_array}
      - {id: caster_stack, type: u4, enum: caster_stack_type}
      - {id: stack, type: u4, enum: stack_type}
      - {id: stack_limit, type: u4}
      - {id: stack_key, type: u4}
      - {id: cancel_events, type: power_event_array}
      - {id: suppress, type: suppress_array}
      - {id: boost_mod_allowed, type: attrib}
      - {id: flags, type: attrib_flags}
      - {id: messages, type: messages_array}
      - {id: fx, type: fx_array}
      - {id: params, type: params_struct}
    enums:
      stack_type:
        0: stack
        1: ignore
        2: extend
        3: replace
        4: overlap
        5: stack_then_ignore
        6: refresh
        7: refresh_to_count
        8: maximize
        9: suppress
      caster_stack_type:
        0: individual
        1: collective
      target:
        0: self
        1: self_and_pets
        2: target
        3: target_and_pets
        4: affected
        5: affected_and_pets
        6: marker
      attrib_type:
        0: duration
        1: magnitude
        2: constant
        3: expression
        4: skill_magnitude
      application_type:
        0: tick
        1: activate
        2: deactivate
        3: expire
        4: enable
        5: disable
      aspect:
        0: modifiers
        8: maximum
        16: strength
        24: resist
        32: absolute
  params_struct:
    seq:
      - {id: rec_type, type: u4}
      - {id: len, type: u4, if: rec_type > 0}
      - id: value
        type:
          switch-on: rec_type
          cases:
            1: costume
            2: reward
            3: ent_create
            4: power_param
            5: phase
            6: teleport
            7: behavior
            8: s_z_e_value
            9: token
            10: filter
        size: len
        if: rec_type > 0
    types:
      costume:
        seq:
          - {id: costume_name, type: string}
          - {id: priority, type: u4}
      reward:
        seq:
          - {id: rewards, type: string_array}
      ent_create:
        seq:
          - {id: entity_def, type: string}
          - {id: class, type: string}
          - {id: costume_name, type: string}
          - {id: display, type: string}
          - {id: priority_list, type: string}
          - {id: ai_config, type: string}
          - {id: categories, type: string_array}
          - {id: powersets, type: string_array}
          - {id: powers, type: string_array}
          - {size: 4}
      power_param:
        seq:
          - {id: categories, type: string_array}
          - {id: powersets, type: string_array}
          - {id: powers, type: string_array}
          - {id: count, type: u4}
      phase:
        seq:
          - {id: combat_phases, type: u4_array}
          - {id: vision_phases, type: u4_array}
          - {id: exclusive_vision_phase, type: u4}
      teleport:
        seq:
          - {id: destination, type: string}
      behavior:
        seq:
          - {id: behaviors, type: string_array}
      s_z_e_value:
        seq:
          - {id: script_id, type: string_array}
          - {id: script_value, type: string_array}
      token:
        seq:
          - {id: tokens, type: string_array} 
      filter:
        seq:
          - {id: categories, type: string_array}
          - {id: powersets, type: string_array}
          - {id: powers, type: string_array}
          - {id: tags, type: string_array}
  fx_array:
    seq:
      - {id: count, type: u4}
      - {id: value, type: fx_struct, repeat: expr, repeat-expr: count}
  fx_struct:
    seq:
      - {id: len, type: u4}
      - {id: value, type: fx, size: len}
  fx:
    seq:
      - {id: continuing_bits, type: u4_array}
      - {id: continuing_fx, type: string}
      - {id: conditional_bits, type: u4_array}
      - {id: conditional_fx, type: string}
  messages_array:
    seq:
      - {id: count, type: u4}
      - {id: value, type: messages_struct, repeat: expr, repeat-expr: count}
  messages_struct:
    seq:
      - {id: len, type: u4}
      - {id: value, type: messages, size: len}
  messages:
    seq:
      - {id: attacker_hit, type: string}
      - {id: victim_hit, type: string}
      - {id: float, type: string}
      - {id: defense_float, type: string}
  attrib_flags:
    seq:
      #byte 1
      - {id: resist_magnitude, type: b1}
      - {id: ignore_combat_mods, type: b1}
      - {id: ignore_resistance, type: b1}
      - {id: ignore_strength, type: b1}
      - {id: near_ground, type: b1}
      - {id: cancel_on_miss, type: b1}
      - {id: boost_ignore_diminishing, type: b1}
      - {id: no_floaters, type: b1}
      #byte 2
      - {id: no_hit_delay, type: b1}
      - {id: delay_eval, type: b1}
      - {id: keep_through_death, type: b1}
      - {id: hide_zero, type: b1}
      - {id: boost, type: b1}
      - {id: combat_mod_duration, type: b1}
      - {id: combat_mod_magnitude, type: b1}
      - {id: resist_duration, type: b1}
      #byte 3
      - {type: b4}
      - {id: ignore_suppress_errors, type: b1}
      - {id: stack_exact_power, type: b1}
      - {id: stack_by_attrib_and_key, type: b1}
      - {id: no_projectile_delay, type: b1}
      #byte 4
      - {type: b8}
      #byte 5
      - {id: no_creator_mod_fx, type: b1}
      - {id: copy_creator_mods, type: b1}
      - {id: copy_boosts, type: b1}
      - {id: do_not_tint_costume, type: b1}
      - {id: revoke_all, type: b1}
      - {id: no_token_time, type: b1}
      - {id: do_not_display_shift, type: b1}
      - {id: vanish_ent_on_timeout, type: b1}
      #byte 6
      - {type: b5}
      - {id: pet_commandable, type: b1}
      - {id: pet_visible, type: b1}
      - {id: pseudo_pet, type: b1}
      #byte 7-8
      - {type: b16}
  suppress_array:
    seq:
      - {id: count, type: u4}
      - {id: value, type: suppress_struct, repeat: expr, repeat-expr: count}
  suppress_struct:
    seq:
      - {id: len, type: u4}
      - {id: value, type: suppress, size: len}
  suppress:
    seq:
      - {id: event, type: u4}
      - {id: seconds, type: u4}
      - {id: always, type: bool}
  power_event_array:
    seq:
      - {id: count, type: u4}
      - {id: value, type: u4, enum: power_event, repeat: expr, repeat-expr: count}
    enums:
      power_event:
        0: activate
        1: activate_attack_click
        2: attacked
        3: attacked_no_exception
        4: helped
        5: hit
        6: miss
        7: end_activate
        8: attacked_by_other
        9: attacked_by_other_click
        10: helped_by_other
        11: hit_by_other
        12: hit_by_friend
        13: hit_by_foe
        14: miss_by_other
        15: miss_by_friend
        16: miss_by_foe
        17: damaged
        18: healed
        19: stunned
        20: immobilized
        21: held
        22: sleep
        23: terrorized
        24: confused
        25: untouchable
        26: intangible
        27: only_affects_self
        28: any_status
        29: knocked
        30: defeated
        31: mission_object_click
        32: moved
        33: defiant
  target_info_array:
    seq:
      - {id: count, type: u4}
      - {id: value, type: target_info_struct, repeat: expr, repeat-expr: count}
  target_info_struct:
    seq:
      - {id: len, type: u4}
      - {id: value, type: target_info, size: len}
  target_info:
    seq:
      - {id: marker, type: string_array}
      - {id: count, type: u4_array}
  attrib_array:
    seq:
      - {id: count, type: u4}
      - {id: value, type: attrib, repeat: expr, repeat-expr: count}
  attrib:
    seq:
      - {id: value, type: u4, enum: attrib}
    enums:
      attrib:
        0: smashing_dmg
        4: lethal_dmg
        8: fire_dmg
        12: cold_dmg
        16: energy_dmg
        20: negative_energy_dmg
        24: psionic_dmg
        28: healing_dmg
        32: special_dmg
        36: toxic_dmg
        40: radiation_dmg
        44: electrical_dmg
        48: unique1_dmg
        52: unique2_dmg
        56: unique3_dmg
        60: unique4_dmg
        64: unique5_dmg
        68: unique6_dmg
        72: unique7_dmg
        76: unique8_dmg
        80: hit_points
        84: absorb
        88: endurance
        92: insight
        96: rage
        100: to_hit
        104: ranged_def
        108: melee_def
        112: area_def
        116: smashing_def
        120: lethal_def
        124: fire_def
        128: cold_def
        132: energy_def
        136: negative_energy_def
        140: psionic_def
        144: toxic_def
        148: unique1_def
        152: unique2_def
        156: unique3_def
        160: unique4_def
        164: unique5_def
        168: unique6_def
        172: unique7_def
        176: unique8_def
        180: unique9_def
        184: defense
        188: running_speed
        192: flying_speed
        196: swimming_speed
        200: jumping_speed
        204: jump_height
        208: movement_control
        212: movement_friction
        216: stealth
        220: stealth_radius_p_v_e
        224: stealth_radius_p_v_p
        228: perception_radius
        232: regeneration
        236: recovery
        240: insight_recovery
        244: threat_level
        248: taunt
        252: placate
        256: confused
        260: afraid
        264: terrorized
        268: held
        272: immobilized
        276: stunned
        280: sleep
        284: fly
        288: jump_pack
        292: teleport
        296: untouchable
        300: intangible
        304: only_affects_self
        308: experience_gain
        312: influence_gain
        316: prestige_gain
        320: evade
        324: knockup
        328: knockback
        332: repel
        336: accuracy
        340: radius
        344: arc
        348: range
        352: time_to_activate
        356: recharge_time
        360: interrupt_time
        364: endurance_discount
        368: insight_discount
        372: meter
        376: ranged_elude
        380: melee_elude
        384: aoe_elude
        388: smashing_elude
        392: lethal_elude
        396: fire_elude
        400: cold_elude
        404: energy_elude
        408: negative_energy_elude
        412: psionic_elude
        416: toxic_elude
        420: unique1_elude
        424: unique2_elude
        428: unique3_elude
        432: unique4_elude
        436: unique5_elude
        440: unique6_elude
        444: unique7_elude
        448: unique8_elude
        452: unique9_elude
        456: elusivity_base
        460: translucency
        461: ent_create
        462: clear_damagers
        463: silent_kill
        464: x_p_debt_protection
        465: set_mode
        466: set_costume
        467: glide
        468: "null"
        469: avoid
        470: reward
        471: x_p_debt
        472: drop_toggles
        473: grant_power
        474: revoke_power
        475: unset_mode
        476: global_chance_mod
        477: power_chance_mod
        478: grant_boosted_power
        479: view_attrib
        480: reward_source
        481: reward_source_team
        482: clear_fog
        483: combat_phase
        484: combat_mod_shift
        485: recharge_power
        486: vision_phase
        487: ninja_run
        488: walk
        489: beast_run
        490: steam_jump
        491: designer_status
        492: exclusive_vision_phase
        493: hover_board
        494: set_s_z_e_value
        495: add_behavior
        496: magic_carpet
        497: token_add
        498: token_set
        499: token_clear
        500: lua_exec
        501: force_move
        502: parkour_run
        503: cancel_mods
        504: execute_power
        1460: power_redirect
  var_array:
    seq:
      - {id: count, type: u4}
      - {id: value, type: var_struct, repeat: expr, repeat-expr: count}
  var_struct:
    seq:
      - {id: len, type: u4}
      - {id: value, type: var, size: len}
  var:
    seq:
      - {id: index, type: u4}
      - {id: name, type: string}
      - {id: min, type: f4}
      - {id: max, type: f4}
  rgba:
    seq:
      - {id: r, type: u4}
      - {id: g, type: u4}
      - {id: b, type: u4}
      - {id: a, type: u4}
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
  header: {seq: [{size: 20},{id: s, type: u4},{size: s + (4 - s) % 4}]}
  string:
    seq: [{id: ofs, type: u4}]
    instances: {value: {pos: ofs+24, type: strz, io: _root._io, -webide-parse-mode: eager }}
    -webide-representation: "{value}"
  string_array: {seq: [{id: count, type: u4}, {id: value, type: string, repeat: expr, repeat-expr: count}]}
