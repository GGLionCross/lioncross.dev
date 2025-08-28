import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Left side */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <span className="text-white font-bold text-xl tracking-[0.2em] group-hover:text-pink-300 transition-colors duration-300">
                LIONCROSS
              </span>
              <div className="px-2 py-1 bg-white rounded-md group-hover:bg-pink-300 transition-colors duration-300">
                <span className="text-gray-900 font-bold text-xl tracking-[0.2em]">
                  DEV
                </span>
              </div>
            </Link>
          </div>

          {/* Navigation - Right side */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* <Link 
              href="/packages" 
              className="text-gray-300 hover:text-pink-300 transition-colors duration-300 font-bold"
            >
              Packages
            </Link>
            <Link 
              href="/resources" 
              className="text-gray-300 hover:text-pink-300 transition-colors duration-300 font-bold"
            >
              Resources
            </Link>
            <Link 
              href="/support" 
              className="text-gray-300 hover:text-pink-300 transition-colors duration-300 font-bold"
            >
              Support
            </Link>
            
            <div className="flex items-center ml-8">
                             <Link 
                 href="/contact" 
                 className="px-4 py-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-medium rounded-lg hover:from-pink-600 hover:to-rose-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-pink-500/25 border border-pink-500/20"
               >
                 Let's Talk
               </Link>
            </div> */}
          </nav>

          {/* Mobile menu button */}
          {/* <div className="md:hidden">
            <button className="text-gray-300 hover:text-pink-300 transition-colors duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div> */}
        </div>
      </div>
    </header>
  );
}
