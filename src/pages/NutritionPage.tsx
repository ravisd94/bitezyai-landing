export function NutritionPage() {
  const todayNutrition = {
    protein: { current: 83, goal: 100, grams: 83, color: "text-pink-600 bg-pink-50" },
    carbs: { current: 155, goal: 200, grams: 155, color: "text-purple-600 bg-purple-50" },
    fats: { current: 48, goal: 70, grams: 48, color: "text-cyan-600 bg-cyan-50" },
    fiber: { current: 32, goal: 35, grams: 32, color: "text-green-600 bg-green-50" },
  };

  const micronutrients = [
    { name: "Vitamin A", current: 850, unit: "mcg", goal: 900, icon: "👁️" },
    { name: "Vitamin C", current: 145, unit: "mg", goal: 90, icon: "🍊" },
    { name: "Vitamin D", current: 15, unit: "mcg", goal: 20, icon: "☀️" },
    { name: "Calcium", current: 950, unit: "mg", goal: 1000, icon: "🥛" },
    { name: "Iron", current: 14, unit: "mg", goal: 18, icon: "🩸" },
    { name: "Magnesium", current: 320, unit: "mg", goal: 400, icon: "⚡" },
  ];

  const meals = [
    { name: "Breakfast", calories: 450, protein: 25, carbs: 55, fats: 12, time: "08:00", foods: "Oatmeal with berries & yogurt" },
    { name: "Lunch", calories: 650, protein: 35, carbs: 65, fats: 20, time: "13:00", foods: "Grilled chicken with rice & veggies" },
    { name: "Dinner", calories: 550, protein: 40, carbs: 45, fats: 18, time: "19:00", foods: "Salmon with sweet potato & broccoli" },
    { name: "Snacks", calories: 200, protein: 8, carbs: 25, fats: 8, time: "Various", foods: "Almonds, fruit, protein shake" },
  ];

  const weeklyTrend = [
    { day: "Mon", calories: 1950, protein: 80, carbs: 200, fats: 65 },
    { day: "Tue", calories: 2100, protein: 90, carbs: 215, fats: 70 },
    { day: "Wed", calories: 1800, protein: 78, carbs: 185, fats: 60 },
    { day: "Thu", calories: 2200, protein: 95, carbs: 230, fats: 75 },
    { day: "Fri", calories: 1750, protein: 72, carbs: 170, fats: 58 },
    { day: "Sat", calories: 1900, protein: 85, carbs: 195, fats: 63 },
    { day: "Sun", calories: 1850, protein: 83, carbs: 155, fats: 48 },
  ];

  const getPercentage = (current: number, goal: number) => Math.min((current / goal) * 100, 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50 px-4 py-12 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-down">
          <h1 className="text-5xl font-black bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500 bg-clip-text text-transparent mb-3">
            Nutrition Analysis 🥗
          </h1>
          <p className="text-lg text-gray-600">
            Track your daily macro and micronutrient intake
          </p>
        </div>

        {/* Macronutrients Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {Object.entries(todayNutrition).map(([key, macro]) => (
            <div key={key} className="bg-white/90 backdrop-blur-lg p-6 rounded-3xl shadow-xl border-2 border-white/50 hover:shadow-2xl transition-all animate-fade-in-up">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1 capitalize">{key}</p>
                  <p className={`text-3xl font-bold ${macro.color.split(' ')[0]}`}>{macro.grams}g</p>
                </div>
                <span className="text-2xl">
                  {key === 'protein' && '🍗'}
                  {key === 'carbs' && '🌾'}
                  {key === 'fats' && '🥑'}
                  {key === 'fiber' && '🥦'}
                </span>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-gray-600">
                  <span>Goal: {macro.goal}g</span>
                  <span>{Math.round(getPercentage(macro.current, macro.goal))}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all ${
                      key === 'protein' ? 'bg-gradient-to-r from-pink-400 to-pink-600' :
                      key === 'carbs' ? 'bg-gradient-to-r from-purple-400 to-purple-600' :
                      key === 'fats' ? 'bg-gradient-to-r from-cyan-400 to-cyan-600' :
                      'bg-gradient-to-r from-green-400 to-green-600'
                    }`}
                    style={{ width: `${getPercentage(macro.current, macro.goal)}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Meals Breakdown */}
        <div className="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-xl border-2 border-white/50 mb-8 animate-fade-in-up animation-delay-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Meals Today</h2>
          
          <div className="space-y-4">
            {meals.map((meal) => (
              <div key={meal.name} className="p-4 border-2 border-gray-200 rounded-2xl hover:border-orange-300 transition-all">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg">{meal.name}</h3>
                    <p className="text-sm text-gray-600">{meal.foods}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-orange-600">{meal.calories} cal</p>
                    <p className="text-xs text-gray-600">{meal.time}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3 bg-pink-50 rounded-lg">
                    <p className="text-xs text-gray-600 mb-1">Protein</p>
                    <p className="font-bold text-pink-600">{meal.protein}g</p>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <p className="text-xs text-gray-600 mb-1">Carbs</p>
                    <p className="font-bold text-purple-600">{meal.carbs}g</p>
                  </div>
                  <div className="p-3 bg-cyan-50 rounded-lg">
                    <p className="text-xs text-gray-600 mb-1">Fats</p>
                    <p className="font-bold text-cyan-600">{meal.fats}g</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Micronutrients */}
        <div className="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-xl border-2 border-white/50 mb-8 animate-fade-in-up animation-delay-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Micronutrients</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {micronutrients.map((micro) => {
              const percentage = getPercentage(micro.current, micro.goal);
              return (
                <div key={micro.name} className="p-4 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{micro.icon}</span>
                      <div>
                        <p className="font-semibold text-gray-800">{micro.name}</p>
                        <p className="text-xs text-gray-600">{micro.current}/{micro.goal} {micro.unit}</p>
                      </div>
                    </div>
                    <span className="text-sm font-bold text-orange-600">{Math.round(percentage)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-orange-400 to-yellow-400 h-full rounded-full"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Weekly Nutrition Trend */}
        <div className="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-xl border-2 border-white/50 animate-fade-in-up animation-delay-300">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Weekly Nutrition Trend</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Day</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-700">Calories</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-700">🍗 Protein</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-700">🌾 Carbs</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-700">🥑 Fats</th>
                </tr>
              </thead>
              <tbody>
                {weeklyTrend.map((day, idx) => (
                  <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50 transition-all">
                    <td className="py-3 px-4 font-semibold text-gray-800">{day.day}</td>
                    <td className="py-3 px-4 text-center text-lg font-bold text-orange-600">{day.calories}</td>
                    <td className="py-3 px-4 text-center font-semibold text-pink-600">{day.protein}g</td>
                    <td className="py-3 px-4 text-center font-semibold text-purple-600">{day.carbs}g</td>
                    <td className="py-3 px-4 text-center font-semibold text-cyan-600">{day.fats}g</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
