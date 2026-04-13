import { useState } from 'react'
import { Link } from 'react-router-dom'

const services = [
  {
    id: 'outstation-taxi',
    title: 'Taxi Services',
    icon: '🚕',
    description: 'Reliable taxi services for airport transfers, city tours, and outstation travel across Rajasthan.',
    link: '/outstation-taxi'
  },
  {
    id: 'tempo-traveller',
    title: 'Tempo Travellers',
    icon: '🚐',
    description: 'Spacious tempo travellers for group tours and family vacations with 9 to 26 seater options.',
    link: '/tempo-traveller'
  },
]

const Services = () => {
  const [activeTab, setActiveTab] = useState('outstation-taxi')

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Most Popular Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our wide range of travel services tailored to meet your needs
          </p>
        </div>

        {/* Service Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(service.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === service.id
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
              }`}
            >
              <span className="mr-2">{service.icon}</span>
              {service.title}
            </button>
          ))}
        </div>

        {/* Service Content */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service) => (
            <div
              key={service.id}
              className={`bg-white rounded-xl p-6 shadow-lg transition-all ${
                activeTab === service.id ? 'ring-2 ring-primary' : ''
              }`}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link
                to={service.link}
                className="inline-flex items-center text-primary font-semibold hover:underline"
              >
                Learn More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
