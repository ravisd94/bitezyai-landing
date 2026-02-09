export function GoalsPage() {
  const goals = [
    { id: 1, title: "Weight Loss", target: "70 kg", current: "72.5 kg", progress: 75, icon: "⚖️", description: "Lose 2.5 kg to reach your target weight" },
    { id: 2, title: "Daily Steps", target: "10,000", current: "8,432", progress: 84, icon: "👟", description: "Walk 10,000 steps every day for better fitness" },
    { id: 3, title: "Calories", target: "2,200 cal", current: "1,850 cal", progress: 84, icon: "🔥", description: "Maintain daily calorie intake within limits" },
    { id: 4, title: "Sleep", target: "8 hrs", current: "7.5 hrs", progress: 94, icon: "😴", description: "Get 8 hours of quality sleep nightly" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-cyan-50 px-4 py-12 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-down">
          <h1 className="text-5xl font-black bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent mb-3">
            Your Health Goals 🎯
          </h1>
          <p className="text-lg text-gray-600">
            Track your progress towards your personal wellness objectives
          </p>
        </div>

        {/* Goals Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {goals.map((goal) => (
            <div
              key={goal.id}
              className="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-xl border-2 border-white/50 hover:shadow-2xl transition-all transform hover:scale-105 animate-fade-in-up"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{goal.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{goal.description}</p>
                </div>
                <span className="text-5xl">{goal.icon}</span>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-3">
                  <div>
                    <p className="text-sm text-gray-600">Current</p>
                    <p className="text-2xl font-bold text-gray-800">{goal.current}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Target</p>
                    <p className="text-2xl font-bold text-gray-800">{goal.target}</p>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 h-full rounded-full transition-all duration-500"
                    style={{ width: `${goal.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Progress Percentage */}
              <div className="flex items-center justify-between">
                <span className="text-3xl font-black text-transparent bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text">
                  {goal.progress}%
                </span>
                <button className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-semibold hover:shadow-lg transition-all">
                  Update
                </button>
              </div>

              {/* Goal Details */}
              <div className="mt-6 p-4 bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl">
                <p className="text-sm text-gray-700">
                  {goal.id === 1 && "You're 75% towards your weight loss goal. Keep up the great work! 💪"}
                  {goal.id === 2 && "You're almost there! Just 1,568 steps away from today's goal. 🏃"}
                  {goal.id === 3 && "Excellent calorie management. You're 84% through your daily limit. 🎉"}
                  {goal.id === 4 && "Great sleep consistency! You're getting close to your 8-hour target. 😴"}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Goals Summary Section */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {/* Overall Progress */}
          <div className="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-xl border-2 border-white/50 animate-fade-in-up">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">📈 Overall Progress</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-pink-50 rounded-2xl">
                <span className="font-semibold text-gray-700">Average Completion</span>
                <span className="text-2xl font-bold text-pink-600">84%</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-purple-50 rounded-2xl">
                <span className="font-semibold text-gray-700">Goals on Track</span>
                <span className="text-2xl font-bold text-purple-600">3 of 4</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-cyan-50 rounded-2xl">
                <span className="font-semibold text-gray-700">Week Streak</span>
                <span className="text-2xl font-bold text-cyan-600">12 days</span>
              </div>
            </div>
          </div>

          {/* Tips & Suggestions */}
          <div className="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-xl border-2 border-white/50 animate-fade-in-up">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">💡 Tips to Achieve Your Goals</h2>
            <div className="space-y-3">
              <div className="flex gap-3 p-3 bg-yellow-50 rounded-2xl">
                <span className="text-xl">🚶</span>
                <p className="text-sm text-gray-700">Walk for 30 minutes daily to increase your step count</p>
              </div>
              <div className="flex gap-3 p-3 bg-blue-50 rounded-2xl">
                <span className="text-xl">🥗</span>
                <p className="text-sm text-gray-700">Focus on whole foods and track your meals consistently</p>
              </div>
              <div className="flex gap-3 p-3 bg-green-50 rounded-2xl">
                <span className="text-xl">😴</span>
                <p className="text-sm text-gray-700">Establish a consistent sleep schedule for better rest</p>
              </div>
              <div className="flex gap-3 p-3 bg-red-50 rounded-2xl">
                <span className="text-xl">⚡</span>
                <p className="text-sm text-gray-700">Increase your physical activity with workouts or exercises</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
