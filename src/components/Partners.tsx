const Partners = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Recommended By
          </h2>
          <p className="text-gray-600">
            Trusted by leading travel platforms and thousands of happy travelers
          </p>
        </div>

        {/* Partner Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
          {['TripAdvisor', 'Google', 'Booking.com', 'MakeMyTrip'].map((partner) => (
            <div
              key={partner}
              className="bg-gray-100 px-8 py-4 rounded-lg text-gray-600 font-semibold text-lg hover:bg-gray-200 transition-colors"
            >
              {partner}
            </div>
          ))}
        </div>

        {/* TripAdvisor Review Card */}
        <div className="max-w-lg mx-auto bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                TA
              </div>
              <div className="ml-3">
                <p className="font-bold text-gray-800">TripAdvisor</p>
                <p className="text-sm text-gray-500">Traveler Rating</p>
              </div>
            </div>
            <div className="text-right">
              <div className="flex text-green-500">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-1">100+ reviews</p>
            </div>
          </div>
          
          <div className="border-t pt-4">
            <p className="text-gray-700 font-medium mb-2">Recent Traveler Reviews</p>
            <p className="text-gray-600 text-sm italic">
              "Excellent service! The drivers were very professional and knowledgeable about all the tourist spots..."
            </p>
          </div>

          <a
            href="#"
            className="inline-block mt-4 text-green-600 font-semibold hover:underline"
          >
            Read all reviews →
          </a>
        </div>
      </div>
    </section>
  )
}

export default Partners;
