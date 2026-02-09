import { useState } from "react";

export function AdvertisePage() {
  const [showEarnings, setShowEarnings] = useState(false);
  
  // Mock earnings data
  const earningsData = {
    totalEarnings: 12450.75,
    monthlyEarnings: 3250.50,
    pendingBalance: 1200.00,
    totalImpressions: 45250,
    totalClicks: 1245,
    clickThroughRate: 2.75,
    conversionRate: 3.8,
    epc: 0.85, // Earnings per click
  };

  const recentTransactions = [
    { id: 1, date: '2026-02-08', type: 'earnings', amount: 125.50, description: 'Ad impressions & clicks' },
    { id: 2, date: '2026-02-07', type: 'withdrawal', amount: -500.00, description: 'Withdrawal to Bank' },
    { id: 3, date: '2026-02-05', type: 'earnings', amount: 89.75, description: 'Ad impressions & clicks' },
    { id: 4, date: '2026-02-03', type: 'earnings', amount: 156.25, description: 'Ad impressions & clicks' },
    { id: 5, date: '2026-02-01', type: 'withdrawal', amount: -1000.00, description: 'Withdrawal to Bank' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-cyan-50 px-4 py-12 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Toggle Buttons */}
        <div className="flex justify-center gap-4 mb-12 animate-fade-in-down">
          <button
            onClick={() => setShowEarnings(false)}
            className={`px-8 py-3 rounded-full font-bold text-lg transition-all ${
              !showEarnings
                ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg'
                : 'bg-white/80 text-gray-700 hover:bg-white'
            }`}
          >
            🎯 Advertise
          </button>
          <button
            onClick={() => setShowEarnings(true)}
            className={`px-8 py-3 rounded-full font-bold text-lg transition-all ${
              showEarnings
                ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg'
                : 'bg-white/80 text-gray-700 hover:bg-white'
            }`}
          >
            💰 Earnings Dashboard
          </button>
        </div>

        {/* Earnings Dashboard */}
        {showEarnings ? (
          <div className="space-y-8">
            {/* Main Earnings Cards */}
            <div className="grid md:grid-cols-4 gap-6 animate-fade-in-up">
              {/* Total Earnings */}
              <div className="bg-white/90 backdrop-blur-lg p-6 rounded-3xl shadow-xl border-2 border-white/50">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-600 font-semibold">Total Earnings</h3>
                  <div className="text-3xl">💵</div>
                </div>
                <p className="text-4xl font-black text-green-600">${earningsData.totalEarnings.toFixed(2)}</p>
                <p className="text-sm text-gray-600 mt-2">All time earnings</p>
              </div>

              {/* Monthly Earnings */}
              <div className="bg-white/90 backdrop-blur-lg p-6 rounded-3xl shadow-xl border-2 border-white/50">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-600 font-semibold">This Month</h3>
                  <div className="text-3xl">📈</div>
                </div>
                <p className="text-4xl font-black text-blue-600">${earningsData.monthlyEarnings.toFixed(2)}</p>
                <p className="text-sm text-gray-600 mt-2">February 2026</p>
              </div>

              {/* Pending Balance */}
              <div className="bg-white/90 backdrop-blur-lg p-6 rounded-3xl shadow-xl border-2 border-white/50">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-600 font-semibold">Pending Balance</h3>
                  <div className="text-3xl">⏳</div>
                </div>
                <p className="text-4xl font-black text-orange-600">${earningsData.pendingBalance.toFixed(2)}</p>
                <p className="text-sm text-gray-600 mt-2">Payable soon</p>
              </div>

              {/* EPC */}
              <div className="bg-white/90 backdrop-blur-lg p-6 rounded-3xl shadow-xl border-2 border-white/50">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-600 font-semibold">Earnings/Click</h3>
                  <div className="text-3xl">🎯</div>
                </div>
                <p className="text-4xl font-black text-purple-600">${earningsData.epc.toFixed(2)}</p>
                <p className="text-sm text-gray-600 mt-2">Average EPC</p>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up animation-delay-100">
              {/* Impressions */}
              <div className="bg-white/90 backdrop-blur-lg p-6 rounded-3xl shadow-xl border-2 border-white/50">
                <h4 className="text-gray-600 font-semibold mb-3">Impressions</h4>
                <p className="text-3xl font-black text-gray-800">{earningsData.totalImpressions.toLocaleString()}</p>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
                  <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>

              {/* Clicks */}
              <div className="bg-white/90 backdrop-blur-lg p-6 rounded-3xl shadow-xl border-2 border-white/50">
                <h4 className="text-gray-600 font-semibold mb-3">Total Clicks</h4>
                <p className="text-3xl font-black text-gray-800">{earningsData.totalClicks.toLocaleString()}</p>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
                  <div className="bg-gradient-to-r from-pink-400 to-pink-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>

              {/* CTR */}
              <div className="bg-white/90 backdrop-blur-lg p-6 rounded-3xl shadow-xl border-2 border-white/50">
                <h4 className="text-gray-600 font-semibold mb-3">Click Through Rate</h4>
                <p className="text-3xl font-black text-gray-800">{earningsData.clickThroughRate.toFixed(2)}%</p>
                <p className="text-sm text-gray-600 mt-4">Industry avg: 2.1%</p>
              </div>

              {/* Conversion Rate */}
              <div className="bg-white/90 backdrop-blur-lg p-6 rounded-3xl shadow-xl border-2 border-white/50">
                <h4 className="text-gray-600 font-semibold mb-3">Conversion Rate</h4>
                <p className="text-3xl font-black text-gray-800">{earningsData.conversionRate.toFixed(2)}%</p>
                <p className="text-sm text-gray-600 mt-4">Well above average!</p>
              </div>
            </div>

            {/* Withdrawal Section */}
            <div className="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-xl border-2 border-white/50 animate-fade-in-up animation-delay-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">💳 Payment Methods & Withdrawal</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Bank Transfer */}
                <div className="p-6 border-2 border-gray-200 rounded-2xl hover:border-green-400 transition-all cursor-pointer">
                  <h4 className="font-bold text-gray-800 mb-2">🏦 Bank Transfer</h4>
                  <p className="text-gray-600 text-sm mb-4">Direct deposit to your bank account</p>
                  <p className="text-green-600 font-semibold">Min: $100 | Fee: Free</p>
                </div>

                {/* PayPal */}
                <div className="p-6 border-2 border-gray-200 rounded-2xl hover:border-blue-400 transition-all cursor-pointer">
                  <h4 className="font-bold text-gray-800 mb-2">🅿️ PayPal</h4>
                  <p className="text-gray-600 text-sm mb-4">Quick transfer to your PayPal account</p>
                  <p className="text-blue-600 font-semibold">Min: $50 | Fee: 2%</p>
                </div>

                {/* Stripe */}
                <div className="p-6 border-2 border-gray-200 rounded-2xl hover:border-purple-400 transition-all cursor-pointer">
                  <h4 className="font-bold text-gray-800 mb-2">💜 Stripe Connect</h4>
                  <p className="text-gray-600 text-sm mb-4">Fast payout via Stripe Connect</p>
                  <p className="text-purple-600 font-semibold">Min: $25 | Fee: 1%</p>
                </div>

                {/* Crypto */}
                <div className="p-6 border-2 border-gray-200 rounded-2xl hover:border-yellow-400 transition-all cursor-pointer">
                  <h4 className="font-bold text-gray-800 mb-2">₿ Cryptocurrency</h4>
                  <p className="text-gray-600 text-sm mb-4">Bitcoin or Ethereum transfer</p>
                  <p className="text-yellow-600 font-semibold">Min: $50 | Fee: 0.5%</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-2xl border-2 border-green-200 mb-6">
                <p className="text-gray-700 mb-4">
                  <strong>Minimum withdrawal amount:</strong> $100 (Bank Transfer) | Withdrawals process within 1-3 business days
                </p>
                <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg transition-all">
                  Request Withdrawal
                </button>
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-xl border-2 border-white/50 animate-fade-in-up animation-delay-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">📊 Recent Transactions</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-4 text-gray-700 font-bold">Date</th>
                      <th className="text-left py-3 px-4 text-gray-700 font-bold">Type</th>
                      <th className="text-left py-3 px-4 text-gray-700 font-bold">Description</th>
                      <th className="text-right py-3 px-4 text-gray-700 font-bold">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentTransactions.map((tx) => (
                      <tr key={tx.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 text-gray-600">{new Date(tx.date).toLocaleDateString()}</td>
                        <td className="py-3 px-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            tx.type === 'earnings'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-orange-100 text-orange-700'
                          }`}>
                            {tx.type === 'earnings' ? '📈 Earnings' : '💸 Withdrawal'}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-gray-600">{tx.description}</td>
                        <td className={`py-3 px-4 text-right font-bold ${
                          tx.amount > 0 ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {tx.amount > 0 ? '+' : ''}{tx.amount.toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* How It Works */}
            <div className="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-xl border-2 border-white/50 animate-fade-in-up animation-delay-400">
              <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">💡 How to Maximize Your Earnings</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-5xl mb-3">1️⃣</div>
                  <h4 className="font-bold text-gray-800 mb-2">Set Up Ads</h4>
                  <p className="text-gray-600">Create compelling ads and choose your target audience</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl mb-3">2️⃣</div>
                  <h4 className="font-bold text-gray-800 mb-2">Get Impressions</h4>
                  <p className="text-gray-600">Your ads are displayed to health-conscious users</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl mb-3">3️⃣</div>
                  <h4 className="font-bold text-gray-800 mb-2">Earn Clicks</h4>
                  <p className="text-gray-600">Users click your ads and you earn money per click</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl mb-3">4️⃣</div>
                  <h4 className="font-bold text-gray-800 mb-2">Withdraw</h4>
                  <p className="text-gray-600">Request payment when you reach $100 minimum</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Advertising Section (original content)
          <div className="space-y-12">
            <div className="text-center mb-12 animate-fade-in-down">
              <h2 className="text-5xl font-black bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent mb-3">
                Partner With Us 📢
              </h2>
              <p className="text-lg text-gray-600">
                Reach thousands of health-conscious users on BitezyAI
              </p>
            </div>

            {/* Advertisement Packages */}
            <div className="grid md:grid-cols-3 gap-6 animate-fade-in-up">
          {/* Starter Package */}
          <div className="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-xl border-2 border-white/50 hover:shadow-2xl transition-all transform hover:scale-105 animate-fade-in-up">
            <div className="text-5xl mb-4">⭐</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Starter</h3>
            <p className="text-gray-600 mb-4">Perfect for small brands</p>
            <div className="mb-6">
              <p className="text-4xl font-black text-pink-600 mb-2">$499<span className="text-lg text-gray-600">/month</span></p>
            </div>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-2">
                <span className="text-pink-500 font-bold">✓</span>
                <span className="text-gray-700">Homepage Banner Ad</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-pink-500 font-bold">✓</span>
                <span className="text-gray-700">1,000+ Monthly Impressions</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-pink-500 font-bold">✓</span>
                <span className="text-gray-700">Basic Analytics</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-pink-500 font-bold">✓</span>
                <span className="text-gray-700">Email Support</span>
              </div>
            </div>
            <button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-2xl font-bold hover:shadow-lg transition-all">
              Get Started
            </button>
          </div>

          {/* Professional Package */}
          <div className="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-xl border-2 border-pink-200 hover:shadow-2xl transition-all transform hover:scale-105 animate-fade-in-up animation-delay-100 ring-2 ring-pink-300">
            <div className="absolute -top-4 right-6 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-bold">
              POPULAR
            </div>
            <div className="text-5xl mb-4">✨</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Professional</h3>
            <p className="text-gray-600 mb-4">Best for growing brands</p>
            <div className="mb-6">
              <p className="text-4xl font-black text-purple-600 mb-2">$999<span className="text-lg text-gray-600">/month</span></p>
            </div>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-2">
                <span className="text-purple-500 font-bold">✓</span>
                <span className="text-gray-700">All Starter features</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-purple-500 font-bold">✓</span>
                <span className="text-gray-700">Nutrition Tips Section</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-purple-500 font-bold">✓</span>
                <span className="text-gray-700">10,000+ Monthly Impressions</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-purple-500 font-bold">✓</span>
                <span className="text-gray-700">Advanced Analytics</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-purple-500 font-bold">✓</span>
                <span className="text-gray-700">Priority Support</span>
              </div>
            </div>
            <button className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white py-3 rounded-2xl font-bold hover:shadow-lg transition-all">
              Choose Plan
            </button>
          </div>

          {/* Premium Package */}
          <div className="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-xl border-2 border-white/50 hover:shadow-2xl transition-all transform hover:scale-105 animate-fade-in-up animation-delay-200">
            <div className="text-5xl mb-4">👑</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Premium</h3>
            <p className="text-gray-600 mb-4">For established companies</p>
            <div className="mb-6">
              <p className="text-4xl font-black text-cyan-600 mb-2">$2,499<span className="text-lg text-gray-600">/month</span></p>
            </div>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-2">
                <span className="text-cyan-500 font-bold">✓</span>
                <span className="text-gray-700">All Professional features</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-cyan-500 font-bold">✓</span>
                <span className="text-gray-700">Multiple Ad Placements</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-cyan-500 font-bold">✓</span>
                <span className="text-gray-700">50,000+ Monthly Impressions</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-cyan-500 font-bold">✓</span>
                <span className="text-gray-700">Custom Content Integration</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-cyan-500 font-bold">✓</span>
                <span className="text-gray-700">Dedicated Account Manager</span>
              </div>
            </div>
            <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 rounded-2xl font-bold hover:shadow-lg transition-all">
              Contact Sales
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-xl border-2 border-white/50 mb-12 animate-fade-in-up animation-delay-300">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Why Advertise With BitezyAI?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🎯</div>
              <h4 className="font-bold text-gray-800 mb-2">Targeted Audience</h4>
              <p className="text-gray-600 text-sm">Reach health-conscious users interested in nutrition</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">📈</div>
              <h4 className="font-bold text-gray-800 mb-2">Real Results</h4>
              <p className="text-gray-600 text-sm">Track ROI with detailed analytics dashboard</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">💰</div>
              <h4 className="font-bold text-gray-800 mb-2">Affordable Pricing</h4>
              <p className="text-gray-600 text-sm">Flexible plans that fit any budget</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🤝</div>
              <h4 className="font-bold text-gray-800 mb-2">Expert Support</h4>
              <p className="text-gray-600 text-sm">24/7 support team ready to help</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 p-12 rounded-3xl shadow-2xl text-center animate-fade-in-up animation-delay-400">
          <h3 className="text-4xl font-black text-white mb-4">Ready to Reach Your Audience?</h3>
          <p className="text-white text-lg mb-8 opacity-90">
            Join 500+ brands already advertising on BitezyAI
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-lg transition-all transform hover:scale-105">
              Schedule Demo 📅
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all">
              Contact Sales 📧
            </button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12 animate-fade-in-up animation-delay-500">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Frequently Asked Questions</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/90 backdrop-blur-lg p-6 rounded-2xl border-2 border-white/50">
              <h4 className="font-bold text-gray-800 mb-2">How long does setup take?</h4>
              <p className="text-gray-600">Setup typically takes 24-48 hours. Our team will review your content and get your ads live quickly.</p>
            </div>
            <div className="bg-white/90 backdrop-blur-lg p-6 rounded-2xl border-2 border-white/50">
              <h4 className="font-bold text-gray-800 mb-2">Can I modify my ads anytime?</h4>
              <p className="text-gray-600">Yes! You can update your ads, targeting, and creative at any time through our dashboard.</p>
            </div>
            <div className="bg-white/90 backdrop-blur-lg p-6 rounded-2xl border-2 border-white/50">
              <h4 className="font-bold text-gray-800 mb-2">What payment methods do you accept?</h4>
              <p className="text-gray-600">We accept all major credit cards, PayPal, and bank transfers for enterprise plans.</p>
            </div>
            <div className="bg-white/90 backdrop-blur-lg p-6 rounded-2xl border-2 border-white/50">
              <h4 className="font-bold text-gray-800 mb-2">Can I cancel anytime?</h4>
              <p className="text-gray-600">Yes, you can cancel your plan anytime. No long-term contracts required.</p>
            </div>
          </div>
        </div>
      </div>
      )}
      </div>
    </div>
  );
}
