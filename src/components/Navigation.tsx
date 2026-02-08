import type { Page } from "../types";

interface NavigationProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

export function Navigation({ currentPage, setCurrentPage }: NavigationProps) {
  return (
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
  );
}
