import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="relative py-24 bg-gray-950">
      {/* Background decoration - organized in focal points */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary focal point - behind the image */}
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-gradient-to-br from-pink-500/15 to-rose-500/10 rounded-full blur-3xl opacity-40 animate-pulse"></div>

        {/* Secondary focal point - behind the text */}
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-gradient-to-tr from-rose-400/12 to-pink-400/8 rounded-full blur-3xl opacity-35 animate-pulse" style={{ animationDelay: '1.5s' }}></div>

        {/* Corner accents - creating frame effect */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-pink-400/20 to-transparent rounded-full blur-2xl opacity-50 animate-pulse" style={{ animationDelay: '0.8s' }}></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-rose-400/20 to-transparent rounded-full blur-2xl opacity-50 animate-pulse" style={{ animationDelay: '2.2s' }}></div>

        {/* Flow lines - connecting focal points */}
        <div className="absolute top-1/4 left-1/2 w-48 h-48 bg-gradient-to-r from-pink-300/15 to-rose-300/10 rounded-full blur-2xl opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-40 h-40 bg-gradient-to-l from-rose-400/12 to-pink-400/8 rounded-full blur-2xl opacity-35 animate-pulse" style={{ animationDelay: '1.8s' }}></div>

        {/* Subtle background texture */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-pink-200/5 to-rose-200/5 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                  Hi, I'm Lionel
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  My journey has consisted of working with businesses on a variety of automations—
                  data gathering, custom spreadsheets, CRM workflows, app integrations, etc.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Automation tools and AI are constantly improving, creating opportunities every day!
                  Together, we'll discover the ones that will save you the most time and money.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  Partner with me to forever begin eliminating busywork you don't enjoy, implementing automations
                  that scale with your business. And your team!
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative max-w-md mx-auto lg:max-w-lg">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/professional.jpg"
                  alt="Professional real estate technology expert"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              {/* Image halo effect - organized around the image */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-bl from-pink-500/25 to-rose-500/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-tr from-rose-500/20 to-pink-500/15 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1.2s' }}></div>

              {/* Image accent points - creating visual interest */}
              <div className="absolute top-1/3 -right-4 w-16 h-16 bg-gradient-to-l from-pink-400/30 to-transparent rounded-full blur-lg animate-pulse" style={{ animationDelay: '0.6s' }}></div>
              <div className="absolute bottom-1/3 -left-4 w-20 h-20 bg-gradient-to-r from-rose-400/25 to-transparent rounded-full blur-lg animate-pulse" style={{ animationDelay: '1.8s' }}></div>

              {/* Subtle corner highlights */}
              <div className="absolute -top-2 right-1/4 w-8 h-8 bg-pink-300/40 rounded-full blur-sm animate-pulse" style={{ animationDelay: '2.5s' }}></div>
              <div className="absolute -bottom-2 left-1/4 w-6 h-6 bg-rose-300/45 rounded-full blur-sm animate-pulse" style={{ animationDelay: '0.9s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
