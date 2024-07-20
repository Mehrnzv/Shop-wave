import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import RatingReview from "../components/RatingReview";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { cartActions } from "../store/cartSlice";
import { HiOutlineHeart } from "react-icons/hi2";
import { HiOutlineMinusSmall, HiPlusSmall } from "react-icons/hi2";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import { addItemToWishlist } from "../store/wishlistSlice";
import { toast } from "react-toastify";

const ProductsDetails = () => {
  const [related, setRelated] = useState([]);
  const { id } = useParams();
  const { data } = useFetch(`/products/${id}`);

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const cartItem = cartItems.find((item) => item.id === data.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const handleAddToCart = () => {
    dispatch(cartActions.addItem(data));
  };

  const handleRemoveFromCart = () => {
    if (quantity > 0) {
      dispatch(cartActions.removeItem(data.id));
    }
  };

  const handleAddToWishlist = (item) => {
    dispatch(addItemToWishlist(item));
    toast.success("Product added to Wishlist successfully!");
  };

  useEffect(() => {
    if (data.category) {
      fetch(`https://fakestoreapi.com/products/category/${data.category}`)
        .then((res) => res.json())
        .then((relatedData) => setRelated(relatedData));
    }
  }, [data.category]);

  return (
    <section className="container max-w-7xl mx-auto px-4">
      <div className="flex flex-col justify-center gap-5 md:flex-row md:justify-between my-14">
        <div className="flex justify-between w-full md:w-1/2 h-[300px]">
          <div className="flex flex-col justify-between">
            <img className="w-[100px] h-[100px] md:w-[120px] md:h-[120px]" src={data.image}/>
            <img className="w-[100px] h-[100px] md:w-[120px] md:h-[120px]" src={data.image}/>
            <img className="w-[100px] h-[100px] md:w-[120px] md:h-[120px]" src={data.image}/>
          </div>
          <img className="w-2/3" src={data.image} alt="" />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl font-semibold">{data.title}</h1>
          {data.rating ? (
            <RatingReview rating={data.rating.rate} count={data.rating.count} />
          ) : (
            <div>No rating available</div>
          )}
          <p className="text-lg text-neutral-600 mb-2">{data.description}</p>
          <p className="text-3xl">${data.price}</p>
          <hr className="my-3 bg-black" />
          <div className="flex items-center justify-between">
            <div className="bg-neutral-300 flex items-center justify-between w-[122px] px-3 py-1 rounded-lg">
              <button className="text-2xl" onClick={handleRemoveFromCart}>
                <HiOutlineMinusSmall size={20} />
              </button>
              <span className="text-xl">{quantity}</span>
              <button className="text-2xl" onClick={handleAddToCart}>
                <HiPlusSmall size={20} />
              </button>
            </div>
            <button onClick={() => handleAddToWishlist(data)} className="bg-[#ff4648] w-44 py-2 rounded-lg text-lg text-white flex items-center justify-center gap-1">
              <HiOutlineHeart size={21} /> Wishlist
            </button>
          </div>
          <div className="mt-3">
            <button
              className="bg-black text-white text-lg w-full py-2 rounded-lg"
            >
              <Link to='/cart'>Buy Now</Link>
            </button>
          </div>
          <hr className="my-4 bg-black" />
          <div className="flex flex-row gap-12">
            <p className="uppercase text-neutral-500">Category</p>
            <span>{data.category}</span>
          </div>
        </div>
      </div>

      <div className="mt-8 mb-14">
        <h2 className="text-2xl font-semibold mb-4">Related Products</h2>
        <div className="flex flex-wrap gap-4">
          {related
            .filter((item) => item.id !== data.id)
            .map(related => (
              <ProductCard key={related.id} item={related} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsDetails;
