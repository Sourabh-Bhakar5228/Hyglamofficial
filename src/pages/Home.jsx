import Collection from "../components/home/Collection";
import HomePage from "../components/home/HomePageSlider";
import JewelryRotator from "../components/home/JewelryRotator";
import JewelryLandingPage from "../components/home/LandingPage";
import ProductSlider from "../components/home/ProductSlider";
import Servicessection from "../components/home/Servicessection";
import SocialSlider from "../components/home/SocialSlider";
import TestimonialSlider from "../components/home/TestimonialSlider";

const Home = () => {
  return (
    <div>
      <HomePage />
      <Servicessection />
      <ProductSlider />
      <Collection />
      <JewelryLandingPage />
      <JewelryRotator />
      <SocialSlider />
      <TestimonialSlider />
    </div>
  );
};

export default Home;
