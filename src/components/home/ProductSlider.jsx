import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import allProducts from "../../data/allProducts.json";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import HighlightedHeading from "../common/HighlightedHeading";
import "./css/ProductSlider.css";

const ProductSlider = () => {
  const images = allProducts.flatMap((cat) => cat.products);

  if (!images || images.length === 0) {
    return (
      <div className="product-slider-container">
        <p className="text-gray-500 text-center">No products available</p>
      </div>
    );
  }

  return (
    <div className="product-slider-container">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <HighlightedHeading level="h2" className="product-slider-title">
          Featured Collection
        </HighlightedHeading>
      </motion.div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        breakpoints={{
          320: {
            slidesPerView: 1.2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3.5,
            spaceBetween: 40,
          },
        }}
        className="product-swiper"
      >
        {images.map((product, index) => (
          <SwiperSlide key={product.id || index} className="product-card-wrapper" style={{ width: '320px' }}>
            <Link to={`/product/${product.id}`} className="product-card-link" style={{ textDecoration: 'none' }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="product-card"
              >
                <div className="product-image-container">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                  <div className="product-badge">New Arrival</div>
                  <div className="product-info-overlay">
                    <h3 className="product-name">{product.name}</h3>
                    {/* <div className="product-price-row">
                      <span className="product-price">₹{product.price}</span>
                    </div> */}
                  </div>
                </div>
              </motion.div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
