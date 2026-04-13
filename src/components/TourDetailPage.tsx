import { Link, useParams } from 'react-router-dom'
import { allTours } from '../data/tours'

const TourDetailPage = () => {
  const { id } = useParams<{ id: string }>()
  const tour = allTours.find(t => t.id === Number(id))

  if (!tour) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Tour Not Found</h1>
          <p className="text-gray-600 mb-6">The tour you're looking for doesn't exist.</p>
          <Link to="/tours" className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition-colors">
            Browse All Tours
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Hero Banner */}
      <div className="relative h-[250px] sm:h-[300px] md:h-[400px] overflow-hidden">
        <img
          src={tour.image.replace('w=400&h=300', 'w=1920&h=600')}
          alt={tour.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 leading-tight">{tour.title}</h1>
            <div className="flex items-center justify-center gap-2 sm:gap-4 flex-wrap text-sm sm:text-base">
              <span className="flex items-center">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {tour.duration}
              </span>
              <span className="flex items-center">
                <span className="text-yellow-400 mr-1">★</span>
                {tour.rating} ({tour.reviews} reviews)
              </span>
            </div>
            <div className="flex items-center justify-center mt-4 md:mt-6 text-xs sm:text-sm">
              <Link to="/" className="text-white/80 hover:text-white transition-colors">Home</Link>
              <span className="mx-2 text-white/60">/</span>
              <Link to="/tours" className="text-white/80 hover:text-white transition-colors">Tours</Link>
              <span className="mx-2 text-white/60">/</span>
              <span className="text-primary font-semibold truncate max-w-[150px] sm:max-w-none">{tour.title}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left Content */}
          <div className="lg:col-span-2">
            {/* Overview */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Tour Overview</h2>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Experience the magic of {tour.title}. This carefully curated tour takes you through the most iconic destinations, 
                offering a perfect blend of culture, history, and adventure. Our experienced guides ensure you have an unforgettable 
                journey with comfortable transportation and quality accommodations.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4 text-sm sm:text-base">
                Whether you're exploring ancient forts, vibrant markets, or serene landscapes, this tour package is designed to 
                give you the authentic experience of India's rich heritage. Every detail is taken care of, allowing you to focus 
                on creating lasting memories.
              </p>
            </div>

            {/* Highlights */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Tour Highlights</h2>
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                {[
                  "Comfortable AC Transportation",
                  "Professional Tour Guide",
                  "All Entrance Fees Included",
                  "Quality Hotel Accommodations",
                  "Daily Breakfast Included",
                  "Airport/Railway Pickup & Drop",
                  "24/7 Customer Support",
                  "Flexible Itinerary Options"
                ].map((highlight, index) => (
                  <div key={index} className="flex items-center text-sm sm:text-base">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Itinerary */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Sample Itinerary</h2>
              <div className="space-y-4">
                {generateItinerary(tour.duration).map((day, index) => (
                  <div key={index} className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold text-gray-800 text-sm sm:text-base">Day {index + 1}</h3>
                    <p className="text-gray-600 text-sm sm:text-base">{day}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs sm:text-sm text-gray-500 mt-4 italic">
                * This is a sample itinerary. The actual itinerary can be customized based on your preferences.
              </p>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
              <div className="bg-green-50 rounded-xl p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-green-800 mb-3 sm:mb-4">Inclusions</h3>
                <ul className="space-y-2">
                  {[
                    "All transfers by AC vehicle",
                    "Hotel accommodation",
                    "Daily breakfast",
                    "All sightseeing as per itinerary",
                    "Monument entrance fees",
                    "Driver allowance & fuel"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start text-green-700 text-sm sm:text-base">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 rounded-xl p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-red-800 mb-3 sm:mb-4">Exclusions</h3>
                <ul className="space-y-2">
                  {[
                    "Airfare / Train tickets",
                    "Lunch and dinner",
                    "Personal expenses",
                    "Camera fees at monuments",
                    "Travel insurance",
                    "Any items not mentioned"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start text-red-700 text-sm sm:text-base">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Booking Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 sticky top-24">
              <div className="text-center mb-4 sm:mb-6">
                <p className="text-gray-500 text-sm">Starting from</p>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-2xl sm:text-3xl font-bold text-primary">Contact for Price</span>
                </div>
                <p className="text-gray-500 text-xs sm:text-sm">per person</p>
              </div>

              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg text-sm sm:text-base">
                  <span className="text-gray-600">Duration</span>
                  <span className="font-semibold">{tour.duration}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg text-sm sm:text-base">
                  <span className="text-gray-600">Tour Type</span>
                  <span className="font-semibold">{tour.category}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg text-sm sm:text-base">
                  <span className="text-gray-600">Group Size</span>
                  <span className="font-semibold">Flexible</span>
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href="https://api.whatsapp.com/send?phone=919887666283&text=I%20am%20interested%20in%20the%20tour:%20{tour.title}"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center text-sm sm:text-base"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Book via WhatsApp
                </a>
                <a
                  href="tel:+919887666283"
                  className="w-full bg-primary hover:bg-yellow-600 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center text-sm sm:text-base"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now
                </a>
                <Link
                  to="/contact"
                  className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center text-sm sm:text-base"
                >
                  Send Enquiry
                </Link>
              </div>

              <p className="text-center text-gray-500 text-xs sm:text-sm mt-4">
                Have questions? We're here to help 24/7
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Tours */}
      <section className="bg-gray-50 py-8 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8 text-center">Related Tours</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {allTours
              .filter(t => t.category === tour.category && t.id !== tour.id)
              .slice(0, 4)
              .map((relatedTour) => (
                <div key={relatedTour.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <img
                      src={relatedTour.image}
                      alt={relatedTour.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {relatedTour.featured && (
                      <div className="absolute top-3 left-3 bg-accent text-white text-xs px-2 sm:px-3 py-1 rounded-full font-semibold">
                        Featured
                      </div>
                    )}
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-gray-800 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full font-medium flex items-center">
                      <span className="text-yellow-500 mr-1">★</span>
                      {relatedTour.rating}
                    </div>
                  </div>
                  <div className="p-4 sm:p-5">
                    <h3 className="font-bold text-gray-800 mb-2 sm:mb-3 line-clamp-2 group-hover:text-primary transition-colors text-sm sm:text-base min-h-[2.5rem] sm:min-h-[3rem]">
                      {relatedTour.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-600 text-xs sm:text-sm">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="font-medium">{relatedTour.duration}</span>
                      </div>
                      <Link
                        to={`/tour/${relatedTour.id}`}
                        className="bg-primary hover:bg-yellow-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}

// Helper function to generate sample itinerary
function generateItinerary(duration: string): string[] {
  const days = parseInt(duration) || 3
  const itineraryItems = [
    "Arrival and transfer to hotel. Evening at leisure to explore local markets.",
    "Visit iconic monuments and historical sites. Enjoy traditional lunch at local restaurant.",
    "Explore cultural attractions and museums. Photography opportunities at sunset points.",
    "Day trip to nearby attractions. Experience local cuisine and crafts.",
    "Adventure activities and nature exploration. Evening cultural show.",
    "Visit temples and spiritual sites. Interaction with local artisans.",
    "Shopping tour and souvenir collection. Farewell dinner.",
    "Morning sightseeing. Transfer to airport/railway station for departure.",
    "Heritage walk and food tour. Visit popular viewpoints.",
    "Wildlife safari or nature trek. Bonfire and camping experience.",
    "Visit rural villages and understand local lifestyle. Cooking class.",
    "Final day exploration. Check-out and departure with beautiful memories."
  ]
  
  return itineraryItems.slice(0, Math.min(days, itineraryItems.length))
}

export default TourDetailPage
