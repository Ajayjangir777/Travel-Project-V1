import { useParams, Link } from "react-router-dom";
import { useState } from "react";

import swiftImg from "../assets/swift.png";
import etiousImg from "../assets/toyota.png";
import ciazImg from "../assets/ciaz.png";
import ertigaImg from "../assets/ertiga.png";
import kiaImg from "../assets/kia.png";
import crystaImg from "../assets/crysta.png";
import tempoImg from "../assets/tempo.png";

interface TaxiOption {
  id: number;
  name: string;
  category: string;
  perKm: number;
  nightCharge: number;
  capacity: string;
  image: string;
  features: string[];
}

interface RouteInfo {
  from: string;
  to: string;
  distance: string;
  duration: string;
  description: string;
  attractions: string[];
}

const taxiFleet: TaxiOption[] = [
  {
    id: 1,
    name: "Swift Dzire",
    category: "Sedan",
    perKm: 11,
    nightCharge: 300,
    capacity: "4+1",
    image: swiftImg,
    features: ["AC", "Music System", "Comfortable Seats", "Luggage Space"],
  },
  {
    id: 2,
    name: "Toyota Etios",
    category: "Sedan",
    perKm: 11,
    nightCharge: 300,
    capacity: "4+1",
    image: etiousImg,
    features: ["AC", "Power Windows", "Central Locking", "USB Charging"],
  },
  {
    id: 3,
    name: "Maruti Ciaz",
    category: "Sedan",
    perKm: 12,
    nightCharge: 300,
    capacity: "4+1",
    image: ciazImg,
    features: ["AC", "Leather Seats", "Music System", "Extra Legroom"],
  },
  {
    id: 4,
    name: "Maruti Ertiga",
    category: "SUV",
    perKm: 14,
    nightCharge: 300,
    capacity: "6+1",
    image: ertigaImg,
    features: ["AC", "7 Seater", "Power Steering", "Large Boot Space"],
  },
  {
    id: 5,
    name: "Kia Carens",
    category: "SUV",
    perKm: 15,
    nightCharge: 300,
    capacity: "6+1",
    image: kiaImg,
    features: ["AC", "Sunroof", "Premium Interior", "Advanced Safety"],
  },
  {
    id: 6,
    name: "Toyota Innova Crysta",
    category: "SUV",
    perKm: 18,
    nightCharge: 350,
    capacity: "6+1",
    image: crystaImg,
    features: ["AC", "Captain Seats", "Premium Audio", "Spacious Interior"],
  },
  {
    id: 7,
    name: "Tempo Traveller",
    category: "Tempo",
    perKm: 28,
    nightCharge: 550,
    capacity: "12-20",
    image: tempoImg,
    features: ["AC", "Push Back Seats", "LCD TV", "Ice Box"],
  },
];

const routeData: Record<string, RouteInfo> = {
  "jaipur-delhi": {
    from: "Jaipur",
    to: "Delhi",
    distance: "280 km",
    duration: "5-6 hours",
    description:
      "Travel comfortably from the Pink City to the Capital of India. The route takes you through the scenic NH48 highway with excellent road conditions.",
    attractions: [
      "Neemrana Fort Palace",
      "Vrindavan",
      "Kingdom of Dreams Gurgaon",
    ],
  },
  "jaipur-agra": {
    from: "Jaipur",
    to: "Agra",
    distance: "238 km",
    duration: "4-5 hours",
    description:
      "Experience the journey from the Pink City to the city of Taj Mahal. The route passes through beautiful Rajasthani landscapes and historic sites.",
    attractions: [
      "Abhaneri Stepwell (Chand Baori)",
      "Bharatpur Bird Sanctuary",
      "Fatehpur Sikri",
      "Taj Mahal",
      "Agra Fort",
    ],
  },
  "jaipur-udaipur": {
    from: "Jaipur",
    to: "Udaipur",
    distance: "395 km",
    duration: "6-7 hours",
    description:
      "Journey from the Pink City to the City of Lakes. Enjoy the beautiful Aravalli hills and traditional Rajasthani villages along the way.",
    attractions: [
      "Chittorgarh Fort",
      "Pushkar Temple",
      "Ajmer Dargah",
      "Nathdwara Temple",
    ],
  },
  "jaipur-jodhpur": {
    from: "Jaipur",
    to: "Jodhpur",
    distance: "335 km",
    duration: "5-6 hours",
    description:
      "Travel from the Pink City to the Blue City. The route showcases the transition from urban Rajasthan to the Thar Desert region.",
    attractions: [
      "Ajmer Sharif Dargah",
      "Pushkar Lake",
      "Kishangarh Fort",
      "Mehrangarh Fort",
    ],
  },
  "jaipur-jaisalmer": {
    from: "Jaipur",
    to: "Jaisalmer",
    distance: "560 km",
    duration: "8-9 hours",
    description:
      "Embark on an epic journey from the Pink City to the Golden City in the heart of the Thar Desert. Experience the changing landscapes of Rajasthan.",
    attractions: [
      "Jodhpur",
      "Osiyan Temples",
      "Pokaran Fort",
      "Jaisalmer Fort",
      "Sam Sand Dunes",
    ],
  },
};

