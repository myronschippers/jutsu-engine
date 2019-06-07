
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "security_questions" (
    "id" SERIAL PRIMARY KEY,
    "question" VARCHAR (1000)
);

CREATE TABLE "roles" (
    "id" SERIAL PRIMARY KEY,
    "role_name" VARCHAR (255) NOT NULL,
    "created_at" TIMESTAMP NOT NULL,
    "updated_at" TIMESTAMP NOT NULL
);

CREATE TABLE "permissions" (
    "id" SERIAL PRIMARY KEY,
    "permission_name" VARCHAR (255) NOT NULL,
    "role_id" INT REFERENCES "roles",
    "created_at" TIMESTAMP NOT NULL,
    "updated_at" TIMESTAMP NOT NULL
);

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

-- USER, JUNCTION TABLES

CREATE TABLE "user_roles" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INT REFERENCES "user",
    "role_id" INT REFERENCES "roles"
);

CREATE TABLE "user_security_questions" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INT REFERENCES "user",
    "security_question_id" INT REFERENCES "security_questions",
    "answer" VARCHAR (500) NOT NULL
);

-- NINJA TABLES

-- JUTSU TABLES

-- NINJA & JUTSU, JUNCTION TABLES