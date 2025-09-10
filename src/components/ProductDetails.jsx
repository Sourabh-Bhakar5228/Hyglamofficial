import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Star,
  ShoppingCart,
  Share,
  Check,
  Minus,
  Plus,
} from "lucide-react";
import allProducts from "../data/allProducts.json";
import { setCookie, getCookie } from "../utils/cookies";
import { useWishlist } from "../components/context/WishlistContext";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToWishlist, wishlist } = useWishlist();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const [isWishlistUpdated, setIsWishlistUpdated] = useState(false);

  // Sample product images for gallery
  const productImages = product
    ? [
        product.image,
        product.image, // In a real app, these would be different images
        product.image,
        product.image,
      ]
    : [];

  useEffect(() => {
    let found = null;
    for (const cat of allProducts) {
      const p = cat.products.find((item) => item.id === id);
      if (p) {
        found = p;
        break;
      }
    }
    if (!found) {
      navigate("/products");
    } else {
      setProduct(found);
    }
  }, [id, navigate]);

  const handleAddToCart = () => {
    const cart = getCookie("cart") || [];
    // Check if product already exists in cart
    const existingItemIndex = cart.findIndex((item) => item.id === product.id);

    if (existingItemIndex >= 0) {
      // Update quantity if product exists
      cart[existingItemIndex].quantity =
        (cart[existingItemIndex].quantity || 1) + quantity;
    } else {
      // Add new product with quantity
      cart.push({ ...product, quantity });
    }

    setCookie("cart", cart);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 3000);
  };

  const handleAddToWishlist = () => {
    addToWishlist(product);
    setIsWishlistUpdated(true);
    setTimeout(() => setIsWishlistUpdated(false), 2000);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.name,
          text: product.description,
          url: window.location.href,
        });
      } catch (error) {
        console.log("Error sharing:", error);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  if (!product)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb Navigation */}
        <nav className="flex mb-6" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <Link to="/" className="text-gray-500 hover:text-indigo-600">
                Home
              </Link>
            </li>
            <li>
              <ChevronRight size={16} className="text-gray-400" />
            </li>
            <li>
              <Link
                to="/products"
                className="text-gray-500 hover:text-indigo-600"
              >
                Products
              </Link>
            </li>
            <li>
              <ChevronRight size={16} className="text-gray-400" />
            </li>
            <li className="text-gray-800 font-medium truncate">
              {product.name}
            </li>
          </ol>
        </nav>

        <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Images */}
            <div>
              <div className="relative rounded-lg overflow-hidden mb-4">
                <img
                  src={productImages[selectedImage]}
                  alt={product.name}
                  className="w-full h-96 object-cover"
                />

                {/* Wishlist Button */}
                <button
                  onClick={handleAddToWishlist}
                  className={`absolute top-4 right-4 p-2 rounded-full shadow-md ${
                    wishlist.some((item) => item.id === product.id)
                      ? "bg-red-500 text-white"
                      : "bg-white text-gray-700 hover:bg-red-50 hover:text-red-500"
                  } transition-colors`}
                >
                  <Heart
                    size={24}
                    className={
                      wishlist.some((item) => item.id === product.id)
                        ? "fill-current"
                        : ""
                    }
                  />
                </button>
              </div>

              {/* Image Thumbnails */}
              <div className="grid grid-cols-4 gap-3">
                {productImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`rounded-md overflow-hidden border-2 ${
                      selectedImage === index
                        ? "border-indigo-600"
                        : "border-gray-200"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-20 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>
              <p className="text-gray-500 mb-4">{product.category}</p>

              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={18}
                      className={
                        star <= 4
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">(42 reviews)</span>
              </div>

              {/* Price */}
              <div className="text-3xl font-bold text-indigo-600 mb-6">
                ₹{product.price}
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Description</h3>
                <p className="text-gray-600">
                  {product.description ||
                    "This premium product is designed for maximum comfort and durability. Made with high-quality materials and expert craftsmanship."}
                </p>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Features</h3>
                <ul className="text-gray-600 space-y-1">
                  <li className="flex items-center">
                    <Check size={16} className="text-green-500 mr-2" />
                    High-quality materials
                  </li>
                  <li className="flex items-center">
                    <Check size={16} className="text-green-500 mr-2" />
                    Expert craftsmanship
                  </li>
                  <li className="flex items-center">
                    <Check size={16} className="text-green-500 mr-2" />
                    Long-lasting durability
                  </li>
                  <li className="flex items-center">
                    <Check size={16} className="text-green-500 mr-2" />
                    Easy maintenance
                  </li>
                </ul>
              </div>

              {/* Quantity Selector */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Quantity</h3>
                <div className="flex items-center">
                  <button
                    onClick={decreaseQuantity}
                    className="p-2 rounded-l-md bg-gray-100 hover:bg-gray-200"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="px-4 py-2 bg-gray-50">{quantity}</span>
                  <button
                    onClick={increaseQuantity}
                    className="p-2 rounded-r-md bg-gray-100 hover:bg-gray-200"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <button
                  onClick={handleAddToCart}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex-1"
                >
                  <ShoppingCart size={20} />
                  {addedToCart ? "Added to Cart" : "Add to Cart"}
                </button>

                <button
                  onClick={handleShare}
                  className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Share size={20} />
                  Share
                </button>
              </div>

              {/* Additional Info */}
              <div className="border-t border-gray-200 pt-4">
                <div className="text-sm text-gray-500">
                  <span className="block mb-1">
                    Free shipping on orders over ₹1000
                  </span>
                  <span className="block">30-day money-back guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">You might also like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {allProducts
              .flatMap((category) => category.products)
              .filter((p) => p.id !== product.id)
              .slice(0, 4)
              .map((relatedProduct) => (
                <div
                  key={relatedProduct.id}
                  className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all"
                >
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold mb-1">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-gray-500 text-sm mb-2">
                      {relatedProduct.category}
                    </p>
                    <div className="text-indigo-600 font-bold">
                      ₹{relatedProduct.price}
                    </div>
                    <Link
                      to={`/product/${relatedProduct.id}`}
                      className="mt-3 inline-block text-indigo-600 hover:text-indigo-800 font-medium text-sm"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Notification Toasts */}
      {addedToCart && (
        <div className="fixed bottom-4 right-4 bg-green-100 text-green-800 px-4 py-2 rounded-lg shadow-lg animate-fadeInOut">
          Product added to cart successfully!
        </div>
      )}

      {isWishlistUpdated && (
        <div className="fixed bottom-4 left-4 bg-blue-100 text-blue-800 px-4 py-2 rounded-lg shadow-lg animate-fadeInOut">
          {wishlist.some((item) => item.id === product.id)
            ? "Added to wishlist!"
            : "Removed from wishlist!"}
        </div>
      )}
    </div>
  );
}
