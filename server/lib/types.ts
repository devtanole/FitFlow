export type Auth = {
  username: string;
  password: string;
};

export type User = {
  userId: number;
  fullName: string;
  bio: string;
  username: string;
  password: string;
  weight: number;
  location: string;
};

export type Post = {
  postId: number;
  userId: number;
  postType: 'meal' | 'workout';
  title?: string;
  notes?: string;
  createdAt: string;
};

export type MealEntry = {
  mealEntryId: number;
  postId: number;
  foodName: string;
  quantity: number;
  unit?: string;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  createdAt: string;
};

export type Activity = {
  activityId: number;
  name: string;
  met: number;
  intensity?: string;
  category?: string;
};

export type WorkoutEntry = {
  workoutEntryId: number;
  postId: number;
  activityId: number;
  durationMinutes: number;
  userWeightKg: number;
  caloriesBurned?: number;
  createdAt: string;
};
