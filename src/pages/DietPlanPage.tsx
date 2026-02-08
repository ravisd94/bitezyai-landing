import { useState } from "react";

export function DietPlanPage() {
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
                <span className="inline-block animate-spin">⏳</span>
                Generating Your Plan...
              </>
            ) : (
              <>
                <span>✨ Generate Plan</span>
              </>
            )}
          </button>

          {/* Result */}
          {result && (
            <div className="mt-8 p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border-2 border-green-200 animate-fade-in-up">
              <p className="text-gray-800 whitespace-pre-wrap font-medium leading-relaxed">
                {result}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
