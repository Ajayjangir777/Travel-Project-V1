import { useState } from 'react'
import { Link } from 'react-router-dom'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Create WhatsApp message with form data
    const message = `Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0ASubject: ${formData.subject}%0AMessage: ${formData.message}`
    window.open(`https://wa.me/919785560707?text=${message}`, '_blank')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-secondary via-blue-900 to-secondary text-white py-20">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <nav className="text-sm mb-4">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-primary">Contact Us</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl text-gray-200">
            We'd love to hear from you. Get in touch with us today!
          </p>
        </div>
      </div>

      {/* Contact Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: '📍',
                title: 'Our Office',
                info: 'Plot no 31, Shree Ram Nagar, Chokhi Dhani Goner Mod, Jaipur, Rajasthan',
              },
              {
                icon: '📞',
                title: 'Phone Number',
                info: '+91 97855 60707',
                link: 'tel:+919785560707'
              },
              {
                icon: '📱',
                title: 'WhatsApp',
                info: '+91 97855 60707',
                link: 'https://wa.me/919785560707'
              },
              {
                icon: '✉️',
                title: 'Email Address',
                info: 'shreeshyamtravelsjaipur8@gmail.com',
                link: 'shreeshyamtravelsjaipur8@gmail.com'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                {item.link ? (
                  <a href={item.link} className="text-primary hover:underline block break-all">
                    {item.info}
                  </a>
                ) : (
                  <>
                    <p className="text-gray-600">{item.info}</p>
                    {/* {item.subInfo && <p className="text-gray-500 text-sm">{item.subInfo}</p>} */}
                  </>
                )}
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="Enter your phone"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">Subject</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    >
                      <option value="">Select Subject</option>
                      <option value="Tour Enquiry">Tour Enquiry</option>
                      <option value="Taxi Booking">Taxi Booking</option>
                      <option value="Tempo Traveller">Tempo Traveller</option>
                      <option value="Custom Package">Custom Package</option>
                      <option value="Feedback">Feedback</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Your Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                    placeholder="Write your message here..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-bold transition-colors"
                >
                  Send via WhatsApp
                </button>
              </form>
            </div>

            {/* Quick Contact */}
            <div>
              <div className="bg-secondary text-white rounded-xl p-8 mb-6">
                <h2 className="text-2xl font-bold mb-6">Quick Contact</h2>
                <p className="text-gray-300 mb-6">
                  Need immediate assistance? Call us or send a WhatsApp message for instant response.
                </p>
                <div className="space-y-4">
                  <a
                    href="tel:+919785560707"
                    className="flex items-center bg-white/10 hover:bg-white/20 px-6 py-4 rounded-lg transition-colors"
                  >
                    <span className="text-2xl mr-4">📞</span>
                    <div>
                      <div className="font-semibold">Call Us Now</div>
                      <div className="text-primary">+91 97855 60707</div>
                    </div>
                  </a>
                  <a
                    href="https://wa.me/919785560707?text=Hi, I need travel assistance"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-green-600 hover:bg-green-700 px-6 py-4 rounded-lg transition-colors"
                  >
                    <span className="text-2xl mr-4">📱</span>
                    <div>
                      <div className="font-semibold">WhatsApp Us</div>
                      <div className="text-green-200">Get Instant Response</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Business Hours</h3>
                <div className="space-y-3">
                  {[
                    { day: 'Monday - Saturday', time: '9:00 AM - 8:00 PM' },
                    { day: 'Sunday', time: '10:00 AM - 6:00 PM' },
                    { day: 'Public Holidays', time: 'Available on Call' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                      <span className="text-gray-600">{item.day}</span>
                      <span className="font-semibold text-gray-800">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.99973450298!2d75.65046970844046!3d26.885141064498884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1699000000000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Our Location"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: 'How can I book a tour package?',
                a: 'You can book a tour package by calling us, sending a WhatsApp message, or filling out the contact form above. Our team will get back to you within a few hours.'
              },
              {
                q: 'Do you offer customized tour packages?',
                a: 'Yes, we specialize in creating customized tour packages based on your preferences, budget, and travel dates. Contact us with your requirements.'
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept cash, bank transfers, UPI payments, and all major credit/debit cards. A 20% advance is required for booking confirmation.'
              },
              {
                q: 'Can I modify my booking after confirmation?',
                a: 'Yes, modifications are possible subject to availability. Please contact us at least 48 hours before your scheduled trip for changes.'
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-800 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactUs
