export type Page = "dashboard" | "home" | "diet-plan" | "calorie-calculator" | "diary" | "calendar" | "goals" | "sleep" | "nutrition" | "progress" | "weekly-report" | "fasting" | "advertise" | "explore-diet-plans" | "explore-recipes";

export interface CalorieResult {
  bmr: number;
  tdee: number;
  goal: string;
  recommendedCalories: number;
}

export interface FoodEntry {
  id: string;
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  fiber: number;
  sugar: number;
  sodium: number;
  vitaminC: number;
  vitaminD: number;
  calcium: number;
  iron: number;
  meal: "breakfast" | "lunch" | "dinner" | "snack";
  timestamp: Date;
  quantity?: number;
  unit?: "gm" | "ml" | "count";
}
