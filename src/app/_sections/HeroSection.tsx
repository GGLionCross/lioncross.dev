export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-pink-900/20 to-gray-900 pt-32 pb-16">
      {/* Background decoration with hot pink glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-rose-500/20 rounded-full blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-pink-600/10 to-rose-600/10 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">


          {/* Main headline with gradient text */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
            Automated systems for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-400 to-pink-400 font-semibold">
              real estate businesses
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
            Custom systems built to save you time and money—<br />
            so you can focus on what you do best.
          </p>

          {/* CTA Section with email input and button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-4 bg-white border border-gray-300 text-gray-900 placeholder-gray-500 rounded-lg focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all duration-300 min-w-[280px]"
            />
            <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-rose-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-pink-500/25 border border-pink-500/20">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
