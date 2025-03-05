
import Image from "next/image";

export default function TestimonialCard({ quote, author, position, image }) {
  return (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100/50 relative overflow-hidden">
      {/* Subtle Gradient Overlay on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
      
      <div className="relative z-10">
        <p className="text-gray-600 mb-6 italic leading-relaxed">&ldquo;{quote}&rdquo;</p>
        <div className="flex items-center gap-4">
          <Image
            src={image}
            alt={author}
            width={60}
            height={60}
            className="rounded-full object-cover border-2 border-blue-100 group-hover:scale-105 transition-transform duration-300"
          />
          <div>
            <p className="text-lg font-semibold text-gray-900">{author}</p>
            <p className="text-sm text-gray-500">{position}</p>
          </div>
        </div>
      </div>
    </div>
  );
}