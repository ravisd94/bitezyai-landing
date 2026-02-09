import { useState } from "react";
import type { Page } from "./types";
import { Navigation } from "./components/Navigation";
import { LoginPage } from "./pages/LoginPage";
import { Dashboard } from "./pages/Dashboard";
import { HomePage } from "./pages/HomePage";
import { DietPlanPage } from "./pages/DietPlanPage";
import { CalorieCalculatorPage } from "./pages/CalorieCalculatorPage";
import { DiaryPage } from "./pages/DiaryPage";
import { CalendarPage } from "./pages/CalendarPage";
import { GoalsPage } from "./pages/GoalsPage";
import { SleepPage } from "./pages/SleepPage";
import { NutritionPage } from "./pages/NutritionPage";
import { ProgressPage } from "./pages/ProgressPage";
import { FastingPage } from "./pages/FastingPage";
import { WeeklyReportPage } from "./pages/WeeklyReportPage";
import { AdvertisePage } from "./pages/AdvertisePage";
import { ExploreDietPlans } from "./pages/ExploreDietPlans";
import { ExploreRecipes } from "./pages/ExploreRecipes";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [currentPage, setCurrentPage] = useState<Page>("home");
  
  const handleLogin = (user: string) => {
    setUsername(user);
    setIsLoggedIn(true);
    setCurrentPage("dashboard");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setCurrentPage("home");
  };

  // Show home page or login if not logged in
  if (!isLoggedIn) {
    if (currentPage === "home") {
      return (
        <div className="min-h-screen">
          <Navigation 
            currentPage={currentPage} 
            setCurrentPage={setCurrentPage}
            username={username}
            onLogout={handleLogout}
          />
          <div className="pt-20">
            <HomePage setPage={setCurrentPage} />
          </div>
        </div>
      );
    }
    // Redirect to login if trying to access protected pages
    return <LoginPage onLogin={handleLogin} />;
  }

  // Show dashboard and navigation when logged in
  return (
    <div className="min-h-screen">
      <Navigation 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
        username={username}
        onLogout={handleLogout}
      />

      {/* Page Content - Only show protected pages when logged in */}
      <div className="pt-20">
        {currentPage === "dashboard" && <Dashboard />}
        {currentPage === "diet-plan" && <DietPlanPage />}
        {currentPage === "calorie-calculator" && <CalorieCalculatorPage />}
        {currentPage === "diary" && <DiaryPage />}
        {currentPage === "calendar" && <CalendarPage />}
        {currentPage === "goals" && <GoalsPage />}
        {currentPage === "sleep" && <SleepPage />}
        {currentPage === "nutrition" && <NutritionPage />}
        {currentPage === "progress" && <ProgressPage />}
        {currentPage === "fasting" && <FastingPage />}
        {currentPage === "weekly-report" && <WeeklyReportPage />}
        {currentPage === "advertise" && <AdvertisePage />}
        {currentPage === "explore-diet-plans" && <ExploreDietPlans />}
        {currentPage === "explore-recipes" && <ExploreRecipes />}
      </div>
    </div>
  );
}
