export function SleepPage() {
  const sleepData = {
    lastNight: {
      hours: 7.5,
      quality: "Good",
      target: 8,
      bedTime: "23:30",
      wakeTime: "07:00",
      deepSleep: 2.5,
      remSleep: 1.5,
      lightSleep: 3.5,
    },
    weekData: [
      { day: "Mon", hours: 7.0, quality: "Fair" },
      { day: "Tue", hours: 8.0, quality: "Excellent" },
      { day: "Wed", hours: 7.5, quality: "Good" },
      { day: "Thu", hours: 6.5, quality: "Fair" },
      { day: "Fri", hours: 8.5, quality: "Excellent" },
      { day: "Sat", hours: 8.0, quality: "Good" },
      { day: "Sun", hours: 7.5, quality: "Good" },
    ],
    monthAverage: 7.6,
  };

  const getQualityColor = (quality: string) => {
    switch(quality) {
      case "Excellent": return "text-green-600 bg-green-50";
      case "Good": return "text-blue-600 bg-blue-50";
      case "Fair": return "text-yellow-600 bg-yellow-50";
      default: return "text-gray-600 bg-gray-50";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 px-4 py-12 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-down">
          <h1 className="text-5xl font-black bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-3">
            Sleep Tracking 😴
          </h1>
          <p className="text-lg text-gray-600">
            Monitor your sleep patterns and quality for better health
          </p>
        </div>

        {/* Last Night Summary */}
        <div className="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-xl border-2 border-white/50 mb-8 animate-fade-in-up">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Last Night</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Sleep Duration */}
            <div>
              <div className="flex items-end justify-between mb-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Sleep Duration</p>
                  <p className="text-5xl font-black text-indigo-600">{sleepData.lastNight.hours}h</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600 mb-1">Target</p>
                  <p className="text-3xl font-bold text-gray-600">{sleepData.lastNight.target}h</p>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-indigo-400 to-blue-400 h-full rounded-full"
                  style={{ width: `${(sleepData.lastNight.hours / sleepData.lastNight.target) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Sleep Quality & Times */}
            <div className="space-y-4">
              <div className={`p-4 rounded-2xl flex justify-between items-center ${getQualityColor(sleepData.lastNight.quality)}`}>
                <span className="font-semibold">Sleep Quality</span>
                <span className="text-xl font-bold">{sleepData.lastNight.quality}</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-indigo-50 rounded-2xl">
                  <p className="text-xs text-gray-600 mb-1">Bed Time</p>
                  <p className="text-2xl font-bold text-indigo-600">{sleepData.lastNight.bedTime}</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-2xl">
                  <p className="text-xs text-gray-600 mb-1">Wake Time</p>
                  <p className="text-2xl font-bold text-blue-600">{sleepData.lastNight.wakeTime}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sleep Stages */}
        <div className="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-xl border-2 border-white/50 mb-8 animate-fade-in-up animation-delay-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Sleep Stages Breakdown</h2>
          
          <div className="space-y-4">
            {[
              { name: "Deep Sleep", hours: sleepData.lastNight.deepSleep, color: "from-purple-500 to-indigo-500", icon: "😴" },
              { name: "REM Sleep", hours: sleepData.lastNight.remSleep, color: "from-blue-500 to-cyan-500", icon: "🌙" },
              { name: "Light Sleep", hours: sleepData.lastNight.lightSleep, color: "from-cyan-500 to-teal-500", icon: "✨" },
            ].map((stage) => {
              const percentage = (stage.hours / sleepData.lastNight.hours) * 100;
              return (
                <div key={stage.name}>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{stage.icon}</span>
                      <span className="font-semibold text-gray-700">{stage.name}</span>
                    </div>
                    <span className="text-lg font-bold text-gray-800">{stage.hours}h ({Math.round(percentage)}%)</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                    <div
                      className={`bg-gradient-to-r ${stage.color} h-full rounded-full transition-all duration-500`}
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Weekly Sleep Data */}
        <div className="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-xl border-2 border-white/50 mb-8 animate-fade-in-up animation-delay-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">This Week's Sleep</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Day</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-700">Hours</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-700">Quality</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-700">Progress</th>
                </tr>
              </thead>
              <tbody>
                {sleepData.weekData.map((day, idx) => (
                  <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50 transition-all">
                    <td className="py-3 px-4 font-semibold text-gray-800">{day.day}</td>
                    <td className="py-3 px-4 text-center text-lg font-bold text-indigo-600">{day.hours}h</td>
                    <td className="py-3 px-4 text-center">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getQualityColor(day.quality)}`}>
                        {day.quality}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-indigo-400 to-blue-400 h-full rounded-full"
                          style={{ width: `${(day.hours / 8) * 100}%` }}
                        ></div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Weekly Average */}
          <div className="mt-6 p-6 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-600 mb-1">Weekly Average Sleep</p>
                <p className="text-3xl font-black text-indigo-600">{sleepData.monthAverage}h</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600 mb-1">Target</p>
                <p className="text-3xl font-black text-gray-600">8h</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sleep Tips */}
        <div className="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-xl border-2 border-white/50 animate-fade-in-up animation-delay-300">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">💤 Sleep Improvement Tips</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: "⏰", title: "Consistent Schedule", desc: "Go to bed and wake up at the same time daily" },
              { icon: "🌙", title: "Dark Environment", desc: "Keep your bedroom dark and cool (16-19°C)" },
              { icon: "📵", title: "No Screens", desc: "Avoid screens 1 hour before bedtime" },
              { icon: "☕", title: "Limit Caffeine", desc: "No caffeine after 2 PM" },
              { icon: "🏃", title: "Exercise", desc: "Regular exercise, but not close to bedtime" },
              { icon: "🧘", title: "Relaxation", desc: "Try meditation or deep breathing exercises" },
            ].map((tip, idx) => (
              <div key={idx} className="p-4 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl flex gap-3">
                <span className="text-2xl flex-shrink-0">{tip.icon}</span>
                <div>
                  <p className="font-semibold text-gray-800">{tip.title}</p>
                  <p className="text-sm text-gray-600">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
