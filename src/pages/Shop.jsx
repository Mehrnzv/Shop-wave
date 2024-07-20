import { useState } from "react";
import ProductCard from "../components/ProductCard";
import useFetch from "../hooks/useFetch";
import Filters from "../components/Filters";
import Helmet from "../components/Helmet";
import Breadcrumb from "../components/Breadcrumb";

const categoryData = [
  "electronics",
  "men's clothing",
  "women's clothing",
  "jewelery",
];

const Shop = () => {
  const { data } = useFetch("/products");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [selectedRating, setSelectedRating] = useState(0);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handlePriceRangeChange = (e) => {
    setPriceRange(e.target.value);
  };
  const handleRatingChange = (e) => {
    setSelectedRating(e.target.value);
  };

  const filterByCategory = (product) => {
    return selectedCategory ? product.category === selectedCategory : true;
  };

  const filterByPrice = (product) => {
    if (!priceRange) return true;
    const [min, max] = priceRange.split("-").map(Number);
    return product.price >= min && product.price <= max;
  };

  const filterByRating = (product) => {
    return selectedRating ? product.rating.rate >= selectedRating : true;
  };

  const filteredProducts = data.filter(
    (product) =>
      filterByCategory(product) &&
      filterByPrice(product) &&
      filterByRating(product)
  );

  return (
    <Helmet title="Shop">
      <Breadcrumb />
      <section className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col justify-center md:justify-between mt-5 mb-14">
          <Filters
            categoryData={categoryData}
            selectedCategory={selectedCategory}
            handleCategoryChange={handleCategoryChange}
            priceRange={priceRange}
            onPriceRangeChange={handlePriceRangeChange}
            rating={selectedRating}
            handleRatingChange={handleRatingChange}
          />
          <div className="grid gap-3 grid-cols-2 grid-rows-auto md:grid-cols-3 lg:grid-cols-4 mt-7">
            {filteredProducts.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default Shop;
