Landing page code
import { useState, FormEvent } from "react";
import { SpinachIllustration } from "../components/illustrations/Spinach";
import { LemonIllustration } from "../components/illustrations/Lemon";
import { CarrotIllustration } from "../components/illustrations/Carrot";
import { AvocadoIllustration } from "../components/illustrations/Avocado";
import { TeaCupIllustration } from "../components/illustrations/TeaCup";
import { TurmericIllustration } from "../components/illustrations/Turmeric";

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
    <div className="min-h-screen bg-white text-[#1c1828]" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
      {/* NAV */}
      <header className="border-b border-[#ece8f6]">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <SpinachIllustration size={28} />
            <span className="text-2xl tracking-tight">Absorvist</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-base text-[#1c1828]/80">
            <a href="#how-it-works" className="hover:text-[#7c5cbf] transition-colors">How It Works</a>
            <a href="#science" className="hover:text-[#7c5cbf] transition-colors">The Science</a>
            <a href="#about" className="hover:text-[#7c5cbf] transition-colors">About</a>
          </nav>
          <a
            href="#early-access"
            className="px-6 py-2.5 rounded-full bg-[#7c5cbf] text-white font-medium hover:bg-[#6b4dab] transition-colors"
          >
            Join Early Access
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute -right-40 top-10 w-[480px] h-[480px] rounded-full bg-[#e6f2ee] blur-3xl opacity-70" />
        <div className="absolute -left-32 bottom-0 w-[420px] h-[420px] rounded-full bg-[#ece8f6] blur-3xl opacity-70" />

        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left copy */}
          <div>
            <h1 className="text-5xl md:text-6xl leading-[1.1] mb-6">
              You may be<br />
              absorbing <span className="text-[#7c5cbf]">far less</span><br />
              nutrients than<br />
              you think.
            </h1>
            <p className="text-xl text-[#1c1828]/65 mb-8 leading-relaxed max-w-md">
              Even healthy meals can contain combinations that help—or hinder—nutrient
              absorption. Absorvist reveals what happens after the food reaches your plate.
            </p>
            <div className="flex items-center gap-6 mb-8">
              <a
                href="#early-access"
                className="px-8 py-3.5 rounded-full bg-[#7c5cbf] text-white text-lg font-medium hover:bg-[#6b4dab] transition-colors"
              >
                Join Early Access
              </a>
              <a href="/app" className="flex items-center gap-2 text-lg text-[#1c1828]/80 hover:text-[#7c5cbf] transition-colors">
                <span className="w-8 h-8 rounded-full border border-[#1c1828]/30 flex items-center justify-center">▶</span>
                See It In Action
              </a>
            </div>
            <p className="text-base text-[#1c1828]/50 flex items-center gap-2">
              <span>🛡</span> Built on nutrition science. Designed for real life.
            </p>
          </div>

          {/* Right visual: phone mockup with annotated ingredients */}
          <div className="relative">
            {/* Annotation: top left */}
            <div className="absolute -left-4 top-6 hidden md:block">
              <div className="flex items-center gap-2 mb-2">
                <SpinachIllustration size={36} />
                <LemonIllustration size={32} />
              </div>
              <p className="font-medium">Spinach<br />+<br />Lemon</p>
              <p className="text-[#3dbf9a] text-sm mt-1">Increased<br />Iron Absorption</p>
            </div>

            {/* Annotation: bottom left */}
            <div className="absolute -left-4 bottom-10 hidden md:block">
              <div className="flex items-center gap-2 mb-2">
                <CarrotIllustration size={32} />
                <AvocadoIllustration size={36} />
              </div>
              <p className="font-medium">Carrot<br />+<br />Avocado</p>
              <p className="text-[#3dbf9a] text-sm mt-1">Improved<br />Carotenoid Uptake</p>
            </div>

            {/* Annotation: right */}
            <div className="absolute -right-2 top-1/2 -translate-y-1/2 hidden md:block text-right">
              <div className="flex items-center justify-end mb-2">
                <TeaCupIllustration size={36} />
              </div>
              <p className="font-medium">Tea<br />+<br />Iron-Rich Meal</p>
              <p className="text-[#7c5cbf] text-sm mt-1">Reduced<br />Iron Absorption</p>
            </div>

            {/* Phone */}
            <div className="mx-auto w-[360px] rounded-[2rem] border-[6px] border-[#1c1828] bg-white shadow-2xl overflow-hidden">
              <div className="h-6 bg-[#1c1828] flex items-center justify-center">
                <div className="w-20 h-3.5 bg-[#1c1828] rounded-full border border-white/10" />
              </div>
              <div className="px-5 pt-3 pb-2 flex items-center justify-between">
                <span className="font-medium text-lg">Meal Analysis</span>
                <span className="w-7 h-7 rounded-full bg-[#ece8f6] flex items-center justify-center text-sm">⋯</span>
              </div>

              <div className="px-5">
                <div className="bg-[#f2f7f5] rounded-2xl p-3 flex items-center justify-between mb-3">
                  <div>
                    <p className="text-sm text-[#1c1828]/50">Meal Score</p>
                    <p className="text-2xl">84</p>
                    <p className="text-xs text-[#1c1828]/50">Great balance</p>
                  </div>
                  <div className="w-12 h-12 rounded-full border-4 border-[#7c5cbf] border-r-[#3dbf9a] border-b-[#3dbf9a]" />
                </div>

                <p className="text-sm text-[#1c1828]/50 mb-1.5">What's happening in your meal</p>

                <p className="text-sm text-[#3dbf9a] mb-1">Positive Interactions</p>
                <div className="bg-[#e6f2ee] rounded-xl p-2.5 mb-1.5">
                  <p className="text-sm">Vitamin C may enhance iron absorption</p>
                  <p className="text-xs text-[#1c1828]/40">Spinach + Lemon</p>
                </div>
                <div className="bg-[#e6f2ee] rounded-xl p-2.5 mb-2">
                  <p className="text-sm">Healthy fats may improve carotenoid absorption</p>
                  <p className="text-xs text-[#1c1828]/40">Carrot + Avocado</p>
                </div>

                <p className="text-sm text-[#c1633e] mb-1">Potential Inhibitors</p>
                <div className="bg-[#fbeee5] rounded-xl p-2.5 mb-2">
                  <p className="text-sm">Tea compounds may reduce iron uptake</p>
                  <p className="text-xs text-[#1c1828]/40">Tea + Iron-rich meal</p>
                </div>

                <p className="text-sm text-[#7c5cbf] mb-1">Suggestion</p>
                <div className="bg-[#ece8f6] rounded-xl p-2.5 mb-3">
                  <p className="text-sm">Move tea consumption 1–2 hours after the meal</p>
                </div>
              </div>

              <div className="border-t border-[#ece8f6] px-6 py-2.5 flex items-center justify-between text-xs text-[#1c1828]/40">
                <span>Home</span>
                <span>History</span>
                <span className="w-9 h-9 rounded-full bg-[#7c5cbf] text-white flex items-center justify-center text-base">+</span>
                <span>Insights</span>
                <span>Profile</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM STRIP */}
      <section className="py-6 border-y border-[#ece8f6] bg-[#faf9fc]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-start gap-4">
            <span className="w-10 h-10 rounded-full bg-[#e6f2ee] flex items-center justify-center text-[#3dbf9a]">🍽</span>
            <p className="text-lg">What you eat<br /><span className="text-[#1c1828]/50">≠ what you absorb</span></p>
          </div>
          <div className="flex items-start gap-4">
            <span className="w-10 h-10 rounded-full bg-[#ece8f6] flex items-center justify-center text-[#7c5cbf]">⚛</span>
            <p className="text-lg">Hundreds of nutrient interactions occur<br /><span className="text-[#1c1828]/50">inside every meal</span></p>
          </div>
          <div className="flex items-start gap-4">
            <span className="w-10 h-10 rounded-full bg-[#e6f2ee] flex items-center justify-center text-[#3dbf9a]">🛡</span>
            <p className="text-lg">Most nutrition tracking tools<br /><span className="text-[#1c1828]/50">ignore absorption entirely</span></p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-[#7c5cbf] tracking-widest text-sm uppercase mb-3">How It Works</p>
          <h2 className="text-center text-4xl md:text-5xl mb-16">
            Understand your meals<br />on a deeper level.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="w-9 h-9 rounded-full bg-[#e6f2ee] text-[#3dbf9a] flex items-center justify-center text-sm">1</span>
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="text-2xl mb-2">Input your ingredients</h3>
              <p className="text-[#1c1828]/55">Enter ingredients manually or build a complete meal.</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="w-9 h-9 rounded-full bg-[#ece8f6] text-[#7c5cbf] flex items-center justify-center text-sm">2</span>
                <span className="text-2xl">⚛</span>
              </div>
              <h3 className="text-2xl mb-2">Analyze interactions</h3>
              <p className="text-[#1c1828]/55">Absorvist evaluates nutrient synergies and potential inhibitors.</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="w-9 h-9 rounded-full bg-[#e6f2ee] text-[#3dbf9a] flex items-center justify-center text-sm">3</span>
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-2xl mb-2">Optimize absorption</h3>
              <p className="text-[#1c1828]/55">Receive practical suggestions backed by nutrition science.</p>
            </div>
          </div>
        </div>
      </section>

      {/* EXAMPLE INSIGHTS */}
      <section id="science" className="py-24 bg-[#faf9fc]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-[#7c5cbf] tracking-widest text-sm uppercase mb-3">See what most nutrition apps miss</p>
              <h2 className="text-4xl md:text-5xl">Example insights</h2>
            </div>
            <a href="#early-access" className="hidden md:block text-[#7c5cbf] hover:text-[#6b4dab] transition-colors">
              Explore all interactions →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl border border-[#ece8f6] p-6">
              <div className="flex items-center gap-2 mb-4">
                <SpinachIllustration size={40} />
                <LemonIllustration size={36} />
              </div>
              <h3 className="text-xl mb-2">Spinach + Lemon</h3>
              <p className="text-[#1c1828]/55 mb-4">Vitamin C may enhance non-heme iron absorption.</p>
              <span className="inline-flex items-center gap-1 text-sm text-[#3dbf9a] bg-[#e6f2ee] px-3 py-1 rounded-full">↑ Synergy</span>
            </div>
            <div className="bg-white rounded-2xl border border-[#ece8f6] p-6">
              <div className="flex items-center gap-2 mb-4">
                <CarrotIllustration size={36} />
                <AvocadoIllustration size={40} />
              </div>
              <h3 className="text-xl mb-2">Carrot + Avocado</h3>
              <p className="text-[#1c1828]/55 mb-4">Dietary fats may improve absorption of carotenoids and fat-soluble vitamins.</p>
              <span className="inline-flex items-center gap-1 text-sm text-[#3dbf9a] bg-[#e6f2ee] px-3 py-1 rounded-full">↑ Synergy</span>
            </div>
            <div className="bg-white rounded-2xl border border-[#ece8f6] p-6">
              <div className="flex items-center gap-2 mb-4">
                <TeaCupIllustration size={40} />
              </div>
              <h3 className="text-xl mb-2">Tea + Iron-Rich Meals</h3>
              <p className="text-[#1c1828]/55 mb-4">Certain compounds may reduce iron absorption.</p>
              <span className="inline-flex items-center gap-1 text-sm text-[#7c5cbf] bg-[#ece8f6] px-3 py-1 rounded-full">↑ Inhibitor</span>
            </div>
            <div className="bg-white rounded-2xl border border-[#ece8f6] p-6">
              <div className="flex items-center gap-2 mb-4">
                <TurmericIllustration size={40} />
              </div>
              <h3 className="text-xl mb-2">Turmeric + Black Pepper</h3>
              <p className="text-[#1c1828]/55 mb-4">Piperine may improve curcumin bioavailability.</p>
              <span className="inline-flex items-center gap-1 text-sm text-[#3dbf9a] bg-[#e6f2ee] px-3 py-1 rounded-full">↑ Synergy</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHY ABSORVIST */}
      <section id="about" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-center text-4xl md:text-5xl mb-16">
            Nutrient intelligence,<br />not just nutrition tracking.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl border border-[#ece8f6] p-8">
              <span className="w-12 h-12 rounded-full bg-[#ece8f6] flex items-center justify-center text-xl mb-4">🔬</span>
              <h3 className="text-2xl mb-2">Food Interaction Analysis</h3>
              <p className="text-[#1c1828]/55">Understand how ingredients affect one another.</p>
            </div>
            <div className="bg-white rounded-2xl border border-[#ece8f6] p-8">
              <span className="w-12 h-12 rounded-full bg-[#e6f2ee] flex items-center justify-center text-xl mb-4">📚</span>
              <h3 className="text-2xl mb-2">Science-Based Recommendations</h3>
              <p className="text-[#1c1828]/55">Insights informed by published nutrition research.</p>
            </div>
            <div className="bg-white rounded-2xl border border-[#ece8f6] p-8">
              <span className="w-12 h-12 rounded-full bg-[#ece8f6] flex items-center justify-center text-xl mb-4">✨</span>
              <h3 className="text-2xl mb-2">Simple and Actionable</h3>
              <p className="text-[#1c1828]/55">Clear suggestions without scientific complexity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="early-access" className="py-6">
        <div className="max-w-6xl mx-auto px-6 pb-20">
          <div className="rounded-3xl bg-gradient-to-br from-[#e6f2ee] to-[#ece8f6] p-10 md:p-14 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl mb-3">
                Be among the first to discover what your meals are really delivering.
              </h2>
              <p className="text-[#1c1828]/60">
                Join the early access list and help shape the future of nutrient optimization.
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              {submitted ? (
                <div className="bg-white rounded-xl px-6 py-5 text-center">
                  <p className="text-xl">✓ Thank you!</p>
                  <p className="text-sm text-[#1c1828]/50 mt-1">We'll be in touch soon.</p>
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
                      className="flex-1 px-5 py-3.5 rounded-full border border-[#ddd8f0] bg-white text-[#1c1828] focus:outline-none focus:ring-2 focus:ring-[#7c5cbf]"
                    />
                    <button
                      type="submit"
                      className="px-7 py-3.5 rounded-full bg-[#7c5cbf] text-white font-medium hover:bg-[#6b4dab] transition-colors"
                    >
                      Get Early Access
                    </button>
                  </div>
                  <p className="text-sm text-[#1c1828]/45 mt-3">No spam. Unsubscribe anytime.</p>
                </>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#ece8f6] py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <SpinachIllustration size={24} />
            <span className="text-xl">Absorvist</span>
            <span className="text-[#1c1828]/40 text-base ml-2">Helping you get more from every meal.</span>
          </div>
          <div className="flex gap-6 text-[#1c1828]/60">
            <a href="#" className="hover:text-[#7c5cbf] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#7c5cbf] transition-colors">Contact</a>
            <a href="#" className="hover:text-[#7c5cbf] transition-colors">Instagram</a>
          </div>
        </div>
        <p className="text-center text-[#1c1828]/40 text-sm mt-8">© 2026 Absorvist</p>
      </footer>
    </div>
  );
}
