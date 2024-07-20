import RatingFilter from "./RatingFilter";

const Filters = ({
  categoryData,
  selectedCategory,
  handleCategoryChange,
  priceRange,
  onPriceRangeChange,
  selectedRating,
  handleRatingChange,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-2">
      <div className="w-full md:w-[212px]">
        <h3 className="font-semibold mb-2 uppercase text-neutral-400">
          Categories
        </h3>
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="outline-none border-2 p-2 rounded-lg w-full md:w-[212px]"
        >
          <option value="">All Categories</option>
          {categoryData.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="w-full">
        <h3 className="font-semibold mb-2 uppercase text-neutral-400">Price</h3>
        <select
          value={priceRange}
          onChange={onPriceRangeChange}
          className="outline-none border-2 p-2 rounded-lg w-full md:w-[212px]"
        >
          <option value="">All Prices</option>
          <option value="0-25">0 - $25</option>
          <option value="25-50">$25 - $50</option>
          <option value="50-100">$50 - $100</option>
          <option value="100-9999">$100+</option>
        </select>
      </div>

      <div className="w-full md:w-[212px]">
        <h3 className="font-semibold mb-2 uppercase text-neutral-400">
          Rating
        </h3>
        <RatingFilter
          selectedRating={selectedRating}
          handleRatingChange={handleRatingChange}
          ratingData={[5, 4, 3, 2, 1]}
        />
      </div>
    </div>
  );
};

export default Filters;
