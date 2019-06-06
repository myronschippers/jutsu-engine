Table "user_roles" {
  "id" serial
  "access_name" varchar
  "permissions" varchar
}

Table "users" {
  "id" serial
  "name" varchar
  "password" varchar
  "email" varchar
  "security_question_1" varchar
  "security_question_2" varchar
  "security_question_3" varchar
  "user_role" INT
}

// NINJA CREATION

Table "my_ninjas" {
  "id" serial
  "name" varchar
  "clan_id" INT
  "village_id" INT
  "hair_style_id" INT
  "body_type_id" INT
  "costume_top_id" INT
  "costume_bottom_id" INT
  "costume_bandana" INT
}

Table "my_ninja_loadouts" {
    "id" serial
    "accessory_slot_1" INT
    "accessory_slot_2" INT
    "accessory_slot_3" INT
    "accessory_slot_4" INT
}

Table "ninja_villages" {
  "id" serial
  "name" varchar
  "asset" varchar
}

Table "ninja_clans" {
  "id" serial
  "name" varchar
  "asset" varchar
}

Table "hair_styles" {
  "id" serial
  "name" varchar
  "asset" varchar
}

Table "body_types" {
  "id" serial
  "name" varchar
  "asset" varchar
}

Table "costumes_top" {
  "id" serial
  "name" varchar
  "asset" varchar
}

Table "costumes_bottom" {
  "id" serial
  "name" varchar
  "asset" varchar
}

Table "costumes_bandana" {
  "id" serial
  "name" varchar
  "asset" varchar
}

// JUTSU SPECIFIC

Table "jutsu_collection" {
  "id" serial
  "jutsu_rank_id" INT
  "jutsu_type_id" INT
  "jutsu_role_id" INT
  "ninja_tool_id" INT
  "chakra_nature_id" INT
  "ninja_tool_quantity" INT
}

Table "jutsu_library" {
  "id" serial
  "name" varchar
}

Table "jutsu_types" {
  "id" serial
  "name" varchar
}

Table "jutsu_ranks" {
  "id" serial
  "name" varchar
}

Table "jutsu_roles" {
  "id" serial
  "name" varchar
}

Table "chakra_natures" {
  "id" serial
  "name" varchar
}

// USED FOR BOTH NINJA AND JUTSU

Table "ninja_tools" {
  "id" serial
  "name" varchar
}

Ref:"user_roles"."id" < "users"."user_role"
// NINJA DATA RELATIONSHIPS
"clan_id" < "ninja_clans"."id"
"village_id" < "ninja_villages"."id"
"hair_style_id" < "hair_styles"."id"
"body_type_id" < "body_types"."id"
"costume_top_id" < "costumes_top"."id"
"costume_bottom_id" < "costumes_bottom"."id"
"costume_bandana" < "costumes_bandana"."id"

// JUTSU CREATION RELATIONSHIPS
Ref:"jutsu_collection"."jutsu_rank_id" < "jutsu_ranks"."id"
Ref:"jutsu_collection"."jutsu_type_id" < "jutsu_types"."id"
Ref:"jutsu_collection"."jutsu_role_id" < "jutsu_roles"."id"
Ref:"jutsu_collection"."ninja_tool_id" < "ninja_tools"."id"
Ref:"jutsu_collection"."chakra_nature_id" < "chakra_natures"."id"
