import { useState } from "react";
import type { Page } from "./types";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./pages/HomePage";
import { DietPlanPage } from "./pages/DietPlanPage";
import { CalorieCalculatorPage } from "./pages/CalorieCalculatorPage";
import { DiaryPage } from "./pages/DiaryPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  
  return (
    <div className="min-h-screen">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />

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
