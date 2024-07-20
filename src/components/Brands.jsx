import { brandsData } from "../constants/brandsData";

const Brands = () => {
  return (
    <div className="container max-w-7xl mx-auto px-4 mb-3">
      <h2 className="text-3xl text-center font-semibold mb-7">Trending Brands</h2>
      <div className="flex flex-wrap justify-between">
        {brandsData.map((brand) => (
          <div key={brand.id} className="">
            <img src={brand.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
