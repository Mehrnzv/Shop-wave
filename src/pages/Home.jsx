import BestSeller from "../components/BestSeller";
import Brands from "../components/Brands";
import ShopByCategory from "../components/ShopByCategory";
import HeroSection from "../components/HeroSection";
import JewelryIntro from "../components/JewelryIntro";
import NewArrivals from "../components/NewArrivals";
import Promotion from "../components/Promotion";

const Home = () => {
  return (
    <>
      <HeroSection />
      <NewArrivals />
      <ShopByCategory />
      <Promotion />
      <BestSeller />
      <JewelryIntro />
      <Brands />
    </>
  );
};

export default Home;
