
```tsx
export default function LandingPage() {
  return (
    <main className="bg-white text-[#1B1530] overflow-hidden">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-100 px-4 py-2 text-sm text-purple-700 mb-8">
              🌿 Nutrition Intelligence
            </div>

            <h1 className="text-5xl lg:text-7xl font-serif leading-[0.95] tracking-tight">
              You may be
              <br />
              absorbing
              <span className="text-purple-500"> far less </span>
              nutrition
              <br />
              than you think.
            </h1>

            <p className="mt-8 text-xl text-gray-600 max-w-xl leading-relaxed">
              Most nutrition apps track what you eat.
              <br />
              Absorvist helps you understand what your body actually absorbs.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <button className="bg-purple-600 hover:bg-purple-700 transition text-white px-8 py-4 rounded-full text-lg">
                Get Early Access
              </button>

              <button className="border border-gray-200 px-8 py-4 rounded-full text-lg">
                See It In Action
              </button>
            </div>

            <div className="mt-12 space-y-4 text-lg">
              <div className="flex items-center gap-3">
                <span className="text-green-600">✓</span>
                <span>
                  Spinach + Lemon → Better iron absorption
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-green-600">✓</span>
                <span>
                  Carrot + Avocado → Better carotenoid absorption
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-red-500">✕</span>
                <span>
                  Tea + Iron-rich meal → Reduced iron uptake
                </span>
              </div>
            </div>
          </div>

          {/* PHONE MOCKUP */}

          <div className="relative flex justify-center">

            <div className="absolute inset-0 bg-purple-100 blur-3xl opacity-50 rounded-full" />

            <div className="relative bg-[#19152E] rounded-[48px] p-3 shadow-2xl w-[360px]">
              <div className="bg-white rounded-[40px] p-6 min-h-[700px]">

                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-3xl font-serif">
                    Meal Analysis
                  </h3>

                  <div className="w-10 h-10 rounded-full bg-purple-100" />
                </div>

                <div className="bg-[#F5F7F7] rounded-3xl p-6 mb-8">
                  <div className="text-gray-500">
                    Meal Score
                  </div>

                  <div className="text-5xl font-serif mt-2">
                    84
                  </div>

                  <div className="text-green-600">
                    Great balance
                  </div>
                </div>

                <div className="space-y-4">

                  <div className="bg-green-50 rounded-3xl p-5">
                    <div className="text-green-700 font-medium mb-2">
                      Positive Interaction
                    </div>

                    Vitamin C may enhance iron absorption.
                  </div>

                  <div className="bg-green-50 rounded-3xl p-5">
                    <div className="text-green-700 font-medium mb-2">
                      Positive Interaction
                    </div>

                    Healthy fats may improve carotenoid absorption.
                  </div>

                  <div className="bg-orange-50 rounded-3xl p-5">
                    <div className="text-orange-700 font-medium mb-2">
                      Potential Inhibitor
                    </div>

                    Tea compounds may reduce iron uptake.
                  </div>

                  <div className="bg-purple-50 rounded-3xl p-5">
                    <div className="text-purple-700 font-medium mb-2">
                      Suggestion
                    </div>

                    Move tea consumption 1–2 hours after the meal.
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}

      <section className="max-w-6xl mx-auto px-6 py-32 text-center">
        <h2 className="font-serif text-5xl lg:text-7xl leading-tight">
          What reaches your plate
          <br />
          isn't always what reaches
          <br />
          your body.
        </h2>

        <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-10 leading-relaxed">
          Even healthy meals contain ingredient combinations
          that enhance or inhibit nutrient absorption.
          Most people never see these interactions.
          Absorvist makes them visible.
        </p>
      </section>

      {/* EXAMPLES */}

      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid md:grid-cols-3 gap-8">

          <div className="border border-purple-100 rounded-[32px] p-10">
            <div className="text-4xl mb-6">🍋</div>

            <h3 className="font-serif text-3xl mb-4">
              Iron Absorption
            </h3>

            <p className="text-gray-600">
              Spinach + Lemon
            </p>

            <p className="mt-4">
              Vitamin C may improve iron absorption.
            </p>
          </div>

          <div className="border border-purple-100 rounded-[32px] p-10">
            <div className="text-4xl mb-6">🥑</div>

            <h3 className="font-serif text-3xl mb-4">
              Nutrient Synergy
            </h3>

            <p className="text-gray-600">
              Carrot + Avocado
            </p>

            <p className="mt-4">
              Healthy fats may improve carotenoid absorption.
            </p>
          </div>

          <div className="border border-purple-100 rounded-[32px] p-10">
            <div className="text-4xl mb-6">☕️</div>

            <h3 className="font-serif text-3xl mb-4">
              Potential Inhibitor
            </h3>

            <p className="text-gray-600">
              Tea + Iron-rich Meal
            </p>

            <p className="mt-4">
              Tea compounds may reduce iron uptake.
            </p>
          </div>

        </div>
      </section>

      {/* VISION */}

      <section className="bg-gradient-to-br from-purple-50 to-green-50 py-32">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="font-serif text-5xl lg:text-6xl">
            Starting with ingredient combinations.
            <br />
            Expanding to nutrition intelligence.
          </h2>

          <p className="text-xl text-gray-600 mt-8 leading-relaxed max-w-3xl mx-auto">
            Today, Absorvist helps uncover nutrient interactions
            within food combinations.

            Tomorrow, we're building tools to help people make
            better nutritional decisions across meals,
            recipes and everyday eating.
          </p>
        </div>
      </section>

      {/* WAITLIST */}

      <section className="max-w-6xl mx-auto px-6 py-32">
        <div className="rounded-[40px] bg-gradient-to-br from-[#F8F8FC] to-[#F3FFF8] p-12 lg:p-20">

          <h2 className="font-serif text-5xl max-w-3xl">
            Be among the first to discover what your meals are really delivering.
          </h2>

          <div className="mt-10 flex flex-col md:flex-row gap-4">
            <input
              placeholder="Enter your email"
              className="flex-1 rounded-full border border-gray-200 px-8 py-5"
            />

            <button className="bg-purple-600 text-white rounded-full px-10 py-5">
              Get Early Access
            </button>
          </div>

          <p className="mt-4 text-gray-500">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </main>
  );
}
```
