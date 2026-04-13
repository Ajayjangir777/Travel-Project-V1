const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1920&h=1080&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white">
          <h2 className="text-lg font-medium text-primary mb-2">Welcome to Shree Shyam Tour and Travels</h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Discover the Magic of Rajasthan
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed">
            Experience the royal heritage, vibrant culture, and breathtaking landscapes 
            of Rajasthan with our expertly curated tour packages. From majestic forts to 
            golden deserts, create memories that last a lifetime.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/tours"
              className="bg-primary hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center"
            >
              Explore Tours
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="https://wa.me/919785560707"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-colors border border-white/30"
            >
              Connect with Expert
            </a>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <h3 className="text-3xl font-bold text-primary">15+</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary">50K+</h3>
              <p className="text-gray-600">Happy Travelers</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary">100+</h3>
              <p className="text-gray-600">Tour Packages</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary">4.9</h3>
              <p className="text-gray-600">Customer Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
