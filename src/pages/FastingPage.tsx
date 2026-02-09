export function FastingPage() {
  const fastingData = {
    today: {
      isActive: true,
      protocol: "16:8 (16 hours fasting, 8 hours eating)",
      startTime: "20:00",
      endTime: "12:00",
      hoursCompleted: 14,
      totalHours: 16,
      nextEatingWindow: "12:00 PM",
    },
    weekData: [
      { day: "Mon", completed: 16, protocol: "16:8", adherence: 100 },
      { day: "Tue", completed: 15.5, protocol: "16:8", adherence: 97 },
      { day: "Wed", completed: 16, protocol: "16:8", adherence: 100 },
      { day: "Thu", completed: 14, protocol: "16:8", adherence: 88 },
      { day: "Fri", completed: 16, protocol: "16:8", adherence: 100 },
      { day: "Sat", completed: 16, protocol: "16:8", adherence: 100 },
      { day: "Sun", completed: 14, protocol: "16:8", adherence: 88 },
    ],
  };

  const benefits = [
    { icon: "🧠", title: "Mental Clarity", desc: "Improved focus and cognitive function" },
    { icon: "⚡", title: "Increased Energy", desc: "Better energy levels throughout the day" },
    { icon: "🔥", title: "Metabolism Boost", desc: "Accelerated fat burning and metabolism" },
    { icon: "❤️", title: "Heart Health", desc: "Improved cardiovascular markers" },
    { icon: "🛡️", title: "Immunity", desc: "Enhanced immune system function" },
    { icon: "💪", title: "Longevity", desc: "Potential cellular regeneration benefits" },
  ];

  const protocols = [
    { name: "16:8", fasting: 16, eating: 8, difficulty: "Beginner", desc: "Most popular and easy to follow" },
    { name: "18:6", fasting: 18, eating: 6, difficulty: "Intermediate", desc: "Extended fasting window" },
    { name: "20:4", fasting: 20, eating: 4, difficulty: "Advanced", desc: "Only 4-hour eating window" },
    { name: "5:2", fasting: "Partial", eating: "2 days", difficulty: "Beginner", desc: "Restrict calories 2 days/week" },
  ];

  const fastingPercentage = (fastingData.today.hoursCompleted / fastingData.today.totalHours) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50 px-4 py-12 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-violet-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-down">
          <h1 className="text-5xl font-black bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-3">
            Intermittent Fasting 🌙
          </h1>
          <p className="text-lg text-gray-600">
            Track your fasting schedule and maximize the benefits of intermittent fasting
          </p>
        </div>

        {/* Today's Progress */}
        <div className="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-xl border-2 border-white/50 mb-8 animate-fade-in-up">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Today's Fast ⏱️</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Fasting Status */}
            <div>
              <div className="mb-6">
                <p className="text-sm text-gray-600 mb-2">Fasting Protocol</p>
                <p className="text-2xl font-bold text-purple-600">{fastingData.today.protocol}</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="p-4 bg-purple-50 rounded-2xl">
                  <p className="text-xs text-gray-600 mb-1">Started</p>
                  <p className="text-3xl font-bold text-purple-600">{fastingData.today.startTime}</p>
                </div>
                <div className="p-4 bg-pink-50 rounded-2xl">
                  <p className="text-xs text-gray-600 mb-1">Next Eating Window</p>
                  <p className="text-3xl font-bold text-pink-600">{fastingData.today.nextEatingWindow}</p>
                </div>
              </div>
            </div>

            {/* Circular Progress */}
            <div className="flex flex-col items-center justify-center">
              <div className="relative w-48 h-48 mb-6">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  {/* Background circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="8"
                  />
                  {/* Progress circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="url(#gradientPurple)"
                    strokeWidth="8"
                    strokeDasharray={`${(fastingPercentage / 100) * 282.7} 282.7`}
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="gradientPurple" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <p className="text-4xl font-black text-purple-600">{fastingData.today.hoursCompleted}</p>
                  <p className="text-lg font-semibold text-gray-600">of {fastingData.today.totalHours}h</p>
                </div>
              </div>
              <p className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">
                {Math.round(fastingPercentage)}%
              </p>
            </div>
          </div>

          {/* Info Box */}
          <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border-2 border-purple-100">
            <p className="text-gray-700">
              <span className="font-bold">💡 Tip:</span> You're {fastingData.today.totalHours - fastingData.today.hoursCompleted} hours away from your eating window. Stay hydrated with water, tea, or black coffee!
            </p>
          </div>
        </div>

        {/* Weekly Adherence */}
        <div className="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-xl border-2 border-white/50 mb-8 animate-fade-in-up animation-delay-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Weekly Adherence</h2>
          
          <div className="space-y-4">
            {fastingData.weekData.map((day) => (
              <div key={day.day}>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-gray-700">{day.day}</span>
                  <div className="text-right">
                    <span className="text-lg font-bold text-purple-600">{day.completed}h</span>
                    <span className={`ml-3 text-sm font-bold ${day.adherence === 100 ? 'text-green-600' : 'text-yellow-600'}`}>
                      {day.adherence}%
                    </span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all ${day.adherence === 100 ? 'bg-gradient-to-r from-green-400 to-green-600' : 'bg-gradient-to-r from-purple-400 to-pink-600'}`}
                    style={{ width: `${day.adherence}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl">
            <p className="font-semibold text-green-800">✓ Weekly Average: 96% Adherence</p>
            <p className="text-sm text-green-700 mt-1">Excellent consistency! Keep it up! 🎉</p>
          </div>
        </div>

        {/* Fasting Protocols */}
        <div className="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-xl border-2 border-white/50 mb-8 animate-fade-in-up animation-delay-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Different Fasting Protocols</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            {protocols.map((protocol) => (
              <div key={protocol.name} className="p-4 border-2 border-purple-200 rounded-2xl hover:shadow-lg transition-all">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-purple-600">{protocol.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{protocol.desc}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    protocol.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                    protocol.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {protocol.difficulty}
                  </span>
                </div>
                <div className="flex gap-4 mt-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-purple-600">{protocol.fasting}</p>
                    <p className="text-xs text-gray-600">Fasting</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-pink-600">{protocol.eating}</p>
                    <p className="text-xs text-gray-600">Eating</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-xl border-2 border-white/50 animate-fade-in-up animation-delay-300">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Benefits of Intermittent Fasting ✨</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
                <span className="text-3xl block mb-2">{benefit.icon}</span>
                <h3 className="font-bold text-gray-800">{benefit.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{benefit.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl border-l-4 border-yellow-400">
            <p className="font-semibold text-yellow-900 mb-2">⚠️ Important Note</p>
            <p className="text-sm text-yellow-800">
              Intermittent fasting may not be suitable for everyone. Consult with a healthcare professional before starting, especially if you have any medical conditions or are taking medications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
