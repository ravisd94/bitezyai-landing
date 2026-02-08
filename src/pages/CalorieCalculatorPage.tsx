import { useState } from "react";
import type { CalorieResult } from "../types";

export function CalorieCalculatorPage() {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const [fitnessGoal, setFitnessGoal] = useState("");
  const [result, setResult] = useState<CalorieResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculateCalories = () => {
    if (!age || !gender || !weight || !height || !activityLevel || !fitnessGoal) {
      alert("⚠️ Please fill in all fields!");
      return;
    }

    setIsCalculating(true);
    
    setTimeout(() => {
      const weightNum = parseFloat(weight);
      const heightNum = parseFloat(height);
      const ageNum = parseInt(age);

      // Calculate BMR using Mifflin-St Jeor Equation
      let bmr: number;
      if (gender === "male") {
        bmr = 10 * weightNum + 6.25 * heightNum - 5 * ageNum + 5;
      } else {
        bmr = 10 * weightNum + 6.25 * heightNum - 5 * ageNum - 161;
      }

      // Calculate TDEE based on activity level
      const activityMultipliers: { [key: string]: number } = {
        sedentary: 1.2,
        light: 1.375,
        moderate: 1.55,
        active: 1.725,
        veryActive: 1.9,
      };

      const tdee = bmr * activityMultipliers[activityLevel];

      // Adjust for fitness goal
      let recommendedCalories: number;
      if (fitnessGoal === "lose") {
        recommendedCalories = tdee - 500;
      } else if (fitnessGoal === "gain") {
        recommendedCalories = tdee + 300;
      } else {
        recommendedCalories = tdee;
      }

      setResult({
        bmr: Math.round(bmr),
        tdee: Math.round(tdee),
        goal: fitnessGoal,
        recommendedCalories: Math.round(recommendedCalories),
      });
      
      setIsCalculating(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-cyan-50 px-4 py-12 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-10 animate-fade-in-down">
          <h2 className="text-5xl font-black bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent mb-3">
            Calorie Calculator 📊
          </h2>
          <p className="text-lg text-gray-600">
            Calculate your daily calorie needs based on science!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Input Form */}
          <div className="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border-2 border-white/50 space-y-5 animate-fade-in-up">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Your Details</h3>

            {/* Age */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">🎂 Age (years)</label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Enter your age"
                className="w-full p-4 border-2 border-gray-200 rounded-2xl bg-gradient-to-br from-white to-gray-50 focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition-all outline-none font-medium text-gray-700"
              />
            </div>

            {/* Gender */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">⚧ Gender</label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full p-4 border-2 border-gray-200 rounded-2xl bg-gradient-to-br from-white to-gray-50 focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition-all outline-none font-medium text-gray-700 cursor-pointer"
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            {/* Weight */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">⚖️ Weight (kg)</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Enter your weight"
                className="w-full p-4 border-2 border-gray-200 rounded-2xl bg-gradient-to-br from-white to-gray-50 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all outline-none font-medium text-gray-700"
              />
            </div>

            {/* Height */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">📏 Height (cm)</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="Enter your height"
                className="w-full p-4 border-2 border-gray-200 rounded-2xl bg-gradient-to-br from-white to-gray-50 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all outline-none font-medium text-gray-700"
              />
            </div>

            {/* Activity Level */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">🏃 Activity Level</label>
              <select
                value={activityLevel}
                onChange={(e) => setActivityLevel(e.target.value)}
                className="w-full p-4 border-2 border-gray-200 rounded-2xl bg-gradient-to-br from-white to-gray-50 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100 transition-all outline-none font-medium text-gray-700 cursor-pointer"
              >
                <option value="">Select activity level</option>
                <option value="sedentary">Sedentary (little/no exercise)</option>
                <option value="light">Light (1-3 days/week)</option>
                <option value="moderate">Moderate (3-5 days/week)</option>
                <option value="active">Active (6-7 days/week)</option>
                <option value="veryActive">Very Active (athlete)</option>
              </select>
            </div>

            {/* Fitness Goal */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">🎯 Fitness Goal</label>
              <select
                value={fitnessGoal}
                onChange={(e) => setFitnessGoal(e.target.value)}
                className="w-full p-4 border-2 border-gray-200 rounded-2xl bg-gradient-to-br from-white to-gray-50 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100 transition-all outline-none font-medium text-gray-700 cursor-pointer"
              >
                <option value="">Select your goal</option>
                <option value="lose">🔥 Lose Weight</option>
                <option value="maintain">⚖️ Maintain Weight</option>
                <option value="gain">💪 Gain Muscle</option>
              </select>
            </div>

            {/* Calculate Button */}
            <button
              onClick={calculateCalories}
              disabled={isCalculating}
              className={`w-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white p-5 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 ${
                isCalculating ? "opacity-70 cursor-not-allowed" : "hover:-translate-y-1"
              }`}
            >
              {isCalculating ? (
                <>
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                  Calculating...
                </>
              ) : (
                <>
                  Calculate Calories 🔥
                </>
              )}
            </button>
          </div>

          {/* Results Display */}
          <div className="space-y-6">
            {result ? (
              <div className="animate-slide-in-up space-y-4">
                {/* BMR Card */}
                <div className="bg-gradient-to-br from-pink-50 to-pink-100 border-2 border-pink-300 p-6 rounded-3xl shadow-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-4xl">🔥</div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-600">Basal Metabolic Rate</h4>
                      <p className="text-3xl font-black text-pink-600">{result.bmr} cal</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Calories burned at rest (just to keep your body functioning)
                  </p>
                </div>

                {/* TDEE Card */}
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-300 p-6 rounded-3xl shadow-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-4xl">⚡</div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-600">Total Daily Energy Expenditure</h4>
                      <p className="text-3xl font-black text-purple-600">{result.tdee} cal</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Calories burned with your current activity level
                  </p>
                </div>

                {/* Recommended Calories Card */}
                <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 border-2 border-cyan-300 p-6 rounded-3xl shadow-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-4xl">🎯</div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-600">Recommended Daily Intake</h4>
                      <p className="text-3xl font-black text-cyan-600">{result.recommendedCalories} cal</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    {result.goal === "lose" && "500 cal deficit for steady weight loss (0.5 kg/week)"}
                    {result.goal === "gain" && "300 cal surplus for lean muscle gain"}
                    {result.goal === "maintain" && "Perfect for maintaining your current weight"}
                  </p>
                </div>

                {/* Macro Breakdown */}
                <div className="bg-white/90 backdrop-blur-lg border-2 border-gray-200 p-6 rounded-3xl shadow-xl">
                  <h4 className="text-lg font-bold text-gray-800 mb-4">📊 Suggested Macro Split</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-semibold">🍗 Protein (30%)</span>
                      <span className="text-pink-600 font-bold">{Math.round(result.recommendedCalories * 0.3 / 4)}g</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-pink-400 to-pink-600 h-3 rounded-full" style={{ width: "30%" }}></div>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-semibold">🍚 Carbs (40%)</span>
                      <span className="text-purple-600 font-bold">{Math.round(result.recommendedCalories * 0.4 / 4)}g</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-purple-400 to-purple-600 h-3 rounded-full" style={{ width: "40%" }}></div>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-semibold">🥑 Fats (30%)</span>
                      <span className="text-cyan-600 font-bold">{Math.round(result.recommendedCalories * 0.3 / 9)}g</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-cyan-400 to-cyan-600 h-3 rounded-full" style={{ width: "30%" }}></div>
                    </div>
                  </div>
                </div>

                {/* Tips */}
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-300 p-6 rounded-3xl shadow-xl">
                  <h4 className="text-lg font-bold text-gray-800 mb-3">💡 Pro Tips</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span>✓</span>
                      <span>Track your intake for best results</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>✓</span>
                      <span>Adjust calories if not seeing progress after 2 weeks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>✓</span>
                      <span>Stay hydrated - drink 3L water daily</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>✓</span>
                      <span>Prioritize whole foods over processed</span>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="bg-white/90 backdrop-blur-lg p-12 rounded-3xl shadow-xl border-2 border-gray-200 flex flex-col items-center justify-center text-center h-full">
                <div className="text-6xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Ready to Calculate?</h3>
                <p className="text-gray-600">
                  Fill in your details on the left and click "Calculate Calories" to get your personalized results!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
