import ProductCard from "../components/ProductCard";

const RelatedItem = ({ currentProduct }) => {
  const related = currentProduct.filter(
    (item) =>
      item.category === currentProduct.category
  );

  return (
    <div>
      {related.map((item) => (
        <ProductCard key={item.id} item={related} />
      ))}
    </div>
  );
};

export default RelatedItem;
