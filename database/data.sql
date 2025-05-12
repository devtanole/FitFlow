-- Use SQL insert statements to add any
-- starting/dummy data to your database tables

-- EXAMPLE:

-- Inserting sample users
INSERT INTO "users" ("fullName", "bio", "weight", "username", "hashedPassword", "createdAt", "location")
VALUES
  ('John Doe', 'Fitness enthusiast', 70, 'john_doe', 'hashed_password_123', now(), 'New York'),
  ('Jane Smith', 'Nutrition expert', 60, 'jane_smith', 'hashed_password_456', now(), 'Los Angeles');

-- Inserting sample activities
INSERT INTO "activities" ("name", "met", "intensity", "category")
VALUES
  ('Running, 6 mph', 9.8, 'Vigorous', 'Cardio'),
  ('Walking, 3 mph', 3.8, 'Moderate', 'Cardio');

-- Inserting sample posts (meal and workout)
INSERT INTO "posts" ("userId", "postType", "title", "notes", "createdAt")
VALUES
  (1, 'meal', 'Breakfast', 'Oatmeal with bananas and eggs', now()),
  (1, 'workout', 'Morning Run', 'Ran 6 mph for 30 minutes', now());

-- Inserting sample meal entries
INSERT INTO "meal_entries" ("postId", "foodName", "quantity", "unit", "calories", "protein", "carbs", "fats", "createdAt")
VALUES
  (1, 'Oatmeal', 1, 'bowl', 150, 5, 30, 3, now()),
  (1, 'Banana', 1, 'medium', 100, 1, 27, 0, now());

-- Inserting sample workout entries
INSERT INTO "workout_entries" ("postId", "activityId", "durationMinutes", "userWeightKg", "caloriesBurned", "createdAt")
VALUES
  (2, 1, 30, 70, 400, now());  -- User 1 ran for 30 minutes at 6 mph (estimated calories burned: 400)
