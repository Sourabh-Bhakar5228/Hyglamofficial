import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollRestoration from "../components/ScrollRestoration";

// Pages
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import Contact from "../pages/Contact";
import Layout from "../layout/Layout";
import Gallery from "../pages/Gallery";
import Faqs from "../pages/Faqs";

// Extra Pages
import Cart from "../pages/Cart";
import Wishlist from "../pages/Wishlist";
import ProductDetails from "../components/ProductDetails";
import PrivacyPolicy from "../components/services/PrivacyPolicy";
import TermsOfService from "../components/services/TermsOfService";
import CookiePolicy from "../components/services/CookiePolicy";
import SocialFeed from "../components/SocailMedia";

export default function Routing() {
  return (
    <BrowserRouter>
      <ScrollRestoration />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/faq" element={<Faqs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/cookies" element={<CookiePolicy />} />
          <Route path="/social-media" element={<SocialFeed />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
