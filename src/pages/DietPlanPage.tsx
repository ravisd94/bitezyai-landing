import { useState } from "react";

interface DietPlan {
  breakfast: { meal: string; calories: number; macros: string };
  lunch: { meal: string; calories: number; macros: string };
  snack: { meal: string; calories: number; macros: string };
  dinner: { meal: string; calories: number; macros: string };
  totalCalories: number;
  macroBreakdown: { protein: string; carbs: string; fats: string };
  tips: string[];
}

export function DietPlanPage() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const [dietaryRestriction, setDietaryRestriction] = useState("");
  const [goal, setGoal] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [mealsPerDay, setMealsPerDay] = useState("4");
  const [allergies, setAllergies] = useState("");
  const [plan, setPlan] = useState<DietPlan | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const calculateCalories = () => {
    if (!age || !weight || !height || !activityLevel) {
      return 2000; // Default
    }
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseInt(age);
    
    // Simplified BMR calculation (Mifflin-St Jeor)
    const bmr = (10 * w) + (6.25 * h) - (5 * a) + 5;
    const activityFactors: { [key: string]: number } = {
      "Sedentary": 1.2,
      "Lightly Active": 1.375,
      "Moderately Active": 1.55,
      "Very Active": 1.725,
    };
    return Math.round(bmr * (activityFactors[activityLevel] || 1.5));
  };

  const generatePlan = () => {
    if (!goal || !cuisine || !dietaryRestriction) {
      alert("⚠️ Please complete all fields!");
      return;
    }

    setIsGenerating(true);

    setTimeout(() => {
      const dailyCalories = calculateCalories();
      const mealsCount = parseInt(mealsPerDay);
      const caloriesPerMeal = Math.round(dailyCalories / mealsCount);

      // Generate macros based on goal
      const macroRatios = getMacroRatios(goal);
      const protein = Math.round((dailyCalories * macroRatios.protein) / 4);
      const carbs = Math.round((dailyCalories * macroRatios.carbs) / 4);
      const fats = Math.round((dailyCalories * macroRatios.fats) / 9);

      const newPlan: DietPlan = {
        breakfast: {
          meal: getBreakfast(cuisine, dietaryRestriction),
          calories: Math.round(caloriesPerMeal * 1.2),
          macros: "25g P, 45g C, 15g F",
        },
        lunch: {
          meal: getLunch(cuisine, dietaryRestriction),
          calories: Math.round(caloriesPerMeal * 1.3),
          macros: "35g P, 50g C, 18g F",
        },
        snack: {
          meal: getSnack(cuisine, dietaryRestriction),
          calories: Math.round(caloriesPerMeal * 0.8),
          macros: "8g P, 25g C, 5g F",
        },
        dinner: {
          meal: getDinner(cuisine, dietaryRestriction),
          calories: Math.round(caloriesPerMeal * 1.2),
          macros: "32g P, 48g C, 16g F",
        },
        totalCalories: dailyCalories,
        macroBreakdown: {
          protein: `${protein}g (${(macroRatios.protein * 100).toFixed(0)}%)`,
          carbs: `${carbs}g (${(macroRatios.carbs * 100).toFixed(0)}%)`,
          fats: `${fats}g (${(macroRatios.fats * 100).toFixed(0)}%)`,
        },
        tips: getTips(goal),
      };

      setPlan(newPlan);
      setIsGenerating(false);
      setStep(3);
    }, 2000);
  };

  const getMacroRatios = (goal: string) => {
    const ratios: { [key: string]: { protein: number; carbs: number; fats: number } } = {
      "Weight Loss": { protein: 0.35, carbs: 0.45, fats: 0.20 },
      "Muscle Gain": { protein: 0.40, carbs: 0.45, fats: 0.15 },
      "Healthy Lifestyle": { protein: 0.30, carbs: 0.50, fats: 0.20 },
      "Athletic Performance": { protein: 0.35, carbs: 0.55, fats: 0.10 },
    };
    return ratios[goal] || { protein: 0.30, carbs: 0.50, fats: 0.20 };
  };

  const getTips = (goal: string) => {
    const tips: { [key: string]: string[] } = {
      "Weight Loss": [
        "Create a calorie deficit of 300-500 calories/day for sustainable weight loss",
        "Drink water before meals to reduce appetite",
        "Focus on protein to maintain muscle mass during weight loss",
        "Track your food intake daily for accountability",
      ],
      "Muscle Gain": [
        "Eat in a caloric surplus of 300-500 calories/day",
        "Prioritize protein intake (1.6-2.2g per kg body weight)",
        "Time your carbs around workouts for energy and recovery",
        "Be consistent with your training and nutrition",
      ],
      "Healthy Lifestyle": [
        "Balance all macronutrients for optimal health",
        "Include plenty of whole foods and minimally processed items",
        "Stay hydrated with at least 3 liters of water daily",
        "Include colorful vegetables for micronutrient diversity",
      ],
      "Athletic Performance": [
        "Time your meals 2-3 hours before intense workouts",
        "Include fast-digesting carbs post-workout for recovery",
        "Maintain electrolyte balance during training",
        "Prioritize nutrient-dense foods for peak performance",
      ],
    };
    return tips[goal] || [];
  };

  const getBreakfast = (cuisine: string, dietary: string) => {
    const options: { [key: string]: string } = {
      "Indian|Regular": "Moong dal chilla with mint chutney + Greek yogurt + berries",
      "Indian|Vegetarian": "Idli with sambar and coconut chutney",
      "Indian|Vegan": "Oats upma with vegetables",
      "Italian|Regular": "Frittata with spinach, tomatoes & whole grain toast",
      "Italian|Vegetarian": "Ricotta pancakes with fresh berries",
      "Italian|Vegan": "Polenta with roasted vegetables",
      "Mexican|Regular": "Breakfast burrito with eggs, beans & avocado",
      "Mexican|Vegetarian": "Breakfast burrito with black beans & cheese",
      "Mexican|Vegan": "Vegan breakfast burrito with tofu & avocado",
      "Chinese|Regular": "Congee with century egg & scallions",
      "Chinese|Vegetarian": "Congee with mushrooms & greens",
      "Chinese|Vegan": "Congee with vegetables",
      "American|Regular": "Scrambled eggs, turkey bacon & avocado toast",
      "American|Vegetarian": "Veggie omelet with whole grain toast",
      "American|Vegan": "Tofu scramble with spinach & whole grain toast",
      "Mediterranean|Regular": "Greek yogurt parfait with honey, nuts & berries",
      "Mediterranean|Vegetarian": "Feta & spinach stuffed pita",
      "Mediterranean|Vegan": "Hummus & vegetable whole grain toast",
    };
    return options[`${cuisine}|${dietary}`] || "High protein balanced breakfast";
  };

  const getLunch = (cuisine: string, dietary: string) => {
    const options: { [key: string]: string } = {
      "Indian|Regular": "Grilled tandoori chicken with quinoa & cucumber raita",
      "Indian|Vegetarian": "Chana masala with quinoa",
      "Indian|Vegan": "Vegetable biryani with lentils",
      "Italian|Regular": "Grilled salmon with roasted vegetables & pasta",
      "Italian|Vegetarian": "Vegetable lasagna with whole wheat pasta",
      "Italian|Vegan": "Chickpea pasta with marinara sauce",
      "Mexican|Regular": "Chicken fajita bowl with brown rice & guacamole",
      "Mexican|Vegetarian": "Veggie fajita bowl with black beans & cheese",
      "Mexican|Vegan": "Vegan burrito bowl with beans & guacamole",
      "Chinese|Regular": "Stir-fried chicken with bok choy & brown rice",
      "Chinese|Vegetarian": "Vegetable stir-fry with tofu & brown rice",
      "Chinese|Vegan": "Vegetable lo mein with cashew sauce",
      "American|Regular": "Grilled chicken breast with sweet potato & broccoli",
      "American|Vegetarian": "Veggie burger with sweet potato fries",
      "American|Vegan": "Lentil burger with roasted vegetables",
      "Mediterranean|Regular": "Grilled chicken souvlaki with Greek salad",
      "Mediterranean|Vegetarian": "Falafel wrap with tahini sauce",
      "Mediterranean|Vegan": "Hummus & vegetable salad with tahini",
    };
    return options[`${cuisine}|${dietary}`] || "Balanced healthy plate";
  };

  const getSnack = (cuisine: string, dietary: string) => {
    const options: { [key: string]: string } = {
      "Indian|Regular": "Roasted chana (chickpeas) + green tea + nuts",
      "Indian|Vegetarian": "Roasted chickpeas + mixed nuts",
      "Indian|Vegan": "Roasted chickpeas + coconut water",
      "Italian|Regular": "Caprese skewers with balsamic glaze + almonds",
      "Italian|Vegetarian": "Caprese skewers + olives",
      "Italian|Vegan": "Vegetables with olive oil dip",
      "Mexican|Regular": "Guacamole with veggie sticks + chicken jerky",
      "Mexican|Vegetarian": "Guacamole with veggie sticks + cheese",
      "Mexican|Vegan": "Guacamole with veggie sticks + seeds",
      "Chinese|Regular": "Edamame with sea salt + protein shake",
      "Chinese|Vegetarian": "Edamame with sea salt + cheese",
      "Chinese|Vegan": "Edamame with sea salt + nuts",
      "American|Regular": "Apple slices with almond butter + protein bar",
      "American|Vegetarian": "Apple with cheese + almonds",
      "American|Vegan": "Apple with almond butter + seeds",
      "Mediterranean|Regular": "Hummus with veggie sticks + pita + olives",
      "Mediterranean|Vegetarian": "Hummus with veggie sticks + feta",
      "Mediterranean|Vegan": "Hummus with veggie sticks + olives",
    };
    return options[`${cuisine}|${dietary}`] || "Fruits + nuts + protein";
  };

  const getDinner = (cuisine: string, dietary: string) => {
    const options: { [key: string]: string } = {
      "Indian|Regular": "Palak paneer with roti & dal + side salad",
      "Indian|Vegetarian": "Palak paneer with roti",
      "Indian|Vegan": "Vegetable curry with brown rice",
      "Italian|Regular": "Grilled chicken with zucchini noodles & pesto",
      "Italian|Vegetarian": "Vegetable risotto with parmesan",
      "Italian|Vegan": "Pasta primavera with marinara sauce",
      "Mexican|Regular": "Fish tacos with cabbage slaw & lime",
      "Mexican|Vegetarian": "Black bean tacos with cheese & salsa",
      "Mexican|Vegan": "Bean tacos with guacamole & salsa",
      "Chinese|Regular": "Steamed fish with ginger, scallions & bok choy",
      "Chinese|Vegetarian": "Vegetable stir-fry with mushrooms",
      "Chinese|Vegan": "Vegetable fried rice with tofu",
      "American|Regular": "Baked salmon with roasted sweet potato & broccoli",
      "American|Vegetarian": "Grilled portobello mushroom with quinoa",
      "American|Vegan": "Lentil loaf with roasted vegetables",
      "Mediterranean|Regular": "Baked cod with lemon, olives & roasted veg",
      "Mediterranean|Vegetarian": "Greek salad with grilled halloumi cheese",
      "Mediterranean|Vegan": "Roasted chickpeas with olive oil & vegetables",
    };
    return options[`${cuisine}|${dietary}`] || "Light & clean meal";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-cyan-50 px-4 py-12 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-down">
          <h1 className="text-5xl font-black bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent mb-4">
            Smart AI Diet Plan Generator 🧠🍽️
          </h1>
          <p className="text-xl text-gray-600">
            Get a personalized meal plan based on your health metrics and preferences
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="mb-8 flex justify-center gap-4">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all ${
                s === step
                  ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white scale-110 shadow-lg"
                  : s < step
                  ? "bg-green-500 text-white"
                  : "bg-gray-300 text-gray-600"
              }`}
            >
              {s < step ? "✓" : s}
            </div>
          ))}
        </div>

        {/* Step 1: Health Metrics */}
        {step === 1 && (
          <div className="bg-white/90 backdrop-blur-lg p-10 rounded-3xl shadow-2xl border-2 border-white/50 space-y-6 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Step 1: Your Health Profile</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Age (years)</label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder="25"
                  className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:border-pink-400 focus:ring-4 focus:ring-pink-100 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Weight (kg)</label>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="70"
                  className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:border-pink-400 focus:ring-4 focus:ring-pink-100 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Height (cm)</label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="175"
                  className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:border-pink-400 focus:ring-4 focus:ring-pink-100 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Activity Level</label>
                <select
                  value={activityLevel}
                  onChange={(e) => setActivityLevel(e.target.value)}
                  className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:border-pink-400 focus:ring-4 focus:ring-pink-100 outline-none"
                >
                  <option value="">Choose activity level</option>
                  <option value="Sedentary">Sedentary (little exercise)</option>
                  <option value="Lightly Active">Lightly Active (1-3 days/week)</option>
                  <option value="Moderately Active">Moderately Active (3-5 days/week)</option>
                  <option value="Very Active">Very Active (6-7 days/week)</option>
                </select>
              </div>
            </div>

            <button
              onClick={() => setStep(2)}
              className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white p-4 rounded-2xl font-bold text-lg hover:shadow-lg transition-all"
            >
              Next: Goal & Preferences →
            </button>
          </div>
        )}

        {/* Step 2: Diet Preferences */}
        {step === 2 && (
          <div className="bg-white/90 backdrop-blur-lg p-10 rounded-3xl shadow-2xl border-2 border-white/50 space-y-6 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Step 2: Diet Preferences</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">Fitness Goal</label>
                <select
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:border-purple-400 focus:ring-4 focus:ring-purple-100 outline-none"
                >
                  <option value="">Select your goal</option>
                  <option value="Weight Loss">🔥 Weight Loss</option>
                  <option value="Muscle Gain">💪 Muscle Gain</option>
                  <option value="Healthy Lifestyle">🌱 Healthy Lifestyle</option>
                  <option value="Athletic Performance">⚡ Athletic Performance</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">Dietary Restriction</label>
                <select
                  value={dietaryRestriction}
                  onChange={(e) => setDietaryRestriction(e.target.value)}
                  className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:border-purple-400 focus:ring-4 focus:ring-purple-100 outline-none"
                >
                  <option value="">Choose dietary type</option>
                  <option value="Regular">Regular (No restriction)</option>
                  <option value="Vegetarian">Vegetarian</option>
                  <option value="Vegan">Vegan</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">Preferred Cuisine</label>
                <select
                  value={cuisine}
                  onChange={(e) => setCuisine(e.target.value)}
                  className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:border-purple-400 focus:ring-4 focus:ring-purple-100 outline-none"
                >
                  <option value="">Choose cuisine</option>
                  <option value="Indian">🍛 Indian</option>
                  <option value="Italian">🍝 Italian</option>
                  <option value="Mexican">🌮 Mexican</option>
                  <option value="Chinese">🥢 Chinese</option>
                  <option value="American">🍔 American</option>
                  <option value="Mediterranean">🫒 Mediterranean</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">Meals Per Day</label>
                <select
                  value={mealsPerDay}
                  onChange={(e) => setMealsPerDay(e.target.value)}
                  className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:border-purple-400 focus:ring-4 focus:ring-purple-100 outline-none"
                >
                  <option value="3">3 meals (Breakfast, Lunch, Dinner)</option>
                  <option value="4">4 meals (+ Snack)</option>
                  <option value="5">5 meals (+ 2 Snacks)</option>
                  <option value="6">6 meals (+ 2 Snacks + Coffee)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Allergies/Avoid (optional)</label>
              <input
                type="text"
                value={allergies}
                onChange={(e) => setAllergies(e.target.value)}
                placeholder="e.g., Nuts, Dairy, Gluten"
                className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:border-purple-400 focus:ring-4 focus:ring-purple-100 outline-none"
              />
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setStep(1)}
                className="flex-1 border-2 border-gray-300 text-gray-800 p-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all"
              >
                ← Back
              </button>
              <button
                onClick={() => setStep(3)}
                className="flex-1 bg-gradient-to-r from-purple-500 to-cyan-500 text-white p-4 rounded-2xl font-bold text-lg hover:shadow-lg transition-all"
              >
                Generate Plan →
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Generated Plan */}
        {step === 3 && (
          <div className="space-y-6 animate-fade-in-up">
            {isGenerating ? (
              <div className="bg-white/90 backdrop-blur-lg p-20 rounded-3xl shadow-2xl border-2 border-white/50 text-center">
                <div className="inline-block animate-spin text-6xl mb-4">⏳</div>
                <h3 className="text-2xl font-bold text-gray-800">Generating Your Personal Plan...</h3>
                <p className="text-gray-600 mt-2">Our AI is calculating your perfect macros</p>
              </div>
            ) : plan ? (
              <>
                {/* Summary Cards */}
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl border-2 border-orange-300">
                    <p className="text-sm text-orange-700 font-bold mb-2">Daily Calories</p>
                    <p className="text-3xl font-black text-orange-600">{plan.totalCalories}</p>
                    <p className="text-xs text-orange-600 mt-1">Based on your metrics</p>
                  </div>
                  <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-2xl border-2 border-red-300">
                    <p className="text-sm text-red-700 font-bold mb-2">Protein</p>
                    <p className="text-3xl font-black text-red-600">{plan.macroBreakdown.protein}</p>
                    <p className="text-xs text-red-600 mt-1">Muscle building</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border-2 border-blue-300">
                    <p className="text-sm text-blue-700 font-bold mb-2">Carbs</p>
                    <p className="text-3xl font-black text-blue-600">{plan.macroBreakdown.carbs}</p>
                    <p className="text-xs text-blue-600 mt-1">Energy</p>
                  </div>
                  <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-2xl border-2 border-amber-300">
                    <p className="text-sm text-amber-700 font-bold mb-2">Fats</p>
                    <p className="text-3xl font-black text-amber-600">{plan.macroBreakdown.fats}</p>
                    <p className="text-xs text-amber-600 mt-1">Hormones</p>
                  </div>
                </div>

                {/* Meal Plan */}
                <div className="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border-2 border-white/50">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Your Daily Meal Plan 🍽️</h3>
                  
                  <div className="space-y-4">
                    {/* Breakfast */}
                    <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-2xl border-2 border-yellow-300">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="text-lg font-bold text-gray-800">🌅 Breakfast (7:00 AM)</h4>
                          <p className="text-gray-700 font-semibold mt-2">{plan.breakfast.meal}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-black text-orange-600">{plan.breakfast.calories}</p>
                          <p className="text-xs text-orange-700">calories</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">Macros: {plan.breakfast.macros}</p>
                    </div>

                    {/* Lunch */}
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl border-2 border-green-300">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="text-lg font-bold text-gray-800">🍽️ Lunch (12:30 PM)</h4>
                          <p className="text-gray-700 font-semibold mt-2">{plan.lunch.meal}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-black text-green-600">{plan.lunch.calories}</p>
                          <p className="text-xs text-green-700">calories</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">Macros: {plan.lunch.macros}</p>
                    </div>

                    {/* Snack */}
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl border-2 border-purple-300">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="text-lg font-bold text-gray-800">🥤 Snack (4:00 PM)</h4>
                          <p className="text-gray-700 font-semibold mt-2">{plan.snack.meal}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-black text-purple-600">{plan.snack.calories}</p>
                          <p className="text-xs text-purple-700">calories</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">Macros: {plan.snack.macros}</p>
                    </div>

                    {/* Dinner */}
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-2xl border-2 border-blue-300">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="text-lg font-bold text-gray-800">🌙 Dinner (7:30 PM)</h4>
                          <p className="text-gray-700 font-semibold mt-2">{plan.dinner.meal}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-black text-blue-600">{plan.dinner.calories}</p>
                          <p className="text-xs text-blue-700">calories</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">Macros: {plan.dinner.macros}</p>
                    </div>
                  </div>
                </div>

                {/* Tips */}
                <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-8 rounded-3xl border-2 border-pink-300">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">💡 Personalized Tips for Your Goal</h3>
                  <ul className="space-y-3">
                    {plan.tips.map((tip, idx) => (
                      <li key={idx} className="flex gap-4">
                        <span className="text-2xl">✓</span>
                        <span className="text-gray-700 font-semibold">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <button
                    onClick={() => {
                      setStep(1);
                      setPlan(null);
                    }}
                    className="flex-1 border-2 border-gray-300 text-gray-800 p-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all"
                  >
                    ← Generate New Plan
                  </button>
                  <button className="flex-1 bg-gradient-to-r from-pink-500 to-purple-500 text-white p-4 rounded-2xl font-bold text-lg hover:shadow-lg transition-all">
                    Save Plan 💾
                  </button>
                </div>
              </>
            ) : (
              <div className="bg-white/90 backdrop-blur-lg p-8 rounded-3xl text-center">
                <button
                  onClick={generatePlan}
                  disabled={!goal || !cuisine || !dietaryRestriction}
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white p-6 rounded-2xl font-bold text-xl hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  ✨ Generate Your Personalized Plan
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
