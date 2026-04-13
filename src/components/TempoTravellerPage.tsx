import { Link } from 'react-router-dom'

interface TempoTraveller {
  id: number
  name: string
  seatingCapacity: string
  passengers: string
  driverCharges: string
  charges: string
  facilities: string[]
  image: string
  popular?: boolean
}

const tempoTravellers: TempoTraveller[] = [
  {
    id: 1,
    name: "8 Seater Tempo Traveller",
    seatingCapacity: "8 Seater",
    passengers: "7 Passengers + 1 Driver",
    driverCharges: "₹300 INR (Per Day)",
    charges: "₹24 per KM Onwards",
    facilities: ["AC", "Pushback Seats", "LED Lights", "Charging Points", "First Aid Kit", "Music System"],
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=500&h=300&fit=crop",
    popular: false
  },
  {
    id: 2,
    name: "12 Seater Tempo Traveller",
    seatingCapacity: "12 Seater",
    passengers: "11 Passengers + 1 Driver",
    driverCharges: "₹300 INR (Per Day)",
    charges: "₹24 per KM Onwards",
    facilities: ["AC", "Pushback Seats", "LED Lights", "Charging Points", "First Aid Kit", "Music System", "Curtains"],
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=500&h=300&fit=crop",
    popular: true
  },
  {
    id: 3,
    name: "16 Seater Tempo Traveller",
    seatingCapacity: "16 Seater",
    passengers: "15 Passengers + 1 Driver",
    driverCharges: "₹300 INR (Per Day)",
    charges: "₹26 per KM Onwards",
    facilities: ["AC", "Pushback Seats", "LED Lights", "Charging Points", "First Aid Kit", "Music System", "Curtains", "Large Luggage Space"],
    image: "https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?w=500&h=300&fit=crop",
    popular: true
  },
  {
    id: 4,
    name: "20 Seater Tempo Traveller",
    seatingCapacity: "20 Seater",
    passengers: "19 Passengers + 1 Driver",
    driverCharges: "₹300 INR (Per Day)",
    charges: "₹28 per KM Onwards",
    facilities: ["AC", "Pushback Seats", "LED Lights", "Charging Points", "First Aid Kit", "Music System", "Curtains", "Large Luggage Space", "LCD Screen"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop",
    popular: false
  },
  {
    id: 5,
    name: "26 Seater Tempo Traveller",
    seatingCapacity: "26 Seater",
    passengers: "25 Passengers + 1 Driver",
    driverCharges: "₹400 INR (Per Day)",
    charges: "₹32 per KM Onwards",
    facilities: ["AC", "Pushback Seats", "LED Lights", "Charging Points", "First Aid Kit", "Music System", "Curtains", "Extra Large Luggage Space", "LCD Screen", "Mic System"],
    image: "https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?w=500&h=300&fit=crop",
    popular: false
  }
]

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Well Maintained Fleet",
    description: "All our tempo travellers are regularly serviced and maintained for your safety"
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Affordable Pricing",
    description: "Competitive rates with no hidden charges for transparent billing"
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Experienced Drivers",
    description: "Professional and courteous drivers with local knowledge"
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "24/7 Availability",
    description: "Round the clock service for all your travel needs"
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Safety First",
    description: "All vehicles equipped with safety features and first aid kits"
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: "Luxury Comfort",
    description: "AC, pushback seats, and modern amenities for comfortable travel"
  }
]

const popularRoutes = [
  "Jaipur Local Sightseeing",
  "Jaipur to Ajmer Pushkar",
  "Jaipur to Ranthambore",
  "Jaipur to Udaipur",
  "Jaipur to Jodhpur",
  "Jaipur to Jaisalmer",
  "Jaipur to Delhi",
  "Jaipur to Agra",
  "Jaipur to Khatu Shyam Ji",
  "Rajasthan Tour Package",
  "Golden Triangle Tour",
  "Char Dham Yatra"
]

