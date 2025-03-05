export default function StatsSection() {
    return (
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/3 w-64 h-64 bg-blue-100/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-indigo-100/20 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        </div>
  
        <div className="relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group relative overflow-hidden border border-gray-100/50">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              <div className="relative z-10 text-center">
                <p className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-3 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                  50K+
                </p>
                <p className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Businesses</p>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Trusted by over 50,000 businesses worldwide
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group relative overflow-hidden border border-gray-100/50">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              <div className="relative z-10 text-center">
                <p className="text-4xl md:text-5xl font-extrabold text-indigo-600 mb-3 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                  $10B+
                </p>
                <p className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Processed</p>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Over $10 billion in transactions processed annually
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group relative overflow-hidden border border-gray-100/50">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              <div className="relative z-10 text-center">
                <p className="text-4xl md:text-5xl font-extrabold text-purple-600 mb-3 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                  135+
                </p>
                <p className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Countries</p>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Serving customers in over 135 countries
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group relative overflow-hidden border border-gray-100/50">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              <div className="relative z-10 text-center">
                <p className="text-4xl md:text-5xl font-extrabold text-teal-600 mb-3 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                  99.9%
                </p>
                <p className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Uptime</p>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Reliable platform with 99.9% uptime guarantee
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }