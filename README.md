# BitezyAI React App - Complete Version 🎨

## 🚀 Overview

BitezyAI is a vibrant, Gen Z-friendly diet and calorie tracking app with three main features:

1. **Home Page** - Beautiful landing page with feature cards
2. **AI Diet Plan Generator** - Personalized meal plans based on goals and cuisines
3. **Calorie Calculator** - Scientific BMR/TDEE calculator with macro breakdown

---

## ✨ Features

### 🏠 Home Page

- **Hero Section** with animated gradient text
- **Feature Cards** that navigate to main tools
- **Stats Display** showing user engagement (10k+ users, 50k+ meals, 4.9★ rating)
- **Floating Blob Animations** for visual depth
- Click-through navigation to other pages

### 🍽️ AI Diet Plan Generator

- **Goal Selection**: Weight Loss, Muscle Gain, Healthy Lifestyle, Athletic Performance
- **8 Cuisine Options**: Indian, Italian, Mexican, Chinese, American, Mediterranean, Keto, Vegan
- **Cuisine-Specific Meals**: Each cuisine has unique meal suggestions
- **Detailed Plans** include:
  - ⏰ Meal timing (7:00 AM, 12:30 PM, etc.)
  - 🔢 Calorie counts per meal
  - 📊 Daily totals (~1,500 cal)
  - 💧 Hydration goals (3L water)
  - 🎯 Pro tips for success
- **Loading Animation** with 1.5s delay
- **Input Validation** with friendly warnings

### 📊 Calorie Calculator

- **BMR Calculation** using Mifflin-St Jeor Equation
- **TDEE Calculation** based on 5 activity levels
- **Goal-Based Recommendations**:
  - Weight Loss: -500 cal deficit
  - Muscle Gain: +300 cal surplus
  - Maintain: Exact TDEE
- **Macro Breakdown** (30% protein, 40% carbs, 30% fats)
- **Visual Progress Bars** for macros
- **Pro Tips** section
- **Beautiful Results Cards** with gradient designs

---

## 🎨 Design Features

### Visual Design

- **Vibrant Color Palette**:
  - Pink: `#ff6ec7`
  - Purple: `#6366f1`
  - Cyan: `#42f5b3`
  - Yellow: `#ffd166`
- **Gradient Backgrounds** throughout all pages
- **Glass Morphism** effects on cards
- **Animated Floating Blobs** in background
- **Custom Gradient Text** for headings

### Animations

- ✅ **Page Load Animations** (fade-in-down, fade-in-up)
- ✅ **Staggered Delays** for sequential reveals
- ✅ **Hover Effects** on buttons and cards (scale, translate)
- ✅ **Loading Spinners** during calculations
- ✅ **Blob Animations** (7s continuous morphing)
- ✅ **Smooth Transitions** on all interactive elements

### Typography

- **Google Font**: "Outfit" (300-900 weights)
- **Display**: Bold, large gradient text
- **Body**: Clean, readable medium weight
- **Proper Hierarchy**: Sizes, weights, and colors

---

## 📱 Navigation

The app uses simple state-based routing:

- Fixed navigation bar at top
- Three navigation buttons: Home, Diet Plan, Calculator
- Active page highlighted with gradient background
- Click logo to return home
- Smooth page transitions

---

## 🔬 Calorie Calculator Science

### BMR (Basal Metabolic Rate)

Uses the **Mifflin-St Jeor Equation**:

- **Men**: BMR = 10 × weight(kg) + 6.25 × height(cm) - 5 × age + 5
- **Women**: BMR = 10 × weight(kg) + 6.25 × height(cm) - 5 × age - 161

### TDEE (Total Daily Energy Expenditure)

BMR × Activity Multiplier:

- **Sedentary** (little/no exercise): 1.2
- **Light** (1-3 days/week): 1.375
- **Moderate** (3-5 days/week): 1.55
- **Active** (6-7 days/week): 1.725
- **Very Active** (athlete): 1.9

### Goal Adjustments

- **Weight Loss**: TDEE - 500 cal (lose ~0.5 kg/week)
- **Muscle Gain**: TDEE + 300 cal (lean bulk)
- **Maintain**: TDEE (no change)

### Macro Split (30/40/30)

- **Protein**: 30% of calories ÷ 4 cal/g = grams
- **Carbs**: 40% of calories ÷ 4 cal/g = grams
- **Fats**: 30% of calories ÷ 9 cal/g = grams

---

## 📦 Installation & Setup

### Prerequisites

