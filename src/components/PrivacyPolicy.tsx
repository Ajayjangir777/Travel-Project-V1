import { Link } from 'react-router-dom'

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-secondary via-blue-900 to-secondary text-white py-20">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <nav className="text-sm mb-4">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-primary">Privacy Policy</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg md:text-xl text-gray-200">
            Last updated: April 2026
          </p>
        </div>
      </div>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-xl p-8 md:p-12 shadow-lg">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Introduction</h2>
              <p className="text-gray-600 mb-6">
                Welcome to Shree Shyam Tour and Travels. We are committed to protecting your personal 
                information and your right to privacy. This Privacy Policy explains how we collect, 
                use, disclose, and safeguard your information when you visit our website or use our services.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">Information We Collect</h2>
              <p className="text-gray-600 mb-4">We collect information that you provide directly to us, including:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Personal identification information (name, email address, phone number)</li>
                <li>Travel preferences and requirements</li>
                <li>Booking and payment information</li>
                <li>Feedback and correspondence</li>
                <li>Any other information you choose to provide</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">We use the information we collect for various purposes:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>To process and manage your bookings</li>
                <li>To communicate with you about your travel arrangements</li>
                <li>To send you promotional offers and updates (with your consent)</li>
                <li>To improve our services and customer experience</li>
                <li>To comply with legal obligations</li>
                <li>To prevent fraudulent activities</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">Information Sharing</h2>
              <p className="text-gray-600 mb-6">
                We do not sell, trade, or otherwise transfer your personal information to outside parties 
                except as described below:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li><strong>Service Providers:</strong> We may share information with hotels, transport providers, and other partners necessary to fulfill your booking.</li>
                <li><strong>Legal Requirements:</strong> We may disclose information if required by law or in response to valid legal requests.</li>
                <li><strong>Business Transfers:</strong> In the event of a merger or acquisition, your information may be transferred to the new entity.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">Data Security</h2>
              <p className="text-gray-600 mb-6">
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. However, no method of 
                transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">Cookies and Tracking</h2>
              <p className="text-gray-600 mb-6">
                Our website may use cookies and similar tracking technologies to enhance your browsing 
                experience, analyze site traffic, and understand where our visitors come from. You can 
                choose to disable cookies through your browser settings.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Rights</h2>
              <p className="text-gray-600 mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent at any time</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">Third-Party Links</h2>
              <p className="text-gray-600 mb-6">
                Our website may contain links to third-party websites. We are not responsible for the 
                privacy practices of these external sites. We encourage you to read the privacy policies 
                of any third-party sites you visit.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">Children's Privacy</h2>
              <p className="text-gray-600 mb-6">
                Our services are not directed to individuals under the age of 18. We do not knowingly 
                collect personal information from children. If we become aware that we have collected 
                information from a child, we will take steps to delete it.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">Changes to This Policy</h2>
              <p className="text-gray-600 mb-6">
                We may update this Privacy Policy from time to time. We will notify you of any changes 
                by posting the new policy on this page and updating the "Last updated" date. We encourage 
                you to review this policy periodically.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <p className="text-gray-700 mb-2"><strong>Shree Shyam Tour and Travels</strong></p>
                <p className="text-gray-600 mb-1">📍 Jaipur, Rajasthan, India</p>
                <p className="text-gray-600 mb-1">📞 <a href="tel:+919785560707" className="text-primary hover:underline">+91 97855 60707</a></p>
                <p className="text-gray-600">✉️ <a href="mailto:shreeshyamtravelsjaipur8@gmail.com" className="text-primary hover:underline">shreeshyamtravelsjaipur8@gmail.com</a></p>
              </div>

              <div className="border-t border-gray-200 pt-6 mt-8">
                <p className="text-gray-500 text-sm">
                  By using our website and services, you consent to the terms of this Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Have Questions?</h2>
          <p className="text-gray-300 mb-6">Feel free to reach out to us for any privacy-related concerns</p>
          <Link
            to="/contact-us"
            className="inline-block bg-primary hover:bg-primary/90 px-8 py-3 rounded-lg font-bold transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}

export default PrivacyPolicy
