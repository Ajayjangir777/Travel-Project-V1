import tour2days from "../assets/jaipur-2days-tour.png";
import goldenTourVaranasi from "../assets/golden-tour-varanasi.png";
import udaipurNathDwaraTour from "../assets/udaipurNathdwaraTour.png";
import khajuraoTour from "../assets/khajuraoTour.png";

export interface Tour {
  id: number
  title: string
  duration: string
  rating: string
  reviews: string
  image: string
  featured: boolean
  category: string
}

export const allTours: Tour[] = [
  // Rajasthan Tours
  {
    id: 1,
    title: "Rajasthan Cultural Tour Package 11 Days",
    duration: "11 days",
    rating: "4.8/5",
    reviews: "2.6k",
    image: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?w=400&h=300&fit=crop",
    featured: true,
    category: "Rajasthan Tours"
  },
  {
    id: 2,
    title: "Rajasthan Desert Tour Package 7 Days",
    duration: "7 days",
    rating: "4.8/5",
    reviews: "2.6k",
    image: "https://images.unsplash.com/photo-1445991842772-097fea258e7b?w=400&h=300&fit=crop",
    featured: false,
    category: "Rajasthan Tours"
  },
  {
    id: 3,
    title: "3 Nights 4 Days Rajasthan Tour Package",
    duration: "4 days",
    rating: "4.8/5",
    reviews: "2.6k",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=400&h=300&fit=crop",
    featured: false,
    category: "Rajasthan Tours"
  },
  {
    id: 4,
    title: "Historical Rajasthan Tour 8 Days",
    duration: "8 days",
    rating: "4.8/5",
    reviews: "2.6k",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=400&h=300&fit=crop",
    featured: false,
    category: "Rajasthan Tours"
  },
  // Golden Triangle Tours
  {
    id: 5,
    title: "Golden Triangle Tour With Pushkar",
    duration: "9 days",
    rating: "4.8/5",
    reviews: "2.6k",
    image: "https://images.unsplash.com/photo-1515091943-9d5c0ad475af?w=400&h=300&fit=crop",
    featured: true,
    category: "Golden Triangle Tours"
  },
  {
    id: 6,
    title: "Golden Triangle Tour with Ranthambore",
    duration: "8 days",
    rating: "4.8/5",
    reviews: "2.6k",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400&h=300&fit=crop",
    featured: false,
    category: "Golden Triangle Tours"
  },
  {
    id: 7,
    title: "Golden Triangle Tour 7 days",
    duration: "7 days",
    rating: "4.8/5",
    reviews: "2.6k",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&h=300&fit=crop",
    featured: false,
    category: "Golden Triangle Tours"
  },
  {
    id: 8,
    title: "Golden Triangle Tour with Haridwar & Rishikesh",
    duration: "9 days",
    rating: "4.8/5",
    reviews: "2.6k",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=400&h=300&fit=crop",
    featured: false,
    category: "Golden Triangle Tours"
  },
  {
    id: 9,
    title: "Golden Triangle Tour With Khajuraho And Varanasi",
    duration: "9 days",
    rating: "4.8/5",
    reviews: "2.6k",
    image: khajuraoTour,
    featured: false,
    category: "Golden Triangle Tours"
  },
  {
    id: 10,
    title: "Golden Triangle Tour with Varanasi",
    duration: "7 days",
    rating: "4.8/5",
    reviews: "2.6k",
    image: goldenTourVaranasi,
    featured: false,
    category: "Golden Triangle Tours"
  },
  // Wildlife Tours
  {
    id: 11,
    title: "Jaipur And Ranthambore Tour",
    duration: "5 days",
    rating: "4.8/5",
    reviews: "2.6k",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&h=300&fit=crop",
    featured: false,
    category: "Wildlife Tours"
  },
  {
    id: 12,
    title: "4 Days Sariska Tour Package from Delhi",
    duration: "4 days",
    rating: "4.8/5",
    reviews: "2.6k",
    image: "https://images.unsplash.com/photo-1456926631375-92c8ce872def?w=400&h=300&fit=crop",
    featured: false,
    category: "Wildlife Tours"
  },
  {
    id: 13,
    title: "Wildlife Tour Package for 11 Days",
    duration: "11 days",
    rating: "4.8/5",
    reviews: "2.6k",
    image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=400&h=300&fit=crop",
    featured: false,
    category: "Wildlife Tours"
  },
  {
    id: 14,
    title: "Ranthambore Tour Package from Jaipur",
    duration: "2 days",
    rating: "4.8/5",
    reviews: "2.6k",
    image: "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=400&h=300&fit=crop",
    featured: false,
    category: "Wildlife Tours"
  },
  // Jaipur Tours
  {
    id: 15,
    title: "Jaipur to Ajmer Pushkar Tour",
    duration: "1 day",
    rating: "4.8/5",
    reviews: "2.6k",
    image: "https://images.unsplash.com/photo-1518623001395-125242310d0c?w=400&h=300&fit=crop",
    featured: true,
    category: "Jaipur Tours"
  },
  {
    id: 16,
    title: "4 Days Jaipur Tour Package From Delhi",
    duration: "4 days",
    rating: "4.8/5",
    reviews: "2.6k",
    image: "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?w=400&h=300&fit=crop",
    featured: false,
    category: "Jaipur Tours"
  },
  {
    id: 17,
    title: "Jaipur 1 Day Tour Package",
    duration: "1 day",
    rating: "4.8/5",
    reviews: "2.6k",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=400&h=300&fit=crop",
    featured: false,
    category: "Jaipur Tours"
  },
  {
    id: 18,
    title: "Jaipur Tour Package for 2 Days",
    duration: "2 days",
    rating: "4.8/5",
    reviews: "2.6k",
    image: tour2days,
    featured: false,
    category: "Jaipur Tours"
  },
  {
    id: 19,
    title: "Jaipur to Bhangarh Abhaneri Day Tour",
    duration: "1 day",
    rating: "4.8/5",
    reviews: "2.6k",
    image: "https://images.unsplash.com/photo-1587135941948-670b381f08ce?w=400&h=300&fit=crop",
    featured: false,
    category: "Jaipur Tours"
  },
  // North India Tours
  {
    id: 20,
    title: "Shimla Manali Tour Package",
    duration: "5 days",
    rating: "4.8/5",
    reviews: "2.6k",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=400&h=300&fit=crop",
    featured: false,
    category: "North India Tours"
  },
  {
    id: 21,
    title: "Chardham Yatra from Delhi",
    duration: "12 days",
    rating: "4.8/5",
    reviews: "2.6k",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    featured: false,
    category: "North India Tours"
  },
  {
    id: 22,
    title: "Jaipur to Nanital Tour",
    duration: "6 days",
    rating: "4.8/5",
    reviews: "2.6k",
    image: "https://images.unsplash.com/photo-1506038634487-60a69ae4b7b1?w=400&h=300&fit=crop",
    featured: false,
    category: "North India Tours"
  },
  {
    id: 23,
    title: "Jaipur To Dharamshala And Mcleod Ganj Tour",
    duration: "5 days",
    rating: "4.8/5",
    reviews: "2.6k",
    image: "https://images.unsplash.com/photo-1597074866923-dc0589150358?w=400&h=300&fit=crop",
    featured: false,
    category: "North India Tours"
  },
  {
    id: 24,
    title: "Jaipur to Vrindavan Tour",
    duration: "2 days",
    rating: "4.8/5",
    reviews: "2.6k",
    image: "https://images.unsplash.com/photo-1622322062536-895d869b09ff?w=400&h=300&fit=crop",
    featured: false,
    category: "North India Tours"
  },
  {
    id: 25,
    title: "Maa Vaishno Devi Tour",
    duration: "4 days",
    rating: "4.8/5",
    reviews: "2.6k",
    image: "https://images.unsplash.com/photo-1593815374272-52a2d4a9e917?w=400&h=300&fit=crop",
    featured: false,
    category: "North India Tours"
  },
  {
    id: 26,
    title: "Do Dham Gangotri Yamunotri Tour",
    duration: "5 days",
    rating: "4.8/5",
    reviews: "2.6k",
    image: "https://images.unsplash.com/photo-1604871000636-074fa5e587a5?w=400&h=300&fit=crop",
    featured: false,
    category: "North India Tours"
  },
  // Temple Tours
  {
    id: 27,
    title: "Khatu Shyam Tour Package",
    duration: "1 day",
    rating: "4.8/5",
    reviews: "2.6k",
    image: "https://images.unsplash.com/photo-1544979590-37e9b47eb705?w=400&h=300&fit=crop",
    featured: false,
    category: "Temple Tours"
  },
  {
    id: 28,
    title: "Jaipur to Karni Mata Temple Tour",
    duration: "1 day",
    rating: "4.8/5",
    reviews: "2.6k",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=400&h=300&fit=crop",
    featured: false,
    category: "Temple Tours"
  },
  // More Tours
  {
    id: 29,
    title: "Mount Abu Tour Package",
    duration: "2 days",
    rating: "4.8/5",
    reviews: "2.6k",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400&h=300&fit=crop",
    featured: false,
    category: "Hill Station Tours"
  },
  {
    id: 30,
    title: "Udaipur Nathdwara Tour",
    duration: "2 days",
    rating: "4.8/5",
    reviews: "2.6k",
    image: udaipurNathDwaraTour,
    featured: false,
    category: "Rajasthan Tours"
  },
  {
    id: 31,
    title: "Jodhpur Jaisalmer Tour Package",
    duration: "4 days",
    rating: "4.8/5",
    reviews: "2.6k",
    image: "https://images.unsplash.com/photo-1477595415964-778f43a29cc4?w=400&h=300&fit=crop",
    featured: false,
    category: "Rajasthan Tours"
  },
  {
    id: 32,
    title: "Majestic Rajasthan Trails | Forts, Palaces, and Desert Wonders",
    duration: "4 days",
    rating: "4.8/5",
    reviews: "2.6k",
    image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=400&h=300&fit=crop",
    featured: false,
    category: "Rajasthan Tours"
  },
  {
    id: 33,
    title: "Jewels Of Udaipur | City Of Lakes And Royal Palaces",
    duration: "3 days",
    rating: "4.8/5",
    reviews: "2.6k",
    image: "https://images.unsplash.com/photo-1595658658481-d53d3f999875?w=400&h=300&fit=crop",
    featured: false,
    category: "Rajasthan Tours"
  },
  {
    id: 34,
    title: "3 Days Pushkar Tour from Jaipur",
    duration: "3 days",
    rating: "4.8/5",
    reviews: "2.6k",
    image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=400&h=300&fit=crop",
    featured: true,
    category: "Jaipur Tours"
  },
  {
    id: 35,
    title: "Spiti Valley Tour",
    duration: "8 days",
    rating: "4.8/5",
    reviews: "2.6k",
    image: "https://images.unsplash.com/photo-1626714100274-dee32048118a?w=400&h=300&fit=crop",
    featured: false,
    category: "North India Tours"
  },
  {
    id: 36,
    title: "Haridwar - Rishikesh and Mussoorie Tour Package",
    duration: "6 days",
    rating: "4.8/5",
    reviews: "2.6k",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=400&h=300&fit=crop",
    featured: false,
    category: "North India Tours"
  }
]

export const categories = [
  { name: "All Tours", slug: "tours" },
  { name: "Rajasthan Tours", slug: "rajasthan-tours" },
  { name: "Golden Triangle Tours", slug: "golden-triangle-tours" },
  { name: "Jaipur Tours", slug: "jaipur-tours" },
  { name: "Wildlife Tours", slug: "wildlife-tours" },
  { name: "North India Tours", slug: "north-india-tours" },
  { name: "Temple Tours", slug: "temple-tours" },
  { name: "Hill Station Tours", slug: "hill-station-tours" }
]
