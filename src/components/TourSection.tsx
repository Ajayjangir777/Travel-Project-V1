interface Tour {
  id: number
  title: string
  duration: string
  rating: string
  reviews: string
  image: string
  featured: boolean
}

interface TourSectionProps {
  title: string
  viewAllLink: string
  tours: Tour[]
  bgColor?: string
}

const TourSection = ({ title, viewAllLink, tours, bgColor = 'bg-white' }: TourSectionProps) => {
  return (
    <section className={`py-8 sm:py-12 md:py-16 ${bgColor}`}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">{title}</h2>
          <a
            href={viewAllLink}
            className="text-primary font-semibold hover:underline flex items-center text-sm sm:text-base"
          >
            View All Tours
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Tour Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </div>
    </section>
  )
}

const TourCard = ({ tour }: { tour: Tour }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
      {/* Image */}
      <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {tour.featured && (
          <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-accent text-white text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full font-semibold">
            Featured
          </div>
        )}
        <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-white/90 backdrop-blur-sm text-gray-800 text-[10px] sm:text-sm px-2 sm:px-3 py-0.5 sm:py-1 rounded-full font-medium">
          <span className="text-yellow-500">★</span> {tour.rating}
        </div>
      </div>

      {/* Content */}
      <div className="p-3 sm:p-4 md:p-5">
        <h3 className="font-bold text-gray-800 text-sm sm:text-base mb-2 sm:mb-3 line-clamp-2 group-hover:text-primary transition-colors min-h-[2.5rem] sm:min-h-[3rem]">
          {tour.title}
        </h3>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center text-gray-600 text-xs sm:text-sm">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-medium">{tour.duration}</span>
          </div>
          <a
            href={`/tour/${tour.id}`}
            className="bg-primary hover:bg-yellow-600 text-white px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-lg text-[10px] sm:text-xs md:text-sm font-semibold transition-colors whitespace-nowrap"
          >
            More Info
          </a>
        </div>
      </div>
    </div>
  )
}

export default TourSection
