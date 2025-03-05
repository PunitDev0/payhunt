import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-white via-blue-50 to-indigo-100 pt-16 md:pt-28 pb-12 md:pb-24 overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent leading-tight drop-shadow-md">
              Simplifying Payments for Businesses
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed font-medium bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm">
              A complete payment solution to accept, process, and disburse payments with simple integration and transparent pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="px-8 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Started
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 hover:border-indigo-700 transition-all duration-300 transform hover:scale-105 group font-semibold shadow-md hover:shadow-lg"
              >
                Learn More 
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </div>
            <div className="mt-10 md:mt-12 flex flex-col sm:flex-row gap-6 md:gap-8 items-center justify-center lg:justify-start">
              <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Trusted by leading brands</p>
              <div className="flex flex-wrap gap-6 md:gap-8 justify-center">
                <img 
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&h=30" 
                  alt="Tech Company Logo" 
                  className="h-9 opacity-70 hover:opacity-100 transition-all duration-300 transform hover:scale-110 rounded-md shadow-sm"
                />
                <img 
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&h=30" 
                  alt="Retail Company Logo" 
                  className="h-9 opacity-70 hover:opacity-100 transition-all duration-300 transform hover:scale-110 rounded-md shadow-sm"
                />
                <img 
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&h=30" 
                  alt="Finance Company Logo" 
                  className="h-9 opacity-70 hover:opacity-100 transition-all duration-300 transform hover:scale-110 rounded-md shadow-sm"
                />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative mt-10 lg:mt-0">
            <div className="relative transform -rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-2xl blur-md -m-4"></div>
              <img
                src="https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=500"
                alt="Payment Dashboard"
                className="relative rounded-2xl shadow-2xl max-w-full h-auto border-4 border-white transform hover:scale-105 transition-all duration-300"
              />
            </div>
            
            {/* Success Card */}
            <div className="absolute -bottom-4 sm:-bottom-6 lg:-bottom-8 -left-4 sm:-left-6 bg-white/90 backdrop-blur-md p-4 sm:p-5 rounded-xl shadow-2xl border border-gray-100/50 animate-float">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 bg-green-100 rounded-full flex items-center justify-center shadow-inner">
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Payment Successful</p>
                  <p className="text-xs text-gray-500 tracking-wide">Transaction ID: #38291</p>
                </div>
              </div>
            </div>

            {/* Integration Card */}
            <div className="absolute -top-4 sm:-top-6 lg:-top-8 -right-4 sm:-right-6 bg-white/90 backdrop-blur-md p-4 sm:p-5 rounded-xl shadow-2xl border border-gray-100/50 animate-float-delayed">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 bg-blue-100 rounded-full flex items-center justify-center shadow-inner">
                  <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">New Integration</p>
                  <p className="text-xs text-gray-500 tracking-wide">Connect your store</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}