const TaxiPage = () => {
  const { route } = useParams<{ route: string }>();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [selectedTaxi, setSelectedTaxi] = useState<TaxiOption | null>(null);

  const routeInfo = route ? routeData[route] : null;

  // Show general outstation taxi page when no specific route
  if (!route) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-secondary via-blue-900 to-secondary text-white py-20">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="container mx-auto px-4 relative z-10">
            <nav className="text-sm mb-4">
              <Link to="/" className="hover:text-primary">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-primary">Outstation Taxi</span>
            </nav>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Outstation Taxi Services
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              Comfortable Cab & Car Rental for Outstation Travel from Jaipur
            </p>
          </div>
        </div>

        {/* Quick Contact */}
        <div className="bg-primary py-3">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-4 text-white">
            <a href="tel:+919785560707" className="flex items-center">
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
              href="https://wa.me/919785560707?text=Hi, I need a taxi booking"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg font-semibold"
            >
              📱 WhatsApp Booking
            </a>
          </div>
        </div>

        {/* Popular Routes */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-4">
              Popular Outstation Routes from Jaipur
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Choose from our most popular outstation taxi routes with
              transparent pricing and professional drivers
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(routeData).map(([routeKey, info]) => (
                <Link
                  key={routeKey}
                  to={`/taxi/${routeKey}`}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden group"
                >
                  <div className="relative h-40 bg-gradient-to-br from-secondary to-blue-900">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="text-3xl mb-2">🚕</div>
                        <div className="text-xl font-bold">
                          {info.from} → {info.to}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-primary font-semibold">
                        {info.distance}
                      </span>
                      <span className="text-gray-500">{info.duration}</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {info.description}
                    </p>
                    <div className="flex items-center text-primary font-semibold group-hover:underline">
                      View Details & Book
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Our Fleet */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-4">
              Our Taxi Fleet
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Well-maintained vehicles with experienced drivers for your
              comfortable journey
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {taxiFleet
                .filter((t) => t.category !== "Tempo")
                .map((taxi) => (
                  <div
                    key={taxi.id}
                    className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-lg transition-all"
                  >
                    <div className="text-4xl mb-4 text-center">🚗</div>
                    <h3 className="text-lg font-bold text-gray-800 text-center mb-2">
                      {taxi.name}
                    </h3>
                    <p className="text-primary font-semibold text-center mb-2">
                      ₹{taxi.perKm}/km
                    </p>
                    <p className="text-gray-500 text-center text-sm mb-3">
                      {taxi.capacity} Seater
                    </p>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {taxi.features.slice(0, 3).map((feature, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-gray-200 px-2 py-1 rounded"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-12">
              Why Choose Our Taxi Services
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: "✅",
                  title: "Transparent Pricing",
                  desc: "No hidden charges, pay what you see",
                },
                {
                  icon: "👨‍✈️",
                  title: "Professional Drivers",
                  desc: "Experienced and verified drivers",
                },
                {
                  icon: "🚗",
                  title: "Clean Vehicles",
                  desc: "Well-maintained and sanitized cars",
                },
                {
                  icon: "📍",
                  title: "GPS Tracking",
                  desc: "Real-time location tracking available",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-6 text-center shadow"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-secondary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Book Your Taxi?
            </h2>
            <p className="text-gray-300 mb-8">
              Contact us now for the best rates and instant booking
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919785560707"
                className="bg-white text-secondary px-8 py-3 rounded-lg font-bold hover:bg-gray-100"
              >
                📞 Call Now
              </a>
              <a
                href="https://wa.me/919785560707?text=Hi, I need an outstation taxi booking"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-lg font-bold"
              >
                📱 WhatsApp
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (!routeInfo) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Route Not Found
          </h1>
          <Link to="/outstation-taxi" className="text-primary hover:underline">
            View All Routes
          </Link>
        </div>
      </div>
    );
  }

  const filteredTaxis =
    selectedCategory === "all"
      ? taxiFleet
      : taxiFleet.filter(
          (taxi) =>
            taxi.category.toLowerCase() === selectedCategory.toLowerCase(),
        );

  const calculateFare = (perKm: number) => {
    const distance = parseInt(routeInfo.distance);
    return perKm * distance;
  };

  const handleBookNow = (taxi: TaxiOption) => {
    setSelectedTaxi(taxi);
    setShowEnquiryForm(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-secondary via-blue-900 to-secondary text-white py-20">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <nav className="text-sm mb-4">
            <Link to="/" className="hover:text-primary">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-primary">Taxi</span>
            <span className="mx-2">/</span>
            <span>
              {routeInfo.from} to {routeInfo.to}
            </span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {routeInfo.from} to {routeInfo.to} Taxi Service
          </h1>
          <p className="text-xl text-gray-200 mb-6">
            Comfortable Cab & Car Rental | Book Taxi at Best Price
          </p>
          <div className="flex flex-wrap gap-6 text-lg">
            <div className="flex items-center">
              <svg
                className="w-6 h-6 mr-2 text-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              Distance: {routeInfo.distance}
            </div>
            <div className="flex items-center">
              <svg
                className="w-6 h-6 mr-2 text-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
              Duration: {routeInfo.duration}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Price Table */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="bg-primary text-secondary px-3 py-1 rounded mr-3 text-sm">
                  BEST PRICE
                </span>
                {routeInfo.from} to {routeInfo.to} Taxi Price
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-primary to-yellow-500 text-secondary">
                      <th className="px-4 py-3 text-left rounded-tl-lg">
                        Vehicle
                      </th>
                      <th className="px-4 py-3 text-center">Per Km</th>
                      <th className="px-4 py-3 text-center">Night Charge</th>
                      <th className="px-4 py-3 text-center">Capacity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {taxiFleet.map((taxi, index) => (
                      <tr
                        key={taxi.id}
                        className={`border-b ${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-blue-50 transition-colors`}
                      >
                        <td className="px-4 py-4">
                          <div className="font-semibold text-gray-800">
                            {taxi.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            ({taxi.category})
                          </div>
                        </td>
                        <td className="px-4 py-4 text-center">
                          <span className="text-green-600 font-bold">
                            ₹{taxi.perKm}/-
                          </span>
                        </td>
                        <td className="px-4 py-4 text-center text-gray-700">
                          ₹{taxi.nightCharge}/-
                        </td>
                        <td className="px-4 py-4 text-center text-gray-700">
                          {taxi.capacity}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                * Toll tax, parking, and state permit charges are extra
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-3 mb-8">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${selectedCategory === "all" ? "bg-primary text-secondary" : "bg-white text-gray-700 hover:bg-gray-100"}`}
              >
                All Vehicles
              </button>
              <button
                onClick={() => setSelectedCategory("sedan")}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${selectedCategory === "sedan" ? "bg-primary text-secondary" : "bg-white text-gray-700 hover:bg-gray-100"}`}
              >
                Sedan
              </button>
              <button
                onClick={() => setSelectedCategory("suv")}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${selectedCategory === "suv" ? "bg-primary text-secondary" : "bg-white text-gray-700 hover:bg-gray-100"}`}
              >
                SUV
              </button>
              <button
                onClick={() => setSelectedCategory("tempo")}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${selectedCategory === "tempo" ? "bg-primary text-secondary" : "bg-white text-gray-700 hover:bg-gray-100"}`}
              >
                Tempo Traveller
              </button>
            </div>

            {/* Taxi Fleet Cards */}
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Hire Taxi From Our Fleet
              <span className="ml-3 bg-red-500 text-white text-sm px-3 py-1 rounded-full animate-pulse">
                Get upto 10% off
              </span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {filteredTaxis.map((taxi) => (
                <div
                  key={taxi.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
                >
                  <div className="relative">
                    <img
                      src={taxi.image}
                      alt={taxi.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-3 left-3 bg-primary text-secondary px-3 py-1 rounded-full text-sm font-semibold">
                      {taxi.category}
                    </span>
                    <span className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      10% OFF
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {taxi.name}
                    </h3>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-xs text-gray-500">Per Km Charge</p>
                        <p className="text-lg font-bold text-green-600">
                          ₹{taxi.perKm}
                        </p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-xs text-gray-500">Seating</p>
                        <p className="text-lg font-bold text-gray-800">
                          {taxi.capacity}
                        </p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-xs text-gray-500">Night Charge</p>
                        <p className="text-lg font-bold text-gray-800">
                          ₹{taxi.nightCharge}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {taxi.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <a
                        href="tel:+919785560707"
                        className="flex-1 bg-green-500 text-white font-semibold py-3 rounded-lg hover:bg-green-600 transition-colors text-center"
                      >
                        Call Now
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Route Information */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {routeInfo.from} to {routeInfo.to} Distance & Travel Time
              </h2>
              <p className="text-gray-600 mb-6">{routeInfo.description}</p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                  <div className="bg-blue-500 text-white p-3 rounded-full mr-4">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Total Distance</p>
                    <p className="text-xl font-bold text-gray-800">
                      {routeInfo.distance}
                    </p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-green-50 rounded-lg">
                  <div className="bg-green-500 text-white p-3 rounded-full mr-4">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Travel Time</p>
                    <p className="text-xl font-bold text-gray-800">
                      {routeInfo.duration}
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Attractions Along the Way
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {routeInfo.attractions.map((attraction, idx) => (
                  <div
                    key={idx}
                    className="flex items-center p-3 bg-gray-50 rounded-lg"
                  >
                    <svg
                      className="w-5 h-5 text-primary mr-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{attraction}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient-to-r from-secondary to-blue-900 text-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6">
                Why Choose Shree Shyam Tour and Travels?
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: "🚗", text: "Experienced & Professional Drivers" },
                  { icon: "✨", text: "Sanitized & Clean Vehicles" },
                  { icon: "💰", text: "Affordable Taxi Fares" },
                  { icon: "📞", text: "24/7 Customer Support" },
                  { icon: "⏰", text: "On-time Pickup & Drop" },
                  { icon: "📱", text: "Easy Booking Process" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center bg-white/10 p-4 rounded-lg"
                  >
                    <span className="text-2xl mr-3">{item.icon}</span>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Enquiry Form */}
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <div className="bg-gradient-to-r from-primary to-yellow-500 text-secondary text-center py-3 rounded-t-xl -mx-6 -mt-6 mb-6">
                <span className="font-bold text-lg">Get upto 10% Discount</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Enquire Now!
              </h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Name *"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email *"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Mobile Number *"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <input
                    type="date"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                    <option value="">Select Vehicle Type</option>
                    <option value="sedan">Sedan</option>
                    <option value="suv">SUV</option>
                    <option value="tempo">Tempo Traveller</option>
                  </select>
                </div>
                <div>
                  <input
                    type="number"
                    placeholder="No. of Passengers"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Message"
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-secondary font-bold py-3 rounded-lg hover:bg-yellow-500 transition-colors"
                >
                  SUBMIT INQUIRY
                </button>
              </form>

              {/* Quick Contact */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-gray-600 text-center mb-4">
                  Or call us directly
                </p>
                <a
                  href="tel:+919785560707"
                  className="flex items-center justify-center bg-green-500 text-white font-semibold py-3 rounded-lg hover:bg-green-600 transition-colors"
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
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition-colors mt-3"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {showEnquiryForm && selectedTaxi && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="bg-gradient-to-r from-primary to-yellow-500 text-secondary p-4 rounded-t-xl flex justify-between items-center">
              <h3 className="font-bold text-lg">Book {selectedTaxi.name}</h3>
              <button
                onClick={() => setShowEnquiryForm(false)}
                className="text-2xl"
              >
                &times;
              </button>
            </div>
            <div className="p-6">
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <p className="text-sm text-gray-500">Route</p>
                <p className="font-bold text-gray-800">
                  {routeInfo.from} → {routeInfo.to}
                </p>
                <p className="text-sm text-gray-500 mt-2">Estimated Fare</p>
                <p className="font-bold text-2xl text-primary">
                  ₹{calculateFare(selectedTaxi.perKm).toLocaleString()}
                </p>
              </div>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name *"
                  className="w-full px-4 py-3 border rounded-lg"
                  required
                />
                <input
                  type="tel"
                  placeholder="Mobile Number *"
                  className="w-full px-4 py-3 border rounded-lg"
                  required
                />
                <input
                  type="date"
                  className="w-full px-4 py-3 border rounded-lg"
                  required
                />
                <input
                  type="time"
                  className="w-full px-4 py-3 border rounded-lg"
                />
                <textarea
                  placeholder="Pickup Address"
                  rows={2}
                  className="w-full px-4 py-3 border rounded-lg"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-primary text-secondary font-bold py-3 rounded-lg hover:bg-yellow-500"
                >
                  Confirm Booking
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaxiPage;
