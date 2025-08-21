import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const ProductSection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const products = [
    {
      id: 1,
      name: "Drops Earring",
      items: "15 Products",
      price: "$49.99",
      originalPrice: "$69.99",
      badge: "Sale",
    },
    {
      id: 2,
      name: "Diamond Pendant",
      items: "12 Products",
      price: "$129.99",
      originalPrice: "$159.99",
      badge: "New",
    },
    {
      id: 3,
      name: "Flower Necklace",
      items: "18 Products",
      price: "$89.99",
      originalPrice: "$109.99",
      badge: "Popular",
    },
    {
      id: 4,
      name: "Rose Gold Rings",
      items: "10 Products",
      price: "$59.99",
      originalPrice: "$79.99",
      badge: "Sale",
    },
    {
      id: 5,
      name: "Silver Rings",
      items: "20 Products",
      price: "$39.99",
      originalPrice: "$49.99",
      badge: "Trending",
    },
    {
      id: 6,
      name: "Pearl Bracelet",
      items: "14 Products",
      price: "$79.99",
      originalPrice: "$99.99",
      badge: "Limited",
    },
  ];

  return (
    <div className="bg-white max-w-8xl mx-auto p-4 rounded-lg shadow-sm">
      {/* Section Header */}
      <div className="flex justify-between items-center mb-8">
        {/* <h2 className="text-2xl font-bold  text-gray-800">Featured Products</h2> */}
        <div className="flex space-x-2">
          <button
            ref={prevRef}
            className="swiper-button-prev-custom w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
          >
            &lt;
          </button>
          <button
            ref={nextRef}
            className="swiper-button-next-custom w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
          >
            &gt;
          </button>
        </div>
      </div>

      {/* Product Swiper */}
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 20 },
          1280: { slidesPerView: 5, spaceBetween: 20 },
        }}
        className="mySwiper mb-12"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="relative overflow-hidden">
                <img
                  src={`https://picsum.photos/300/300?random=${product.id}`}
                  alt={product.name}
                  className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                    {product.badge}
                  </span>
                )}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-1">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 mb-3">{product.items}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-gray-900">
                      {product.price}
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      {product.originalPrice}
                    </span>
                  </div>
                  <button className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-blue-700 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bottom Banner */}
      <div className="bg-gray-100 rounded-lg p-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Exclusive Member - Plus 8% Reward And Free Shipping
            </h3>
            <p className="text-gray-600">
              Join our membership program today and enjoy exclusive benefits
            </p>
          </div>
          <button className="px-6 py-3 bg-white text-gray-800 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 transition-colors font-medium whitespace-nowrap">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
