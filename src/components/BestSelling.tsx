const bestSellingTours = [
  {
    id: 1,
    title: "Wildlife Safari Tour Package 11 Days",
    duration: "11 days",
    rating: "4.8/5",
    reviews: "2.6k",
    image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=400&h=300&fit=crop",
    featured: false
  },
  {
    id: 2,
    title: "Jodhpur Jaisalmer Desert Tour Package",
    duration: "5 days",
    rating: "4.8/5",
    reviews: "2.6k",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=400&h=300&fit=crop",
    featured: false
  },
  {
    id: 3,
    title: "3 Nights 4 Days Rajasthan Tour Package",
    duration: "4 days",
    rating: "4.8/5",
    reviews: "2.6k",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=400&h=300&fit=crop",
    featured: false
  },
  {
    id: 4,
    title: "Cultural Heritage Tour Package 11 Days",
    duration: "11 days",
    rating: "4.8/5",
    reviews: "2.6k",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&h=300&fit=crop",
    featured: true
  },
  {
    id: 5,
    title: "7 Days 6 Night Complete Rajasthan Tour",
    duration: "7 days",
    rating: "4.8/5",
    reviews: "2.6k",
    image: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?w=400&h=300&fit=crop",
    featured: false
  },
]

const BestSelling = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-secondary to-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Best Selling Tour Packages</h2>
          <a
            href="/tours"
            className="text-primary font-semibold hover:underline flex items-center"
          >
            View All Tours
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Tour Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {bestSellingTours.map((tour) => (
            <div key={tour.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group">
              {/* Image */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {tour.featured && (
                  <div className="absolute top-2 left-2 bg-accent text-white text-xs px-2 py-1 rounded-full font-semibold">
                    Featured
                  </div>
                )}
                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm text-gray-800 text-xs px-2 py-1 rounded-full font-medium">
                  ⭐ {tour.rating}
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-bold text-gray-800 text-sm mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {tour.title}
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-600 text-sm">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {tour.duration}
                  </div>
                  <a
                    href={`/tour/${tour.id}`}
                    className="text-primary font-semibold text-sm hover:underline"
                  >
                    Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BestSelling
