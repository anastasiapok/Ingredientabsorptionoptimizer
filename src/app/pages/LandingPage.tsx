import { useState, FormEvent } from "react";

export function LandingPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setEmail("");
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50 opacity-60" />

        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
              Early Access Available
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
              You may be absorbing<br />
              <span className="gradient-text">far fewer nutrients</span><br />
              than you think.
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Even healthy meals can contain combinations that help—or hinder—nutrient absorption.
              Absorvist reveals what happens after the food reaches your plate.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="#early-access"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-lg font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Join Early Access
              </a>
              <a
                href="/app"
                className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-900 text-lg font-semibold rounded-xl hover:border-purple-300 transition-all duration-300"
              >
                Try Demo App
              </a>
            </div>

            {/* Supporting text */}
            <p className="text-gray-500 text-base max-w-2xl mx-auto">
              Most nutrition apps track what you eat. Absorvist helps you understand what your body may actually absorb.
            </p>
          </div>

          {/* Hero Visual - Nutrient Pathways */}
          <div className="mt-16 relative">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Interaction 1 */}
                <div className="text-center">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="text-5xl" style={{ animation: 'float 3s ease-in-out infinite' }}>🥬</div>
                    <div className="text-3xl text-purple-400">→</div>
                    <div className="text-5xl" style={{ animation: 'float 3s ease-in-out infinite 0.5s' }}>🍋</div>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-sm font-semibold text-green-800">Increased Iron Absorption</p>
                    <p className="text-xs text-green-600 mt-1">Spinach + Lemon</p>
                  </div>
                </div>

                {/* Interaction 2 */}
                <div className="text-center">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="text-5xl" style={{ animation: 'float 3s ease-in-out infinite 0.3s' }}>🥕</div>
                    <div className="text-3xl text-purple-400">→</div>
                    <div className="text-5xl" style={{ animation: 'float 3s ease-in-out infinite 0.8s' }}>🥑</div>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-sm font-semibold text-green-800">Improved Carotenoid Uptake</p>
                    <p className="text-xs text-green-600 mt-1">Carrot + Avocado</p>
                  </div>
                </div>

                {/* Interaction 3 */}
                <div className="text-center">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="text-5xl" style={{ animation: 'float 3s ease-in-out infinite 0.6s' }}>🍵</div>
                    <div className="text-3xl text-red-400">→</div>
                    <div className="text-5xl" style={{ animation: 'float 3s ease-in-out infinite 1s' }}>🥩</div>
                  </div>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-sm font-semibold text-red-800">Reduced Iron Absorption</p>
                    <p className="text-xs text-red-600 mt-1">Tea + Iron-Rich Meal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Healthy ingredients don't always<br />guarantee optimal nutrients.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Many nutrients depend on other foods for effective absorption. Others compete with each other.
              Yet most people never see these interactions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Stat Card 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
              <div className="text-5xl font-bold gradient-text mb-4">≠</div>
              <p className="text-xl font-semibold text-gray-900 mb-2">What you eat ≠<br />what you absorb</p>
            </div>

            {/* Stat Card 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
              <div className="text-5xl font-bold gradient-text mb-4">100s</div>
              <p className="text-xl font-semibold text-gray-900 mb-2">Hundreds of nutrient interactions occur inside every meal</p>
            </div>

            {/* Stat Card 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
              <div className="text-5xl font-bold gradient-text mb-4">0</div>
              <p className="text-xl font-semibold text-gray-900 mb-2">Most nutrition tracking tools ignore absorption entirely</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT PREVIEW */}
      <section id="product-preview" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-3xl p-8 md:p-16 shadow-xl border border-gray-100">
            <div className="max-w-4xl mx-auto">
              {/* Mock App Screenshot */}
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                {/* App Header */}
                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold">🧬 Absorvist</h3>
                    <div className="text-sm bg-white/20 backdrop-blur px-3 py-1 rounded-full">Today's Meal</div>
                  </div>
                </div>

                {/* App Content */}
                <div className="p-6 md:p-8">
                  {/* Meal Score */}
                  <div className="text-center mb-8 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6">
                    <p className="text-sm text-gray-600 mb-2">Meal Score</p>
                    <div className="text-6xl font-bold gradient-text mb-2">84</div>
                    <p className="text-sm text-gray-500">Good absorption potential</p>
                  </div>

                  {/* Positive Interactions */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Positive Interactions</h4>
                    <div className="space-y-2">
                      <div className="flex items-start gap-3 bg-green-50 border border-green-200 rounded-lg p-4">
                        <span className="text-xl">✓</span>
                        <p className="text-sm text-green-800">Vitamin C may enhance iron absorption</p>
                      </div>
                      <div className="flex items-start gap-3 bg-green-50 border border-green-200 rounded-lg p-4">
                        <span className="text-xl">✓</span>
                        <p className="text-sm text-green-800">Healthy fats may improve carotenoid absorption</p>
                      </div>
                    </div>
                  </div>

                  {/* Potential Inhibitors */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Potential Inhibitors</h4>
                    <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <span className="text-xl">⚠</span>
                      <p className="text-sm text-yellow-800">Tea compounds may reduce iron uptake</p>
                    </div>
                  </div>

                  {/* Suggested Optimization */}
                  <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                    <h4 className="text-sm font-semibold text-purple-900 mb-2">💡 Suggested Optimization</h4>
                    <p className="text-sm text-purple-800">Move tea consumption 1–2 hours after the meal</p>
                  </div>
                </div>
              </div>

              <p className="text-center text-gray-500 mt-8 text-lg">Actionable insights in seconds.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Understand your meals<br />on a deeper level.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">1</div>
              <h3 className="text-2xl font-bold mb-4">Input your ingredients</h3>
              <p className="text-gray-600">Enter ingredients manually or build a complete meal.</p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">2</div>
              <h3 className="text-2xl font-bold mb-4">Analyze interactions</h3>
              <p className="text-gray-600">Absorvist evaluates nutrient synergies and potential inhibitors.</p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">3</div>
              <h3 className="text-2xl font-bold mb-4">Optimize absorption</h3>
              <p className="text-gray-600">Receive practical suggestions backed by nutrition science.</p>
            </div>
          </div>
        </div>
      </section>

      {/* EXAMPLE INSIGHTS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              See what most nutrition<br />apps miss.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Insight Card 1 */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-4xl">🥬</span>
                <span className="text-2xl">+</span>
                <span className="text-4xl">🍋</span>
              </div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Spinach + Lemon</h3>
              <p className="text-green-800">Vitamin C may enhance non-heme iron absorption.</p>
            </div>

            {/* Insight Card 2 */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-4xl">🥕</span>
                <span className="text-2xl">+</span>
                <span className="text-4xl">🥑</span>
              </div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Carrot + Avocado</h3>
              <p className="text-green-800">Dietary fats may improve absorption of carotenoids and fat-soluble vitamins.</p>
            </div>

            {/* Insight Card 3 */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-4xl">🍵</span>
                <span className="text-2xl">+</span>
                <span className="text-4xl">🥩</span>
              </div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Tea + Iron-Rich Meals</h3>
              <p className="text-yellow-800">Certain compounds may reduce iron absorption.</p>
            </div>

            {/* Insight Card 4 */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-4xl">🌿</span>
                <span className="text-2xl">+</span>
                <span className="text-4xl">🌶️</span>
              </div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Turmeric + Black Pepper</h3>
              <p className="text-green-800">Piperine may improve curcumin bioavailability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY ABSORVIST */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Nutrient intelligence,<br />not just nutrition tracking.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-2xl font-bold mb-3">Food Interaction Analysis</h3>
              <p className="text-gray-600">Understand how ingredients affect one another.</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-2xl font-bold mb-3">Science-Based Recommendations</h3>
              <p className="text-gray-600">Insights informed by published nutrition research.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-2xl font-bold mb-3">Simple and Actionable</h3>
              <p className="text-gray-600">Clear suggestions without scientific complexity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="early-access" className="py-20 bg-gradient-to-br from-purple-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Be among the first to discover<br />what your meals are really delivering.
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join the early access list and help shape the future of nutrient optimization.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            {submitted ? (
              <div className="bg-white text-purple-600 px-8 py-6 rounded-xl text-center">
                <div className="text-4xl mb-3">✓</div>
                <p className="text-xl font-semibold">Thank you!</p>
                <p className="text-sm mt-2">We'll be in touch soon.</p>
              </div>
            ) : (
              <>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-6 py-4 rounded-xl text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-purple-300"
                  />
                  <button
                    type="submit"
                    className="px-8 py-4 bg-white text-purple-600 text-lg font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    Get Early Access
                  </button>
                </div>
                <p className="text-sm text-purple-200 mt-4">No spam. Unsubscribe anytime.</p>
              </>
            )}
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold gradient-text mb-2">🧬 Absorvist</div>
              <p className="text-gray-600">Helping you get more from every meal.</p>
            </div>

            <div className="flex gap-6">
              <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Contact</a>
              <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Instagram</a>
            </div>
          </div>

          <div className="text-center text-gray-500 text-sm mt-8">
            © 2026 Absorvist
          </div>
        </div>
      </footer>
    </div>
  );
}
