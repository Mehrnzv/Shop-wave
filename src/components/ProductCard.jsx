import { Link } from "react-router-dom";
import RatingReview from "./RatingReview";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";
import { HiOutlineHeart } from "react-icons/hi2";
import { HiPlus } from "react-icons/hi";
import { addItemToWishlist } from "../store/wishlistSlice";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        title: item.title,
        price: item.price,
        image: item.image,
      })
    );
    toast.success("Product added to Cart successfully!");
  };

  const handleAddToWishlist = () => {
    dispatch(addItemToWishlist(item));
    toast.success("Product added to Wishlist successfully!");
  };

  return (
    <div className="mx-auto mb-3">
      <div className="w-auto md:w-[250px] lg:w-[280px] md:h-[320px] border-2 rounded-xl">
        <div className="relative flex pt-5 justify-center">
          <img
            src={item.image}
            alt={item.title}
            className="w-[180px] h-[180px]"
          />
          <button
            className="absolute top-1 right-2 bg-black text-white rounded-full p-1"
            onClick={handleAddToWishlist}
          >
            <HiOutlineHeart size={17} />
          </button>
          <button
            className="absolute top-9 right-2 bg-black text-white rounded-full p-1"
            onClick={addToCart}
          >
            <HiPlus size={17}/>
          </button>
        </div>
        <div className="px-3">
          <h3 className="mt-1 text-sm md:text-base font-semibold">
            <Link to={`/shop/${item.id}`}>{item.title.slice(0, 30)}...</Link>
          </h3>
          <p className="pt-2 font-semibold">${item.price}</p>
        </div>
        <div className="px-3 flex items-center">
          <RatingReview rating={item.rating.rate} />
          <span>({item.rating.count})</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
