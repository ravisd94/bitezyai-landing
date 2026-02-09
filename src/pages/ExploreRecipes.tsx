import { useState } from "react";

interface Recipe {
  id: number;
  name: string;
  icon: string;
  category: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  difficulty: string;
  rating: number;
  reviews: number;
  color: string;
  border: string;
  ingredients: { item: string; amount: string }[];
  steps: string[];
  tips: string[];
  tags: string[];
}

export function ExploreRecipes() {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  const recipes: Recipe[] = [
    {
      id: 1,
      name: "Grilled Salmon with Quinoa",
      icon: "🐟",
      category: "Lunch",
      prepTime: "15 min",
      cookTime: "20 min",
      servings: 2,
      calories: 450,
      protein: 42,
      carbs: 35,
      fats: 18,
      difficulty: "Easy",
      rating: 4.9,
      reviews: 1234,
      color: "from-orange-50 to-orange-100",
      border: "border-orange-300",
      ingredients: [
        { item: "Salmon Fillet", amount: "2 fillets (150g each)" },
        { item: "Quinoa", amount: "150g uncooked" },
        { item: "Lemon", amount: "1 whole" },
        { item: "Olive Oil", amount: "2 tbsp" },
        { item: "Fresh Herbs (Dill)", amount: "1 tbsp chopped" },
        { item: "Salt & Pepper", amount: "To taste" },
        { item: "Garlic Cloves", amount: "2 minced" },
        { item: "Asparagus", amount: "200g" },
      ],
      steps: [
        "Rinse quinoa under cold water and add to pot with 300ml water. Bring to boil, then reduce heat and simmer for 15 minutes.",
        "While quinoa cooks, pat salmon fillets dry with paper towels and season with salt, pepper, and minced garlic on both sides.",
        "Heat olive oil in a grill pan over medium-high heat for 2-3 minutes until hot.",
        "Place salmon skin-side up in the pan and grill for 4-5 minutes without moving to get a nice crust.",
        "Flip salmon carefully and cook for another 3-4 minutes until cooked through. Squeeze fresh lemon juice on top.",
        "Toss asparagus with 1 tbsp olive oil, salt, and pepper. Grill alongside salmon for the last 5-6 minutes.",
        "Fluff quinoa with a fork and stir in remaining lemon juice and fresh dill.",
        "Plate the quinoa as the base, top with grilled salmon fillet and asparagus on the side. Serve immediately.",
      ],
      tips: [
        "Don't move the salmon while grilling to develop a crispy skin",
        "Quinoa should have a fluffy texture when cooked - don't over-mix",
        "For medium-rare salmon, cook for 6-7 minutes total. For well-done, cook 8-9 minutes.",
        "You can use any white fish like cod or halibut as a substitute",
      ],
      tags: ["High Protein", "Omega-3", "Gluten-Free"],
    },
    {
      id: 2,
      name: "Green Detox Smoothie",
      icon: "🥤",
      category: "Breakfast",
      prepTime: "5 min",
      cookTime: "0 min",
      servings: 1,
      calories: 180,
      protein: 8,
      carbs: 28,
      fats: 4,
      difficulty: "Very Easy",
      rating: 4.7,
      reviews: 892,
      color: "from-green-50 to-green-100",
      border: "border-green-300",
      ingredients: [
        { item: "Fresh Spinach", amount: "2 cups loosely packed" },
        { item: "Banana", amount: "1 medium" },
        { item: "Green Apple", amount: "1 whole" },
        { item: "Fresh Ginger", amount: "1-inch piece" },
        { item: "Unsweetened Almond Milk", amount: "250ml" },
        { item: "Ice Cubes", amount: "1 cup" },
        { item: "Lime Juice", amount: "1 tbsp" },
        { item: "Honey (optional)", amount: "1 tsp" },
      ],
      steps: [
        "Wash spinach thoroughly and roughly chop if using large leaves.",
        "Peel banana and cut into chunks. Core the apple and cut into chunks.",
        "Peel fresh ginger with a spoon to remove the skin easily.",
        "Add spinach, banana, apple, and ginger to blender first (spinach at bottom).",
        "Pour almond milk over the ingredients.",
        "Add ice cubes and fresh lime juice.",
        "Blend on high speed for 45-60 seconds until completely smooth. If too thick, add more almond milk.",
        "Taste and add honey if desired for extra sweetness. Pour into glass and serve immediately.",
      ],
      tips: [
        "Frozen banana makes the smoothie creamier - prepare banana chunks ahead",
        "Don't add ice if using frozen banana for better consistency",
        "Fresh ginger adds a spicy kick - adjust amount to your taste",
        "Drink immediately to preserve nutrients and prevent separation",
      ],
      tags: ["Vegan", "Low Calorie", "Detox"],
    },
    {
      id: 3,
      name: "Spicy Chicken Stir-fry",
      icon: "🍗",
      category: "Dinner",
      prepTime: "15 min",
      cookTime: "15 min",
      servings: 3,
      calories: 380,
      protein: 45,
      carbs: 28,
      fats: 12,
      difficulty: "Easy",
      rating: 4.8,
      reviews: 1567,
      color: "from-red-50 to-red-100",
      border: "border-red-300",
      ingredients: [
        { item: "Chicken Breast", amount: "500g" },
        { item: "Bell Peppers (mix)", amount: "2 medium" },
        { item: "Fresh Broccoli", amount: "250g florets" },
        { item: "Low-Sodium Soy Sauce", amount: "3 tbsp" },
        { item: "Fresh Ginger", amount: "1 tbsp minced" },
        { item: "Garlic Cloves", amount: "4 minced" },
        { item: "Red Chili Flakes", amount: "1 tsp (adjust for heat)" },
        { item: "Sesame Oil", amount: "1 tbsp" },
        { item: "Vegetable Oil", amount: "2 tbsp" },
        { item: "Green Onions", amount: "2 stalks sliced" },
        { item: "Sesame Seeds", amount: "1 tbsp (optional)" },
      ],
      steps: [
        "Cut chicken breast into bite-sized cubes (about 2cm). Pat dry with paper towels.",
        "Chop bell peppers into roughly equal 2cm chunks. Cut broccoli into small florets.",
        "In a small bowl, mix soy sauce, minced ginger, and red chili flakes. Set aside.",
        "Heat 1 tbsp vegetable oil in a wok or large skillet over high heat until smoking.",
        "Add chicken pieces and stir-fry for 5-6 minutes until cooked through and golden. Remove and set aside.",
        "Add remaining oil to the wok. Add minced garlic and stir for 20 seconds until fragrant.",
        "Add bell peppers and broccoli. Stir-fry for 4-5 minutes until vegetables are tender-crisp.",
        "Return chicken to wok. Pour in soy sauce mixture and drizzle sesame oil.",
        "Toss everything together for 2 minutes. Garnish with green onions and sesame seeds.",
        "Serve immediately over brown rice or cauliflower rice.",
      ],
      tips: [
        "Keep all ingredients prepped before you start cooking - stir-frying is fast!",
        "High heat is key for crispy vegetables and tender chicken",
        "Don't overcrowd the wok - cook in batches if needed",
        "Vegetables should still have a slight crunch when done",
      ],
      tags: ["High Protein", "Low Fat", "Quick"],
    },
    {
      id: 4,
      name: "Mediterranean Salad Bowl",
      icon: "🥗",
      category: "Lunch",
      prepTime: "10 min",
      cookTime: "0 min",
      servings: 2,
      calories: 320,
      protein: 12,
      carbs: 38,
      fats: 14,
      difficulty: "Very Easy",
      rating: 4.6,
      reviews: 2341,
      color: "from-blue-50 to-blue-100",
      border: "border-blue-300",
      ingredients: [
        { item: "Mixed Salad Greens", amount: "200g" },
        { item: "Cherry Tomatoes", amount: "150g halved" },
        { item: "Cucumber", amount: "1 large sliced" },
        { item: "Red Onion", amount: "1/4 medium thinly sliced" },
        { item: "Feta Cheese", amount: "100g crumbled" },
        { item: "Kalamata Olives", amount: "50g pitted" },
        { item: "Extra Virgin Olive Oil", amount: "3 tbsp" },
        { item: "Lemon Juice", amount: "2 tbsp" },
        { item: "Oregano (dried)", amount: "1 tsp" },
        { item: "Chickpeas (canned)", amount: "200g drained" },
        { item: "Salt & Pepper", amount: "To taste" },
      ],
      steps: [
        "Wash all vegetables thoroughly and pat dry. Damp vegetables will dilute the dressing.",
        "Roughly chop mixed greens and place in a large salad bowl.",
        "Add halved cherry tomatoes, sliced cucumber, and thinly sliced red onion.",
        "Drain canned chickpeas and rinse thoroughly. Add to the bowl.",
        "Crumble feta cheese and scatter over the top along with kalamata olives.",
        "In a small bowl, whisk together extra virgin olive oil, lemon juice, dried oregano, salt, and pepper.",
        "Pour dressing over salad just before serving and toss gently to combine.",
        "Divide between two bowls and serve immediately while vegetables are fresh and crisp.",
      ],
      tips: [
        "Prep vegetables ahead but don't dress the salad until serving to keep it crisp",
        "Quality extra virgin olive oil makes a big difference in taste",
        "For protein boost, add grilled chicken breast or chickpeas",
        "This salad is very forgiving - substitute any vegetables you prefer",
      ],
      tags: ["Vegetarian", "Fresh", "Low Calorie"],
    },
    {
      id: 5,
      name: "Protein Pancakes",
      icon: "🥞",
      category: "Breakfast",
      prepTime: "10 min",
      cookTime: "10 min",
      servings: 2,
      calories: 290,
      protein: 22,
      carbs: 32,
      fats: 8,
      difficulty: "Easy",
      rating: 4.8,
      reviews: 1123,
      color: "from-yellow-50 to-yellow-100",
      border: "border-yellow-300",
      ingredients: [
        { item: "Vanilla Protein Powder", amount: "30g (1 scoop)" },
        { item: "Large Eggs", amount: "2 whole" },
        { item: "Rolled Oats", amount: "50g" },
        { item: "Banana", amount: "1 medium mashed" },
        { item: "Raw Honey", amount: "1 tbsp" },
        { item: "Baking Powder", amount: "1 tsp" },
        { item: "Cinnamon", amount: "1/2 tsp" },
        { item: "Vanilla Extract", amount: "1/2 tsp" },
        { item: "Coconut Oil or Butter", amount: "1 tbsp for cooking" },
        { item: "Berries (toppings)", amount: "150g mixed" },
        { item: "Greek Yogurt", amount: "100g (topping)" },
      ],
      steps: [
        "Add rolled oats to a blender and pulse until you have a fine oat flour consistency.",
        "In a mixing bowl, crack eggs and beat well. Stir in mashed banana and honey.",
        "Mix in protein powder, oat flour, baking powder, cinnamon, and vanilla extract until you have a smooth batter.",
        "Let batter rest for 2 minutes - it should thicken slightly as the oats absorb moisture.",
        "Heat coconut oil or butter in a non-stick skillet over medium heat.",
        "Pour 1/4 cup batter onto the skillet for each pancake. These are smaller and delicate, so don't make them too large.",
        "Cook for 1.5-2 minutes until edges look dry and bubbles form on top. Carefully flip.",
        "Cook the other side for 1-1.5 minutes until golden brown. Transfer to a plate.",
        "Repeat with remaining batter to make 4-6 pancakes depending on size.",
        "Top with Greek yogurt, fresh berries, and a drizzle of honey. Serve immediately.",
      ],
      tips: [
        "Don't overmix the batter - some lumps are okay and keep pancakes fluffy",
        "Use a spatula to flip gently as these are more delicate than regular pancakes",
        "Make extra pancakes and freeze them for quick future breakfasts",
        "You can add chocolate chips or blueberries directly into the batter",
      ],
      tags: ["High Protein", "Breakfast", "Post-Workout"],
    },
    {
      id: 6,
      name: "Buddha Bowl with Tofu",
      icon: "🥙",
      category: "Lunch",
      prepTime: "20 min",
      cookTime: "20 min",
      servings: 2,
      calories: 380,
      protein: 18,
      carbs: 52,
      fats: 14,
      difficulty: "Easy",
      rating: 4.7,
      reviews: 987,
      color: "from-purple-50 to-purple-100",
      border: "border-purple-300",
      ingredients: [
        { item: "Firm Tofu", amount: "250g pressed" },
        { item: "Sweet Potato", amount: "300g cubed" },
        { item: "Fresh Kale", amount: "150g chopped" },
        { item: "Cooked Chickpeas", amount: "200g" },
        { item: "Tahini", amount: "3 tbsp" },
        { item: "Lemon Juice", amount: "2 tbsp" },
        { item: "Garlic Cloves", amount: "2 minced" },
        { item: "Olive Oil", amount: "3 tbsp" },
        { item: "Cumin", amount: "1 tsp" },
        { item: "Paprika", amount: "1/2 tsp" },
        { item: "Salt & Pepper", amount: "To taste" },
        { item: "Cooked Quinoa", amount: "150g" },
        { item: "Pomegranate Seeds", amount: "50g (garnish)" },
      ],
      steps: [
        "Press tofu between paper towels for 10 minutes to remove excess water. Cut into 2cm cubes.",
        "Toss sweet potato cubes with 1 tbsp olive oil, salt, and pepper. Roast at 200°C for 20 minutes until soft.",
        "Massage kale with 1 tbsp olive oil and a pinch of salt until it softens slightly.",
        "Toss chickpeas with cumin, paprika, minced garlic, salt, and pepper. Roast alongside sweet potato for 15 minutes.",
        "Heat remaining olive oil in a pan over medium-high heat. Pan-fry tofu cubes for 3-4 minutes per side until golden.",
        "In a small bowl, whisk tahini, lemon juice, minced garlic, and 2 tbsp water to make the dressing smooth.",
        "Divide cooked quinoa between two bowls as the base.",
        "Arrange roasted sweet potato, massaged kale, roasted chickpeas, and pan-fried tofu on top of quinoa.",
        "Drizzle tahini dressing over the bowl and garnish with pomegranate seeds.",
        "Serve at room temperature or slightly warm.",
      ],
      tips: [
        "Press tofu thoroughly for crispier results when pan-frying",
        "Tahini dressing can be made ahead and stored in the fridge",
        "This bowl is very customizable - add or substitute any vegetables you like",
        "Make double the amount and store in containers for meal prep",
      ],
      tags: ["Vegan", "Balanced", "Plant-Based"],
    },
    {
      id: 7,
      name: "Grilled Veggie & Lean Beef",
      icon: "🥩",
      category: "Dinner",
      prepTime: "20 min",
      cookTime: "20 min",
      servings: 3,
      calories: 420,
      protein: 48,
      carbs: 22,
      fats: 16,
      difficulty: "Medium",
      rating: 4.9,
      reviews: 1456,
      color: "from-pink-50 to-pink-100",
      border: "border-pink-300",
      ingredients: [
        { item: "Lean Beef Steak", amount: "600g (sirloin or ribeye)" },
        { item: "Zucchini", amount: "2 medium" },
        { item: "Fresh Asparagus", amount: "300g" },
        { item: "Garlic Cloves", amount: "4 minced" },
        { item: "Extra Virgin Olive Oil", amount: "3 tbsp" },
        { item: "Fresh Rosemary", amount: "2 sprigs" },
        { item: "Fresh Thyme", amount: "2 sprigs" },
        { item: "Balsamic Vinegar", amount: "1 tbsp" },
        { item: "Sea Salt", amount: "1 tsp" },
        { item: "Black Pepper", amount: "To taste" },
        { item: "Lemon", amount: "1 whole" },
      ],
      steps: [
        "Remove beef from refrigerator 30 minutes before cooking to bring to room temperature.",
        "Slice zucchini lengthwise into thin strips. Trim woody ends of asparagus.",
        "In a small bowl, combine minced garlic, 2 tbsp olive oil, balsamic vinegar, salt, and pepper.",
        "Preheat grill to high heat (if using skillet, heat over medium-high).",
        "Pat beef dry with paper towels. Brush with 1 tbsp olive oil and season generously with salt and pepper.",
        "Place beef on grill and cook for 4-5 minutes without moving (for rare to medium-rare). Flip and cook another 4 minutes.",
        "Transfer beef to a plate and tent with foil to rest for 5 minutes.",
        "Place zucchini and asparagus on grill. Brush with garlic-oil mixture and grill for 4-5 minutes per side.",
        "Top vegetables with fresh rosemary and thyme sprigs. Finish with squeeze of fresh lemon.",
        "Slice beef against the grain and serve alongside grilled vegetables. Drizzle any pan juices over beef.",
      ],
      tips: [
        "Let beef rest after cooking to keep it juicy - don't skip this step",
        "For accurate doneness, use a meat thermometer: 50°C for rare, 60°C for medium-rare, 70°C for medium",
        "Vegetables should have slight char marks for best flavor",
        "Cut against the grain for more tender slices of beef",
      ],
      tags: ["High Protein", "Low Carb", "Keto"],
    },
    {
      id: 8,
      name: "Overnight Oats",
      icon: "🍲",
      category: "Breakfast",
      prepTime: "5 min",
      cookTime: "0 min",
      servings: 1,
      calories: 340,
      protein: 12,
      carbs: 48,
      fats: 10,
      difficulty: "Very Easy",
      rating: 4.6,
      reviews: 2123,
      color: "from-amber-50 to-amber-100",
      border: "border-amber-300",
      ingredients: [
        { item: "Rolled Oats", amount: "50g (half cup)" },
        { item: "Plain Greek Yogurt", amount: "100g" },
        { item: "Unsweetened Almond Milk", amount: "150ml" },
        { item: "Raw Honey", amount: "1 tbsp" },
        { item: "Fresh Blueberries", amount: "80g" },
        { item: "Sliced Almonds", amount: "20g" },
        { item: "Vanilla Extract", amount: "1/4 tsp" },
        { item: "Cinnamon", amount: "1/4 tsp" },
        { item: "Chia Seeds", amount: "1 tbsp (optional)" },
        { item: "Sea Salt", amount: "Pinch" },
      ],
      steps: [
        "In a mason jar or container, combine rolled oats, Greek yogurt, and almond milk.",
        "Add honey, vanilla extract, cinnamon, chia seeds, and a pinch of sea salt.",
        "Stir well to combine all ingredients and break up any clumps.",
        "Cover the jar with a lid or plastic wrap.",
        "Refrigerate overnight (or at least 4 hours). The oats will absorb the liquid and become creamy.",
        "In the morning, give it a stir. If too thick, add more almond milk to reach desired consistency.",
        "Top with fresh blueberries and sliced almonds.",
        "Eat straight from the jar or pour into a bowl. Serve cold or heat in microwave for 1-2 minutes if preferred.",
      ],
      tips: [
        "Prepare multiple jars at once for grab-and-go breakfasts throughout the week",
        "Don't skip the salt - it enhances all the flavors",
        "Use vanilla Greek yogurt for extra flavor without added sugar",
        "Get creative with toppings: coconut flakes, granola, nuts, different berries",
      ],
      tags: ["No Cook", "High Fiber", "Filling"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-cyan-50 px-4 py-12 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      {/* Modal View - Selected Recipe Details */}
      {selectedRecipe && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 overflow-y-auto py-8">
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              {/* Close Button */}
              <button
                onClick={() => setSelectedRecipe(null)}
                className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-red-500 hover:text-white text-gray-800 rounded-full w-12 h-12 flex items-center justify-center text-2xl transition-all transform hover:scale-110"
              >
                ✕
              </button>

              {/* Recipe Header */}
              <div className={`bg-gradient-to-r ${selectedRecipe.color} p-8`}>
                <div className="flex items-start gap-6">
                  <div className="text-7xl">{selectedRecipe.icon}</div>
                  <div className="flex-1">
                    <h1 className="text-4xl font-black text-gray-800 mb-3">{selectedRecipe.name}</h1>
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-600">Category</p>
                        <p className="font-bold text-gray-800">{selectedRecipe.category}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Difficulty</p>
                        <p className="font-bold text-gray-800">{selectedRecipe.difficulty}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Servings</p>
                        <p className="font-bold text-gray-800">{selectedRecipe.servings}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-400">⭐</span>
                      <span className="font-bold text-gray-800">{selectedRecipe.rating}</span>
                      <span className="text-gray-600">({selectedRecipe.reviews} reviews)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recipe Content */}
              <div className="p-8 space-y-10">
                {/* Time Info */}
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="bg-blue-50 p-4 rounded-2xl border-2 border-blue-200">
                    <p className="text-sm text-blue-700 font-bold">Prep Time</p>
                    <p className="text-2xl font-black text-blue-600">{selectedRecipe.prepTime}</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-2xl border-2 border-orange-200">
                    <p className="text-sm text-orange-700 font-bold">Cook Time</p>
                    <p className="text-2xl font-black text-orange-600">{selectedRecipe.cookTime}</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-2xl border-2 border-green-200">
                    <p className="text-sm text-green-700 font-bold">Calories</p>
                    <p className="text-2xl font-black text-green-600">{selectedRecipe.calories}</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-2xl border-2 border-purple-200">
                    <p className="text-sm text-purple-700 font-bold">Protein</p>
                    <p className="text-2xl font-black text-purple-600">{selectedRecipe.protein}g</p>
                  </div>
                </div>

                {/* Ingredients */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                    <span className="text-3xl">📋</span> Ingredients
                  </h2>
                  <div className="bg-amber-50 p-6 rounded-2xl border-2 border-amber-200 space-y-3">
                    {selectedRecipe.ingredients.map((ing, idx) => (
                      <div key={idx} className="flex items-center gap-4">
                        <input type="checkbox" className="w-5 h-5 rounded cursor-pointer" />
                        <div className="flex-1">
                          <p className="font-semibold text-gray-800">{ing.item}</p>
                          <p className="text-sm text-gray-600">{ing.amount}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cooking Instructions */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                    <span className="text-3xl">👨‍🍳</span> Cooking Instructions
                  </h2>
                  <div className="space-y-4">
                    {selectedRecipe.steps.map((step, idx) => (
                      <div key={idx} className="flex gap-4 p-4 bg-gray-50 rounded-2xl border-2 border-gray-200 hover:bg-gray-100 transition-colors">
                        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                          {idx + 1}
                        </div>
                        <p className="text-gray-800 font-medium leading-relaxed pt-1">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pro Tips */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                    <span className="text-3xl">💡</span> Pro Tips & Tricks
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {selectedRecipe.tips.map((tip, idx) => (
                      <div key={idx} className="bg-blue-50 p-4 rounded-2xl border-2 border-blue-200">
                        <p className="text-blue-900 font-medium leading-relaxed">{tip}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Nutrition Info */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                    <span className="text-3xl">🥗</span> Nutrition Per Serving
                  </h2>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="bg-red-50 p-4 rounded-2xl border-2 border-red-200">
                      <p className="text-red-700 font-bold">Protein</p>
                      <p className="text-3xl font-black text-red-600">{selectedRecipe.protein}g</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-2xl border-2 border-blue-200">
                      <p className="text-blue-700 font-bold">Carbs</p>
                      <p className="text-3xl font-black text-blue-600">{selectedRecipe.carbs}g</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-2xl border-2 border-orange-200">
                      <p className="text-orange-700 font-bold">Fats</p>
                      <p className="text-3xl font-black text-orange-600">{selectedRecipe.fats}g</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-2xl border-2 border-green-200">
                      <p className="text-green-700 font-bold">Calories</p>
                      <p className="text-3xl font-black text-green-600">{selectedRecipe.calories}</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-6 border-t-2 border-gray-200">
                  <button
                    onClick={() => setSelectedRecipe(null)}
                    className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-800 font-bold rounded-2xl hover:bg-gray-100 transition-all"
                  >
                    ← Back to Recipes
                  </button>
                  <button className="flex-1 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-2xl hover:shadow-lg transition-all transform hover:scale-105">
                    💾 Save Recipe
                  </button>
                  <button className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold rounded-2xl hover:shadow-lg transition-all transform hover:scale-105">
                    📤 Share Recipe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content - Recipe List */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center animate-fade-in-down">
          <h1 className="text-5xl font-black bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent mb-4">
            Explore Recipes 👨‍🍳
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Discover delicious and nutritious recipes for every meal
          </p>
          <p className="text-sm text-gray-500">
            From quick breakfasts to gourmet dinners - all tracked and healthy
          </p>
        </div>

        {/* Filter Section */}
        <div className="mb-12 bg-white/90 backdrop-blur-lg p-6 rounded-3xl shadow-xl border-2 border-white/50">
          <div className="grid md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Meal Type</label>
              <select className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 transition-colors">
                <option>All Meals</option>
                <option>Breakfast</option>
                <option>Lunch</option>
                <option>Dinner</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Prep Time</label>
              <select className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 transition-colors">
                <option>Any Time</option>
                <option>Under 10 min</option>
                <option>10-20 min</option>
                <option>20-30 min</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Dietary</label>
              <select className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 transition-colors">
                <option>All Recipes</option>
                <option>Vegan</option>
                <option>Vegetarian</option>
                <option>Keto</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Difficulty</label>
              <select className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 transition-colors">
                <option>All Levels</option>
                <option>Very Easy</option>
                <option>Easy</option>
                <option>Medium</option>
              </select>
            </div>
          </div>
        </div>

        {/* Recipes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className={`bg-gradient-to-br ${recipe.color} backdrop-blur-lg rounded-2xl shadow-xl border-2 ${recipe.border} hover:shadow-2xl hover:scale-105 transition-all transform cursor-pointer overflow-hidden group`}
            >
              {/* Recipe Card */}
              <div className="p-6 h-full flex flex-col">
                {/* Icon & Category */}
                <div className="flex items-start justify-between mb-3">
                  <div className="text-4xl">{recipe.icon}</div>
                  <span className="text-xs px-2 py-1 bg-white/60 rounded-full font-semibold text-gray-800">
                    {recipe.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors line-clamp-2">
                  {recipe.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  <span className="text-yellow-400">⭐</span>
                  <span className="font-bold text-gray-800">{recipe.rating}</span>
                  <span className="text-xs text-gray-600">({recipe.reviews})</span>
                </div>

                {/* Time & Servings */}
                <div className="flex gap-3 text-xs font-semibold text-gray-700 mb-3">
                  <span>⏱️ {recipe.prepTime}</span>
                  <span>🍽️ {recipe.servings} servings</span>
                </div>

                {/* Macros */}
                <div className="grid grid-cols-4 gap-2 mb-3">
                  <div className="bg-white/50 px-2 py-1 rounded text-center">
                    <p className="text-xs text-gray-600">Calories</p>
                    <p className="text-sm font-bold text-gray-800">{recipe.calories}</p>
                  </div>
                  <div className="bg-white/50 px-2 py-1 rounded text-center">
                    <p className="text-xs text-gray-600">P</p>
                    <p className="text-sm font-bold text-gray-800">{recipe.protein}g</p>
                  </div>
                  <div className="bg-white/50 px-2 py-1 rounded text-center">
                    <p className="text-xs text-gray-600">C</p>
                    <p className="text-sm font-bold text-gray-800">{recipe.carbs}g</p>
                  </div>
                  <div className="bg-white/50 px-2 py-1 rounded text-center">
                    <p className="text-xs text-gray-600">F</p>
                    <p className="text-sm font-bold text-gray-800">{recipe.fats}g</p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {recipe.tags.slice(0, 2).map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 bg-white/40 rounded-full text-gray-800 font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <button
                  onClick={() => setSelectedRecipe(recipe)}
                  className="mt-auto w-full py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-lg hover:shadow-lg transition-all transform hover:scale-105 text-sm"
                >
                  View Recipe →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-3xl p-12 text-white text-center shadow-2xl">
          <h2 className="text-3xl font-bold mb-4">Looking for something specific?</h2>
          <p className="text-lg mb-6 text-white/90">Search our database of 1000+ healthy recipes tailored to your dietary preferences</p>
          <button className="px-8 py-3 bg-white text-purple-600 font-bold rounded-full hover:bg-gray-100 transition-all transform hover:scale-105">
            Browse All Recipes →
          </button>
        </div>
      </div>
    </div>
  );
}
