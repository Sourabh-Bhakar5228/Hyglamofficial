import React, { useState } from "react";
import { Star, ShoppingBag, Heart, X } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const JewelryStore = () => {
  const [activeCategory, setActiveCategory] = useState("festive");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    product: "",
    price: "",
  });

  // Banner data
  const bannerData = {
    title: "Exquisite Jewelry Collection",
    subtitle: "Discover pieces that tell your story",
    cta: "Shop Now",
    image: "https://picsum.photos/id/1005/1200/500",
  };

  // Complete product data organized by category and product type
  const categories = [
    {
      id: "festive",
      name: "Festive Girl",
      icon: "✨",
      description: "Celebrate in colour, culture & sparkle.",
      products: {
        necklaces: [
          {
            id: 1,
            name: "Royal Kundan Layered Necklace",
            description: "Traditional kundan work with layered gold chains",
            price: 2499,
            originalPrice: 3999,
            image: "https://picsum.photos/id/201/400/400",
            rating: 4.8,
            reviews: 125,
          },
          {
            id: 2,
            name: "Festive Pearl Multi-strand",
            description: "Multi-strand pearl necklace with kundan accents",
            price: 3299,
            originalPrice: 4499,
            image: "https://picsum.photos/id/301/400/400",
            rating: 4.9,
            reviews: 89,
          },
          {
            id: 3,
            name: "Traditional Gold Chain Set",
            description: "Heavy gold-plated chain with pendant",
            price: 1899,
            originalPrice: 2799,
            image: "https://picsum.photos/id/401/400/400",
            rating: 4.7,
            reviews: 156,
          },
        ],
        earrings: [
          {
            id: 4,
            name: "Classic Jhumka Earrings",
            description: "Traditional brass jhumkas with intricate work",
            price: 1299,
            originalPrice: 1899,
            image: "https://picsum.photos/id/202/400/400",
            rating: 4.9,
            reviews: 203,
          },
          {
            id: 5,
            name: "Chandbali Festival Earrings",
            description: "Crescent-shaped earrings with pearl drops",
            price: 1599,
            originalPrice: 2299,
            image: "https://picsum.photos/id/302/400/400",
            rating: 4.8,
            reviews: 134,
          },
          {
            id: 6,
            name: "Festival Stud Collection",
            description: "Set of 3 pairs of festival-themed studs",
            price: 899,
            originalPrice: 1299,
            image: "https://picsum.photos/id/402/400/400",
            rating: 4.6,
            reviews: 178,
          },
        ],
        bracelets: [
          {
            id: 7,
            name: "Ethnic Charm Bracelet",
            description: "Gold-plated bracelet with traditional charms",
            price: 1199,
            originalPrice: 1799,
            image: "https://picsum.photos/id/203/400/400",
            rating: 4.7,
            reviews: 98,
          },
          {
            id: 8,
            name: "Modern Ethnic Bangle Set",
            description: "Set of 4 bangles blending traditional and modern",
            price: 1499,
            originalPrice: 2199,
            image: "https://picsum.photos/id/303/400/400",
            rating: 4.8,
            reviews: 87,
          },
        ],
        rings: [
          {
            id: 9,
            name: "Traditional Cocktail Ring",
            description: "Large stone ring with traditional setting",
            price: 999,
            originalPrice: 1499,
            image: "https://picsum.photos/id/204/400/400",
            rating: 4.6,
            reviews: 65,
          },
          {
            id: 10,
            name: "Festive Statement Ring",
            description: "Bold ring perfect for celebrations",
            price: 1299,
            originalPrice: 1899,
            image: "https://picsum.photos/id/304/400/400",
            rating: 4.7,
            reviews: 43,
          },
        ],
        pendants: [
          {
            id: 11,
            name: "Celebration Stone Pendant",
            description: "Colorful stones in traditional motif",
            price: 1599,
            originalPrice: 2199,
            image: "https://picsum.photos/id/205/400/400",
            rating: 4.8,
            reviews: 112,
          },
          {
            id: 12,
            name: "Festival Charm Pendant",
            description: "Traditional charm with intricate detailing",
            price: 1199,
            originalPrice: 1699,
            image: "https://picsum.photos/id/305/400/400",
            rating: 4.7,
            reviews: 78,
          },
        ],
      },
    },
    {
      id: "glam",
      name: "Glam Girl",
      icon: "💎",
      description: "For the spotlight moments & red-carpet glow.",
      products: {
        necklaces: [
          {
            id: 13,
            name: "Diamond Choker Necklace",
            description: "Sparkling crystal choker for glamorous events",
            price: 4999,
            originalPrice: 6999,
            image: "https://picsum.photos/id/206/400/400",
            rating: 4.9,
            reviews: 156,
          },
          {
            id: 14,
            name: "Statement Crystal Necklace",
            description: "Bold crystal statement piece for red carpet",
            price: 3799,
            originalPrice: 5299,
            image: "https://picsum.photos/id/306/400/400",
            rating: 4.8,
            reviews: 123,
          },
          {
            id: 15,
            name: "Glamour Chain Necklace",
            description: "Multi-chain necklace with crystal accents",
            price: 2999,
            originalPrice: 4199,
            image: "https://picsum.photos/id/406/400/400",
            rating: 4.7,
            reviews: 98,
          },
        ],
        earrings: [
          {
            id: 16,
            name: "Cocktail Dangler Earrings",
            description: "Long danglers perfect for cocktail parties",
            price: 3499,
            originalPrice: 4999,
            image: "https://picsum.photos/id/207/400/400",
            rating: 4.8,
            reviews: 142,
          },
          {
            id: 17,
            name: "Crystal Drop Earrings",
            description: "Dramatic crystal drops that catch light",
            price: 2799,
            originalPrice: 3799,
            image: "https://picsum.photos/id/307/400/400",
            rating: 4.9,
            reviews: 167,
          },
          {
            id: 18,
            name: "Glamour Stud Earrings",
            description: "Large crystal studs for understated glam",
            price: 1999,
            originalPrice: 2799,
            image: "https://picsum.photos/id/407/400/400",
            rating: 4.7,
            reviews: 189,
          },
        ],
        bracelets: [
          {
            id: 19,
            name: "Party Glam Cuff",
            description: "Wide cuff bracelet with crystal detailing",
            price: 2799,
            originalPrice: 3799,
            image: "https://picsum.photos/id/208/400/400",
            rating: 4.7,
            reviews: 94,
          },
          {
            id: 20,
            name: "Tennis Bracelet Glam",
            description: "Classic tennis bracelet with premium crystals",
            price: 4299,
            originalPrice: 5999,
            image: "https://picsum.photos/id/308/400/400",
            rating: 4.9,
            reviews: 76,
          },
        ],
        rings: [
          {
            id: 21,
            name: "Statement Cocktail Ring",
            description: "Large cocktail ring with center stone",
            price: 2199,
            originalPrice: 2999,
            image: "https://picsum.photos/id/209/400/400",
            rating: 4.8,
            reviews: 58,
          },
          {
            id: 22,
            name: "Glam Stack Ring Set",
            description: "Set of 3 stackable glam rings",
            price: 1799,
            originalPrice: 2499,
            image: "https://picsum.photos/id/309/400/400",
            rating: 4.6,
            reviews: 87,
          },
        ],
        pendants: [
          {
            id: 23,
            name: "Sparkly Stunner Pendant",
            description: "Large crystal pendant for glamorous nights",
            price: 3299,
            originalPrice: 4499,
            image: "https://picsum.photos/id/210/400/400",
            rating: 4.9,
            reviews: 103,
          },
          {
            id: 24,
            name: "Red Carpet Pendant",
            description: "Dramatic pendant perfect for special events",
            price: 2799,
            originalPrice: 3999,
            image: "https://picsum.photos/id/310/400/400",
            rating: 4.8,
            reviews: 134,
          },
        ],
      },
    },
    {
      id: "everyday",
      name: "Everyday Girl",
      icon: "🌸",
      description: "Simple yet stunning pieces for daily wear.",
      products: {
        necklaces: [
          {
            id: 25,
            name: "Minimal Chain Necklace",
            description: "Delicate gold chain perfect for layering",
            price: 899,
            originalPrice: 1299,
            image: "https://picsum.photos/id/211/400/400",
            rating: 4.6,
            reviews: 234,
          },
          {
            id: 26,
            name: "Simple Pendant Chain",
            description: "Minimal chain with small geometric pendant",
            price: 1199,
            originalPrice: 1699,
            image: "https://picsum.photos/id/311/400/400",
            rating: 4.7,
            reviews: 198,
          },
          {
            id: 27,
            name: "Everyday Layering Set",
            description: "Set of 3 chains in different lengths",
            price: 1599,
            originalPrice: 2299,
            image: "https://picsum.photos/id/411/400/400",
            rating: 4.8,
            reviews: 167,
          },
        ],
        earrings: [
          {
            id: 28,
            name: "Lightweight Stud Earrings",
            description: "Simple studs perfect for daily wear",
            price: 699,
            originalPrice: 999,
            image: "https://picsum.photos/id/212/400/400",
            rating: 4.7,
            reviews: 289,
          },
          {
            id: 29,
            name: "Chic Drop Earrings",
            description: "Small drops that add elegance to any outfit",
            price: 899,
            originalPrice: 1299,
            image: "https://picsum.photos/id/312/400/400",
            rating: 4.6,
            reviews: 178,
          },
          {
            id: 30,
            name: "Minimal Hoop Earrings",
            description: "Small gold hoops for everyday elegance",
            price: 799,
            originalPrice: 1199,
            image: "https://picsum.photos/id/412/400/400",
            rating: 4.8,
            reviews: 234,
          },
        ],
        bracelets: [
          {
            id: 31,
            name: "Sleek Everyday Bangle",
            description: "Simple gold bangle that goes with everything",
            price: 799,
            originalPrice: 1199,
            image: "https://picsum.photos/id/213/400/400",
            rating: 4.5,
            reviews: 145,
          },
          {
            id: 32,
            name: "Delicate Chain Bracelet",
            description: "Fine chain bracelet with small charm",
            price: 999,
            originalPrice: 1499,
            image: "https://picsum.photos/id/313/400/400",
            rating: 4.7,
            reviews: 123,
          },
        ],
        rings: [
          {
            id: 33,
            name: "Delicate Daily Ring",
            description: "Thin band with small stone accent",
            price: 599,
            originalPrice: 899,
            image: "https://picsum.photos/id/214/400/400",
            rating: 4.6,
            reviews: 167,
          },
          {
            id: 34,
            name: "Minimalist Band Ring",
            description: "Simple gold band for everyday wear",
            price: 499,
            originalPrice: 799,
            image: "https://picsum.photos/id/314/400/400",
            rating: 4.5,
            reviews: 198,
          },
          {
            id: 35,
            name: "Casual Stackable Ring",
            description: "Perfect for stacking with other rings",
            price: 699,
            originalPrice: 999,
            image: "https://picsum.photos/id/414/400/400",
            rating: 4.7,
            reviews: 156,
          },
        ],
        pendants: [
          {
            id: 36,
            name: "Versatile Everyday Pendant",
            description: "Simple geometric pendant for daily wear",
            price: 999,
            originalPrice: 1399,
            image: "https://picsum.photos/id/215/400/400",
            rating: 4.7,
            reviews: 123,
          },
          {
            id: 37,
            name: "Subtle Heart Pendant",
            description: "Small heart pendant with delicate chain",
            price: 799,
            originalPrice: 1199,
            image: "https://picsum.photos/id/315/400/400",
            rating: 4.8,
            reviews: 145,
          },
        ],
      },
    },
    {
      id: "boss",
      name: "Boss Lady",
      icon: "👑",
      description: "For the woman who owns her power.",
      products: {
        necklaces: [
          {
            id: 38,
            name: "Power Statement Choker",
            description: "Bold choker that commands attention",
            price: 3799,
            originalPrice: 4999,
            image: "https://picsum.photos/id/216/400/400",
            rating: 4.8,
            reviews: 87,
          },
          {
            id: 39,
            name: "Layered Chain Statement",
            description: "Multiple chains creating a powerful look",
            price: 2999,
            originalPrice: 4199,
            image: "https://picsum.photos/id/316/400/400",
            rating: 4.7,
            reviews: 76,
          },
          {
            id: 40,
            name: "Executive Necklace",
            description: "Professional yet striking necklace",
            price: 2299,
            originalPrice: 3299,
            image: "https://picsum.photos/id/416/400/400",
            rating: 4.8,
            reviews: 94,
          },
        ],
        earrings: [
          {
            id: 41,
            name: "Bold Hoop Earrings",
            description: "Large hoops that make a statement",
            price: 2299,
            originalPrice: 3199,
            image: "https://picsum.photos/id/217/400/400",
            rating: 4.7,
            reviews: 76,
          },
          {
            id: 42,
            name: "Sharp Angular Earrings",
            description: "Geometric earrings with bold lines",
            price: 1899,
            originalPrice: 2699,
            image: "https://picsum.photos/id/317/400/400",
            rating: 4.6,
            reviews: 65,
          },
          {
            id: 43,
            name: "Power Stud Earrings",
            description: "Large studs perfect for the boardroom",
            price: 1599,
            originalPrice: 2299,
            image: "https://picsum.photos/id/417/400/400",
            rating: 4.8,
            reviews: 89,
          },
        ],
        bracelets: [
          {
            id: 44,
            name: "Modern Metallic Bracelet",
            description: "Strong metallic bracelet with clean lines",
            price: 1999,
            originalPrice: 2799,
            image: "https://picsum.photos/id/218/400/400",
            rating: 4.6,
            reviews: 54,
          },
          {
            id: 45,
            name: "Executive Cuff Bracelet",
            description: "Wide cuff perfect for professional settings",
            price: 2499,
            originalPrice: 3499,
            image: "https://picsum.photos/id/318/400/400",
            rating: 4.7,
            reviews: 67,
          },
        ],
        rings: [
          {
            id: 46,
            name: "Office Statement Ring",
            description: "Bold ring appropriate for professional wear",
            price: 1799,
            originalPrice: 2399,
            image: "https://picsum.photos/id/219/400/400",
            rating: 4.8,
            reviews: 65,
          },
          {
            id: 47,
            name: "Power Signet Ring",
            description: "Classic signet ring with modern twist",
            price: 2199,
            originalPrice: 2999,
            image: "https://picsum.photos/id/319/400/400",
            rating: 4.7,
            reviews: 54,
          },
          {
            id: 48,
            name: "Executive Band Ring",
            description: "Clean lines perfect for the modern woman",
            price: 1599,
            originalPrice: 2299,
            image: "https://picsum.photos/id/419/400/400",
            rating: 4.6,
            reviews: 78,
          },
        ],
        pendants: [
          {
            id: 49,
            name: "Geometric Power Pendant",
            description: "Sharp geometric design that commands respect",
            price: 2599,
            originalPrice: 3499,
            image: "https://picsum.photos/id/220/400/400",
            rating: 4.9,
            reviews: 91,
          },
          {
            id: 50,
            name: "Modern Architecture Pendant",
            description: "Inspired by modern architecture and clean lines",
            price: 2199,
            originalPrice: 2999,
            image: "https://picsum.photos/id/320/400/400",
            rating: 4.8,
            reviews: 76,
          },
        ],
      },
    },
  ];

  const currentCategory = categories.find((cat) => cat.id === activeCategory);

  // Get all products from current category
  const getAllProducts = (category) => {
    const allProducts = [];
    Object.values(category.products).forEach((productArray) => {
      allProducts.push(...productArray);
    });
    return allProducts;
  };

  const handleAddToBag = (product) => {
    setSelectedProduct(product);
    setFormData({
      ...formData,
      product: product.name,
      price: `₹${product.price}`,
    });
    setShowInquiryForm(true);
  };

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/bhakarsoursbh@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            address: formData.address,
            product: formData.product,
            price: formData.price,
            _subject: "New Jewelry Inquiry",
          }),
        }
      );

      const data = await response.json();

      if (data.success) {
        toast.success("Your inquiry has been submitted successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });

        setShowInquiryForm(false);
        setSelectedProduct(null);
        setFormData({
          name: "",
          email: "",
          address: "",
          product: "",
          price: "",
        });
      }
    } catch (error) {
      toast.error(
        "There was an error submitting your inquiry. Please try again.",
        {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );
    }
  };

  const ProductModal = ({ product, onClose }) => {
    if (!product) return null;

    const discountPercentage = Math.round(
      ((product.originalPrice - product.price) / product.originalPrice) * 100
    );

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
            >
              <X size={20} />
            </button>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-80 object-cover rounded-t-lg"
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
            <div className="flex items-center mb-4">
              <div className="flex items-center text-yellow-500 mr-3">
                <Star size={16} fill="currentColor" />
                <span className="ml-1 text-gray-700">{product.rating}</span>
              </div>
              <span className="text-gray-500">({product.reviews} reviews)</span>
            </div>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <span className="text-2xl font-bold text-gray-900">
                  ₹{product.price}
                </span>
                <span className="text-lg text-gray-500 line-through">
                  ₹{product.originalPrice}
                </span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
                  {discountPercentage}% OFF
                </span>
              </div>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => handleAddToBag(product)}
                className="flex-1 bg-black text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center"
              >
                <ShoppingBag size={20} className="mr-2" />
                Add to Bag
              </button>
              <button className="flex items-center justify-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Heart size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const InquiryForm = ({ product, onClose }) => {
    if (!product) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg max-w-md w-full">
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Inquiry Form</h2>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={20} />
              </button>
            </div>

            <div className="mb-4 p-3 bg-gray-50 rounded-lg">
              <p className="font-medium">{formData.product}</p>
              <p className="text-lg font-bold text-gray-900">
                {formData.price}
              </p>
            </div>

            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Shipping Address *
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleFormChange}
                  required
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                ></textarea>
              </div>

              <input type="hidden" name="product" value={formData.product} />
              <input type="hidden" name="price" value={formData.price} />

              <button
                type="submit"
                className="w-full bg-black text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ToastContainer />

      {/* Banner - Made larger */}
      <div className="relative bg-gray-900">
        <img
          src={bannerData.image}
          alt="Jewelry Collection"
          className="w-full h-96 object-cover opacity-70"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">{bannerData.title}</h1>
          <p className="text-2xl mb-8">{bannerData.subtitle}</p>
          <button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors text-lg">
            {bannerData.cta}
          </button>
        </div>
      </div>

      {/* Category Navigation - Centered */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-center overflow-x-auto space-x-6 pb-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex flex-col items-center px-6 py-3 rounded-lg whitespace-nowrap ${
                activeCategory === category.id
                  ? "bg-black text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              <span className="text-2xl mb-1">{category.icon}</span>
              <span className="font-medium">{category.name}</span>
            </button>
          ))}
        </div>

        {/* Category Description */}
        <div className="mt-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {currentCategory.name}
          </h2>
          <p className="text-gray-600 text-lg">{currentCategory.description}</p>
        </div>

        {/* Product Types Navigation - Centered */}
        <div className="mt-8 flex justify-center overflow-x-auto space-x-4 pb-4">
          {Object.keys(currentCategory.products).map((type) => (
            <button
              key={type}
              className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 whitespace-nowrap capitalize"
            >
              {type}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {getAllProducts(currentCategory).map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-60 object-cover"
                />
                <button className="absolute top-3 right-3 p-2 bg-white rounded-full hover:bg-gray-100">
                  <Heart size={16} />
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-gray-900 mb-1">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 mb-3 line-clamp-1">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold">₹{product.price}</span>
                    <span className="text-sm text-gray-500 line-through">
                      ₹{product.originalPrice}
                    </span>
                  </div>
                  <div className="flex items-center text-yellow-500">
                    <Star size={14} fill="currentColor" />
                    <span className="text-sm ml-1 text-gray-700">
                      {product.rating}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Modal */}
      {selectedProduct && !showInquiryForm && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      {/* Inquiry Form Modal */}
      {showInquiryForm && (
        <InquiryForm
          product={selectedProduct}
          onClose={() => {
            setShowInquiryForm(false);
            setSelectedProduct(null);
          }}
        />
      )}
    </div>
  );
};

export default JewelryStore;
