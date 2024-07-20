import { Link } from "react-router-dom";
import heroBg from "../assets/shopping-illustration.png";
import Services from "./Services";

const HeroSection = () => {
  return (
    <section className="bg-[#0055ff] h-full" id="hero">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between pt-7 mb-10 md:mb-0">
          <div>
            <h1 className="text-4xl lg:text-6xl tracking-wide font-semibold mb-4 mt-5">
              Explore, shop, repeat again.
            </h1>
            <p className="text-lg text-neutral-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              nostrum hic laborum suscipit! Laudantium voluptatibus illum nulla.
            </p>
            <div>
              <button className="bg-[#ff4648] text-white mt-5 px-5 py-2 text-lg rounded-lg">
                <Link to='/shop'>Shop Now</Link>
              </button>
            </div>
          </div>
          <div className="lg:w-full">
            <img className="w-full" src={heroBg} alt="" />
          </div>
        </div>
        <h2 className="text-lg font-semibold pb-2">Our Service :</h2>
        <Services />
      </div>
    </section>
  );
};

export default HeroSection;
