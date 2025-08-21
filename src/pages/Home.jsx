import Collection from "../components/home/Collection";
import HomePage from "../components/home/HomePageSlider";
import JewelryLandingPage from "../components/home/LandingPage";
import ProductSlider from "../components/home/ProductSlider";
import Servicessection from "../components/home/Servicessection";

const Home = () => {
  return (
    <div>
      <HomePage />
      <Servicessection />
      <ProductSlider />
      <Collection />
      <JewelryLandingPage />
    </div>
  );
};

export default Home;