- Node.js (v16+)
- npm or yarn
- Tailwind CSS

### Install Dependencies

```bash
npm install
```

### Tailwind Configuration

Ensure your `tailwind.config.js` includes:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", "system-ui", "sans-serif"],
      },
      colors: {
        "gradient-pink": "#ff6ec7",
        "gradient-teal": "#42f5b3",
        "gradient-yellow": "#ffd166",
      },
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%, 100%": {
            transform: "translate(0, 0) scale(1)",
          },
          "25%": {
            transform: "translate(20px, -50px) scale(1.1)",
          },
          "50%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "75%": {
            transform: "translate(50px, 50px) scale(1.05)",
          },
        },
      },
    },
  },
  plugins: [],
};
```

### Run Development Server

```bash
npm run dev
```

Open browser to `http://localhost:5173`

---

## 📁 File Structure

```
src/
├── App.tsx          ← Main app with all 3 pages
├── App.css          ← Minimal app-specific styles
├── index.css        ← Global styles + animations
└── main.tsx         ← Entry point
```

---

## 🎯 Usage Guide

### Diet Plan Generator

1. Navigate to "🍽️ Diet Plan" page
2. Select your fitness goal (4 options)
3. Select your preferred cuisine (8 options)
4. Click "Generate AI Diet Plan ⚡"
5. Wait 1.5s for AI to "generate" plan
6. View detailed meal plan with timing and calories

### Calorie Calculator

1. Navigate to "📊 Calculator" page
2. Enter your age, gender, weight, height
3. Select activity level (5 options)
4. Select fitness goal (lose/maintain/gain)
5. Click "Calculate Calories 🔥"
6. View BMR, TDEE, recommended calories
7. See macro breakdown with visual bars
8. Read pro tips for success

---

## 🎨 Customization

### Change Colors

Update gradient colors in `index.css`:

```css
:root {
  --gradient-pink: #your-color;
  --gradient-teal: #your-color;
  --gradient-yellow: #your-color;
}
```

### Add More Cuisines

In `App.tsx` → `DietPlanPage`:

1. Add option to select:

```tsx
<option value="Japanese">🍱 Japanese</option>
```

2. Add meals to functions:

```tsx
const getBreakfast = (cuisine: string) => {
  const options = {
    ...
    Japanese: "Natto with rice & miso soup",
  };
  ...
}
```

### Adjust Animations

Modify timing in `index.css`:

```css
@keyframes blob {
  /* Change keyframe percentages */
}
```

---

## 📊 Key Metrics

### Performance

- ⚡ Instant page switching (state-based routing)
- 🎨 GPU-accelerated CSS animations
- 📱 Fully responsive design
- ♿ Accessible form inputs

### User Experience

- 🎯 Clear visual hierarchy
- ✅ Input validation
- ⏳ Loading states
- 💡 Helpful tips and guidance
- 🎨 Engaging animations

---

## 🚀 Next Steps

Consider adding:

- **API Integration**: Connect to real nutrition API
- **User Accounts**: Save plans and track progress
- **Food Database**: Search foods to log meals
- **Progress Charts**: Visualize weight/calorie trends
- **Shopping Lists**: Auto-generate from meal plans
- **Recipe Details**: Full recipes with instructions
- **Social Features**: Share plans with friends
- **Dark Mode**: Toggle for night browsing
- **Export Plans**: Download as PDF
- **Mobile App**: React Native version

---

## 🐛 Troubleshooting

### Animations Not Working

- Ensure `index.css` is imported in `main.tsx`
- Check Tailwind config includes custom animations
- Verify browser supports CSS animations

### Calculator Results Incorrect

- Ensure all inputs are numbers (not strings)
- Check activity level multipliers
- Verify formula calculations in code

### Styles Not Applied

- Run `npm install -D tailwindcss postcss autoprefixer`
- Check `tailwind.config.js` content paths
- Ensure build process includes CSS

---

## 📝 Credits

**Design Philosophy**: Modern, vibrant, Gen Z-friendly
**Color Scheme**: Neon pastels with gradients
**Animations**: Smooth, delightful micro-interactions
**Science**: Evidence-based nutrition calculations

Built with ❤️ using:

- ⚛️ React + TypeScript
- 🎨 Tailwind CSS
- 🌈 Custom CSS Animations
- 🔬 Mifflin-St Jeor Equation

---

## 📄 License

Free to use for personal and educational projects!

---

**Ready to crush your fitness goals with BitezyAI? Let's go! 🚀💪**
