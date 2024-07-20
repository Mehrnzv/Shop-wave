import useFetch from "../hooks/useFetch";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

const NewArrivals = () => {
  const { data } = useFetch("/products");
  const [randomItems, setRandomItems] = useState([]);

  useEffect(() => {
    if (data) {
      setRandomItems(getRandomItems(data, 4));
    }
  }, [data]);

  const getRandomItems = (arr, num) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };

  return (
    <div className="container max-w-7xl mx-auto px-4 flex flex-col mt-14">
      <h2 className="text-3xl text-center font-semibold mt-5 mb-8">New Arrivals</h2>
      <div className="grid grid-cols-2 grid-rows-auto gap-3 md:flex md:flex-wrap">
        {randomItems.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