const TempoTravellerPage = () => {
  return (
    <div>
      {/* Hero Banner */}
      <div className="relative h-[200px] sm:h-[280px] md:h-[350px] lg:h-[400px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1920&h=600&fit=crop"
          alt="Tempo Traveller"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4">
              Tempo Traveller in Jaipur
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto opacity-90 hidden sm:block">
              Best tempo traveller rental service for group travel across Rajasthan and India
            </p>
            <div className="flex items-center justify-center mt-3 md:mt-6 text-xs sm:text-sm">
              <Link to="/" className="text-white/80 hover:text-white transition-colors">Home</Link>
              <span className="mx-2 text-white/60">/</span>
              <span className="text-primary font-semibold">Tempo Traveller</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Contact Bar */}
      <div className="bg-primary py-3 sm:py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-white">
            <a href="tel:+919785560707" className="flex items-center hover:text-yellow-200 transition-colors text-sm sm:text-base">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="font-semibold">+91 97855 60707</span>
            </a>
            <a 
              href="https://wa.me/919785560707?text=I%20am%20interested%20in%20booking%20a%20Tempo%20Traveller"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-green-500 hover:bg-green-600 px-4 py-2 rounded-full transition-colors text-sm sm:text-base"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Book on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 text-center">
              Best Tempo Traveller Rental Service in Jaipur
            </h2>
            <div className="prose prose-sm sm:prose-base md:prose-lg max-w-none text-gray-600">
              <p className="mb-4">
                Looking for the best tempo traveller in Jaipur for seamless group travel? Rajasthan Tour Travels offers a large fleet of well-maintained and affordable tempo travellers for local sightseeing in Jaipur as well as beyond Rajasthan and all over India.
              </p>
              <p className="mb-4">
                Whether it is a family vacation, corporate tour, or pilgrimage tour, our services go hand in hand with the smooth enjoyment of the ride. We focus on luxury tempo traveller in Jaipur with modern interiors, pushback seats, AC facilities, and enough space for luggage.
              </p>
              <p>
                Based on the volume of your group, you may select from 9 seater tempo traveller, 12 seater tempo traveller, 16 seater tempo traveller, 17 seater tempo traveller, 22 seater tempo traveller or a 26 seater tempo for a larger group.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tempo Traveller Options */}
      <section className="py-8 sm:py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-6 sm:mb-10 text-center">
            Our Tempo Traveller Fleet
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {tempoTravellers.map((tempo) => (
              <TempoCard key={tempo.id} tempo={tempo} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-6 sm:mb-10 text-center">
            Why Choose Our Tempo Traveller Service?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-4 sm:p-6 hover:shadow-lg transition-shadow">
                <div className="text-primary mb-3 sm:mb-4">{feature.icon}</div>
                <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="py-8 sm:py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-6 sm:mb-10 text-center">
            Popular Routes for Tempo Traveller
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {popularRoutes.map((route, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg p-3 sm:p-4 text-center shadow-sm hover:shadow-md hover:bg-primary hover:text-white transition-all cursor-pointer group"
              >
                <div className="flex items-center justify-center mb-2">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-white transition-colors">{route}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-6 sm:mb-10 text-center">
            How to Book Tempo Traveller
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { step: 1, title: "Select Vehicle", desc: "Choose the right tempo traveller based on your group size" },
              { step: 2, title: "Share Details", desc: "Tell us your travel dates, pickup location and destination" },
              { step: 3, title: "Get Quote", desc: "Receive instant quote with transparent pricing" },
              { step: 4, title: "Confirm Booking", desc: "Pay advance and confirm your booking" }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold mx-auto mb-3 sm:mb-4">
                  {item.step}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-r from-primary to-yellow-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">
            Ready to Book Your Tempo Traveller?
          </h2>
          <p className="text-white/90 text-sm sm:text-base mb-6 md:mb-8 max-w-2xl mx-auto">
            Get the best rates for tempo traveller rental in Jaipur. Contact us now for instant booking and special discounts for long trips!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="tel:+919785560707"
              className="inline-flex items-center justify-center bg-white text-primary px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </a>
            <a
              href="https://wa.me/919785560707?text=I%20am%20interested%20in%20booking%20a%20Tempo%20Traveller"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-green-500 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-green-600 transition-colors text-sm sm:text-base"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Booking
            </a>
            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center border-2 border-white text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-white hover:text-primary transition-colors text-sm sm:text-base"
            >
              Send Enquiry
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-6 sm:mb-10 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "What is the minimum booking for a tempo traveller?",
                a: "The minimum booking is typically 250 km per day or 8 hours, whichever comes first. Extra km and hours are charged additionally."
              },
              {
                q: "Are driver charges included in the price?",
                a: "Driver charges (₹300-400 per day) are separate from the per km charges. Night halt charges may apply for outstation trips."
              },
              {
                q: "What documents do I need to provide?",
                a: "You need to provide a valid ID proof (Aadhaar, Passport, or Driving License) and contact details at the time of booking."
              },
              {
                q: "Is fuel included in the charges?",
                a: "Yes, fuel charges are included in the per km rate. You don't need to pay separately for fuel."
              },
              {
                q: "Can I book for one-way trips?",
                a: "Yes, we offer one-way trip bookings. However, the charges may include return journey costs depending on the route and availability."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const TempoCard = ({ tempo }: { tempo: TempoTraveller }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
      {/* Image */}
      <div className="relative h-40 sm:h-48 overflow-hidden">
        <img
          src={tempo.image}
          alt={tempo.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {tempo.popular && (
          <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-accent text-white text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full font-semibold">
            Popular
          </div>
        )}
        <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-primary text-white text-xs sm:text-sm px-2 sm:px-3 py-0.5 sm:py-1 rounded-full font-semibold">
          {tempo.seatingCapacity}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5">
        <h3 className="font-bold text-gray-800 text-base sm:text-lg mb-3 sm:mb-4">
          {tempo.name}
        </h3>
        
        {/* Pricing Table */}
        <div className="space-y-2 mb-4 text-sm">
          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-gray-600">Capacity</span>
            <span className="font-medium text-gray-800">{tempo.passengers}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-gray-600">Per KM Rate</span>
            <span className="font-semibold text-primary">{tempo.charges}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-gray-600">Driver Charges</span>
            <span className="font-medium text-gray-800">{tempo.driverCharges}</span>
          </div>
        </div>

        {/* Facilities */}
        <div className="mb-4">
          <p className="text-xs text-gray-500 mb-2">Facilities:</p>
          <div className="flex flex-wrap gap-1.5">
            {tempo.facilities.slice(0, 4).map((facility, index) => (
              <span key={index} className="bg-gray-100 text-gray-700 text-[10px] sm:text-xs px-2 py-0.5 rounded">
                {facility}
              </span>
            ))}
            {tempo.facilities.length > 4 && (
              <span className="bg-gray-100 text-gray-700 text-[10px] sm:text-xs px-2 py-0.5 rounded">
                +{tempo.facilities.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Book Now Button */}
        <a
          href={`https://wa.me/919785560707?text=I%20want%20to%20book%20${encodeURIComponent(tempo.name)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-primary hover:bg-yellow-600 text-white py-2.5 rounded-lg font-semibold transition-colors flex items-center justify-center text-sm sm:text-base"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Book Now
        </a>
      </div>
    </div>
  )
}

export default TempoTravellerPage
