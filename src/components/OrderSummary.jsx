import { useSelector } from "react-redux";

const OrderSummary = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const subtotal = useSelector((state) => state.cart.totalAmount);

  const shippingCost = useSelector((state) => state.cart.shippingCost);
  const shippingType = useSelector((state) => state.cart.shippingType);

  const total = subtotal + shippingCost;

  return (
    <div className="lg:w-[413px] border border-neutral-600 rounded-md p-5">
      <h2 className="text-lg mb-3 font-bold">Order Summary</h2>
      {cartItems.map((item) => (
        <div
          className="flex justify-between border-b border-neutral-400 py-6"
          key={item.id}
        >
          <div className="flex items-center gap-2">
            <img className="w-14 h-14" src={item.image} alt="" />
            <div>
              <p className="font-semibold w-48 mb-1">{item.title}</p>
              <p className="text-sm text-neutral-500">
                Quantity : {item.quantity}
              </p>
            </div>
          </div>
          <div>
            <p className="font-bold">${item.price * item.quantity}</p>
          </div>
        </div>
      ))}
      <div className="my-6 h-[52px] flex flex-row gap-5 items-center">
        <input className="border px-3 h-[52px] w-full rounded-md" placeholder="Coupon Code"/>
        <button className="bg-[#ff4648] my-3 px-5 h-[52px] rounded-lg text-white font-semibold">Apply</button>
      </div>
      <div className="flex justify-between border-b pb-3">
        <p>Shipping</p>
        <p className="font-semibold">{shippingType}</p>
      </div>
      <div className="flex justify-between mt-3 border-b pb-3">
        <p>Subtotal</p>
        <p className="font-semibold">${subtotal}</p>
      </div>
      <div className="flex justify-between mt-3 border-b pb-3">
        <p className="font-bold">Total</p>
        <p className="font-semibold">${total}</p>
      </div>
    </div>
  );
};

export default OrderSummary;
