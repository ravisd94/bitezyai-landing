export function ExploreRecipes() {
  const recipes = [
    {
      id: 1,
      name: "Grilled Salmon with Quinoa",
      icon: "🐟",
      category: "Lunch",
      prepTime: "25 min",
      servings: 2,
      calories: 450,
      protein: 42,
      carbs: 35,
      fats: 18,
      difficulty: "Easy",
      rating: 4.9,
      reviews: 1234,
      color: "from-orange-50 to-orange-100",
      border: "border-orange-300",
      ingredients: ["Salmon Fillet", "Quinoa", "Lemon", "Olive Oil", "Herbs"],
      tags: ["High Protein", "Omega-3", "Gluten-Free"],
    },
    {
      id: 2,
      name: "Green Detox Smoothie",
      icon: "🥤",
      category: "Breakfast",
      prepTime: "5 min",
      servings: 1,
      calories: 180,
      protein: 8,
      carbs: 28,
      fats: 4,
      difficulty: "Very Easy",
      rating: 4.7,
      reviews: 892,
      color: "from-green-50 to-green-100",
      border: "border-green-300",
      ingredients: ["Spinach", "Banana", "Apple", "Ginger", "Almond Milk"],
      tags: ["Vegan", "Low Calorie", "Detox"],
    },
    {
      id: 3,
      name: "Spicy Chicken Stir-fry",
      icon: "🍗",
      category: "Dinner",
      prepTime: "20 min",
      servings: 3,
      calories: 380,
      protein: 45,
      carbs: 28,
      fats: 12,
      difficulty: "Easy",
      rating: 4.8,
      reviews: 1567,
      color: "from-red-50 to-red-100",
      border: "border-red-300",
      ingredients: ["Chicken Breast", "Bell Peppers", "Broccoli", "Soy Sauce", "Ginger"],
      tags: ["High Protein", "Low Fat", "Quick"],
    },
    {
      id: 4,
      name: "Mediterranean Salad Bowl",
      icon: "🥗",
      category: "Lunch",
      prepTime: "15 min",
      servings: 2,
      calories: 320,
      protein: 12,
      carbs: 38,
      fats: 14,
      difficulty: "Very Easy",
      rating: 4.6,
      reviews: 2341,
      color: "from-blue-50 to-blue-100",
      border: "border-blue-300",
      ingredients: ["Lettuce", "Feta Cheese", "Cucumber", "Tomato", "Olive Oil"],
      tags: ["Vegetarian", "Fresh", "Low Calorie"],
    },
    {
      id: 5,
      name: "Protein Pancakes",
      icon: "🥞",
      category: "Breakfast",
      prepTime: "15 min",
      servings: 2,
      calories: 290,
      protein: 22,
      carbs: 32,
      fats: 8,
      difficulty: "Easy",
      rating: 4.8,
      reviews: 1123,
      color: "from-yellow-50 to-yellow-100",
      border: "border-yellow-300",
      ingredients: ["Protein Powder", "Eggs", "Oats", "Banana", "Honey"],
      tags: ["High Protein", "Breakfast", "Post-Workout"],
    },
    {
      id: 6,
      name: "Buddha Bowl with Tofu",
      icon: "🥙",
      category: "Lunch",
      prepTime: "20 min",
      servings: 2,
      calories: 380,
      protein: 18,
      carbs: 52,
      fats: 14,
      difficulty: "Easy",
      rating: 4.7,
      reviews: 987,
      color: "from-purple-50 to-purple-100",
      border: "border-purple-300",
      ingredients: ["Tofu", "Sweet Potato", "Kale", "Chickpeas", "Tahini"],
      tags: ["Vegan", "Balanced", "Plant-Based"],
    },
    {
      id: 7,
      name: "Grilled Veggie & Lean Beef",
      icon: "🥩",
      category: "Dinner",
      prepTime: "30 min",
      servings: 3,
      calories: 420,
      protein: 48,
      carbs: 22,
      fats: 16,
      difficulty: "Medium",
      rating: 4.9,
      reviews: 1456,
      color: "from-pink-50 to-pink-100",
      border: "border-pink-300",
      ingredients: ["Lean Beef", "Zucchini", "Asparagus", "Garlic", "Olive Oil"],
      tags: ["High Protein", "Low Carb", "Keto"],
    },
    {
      id: 8,
      name: "Overnight Oats",
      icon: "🍲",
      category: "Breakfast",
      prepTime: "5 min + overnight",
      servings: 1,
      calories: 340,
      protein: 12,
      carbs: 48,
      fats: 10,
      difficulty: "Very Easy",
      rating: 4.6,
      reviews: 2123,
      color: "from-amber-50 to-amber-100",
      border: "border-amber-300",
      ingredients: ["Oats", "Greek Yogurt", "Honey", "Berries", "Almond Milk"],
      tags: ["No Cook", "High Fiber", "Filling"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-cyan-50 px-4 py-12 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center animate-fade-in-down">
          <h1 className="text-5xl font-black bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent mb-4">
            Explore Recipes 👨‍🍳
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Discover delicious and nutritious recipes for every meal
          </p>
          <p className="text-sm text-gray-500">
            From quick breakfasts to gourmet dinners - all tracked and healthy
          </p>
        </div>

        {/* Filter Section */}
        <div className="mb-12 bg-white/90 backdrop-blur-lg p-6 rounded-3xl shadow-xl border-2 border-white/50">
          <div className="grid md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Meal Type</label>
              <select className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 transition-colors">
                <option>All Meals</option>
                <option>Breakfast</option>
                <option>Lunch</option>
                <option>Dinner</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Prep Time</label>
              <select className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 transition-colors">
                <option>Any Time</option>
                <option>Under 10 min</option>
                <option>10-20 min</option>
                <option>20-30 min</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Dietary</label>
              <select className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 transition-colors">
                <option>All Recipes</option>
                <option>Vegan</option>
                <option>Vegetarian</option>
                <option>Keto</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Difficulty</label>
              <select className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 transition-colors">
                <option>All Levels</option>
                <option>Very Easy</option>
                <option>Easy</option>
                <option>Medium</option>
              </select>
            </div>
          </div>
        </div>

        {/* Recipes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className={`bg-gradient-to-br ${recipe.color} backdrop-blur-lg rounded-2xl shadow-xl border-2 ${recipe.border} hover:shadow-2xl hover:scale-105 transition-all transform cursor-pointer overflow-hidden group`}
            >
              {/* Recipe Card */}
              <div className="p-6 h-full flex flex-col">
                {/* Icon & Category */}
                <div className="flex items-start justify-between mb-3">
                  <div className="text-4xl">{recipe.icon}</div>
                  <span className="text-xs px-2 py-1 bg-white/60 rounded-full font-semibold text-gray-800">
                    {recipe.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors line-clamp-2">
                  {recipe.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  <span className="text-yellow-400">⭐</span>
                  <span className="font-bold text-gray-800">{recipe.rating}</span>
                  <span className="text-xs text-gray-600">({recipe.reviews})</span>
                </div>

                {/* Time & Servings */}
                <div className="flex gap-3 text-xs font-semibold text-gray-700 mb-3">
                  <span>⏱️ {recipe.prepTime}</span>
                  <span>🍽️ {recipe.servings} servings</span>
                </div>

                {/* Macros */}
                <div className="grid grid-cols-4 gap-2 mb-3">
                  <div className="bg-white/50 px-2 py-1 rounded text-center">
                    <p className="text-xs text-gray-600">Calories</p>
                    <p className="text-sm font-bold text-gray-800">{recipe.calories}</p>
                  </div>
                  <div className="bg-white/50 px-2 py-1 rounded text-center">
                    <p className="text-xs text-gray-600">P</p>
                    <p className="text-sm font-bold text-gray-800">{recipe.protein}g</p>
                  </div>
                  <div className="bg-white/50 px-2 py-1 rounded text-center">
                    <p className="text-xs text-gray-600">C</p>
                    <p className="text-sm font-bold text-gray-800">{recipe.carbs}g</p>
                  </div>
                  <div className="bg-white/50 px-2 py-1 rounded text-center">
                    <p className="text-xs text-gray-600">F</p>
                    <p className="text-sm font-bold text-gray-800">{recipe.fats}g</p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {recipe.tags.slice(0, 2).map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 bg-white/40 rounded-full text-gray-800 font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <button className="mt-auto w-full py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-lg hover:shadow-lg transition-all transform hover:scale-105 text-sm">
                  View Recipe →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-3xl p-12 text-white text-center shadow-2xl">
          <h2 className="text-3xl font-bold mb-4">Looking for something specific?</h2>
          <p className="text-lg mb-6 text-white/90">Search our database of 1000+ healthy recipes tailored to your dietary preferences</p>
          <button className="px-8 py-3 bg-white text-purple-600 font-bold rounded-full hover:bg-gray-100 transition-all transform hover:scale-105">
            Browse All Recipes →
          </button>
        </div>
      </div>
    </div>
  );
}
