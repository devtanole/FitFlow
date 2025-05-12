set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

CREATE TABLE "users" (
  "userId" serial PRIMARY KEY,
  "fullName" text NOT NULL,
  "weight" decimal NOT NULL,
  "username" text UNIQUE NOT NULL,
  "hashedPassword" text NOT NULL,
  "createdAt" timestamptz NOT NULL,
  "location" text NOT NULL
);

CREATE TABLE "posts" (
  "postId" serial PRIMARY KEY,
  "userId" int NOT NULL,
  "postType" varchar(20) NOT NULL,
  "title" text,
  "notes" text,
  "createdAt" timestamptz NOT NULL DEFAULT (now())
);

CREATE TABLE "meal_entries" (
  "mealEntryId" serial PRIMARY KEY,
  "postId" int NOT NULL,
  "foodName" text NOT NULL,
  "quantity" decimal NOT NULL,
  "unit" varchar(20),
  "calories" decimal NOT NULL,
  "protein" decimal NOT NULL,
  "carbs" decimal NOT NULL,
  "fats" decimal NOT NULL,
  "createdAt" timestamptz DEFAULT (now())
);

CREATE TABLE "activities" (
  "activityId" serial PRIMARY KEY,
  "name" text NOT NULL,
  "met" decimal NOT NULL,
  "intensity" text,
  "category" text
);

CREATE TABLE "workout_entries" (
  "workoutEntryId" serial PRIMARY KEY,
  "postId" int NOT NULL,
  "activityId" int NOT NULL,
  "durationMinutes" int NOT NULL,
  "userWeightKg" decimal NOT NULL,
  "caloriesBurned" decimal,
  "createdAt" timestamptz DEFAULT (now())
);

ALTER TABLE "posts" ADD FOREIGN KEY ("userId") REFERENCES "users" ("userId");

ALTER TABLE "meal_entries" ADD FOREIGN KEY ("postId") REFERENCES "posts" ("postId");

ALTER TABLE "workout_entries" ADD FOREIGN KEY ("postId") REFERENCES "posts" ("postId");

ALTER TABLE "workout_entries" ADD FOREIGN KEY ("activityId") REFERENCES "activities" ("activityId");
