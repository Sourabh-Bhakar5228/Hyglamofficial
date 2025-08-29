import Collection from "../components/home/Collection";
import HomePage from "../components/home/HomePageSlider";
import JewelryRotator from "../components/home/JewelryRotator";
import JewelryLandingPage from "../components/home/LandingPage";
import ProductSlider from "../components/home/ProductSlider";
import Servicessection from "../components/home/Servicessection";
import SocialSlider from "../components/home/SocialSlider";

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
    </div>
  );
};

export default Home;
