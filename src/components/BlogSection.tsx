const blogPosts = [
  {
    id: 1,
    title: "Art and Culture Scene of Udaipur: Must Visit Cultural Spots",
    date: "November 27, 2025",
    author: "Admin",
    category: "Destinations",
    image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    title: "Top Reliable Car Rental Services Guide for Stress-Free Travel",
    date: "March 17, 2026",
    author: "Admin",
    category: "Family Travel",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    title: "Best Places to Experience Holi Festival in Rajasthan",
    date: "February 20, 2026",
    author: "Admin",
    category: "Places to Visit",
    image: "https://images.unsplash.com/photo-1574236170880-ffd41edaf5f9?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    title: "Top 10 Must-See Attractions in Jodhpur - The Blue City",
    date: "November 27, 2025",
    author: "Admin",
    category: "Tips & Tricks",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=400&h=300&fit=crop",
  },
]

const BlogSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Stories, Tips, and Guides</h2>
            <p className="text-gray-600 mt-2">Discover travel inspiration and expert advice</p>
          </div>
          <a
            href="/blog"
            className="text-primary font-semibold hover:underline flex items-center"
          >
            View All Posts
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-primary text-white text-xs px-3 py-1 rounded-full font-semibold uppercase">
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>By {post.author}</span>
                </div>
                <h3 className="font-bold text-gray-800 line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <a
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center text-primary font-semibold mt-4 hover:underline"
                >
                  Read More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogSection
