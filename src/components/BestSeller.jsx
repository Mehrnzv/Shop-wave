import useFetch from "../hooks/useFetch";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

const BestSeller = () => {
  const { data } = useFetch('/products')
  const [bestSeller, setBestSeller] = useState([])

  useEffect(() => {
    if(data) {
      setBestSeller(getBestSeller(data))
    }
  }, [data])

  const getBestSeller = (arr) => {
    const bestSeller = arr.filter((product) => product.rating.rate > 4.6)
    return bestSeller
  }
  return (
    <div className="container max-w-7xl mx-auto px-4 flex flex-col mt-14">
    <h2 className="text-3xl text-center font-semibold mb-7">Best Seller</h2>
    <div className="grid grid-cols-2 grid-rows-auto gap-3 md:flex md:flex-wrap">
      {bestSeller.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  </div>
  )
}

export default BestSeller
