import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";
import Helmet from "../components/Helmet";
import Breadcrumb from "../components/Breadcrumb";
import emptyCart from '../assets/emptyCart.svg'
import { IoIosClose } from "react-icons/io";
import CartSummary from "../components/CartSummary";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const subtotal = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();

  const total = subtotal + useSelector((state) => state.cart.shippingCost);

  const handleShippingChange = (costType) => {
    if (costType === "free") {
      dispatch(cartActions.setShipping({ cost: 0, type: "Free" }));
    } else if (costType === "express") {
      dispatch(cartActions.setShipping({ cost: 15, type: "Express" }));
    } else if (costType === "pickup") {
      const pickupCost = subtotal * 0.21;
      dispatch(cartActions.setShipping({ cost: pickupCost, type: "Pick Up" }));
    }
  };

  const handleRemoveFromCart = (id) => {
    dispatch(cartActions.removeItem(id));
  };

  const handleQuantityChange = (id, quantity) => {
    if (quantity < 1) return;
    dispatch(cartActions.updateItemQuantity({ id, quantity }));
  };

  if (cartItems.length === 0) {
    return(
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col justify-center items-center my-14">
          <img className="md:w-[600px]" src={emptyCart} alt=""/>
          <h2 className="text-3xl font-semibold mt-10">Your cart is empty!</h2>
        </div>
      </div>
    )
  }

  return (
    <Helmet title="Cart">
      <Breadcrumb />
      <section className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-7 lg:justify-between mb-14">
          <div className="mb-14 mt-5 lg:w-3/5">
            <div className="flex justify-between font-semibold border-b border-black pb-3">
              <div className="md:w-[316px]">
                <h2>Product</h2>
              </div>
              <div className="hidden md:grid md:grid-cols-3 gap-14">
                <h2>Quantity</h2>
                <h2>Price</h2>
                <h2>Subtotal</h2>
              </div>
            </div>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b border-neutral-400 py-2"
              >
                <div className="flex gap-2 w-2/3 md:w-[316px]">
                  <img
                    className="w-14 h-14"
                    src={item.image}
                    alt={item.title}
                  />
                  <div className="flex flex-col gap-1">
                    <p className="text-sm">{item.title}</p>
                    <button
                      className="hidden md:flex items-center text-sm text-neutral-400"
                      onClick={() => handleRemoveFromCart(item.id)}
                    >
                      <IoIosClose size={22}/> Remove
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(item.id, Number(e.target.value))
                      }
                      className="md:hidden w-16 text-center border border-black"
                    />
                  </div>
                </div>
                <div className="md:grid md:grid-cols-3 gap-14">
                  <div>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(item.id, Number(e.target.value))
                      }
                      className="hidden md:block w-16 text-center border border-black"
                    />
                  </div>
                  <div>
                    <p>${item.price}</p>
                    <button className="float-right md:hidden" onClick={() => handleRemoveFromCart(item.id)}><IoIosClose size={25}/></button>
                  </div>
                  <div className="hidden md:block font-semibold">
                    <p>${item.price * item.quantity}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <CartSummary handleShippingChange={handleShippingChange} total={total} subtotal={subtotal}/>
        </div>
      </section>
    </Helmet>
  );
};

export default Cart;
