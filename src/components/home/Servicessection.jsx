import React, { useState } from "react";
import {
  FaShippingFast,
  FaDollarSign,
  FaPercent,
  FaHeadset,
} from "react-icons/fa";
import "./css/ServiceFeatures.css"; // We'll create this CSS file

const ServiceFeatures = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="service-features-container">
      <div className="service-features-header">
        <h2 className="service-features-title">Our Premium Services</h2>
        <p className="service-features-subtitle">
          Experience our exceptional customer service and benefits
        </p>
      </div>

      <div className="service-features-grid">
        {/* Worldwide Shipping */}
        <div
          className={`service-feature-card ${
            hoveredCard === 0 ? "hovered" : ""
          }`}
          onMouseEnter={() => setHoveredCard(0)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div className="service-icon-container">
            <FaShippingFast className="service-icon" />
          </div>
          <h3 className="service-feature-title">WORLDWIDE SHIPPING</h3>
          <p className="service-feature-description">
            For all Orders Over $100
          </p>
          <span className="service-feature-tag">FREE DELIVERY</span>
        </div>

        {/* Money Back Guarantee */}
        <div
          className={`service-feature-card ${
            hoveredCard === 1 ? "hovered" : ""
          }`}
          onMouseEnter={() => setHoveredCard(1)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div className="service-icon-container">
            <FaDollarSign className="service-icon" />
          </div>
          <h3 className="service-feature-title">MONEY BACK GUARANTEE</h3>
          <p className="service-feature-description">Return within 30 days</p>
          <span className="service-feature-tag">NO HASSLE</span>
        </div>

        {/* Offers And Discounts */}
        <div
          className={`service-feature-card ${
            hoveredCard === 2 ? "hovered" : ""
          }`}
          onMouseEnter={() => setHoveredCard(2)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div className="service-icon-container">
            <FaPercent className="service-icon" />
          </div>
          <h3 className="service-feature-title">OFFERS AND DISCOUNTS</h3>
          <p className="service-feature-description">Save up to 30%</p>
          <span className="service-feature-tag">EXCLUSIVE DEALS</span>
        </div>

        {/* 24/7 Support */}
        <div
          className={`service-feature-card ${
            hoveredCard === 3 ? "hovered" : ""
          }`}
          onMouseEnter={() => setHoveredCard(3)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div className="service-icon-container">
            <FaHeadset className="service-icon" />
          </div>
          <h3 className="service-feature-title">24/7 SUPPORT</h3>
          <p className="service-feature-description">Contact us anytime</p>
          <span className="service-feature-tag">ALWAYS AVAILABLE</span>
        </div>
      </div>
    </div>
  );
};

export default ServiceFeatures;
