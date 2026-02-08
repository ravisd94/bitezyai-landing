import type { Page } from "../types";

interface HomePageProps {
  setPage: (page: Page) => void;
}

export function HomePage({ setPage }: HomePageProps) {
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
