import FAQSection from "../components/Faqs";
import Collection from "../components/home/Collection";
import HomePage from "../components/home/HomePageSlider";
import InspirationSection from "../components/home/Inspiration";
import JewelryRotator from "../components/home/JewelryRotator";
import JewelryLandingPage from "../components/home/LandingPage";
import ProductSlider from "../components/home/ProductSlider";
import Servicessection from "../components/home/Servicessection";
import SocialSlider from "../components/home/SocialSlider";
import TestimonialSlider from "../components/home/TestimonialSlider";
import productsData from "../data/allProducts.json";

const Home = () => {
  return (
    <div>
      <HomePage />
      <Servicessection />
      <InspirationSection />
      <ProductSlider products={productsData} />
      <FAQSection />
      {/* <Collection /> */}
      <JewelryLandingPage />
      <JewelryRotator />
      <SocialSlider />
      <TestimonialSlider />
    </div>
  );
};

export default Home;
