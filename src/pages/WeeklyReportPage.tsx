export function WeeklyReportPage() {
  const weeklyData = [
    { day: "Monday", date: "Feb 3", calories: 1950, steps: 9200, sleep: 7.0, weight: 73.0 },
    { day: "Tuesday", date: "Feb 4", calories: 2100, steps: 10500, sleep: 8.0, weight: 72.8 },
    { day: "Wednesday", date: "Feb 5", calories: 1800, steps: 8100, sleep: 7.5, weight: 72.7 },
    { day: "Thursday", date: "Feb 6", calories: 2200, steps: 11000, sleep: 6.5, weight: 72.6 },
    { day: "Friday", date: "Feb 7", calories: 1750, steps: 7800, sleep: 8.5, weight: 72.5 },
    { day: "Saturday", date: "Feb 8", calories: 1900, steps: 8500, sleep: 8.0, weight: 72.4 },
    { day: "Sunday", date: "Feb 9", calories: 1850, steps: 8432, sleep: 7.5, weight: 72.5 },
  ];

  const weeklyStats = {
    totalCalories: weeklyData.reduce((sum, d) => sum + d.calories, 0),
    avgCalories: Math.round(weeklyData.reduce((sum, d) => sum + d.calories, 0) / 7),
    totalSteps: weeklyData.reduce((sum, d) => sum + d.steps, 0),
    avgSteps: Math.round(weeklyData.reduce((sum, d) => sum + d.steps, 0) / 7),
    avgSleep: (weeklyData.reduce((sum, d) => sum + d.sleep, 0) / 7).toFixed(1),
    weightChange: parseFloat((weeklyData[0].weight - weeklyData[6].weight).toFixed(2)),
  };

  const performanceCards = [
    {
      title: "Calorie Management",
      value: `${weeklyStats.avgCalories} cal/day`,
      goal: "2,200 cal",
      percentage: Math.round((weeklyStats.avgCalories / 2200) * 100),
      icon: "🔥",
      color: "from-orange-400 to-orange-600",
      performanceText: weeklyStats.avgCalories <= 2200 ? "✓ On Track" : "⚠ Slightly Over",
    },
    {
      title: "Steps Goal",
      value: `${weeklyStats.avgSteps.toLocaleString()} steps/day`,
      goal: "10,000 steps",
      percentage: Math.round((weeklyStats.avgSteps / 10000) * 100),
      icon: "👟",
      color: "from-blue-400 to-blue-600",
      performanceText: weeklyStats.avgSteps >= 10000 ? "✓ Goal Met" : "⚠ Need More Steps",
    },
    {
      title: "Sleep Quality",
      value: `${weeklyStats.avgSleep} hours/night`,
      goal: "8 hours",
      percentage: Math.round((parseFloat(weeklyStats.avgSleep) / 8) * 100),
      icon: "😴",
      color: "from-indigo-400 to-indigo-600",
      performanceText: parseFloat(weeklyStats.avgSleep) >= 7.5 ? "✓ Good Sleep" : "⚠ Improve Sleep",
    },
    {
      title: "Weight Progress",
      value: `${weeklyStats.weightChange.toFixed(2)} kg`,
      goal: "Losing 0.5-1 kg/week",
      percentage: 80,
      icon: "⚖️",
      color: "from-green-400 to-green-600",
      performanceText: weeklyStats.weightChange < 0 ? "✓ On Track" : "⚠ Slight Gain",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 px-4 py-12 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-rose-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-down">
          <h1 className="text-5xl font-black bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 bg-clip-text text-transparent mb-3">
            Weekly Report 📋
          </h1>
          <p className="text-lg text-gray-600">
            Your comprehensive health and fitness summary for the week of Feb 3-9, 2026
          </p>
        </div>

        {/* Performance Summary Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {performanceCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white/90 backdrop-blur-lg p-6 rounded-3xl shadow-xl border-2 border-white/50 hover:shadow-2xl transition-all animate-fade-in-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{card.title}</p>
                  <p className="text-2xl font-bold text-gray-800">{card.value}</p>
                </div>
                <span className="text-3xl">{card.icon}</span>
              </div>

              <div className="mb-4">
                <div className="flex justify-between text-xs text-gray-600 mb-2">
                  <span>Goal: {card.goal}</span>
                  <span className="font-bold">{card.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className={`bg-gradient-to-r ${card.color} h-full rounded-full transition-all`}
                    style={{ width: `${Math.min(card.percentage, 100)}%` }}
                  ></div>
                </div>
              </div>

              <p className={`text-sm font-semibold ${card.performanceText.includes('✓') ? 'text-green-600' : 'text-yellow-600'}`}>
                {card.performanceText}
              </p>
            </div>
          ))}
        </div>

        {/* Daily Breakdown Table */}
        <div className="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-xl border-2 border-white/50 mb-8 animate-fade-in-up animation-delay-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Daily Breakdown</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-300 bg-gray-50">
                  <th className="text-left py-4 px-6 font-bold text-gray-800">Day</th>
                  <th className="text-center py-4 px-6 font-bold text-gray-800">🔥 Calories</th>
                  <th className="text-center py-4 px-6 font-bold text-gray-800">👟 Steps</th>
                  <th className="text-center py-4 px-6 font-bold text-gray-800">😴 Sleep</th>
                  <th className="text-center py-4 px-6 font-bold text-gray-800">⚖️ Weight</th>
                </tr>
              </thead>
              <tbody>
                {weeklyData.map((day, idx) => (
                  <tr key={idx} className="border-b border-gray-200 hover:bg-pink-50 transition-colors">
                    <td className="py-4 px-6">
                      <p className="font-bold text-gray-800">{day.day}</p>
                      <p className="text-xs text-gray-500">{day.date}</p>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <p className="font-bold text-orange-600 text-lg">{day.calories}</p>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <p className="font-bold text-blue-600 text-lg">{day.steps.toLocaleString()}</p>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <p className={`font-bold text-lg ${day.sleep >= 8 ? 'text-green-600' : 'text-yellow-600'}`}>
                        {day.sleep}h
                      </p>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <p className="font-bold text-gray-800 text-lg">{day.weight}</p>
                      <p className={`text-xs mt-1 ${idx < weeklyData.length - 1 && weeklyData[idx].weight > weeklyData[idx + 1].weight ? 'text-green-600 font-bold' : 'text-gray-500'}`}>
                        {idx < weeklyData.length - 1 && weeklyData[idx].weight > weeklyData[idx + 1].weight ? '↓' : idx < weeklyData.length - 1 && weeklyData[idx].weight < weeklyData[idx + 1].weight ? '↑' : '-'}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Weekly Summary Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Best Days */}
          <div className="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-xl border-2 border-white/50 animate-fade-in-up animation-delay-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">⭐ Achievements This Week</h2>
            
            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border-l-4 border-blue-400">
                <p className="font-semibold text-blue-900">Most Active Day</p>
                <p className="text-lg font-bold text-blue-700 mt-1">Thursday - 11,000 steps 🎯</p>
              </div>
              
              <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border-l-4 border-purple-400">
                <p className="font-semibold text-purple-900">Best Sleep Night</p>
                <p className="text-lg font-bold text-purple-700 mt-1">Friday - 8.5 hours 😴</p>
              </div>

              <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border-l-4 border-green-400">
                <p className="font-semibold text-green-900">Weight Loss</p>
                <p className="text-lg font-bold text-green-700 mt-1">-0.5 kg this week 💪</p>
              </div>

              <div className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl border-l-4 border-yellow-400">
                <p className="font-semibold text-yellow-900">Consistency Score</p>
                <p className="text-lg font-bold text-yellow-700 mt-1">95% adherence 🏆</p>
              </div>
            </div>
          </div>

          {/* Recommendations */}
          <div className="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-xl border-2 border-white/50 animate-fade-in-up animation-delay-300">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">💡 Recommendations</h2>
            
            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl">
                <p className="font-semibold text-orange-900">📊 Calorie Intake</p>
                <p className="text-sm text-orange-800 mt-2">Great job staying within your calorie goals! Maintain this consistency.</p>
              </div>

              <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl">
                <p className="font-semibold text-blue-900">👟 Daily Steps</p>
                <p className="text-sm text-blue-800 mt-2">Sunday and Friday fell short. Try adding a 20-minute walk to reach 10,000 steps.</p>
              </div>

              <div className="p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl">
                <p className="font-semibold text-indigo-900">😴 Sleep Quality</p>
                <p className="text-sm text-indigo-800 mt-2">Thursday was below 7 hours. Establish a consistent bedtime routine.</p>
              </div>

              <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
                <p className="font-semibold text-green-900">⚖️ Weight Tracking</p>
                <p className="text-sm text-green-800 mt-2">Excellent progress! You're on track with a healthy weight loss pace.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Goals for Next Week */}
        <div className="mt-8 bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-xl border-2 border-white/50 animate-fade-in-up animation-delay-400">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">🎯 Goals for Next Week</h2>
          
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { icon: "🔥", title: "Maintain Calories", goal: "1,900-2,200 cal/day", status: "In Progress" },
              { icon: "👟", title: "Increase Steps", goal: "Average 9,500 steps/day", status: "Challenge" },
              { icon: "😴", title: "Improve Sleep", goal: "7+ hours every night", status: "Important" },
              { icon: "⚖️", title: "Weight Goal", goal: "Target: 72 kg", status: "On Track" },
            ].map((goal, idx) => (
              <div key={idx} className="p-4 border-2 border-gray-200 rounded-2xl hover:border-pink-300 transition-all">
                <p className="text-3xl mb-2">{goal.icon}</p>
                <p className="font-bold text-gray-800 text-sm">{goal.title}</p>
                <p className="text-xs text-gray-600 mt-2">{goal.goal}</p>
                <p className={`text-xs font-bold mt-3 ${goal.status === 'On Track' ? 'text-green-600' : goal.status === 'In Progress' ? 'text-blue-600' : 'text-purple-600'}`}>
                  {goal.status}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
