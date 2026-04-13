import { Link } from 'react-router-dom'
import { allTours, categories, Tour } from '../data/tours'

interface ToursPageProps {
  category?: string
}

const ToursPage = ({ category }: ToursPageProps) => {
  const filteredTours = category 
    ? allTours.filter(tour => tour.category === category)
    : allTours
  
  const pageTitle = category || "Explore Our Tours"
  const breadcrumb = category || "Tours"

  return (
    <div>
      {/* Hero Banner */}
      <div className="relative h-[200px] sm:h-[250px] md:h-[350px] lg:h-[400px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1920&h=680&fit=crop"
          alt="Rajasthan Forts"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4">{pageTitle}</h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto opacity-90 hidden sm:block">
              Discover the rich heritage, vibrant culture, and breathtaking landscapes of Rajasthan and India
            </p>
            <div className="flex items-center justify-center mt-3 md:mt-6 text-xs sm:text-sm">
              <Link to="/" className="text-white/80 hover:text-white transition-colors">Home</Link>
              <span className="mx-2 text-white/60">/</span>
              {category ? (
                <>
                  <Link to="/tours" className="text-white/80 hover:text-white transition-colors">Tours</Link>
                  <span className="mx-2 text-white/60">/</span>
                  <span className="text-primary font-semibold truncate max-w-[120px] sm:max-w-none">{breadcrumb}</span>
                </>
              ) : (
                <span className="text-primary font-semibold">Tours</span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Enquire Now Button */}
      <div className="bg-primary py-3 sm:py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white text-sm sm:text-base mb-2 sm:mb-3">
            Looking for a customized tour package? We offer personalized tours tailored to your preferences.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-primary px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base"
          >
            ENQUIRE NOW
          </Link>
        </div>
      </div>

      {/* Tours Description */}
      <div className="bg-gray-50 py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Rajasthan Tour Travels offering comprehensive tour packages to travel across India. Our tour services suit all of your travel needs, whether they are for family holidays, romantic getaways, corporate tours, or formal meetings. The friendly guides have years of expertise and are quite knowledgeable about their locations.
            </p>
          </div>
        </div>
      </div>

      {/* Tour Categories Filter */}
      <div className="py-4 sm:py-6 md:py-8 bg-white border-b overflow-x-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-nowrap sm:flex-wrap justify-start sm:justify-center gap-2 sm:gap-3 pb-2 sm:pb-0">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                to={`/${cat.slug}`}
                className={`px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full border-2 border-primary font-medium text-xs sm:text-sm whitespace-nowrap transition-colors flex-shrink-0 ${
                  (cat.name === category) || (cat.slug === 'tours' && !category)
                    ? 'bg-primary text-white'
                    : 'text-primary hover:bg-primary hover:text-white'
                }`}
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Tours Grid */}
      <section className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          {filteredTours.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
              {filteredTours.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No tours found in this category.</p>
              <Link to="/tours" className="text-primary hover:underline mt-2 inline-block">View all tours</Link>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-r from-primary to-yellow-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">Can't Find Your Perfect Tour?</h2>
          <p className="text-white/90 text-sm sm:text-base mb-6 md:mb-8 max-w-2xl mx-auto">
            We specialize in creating customized tour packages based on your preferences, budget, and schedule. Let us plan your dream vacation!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="tel:+919785560707"
              className="inline-flex items-center justify-center bg-white text-primary px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Us Now
            </a>
            <a
              href="https://wa.me/919785560707?text=Please%20contact%20me.%20I%20am%20Interested%20in%20Some%20Tour%20Packages"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-green-500 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-green-600 transition-colors text-sm sm:text-base"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

const TourCard = ({ tour }: { tour: Tour }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
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
        <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-white/90 backdrop-blur-sm text-gray-800 text-[10px] sm:text-sm px-2 sm:px-3 py-0.5 sm:py-1 rounded-full font-medium flex items-center">
          <span className="text-yellow-500 mr-1">★</span>
          {tour.rating}
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
          <Link
            to={`/tour/${tour.id}`}
            className="bg-primary hover:bg-yellow-600 text-white px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-lg text-[10px] sm:text-xs md:text-sm font-semibold transition-colors inline-flex items-center whitespace-nowrap"
          >
            More Info
            <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 hidden sm:inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ToursPage
