import FAQSection from "../components/Faqs";
import HomePage from "../components/home/HomePageSlider";
import InspirationSection from "../components/home/Inspiration";
import ProductSlider from "../components/home/ProductSlider";
import Servicessection from "../components/home/Servicessection";
import SocialSlider from "../components/home/SocialSlider";
import TestimonialSlider from "../components/home/TestimonialSlider";
import productsData from "../data/allProducts.json";

const Home = () => {
  return (
    <div>
      <HomePage />
      <InspirationSection />
      <Servicessection />
      <ProductSlider products={productsData} />
      <FAQSection />
      <SocialSlider />
      <TestimonialSlider />
    </div>
  );
};

export default Home;