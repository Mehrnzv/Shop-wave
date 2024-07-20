import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import ProductCard from "../components/ProductCard";

const Categories = () => {
  const { category } = useParams();
  const { data } = useFetch(`/products/category/${category}`);

  return (
    <div className="container max-w-7xl mx-auto px-4 my-14">
      <div className="flex flex-col md:flex-row flex-wrap">
        {data?.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
