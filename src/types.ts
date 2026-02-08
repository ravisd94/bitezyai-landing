export type Page = "home" | "diet-plan" | "calorie-calculator" | "diary";

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
}
