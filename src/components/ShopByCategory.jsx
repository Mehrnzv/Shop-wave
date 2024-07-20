import { Link } from "react-router-dom";
import { categoriesData } from "../constants/categoriesData";

const ShopByCategory = () => {
  return (
    <div className="container max-w-7xl mx-auto px-4 my-14">
      <h2 className="text-3xl text-center font-semibold mb-7">
        Shop by Categories
      </h2>
      <div className="grid gap-5 grid-cols-2 md:flex md:flex-wrap md:justify-between">
        {categoriesData.map((category) => (
          <div key={category.id} className="flex flex-col items-center">
            <img
              className="w-40 h-40 object-cover mb-2 bg-gray-200 rounded-full"
              src={category.image}
            />
            <Link to={`/categories/${category.path}`}>
              <p className="text-xl font-semibold">{category.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopByCategory;
