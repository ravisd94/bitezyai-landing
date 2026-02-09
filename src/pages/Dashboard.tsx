export function Dashboard() {
  // Mock user data for today
  const todayData = {
    calories: 1850,
    calorieGoal: 2200,
    weight: 72.5,
    weightUnit: "kg",
    steps: 8432,
    stepsGoal: 10000,
    exercise: {
      duration: 45,
      type: "Running",
      calories: 650,
    },
    sleep: {
      hours: 7.5,
      quality: "Good",
      target: 8,
    },
    fasting: {
      isActive: true,
      startTime: "20:00",
      endTime: "12:00",
      hoursCompleted: 14,
      totalHours: 16,
    },
  };

  // Mock user goals
  const goals = [
    { id: 1, title: "Weight Loss", target: "70 kg", current: "72.5 kg", progress: 75, icon: "⚖️" },
    { id: 2, title: "Daily Steps", target: "10,000", current: "8,432", progress: 84, icon: "👟" },
    { id: 3, title: "Calories", target: "2,200", current: "1,850", progress: 84, icon: "🔥" },
    { id: 4, title: "Sleep", target: "8 hrs", current: "7.5 hrs", progress: 94, icon: "😴" },
  ];

  // Mock weekly data
  const weeklyData = [
    { day: "Mon", calories: 1950, steps: 9200, sleep: 7, weight: 73 },
    { day: "Tue", calories: 2100, steps: 10500, sleep: 8, weight: 72.8 },
    { day: "Wed", calories: 1800, steps: 8100, sleep: 7.5, weight: 72.7 },
    { day: "Thu", calories: 2200, steps: 11000, sleep: 6.5, weight: 72.6 },
    { day: "Fri", calories: 1750, steps: 7800, sleep: 8.5, weight: 72.5 },
    { day: "Sat", calories: 1900, steps: 8500, sleep: 8, weight: 72.4 },
    { day: "Sun", calories: 1850, steps: 8432, sleep: 7.5, weight: 72.5 },
  ];

  // Calculate weekly averages
  const weeklyAvg = {
    calories: Math.round(weeklyData.reduce((sum, d) => sum + d.calories, 0) / 7),
    steps: Math.round(weeklyData.reduce((sum, d) => sum + d.steps, 0) / 7),
    sleep: (weeklyData.reduce((sum, d) => sum + d.sleep, 0) / 7).toFixed(1),
    weightChange: parseFloat((weeklyData[0].weight - weeklyData[6].weight).toFixed(2)),
  };

  const caloriePercentage = (todayData.calories / todayData.calorieGoal) * 100;
  const stepsPercentage = (todayData.steps / todayData.stepsGoal) * 100;
  const fastingPercentage = (todayData.fasting.hoursCompleted / todayData.fasting.totalHours) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-cyan-50 px-4 py-12 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Welcome Header */}
        <div className="mb-12 animate-fade-in-down">
          <h1 className="text-5xl font-black bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent mb-3">
            Today's Overview 📊
          </h1>
          <p className="text-lg text-gray-600">
            {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Top Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 animate-fade-in-up">
          {/* Calories Card */}
          <div className="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-xl border-2 border-white/50 hover:shadow-2xl transition-all transform hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-600 font-semibold">Calories</h3>
              <div className="text-3xl">🔥</div>
            </div>
            <p className="text-4xl font-black text-orange-600 mb-2">{todayData.calories}</p>
            <p className="text-sm text-gray-600 mb-4">Goal: {todayData.calorieGoal}</p>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-orange-400 to-orange-600 h-3 rounded-full transition-all"
                style={{ width: `${Math.min(caloriePercentage, 100)}%` }}
              ></div>
            </div>
            <p className="text-xs text-gray-500 mt-2">{caloriePercentage.toFixed(0)}% of goal</p>
          </div>

          {/* Weight Card */}
          <div className="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-xl border-2 border-white/50 hover:shadow-2xl transition-all transform hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-600 font-semibold">Weight</h3>
              <div className="text-3xl">⚖️</div>
            </div>
            <p className="text-4xl font-black text-blue-600 mb-2">
              {todayData.weight}
              <span className="text-lg text-gray-600 ml-1">{todayData.weightUnit}</span>
            </p>
            <p className="text-sm text-gray-600 mb-4">Last updated today</p>
            <div className="bg-blue-50 px-3 py-2 rounded-lg">
              <p className="text-xs text-blue-700 font-semibold">Trend: ↓ 0.3 kg this week</p>
            </div>
          </div>

          {/* Steps Card */}
          <div className="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-xl border-2 border-white/50 hover:shadow-2xl transition-all transform hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-600 font-semibold">Steps</h3>
              <div className="text-3xl">👟</div>
            </div>
            <p className="text-4xl font-black text-green-600 mb-2">{todayData.steps.toLocaleString()}</p>
            <p className="text-sm text-gray-600 mb-4">Goal: {todayData.stepsGoal.toLocaleString()}</p>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full transition-all"
                style={{ width: `${Math.min(stepsPercentage, 100)}%` }}
              ></div>
            </div>
            <p className="text-xs text-gray-500 mt-2">{stepsPercentage.toFixed(0)}% of goal</p>
          </div>

          {/* Exercise Card */}
          <div className="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-xl border-2 border-white/50 hover:shadow-2xl transition-all transform hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-600 font-semibold">Exercise</h3>
              <div className="text-3xl">💪</div>
            </div>
            <p className="text-4xl font-black text-purple-600 mb-2">{todayData.exercise.duration}</p>
            <p className="text-sm text-gray-600 mb-4">mins · {todayData.exercise.type}</p>
            <div className="bg-purple-50 px-3 py-2 rounded-lg">
              <p className="text-xs text-purple-700 font-semibold">Burned: {todayData.exercise.calories} cal</p>
            </div>
          </div>

          {/* Sleep Card */}
          <div className="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-xl border-2 border-white/50 hover:shadow-2xl transition-all transform hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-600 font-semibold">Sleep</h3>
              <div className="text-3xl">😴</div>
            </div>
            <p className="text-4xl font-black text-indigo-600 mb-2">{todayData.sleep.hours}h</p>
            <p className="text-sm text-gray-600 mb-4">Target: {todayData.sleep.target}h</p>
            <div className="bg-indigo-50 px-3 py-2 rounded-lg">
              <p className="text-xs text-indigo-700 font-semibold">Quality: {todayData.sleep.quality}</p>
            </div>
          </div>
        </div>

        {/* Goals Section */}
        <div className="mb-8 animate-fade-in-up animation-delay-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">🎯 Your Goals</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {goals.map((goal) => (
              <div key={goal.id} className="bg-white/90 backdrop-blur-lg p-6 rounded-3xl shadow-xl border-2 border-white/50">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-gray-800">{goal.title}</h3>
                  <div className="text-2xl">{goal.icon}</div>
                </div>
                <p className="text-sm text-gray-600 mb-2">Current: <span className="font-bold text-gray-800">{goal.current}</span></p>
                <p className="text-sm text-gray-600 mb-3">Target: <span className="font-bold text-gray-800">{goal.target}</span></p>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-pink-400 to-purple-600 h-2.5 rounded-full transition-all"
                    style={{ width: `${Math.min(goal.progress, 100)}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-2 text-right">{goal.progress}%</p>
              </div>
            ))}
          </div>
        </div>

        {/* Intermittent Fasting Section */}
        <div className="mb-8 bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-xl border-2 border-white/50 animate-fade-in-up animation-delay-200">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">⏱️ Intermittent Fasting</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Fasting Status */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl border-2 border-orange-200">
              <h3 className="font-bold text-gray-800 mb-4">Current Status</h3>
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">Fasting Window:</p>
                <p className="text-2xl font-black text-orange-600 mb-3">{todayData.fasting.startTime} - {todayData.fasting.endTime}</p>
                <div className="bg-white/50 px-3 py-2 rounded-lg inline-block">
                  <p className="text-sm font-semibold text-orange-700">🚀 {todayData.fasting.hoursCompleted}h of {todayData.fasting.totalHours}h</p>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl border-2 border-purple-200">
              <h3 className="font-bold text-gray-800 mb-4">Progress</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-700">Fasting Progress</span>
                    <span className="text-sm font-bold text-purple-700">{fastingPercentage.toFixed(0)}%</span>
                  </div>
                  <div className="w-full bg-white/50 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-purple-400 to-purple-600 h-3 rounded-full transition-all"
                      style={{ width: `${fastingPercentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-2xl border-2 border-pink-200">
              <h3 className="font-bold text-gray-800 mb-4">Benefits</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ Improved Metabolism</li>
                <li>✓ Better Insulin Sensitivity</li>
                <li>✓ Cellular Repair</li>
                <li>✓ Weight Management</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Nutrition & Progress Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Nutrition Section */}
          <div className="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-xl border-2 border-white/50 animate-fade-in-up">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">📈 Nutrition Breakdown</h3>
            <div className="space-y-6">
              {/* Protein */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 font-semibold">Protein</span>
                  <span className="text-gray-600">125g / 150g</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-red-400 to-red-600 h-3 rounded-full" style={{ width: '83%' }}></div>
                </div>
                <p className="text-xs text-red-600 mt-1">83% of goal</p>
              </div>

              {/* Carbs */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 font-semibold">Carbs</span>
                  <span className="text-gray-600">220g / 280g</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-3 rounded-full" style={{ width: '79%' }}></div>
                </div>
                <p className="text-xs text-blue-600 mt-1">79% of goal</p>
              </div>

              {/* Fats */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 font-semibold">Fats</span>
                  <span className="text-gray-600">58g / 73g</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-3 rounded-full" style={{ width: '79%' }}></div>
                </div>
                <p className="text-xs text-yellow-600 mt-1">79% of goal</p>
              </div>

              {/* Fiber */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 font-semibold">Fiber</span>
                  <span className="text-gray-600">28g / 30g</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full" style={{ width: '93%' }}></div>
                </div>
                <p className="text-xs text-green-600 mt-1">93% of goal</p>
              </div>
            </div>
          </div>

          {/* Progress & Trends */}
          <div className="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-xl border-2 border-white/50 animate-fade-in-up animation-delay-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">📊 This Week's Progress</h3>
            <div className="space-y-5">
              {/* Weight Trend */}
              <div className="p-4 bg-blue-50 rounded-2xl border border-blue-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-gray-800">Weight Trend</span>
                  <span className="text-sm text-green-600 font-bold">↓ {weeklyAvg.weightChange} kg</span>
                </div>
                <p className="text-sm text-gray-600">Started: 73 kg → Now: 72.5 kg</p>
              </div>

              {/* Calories Average */}
              <div className="p-4 bg-orange-50 rounded-2xl border border-orange-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-gray-800">Avg Calories</span>
                  <span className="text-sm text-orange-600 font-bold">{weeklyAvg.calories}</span>
                </div>
                <p className="text-sm text-gray-600">Daily average this week</p>
              </div>

              {/* Steps Average */}
              <div className="p-4 bg-green-50 rounded-2xl border border-green-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-gray-800">Avg Steps</span>
                  <span className="text-sm text-green-600 font-bold">{weeklyAvg.steps.toLocaleString()}</span>
                </div>
                <p className="text-sm text-gray-600">Daily average this week</p>
              </div>

              {/* Sleep Average */}
              <div className="p-4 bg-indigo-50 rounded-2xl border border-indigo-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-gray-800">Avg Sleep</span>
                  <span className="text-sm text-indigo-600 font-bold">{weeklyAvg.sleep}h</span>
                </div>
                <p className="text-sm text-gray-600">Daily average this week</p>
              </div>
            </div>
          </div>
        </div>

        {/* Weekly Report Section */}
        <div className="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-xl border-2 border-white/50 animate-fade-in-up animation-delay-300 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">📋 Weekly Report</h2>
          
          {/* Weekly Chart Data */}
          <div className="overflow-x-auto">
            <table className="w-full text-center">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="px-4 py-3 text-gray-700 font-bold">Day</th>
                  <th className="px-4 py-3 text-gray-700 font-bold">Calories</th>
                  <th className="px-4 py-3 text-gray-700 font-bold">Steps</th>
                  <th className="px-4 py-3 text-gray-700 font-bold">Sleep</th>
                  <th className="px-4 py-3 text-gray-700 font-bold">Weight</th>
                </tr>
              </thead>
              <tbody>
                {weeklyData.map((day, idx) => (
                  <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 font-semibold text-gray-800">{day.day}</td>
                    <td className="px-4 py-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        day.calories <= 2000 ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                      }`}>
                        {day.calories}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        day.steps >= 8000 ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'
                      }`}>
                        {day.steps.toLocaleString()}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        day.sleep >= 7.5 ? 'bg-indigo-100 text-indigo-700' : 'bg-red-100 text-red-700'
                      }`}>
                        {day.sleep}h
                      </span>
                    </td>
                    <td className="px-4 py-3 font-semibold text-gray-800">{day.weight} kg</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Weekly Summary */}
          <div className="grid md:grid-cols-4 gap-4 mt-8">
            <div className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl border border-orange-200">
              <p className="text-sm text-gray-600 mb-1">Weekly Avg Calories</p>
              <p className="text-2xl font-black text-orange-600">{weeklyAvg.calories}</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border border-blue-200">
              <p className="text-sm text-gray-600 mb-1">Weekly Avg Steps</p>
              <p className="text-2xl font-black text-blue-600">{weeklyAvg.steps.toLocaleString()}</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl border border-indigo-200">
              <p className="text-sm text-gray-600 mb-1">Weekly Avg Sleep</p>
              <p className="text-2xl font-black text-indigo-600">{weeklyAvg.sleep}h</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border border-green-200">
              <p className="text-sm text-gray-600 mb-1">Weight Lost</p>
              <p className="text-2xl font-black text-green-600">↓ {Math.abs(weeklyAvg.weightChange)} kg</p>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="mb-8 animate-fade-in-up animation-delay-300">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">📈 Analytics & Trends</h2>
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Calorie Trend Chart */}
            <div className="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-xl border-2 border-white/50">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Weekly Calorie Intake</h3>
              <div className="space-y-4">
                {weeklyData.map((day, idx) => {
                  const percentage = (day.calories / 2500) * 100;
                  const color = day.calories > 2200 ? 'from-red-400 to-orange-400' : day.calories < 1800 ? 'from-blue-400 to-cyan-400' : 'from-green-400 to-emerald-400';
                  return (
                    <div key={idx} className="flex items-center gap-4">
                      <span className="w-10 font-bold text-gray-700">{day.day}</span>
                      <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div
                          className={`bg-gradient-to-r ${color} h-3 rounded-full transition-all`}
                          style={{ width: `${Math.min(percentage, 100)}%` }}
                        ></div>
                      </div>
                      <span className="w-16 text-right font-semibold text-gray-700">{day.calories}</span>
                    </div>
                  );
                })}
                <div className="mt-4 pt-4 border-t-2 border-gray-200">
                  <p className="text-sm text-gray-600">Daily Goal: <span className="font-bold text-gray-800">2,200 cal</span></p>
                </div>
              </div>
            </div>

            {/* Macro Distribution Pie Chart */}
            <div className="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-xl border-2 border-white/50">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Today's Macro Distribution</h3>
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <svg width="200" height="200" viewBox="0 0 200 200" className="mx-auto">
                    {/* Protein - Red */}
                    <circle cx="100" cy="100" r="90" fill="none" stroke="#ef4444" strokeWidth="30" 
                      strokeDasharray="113.1 376.99" strokeDashoffset="0" />
                    {/* Carbs - Blue */}
                    <circle cx="100" cy="100" r="90" fill="none" stroke="#3b82f6" strokeWidth="30" 
                      strokeDasharray="150.8 376.99" strokeDashoffset="-113.1" />
                    {/* Fats - Orange */}
                    <circle cx="100" cy="100" r="90" fill="none" stroke="#f97316" strokeWidth="30" 
                      strokeDasharray="113.09 376.99" strokeDashoffset="-263.9" />
                    <text x="100" y="110" textAnchor="middle" className="text-2xl font-bold" fill="#1f2937">
                      100%
                    </text>
                  </svg>
                </div>
                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                    <div>
                      <p className="text-sm font-semibold text-gray-800">Protein</p>
                      <p className="text-xs text-gray-600">83g / 100g (83%)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                    <div>
                      <p className="text-sm font-semibold text-gray-800">Carbs</p>
                      <p className="text-xs text-gray-600">155g / 200g (78%)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                    <div>
                      <p className="text-sm font-semibold text-gray-800">Fats</p>
                      <p className="text-xs text-gray-600">60g / 70g (86%)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Weight Progress Chart */}
            <div className="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-xl border-2 border-white/50 lg:col-span-2">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Weekly Progress Overview</h3>
              <div className="grid md:grid-cols-4 gap-4 mb-6">
                <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-4 rounded-2xl border border-pink-200">
                  <p className="text-xs text-pink-700 mb-1">Weight Trend</p>
                  <p className="text-2xl font-bold text-pink-600">73kg → 72.5kg</p>
                  <p className="text-xs text-green-600 font-semibold mt-1">↓ 0.5kg lost</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-2xl border border-blue-200">
                  <p className="text-xs text-blue-700 mb-1">Avg Steps</p>
                  <p className="text-2xl font-bold text-blue-600">{weeklyAvg.steps.toLocaleString()}</p>
                  <p className="text-xs text-blue-600 font-semibold mt-1">Per day avg</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-2xl border border-purple-200">
                  <p className="text-xs text-purple-700 mb-1">Avg Sleep</p>
                  <p className="text-2xl font-bold text-purple-600">{weeklyAvg.sleep}h</p>
                  <p className="text-xs text-purple-600 font-semibold mt-1">Per night avg</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-2xl border border-green-200">
                  <p className="text-xs text-green-700 mb-1">Avg Calories</p>
                  <p className="text-2xl font-bold text-green-600">{weeklyAvg.calories}</p>
                  <p className="text-xs text-green-600 font-semibold mt-1">Per day avg</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-gray-100 to-gray-50 p-4 rounded-2xl">
                <svg width="100%" height="120" viewBox="0 0 700 120" className="w-full">
                  {/* Grid lines */}
                  <line x1="0" y1="20" x2="700" y2="20" stroke="#e5e7eb" strokeWidth="1" />
                  <line x1="0" y1="60" x2="700" y2="60" stroke="#e5e7eb" strokeWidth="1" />
                  <line x1="0" y1="100" x2="700" y2="100" stroke="#e5e7eb" strokeWidth="1" />
                  
                  {/* Line chart - Calories */}
                  <polyline
                    fill="none"
                    stroke="#8b5cf6"
                    strokeWidth="3"
                    points={weeklyData.map((d, i) => `${i * 100 + 20},${100 - (d.calories / 2500) * 80}`).join(' ')}
                  />
                  
                  {/* Data points */}
                  {weeklyData.map((d, i) => (
                    <circle
                      key={i}
                      cx={i * 100 + 20}
                      cy={100 - (d.calories / 2500) * 80}
                      r="4"
                      fill="#8b5cf6"
                    />
                  ))}
                  
                  {/* X-axis labels */}
                  {weeklyData.map((d, i) => (
                    <text key={i} x={i * 100 + 20} y="115" textAnchor="middle" className="text-xs" fill="#6b7280">
                      {d.day}
                    </text>
                  ))}
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-xl border-2 border-white/50 animate-fade-in-up animation-delay-400">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">⚡ Quick Actions</h3>
          <div className="grid md:grid-cols-4 gap-4">
            <button className="p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl border-2 border-orange-200 hover:border-orange-400 transition-all transform hover:scale-105 text-center">
              <div className="text-3xl mb-2">🍽️</div>
              <p className="font-semibold text-gray-800">Log Meal</p>
            </button>
            <button className="p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl border-2 border-purple-200 hover:border-purple-400 transition-all transform hover:scale-105 text-center">
              <div className="text-3xl mb-2">💪</div>
              <p className="font-semibold text-gray-800">Log Workout</p>
            </button>
            <button className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl border-2 border-blue-200 hover:border-blue-400 transition-all transform hover:scale-105 text-center">
              <div className="text-3xl mb-2">⚖️</div>
              <p className="font-semibold text-gray-800">Update Weight</p>
            </button>
            <button className="p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl border-2 border-green-200 hover:border-green-400 transition-all transform hover:scale-105 text-center">
              <div className="text-3xl mb-2">😴</div>
              <p className="font-semibold text-gray-800">Log Sleep</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
