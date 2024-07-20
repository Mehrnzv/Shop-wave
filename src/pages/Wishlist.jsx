import { useSelector, useDispatch } from "react-redux";
import { removeItemFromWishlist } from "../store/wishlistSlice";
import emptyWishlist from "../assets/emptyWishlist.svg";
import { Link } from "react-router-dom";
import Helmet from "../components/Helmet";
import Breadcrumb from "../components/Breadcrumb";
import { FaCheckCircle } from "react-icons/fa";
import { HiPlusCircle } from "react-icons/hi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { cartActions } from "../store/cartSlice";
import { toast } from "react-toastify";

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);

  const handleRemoveFromWishlist = (id) => {
    dispatch(removeItemFromWishlist(id));
  };

  const handleAddToCart = (item) => {
    dispatch(cartActions.addItem(item));
    dispatch(removeItemFromWishlist(item.id));
    toast.success('Product moved to cart!')
  }

  if (wishlistItems.length === 0) {
    return (
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center my-14">
          <div className="">
            <img
              className="md:w-[400px] lg:w-[600px] mb-7"
              src={emptyWishlist}
              alt=""
            />
          </div>
          <div className="w-full md:w-2/5 flex flex-col">
            <h2 className="text-4xl font-semibold mb-2">
              Your Wishlist is empty!
            </h2>
            <p className="mb-1">Seems like you don&#39;t have wishes hear.</p>
            <button className="bg-[#ff4648] w-32 py-2 rounded-lg mt-3 text-white font-semibold">
              <Link to="/shop">Add</Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <Helmet title="Wishlist">
      <Breadcrumb />
      <section className="container max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-col lg:flex-row gap-7 lg:justify-between mb-14">
          <div className="mb-14 mt-5 w-full">
            <div className="flex justify-between font-semibold border-b border-black pb-3">
              <div className="md:w-[316px]">
                <h2>Product</h2>
              </div>
              <div className="hidden md:grid md:grid-cols-3 gap-14">
                <h2 className="w-[106px] text-center">Price</h2>
                <h2 className="w-[106px] text-center">Stock</h2>
                <h2 className="w-[106px] text-center">Action</h2>
              </div>
            </div>
            {wishlistItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b border-neutral-400 py-2"
              >
                <div className="w-2/3 md:w-[316px]">
                  <div className="flex items-center gap-2">
                    <button
                      className="hidden md:flex items-center text-sm text-neutral-400"
                      onClick={() => handleRemoveFromWishlist(item.id)}
                    >
                      <RiDeleteBin6Line color="#ff4648" size={21}/>
                    </button>
                    <img
                      className="w-14 h-14"
                      src={item.image}
                      alt={item.title}
                    />
                    <div>
                      <p>{item.title}</p>
                      <p className="flex items-center gap-1 md:hidden">
                        <FaCheckCircle color="#38CB89" />
                        In stock
                      </p>
                    </div>
                  </div>
                </div>
                <div className="md:grid md:grid-cols-3 gap-14">
                  <div>
                    <p className="text-center font-semibold">${item.price}</p>
                  </div>
                  <div className="hidden md:flex items-center justify-center gap-1">
                    <FaCheckCircle color="#38CB89" />
                    <p>In stock</p>
                  </div>
                  <div>
                    <button onClick={() => handleAddToCart(item)} className="bg-black text-white px-3 py-1 font-semibold rounded-lg hidden md:flex">
                      Add to cart
                    </button>
                    <div className="flex gap-1">
                      <button onClick={() => handleAddToCart(item)} className="float-right mt-1 md:hidden">
                        <HiPlusCircle co size={23} />
                      </button>
                      <button className="mt-1 md:hidden" onClick={handleRemoveFromWishlist}><RiDeleteBin6Line color="#ff4648" size={21}/></button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default Wishlist;
