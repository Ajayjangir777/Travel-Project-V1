import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
            <div className="w-14 h-14 mr-3 relative">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <linearGradient id="globeGradF" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00D9FF" />
                    <stop offset="50%" stopColor="#00B4D8" />
                    <stop offset="100%" stopColor="#0077B6" />
                  </linearGradient>
                  <linearGradient id="planeGradF" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFD93D" />
                    <stop offset="100%" stopColor="#FF9500" />
                  </linearGradient>
                  <linearGradient id="trailGradF" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FF6B6B" stopOpacity="0" />
                    <stop offset="100%" stopColor="#FF6B6B" />
                  </linearGradient>
                </defs>
                
                {/* Globe */}
                <circle cx="50" cy="52" r="32" fill="url(#globeGradF)" />
                <ellipse cx="50" cy="52" rx="32" ry="12" fill="none" stroke="#FFF" strokeWidth="1.5" opacity="0.5" />
                <ellipse cx="50" cy="52" rx="15" ry="32" fill="none" stroke="#FFF" strokeWidth="1.5" opacity="0.5" />
                <line x1="18" y1="52" x2="82" y2="52" stroke="#FFF" strokeWidth="1.5" opacity="0.5" />
                
                {/* Continents hint */}
                <ellipse cx="38" cy="45" rx="8" ry="6" fill="#48CAE4" opacity="0.6" />
                <ellipse cx="60" cy="55" rx="10" ry="7" fill="#48CAE4" opacity="0.6" />
                <ellipse cx="45" cy="65" rx="6" ry="4" fill="#48CAE4" opacity="0.6" />
                
                {/* Airplane */}
                <g transform="translate(15, 15) rotate(-25, 35, 35)">
                  <path d="M55 30 L70 25 L72 28 L60 35 L65 45 L62 46 L55 38 L45 42 L44 40 L52 35 L45 30 L46 28 Z" fill="url(#planeGradF)" />
                </g>
                
                {/* Flight trail */}
                <path d="M10 25 Q25 30 35 22" stroke="url(#trailGradF)" strokeWidth="3" fill="none" strokeLinecap="round" strokeDasharray="2 4" />
                
                {/* Sparkles */}
                <circle cx="85" cy="25" r="3" fill="#FFD93D" opacity="0.9" />
                <circle cx="12" cy="70" r="2" fill="#00D9FF" opacity="0.8" />
                <circle cx="88" cy="65" r="2.5" fill="#FF6B6B" opacity="0.8" />
                
                {/* Small stars */}
                <path d="M78 15 L79 18 L82 18 L80 20 L81 23 L78 21 L75 23 L76 20 L74 18 L77 18 Z" fill="#FFF" opacity="0.9" />
                <path d="M92 45 L93 47 L95 47 L93.5 48.5 L94 51 L92 49.5 L90 51 L90.5 48.5 L89 47 L91 47 Z" fill="#FFD93D" opacity="0.8" />
              </svg>
            </div>
              <div>
                <h3 className="text-xl font-bold">Shree Shyam</h3>
                <p className="text-xs text-gray-400">Tour and Travels</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted travel partner for discovering the royal heritage and vibrant culture of Rajasthan.
            </p>
            <div className="flex items-center mb-2">
              <svg className="w-5 h-5 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <a href="tel:+919785560707" className="hover:text-primary">+91 97855 60707</a>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <a href="mailto:info@shreeshyamtravels.com" className="hover:text-primary">info@shreeshyamtravels.com</a>
            </div>
          </div>

          {/* Our Company */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about-us" className="text-gray-400 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="text-gray-400 hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Tours */}
          <div>
            <h4 className="text-lg font-bold mb-6">Tours</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/rajasthan-tours" className="text-gray-400 hover:text-primary transition-colors">
                  Rajasthan Tours
                </Link>
              </li>
              <li>
                <Link to="/golden-triangle-tours" className="text-gray-400 hover:text-primary transition-colors">
                  Golden Triangle Tour
                </Link>
              </li>
              <li>
                <Link to="/wildlife-tours" className="text-gray-400 hover:text-primary transition-colors">
                  Wildlife Tours
                </Link>
              </li>
              <li>
                <Link to="/north-india-tours" className="text-gray-400 hover:text-primary transition-colors">
                  North India Tours
                </Link>
              </li>
              <li>
                <Link to="/jaipur-tours" className="text-gray-400 hover:text-primary transition-colors">
                  Jaipur Tours
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-lg font-bold mb-6">Follow Us</h4>
            <p className="text-gray-400 mb-4">
              Stay connected! Follow us on social media for updates, tips, and exclusive content.
            </p>
            <div className="flex space-x-4">
              {[
                { name: 'Facebook', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
                { name: 'Instagram', icon: 'M16 4H8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V8a4 4 0 00-4-4zm-4 11a3 3 0 110-6 3 3 0 010 6zm3.5-6a1 1 0 110-2 1 1 0 010 2z' },
                { name: 'LinkedIn', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 110 4 2 2 0 010-4z' },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2026 Shree Shyam Tour and Travels. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-primary text-sm">Privacy Policy</Link>
              <Link to="/contact-us" className="text-gray-400 hover:text-primary text-sm">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-50">
        <a
          href="tel:+919785560707"
          className="w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        >
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
        </a>
        <a
          href="https://wa.me/919785560707"
          className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        >
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
      </div>
    </footer>
  )
}

export default Footer
