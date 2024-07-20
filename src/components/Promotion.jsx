import { Link } from "react-router-dom";
import shoppingBag from "../assets/shopping-imtmphoto-GettyImages.jpg";

const Promotion = () => {
  return (
    <div className="flex flex-col w-full mt-14 md:flex-row">
      <div className="w-full md:w-1/2">
        <img className="h-96 object-cover" src={shoppingBag} />
      </div>
      <div className="bg-neutral-200 w-full md:w-1/2 h-96 flex flex-col justify-center pl-7">
        <h3 className="uppercase font-bold text-xl text-[#0055ff] pb-2">
          Sale up to 35% off
        </h3>
        <p className="text-3xl font-semibold pb-2">
          HUNDREDS of new lower prices!
        </p>
        <p className="pb-4">Hurry up!!!</p>
        <div>
          <button className="text-[#ff4648] text-lg border-b border-[#ff4648]">
            <Link to='/shop'>Shop Now &#x2192;</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
