export function ExploreDietPlans() {
  const dietPlans = [
    {
      id: 1,
      name: "Mediterranean Diet",
      icon: "🥗",
      description: "Heart-healthy diet rich in olive oil, fish, and vegetables",
      benefits: ["Heart Health", "Weight Loss", "Brain Function"],
      duration: "8-12 weeks",
      difficulty: "Easy",
      rating: 4.8,
      reviews: 2543,
      price: "Free",
      color: "from-blue-50 to-blue-100",
      border: "border-blue-300",
      meals: ["Grilled Fish", "Greek Salad", "Whole Grain Pasta"],
    },
    {
      id: 2,
      name: "Keto Diet",
      icon: "🥩",
      description: "Low-carb, high-fat diet for rapid weight loss",
      benefits: ["Rapid Weight Loss", "Mental Clarity", "Energy Boost"],
      duration: "6-10 weeks",
      difficulty: "Hard",
      rating: 4.6,
      reviews: 3124,
      price: "$9.99/month",
      color: "from-red-50 to-red-100",
      border: "border-red-300",
      meals: ["Steak with Butter", "Cheese & Nuts", "Cauliflower Rice"],
    },
    {
      id: 3,
      name: "Intermittent Fasting",
      icon: "⏰",
      description: "Flexible eating schedule with fasting windows",
      benefits: ["Cellular Health", "Simplified Eating", "Metabolism Boost"],
      duration: "4-8 weeks",
      difficulty: "Medium",
      rating: 4.7,
      reviews: 1856,
      price: "Free",
      color: "from-purple-50 to-purple-100",
      border: "border-purple-300",
      meals: ["Black Coffee", "Green Tea", "Regular Meals in Window"],
    },
    {
      id: 4,
      name: "DASH Diet",
      icon: "🫀",
      description: "Designed to lower blood pressure and improve heart health",
      benefits: ["Lower BP", "Heart Health", "Balanced Nutrition"],
      duration: "10-12 weeks",
      difficulty: "Easy",
      rating: 4.5,
      reviews: 1234,
      price: "Free",
      color: "from-green-50 to-green-100",
      border: "border-green-300",
      meals: ["Chicken Breast", "Brown Rice", "Broccoli"],
    },
    {
      id: 5,
      name: "Vegan Diet",
      icon: "🌱",
      description: "Plant-based diet with no animal products",
      benefits: ["Ethical Eating", "Weight Loss", "Disease Prevention"],
      duration: "12+ weeks",
      difficulty: "Hard",
      rating: 4.4,
      reviews: 987,
      price: "$7.99/month",
      color: "from-emerald-50 to-emerald-100",
      border: "border-emerald-300",
      meals: ["Tofu Stir-fry", "Quinoa Bowl", "Lentil Soup"],
    },
    {
      id: 6,
      name: "Paleo Diet",
      icon: "🦴",
      description: "Whole foods approach mimicking ancestral eating patterns",
      benefits: ["Natural Foods", "Muscle Building", "Energy Levels"],
      duration: "6-10 weeks",
      difficulty: "Medium",
      rating: 4.6,
      reviews: 1567,
      price: "Free",
      color: "from-orange-50 to-orange-100",
      border: "border-orange-300",
      meals: ["Wild Salmon", "Sweet Potato", "Berries"],
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
            Explore Diet Plans 🗂️
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Choose from our collection of scientifically-backed diet plans
          </p>
          <p className="text-sm text-gray-500">
            Find the perfect nutrition plan tailored to your health goals
          </p>
        </div>

        {/* Filter/Search Section */}
        <div className="mb-12 bg-white/90 backdrop-blur-lg p-6 rounded-3xl shadow-xl border-2 border-white/50">
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Duration</label>
              <select className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 transition-colors">
                <option>All Duration</option>
                <option>4-8 weeks</option>
                <option>8-12 weeks</option>
                <option>12+ weeks</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Difficulty</label>
              <select className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 transition-colors">
                <option>All Levels</option>
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Price</label>
              <select className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 transition-colors">
                <option>All Prices</option>
                <option>Free</option>
                <option>Premium</option>
              </select>
            </div>
          </div>
        </div>

        {/* Diet Plans Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dietPlans.map((plan) => (
            <div
              key={plan.id}
              className={`bg-gradient-to-br ${plan.color} backdrop-blur-lg p-8 rounded-3xl shadow-xl border-2 ${plan.border} hover:shadow-2xl hover:scale-105 transition-all transform cursor-pointer group`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="text-5xl">{plan.icon}</div>
                <div className="text-right">
                  <div className="flex items-center gap-1 mb-1">
                    <span className="text-yellow-400 text-lg">⭐</span>
                    <span className="font-bold text-gray-800">{plan.rating}</span>
                  </div>
                  <p className="text-xs text-gray-600">{plan.reviews.toLocaleString()} reviews</p>
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                {plan.name}
              </h3>
              <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                {plan.description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-white/50 px-3 py-2 rounded-lg">
                  <p className="text-xs text-gray-600">Duration</p>
                  <p className="font-bold text-gray-800">{plan.duration}</p>
                </div>
                <div className="bg-white/50 px-3 py-2 rounded-lg">
                  <p className="text-xs text-gray-600">Difficulty</p>
                  <p className="font-bold text-gray-800">{plan.difficulty}</p>
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-4">
                <p className="text-xs font-semibold text-gray-700 mb-2">Key Benefits:</p>
                <div className="flex flex-wrap gap-2">
                  {plan.benefits.map((benefit, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 bg-white/60 rounded-full text-gray-800 font-semibold"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>

              {/* Sample Meals */}
              <div className="mb-4">
                <p className="text-xs font-semibold text-gray-700 mb-2">Sample Meals:</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  {plan.meals.map((meal, idx) => (
                    <li key={idx}>• {meal}</li>
                  ))}
                </ul>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t-2 border-white/50">
                <p className="font-bold text-lg text-gray-800">{plan.price}</p>
                <button className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-full hover:shadow-lg transition-all transform hover:scale-105">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-3xl p-12 text-white text-center shadow-2xl">
          <h2 className="text-3xl font-bold mb-4">Not sure which plan is for you?</h2>
          <p className="text-lg mb-6 text-white/90">Take our diet quiz to find the perfect plan based on your goals and lifestyle</p>
          <button className="px-8 py-3 bg-white text-purple-600 font-bold rounded-full hover:bg-gray-100 transition-all transform hover:scale-105">
            Start Quiz →
          </button>
        </div>
      </div>
    </div>
  );
}
