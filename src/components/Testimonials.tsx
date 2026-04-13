import { useState, useEffect } from 'react'

interface Review {
  id: number
  name: string
  location: string
  title: string
  text: string
  rating: number
  date: string
  isUserReview?: boolean
}

const defaultTestimonials: Review[] = [
  {
    id: 1,
    name: "Meera Joshi",
    location: "Pune",
    title: "Perfectly Planned!",
    text: "Our tour was perfectly planned and executed. We had an amazing time exploring new places and cultures with reliable transportation.",
    rating: 5,
    date: "2024-01-15"
  },
  {
    id: 2,
    name: "John Smith",
    location: "USA",
    title: "Amazing Rajasthan Tour!",
    text: "Our tour of Rajasthan was a dream come true! The guides were knowledgeable, and the services were punctual and comfortable.",
    rating: 5,
    date: "2024-02-10"
  },
  {
    id: 3,
    name: "Emily Brown",
    location: "UK",
    title: "Unforgettable India Experience!",
    text: "I had the most amazing time in India! The tour was well-organized, and everything was clean and on time.",
    rating: 5,
    date: "2024-02-25"
  },
  {
    id: 4,
    name: "Lucas Johnson",
    location: "Australia",
    title: "Incredible Indian Adventure!",
    text: "From the moment we landed, everything was seamless. The sights, sounds, and services were incredible!",
    rating: 5,
    date: "2024-03-05"
  },
  {
    id: 5,
    name: "Sofia Rodriguez",
    location: "Spain",
    title: "True Cultural Immersion!",
    text: "The cultural immersion was beyond my expectations. The tour ensured a hassle-free experience throughout.",
    rating: 5,
    date: "2024-03-18"
  },
  {
    id: 6,
    name: "Amit Sharma",
    location: "Mumbai",
    title: "Fantastic Domestic Tour!",
    text: "Exploring our own country with this tour company was fantastic. The itinerary and services were exceptional.",
    rating: 5,
    date: "2024-04-01"
  },
]

const Testimonials = () => {
  const [showForm, setShowForm] = useState(false)
  const [userReviews, setUserReviews] = useState<Review[]>([])
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    title: '',
    text: '',
    rating: 5
  })
  const [submitSuccess, setSubmitSuccess] = useState(false)

  // Load reviews from localStorage on mount
  useEffect(() => {
    const savedReviews = localStorage.getItem('userReviews')
    if (savedReviews) {
      setUserReviews(JSON.parse(savedReviews))
    }
  }, [])

  // Save reviews to localStorage whenever they change
  const saveReviews = (reviews: Review[]) => {
    localStorage.setItem('userReviews', JSON.stringify(reviews))
    setUserReviews(reviews)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const newReview: Review = {
      id: Date.now(),
      ...formData,
      date: new Date().toISOString().split('T')[0],
      isUserReview: true
    }

    const updatedReviews = [newReview, ...userReviews]
    saveReviews(updatedReviews)
    
    // Reset form
    setFormData({ name: '', location: '', title: '', text: '', rating: 5 })
    setSubmitSuccess(true)
    setTimeout(() => {
      setSubmitSuccess(false)
      setShowForm(false)
    }, 2000)
  }

  const handleDelete = (id: number) => {
    const updatedReviews = userReviews.filter(review => review.id !== id)
    saveReviews(updatedReviews)
  }

  const allReviews = [...userReviews, ...defaultTestimonials]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Travelers Love Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Read what our satisfied customers have to say about their experiences
          </p>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-primary hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Write a Review
          </button>
        </div>

        {/* Review Form */}
        {showForm && (
          <div className="max-w-2xl mx-auto mb-12 bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Share Your Experience</h3>
            
            {submitSuccess ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-green-600 font-semibold text-lg">Thank you for your review!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Location *</label>
                    <input
                      type="text"
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="City, Country"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Review Title *</label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Amazing experience!"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Rating *</label>
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setFormData({ ...formData, rating: star })}
                        className="focus:outline-none"
                      >
                        <svg
                          className={`w-8 h-8 ${star <= formData.rating ? 'text-yellow-400' : 'text-gray-300'} hover:text-yellow-400 transition-colors`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your Review *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.text}
                    onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Share your experience with us..."
                  />
                </div>

                <div className="flex space-x-4">
                  <button
                    type="submit"
                    className="bg-primary hover:bg-yellow-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                  >
                    Submit Review
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-lg font-semibold transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allReviews.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow relative ${testimonial.isUserReview ? 'ring-2 ring-primary' : ''}`}
            >
              {/* User Review Badge & Delete */}
              {testimonial.isUserReview && (
                <>
                  <span className="absolute top-3 left-3 bg-primary text-white text-xs px-2 py-1 rounded-full">
                    Your Review
                  </span>
                  <button
                    onClick={() => handleDelete(testimonial.id)}
                    className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition-colors"
                    title="Delete review"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </>
              )}

              {/* Rating Stars */}
              <div className={`flex mb-4 ${testimonial.isUserReview ? 'mt-6' : ''}`}>
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Title */}
              <h3 className="font-bold text-gray-800 mb-3">{testimonial.title}</h3>

              {/* Text */}
              <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary to-yellow-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-xs text-gray-400">{testimonial.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
