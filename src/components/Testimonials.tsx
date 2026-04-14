import { useState, useEffect } from "react";

interface Review {
  id: number;
  Name: string;
  Location: string;
  Title: string;
  Rating: number;
  Review: string;
  Date: string;
  isDefault?: boolean;
}

const SHEET_URL =
  "https://script.google.com/macros/s/AKfycbytB8MNr4ohlEOrQ1B5O8aEuh9lt_bQU915Hu6ATvZXtdj6IudjJpPJeHyOTsJlWlbB2Q/exec";

const Testimonials = () => {
  const [showForm, setShowForm] = useState(false);
  const [sheetReviews, setSheetReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    title: "",
    review: "",
    rating: 5,
  });

  // Fetch reviews from Google Sheets on mount
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch(SHEET_URL);
        const data = await res.json();
        // Assign a unique id to each sheet review
        // const formatted = data.map((r: Review, i: number) => ({ ...r, id: i + 1000 }))
        const formatted = data.map((r: any, i: number) => {
          // Trim all keys to remove trailing spaces from sheet headers
          const trimmed: any = {};
          Object.keys(r).forEach((key) => {
            trimmed[key.trim()] =
              typeof r[key] === "string" ? r[key].trim() : r[key];
          });
          return { ...trimmed, id: i + 1000 };
        });
        setSheetReviews(formatted);
      } catch (err) {
        console.error("Failed to fetch reviews:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);

    try {
      await fetch(SHEET_URL, {
        method: "POST",
        mode: "no-cors", // Required for Google Apps Script
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          location: formData.location,
          title: formData.title,
          rating: formData.rating,
          review: formData.review,
        }),
      });

      // Optimistically add review to UI
      const newReview: Review = {
        id: Date.now(),
        Name: formData.name,
        Location: formData.location,
        Title: formData.title,
        Rating: formData.rating,
        Review: formData.review,
        Date: new Date().toISOString().split("T")[0],
      };
      setSheetReviews((prev) => [newReview, ...prev]);

      // Reset form
      setFormData({ name: "", location: "", title: "", review: "", rating: 5 });
      setSubmitSuccess(true);
      setTimeout(() => {
        setSubmitSuccess(false);
        setShowForm(false);
      }, 2500);
    } catch (err) {
      console.error("Submission error:", err);
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const allReviews = sheetReviews;

  const formatDate = (dateStr: string) => {
    try {
      return new Date(dateStr).toISOString().split("T")[0];
    } catch {
      return dateStr;
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Travelers Love Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Read what our satisfied customers have to say about their
            experiences
          </p>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-primary hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            Write a Review
          </button>
        </div>

        {/* Review Form */}
        {showForm && (
          <div className="max-w-2xl mx-auto mb-12 bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Share Your Experience
            </h3>

            {submitSuccess ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-green-600 font-semibold text-lg">
                  Thank you for your review!
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  Your review has been submitted successfully.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Location *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.location}
                      onChange={(e) =>
                        setFormData({ ...formData, location: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="City, Country"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Review Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Amazing experience!"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Rating *
                  </label>
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() =>
                          setFormData({ ...formData, rating: star })
                        }
                        className="focus:outline-none"
                      >
                        <svg
                          className={`w-8 h-8 ${star <= formData.rating ? "text-yellow-400" : "text-gray-300"} hover:text-yellow-400 transition-colors`}
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
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Review *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.review}
                    onChange={(e) =>
                      setFormData({ ...formData, review: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Share your experience with us..."
                  />
                </div>

                {submitError && (
                  <p className="text-red-500 text-sm">
                    Something went wrong. Please try again.
                  </p>
                )}

                <div className="flex space-x-4">
                  <button
                    onClick={handleSubmit}
                    disabled={
                      isSubmitting ||
                      !formData.name ||
                      !formData.location ||
                      !formData.title ||
                      !formData.review
                    }
                    className="bg-primary hover:bg-yellow-600 disabled:opacity-60 disabled:cursor-not-allowed text-white px-6 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8z"
                          />
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      "Submit Review"
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-lg font-semibold transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Loading State */}
        {isLoading ? (
          <div className="text-center py-12">
            <svg
              className="animate-spin w-10 h-10 text-primary mx-auto mb-3"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8z"
              />
            </svg>
            <p className="text-gray-500">Loading reviews...</p>
          </div>
        ) : (
          /* Testimonials Grid */
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allReviews.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow relative"
              >
                {/* Rating Stars */}
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < testimonial.Rating ? "text-yellow-400" : "text-gray-300"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Title */}
                <h3 className="font-bold text-gray-800 mb-3">
                  {testimonial.Title}
                </h3>

                {/* Review Text */}
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.Review}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary to-yellow-500 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial?.Name?.charAt(0)}
                    </div>
                    <div className="ml-3">
                      <p className="font-semibold text-gray-800">
                        {testimonial.Name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {testimonial.Location}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400">
                    {formatDate(testimonial.Date)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
