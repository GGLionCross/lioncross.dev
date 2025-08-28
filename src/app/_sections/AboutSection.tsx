import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="relative py-24 bg-gray-900">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl opacity-30"></div>
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

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-pink-500/30 to-rose-500/30 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-rose-500/20 to-pink-500/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
