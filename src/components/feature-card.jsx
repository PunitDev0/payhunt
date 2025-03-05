
export default function FeatureCard({ icon, title, description, gradient }) {
    return (
      <div className={`bg-gradient-to-br ${gradient} p-6 md:p-8 rounded-xl shadow-md border border-gray-100/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group relative overflow-hidden`}>
        {/* Card Background Effect */}
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="relative z-10">
          <div className="mb-5 p-3 bg-white/50 rounded-full w-fit mx-auto md:mx-0 shadow-inner group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
          <h3 className="text-xl md:text-2xl font-semibold mb-3 text-gray-900 text-center md:text-left leading-tight">
            {title}
          </h3>
          <p className="text-gray-600 text-center md:text-left leading-relaxed">
            {description}
          </p>
        </div>
        
        {/* Hover Effect Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
      </div>
    )
  }