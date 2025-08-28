import VideoTestimonial from "../../components/reviews/VideoTestimonial";

export default function ReviewSection() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-900 via-pink-900/10 to-gray-900">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-center">
          <div className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-8 backdrop-blur-sm hover:border-pink-500/30 transition-all duration-300 max-w-6xl w-full">
            <VideoTestimonial
              videoUrl="https://storage.googleapis.com/lioncrossdev-testimonials/2025-05-03_145011_doma_luxe.mp4"
            >
              {/* Top Content */}
              <div className="space-y-6">
                {/* Author Info */}
                <div className="text-left">
                  <p className="text-gray-300 text-3xl font-bold mb-2">
                    From David K.
                  </p>
                  <p className="text-gray-300 text-xl font-bold mb-2">
                    The Founder of{" "}
                    <a
                      href="https://www.domaluxeproperties.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-400 hover:text-pink-300 transition-colors duration-300 underline inline-flex items-center"
                    >
                      DOMA Luxe Properties
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </p>
                </div>

                {/* Testimonial Quote */}
                <div className="text-left px-8">
                  <blockquote className="text-gray-200 text-lg leading-relaxed italic">
                    "... He was able to implement some very much-needed automations that speed up our day-to-day operations significantly ..."
                  </blockquote>
                </div>
              </div>

              {/* Bottom Content - LinkedIn Link */}
              <div className="text-left">
                <a
                  href="https://www.linkedin.com/company/doma-luxe-properties/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  <svg
                    className="w-6 h-6 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span className="text-sm">Follow on LinkedIn</span>
                </a>
              </div>
            </VideoTestimonial>
          </div>
        </div>
      </div>
    </section>
  );
}
