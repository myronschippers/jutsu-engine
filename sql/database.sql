
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "email" VARCHAR (100) UNIQUE NOT NULL,
    "first_name" VARCHAR (100) NOT NULL,
    "last_name" VARCHAR (100) NOT NULL,
    "created_at" TIMESTAMP NOT NULL,
    "updated_at" TIMESTAMP NOT NULL
);

CREATE TABLE "security_questions" (
    "id" SERIAL PRIMARY KEY,
    "question" VARCHAR (1000)
);

CREATE TABLE "roles" (
    "id" SERIAL PRIMARY KEY,
    "role_name" VARCHAR (255) NOT NULL
);

CREATE TABLE "permissions" (
    "id" SERIAL PRIMARY KEY,
    "permission_name" VARCHAR (255) NOT NULL,
    "permission_level" VARCHAR (255) NOT NULL
);

-- USER, JUNCTION TABLES

CREATE TABLE "users_roles" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INT REFERENCES "users" NOT NULL,
    "role_id" INT REFERENCES "roles" NOT NULL
);

CREATE TABLE "permissions_roles" (
    "id" SERIAL PRIMARY KEY,
    "permission_id" INT REFERENCES "permissions" NOT NULL,
    "role_id" INT REFERENCES "roles" NOT NULL
);

CREATE TABLE "user_security_questions" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INT REFERENCES "user",
    "security_question_id" INT REFERENCES "security_questions",
    "answer" VARCHAR (500) NOT NULL
);

-- ===================
-- NINJA TABLES
-- ===================

CREATE TABLE "character" (
    "id" SERIAL PRIMARY KEY,
    "first_name" VARCHAR (80),
    "last_name" VARCHAR (80),
    "tag" VARCHAR (80),
    -- relationships
    "user_id" INT REFERENCES "user"
);

--
-- NINJA ORIGIN TABLES
-- • --------------------

CREATE TABLE "origin_countries" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (80),
    "asset_path" VARCHAR (170)
);

CREATE TABLE "origin_villages" (
    "id" SERIAL PRIMARY KEY,
    "village_name" VARCHAR (80),
    "asset_path" VARCHAR (170),
    -- relationships
    "country_id" INT REFERENCES NOT NULL
);

CREATE TABLE "origin_clans" (
    "id" SERIAL PRIMARY KEY,
    "clan_name" VARCHAR (80),
    "asset_path" VARCHAR (170),
    -- relationships
    "country_id" INT REFERENCES "origin_counties",
    "village_id" INT REFERENCES "origin_villages"
);

CREATE TABLE "character_origin" (
    "id" SERIAL PRIMARY KEY,
    "character_id" INT REFERENCES "characters",
    "clan_id" INT REFERENCES "origin_clans"
);

-- ===================
-- JUTSU TABLES
-- ===================

--
-- JUTSU JUNCTION TABLES
-- • --------------------