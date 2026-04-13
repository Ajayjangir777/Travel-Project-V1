import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navItems = [
    { name: "Home", href: "/" },
    {
      name: "Tours",
      href: "/tours",
      hasDropdown: true,
      dropdownItems: [
        { name: "Rajasthan Tours", href: "/rajasthan-tours" },
        { name: "Golden Triangle Tours", href: "/golden-triangle-tours" },
        { name: "Jaipur Tours", href: "/jaipur-tours" },
        { name: "Wildlife Tours", href: "/wildlife-tours" },
        { name: "North India Tours", href: "/north-india-tours" },
      ],
    },
    {
      name: "Outstation Taxi",
      href: "/outstation-taxi",
      hasDropdown: true,
      dropdownItems: [
        { name: "Jaipur to Delhi", href: "/taxi/jaipur-delhi" },
        { name: "Jaipur to Agra", href: "/taxi/jaipur-agra" },
        { name: "Jaipur to Udaipur", href: "/taxi/jaipur-udaipur" },
        { name: "Jaipur to Jodhpur", href: "/taxi/jaipur-jodhpur" },
        { name: "Jaipur to Jaisalmer", href: "/taxi/jaipur-jaisalmer" },
      ],
    },
    { name: "Tempo Traveller", href: "/tempo-traveller" },
    {
      name: "More",
      href: "/",
      hasDropdown: true,
      dropdownItems: [
        { name: "Contact Us", href: "/contact-us" },
        { name: "About Us", href: "/about-us" },
      ],
    },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="w-14 h-14 mr-3 relative">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <linearGradient
                      id="globeGrad"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#00D9FF" />
                      <stop offset="50%" stopColor="#00B4D8" />
                      <stop offset="100%" stopColor="#0077B6" />
                    </linearGradient>
                    <linearGradient
                      id="planeGrad"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#FFD93D" />
                      <stop offset="100%" stopColor="#FF9500" />
                    </linearGradient>
                    <linearGradient
                      id="trailGrad"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#FF6B6B" stopOpacity="0" />
                      <stop offset="100%" stopColor="#FF6B6B" />
                    </linearGradient>
                  </defs>

                  {/* Globe */}
                  <circle cx="50" cy="52" r="32" fill="url(#globeGrad)" />
                  <ellipse
                    cx="50"
                    cy="52"
                    rx="32"
                    ry="12"
                    fill="none"
                    stroke="#FFF"
                    strokeWidth="1.5"
                    opacity="0.5"
                  />
                  <ellipse
                    cx="50"
                    cy="52"
                    rx="15"
                    ry="32"
                    fill="none"
                    stroke="#FFF"
                    strokeWidth="1.5"
                    opacity="0.5"
                  />
                  <line
                    x1="18"
                    y1="52"
                    x2="82"
                    y2="52"
                    stroke="#FFF"
                    strokeWidth="1.5"
                    opacity="0.5"
                  />

                  {/* Continents hint */}
                  <ellipse
                    cx="38"
                    cy="45"
                    rx="8"
                    ry="6"
                    fill="#48CAE4"
                    opacity="0.6"
                  />
                  <ellipse
                    cx="60"
                    cy="55"
                    rx="10"
                    ry="7"
                    fill="#48CAE4"
                    opacity="0.6"
                  />
                  <ellipse
                    cx="45"
                    cy="65"
                    rx="6"
                    ry="4"
                    fill="#48CAE4"
                    opacity="0.6"
                  />

                  {/* Airplane */}
                  <g transform="translate(15, 15) rotate(-25, 35, 35)">
                    <path
                      d="M55 30 L70 25 L72 28 L60 35 L65 45 L62 46 L55 38 L45 42 L44 40 L52 35 L45 30 L46 28 Z"
                      fill="url(#planeGrad)"
                    />
                  </g>

                  {/* Flight trail */}
                  <path
                    d="M10 25 Q25 30 35 22"
                    stroke="url(#trailGrad)"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray="2 4"
                  />

                  {/* Sparkles */}
                  <circle cx="85" cy="25" r="3" fill="#FFD93D" opacity="0.9" />
                  <circle cx="12" cy="70" r="2" fill="#00D9FF" opacity="0.8" />
                  <circle
                    cx="88"
                    cy="65"
                    r="2.5"
                    fill="#FF6B6B"
                    opacity="0.8"
                  />

                  {/* Small stars */}
                  <path
                    d="M78 15 L79 18 L82 18 L80 20 L81 23 L78 21 L75 23 L76 20 L74 18 L77 18 Z"
                    fill="#FFF"
                    opacity="0.9"
                  />
                  <path
                    d="M92 45 L93 47 L95 47 L93.5 48.5 L94 51 L92 49.5 L90 51 L90.5 48.5 L89 47 L91 47 Z"
                    fill="#FFD93D"
                    opacity="0.8"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">Shree Shyam</h1>
                <p className="text-xs text-gray-500">Tour and Travels</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() =>
                  item.hasDropdown && setOpenDropdown(item.name)
                }
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={item.href}
                  className="text-gray-700 hover:text-primary font-medium transition-colors flex items-center py-2"
                >
                  {item.name}
                  {item.hasDropdown && (
                    <svg
                      className={`w-4 h-4 ml-1 transition-transform ${openDropdown === item.name ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.hasDropdown &&
                  item.dropdownItems &&
                  openDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-0 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                      {item.dropdownItems.map((dropItem) => (
                        <Link
                          key={dropItem.name}
                          to={dropItem.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-primary hover:text-white transition-colors"
                        >
                          {dropItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
              </div>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+919785560707"
              className="flex items-center text-primary font-semibold"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              +91 97855 60707
            </a>
            <a
              href="https://wa.me/919785560707"
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === item.name ? null : item.name,
                        )
                      }
                      className="w-full flex items-center justify-between py-2 text-gray-700 hover:text-primary font-medium"
                    >
                      {item.name}
                      <svg
                        className={`w-4 h-4 transition-transform ${openDropdown === item.name ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {openDropdown === item.name && item.dropdownItems && (
                      <div className="pl-4 border-l-2 border-primary ml-2">
                        {item.dropdownItems.map((dropItem) => (
                          <Link
                            key={dropItem.name}
                            to={dropItem.href}
                            className="block py-2 text-gray-600 hover:text-primary text-sm"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {dropItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="block py-2 text-gray-700 hover:text-primary font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <a
              href="tel:+919785560707"
              className="block py-2 text-primary font-semibold"
            >
              +91 97855 60707
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
