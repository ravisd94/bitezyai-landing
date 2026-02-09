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
    const newEntry: FoodEntry = {
      id: entryId,
      name: food.name,
      calories: food.calories,
      protein: food.protein,
      carbs: food.carbs,
      fats: food.fats,
      fiber: food.fiber,
      sugar: food.sugar,
      sodium: food.sodium,
      vitaminC: food.vitaminC,
      vitaminD: food.vitaminD,
      calcium: food.calcium,
      iron: food.iron,
      meal: selectedMealType,
      timestamp: selectedDateObj,
    };

    setEntries([...entries, newEntry]);
    setSearchQuery("");
    setSearchResults([]);
  };

  const addEntry = () => {
    if (!foodName || !calories) {
      alert("⚠️ Please enter at least food name and calories!");
      return;
    }

    const selectedDateObj = new Date(selectedDate + 'T12:00:00');
    const entryId = crypto.randomUUID();
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
    };

    setEntries([...entries, newEntry]);
    
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
    setShowAddForm(false);
  };

  const deleteEntry = (id: string) => {
    setEntries(entries.filter(entry => entry.id !== id));
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

  // Calculate last 7 days summary
  const getLast7DaysSummary = () => {
    const summaryData = [];
    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const dateStr = date.toISOString().split('T')[0];
      const dayEntries = entries.filter(entry => {
        const entryDate = new Date(entry.timestamp).toISOString().split('T')[0];
        return entryDate === dateStr;
      });
      const dayCalories = dayEntries.reduce((sum, e) => sum + e.calories, 0);
      const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
      summaryData.push({ date: dateStr, dayName, calories: dayCalories });
    }
    return summaryData;
  };

  const last7Days = getLast7DaysSummary();

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

        {/* Date Picker Section */}
        <div className="bg-white/90 backdrop-blur-lg p-6 rounded-3xl shadow-xl border-2 border-white/50 mb-6 animate-fade-in-up">
          <h3 className="text-xl font-bold text-gray-800 mb-4">📅 Select Date</h3>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition-all outline-none text-lg font-semibold text-gray-700"
          />
        </div>

        {/* Weekly Summary */}
        <div className="bg-white/90 backdrop-blur-lg p-6 rounded-3xl shadow-xl border-2 border-white/50 mb-6 animate-fade-in-up animation-delay-100">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">📊 Last 7 Days Summary</h3>
          <div className="grid grid-cols-7 gap-2">
            {last7Days.map((day) => (
              <div 
                key={day.date}
                onClick={() => setSelectedDate(day.date)}
                className={`p-4 rounded-2xl cursor-pointer transition-all transform hover:scale-105 ${
                  selectedDate === day.date
                    ? 'bg-gradient-to-br from-pink-500 to-purple-500 text-white shadow-lg'
                    : 'bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-lg border-2 border-gray-200'
                }`}
              >
                <p className="text-xs font-bold text-center mb-1">{day.dayName}</p>
                <p className="text-xl font-black text-center">{Math.round(day.calories)}</p>
                <p className="text-xs text-center opacity-70 mt-1">cal</p>
              </div>
            ))}
          </div>
        </div>

        {/* Monthly Calendar Moved to Separate Page */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl shadow-xl border-2 border-blue-200 mb-6 animate-fade-in-up animation-delay-200">
          <p className="text-lg text-gray-700">📅 For a full monthly calendar view of your nutrition data, go to the <span className="font-bold text-blue-600">Calendar</span> page from the navigation menu.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Daily Summary */}
          <div className="lg:col-span-1 space-y-6">
            {/* Calorie Summary */}
            <div className="bg-white/90 backdrop-blur-lg p-6 rounded-3xl shadow-xl border-2 border-white/50 animate-fade-in-up">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                🔥 Daily Summary
              </h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-4 rounded-2xl">
                  <p className="text-sm text-gray-600 mb-1">Total Calories</p>
                  <p className="text-3xl font-black text-pink-600">{Math.round(totals.calories)}</p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-gray-700">🍗 Protein</span>
                    <span className="text-pink-600 font-bold">{Math.round(totals.protein)}g</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-pink-400 to-pink-600 h-2 rounded-full" style={{ width: `${Math.min((totals.protein / 150) * 100, 100)}%` }}></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-gray-700">🍚 Carbs</span>
                    <span className="text-purple-600 font-bold">{Math.round(totals.carbs)}g</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-400 to-purple-600 h-2 rounded-full" style={{ width: `${Math.min((totals.carbs / 200) * 100, 100)}%` }}></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-gray-700">🥑 Fats</span>
                    <span className="text-cyan-600 font-bold">{Math.round(totals.fats)}g</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-cyan-400 to-cyan-600 h-2 rounded-full" style={{ width: `${Math.min((totals.fats / 70) * 100, 100)}%` }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Micronutrients Summary */}
            <div className="bg-white/90 backdrop-blur-lg p-6 rounded-3xl shadow-xl border-2 border-white/50 animate-fade-in-up animation-delay-300">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                💊 Micronutrients
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">🌿 Fiber</span>
                  <span className="font-bold text-green-600">{Math.round(totals.fiber)}g</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">🍬 Sugar</span>
                  <span className="font-bold text-orange-600">{Math.round(totals.sugar)}g</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">🧂 Sodium</span>
                  <span className="font-bold text-red-600">{Math.round(totals.sodium)}mg</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">🍊 Vitamin C</span>
                  <span className="font-bold text-yellow-600">{Math.round(totals.vitaminC)}mg</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">☀️ Vitamin D</span>
                  <span className="font-bold text-yellow-500">{Math.round(totals.vitaminD)}μg</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">🦴 Calcium</span>
                  <span className="font-bold text-blue-600">{Math.round(totals.calcium)}mg</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">⚙️ Iron</span>
                  <span className="font-bold text-gray-600">{Math.round(totals.iron)}mg</span>
                </div>
              </div>
            </div>
          </div>

          {/* Food Entries & Add Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Search Food */}
            <div className="bg-white/90 backdrop-blur-lg p-6 rounded-3xl shadow-xl border-2 border-white/50 animate-slide-in-up">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">🔍 Search Food</h3>
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
                className="w-full flex items-center justify-between text-2xl font-bold text-gray-800 mb-4 hover:text-purple-600 transition-colors"
              >
                <span>Or Add Manually ➕</span>
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
            {selectedDateEntries.length === 0 ? (
              <div className="bg-white/90 backdrop-blur-lg p-12 rounded-3xl shadow-xl border-2 border-white/50 text-center">
                <div className="text-6xl mb-4">🍽️</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">No Entries for {new Date(selectedDate + 'T12:00:00').toLocaleDateString()}</h3>
                <p className="text-gray-600">
                  Start tracking your meals for this day by using the search or adding manually!
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Breakfast */}
                {groupedEntries.breakfast.length > 0 && (
                  <div className="bg-white/90 backdrop-blur-lg p-6 rounded-3xl shadow-xl border-2 border-white/50">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                      🌅 Breakfast
                    </h3>
                    <div className="space-y-3">
                      {groupedEntries.breakfast.map(entry => (
                        <div key={entry.id} className="bg-gradient-to-br from-orange-50 to-yellow-50 p-4 rounded-2xl border-2 border-orange-200">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-bold text-gray-800">{entry.name}</h4>
                            <button
                              onClick={() => deleteEntry(entry.id)}
                              className="text-red-500 hover:text-red-700 font-bold"
                            >
                              ✕
                            </button>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                            <div><span className="text-gray-600">Cal:</span> <span className="font-bold">{entry.calories}</span></div>
                            <div><span className="text-gray-600">P:</span> <span className="font-bold">{entry.protein}g</span></div>
                            <div><span className="text-gray-600">C:</span> <span className="font-bold">{entry.carbs}g</span></div>
                            <div><span className="text-gray-600">F:</span> <span className="font-bold">{entry.fats}g</span></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Lunch */}
                {groupedEntries.lunch.length > 0 && (
                  <div className="bg-white/90 backdrop-blur-lg p-6 rounded-3xl shadow-xl border-2 border-white/50">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                      🍽️ Lunch
                    </h3>
                    <div className="space-y-3">
                      {groupedEntries.lunch.map(entry => (
                        <div key={entry.id} className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-2xl border-2 border-green-200">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-bold text-gray-800">{entry.name}</h4>
                            <button
                              onClick={() => deleteEntry(entry.id)}
                              className="text-red-500 hover:text-red-700 font-bold"
                            >
                              ✕
                            </button>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                            <div><span className="text-gray-600">Cal:</span> <span className="font-bold">{entry.calories}</span></div>
                            <div><span className="text-gray-600">P:</span> <span className="font-bold">{entry.protein}g</span></div>
                            <div><span className="text-gray-600">C:</span> <span className="font-bold">{entry.carbs}g</span></div>
                            <div><span className="text-gray-600">F:</span> <span className="font-bold">{entry.fats}g</span></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Dinner */}
                {groupedEntries.dinner.length > 0 && (
                  <div className="bg-white/90 backdrop-blur-lg p-6 rounded-3xl shadow-xl border-2 border-white/50">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                      🌙 Dinner
                    </h3>
                    <div className="space-y-3">
                      {groupedEntries.dinner.map(entry => (
                        <div key={entry.id} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-2xl border-2 border-blue-200">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-bold text-gray-800">{entry.name}</h4>
                            <button
                              onClick={() => deleteEntry(entry.id)}
                              className="text-red-500 hover:text-red-700 font-bold"
                            >
                              ✕
                            </button>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                            <div><span className="text-gray-600">Cal:</span> <span className="font-bold">{entry.calories}</span></div>
                            <div><span className="text-gray-600">P:</span> <span className="font-bold">{entry.protein}g</span></div>
                            <div><span className="text-gray-600">C:</span> <span className="font-bold">{entry.carbs}g</span></div>
                            <div><span className="text-gray-600">F:</span> <span className="font-bold">{entry.fats}g</span></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Snacks */}
                {groupedEntries.snack.length > 0 && (
                  <div className="bg-white/90 backdrop-blur-lg p-6 rounded-3xl shadow-xl border-2 border-white/50">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                      🥤 Snacks
                    </h3>
                    <div className="space-y-3">
                      {groupedEntries.snack.map(entry => (
                        <div key={entry.id} className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-2xl border-2 border-purple-200">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-bold text-gray-800">{entry.name}</h4>
                            <button
                              onClick={() => deleteEntry(entry.id)}
                              className="text-red-500 hover:text-red-700 font-bold"
                            >
                              ✕
                            </button>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                            <div><span className="text-gray-600">Cal:</span> <span className="font-bold">{entry.calories}</span></div>
                            <div><span className="text-gray-600">P:</span> <span className="font-bold">{entry.protein}g</span></div>
                            <div><span className="text-gray-600">C:</span> <span className="font-bold">{entry.carbs}g</span></div>
                            <div><span className="text-gray-600">F:</span> <span className="font-bold">{entry.fats}g</span></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
