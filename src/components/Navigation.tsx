import { useState } from "react";
import type { Page } from "../types";

interface NavigationProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  username?: string;
  onLogout?: () => void;
}

export function Navigation({ currentPage, setCurrentPage, username, onLogout }: NavigationProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const handlePageChange = (page: Page) => {
    setCurrentPage(page);
    setOpenDropdown(null);
  };

  // Only show navigation if user is logged in
  if (!username) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg shadow-lg border-b-2 border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3">
          <div className="flex items-center justify-between gap-2 md:gap-4">
            {/* Logo */}
            <div 
              onClick={() => handlePageChange("home")}
              className="cursor-pointer flex-shrink-0"
            >
              <h1 className="text-xl md:text-2xl font-black bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                BitezyAI 🥗
              </h1>
            </div>

            {/* Only Home for non-logged-in users */}
            <div className="flex items-center gap-1 md:gap-2 flex-wrap">
              <button
                onClick={() => handlePageChange("home")}
                className={`px-3 md:px-4 py-2 rounded-full font-semibold text-xs md:text-sm transition-all whitespace-nowrap ${
                  currentPage === "home"
                    ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                🏠 Home
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  // Navigation for logged-in users
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg shadow-lg border-b-2 border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3">
        <div className="flex items-center justify-between gap-2 md:gap-4">
          {/* Logo */}
          <div 
            onClick={() => handlePageChange("dashboard")}
            className="cursor-pointer flex-shrink-0"
          >
            <h1 className="text-xl md:text-2xl font-black bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              BitezyAI 🥗
            </h1>
          </div>

          {/* Main Navigation */}
          <div className="flex items-center gap-1 md:gap-2 flex-wrap">
            {/* Dashboard Button */}
            <button
              onClick={() => handlePageChange("dashboard")}
              className={`px-3 md:px-4 py-2 rounded-full font-semibold text-xs md:text-sm transition-all whitespace-nowrap ${
                currentPage === "dashboard"
                  ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              📊
            </button>

            {/* Tools Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("tools")}
                className={`px-3 md:px-4 py-2 rounded-full font-semibold text-xs md:text-sm transition-all whitespace-nowrap flex items-center gap-1 ${
                  ["diet-plan", "calorie-calculator", "explore-diet-plans", "explore-recipes"].includes(currentPage)
                    ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                🛠️ Tools
                <span className={`transition-transform ${openDropdown === "tools" ? "rotate-180" : ""}`}>▼</span>
              </button>
              {openDropdown === "tools" && (
                <div className="absolute top-full left-0 mt-1 bg-white border-2 border-gray-200 rounded-2xl shadow-xl p-2 min-w-max z-50">
                  <button
                    onClick={() => handlePageChange("diet-plan")}
                    className={`block w-full text-left px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                      currentPage === "diet-plan"
                        ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    🍽️ Diet Plan
                  </button>
                  <button
                    onClick={() => handlePageChange("calorie-calculator")}
                    className={`block w-full text-left px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                      currentPage === "calorie-calculator"
                        ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    📊 Calorie Calc
                  </button>
                  <div className="border-t border-gray-200 my-1"></div>
                  <button
                    onClick={() => handlePageChange("explore-diet-plans")}
                    className={`block w-full text-left px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                      currentPage === "explore-diet-plans"
                        ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    🗂️ Explore Diets
                  </button>
                  <button
                    onClick={() => handlePageChange("explore-recipes")}
                    className={`block w-full text-left px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                      currentPage === "explore-recipes"
                        ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    👨‍🍳 Explore Recipes
                  </button>
                </div>
              )}
            </div>

            {/* Tracking Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("tracking")}
                className={`px-3 md:px-4 py-2 rounded-full font-semibold text-xs md:text-sm transition-all whitespace-nowrap flex items-center gap-1 ${
                  ["diary", "calendar"].includes(currentPage)
                    ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                📖 Tracking
                <span className={`transition-transform ${openDropdown === "tracking" ? "rotate-180" : ""}`}>▼</span>
              </button>
              {openDropdown === "tracking" && (
                <div className="absolute top-full left-0 mt-1 bg-white border-2 border-gray-200 rounded-2xl shadow-xl p-2 min-w-max z-50">
                  <button
                    onClick={() => handlePageChange("diary")}
                    className={`block w-full text-left px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                      currentPage === "diary"
                        ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    📖 Food Diary
                  </button>
                  <button
                    onClick={() => handlePageChange("calendar")}
                    className={`block w-full text-left px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                      currentPage === "calendar"
                        ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    📅 Nutrition Calendar
                  </button>
                </div>
              )}
            </div>

            {/* Analytics Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("analytics")}
                className={`px-3 md:px-4 py-2 rounded-full font-semibold text-xs md:text-sm transition-all whitespace-nowrap flex items-center gap-1 ${
                  ["goals", "sleep", "nutrition", "progress", "fasting", "weekly-report"].includes(currentPage)
                    ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                📊 Health
                <span className={`transition-transform ${openDropdown === "analytics" ? "rotate-180" : ""}`}>▼</span>
              </button>
              {openDropdown === "analytics" && (
                <div className="absolute top-full left-0 mt-1 bg-white border-2 border-gray-200 rounded-2xl shadow-xl p-2 min-w-max z-50">
                  <button
                    onClick={() => handlePageChange("goals")}
                    className={`block w-full text-left px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                      currentPage === "goals"
                        ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    🎯 Goals
                  </button>
                  <button
                    onClick={() => handlePageChange("sleep")}
                    className={`block w-full text-left px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                      currentPage === "sleep"
                        ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    😴 Sleep
                  </button>
                  <button
                    onClick={() => handlePageChange("nutrition")}
                    className={`block w-full text-left px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                      currentPage === "nutrition"
                        ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    🥗 Nutrition
                  </button>
                  <button
                    onClick={() => handlePageChange("progress")}
                    className={`block w-full text-left px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                      currentPage === "progress"
                        ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    📈 Progress
                  </button>
                  <button
                    onClick={() => handlePageChange("fasting")}
                    className={`block w-full text-left px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                      currentPage === "fasting"
                        ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    🌙 Fasting
                  </button>
                  <button
                    onClick={() => handlePageChange("weekly-report")}
                    className={`block w-full text-left px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                      currentPage === "weekly-report"
                        ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    📋 Weekly Report
                  </button>
                </div>
              )}
            </div>

            {/* Advertise Button */}
            <button
              onClick={() => handlePageChange("advertise")}
              className={`px-3 md:px-4 py-2 rounded-full font-semibold text-xs md:text-sm transition-all whitespace-nowrap ${
                currentPage === "advertise"
                  ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              📢
            </button>
          </div>

          {/* User Section - Right aligned */}
          {username && (
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white font-bold text-xs md:text-sm">
                {username.charAt(0).toUpperCase()}
              </div>
              <div className="hidden sm:block">
                <p className="text-xs md:text-sm font-semibold text-gray-800">{username}</p>
                <p className="text-xs text-gray-600">Logged in</p>
              </div>
              <button
                onClick={onLogout}
                className="px-2 md:px-3 py-1.5 rounded-full text-xs md:text-sm font-semibold text-red-600 hover:bg-red-50 transition-all"
              >
                🚪
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
