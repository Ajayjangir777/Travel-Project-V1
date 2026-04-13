import { Link } from 'react-router-dom'

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-secondary via-blue-900 to-secondary text-white py-20">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <nav className="text-sm mb-4">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-primary">About Us</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg md:text-xl text-gray-200">
            Your Trusted Travel Partner in Rajasthan
          </p>
        </div>
      </div>

      {/* About Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Welcome to Shree Shyam Tour and Travels
              </h2>
              <p className="text-gray-600 mb-4">
                Founded with a passion for showcasing the rich heritage and culture of Rajasthan, 
                Shree Shyam Tour and Travels has been providing exceptional travel experiences since 2010. 
                We are a Jaipur-based travel company dedicated to creating memorable journeys for travelers 
                from around the world.
              </p>
              <p className="text-gray-600 mb-4">
                Our team of experienced travel professionals works tirelessly to ensure that every trip 
                is meticulously planned and executed, offering you the best of Rajasthan's majestic forts, 
                vibrant cities, serene lakes, and golden deserts.
              </p>
              <p className="text-gray-600">
                Whether you're looking for a luxurious heritage tour, an adventurous wildlife safari, 
                or a spiritual pilgrimage, we have the perfect itinerary for you. Our commitment to 
                quality service and customer satisfaction has made us one of the most trusted travel 
                partners in Rajasthan.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600&h=400&fit=crop"
                alt="Rajasthan Palace"
                className="rounded-xl shadow-lg w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl font-bold">15+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Why Choose Us
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '🏆',
                title: 'Expert Guides',
                description: 'Our experienced local guides bring stories to life with their in-depth knowledge'
              },
              {
                icon: '💰',
                title: 'Best Prices',
                description: 'Competitive pricing with no hidden costs - transparent and honest dealings'
              },
              {
                icon: '🚗',
                title: 'Premium Fleet',
                description: 'Well-maintained vehicles with professional drivers for safe travel'
              },
              {
                icon: '📞',
                title: '24/7 Support',
                description: 'Round-the-clock customer support to assist you anytime, anywhere'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Our Services
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Rajasthan Tours',
                description: 'Explore the royal heritage of Rajasthan with our curated tour packages',
                link: '/rajasthan-tours'
              },
              {
                title: 'Golden Triangle Tours',
                description: 'Experience Delhi, Agra, and Jaipur - the famous Golden Triangle circuit',
                link: '/golden-triangle-tours'
              },
              {
                title: 'Wildlife Tours',
                description: 'Safari adventures in Ranthambore, Sariska, and other wildlife sanctuaries',
                link: '/wildlife-tours'
              },
              {
                title: 'Taxi Services',
                description: 'Reliable outstation taxi services with professional drivers',
                link: '/outstation-taxi'
              },
              {
                title: 'Tempo Traveller',
                description: 'Spacious tempo travellers for group tours and family vacations',
                link: '/tempo-traveller'
              },
              {
                title: 'Custom Tours',
                description: 'Personalized itineraries tailored to your preferences and budget',
                link: '/contact-us'
              }
            ].map((service, idx) => (
              <Link
                key={idx}
                to={service.link}
                className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-all group"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: '15000+', label: 'Happy Customers' },
              { number: '500+', label: 'Tour Packages' },
              { number: '50+', label: 'Vehicles' },
              { number: '100+', label: 'Expert Guides' }
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Dedicated professionals committed to making your travel experience unforgettable
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Rajesh Sharma', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop' },
              { name: 'Priya Singh', role: 'Operations Head', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop' },
              { name: 'Amit Kumar', role: 'Tour Manager', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop' },
              { name: 'Sunita Verma', role: 'Customer Relations', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop' }
            ].map((member, idx) => (
              <div key={idx} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-bold text-gray-800">{member.name}</h3>
                <p className="text-gray-500 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore Rajasthan?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today and let us plan your perfect Rajasthan adventure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact-us"
              className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
            <a
              href="tel:+919785560707"
              className="border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-primary transition-colors"
            >
              📞 +91 97855 60707
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs
