export function ProgressPage() {
  const progressData = {
    weight: {
      current: 72.5,
      start: 75,
      goal: 70,
      unit: "kg",
      trend: -0.5,
      weeklyData: [73, 72.8, 72.7, 72.6, 72.5, 72.4, 72.5],
    },
    calories: {
      current: 1928,
      goal: 2200,
      unit: "cal",
      weeklyAvg: 1928,
      trend: -50,
      weeklyData: [1950, 2100, 1800, 2200, 1750, 1900, 1850],
    },
    steps: {
      current: 8932,
      goal: 10000,
      unit: "steps",
      weeklyAvg: 8932,
      trend: +150,
      weeklyData: [9200, 10500, 8100, 11000, 7800, 8500, 8432],
    },
    sleep: {
      current: 7.6,
      goal: 8,
      unit: "hours",
      weeklyAvg: 7.6,
      trend: -0.2,
      weeklyData: [7, 8, 7.5, 6.5, 8.5, 8, 7.5],
    },
  };

  const milestones = [
    { achieved: true, title: "1kg Lost", date: "Jan 15, 2026", icon: "🎯" },
    { achieved: true, title: "First Week", date: "Jan 22, 2026", icon: "⭐" },
    { achieved: true, title: "5kg Progress", date: "Feb 1, 2026", icon: "🏆" },
    { achieved: false, title: "Goal Weight", date: "Coming Soon", icon: "🥇" },
    { achieved: false, title: "Maintain 8 weeks", date: "Coming Soon", icon: "💪" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 px-4 py-12 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-down">
          <h1 className="text-5xl font-black bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent mb-3">
            Your Progress & Trends 📈
          </h1>
          <p className="text-lg text-gray-600">
            Track your improvement over time across all key health metrics
          </p>
        </div>

        {/* Key Metrics Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Weight Progress */}
          <div className="bg-white/90 backdrop-blur-lg p-6 rounded-3xl shadow-xl border-2 border-white/50 hover:shadow-2xl transition-all animate-fade-in-up">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">Current Weight</p>
                <p className="text-3xl font-bold text-teal-600">{progressData.weight.current}</p>
                <p className="text-xs text-gray-600 mt-1">{progressData.weight.unit}</p>
              </div>
              <span className="text-3xl">⚖️</span>
            </div>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-xs text-gray-600">
                <span>Goal: {progressData.weight.goal} {progressData.weight.unit}</span>
                <span className={progressData.weight.trend < 0 ? "text-green-600 font-bold" : "text-red-600 font-bold"}>
                  {progressData.weight.trend > 0 ? '+' : ''}{progressData.weight.trend} {progressData.weight.unit}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-teal-400 to-teal-600 h-full rounded-full"
                  style={{ width: `${((progressData.weight.start - progressData.weight.current) / (progressData.weight.start - progressData.weight.goal)) * 100}%` }}
                ></div>
              </div>
            </div>
            <p className="text-xs text-gray-600">Lost {(progressData.weight.start - progressData.weight.current).toFixed(1)} kg so far</p>
          </div>

          {/* Calories */}
          <div className="bg-white/90 backdrop-blur-lg p-6 rounded-3xl shadow-xl border-2 border-white/50 hover:shadow-2xl transition-all animate-fade-in-up animation-delay-100">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">Weekly Avg</p>
                <p className="text-3xl font-bold text-orange-600">{progressData.calories.weeklyAvg}</p>
                <p className="text-xs text-gray-600 mt-1">{progressData.calories.unit}</p>
              </div>
              <span className="text-3xl">🔥</span>
            </div>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-xs text-gray-600">
                <span>Goal: {progressData.calories.goal} {progressData.calories.unit}</span>
                <span className="text-gray-600 font-bold">{Math.round(((progressData.calories.weeklyAvg) / progressData.calories.goal) * 100)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-orange-400 to-orange-600 h-full rounded-full"
                  style={{ width: `${Math.min((progressData.calories.weeklyAvg / progressData.calories.goal) * 100, 100)}%` }}
                ></div>
              </div>
            </div>
            <p className="text-xs text-gray-600">Trend: {progressData.calories.trend > 0 ? '+' : ''}{progressData.calories.trend} cal</p>
          </div>

          {/* Steps */}
          <div className="bg-white/90 backdrop-blur-lg p-6 rounded-3xl shadow-xl border-2 border-white/50 hover:shadow-2xl transition-all animate-fade-in-up animation-delay-200">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">Weekly Avg</p>
                <p className="text-3xl font-bold text-blue-600">{progressData.steps.weeklyAvg}</p>
                <p className="text-xs text-gray-600 mt-1">{progressData.steps.unit}</p>
              </div>
              <span className="text-3xl">👟</span>
            </div>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-xs text-gray-600">
                <span>Goal: {progressData.steps.goal.toLocaleString()} {progressData.steps.unit}</span>
                <span className="text-gray-600 font-bold">{Math.round((progressData.steps.weeklyAvg / progressData.steps.goal) * 100)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-blue-400 to-blue-600 h-full rounded-full"
                  style={{ width: `${Math.min((progressData.steps.weeklyAvg / progressData.steps.goal) * 100, 100)}%` }}
                ></div>
              </div>
            </div>
            <p className="text-xs text-gray-600">Trend: +{progressData.steps.trend} {progressData.steps.unit}</p>
          </div>

          {/* Sleep */}
          <div className="bg-white/90 backdrop-blur-lg p-6 rounded-3xl shadow-xl border-2 border-white/50 hover:shadow-2xl transition-all animate-fade-in-up animation-delay-300">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">Weekly Avg</p>
                <p className="text-3xl font-bold text-indigo-600">{progressData.sleep.weeklyAvg}</p>
                <p className="text-xs text-gray-600 mt-1">{progressData.sleep.unit}</p>
              </div>
              <span className="text-3xl">😴</span>
            </div>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-xs text-gray-600">
                <span>Goal: {progressData.sleep.goal} {progressData.sleep.unit}</span>
                <span className="text-gray-600 font-bold">{Math.round((progressData.sleep.weeklyAvg / progressData.sleep.goal) * 100)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-indigo-400 to-indigo-600 h-full rounded-full"
                  style={{ width: `${Math.min((progressData.sleep.weeklyAvg / progressData.sleep.goal) * 100, 100)}%` }}
                ></div>
              </div>
            </div>
            <p className="text-xs text-gray-600">Trend: {progressData.sleep.trend > 0 ? '+' : ''}{progressData.sleep.trend} {progressData.sleep.unit}</p>
          </div>
        </div>

        {/* Weekly Comparison Charts */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {[
            { title: "Weight Trend", data: progressData.weight.weeklyData, color: "from-teal-400 to-teal-600", unit: "kg", icon: "⚖️" },
            { title: "Calorie Intake", data: progressData.calories.weeklyData, color: "from-orange-400 to-orange-600", unit: "cal", icon: "🔥" },
          ].map((chart) => (
            <div key={chart.title} className="bg-white/90 backdrop-blur-lg p-6 rounded-3xl shadow-xl border-2 border-white/50 animate-fade-in-up">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <span>{chart.icon}</span> {chart.title}
              </h3>
              <div className="space-y-4">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, idx) => (
                  <div key={day}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-semibold text-gray-700">{day}</span>
                      <span className={`font-bold bg-gradient-to-r ${chart.color} bg-clip-text text-transparent`}>
                        {chart.data[idx]} {chart.unit}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className={`bg-gradient-to-r ${chart.color} h-full rounded-full`}
                        style={{ width: `${(chart.data[idx] / Math.max(...chart.data)) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Milestones */}
        <div className="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-xl border-2 border-white/50 animate-fade-in-up animation-delay-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">🏆 Your Milestones</h2>
          
          <div className="space-y-3">
            {milestones.map((milestone, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-2xl flex items-center gap-4 border-2 transition-all ${
                  milestone.achieved
                    ? "bg-gradient-to-r from-green-50 to-emerald-50 border-green-200"
                    : "bg-gradient-to-r from-gray-50 to-gray-100 border-gray-200 opacity-60"
                }`}
              >
                <div className="text-3xl">{milestone.icon}</div>
                <div className="flex-1">
                  <p className={`font-bold ${milestone.achieved ? "text-green-800" : "text-gray-700"}`}>
                    {milestone.title}
                  </p>
                  <p className={`text-sm ${milestone.achieved ? "text-green-700" : "text-gray-600"}`}>
                    {milestone.date}
                  </p>
                </div>
                {milestone.achieved && (
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
