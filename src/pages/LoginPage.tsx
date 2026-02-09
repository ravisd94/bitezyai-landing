import { useState } from "react";

interface LoginPageProps {
  onLogin: (username: string) => void;
}

export function LoginPage({ onLogin }: LoginPageProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username.trim() || !password.trim()) {
      alert("Please enter both username and password");
      return;
    }

    setIsLoading(true);
    
    // Simulate login delay
    setTimeout(() => {
      setIsLoading(false);
      onLogin(username);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-cyan-50 px-4 py-12 relative overflow-hidden flex items-center justify-center">
      {/* Animated Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="relative z-10 w-full max-w-md">
        {/* Logo / Branding */}
        <div className="text-center mb-12 animate-fade-in-down">
          <h1 className="text-5xl font-black mb-2">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              BitezyAI
            </span>
          </h1>
          <p className="text-gray-600 text-lg">Your Personal Health & Nutrition Dashboard</p>
        </div>

        {/* Login Card */}
        <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl border-2 border-white/50 p-8 animate-fade-in-up">
          <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">Welcome Back</h2>
          <p className="text-gray-600 text-center mb-8">Sign in to access your health dashboard</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username Field */}
            <div>
              <label htmlFor="username" className="block text-gray-700 font-semibold mb-3">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                className="w-full px-6 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none bg-white/50 backdrop-blur-sm transition-all placeholder-gray-400 text-gray-800"
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-gray-700 font-semibold mb-3">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full px-6 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none bg-white/50 backdrop-blur-sm transition-all placeholder-gray-400 text-gray-800"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
                >
                  {showPassword ? "👁️" : "👁️‍🗨️"}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 accent-purple-500"
                />
                <span className="text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-purple-500 hover:text-purple-700 font-semibold">
                Forgot password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white py-3 rounded-xl font-bold text-lg hover:shadow-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          {/* Sign Up Link */}
          <div className="mt-8 text-center border-t border-gray-200 pt-6">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <a href="#" className="text-purple-500 hover:text-purple-700 font-bold">
                Sign up here
              </a>
            </p>
          </div>
        </div>

        {/* Demo Credentials */}
        <div className="mt-8 bg-white/90 backdrop-blur-lg rounded-2xl p-6 border-2 border-white/50 animate-fade-in-up animation-delay-100">
          <p className="text-sm text-gray-600 mb-3 font-semibold">📝 Demo Credentials:</p>
          <div className="space-y-2 text-sm text-gray-700">
            <p>Username: <span className="font-mono bg-gray-100 px-2 py-1 rounded">demo</span></p>
            <p>Password: <span className="font-mono bg-gray-100 px-2 py-1 rounded">password123</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}
