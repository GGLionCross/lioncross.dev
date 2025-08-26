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
                  Who Am I
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  With over a decade of experience in real estate technology, I've helped hundreds of businesses
                  streamline their operations through custom automation solutions.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  My approach combines deep industry knowledge with cutting-edge technology to deliver systems
                  that not only work—they transform how you do business.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  Every solution is tailored to your specific needs, ensuring you get exactly what your business
                  requires to thrive in today's competitive market.
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
