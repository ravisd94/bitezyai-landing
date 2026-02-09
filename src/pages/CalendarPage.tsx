import { useState } from "react";
import type { FoodEntry } from "../types";

export function CalendarPage() {
  const [entries] = useState<FoodEntry[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split('T')[0]);

  const getMonthCalendarData = () => {
    const currentDate = new Date(selectedDate);
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());

    const calendarDays = [];
    const current = new Date(startDate);

    for (let i = 0; i < 42; i++) {
      const dateStr = current.toISOString().split('T')[0];
      const dayEntries = entries.filter(entry => {
        const entryDate = new Date(entry.timestamp).toISOString().split('T')[0];
        return entryDate === dateStr;
      });

      const dayMacros = dayEntries.reduce((acc, e) => ({
        protein: acc.protein + e.protein,
        carbs: acc.carbs + e.carbs,
        fats: acc.fats + e.fats,
        calories: acc.calories + e.calories,
      }), { protein: 0, carbs: 0, fats: 0, calories: 0 });

      const total = dayMacros.protein * 4 + dayMacros.carbs * 4 + dayMacros.fats * 9;
      const proteinPct = total > 0 ? (dayMacros.protein * 4 / total * 100) : 0;
      const carbsPct = total > 0 ? (dayMacros.carbs * 4 / total * 100) : 0;
      const fatsPct = total > 0 ? (dayMacros.fats * 9 / total * 100) : 0;

      calendarDays.push({
        date: dateStr,
        day: current.getDate(),
        isCurrentMonth: current.getMonth() === month,
        protein: dayMacros.protein,
        carbs: dayMacros.carbs,
        fats: dayMacros.fats,
        calories: dayMacros.calories,
        proteinPct: Math.round(proteinPct),
        carbsPct: Math.round(carbsPct),
        fatsPct: Math.round(fatsPct),
      });

      current.setDate(current.getDate() + 1);
    }

    return calendarDays;
  };

  const monthCalendarData = getMonthCalendarData();
  const currentDate = new Date(selectedDate);
  const monthName = currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  const goToPreviousMonth = () => {
    const current = new Date(selectedDate);
    current.setMonth(current.getMonth() - 1);
    setSelectedDate(current.toISOString().split('T')[0]);
  };

  const goToNextMonth = () => {
    const current = new Date(selectedDate);
    current.setMonth(current.getMonth() + 1);
    setSelectedDate(current.toISOString().split('T')[0]);
  };

  const goToToday = () => {
    setSelectedDate(new Date().toISOString().split('T')[0]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-cyan-50 px-4 py-12 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 animate-fade-in-down">
          <h1 className="text-5xl font-black bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent mb-3">
            Nutrition Calendar 📅
          </h1>
          <p className="text-lg text-gray-600">View your monthly nutrition breakdown with macro distribution</p>
        </div>

        {/* Month Navigation */}
        <div className="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-xl border-2 border-white/50 mb-8 animate-fade-in-up">
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={goToPreviousMonth}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold hover:shadow-lg transition-all"
            >
              ← Previous
            </button>

            <div className="text-center">
              <h2 className="text-3xl font-black text-gray-800">{monthName}</h2>
              <button
                onClick={goToToday}
                className="mt-2 px-4 py-2 rounded-lg text-sm font-semibold text-purple-600 hover:bg-purple-50 transition-all border border-purple-200"
              >
                Go to Today
              </button>
            </div>

            <button
              onClick={goToNextMonth}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold hover:shadow-lg transition-all"
            >
              Next →
            </button>
          </div>

          {/* Calendar Grid */}
          <div className="space-y-4">
            {/* Day Headers */}
            <div className="grid grid-cols-7 gap-2 mb-4">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day} className="text-center font-bold text-gray-700 py-2">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Days */}
            <div className="grid grid-cols-7 gap-2">
              {monthCalendarData.map((day, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedDate(day.date)}
                  className={`p-3 rounded-2xl cursor-pointer transition-all transform hover:scale-105 ${
                    day.isCurrentMonth
                      ? selectedDate === day.date
                        ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg'
                        : 'bg-white/90 backdrop-blur-lg border-2 border-white/50 hover:shadow-lg'
                      : 'bg-gray-100/50 text-gray-500'
                  }`}
                >
                  <div className="text-sm font-bold mb-2">{day.day}</div>

                  {day.isCurrentMonth && day.calories > 0 && (
                    <>
                      <div className={`text-xs font-bold mb-2 ${selectedDate === day.date ? 'text-white' : 'text-gray-800'}`}>
                        {day.calories.toFixed(0)} cal
                      </div>

                      {/* Macro Bars */}
                      <div className="flex gap-0.5 h-2 rounded-full overflow-hidden bg-gray-200">
                        {day.proteinPct > 0 && (
                          <div
                            className="bg-red-500"
                            style={{ width: `${day.proteinPct}%` }}
                            title={`Protein ${day.proteinPct}%`}
                          />
                        )}
                        {day.carbsPct > 0 && (
                          <div
                            className="bg-blue-500"
                            style={{ width: `${day.carbsPct}%` }}
                            title={`Carbs ${day.carbsPct}%`}
                          />
                        )}
                        {day.fatsPct > 0 && (
                          <div
                            className="bg-yellow-500"
                            style={{ width: `${day.fatsPct}%` }}
                            title={`Fats ${day.fatsPct}%`}
                          />
                        )}
                      </div>

                      {/* Macro Breakdown */}
                      <div className="mt-1 space-y-0.5 text-xs">
                        <div className={selectedDate === day.date ? 'text-white' : 'text-gray-600'}>
                          P: {day.protein.toFixed(0)}g
                        </div>
                        <div className={selectedDate === day.date ? 'text-white' : 'text-gray-600'}>
                          C: {day.carbs.toFixed(0)}g
                        </div>
                        <div className={selectedDate === day.date ? 'text-white' : 'text-gray-600'}>
                          F: {day.fats.toFixed(0)}g
                        </div>
                      </div>
                    </>
                  )}

                  {day.isCurrentMonth && day.calories === 0 && (
                    <div className={`text-xs ${selectedDate === day.date ? 'text-white' : 'text-gray-500'}`}>
                      No data
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-xl border-2 border-white/50 animate-fade-in-up animation-delay-100">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">📊 Macro Legend</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-gradient-to-r from-red-50 to-red-100 rounded-2xl border-2 border-red-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-6 h-6 bg-red-500 rounded-full"></div>
                <h4 className="font-bold text-gray-800">Protein</h4>
              </div>
              <p className="text-sm text-gray-700">4 calories per gram</p>
              <p className="text-xs text-gray-600 mt-2">Essential for muscle building and repair</p>
            </div>

            <div className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl border-2 border-blue-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                <h4 className="font-bold text-gray-800">Carbs</h4>
              </div>
              <p className="text-sm text-gray-700">4 calories per gram</p>
              <p className="text-xs text-gray-600 mt-2">Primary energy source for your body</p>
            </div>

            <div className="p-6 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-2xl border-2 border-yellow-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                <h4 className="font-bold text-gray-800">Fats</h4>
              </div>
              <p className="text-sm text-gray-700">9 calories per gram</p>
              <p className="text-xs text-gray-600 mt-2">Important for hormone production and absorption</p>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-8 bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-xl border-2 border-white/50 animate-fade-in-up animation-delay-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">💡 How to Use</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="text-2xl">1️⃣</span>
              <span><strong>Navigate months</strong> using the Previous/Next buttons to explore past or future months</span>
            </li>
            <li className="flex gap-3">
              <span className="text-2xl">2️⃣</span>
              <span><strong>Click on any day</strong> to see detailed nutrition breakdown for that date</span>
            </li>
            <li className="flex gap-3">
              <span className="text-2xl">3️⃣</span>
              <span><strong>Read the colored bars</strong> showing protein (red), carbs (blue), and fats (yellow)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-2xl">4️⃣</span>
              <span><strong>Use "Go to Today"</strong> to quickly return to the current date</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
