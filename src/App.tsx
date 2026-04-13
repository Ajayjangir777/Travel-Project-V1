import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import TourSection from './components/TourSection'
import BestSelling from './components/BestSelling'
import BlogSection from './components/BlogSection'
import Testimonials from './components/Testimonials'
import Partners from './components/Partners'
import Footer from './components/Footer'
import TaxiPage from './components/TaxiPage'
import ToursPage from './components/ToursPage'
import TourDetailPage from './components/TourDetailPage'
import TempoTravellerPage from './components/TempoTravellerPage'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import PrivacyPolicy from './components/PrivacyPolicy'

import tour2days from "./assets/jaipur-2days-tour.png";
import goldenTourVaranasi from "./assets/golden-tour-varanasi.png";

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation()
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  
  return null
}

// Home Page Component
const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <TourSection 
        title="Rajasthan Tours" 
        viewAllLink="/rajasthan-tours"
        tours={rajasthanTours}
      />
      <TourSection 
        title="Golden Triangle Tour Packages" 
        viewAllLink="/golden-triangle-tours"
        tours={goldenTriangleTours}
        bgColor="bg-gray-50"
      />
      <TourSection 
        title="Jaipur Tours" 
        viewAllLink="/jaipur-tours"
        tours={jaipurTours}
      />
      <BestSelling />
      {/* <BlogSection /> */}
      <Testimonials />
      <Partners />
    </>
  )
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tours" element={<ToursPage />} />
          <Route path="/tour/:id" element={<TourDetailPage />} />
          <Route path="/rajasthan-tours" element={<ToursPage category="Rajasthan Tours" />} />
          <Route path="/golden-triangle-tours" element={<ToursPage category="Golden Triangle Tours" />} />
          <Route path="/jaipur-tours" element={<ToursPage category="Jaipur Tours" />} />
          <Route path="/wildlife-tours" element={<ToursPage category="Wildlife Tours" />} />
          <Route path="/north-india-tours" element={<ToursPage category="North India Tours" />} />
          <Route path="/temple-tours" element={<ToursPage category="Temple Tours" />} />
          <Route path="/hill-station-tours" element={<ToursPage category="Hill Station Tours" />} />
          <Route path="/tempo-traveller" element={<TempoTravellerPage />} />
          <Route path="/outstation-taxi" element={<TaxiPage />} />
          <Route path="/taxi/:route" element={<TaxiPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

const rajasthanTours = [
  {
    id: 1,
    title: "3 Nights 4 Days Rajasthan Tour Package",
    duration: "4 days",
    rating: "4.8/5",
    reviews: "2.6k",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=400&h=300&fit=crop",
    featured: false
  },
  {
    id: 2,
    title: "Jaipur And Ranthambore Safari Tour",
    duration: "5 days",
    rating: "4.8/5",
    reviews: "2.6k",
    image: tour2days,
    featured: false
  },
  {
    id: 3,
    title: "Historical Rajasthan Tour 13 Days",
    duration: "13 days",
    rating: "4.8/5",
    reviews: "2.6k",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=400&h=300&fit=crop",
    featured: true
  },
  {
    id: 4,
    title: "Rajasthan Cultural Tour Package 11 Days",
    duration: "11 days",
    rating: "4.8/5",
    reviews: "2.6k",
    image: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?w=400&h=300&fit=crop",
    featured: true
  },
  {
    id: 5,
    title: "Rajasthan Desert Tour Package 7 Days",
    duration: "7 days",
    rating: "4.8/5",
    reviews: "2.6k",
    image: "https://images.unsplash.com/photo-1445991842772-097fea258e7b?w=400&h=300&fit=crop",
    featured: false
  },
  {
    id: 6,
    title: "Majestic Rajasthan Trails | Forts & Palaces",
    duration: "4 days",
    rating: "4.8/5",
    reviews: "2.6k",
    image: "https://images.unsplash.com/photo-1587135941948-670b381f08ce?w=400&h=300&fit=crop",
    featured: false
  }
]

const goldenTriangleTours = [
  {
    id: 1,
    title: "Golden Triangle Tour with Varanasi",
    duration: "7 days",
    rating: "4.8/5",
    reviews: "2.6k",
    image: goldenTourVaranasi,
    featured: false
  },
  {
    id: 2,
    title: "Golden Triangle Tour With Khajuraho",
    duration: "9 days",
    rating: "4.8/5",
    reviews: "2.6k",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=400&h=300&fit=crop",
    featured: false
  },
  {
    id: 3,
    title: "Golden Triangle Tour With Pushkar",
    duration: "9 days",
    rating: "4.8/5",
    reviews: "2.6k",
    image: "https://images.unsplash.com/photo-1515091943-9d5c0ad475af?w=400&h=300&fit=crop",
    featured: true
  },
  {
    id: 4,
    title: "Golden Triangle Tour with Ranthambore",
    duration: "8 days",
    rating: "4.8/5",
    reviews: "2.6k",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400&h=300&fit=crop",
    featured: false
  }
]

const jaipurTours = [
  {
    id: 1,
    title: "Jaipur 1 Day Tour Package",
    duration: "1 day",
    rating: "4.8/5",
    reviews: "2.6k",
    image: "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?w=400&h=300&fit=crop",
    featured: false
  },
  {
    id: 2,
    title: "Jaipur Tour Package for 2 Days",
    duration: "2 days",
    rating: "4.8/5",
    reviews: "2.6k",
    image: tour2days,
    featured: false
  },
  {
    id: 3,
    title: "4 Days Jaipur Tour Package From Delhi",
    duration: "4 days",
    rating: "4.8/5",
    reviews: "2.6k",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=400&h=300&fit=crop",
    featured: false
  },
  {
    id: 4,
    title: "Jaipur to Ajmer Pushkar Tour",
    duration: "1 day",
    rating: "4.8/5",
    reviews: "2.6k",
    image: "https://images.unsplash.com/photo-1518623001395-125242310d0c?w=400&h=300&fit=crop",
    featured: true
  }
]

export default App
