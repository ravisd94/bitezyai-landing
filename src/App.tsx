import { useState } from "react";

type Page = "home" | "diet-plan" | "calorie-calculator" | "diary";

interface CalorieResult {
  bmr: number;
  tdee: number;
  goal: string;
  recommendedCalories: number;
}

interface FoodEntry {
  id: string;
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  fiber: number;
  sugar: number;
  sodium: number;
  vitaminC: number;
  vitaminD: number;
  calcium: number;
  iron: number;
  meal: "breakfast" | "lunch" | "dinner" | "snack";
  timestamp: Date;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg shadow-lg border-b-2 border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div 
              onClick={() => setCurrentPage("home")}
              className="cursor-pointer"
            >
              <h1 className="text-3xl font-black bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                BitezyAI 🥗
              </h1>
            </div>
            <div className="flex gap-2 md:gap-4 flex-wrap">
              <button
                onClick={() => setCurrentPage("home")}
                className={`px-3 md:px-4 py-2 rounded-full font-semibold text-sm md:text-base transition-all ${
                  currentPage === "home"
                    ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                🏠 Home
              </button>
              <button
                onClick={() => setCurrentPage("diet-plan")}
                className={`px-3 md:px-4 py-2 rounded-full font-semibold text-sm md:text-base transition-all ${
                  currentPage === "diet-plan"
                    ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                🍽️ Plan
              </button>
              <button
                onClick={() => setCurrentPage("calorie-calculator")}
                className={`px-3 md:px-4 py-2 rounded-full font-semibold text-sm md:text-base transition-all ${
                  currentPage === "calorie-calculator"
                    ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                📊 Calc
              </button>
              <button
                onClick={() => setCurrentPage("diary")}
                className={`px-3 md:px-4 py-2 rounded-full font-semibold text-sm md:text-base transition-all ${
                  currentPage === "diary"
                    ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                📖 Diary
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <div className="pt-20">
        {currentPage === "home" && <HomePage setPage={setCurrentPage} />}
        {currentPage === "diet-plan" && <DietPlanPage />}
        {currentPage === "calorie-calculator" && <CalorieCalculatorPage />}
        {currentPage === "diary" && <DiaryPage />}
      </div>
    </div>
  );
}

// Home Page Component
function HomePage({ setPage }: { setPage: (page: Page) => void }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-cyan-50 flex flex-col items-center justify-center px-4 py-8 relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Hero Section */}
        <div className="animate-fade-in-down mb-12">
          <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent mb-4 tracking-tight">
            BitezyAI 🥗
          </h1>
          <p className="text-2xl text-gray-700 font-bold mb-3">
            Your Personalized AI Diet Coach ✨
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get custom meal plans, track calories, and crush your fitness goals with the smartest diet app ever! 💪
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12 animate-fade-in-up">
          <div 
            onClick={() => setPage("diet-plan")}
            className="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-xl border-2 border-white/50 hover:shadow-2xl hover:scale-105 transition-all cursor-pointer group"
          >
            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">🍽️</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">AI Diet Plan Generator</h3>
            <p className="text-gray-600">Get personalized meal plans based on your goals and cuisine preferences</p>
            <div className="mt-4 text-pink-500 font-semibold flex items-center justify-center gap-2">
              Get Started <span>→</span>
            </div>
          </div>

          <div 
            onClick={() => setPage("calorie-calculator")}
            className="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-xl border-2 border-white/50 hover:shadow-2xl hover:scale-105 transition-all cursor-pointer group"
          >
            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">📊</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Calorie Calculator</h3>
            <p className="text-gray-600">Calculate your daily calorie needs based on your body metrics and activity level</p>
            <div className="mt-4 text-purple-500 font-semibold flex items-center justify-center gap-2">
              Calculate Now <span>→</span>
            </div>
          </div>

          <div 
            onClick={() => setPage("diary")}
            className="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-xl border-2 border-white/50 hover:shadow-2xl hover:scale-105 transition-all cursor-pointer group md:col-span-2"
          >
            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">📖</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Food Diary & Micronutrient Tracker</h3>
            <p className="text-gray-600">Track your daily meals, calories, macros, and essential micronutrients</p>
            <div className="mt-4 text-cyan-500 font-semibold flex items-center justify-center gap-2">
              Start Tracking <span>→</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
          <div className="bg-white/80 backdrop-blur-lg p-6 rounded-2xl">
            <div className="text-4xl font-black bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">10k+</div>
            <p className="text-sm text-gray-600 font-semibold mt-1">Happy Users</p>
          </div>
          <div className="bg-white/80 backdrop-blur-lg p-6 rounded-2xl">
            <div className="text-4xl font-black bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">50k+</div>
            <p className="text-sm text-gray-600 font-semibold mt-1">Meals Planned</p>
          </div>
          <div className="bg-white/80 backdrop-blur-lg p-6 rounded-2xl">
            <div className="text-4xl font-black bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text text-transparent">4.9★</div>
            <p className="text-sm text-gray-600 font-semibold mt-1">Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Diet Plan Page Component
function DietPlanPage() {
  const [goal, setGoal] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [result, setResult] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePlan = () => {
    if (!goal || !cuisine) {
      setResult("⚠️ Please select both a goal and cuisine first!");
      return;
    }

    setIsGenerating(true);
    setResult("");

    setTimeout(() => {
      setResult(`🔥 Your Personalized ${goal} Plan with ${cuisine} Cuisine:
    
🌅 **Breakfast** (7:00 AM)
${getBreakfast(cuisine)} - 350 cal
High protein to kickstart your metabolism!

🍽️ **Lunch** (12:30 PM)
${getLunch(cuisine)} - 500 cal
Balanced macros with complex carbs & lean protein

🥤 **Snack** (4:00 PM)
${getSnack(cuisine)} - 200 cal
Energy boost without the crash

🌙 **Dinner** (7:30 PM)
${getDinner(cuisine)} - 450 cal
Light but satisfying, perfect for ${goal.toLowerCase()}

💧 **Hydration Goal**: 3 liters throughout the day
⚡ **Daily Total**: ~1,500 calories

🎯 Pro Tip: Stay consistent for 21 days to form the habit!`);
      setIsGenerating(false);
    }, 1500);
  };

  const getBreakfast = (cuisine: string) => {
    const options: { [key: string]: string } = {
      Indian: "Moong dal chilla with mint chutney + Greek yogurt",
      Italian: "Frittata with spinach & tomatoes + whole grain toast",
      Mexican: "Breakfast burrito bowl with black beans & avocado",
      Chinese: "Congee with century egg & scallions",
      American: "Scrambled eggs, turkey bacon & avocado toast",
      Mediterranean: "Greek yogurt parfait with honey, nuts & berries",
      Keto: "Keto egg muffins with cheese & bacon",
      Vegan: "Tofu scramble with spinach & whole grain toast",
    };
    return options[cuisine] || "High protein meal";
  };

  const getLunch = (cuisine: string) => {
    const options: { [key: string]: string } = {
      Indian: "Grilled tandoori chicken with quinoa & cucumber raita",
      Italian: "Grilled salmon with roasted vegetables & whole wheat pasta",
      Mexican: "Chicken fajita bowl with brown rice & guacamole",
      Chinese: "Stir-fried tofu with bok choy & brown rice",
      American: "Turkey burger on whole grain bun with sweet potato fries",
      Mediterranean: "Grilled chicken souvlaki with Greek salad & hummus",
      Keto: "Grilled steak with cauliflower rice & asparagus",
      Vegan: "Buddha bowl with quinoa, chickpeas & tahini dressing",
    };
    return options[cuisine] || "Balanced healthy plate";
  };

  const getSnack = (cuisine: string) => {
    const options: { [key: string]: string } = {
      Indian: "Roasted chana (chickpeas) + green tea",
      Italian: "Caprese skewers with balsamic glaze",
      Mexican: "Guacamole with veggie sticks",
      Chinese: "Edamame with sea salt",
      American: "Apple slices with almond butter",
      Mediterranean: "Hummus with carrot & cucumber sticks",
      Keto: "Cheese cubes with macadamia nuts",
      Vegan: "Mixed nuts & fresh berries",
    };
    return options[cuisine] || "Fruits + nuts";
  };

  const getDinner = (cuisine: string) => {
    const options: { [key: string]: string } = {
      Indian: "Palak paneer with small portion of roti & dal",
      Italian: "Grilled chicken breast with zucchini noodles & pesto",
      Mexican: "Fish tacos with cabbage slaw & lime",
      Chinese: "Steamed fish with ginger, scallions & bok choy",
      American: "Grilled chicken salad with balsamic vinaigrette",
      Mediterranean: "Baked cod with lemon, olives & roasted vegetables",
      Keto: "Salmon with butter sauce & roasted broccoli",
      Vegan: "Lentil curry with cauliflower rice",
    };
    return options[cuisine] || "Light & clean meal";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-cyan-50 px-4 py-12 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="text-center mb-10 animate-fade-in-down">
          <h2 className="text-5xl font-black bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent mb-3">
            AI Diet Plan Generator 🍽️
          </h2>
          <p className="text-lg text-gray-600">
            Let our AI create a personalized meal plan just for you!
          </p>
        </div>

        <div className="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border-2 border-white/50 space-y-6 animate-fade-in-up">
          {/* Goal Selection */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
              🎯 What's Your Goal?
            </label>
            <select
              className="w-full p-4 border-2 border-gray-200 rounded-2xl bg-gradient-to-br from-white to-gray-50 focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition-all outline-none font-medium text-gray-700 cursor-pointer hover:border-pink-300"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
            >
              <option value="">Select your fitness goal</option>
              <option value="Weight Loss">🔥 Weight Loss</option>
              <option value="Muscle Gain">💪 Muscle Gain</option>
              <option value="Healthy Lifestyle">🌱 Healthy Lifestyle</option>
              <option value="Athletic Performance">⚡ Athletic Performance</option>
            </select>
          </div>

          {/* Cuisine Selection */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
              🌮 Preferred Cuisine
            </label>
            <select
              className="w-full p-4 border-2 border-gray-200 rounded-2xl bg-gradient-to-br from-white to-gray-50 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100 transition-all outline-none font-medium text-gray-700 cursor-pointer hover:border-cyan-300"
              value={cuisine}
              onChange={(e) => setCuisine(e.target.value)}
            >
              <option value="">Choose your favorite cuisine</option>
              <option value="Indian">🍛 Indian</option>
              <option value="Italian">🍝 Italian</option>
              <option value="Mexican">🌮 Mexican</option>
              <option value="Chinese">🥢 Chinese</option>
              <option value="American">🍔 American</option>
              <option value="Mediterranean">🫒 Mediterranean</option>
              <option value="Keto">🥑 Keto</option>
              <option value="Vegan">🌱 Vegan</option>
            </select>
          </div>

          {/* Generate Button */}
          <button
            onClick={generatePlan}
            disabled={isGenerating}
            className={`w-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white p-5 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 ${
              isGenerating ? "opacity-70 cursor-not-allowed" : "hover:-translate-y-1"
            }`}
          >
            {isGenerating ? (
              <>
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                Generating Your Plan...
              </>
            ) : (
              <>
                Generate AI Diet Plan ⚡
              </>
            )}
          </button>

          {/* Result Display */}
          {result && (
            <div
              className={`${
                result.includes("⚠️")
                  ? "bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-300"
                  : "bg-gradient-to-br from-green-50 to-emerald-50 border-green-300"
              } p-6 rounded-2xl border-2 text-gray-800 whitespace-pre-line leading-relaxed animate-slide-in-up shadow-lg`}
            >
              {result}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Calorie Calculator Page Component
function CalorieCalculatorPage() {
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

// Food Diary Page Component
function DiaryPage() {
  const [entries, setEntries] = useState<FoodEntry[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  
  // Form states
  const [foodName, setFoodName] = useState("");
  const [calories, setCalories] = useState("");
  const [protein, setProtein] = useState("");
  const [carbs, setCarbs] = useState("");
  const [fats, setFats] = useState("");
  const [fiber, setFiber] = useState("");
  const [sugar, setSugar] = useState("");
  const [sodium, setSodium] = useState("");
  const [vitaminC, setVitaminC] = useState("");
  const [vitaminD, setVitaminD] = useState("");
  const [calcium, setCalcium] = useState("");
  const [iron, setIron] = useState("");
  const [mealType, setMealType] = useState<"breakfast" | "lunch" | "dinner" | "snack">("breakfast");

  const addEntry = () => {
    if (!foodName || !calories) {
      alert("⚠️ Please enter at least food name and calories!");
      return;
    }

    const newEntry: FoodEntry = {
      id: Date.now().toString(),
      name: foodName,
      calories: parseFloat(calories) || 0,
      protein: parseFloat(protein) || 0,
      carbs: parseFloat(carbs) || 0,
      fats: parseFloat(fats) || 0,
      fiber: parseFloat(fiber) || 0,
      sugar: parseFloat(sugar) || 0,
      sodium: parseFloat(sodium) || 0,
      vitaminC: parseFloat(vitaminC) || 0,
      vitaminD: parseFloat(vitaminD) || 0,
      calcium: parseFloat(calcium) || 0,
      iron: parseFloat(iron) || 0,
      meal: mealType,
      timestamp: new Date(),
    };

    setEntries([...entries, newEntry]);
    
    // Reset form
    setFoodName("");
    setCalories("");
    setProtein("");
    setCarbs("");
    setFats("");
    setFiber("");
    setSugar("");
    setSodium("");
    setVitaminC("");
    setVitaminD("");
    setCalcium("");
    setIron("");
    setShowAddForm(false);
  };

  const deleteEntry = (id: string) => {
    setEntries(entries.filter(entry => entry.id !== id));
  };

  // Calculate totals
  const totals = entries.reduce((acc, entry) => ({
    calories: acc.calories + entry.calories,
    protein: acc.protein + entry.protein,
    carbs: acc.carbs + entry.carbs,
    fats: acc.fats + entry.fats,
    fiber: acc.fiber + entry.fiber,
    sugar: acc.sugar + entry.sugar,
    sodium: acc.sodium + entry.sodium,
    vitaminC: acc.vitaminC + entry.vitaminC,
    vitaminD: acc.vitaminD + entry.vitaminD,
    calcium: acc.calcium + entry.calcium,
    iron: acc.iron + entry.iron,
  }), {
    calories: 0,
    protein: 0,
    carbs: 0,
    fats: 0,
    fiber: 0,
    sugar: 0,
    sodium: 0,
    vitaminC: 0,
    vitaminD: 0,
    calcium: 0,
    iron: 0,
  });

  // Group entries by meal
  const groupedEntries = {
    breakfast: entries.filter(e => e.meal === "breakfast"),
    lunch: entries.filter(e => e.meal === "lunch"),
    dinner: entries.filter(e => e.meal === "dinner"),
    snack: entries.filter(e => e.meal === "snack"),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-cyan-50 px-4 py-12 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-10 animate-fade-in-down">
          <h2 className="text-5xl font-black bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent mb-3">
            Food Diary 📖
          </h2>
          <p className="text-lg text-gray-600">
            Track your meals, calories, macros & micronutrients!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Daily Summary */}
          <div className="lg:col-span-1 space-y-6">
            {/* Calorie Summary */}
            <div className="bg-white/90 backdrop-blur-lg p-6 rounded-3xl shadow-xl border-2 border-white/50 animate-fade-in-up">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                🔥 Daily Summary
              </h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-4 rounded-2xl">
                  <p className="text-sm text-gray-600 mb-1">Total Calories</p>
                  <p className="text-3xl font-black text-pink-600">{Math.round(totals.calories)}</p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-gray-700">🍗 Protein</span>
                    <span className="text-pink-600 font-bold">{Math.round(totals.protein)}g</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-pink-400 to-pink-600 h-2 rounded-full" style={{ width: `${Math.min((totals.protein / 150) * 100, 100)}%` }}></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-gray-700">🍚 Carbs</span>
                    <span className="text-purple-600 font-bold">{Math.round(totals.carbs)}g</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-400 to-purple-600 h-2 rounded-full" style={{ width: `${Math.min((totals.carbs / 200) * 100, 100)}%` }}></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-gray-700">🥑 Fats</span>
                    <span className="text-cyan-600 font-bold">{Math.round(totals.fats)}g</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-cyan-400 to-cyan-600 h-2 rounded-full" style={{ width: `${Math.min((totals.fats / 70) * 100, 100)}%` }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Micronutrients Summary */}
            <div className="bg-white/90 backdrop-blur-lg p-6 rounded-3xl shadow-xl border-2 border-white/50 animate-fade-in-up animation-delay-300">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                💊 Micronutrients
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">🌿 Fiber</span>
                  <span className="font-bold text-green-600">{Math.round(totals.fiber)}g</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">🍬 Sugar</span>
                  <span className="font-bold text-orange-600">{Math.round(totals.sugar)}g</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">🧂 Sodium</span>
                  <span className="font-bold text-red-600">{Math.round(totals.sodium)}mg</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">🍊 Vitamin C</span>
                  <span className="font-bold text-yellow-600">{Math.round(totals.vitaminC)}mg</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">☀️ Vitamin D</span>
                  <span className="font-bold text-yellow-500">{Math.round(totals.vitaminD)}μg</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">🦴 Calcium</span>
                  <span className="font-bold text-blue-600">{Math.round(totals.calcium)}mg</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">⚙️ Iron</span>
                  <span className="font-bold text-gray-600">{Math.round(totals.iron)}mg</span>
                </div>
              </div>
            </div>

            {/* Add Food Button */}
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white p-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              {showAddForm ? "Cancel ✕" : "Add Food Entry ➕"}
            </button>
          </div>

          {/* Food Entries & Add Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Add Food Form */}
            {showAddForm && (
              <div className="bg-white/90 backdrop-blur-lg p-6 rounded-3xl shadow-xl border-2 border-white/50 animate-slide-in-up">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Add Food Entry</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="text-sm font-bold text-gray-700">🍽️ Food Name</label>
                    <input
                      type="text"
                      value={foodName}
                      onChange={(e) => setFoodName(e.target.value)}
                      placeholder="e.g., Grilled Chicken Breast"
                      className="w-full p-3 mt-1 border-2 border-gray-200 rounded-xl focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition-all outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-bold text-gray-700">🍽️ Meal Type</label>
                    <select
                      value={mealType}
                      onChange={(e) => setMealType(e.target.value as any)}
                      className="w-full p-3 mt-1 border-2 border-gray-200 rounded-xl focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100 transition-all outline-none cursor-pointer"
                    >
                      <option value="breakfast">🌅 Breakfast</option>
                      <option value="lunch">🍽️ Lunch</option>
                      <option value="dinner">🌙 Dinner</option>
                      <option value="snack">🥤 Snack</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-bold text-gray-700">🔥 Calories</label>
                    <input
                      type="number"
                      value={calories}
                      onChange={(e) => setCalories(e.target.value)}
                      placeholder="250"
                      className="w-full p-3 mt-1 border-2 border-gray-200 rounded-xl focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition-all outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-bold text-gray-700">🍗 Protein (g)</label>
                    <input
                      type="number"
                      value={protein}
                      onChange={(e) => setProtein(e.target.value)}
                      placeholder="30"
                      className="w-full p-3 mt-1 border-2 border-gray-200 rounded-xl focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition-all outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-bold text-gray-700">🍚 Carbs (g)</label>
                    <input
                      type="number"
                      value={carbs}
                      onChange={(e) => setCarbs(e.target.value)}
                      placeholder="40"
                      className="w-full p-3 mt-1 border-2 border-gray-200 rounded-xl focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-bold text-gray-700">🥑 Fats (g)</label>
                    <input
                      type="number"
                      value={fats}
                      onChange={(e) => setFats(e.target.value)}
                      placeholder="10"
                      className="w-full p-3 mt-1 border-2 border-gray-200 rounded-xl focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100 transition-all outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-bold text-gray-700">🌿 Fiber (g)</label>
                    <input
                      type="number"
                      value={fiber}
                      onChange={(e) => setFiber(e.target.value)}
                      placeholder="5"
                      className="w-full p-3 mt-1 border-2 border-gray-200 rounded-xl focus:border-green-400 focus:ring-4 focus:ring-green-100 transition-all outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-bold text-gray-700">🍬 Sugar (g)</label>
                    <input
                      type="number"
                      value={sugar}
                      onChange={(e) => setSugar(e.target.value)}
                      placeholder="8"
                      className="w-full p-3 mt-1 border-2 border-gray-200 rounded-xl focus:border-orange-400 focus:ring-4 focus:ring-orange-100 transition-all outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-bold text-gray-700">🧂 Sodium (mg)</label>
                    <input
                      type="number"
                      value={sodium}
                      onChange={(e) => setSodium(e.target.value)}
                      placeholder="400"
                      className="w-full p-3 mt-1 border-2 border-gray-200 rounded-xl focus:border-red-400 focus:ring-4 focus:ring-red-100 transition-all outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-bold text-gray-700">🍊 Vitamin C (mg)</label>
                    <input
                      type="number"
                      value={vitaminC}
                      onChange={(e) => setVitaminC(e.target.value)}
                      placeholder="15"
                      className="w-full p-3 mt-1 border-2 border-gray-200 rounded-xl focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100 transition-all outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-bold text-gray-700">☀️ Vitamin D (μg)</label>
                    <input
                      type="number"
                      value={vitaminD}
                      onChange={(e) => setVitaminD(e.target.value)}
                      placeholder="2"
                      className="w-full p-3 mt-1 border-2 border-gray-200 rounded-xl focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100 transition-all outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-bold text-gray-700">🦴 Calcium (mg)</label>
                    <input
                      type="number"
                      value={calcium}
                      onChange={(e) => setCalcium(e.target.value)}
                      placeholder="100"
                      className="w-full p-3 mt-1 border-2 border-gray-200 rounded-xl focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-bold text-gray-700">⚙️ Iron (mg)</label>
                    <input
                      type="number"
                      value={iron}
                      onChange={(e) => setIron(e.target.value)}
                      placeholder="3"
                      className="w-full p-3 mt-1 border-2 border-gray-200 rounded-xl focus:border-gray-400 focus:ring-4 focus:ring-gray-100 transition-all outline-none"
                    />
                  </div>
                </div>

                <button
                  onClick={addEntry}
                  className="w-full mt-6 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white p-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Add to Diary ✅
                </button>
              </div>
            )}

            {/* Food Entries by Meal */}
            {entries.length === 0 ? (
              <div className="bg-white/90 backdrop-blur-lg p-12 rounded-3xl shadow-xl border-2 border-white/50 text-center">
                <div className="text-6xl mb-4">🍽️</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">No Entries Yet</h3>
                <p className="text-gray-600">
                  Start tracking your meals by clicking "Add Food Entry" button!
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Breakfast */}
                {groupedEntries.breakfast.length > 0 && (
                  <div className="bg-white/90 backdrop-blur-lg p-6 rounded-3xl shadow-xl border-2 border-white/50">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                      🌅 Breakfast
                    </h3>
                    <div className="space-y-3">
                      {groupedEntries.breakfast.map(entry => (
                        <div key={entry.id} className="bg-gradient-to-br from-orange-50 to-yellow-50 p-4 rounded-2xl border-2 border-orange-200">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-bold text-gray-800">{entry.name}</h4>
                            <button
                              onClick={() => deleteEntry(entry.id)}
                              className="text-red-500 hover:text-red-700 font-bold"
                            >
                              ✕
                            </button>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                            <div><span className="text-gray-600">Cal:</span> <span className="font-bold">{entry.calories}</span></div>
                            <div><span className="text-gray-600">P:</span> <span className="font-bold">{entry.protein}g</span></div>
                            <div><span className="text-gray-600">C:</span> <span className="font-bold">{entry.carbs}g</span></div>
                            <div><span className="text-gray-600">F:</span> <span className="font-bold">{entry.fats}g</span></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Lunch */}
                {groupedEntries.lunch.length > 0 && (
                  <div className="bg-white/90 backdrop-blur-lg p-6 rounded-3xl shadow-xl border-2 border-white/50">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                      🍽️ Lunch
                    </h3>
                    <div className="space-y-3">
                      {groupedEntries.lunch.map(entry => (
                        <div key={entry.id} className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-2xl border-2 border-green-200">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-bold text-gray-800">{entry.name}</h4>
                            <button
                              onClick={() => deleteEntry(entry.id)}
                              className="text-red-500 hover:text-red-700 font-bold"
                            >
                              ✕
                            </button>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                            <div><span className="text-gray-600">Cal:</span> <span className="font-bold">{entry.calories}</span></div>
                            <div><span className="text-gray-600">P:</span> <span className="font-bold">{entry.protein}g</span></div>
                            <div><span className="text-gray-600">C:</span> <span className="font-bold">{entry.carbs}g</span></div>
                            <div><span className="text-gray-600">F:</span> <span className="font-bold">{entry.fats}g</span></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Dinner */}
                {groupedEntries.dinner.length > 0 && (
                  <div className="bg-white/90 backdrop-blur-lg p-6 rounded-3xl shadow-xl border-2 border-white/50">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                      🌙 Dinner
                    </h3>
                    <div className="space-y-3">
                      {groupedEntries.dinner.map(entry => (
                        <div key={entry.id} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-2xl border-2 border-blue-200">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-bold text-gray-800">{entry.name}</h4>
                            <button
                              onClick={() => deleteEntry(entry.id)}
                              className="text-red-500 hover:text-red-700 font-bold"
                            >
                              ✕
                            </button>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                            <div><span className="text-gray-600">Cal:</span> <span className="font-bold">{entry.calories}</span></div>
                            <div><span className="text-gray-600">P:</span> <span className="font-bold">{entry.protein}g</span></div>
                            <div><span className="text-gray-600">C:</span> <span className="font-bold">{entry.carbs}g</span></div>
                            <div><span className="text-gray-600">F:</span> <span className="font-bold">{entry.fats}g</span></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Snacks */}
                {groupedEntries.snack.length > 0 && (
                  <div className="bg-white/90 backdrop-blur-lg p-6 rounded-3xl shadow-xl border-2 border-white/50">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                      🥤 Snacks
                    </h3>
                    <div className="space-y-3">
                      {groupedEntries.snack.map(entry => (
                        <div key={entry.id} className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-2xl border-2 border-purple-200">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-bold text-gray-800">{entry.name}</h4>
                            <button
                              onClick={() => deleteEntry(entry.id)}
                              className="text-red-500 hover:text-red-700 font-bold"
                            >
                              ✕
                            </button>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                            <div><span className="text-gray-600">Cal:</span> <span className="font-bold">{entry.calories}</span></div>
                            <div><span className="text-gray-600">P:</span> <span className="font-bold">{entry.protein}g</span></div>
                            <div><span className="text-gray-600">C:</span> <span className="font-bold">{entry.carbs}g</span></div>
                            <div><span className="text-gray-600">F:</span> <span className="font-bold">{entry.fats}g</span></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}