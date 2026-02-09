import { useState } from "react";
import type { FoodEntry } from "../types";
import { FOOD_DATABASE } from "../constants/foodDatabase";

export function DiaryPage() {
  const [entries, setEntries] = useState<FoodEntry[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<typeof FOOD_DATABASE>([]);
  const [selectedMealType, setSelectedMealType] = useState<"breakfast" | "lunch" | "dinner" | "snack">("breakfast");
  const [editingId, setEditingId] = useState<string | null>(null);
  const DAILY_CALORIE_GOAL = 2000;
  const DAILY_PROTEIN_GOAL = 150;
  const DAILY_CARBS_GOAL = 200;
  const DAILY_FATS_GOAL = 70;
  const DAILY_FIBER_GOAL = 25;
  const DAILY_SUGAR_GOAL = 50;
  const DAILY_SODIUM_GOAL = 2300;
  const DAILY_VITAMIN_C_GOAL = 90;
  const DAILY_VITAMIN_D_GOAL = 20;
  const DAILY_CALCIUM_GOAL = 1000;
  const DAILY_IRON_GOAL = 18;
  
  // Form states
  const [foodName, setFoodName] = useState("");
  const [calories, setCalories] = useState("");
  const [protein, setProtein] = useState("");
  const [carbs, setCarbs] = useState("");
  const [fats, setFats] = useState("");
  const [fiber, setFiber] = useState("");
  const [sugar, setSugar] = useState("");
  const [sodium, setSodium] = useState("");
  const [vitaminC, setVitaminC] = useState("");
  const [vitaminD, setVitaminD] = useState("");
  const [calcium, setCalcium] = useState("");
  const [iron, setIron] = useState("");
  const [mealType, setMealType] = useState<"breakfast" | "lunch" | "dinner" | "snack">("breakfast");
  const [quantity, setQuantity] = useState("1");
  const [unit, setUnit] = useState<"gm" | "ml" | "count">("count");

  // Handle search
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      const results = FOOD_DATABASE.filter(food =>
        food.name.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  // Add food from search results
  const addFoodFromSearch = (food: typeof FOOD_DATABASE[0]) => {
    const selectedDateObj = new Date(selectedDate + 'T12:00:00');
    const entryId = crypto.randomUUID();
    const quantityMultiplier = parseFloat(quantity) || 1;
    const newEntry: FoodEntry = {
      id: entryId,
      name: food.name,
      calories: food.calories * quantityMultiplier,
      protein: food.protein * quantityMultiplier,
      carbs: food.carbs * quantityMultiplier,
      fats: food.fats * quantityMultiplier,
      fiber: food.fiber * quantityMultiplier,
      sugar: food.sugar * quantityMultiplier,
      sodium: food.sodium * quantityMultiplier,
      vitaminC: food.vitaminC * quantityMultiplier,
      vitaminD: food.vitaminD * quantityMultiplier,
      calcium: food.calcium * quantityMultiplier,
      iron: food.iron * quantityMultiplier,
      meal: selectedMealType,
      timestamp: selectedDateObj,
      quantity: parseFloat(quantity) || 1,
      unit: unit,
    };

    setEntries([...entries, newEntry]);
    setSearchQuery("");
    setSearchResults([]);
    setQuantity("1");
    setUnit("count");
  };

  const addEntry = () => {
    if (!foodName || !calories) {
      alert("⚠️ Please enter at least food name and calories!");
      return;
    }

    const selectedDateObj = new Date(selectedDate + 'T12:00:00');
    const entryId = editingId || crypto.randomUUID();
    const newEntry: FoodEntry = {
      id: entryId,
      name: foodName,
      calories: parseFloat(calories) || 0,
      protein: parseFloat(protein) || 0,
      carbs: parseFloat(carbs) || 0,
      fats: parseFloat(fats) || 0,
      fiber: parseFloat(fiber) || 0,
      sugar: parseFloat(sugar) || 0,
      sodium: parseFloat(sodium) || 0,
      vitaminC: parseFloat(vitaminC) || 0,
      vitaminD: parseFloat(vitaminD) || 0,
      calcium: parseFloat(calcium) || 0,
      iron: parseFloat(iron) || 0,
      meal: mealType,
      timestamp: selectedDateObj,
      quantity: parseFloat(quantity) || 1,
      unit: unit,
    };

    if (editingId) {
      // Update existing entry
      setEntries(entries.map(e => e.id === editingId ? newEntry : e));
      setEditingId(null);
    } else {
      // Add new entry
      setEntries([...entries, newEntry]);
    }
    
    // Reset form
    setFoodName("");
    setCalories("");
    setProtein("");
    setCarbs("");
    setFats("");
    setFiber("");
    setSugar("");
    setSodium("");
    setVitaminC("");
    setVitaminD("");
    setCalcium("");
    setIron("");
    setQuantity("1");
    setUnit("count");
    setShowAddForm(false);
  };

  const deleteEntry = (id: string) => {
    setEntries(entries.filter(entry => entry.id !== id));
  };

  const editEntry = (entry: FoodEntry) => {
    setFoodName(entry.name);
    setCalories(entry.calories.toString());
    setProtein(entry.protein.toString());
    setCarbs(entry.carbs.toString());
    setFats(entry.fats.toString());
    setFiber(entry.fiber.toString());
    setSugar(entry.sugar.toString());
    setSodium(entry.sodium.toString());
    setVitaminC(entry.vitaminC.toString());
    setVitaminD(entry.vitaminD.toString());
    setCalcium(entry.calcium.toString());
    setIron(entry.iron.toString());
    setMealType(entry.meal);
    setQuantity((entry.quantity || 1).toString());
    setUnit(entry.unit || "count");
    setEditingId(entry.id);
    setShowAddForm(true);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setFoodName("");
    setCalories("");
    setProtein("");
    setCarbs("");
    setFats("");
    setFiber("");
    setSugar("");
    setSodium("");
    setVitaminC("");
    setVitaminD("");
    setCalcium("");
    setIron("");
    setQuantity("1");
    setUnit("count");
    setShowAddForm(false);
  };

  // Filter entries for selected date
  const selectedDateEntries = entries.filter(entry => {
    const entryDate = new Date(entry.timestamp).toISOString().split('T')[0];
    return entryDate === selectedDate;
  });

  // Calculate totals for selected date
  const totals = selectedDateEntries.reduce((acc, entry) => ({
    calories: acc.calories + entry.calories,
    protein: acc.protein + entry.protein,
    carbs: acc.carbs + entry.carbs,
    fats: acc.fats + entry.fats,
    fiber: acc.fiber + entry.fiber,
    sugar: acc.sugar + entry.sugar,
    sodium: acc.sodium + entry.sodium,
    vitaminC: acc.vitaminC + entry.vitaminC,
    vitaminD: acc.vitaminD + entry.vitaminD,
    calcium: acc.calcium + entry.calcium,
    iron: acc.iron + entry.iron,
  }), {
    calories: 0,
    protein: 0,
    carbs: 0,
    fats: 0,
    fiber: 0,
    sugar: 0,
    sodium: 0,
    vitaminC: 0,
    vitaminD: 0,
    calcium: 0,
    iron: 0,
  });

  // Calculate remaining amounts
  const remainingCalories = Math.max(0, DAILY_CALORIE_GOAL - totals.calories);
  const remainingProtein = Math.max(0, DAILY_PROTEIN_GOAL - totals.protein);
  const remainingCarbs = Math.max(0, DAILY_CARBS_GOAL - totals.carbs);
  const remainingFats = Math.max(0, DAILY_FATS_GOAL - totals.fats);
  const remainingFiber = Math.max(0, DAILY_FIBER_GOAL - totals.fiber);
  const remainingSugar = Math.max(0, DAILY_SUGAR_GOAL - totals.sugar);
  const remainingSodium = Math.max(0, DAILY_SODIUM_GOAL - totals.sodium);
  const remainingVitaminC = Math.max(0, DAILY_VITAMIN_C_GOAL - totals.vitaminC);
  const remainingVitaminD = Math.max(0, DAILY_VITAMIN_D_GOAL - totals.vitaminD);
  const remainingCalcium = Math.max(0, DAILY_CALCIUM_GOAL - totals.calcium);
  const remainingIron = Math.max(0, DAILY_IRON_GOAL - totals.iron);


  // Calculate today for date comparison
  const today = new Date().toISOString().split('T')[0];

  const handlePrevDate = () => {
    const prevDate = new Date(selectedDate);
    prevDate.setDate(prevDate.getDate() - 1);
    setSelectedDate(prevDate.toISOString().split('T')[0]);
  };

  const handleNextDate = () => {
    const nextDate = new Date(selectedDate);
    nextDate.setDate(nextDate.getDate() + 1);
    setSelectedDate(nextDate.toISOString().split('T')[0]);
  };

  const handleToday = () => {
    setSelectedDate(today);
  };

  const groupedEntries = {
    breakfast: selectedDateEntries.filter(e => e.meal === "breakfast"),
    lunch: selectedDateEntries.filter(e => e.meal === "lunch"),
    dinner: selectedDateEntries.filter(e => e.meal === "dinner"),
    snack: selectedDateEntries.filter(e => e.meal === "snack"),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-cyan-50 px-4 py-12 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-10 animate-fade-in-down">
          <h2 className="text-5xl font-black bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent mb-3">
            Food Diary 📖
          </h2>
          <p className="text-lg text-gray-600">
            Track your meals, calories, macros & micronutrients across multiple days!
          </p>
        </div>

        {/* Date Navigation Section */}
        <div className="bg-white/90 backdrop-blur-lg p-6 rounded-3xl shadow-xl border-2 border-white/50 mb-6 animate-fade-in-up">
          <div className="flex items-center justify-between gap-4">
            <button
              onClick={handlePrevDate}
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-xl hover:shadow-lg transition-all transform hover:scale-105"
            >
              ← Previous
            </button>

            <div className="flex-1 flex items-center gap-3 justify-center">
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className={`px-8 py-3 font-bold rounded-xl transition-all text-lg border-2 cursor-pointer ${
                  selectedDate === today
                    ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg border-pink-500'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200 border-gray-300'
                }`}
              />

              {selectedDate !== today && (
                <button
                  onClick={handleToday}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:shadow-lg transition-all transform hover:scale-105"
                >
                  Jump to Today
                </button>
              )}
            </div>

            <button
              onClick={handleNextDate}
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:shadow-lg transition-all transform hover:scale-105"
            >
              Next →
            </button>
          </div>
        </div>



        <div className="grid lg:grid-cols-3 gap-6">
          {/* Daily Summary */}
          <div className="lg:col-span-1 space-y-6">
            {/* Calorie Summary */}
            <div className="bg-white/90 backdrop-blur-lg p-6 rounded-3xl shadow-xl border-2 border-white/50 animate-fade-in-up">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                🔥 Daily Summary
              </h3>
              
              {/* Header Row */}
              <div className="flex justify-between items-center mb-4 pb-3 border-b-2 border-gray-300">
                <span className="text-sm font-bold text-gray-700">Nutrient</span>
                <div className="flex gap-8 text-xs font-bold text-gray-700">
                  <span className="w-12 text-center">Consumed</span>
                  <span className="w-12 text-center">Goal</span>
                  <span className="w-12 text-center">Left</span>
                </div>
              </div>

              <div className="space-y-4">
                {/* Calories */}
                <div className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-gray-700">🔥 Calories (kcal)</span>
                    <div className="flex gap-8 text-sm font-bold text-right">
                      <span className="text-red-600 w-12">{Math.round(totals.calories)}</span>
                      <span className="text-gray-700 w-12">{DAILY_CALORIE_GOAL}</span>
                      <span className={remainingCalories < 0 ? "text-red-600 w-12" : "text-green-600 w-12"}>{remainingCalories < 0 ? "-" : ""}{Math.round(Math.abs(remainingCalories))}</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-red-400 to-red-600 h-2 rounded-full" style={{ width: `${Math.min((totals.calories / DAILY_CALORIE_GOAL) * 100, 100)}%` }}></div>
                  </div>
                </div>

                {/* Protein */}
                <div className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-gray-700">🍗 Protein (g)</span>
                    <div className="flex gap-8 text-sm font-bold text-right">
                      <span className="text-pink-600 w-12">{Math.round(totals.protein)}</span>
                      <span className="text-gray-700 w-12">{DAILY_PROTEIN_GOAL}</span>
                      <span className={remainingProtein < 0 ? "text-red-600 w-12" : "text-green-600 w-12"}>{remainingProtein < 0 ? "-" : ""}{Math.round(Math.abs(remainingProtein))}</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-pink-400 to-pink-600 h-2 rounded-full" style={{ width: `${Math.min((totals.protein / DAILY_PROTEIN_GOAL) * 100, 100)}%` }}></div>
                  </div>
                </div>

                {/* Carbs */}
                <div className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-gray-700">🍚 Carbs (g)</span>
                    <div className="flex gap-8 text-sm font-bold text-right">
                      <span className="text-purple-600 w-12">{Math.round(totals.carbs)}</span>
                      <span className="text-gray-700 w-12">{DAILY_CARBS_GOAL}</span>
                      <span className={remainingCarbs < 0 ? "text-red-600 w-12" : "text-green-600 w-12"}>{remainingCarbs < 0 ? "-" : ""}{Math.round(Math.abs(remainingCarbs))}</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-400 to-purple-600 h-2 rounded-full" style={{ width: `${Math.min((totals.carbs / DAILY_CARBS_GOAL) * 100, 100)}%` }}></div>
                  </div>
                </div>

                {/* Fats */}
                <div className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-gray-700">🥑 Fats (g)</span>
                    <div className="flex gap-8 text-sm font-bold text-right">
                      <span className="text-cyan-600 w-12">{Math.round(totals.fats)}</span>
                      <span className="text-gray-700 w-12">{DAILY_FATS_GOAL}</span>
                      <span className={remainingFats < 0 ? "text-red-600 w-12" : "text-green-600 w-12"}>{remainingFats < 0 ? "-" : ""}{Math.round(Math.abs(remainingFats))}</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-cyan-400 to-cyan-600 h-2 rounded-full" style={{ width: `${Math.min((totals.fats / DAILY_FATS_GOAL) * 100, 100)}%` }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-lg p-6 rounded-3xl shadow-xl border-2 border-white/50 animate-fade-in-up animation-delay-300">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                💊 Micronutrients
              </h3>
              
              {/* Header Row */}
              <div className="flex justify-between items-center mb-4 pb-3 border-b-2 border-gray-300">
                <span className="text-sm font-bold text-gray-700">Nutrient</span>
                <div className="flex gap-8 text-xs font-bold text-gray-700">
                  <span className="w-12 text-center">Consumed</span>
                  <span className="w-12 text-center">Goal</span>
                  <span className="w-12 text-center">Left</span>
                </div>
              </div>

              <div className="space-y-3">
                {/* Fiber */}
                <div className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-gray-700">🌿 Fiber (g)</span>
                    <div className="flex gap-8 text-sm font-bold text-right">
                      <span className="text-green-600 w-12">{Math.round(totals.fiber)}</span>
                      <span className="text-gray-700 w-12">{DAILY_FIBER_GOAL}</span>
                      <span className={remainingFiber < 0 ? "text-red-600 w-12" : "text-green-600 w-12"}>{remainingFiber < 0 ? "-" : ""}{Math.round(Math.abs(remainingFiber))}</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-gradient-to-r from-green-400 to-green-600 h-1.5 rounded-full" style={{ width: `${Math.min((totals.fiber / DAILY_FIBER_GOAL) * 100, 100)}%` }}></div>
                  </div>
                </div>

                {/* Sugar */}
                <div className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-gray-700">🍬 Sugar (g)</span>
                    <div className="flex gap-8 text-sm font-bold text-right">
                      <span className="text-orange-600 w-12">{Math.round(totals.sugar)}</span>
                      <span className="text-gray-700 w-12">{DAILY_SUGAR_GOAL}</span>
                      <span className={remainingSugar < 0 ? "text-red-600 w-12" : "text-green-600 w-12"}>{remainingSugar < 0 ? "-" : ""}{Math.round(Math.abs(remainingSugar))}</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-gradient-to-r from-orange-400 to-orange-600 h-1.5 rounded-full" style={{ width: `${Math.min((totals.sugar / DAILY_SUGAR_GOAL) * 100, 100)}%` }}></div>
                  </div>
                </div>

                {/* Sodium */}
                <div className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-gray-700">🧂 Sodium (mg)</span>
                    <div className="flex gap-8 text-sm font-bold text-right">
                      <span className="text-red-600 w-12">{Math.round(totals.sodium)}</span>
                      <span className="text-gray-700 w-12">{DAILY_SODIUM_GOAL}</span>
                      <span className={remainingSodium < 0 ? "text-red-600 w-12" : "text-green-600 w-12"}>{remainingSodium < 0 ? "-" : ""}{Math.round(Math.abs(remainingSodium))}</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-gradient-to-r from-red-400 to-red-600 h-1.5 rounded-full" style={{ width: `${Math.min((totals.sodium / DAILY_SODIUM_GOAL) * 100, 100)}%` }}></div>
                  </div>
                </div>

                {/* Vitamin C */}
                <div className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-gray-700">🍊 Vitamin C (mg)</span>
                    <div className="flex gap-8 text-sm font-bold text-right">
                      <span className="text-yellow-600 w-12">{Math.round(totals.vitaminC)}</span>
                      <span className="text-gray-700 w-12">{DAILY_VITAMIN_C_GOAL}</span>
                      <span className={remainingVitaminC < 0 ? "text-red-600 w-12" : "text-green-600 w-12"}>{remainingVitaminC < 0 ? "-" : ""}{Math.round(Math.abs(remainingVitaminC))}</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-1.5 rounded-full" style={{ width: `${Math.min((totals.vitaminC / DAILY_VITAMIN_C_GOAL) * 100, 100)}%` }}></div>
                  </div>
                </div>

                {/* Vitamin D */}
                <div className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-gray-700">☀️ Vitamin D (μg)</span>
                    <div className="flex gap-8 text-sm font-bold text-right">
                      <span className="text-yellow-500 w-12">{Math.round(totals.vitaminD)}</span>
                      <span className="text-gray-700 w-12">{DAILY_VITAMIN_D_GOAL}</span>
                      <span className={remainingVitaminD < 0 ? "text-red-600 w-12" : "text-green-600 w-12"}>{remainingVitaminD < 0 ? "-" : ""}{Math.round(Math.abs(remainingVitaminD))}</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-gradient-to-r from-yellow-300 to-yellow-500 h-1.5 rounded-full" style={{ width: `${Math.min((totals.vitaminD / DAILY_VITAMIN_D_GOAL) * 100, 100)}%` }}></div>
                  </div>
                </div>

                {/* Calcium */}
                <div className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-gray-700">🦴 Calcium (mg)</span>
                    <div className="flex gap-8 text-sm font-bold text-right">
                      <span className="text-blue-600 w-12">{Math.round(totals.calcium)}</span>
                      <span className="text-gray-700 w-12">{DAILY_CALCIUM_GOAL}</span>
                      <span className={remainingCalcium < 0 ? "text-red-600 w-12" : "text-green-600 w-12"}>{remainingCalcium < 0 ? "-" : ""}{Math.round(Math.abs(remainingCalcium))}</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-1.5 rounded-full" style={{ width: `${Math.min((totals.calcium / DAILY_CALCIUM_GOAL) * 100, 100)}%` }}></div>
                  </div>
                </div>

                {/* Iron */}
                <div className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-gray-700">🩸 Iron (mg)</span>
                    <div className="flex gap-8 text-sm font-bold text-right">
                      <span className="text-red-600 w-12">{Math.round(totals.iron)}</span>
                      <span className="text-gray-700 w-12">{DAILY_IRON_GOAL}</span>
                      <span className={remainingIron < 0 ? "text-red-600 w-12" : "text-green-600 w-12"}>{remainingIron < 0 ? "-" : ""}{Math.round(Math.abs(remainingIron))}</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-gradient-to-r from-red-400 to-red-600 h-1.5 rounded-full" style={{ width: `${Math.min((totals.iron / DAILY_IRON_GOAL) * 100, 100)}%` }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Food Entries & Add Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Search Food */}
            <div className="bg-white/90 backdrop-blur-lg p-6 rounded-3xl shadow-xl border-2 border-white/50 animate-slide-in-up">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">🔍 Search & Add Food</h3>
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  placeholder="Search for a food (e.g., chicken, rice, apple)..."
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition-all outline-none text-lg"
                />
                {searchQuery && (
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setSearchResults([]);
                    }}
                    className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* Meal Type Selection for Search */}
              {searchQuery && (
                <div className="mt-4">
                  <label className="text-sm font-bold text-gray-700">🍽️ Select Meal Type</label>
                  <select
                    value={selectedMealType}
                    onChange={(e) => setSelectedMealType(e.target.value as "breakfast" | "lunch" | "dinner" | "snack")}
                    className="w-full p-3 mt-2 border-2 border-gray-200 rounded-xl focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100 transition-all outline-none cursor-pointer"
                  >
                    <option value="breakfast">🌅 Breakfast</option>
                    <option value="lunch">🍽️ Lunch</option>
                    <option value="dinner">🌙 Dinner</option>
                    <option value="snack">🥤 Snack</option>
                  </select>
                </div>
              )}

              {/* Meal Type & Quantity Selection for Search */}
              {searchQuery && (
                <div className="mt-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border-2 border-purple-200 space-y-3">
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="text-xs font-bold text-gray-700">🍽️ Meal Type</label>
                      <select
                        value={selectedMealType}
                        onChange={(e) => setSelectedMealType(e.target.value as "breakfast" | "lunch" | "dinner" | "snack")}
                        className="w-full p-2 mt-1 border-2 border-gray-200 rounded-xl focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100 transition-all outline-none cursor-pointer text-sm"
                      >
                        <option value="breakfast">🌅 Breakfast</option>
                        <option value="lunch">🍽️ Lunch</option>
                        <option value="dinner">🌙 Dinner</option>
                        <option value="snack">🥤 Snack</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-bold text-gray-700">📏 Quantity</label>
                      <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        placeholder="1"
                        step="0.5"
                        className="w-full p-2 mt-1 border-2 border-gray-200 rounded-xl focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100 transition-all outline-none text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-gray-700">📊 Unit</label>
                      <select
                        value={unit}
                        onChange={(e) => setUnit(e.target.value as "gm" | "ml" | "count")}
                        className="w-full p-2 mt-1 border-2 border-gray-200 rounded-xl focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100 transition-all outline-none cursor-pointer text-sm"
                      >
                        <option value="count">Count</option>
                        <option value="gm">Gram</option>
                        <option value="ml">Milliliter</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Search Results */}
              {searchResults.length > 0 && (
                <div className="mt-4 space-y-2 max-h-96 overflow-y-auto">
                  <p className="text-sm text-gray-600 font-semibold">Found {searchResults.length} food(s):</p>
                  {searchResults.map((food, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-pink-50 to-purple-50 p-4 rounded-xl border-2 border-pink-200 hover:border-pink-400 transition-all cursor-pointer"
                      onClick={() => addFoodFromSearch(food)}
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-800">{food.name}</h4>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs mt-2 text-gray-600">
                            <div>🔥 {food.calories} cal</div>
                            <div>🍗 {food.protein}g protein</div>
                            <div>🍚 {food.carbs}g carbs</div>
                            <div>🥑 {food.fats}g fats</div>
                          </div>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            addFoodFromSearch(food);
                          }}
                          className="ml-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-lg font-bold hover:shadow-lg transition-all"
                        >
                          ➕ Add
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {searchQuery && searchResults.length === 0 && (
                <div className="mt-4 p-4 bg-blue-50 rounded-xl border-2 border-blue-200">
                  <p className="text-sm text-blue-700">
                    <strong>No results found.</strong> Try different keywords or add manually below.
                  </p>
                </div>
              )}
            </div>

            {/* Manual Add Food Form - Collapsed by default */}
            <div className="bg-white/90 backdrop-blur-lg p-6 rounded-3xl shadow-xl border-2 border-white/50">
              <button
                onClick={() => setShowAddForm(!showAddForm)}
                className="w-full flex items-center justify-between text-xl font-bold text-gray-800 mb-4 hover:text-purple-600 transition-colors"
              >
                <span>Add Manually (without searching) ➕</span>
                <span>{showAddForm ? "✕" : "▼"}</span>
              </button>

              {showAddForm && (
                <div className="animate-slide-in-up space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="text-sm font-bold text-gray-700">🍽️ Food Name</label>
                    <input
                      type="text"
                      value={foodName}
                      onChange={(e) => setFoodName(e.target.value)}
                      placeholder="e.g., Grilled Chicken Breast"
                      className="w-full p-3 mt-1 border-2 border-gray-200 rounded-xl focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition-all outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-bold text-gray-700">🍽️ Meal Type</label>
                    <select
                      value={mealType}
                      onChange={(e) => setMealType(e.target.value as "breakfast" | "lunch" | "dinner" | "snack")}
                      className="w-full p-3 mt-1 border-2 border-gray-200 rounded-xl focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100 transition-all outline-none cursor-pointer"
                    >
                      <option value="breakfast">🌅 Breakfast</option>
                      <option value="lunch">🍽️ Lunch</option>
                      <option value="dinner">🌙 Dinner</option>
                      <option value="snack">🥤 Snack</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-bold text-gray-700">📏 Quantity</label>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      placeholder="1"
                      step="0.5"
                      className="w-full p-3 mt-1 border-2 border-gray-200 rounded-xl focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100 transition-all outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-bold text-gray-700">📊 Unit</label>
                    <select
                      value={unit}
                      onChange={(e) => setUnit(e.target.value as "gm" | "ml" | "count")}
                      className="w-full p-3 mt-1 border-2 border-gray-200 rounded-xl focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100 transition-all outline-none cursor-pointer"
                    >
                      <option value="count">Count</option>
                      <option value="gm">Gram (gm)</option>
                      <option value="ml">Milliliter (ml)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-bold text-gray-700">🔥 Calories</label>
                    <input
                      type="number"
                      value={calories}
                      onChange={(e) => setCalories(e.target.value)}
                      placeholder="250"
                      className="w-full p-3 mt-1 border-2 border-gray-200 rounded-xl focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition-all outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-bold text-gray-700">🍗 Protein (g)</label>
                    <input
                      type="number"
                      value={protein}
                      onChange={(e) => setProtein(e.target.value)}
                      placeholder="30"
                      className="w-full p-3 mt-1 border-2 border-gray-200 rounded-xl focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition-all outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-bold text-gray-700">🍚 Carbs (g)</label>
                    <input
                      type="number"
                      value={carbs}
                      onChange={(e) => setCarbs(e.target.value)}
                      placeholder="40"
                      className="w-full p-3 mt-1 border-2 border-gray-200 rounded-xl focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-bold text-gray-700">🥑 Fats (g)</label>
                    <input
                      type="number"
                      value={fats}
                      onChange={(e) => setFats(e.target.value)}
                      placeholder="10"
                      className="w-full p-3 mt-1 border-2 border-gray-200 rounded-xl focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100 transition-all outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-bold text-gray-700">🌿 Fiber (g)</label>
                    <input
                      type="number"
                      value={fiber}
                      onChange={(e) => setFiber(e.target.value)}
                      placeholder="5"
                      className="w-full p-3 mt-1 border-2 border-gray-200 rounded-xl focus:border-green-400 focus:ring-4 focus:ring-green-100 transition-all outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-bold text-gray-700">🍬 Sugar (g)</label>
                    <input
                      type="number"
                      value={sugar}
                      onChange={(e) => setSugar(e.target.value)}
                      placeholder="8"
                      className="w-full p-3 mt-1 border-2 border-gray-200 rounded-xl focus:border-orange-400 focus:ring-4 focus:ring-orange-100 transition-all outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-bold text-gray-700">🧂 Sodium (mg)</label>
                    <input
                      type="number"
                      value={sodium}
                      onChange={(e) => setSodium(e.target.value)}
                      placeholder="400"
                      className="w-full p-3 mt-1 border-2 border-gray-200 rounded-xl focus:border-red-400 focus:ring-4 focus:ring-red-100 transition-all outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-bold text-gray-700">🍊 Vitamin C (mg)</label>
                    <input
                      type="number"
                      value={vitaminC}
                      onChange={(e) => setVitaminC(e.target.value)}
                      placeholder="15"
                      className="w-full p-3 mt-1 border-2 border-gray-200 rounded-xl focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100 transition-all outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-bold text-gray-700">☀️ Vitamin D (μg)</label>
                    <input
                      type="number"
                      value={vitaminD}
                      onChange={(e) => setVitaminD(e.target.value)}
                      placeholder="2"
                      className="w-full p-3 mt-1 border-2 border-gray-200 rounded-xl focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100 transition-all outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-bold text-gray-700">🦴 Calcium (mg)</label>
                    <input
                      type="number"
                      value={calcium}
                      onChange={(e) => setCalcium(e.target.value)}
                      placeholder="100"
                      className="w-full p-3 mt-1 border-2 border-gray-200 rounded-xl focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-bold text-gray-700">⚙️ Iron (mg)</label>
                    <input
                      type="number"
                      value={iron}
                      onChange={(e) => setIron(e.target.value)}
                      placeholder="3"
                      className="w-full p-3 mt-1 border-2 border-gray-200 rounded-xl focus:border-gray-400 focus:ring-4 focus:ring-gray-100 transition-all outline-none"
                    />
                  </div>
                </div>

                <button
                  onClick={addEntry}
                  className="w-full mt-6 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white p-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Add to Diary ✅
                </button>
                </div>
              )}
            </div>

            {/* Food Entries by Meal */}
            <div className="space-y-6">
              {/* Breakfast */}
              <div className="bg-white/90 backdrop-blur-lg p-6 rounded-3xl shadow-xl border-2 border-white/50">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center justify-between gap-2">
                  <span className="flex items-center gap-2">🌅 Breakfast</span>
                  <span className="text-sm font-semibold bg-orange-100 text-orange-700 px-3 py-1 rounded-full">{groupedEntries.breakfast.length}</span>
                </h3>
                {groupedEntries.breakfast.length === 0 ? (
                  <p className="text-gray-500 text-center py-4">No breakfast items yet</p>
                ) : (
                  <div className="space-y-3">
                    {groupedEntries.breakfast.map(entry => (
                      <div key={entry.id} className="bg-gradient-to-br from-orange-50 to-yellow-50 p-4 rounded-2xl border-2 border-orange-200 hover:shadow-lg transition-all">
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex-1">
                            <p className="text-sm font-bold text-gray-800">{entry.name}</p>
                            <p className="text-xs text-gray-600 mt-1">
                              <span className="inline-block bg-orange-100 text-orange-700 px-2 py-0.5 rounded mr-2">{entry.quantity}{entry.unit?.charAt(0)}</span>
                              <span className="text-red-600 font-semibold">{Math.round(entry.calories)} cal</span>
                            </p>
                          </div>
                          <div className="flex gap-2">
                            <button
                              onClick={() => editEntry(entry)}
                              className="px-3 py-1 bg-blue-100 text-blue-600 hover:bg-blue-200 font-bold rounded-lg transition-all text-sm"
                              title="Edit"
                            >
                              ✎ Edit
                            </button>
                            <button
                              onClick={() => deleteEntry(entry.id)}
                              className="px-3 py-1 bg-red-100 text-red-600 hover:bg-red-200 font-bold rounded-lg transition-all text-sm"
                              title="Delete"
                            >
                              ✕ Del
                            </button>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-xs">
                          <div className="bg-white/60 p-2 rounded-lg"><span className="text-gray-600">Protein:</span> <span className="font-bold text-pink-600">{entry.protein}g</span></div>
                          <div className="bg-white/60 p-2 rounded-lg"><span className="text-gray-600">Carbs:</span> <span className="font-bold text-purple-600">{entry.carbs}g</span></div>
                          <div className="bg-white/60 p-2 rounded-lg"><span className="text-gray-600">Fats:</span> <span className="font-bold text-cyan-600">{entry.fats}g</span></div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Lunch */}
              <div className="bg-white/90 backdrop-blur-lg p-6 rounded-3xl shadow-xl border-2 border-white/50">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center justify-between gap-2">
                  <span className="flex items-center gap-2">🍽️ Lunch</span>
                  <span className="text-sm font-semibold bg-green-100 text-green-700 px-3 py-1 rounded-full">{groupedEntries.lunch.length}</span>
                </h3>
                {groupedEntries.lunch.length === 0 ? (
                  <p className="text-gray-500 text-center py-4">No lunch items yet</p>
                ) : (
                  <div className="space-y-3">
                    {groupedEntries.lunch.map(entry => (
                      <div key={entry.id} className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-2xl border-2 border-green-200 hover:shadow-lg transition-all">
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex-1">
                            <p className="text-sm font-bold text-gray-800">{entry.name}</p>
                            <p className="text-xs text-gray-600 mt-1">
                              <span className="inline-block bg-green-100 text-green-700 px-2 py-0.5 rounded mr-2">{entry.quantity}{entry.unit?.charAt(0)}</span>
                              <span className="text-red-600 font-semibold">{Math.round(entry.calories)} cal</span>
                            </p>
                          </div>
                          <div className="flex gap-2">
                            <button
                              onClick={() => editEntry(entry)}
                              className="px-3 py-1 bg-blue-100 text-blue-600 hover:bg-blue-200 font-bold rounded-lg transition-all text-sm"
                              title="Edit"
                            >
                              ✎ Edit
                            </button>
                            <button
                              onClick={() => deleteEntry(entry.id)}
                              className="px-3 py-1 bg-red-100 text-red-600 hover:bg-red-200 font-bold rounded-lg transition-all text-sm"
                              title="Delete"
                            >
                              ✕ Del
                            </button>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-xs">
                          <div className="bg-white/60 p-2 rounded-lg"><span className="text-gray-600">Protein:</span> <span className="font-bold text-pink-600">{entry.protein}g</span></div>
                          <div className="bg-white/60 p-2 rounded-lg"><span className="text-gray-600">Carbs:</span> <span className="font-bold text-purple-600">{entry.carbs}g</span></div>
                          <div className="bg-white/60 p-2 rounded-lg"><span className="text-gray-600">Fats:</span> <span className="font-bold text-cyan-600">{entry.fats}g</span></div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Dinner */}
              <div className="bg-white/90 backdrop-blur-lg p-6 rounded-3xl shadow-xl border-2 border-white/50">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center justify-between gap-2">
                  <span className="flex items-center gap-2">🌙 Dinner</span>
                  <span className="text-sm font-semibold bg-blue-100 text-blue-700 px-3 py-1 rounded-full">{groupedEntries.dinner.length}</span>
                </h3>
                {groupedEntries.dinner.length === 0 ? (
                  <p className="text-gray-500 text-center py-4">No dinner items yet</p>
                ) : (
                  <div className="space-y-3">
                    {groupedEntries.dinner.map(entry => (
                      <div key={entry.id} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-2xl border-2 border-blue-200 hover:shadow-lg transition-all">
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex-1">
                            <p className="text-sm font-bold text-gray-800">{entry.name}</p>
                            <p className="text-xs text-gray-600 mt-1">
                              <span className="inline-block bg-blue-100 text-blue-700 px-2 py-0.5 rounded mr-2">{entry.quantity}{entry.unit?.charAt(0)}</span>
                              <span className="text-red-600 font-semibold">{Math.round(entry.calories)} cal</span>
                            </p>
                          </div>
                          <div className="flex gap-2">
                            <button
                              onClick={() => editEntry(entry)}
                              className="px-3 py-1 bg-blue-100 text-blue-600 hover:bg-blue-200 font-bold rounded-lg transition-all text-sm"
                              title="Edit"
                            >
                              ✎ Edit
                            </button>
                            <button
                              onClick={() => deleteEntry(entry.id)}
                              className="px-3 py-1 bg-red-100 text-red-600 hover:bg-red-200 font-bold rounded-lg transition-all text-sm"
                              title="Delete"
                            >
                              ✕ Del
                            </button>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-xs">
                          <div className="bg-white/60 p-2 rounded-lg"><span className="text-gray-600">Protein:</span> <span className="font-bold text-pink-600">{entry.protein}g</span></div>
                          <div className="bg-white/60 p-2 rounded-lg"><span className="text-gray-600">Carbs:</span> <span className="font-bold text-purple-600">{entry.carbs}g</span></div>
                          <div className="bg-white/60 p-2 rounded-lg"><span className="text-gray-600">Fats:</span> <span className="font-bold text-cyan-600">{entry.fats}g</span></div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Snacks */}
              <div className="bg-white/90 backdrop-blur-lg p-6 rounded-3xl shadow-xl border-2 border-white/50">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center justify-between gap-2">
                  <span className="flex items-center gap-2">🥤 Snacks</span>
                  <span className="text-sm font-semibold bg-purple-100 text-purple-700 px-3 py-1 rounded-full">{groupedEntries.snack.length}</span>
                </h3>
                {groupedEntries.snack.length === 0 ? (
                  <p className="text-gray-500 text-center py-4">No snack items yet</p>
                ) : (
                  <div className="space-y-3">
                    {groupedEntries.snack.map(entry => (
                      <div key={entry.id} className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-2xl border-2 border-purple-200 hover:shadow-lg transition-all">
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex-1">
                            <p className="text-sm font-bold text-gray-800">{entry.name}</p>
                            <p className="text-xs text-gray-600 mt-1">
                              <span className="inline-block bg-purple-100 text-purple-700 px-2 py-0.5 rounded mr-2">{entry.quantity}{entry.unit?.charAt(0)}</span>
                              <span className="text-red-600 font-semibold">{Math.round(entry.calories)} cal</span>
                            </p>
                          </div>
                          <div className="flex gap-2">
                            <button
                              onClick={() => editEntry(entry)}
                              className="px-3 py-1 bg-blue-100 text-blue-600 hover:bg-blue-200 font-bold rounded-lg transition-all text-sm"
                              title="Edit"
                            >
                              ✎ Edit
                            </button>
                            <button
                              onClick={() => deleteEntry(entry.id)}
                              className="px-3 py-1 bg-red-100 text-red-600 hover:bg-red-200 font-bold rounded-lg transition-all text-sm"
                              title="Delete"
                            >
                              ✕ Del
                            </button>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-xs">
                          <div className="bg-white/60 p-2 rounded-lg"><span className="text-gray-600">Protein:</span> <span className="font-bold text-pink-600">{entry.protein}g</span></div>
                          <div className="bg-white/60 p-2 rounded-lg"><span className="text-gray-600">Carbs:</span> <span className="font-bold text-purple-600">{entry.carbs}g</span></div>
                          <div className="bg-white/60 p-2 rounded-lg"><span className="text-gray-600">Fats:</span> <span className="font-bold text-cyan-600">{entry.fats}g</span></div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
