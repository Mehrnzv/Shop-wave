import { Link } from "react-router-dom";

const CartSummary = ({ handleShippingChange, total, subtotal }) => {
  return (
    <div className="w-full lg:w-72">
      <h3 className="text-lg font-semibold mb-2">Cart Summary</h3>
      <div className="mb-4">
        <label className="flex justify-between items-center mb-2 border border-black px-3 py-2">
          <div>
            <input
              type="radio"
              name="shipping"
              onChange={() => handleShippingChange("free")}
              className="mr-2"
              
            />
            Free shipping
          </div>
          <span>$0.00</span>
        </label>
        <label className="flex justify-between items-center mb-2 border border-black px-3 py-2">
          <div>
            <input
              type="radio"
              name="shipping"
              onChange={() => handleShippingChange("express")}
              className="mr-2"
            />
            Express shipping
          </div>
          <span>+$15.00</span>
        </label>
        <label className="flex justify-between items-center mb-2 border border-black px-3 py-2">
          <div>
            <input
              type="radio"
              name="shipping"
              onChange={() => handleShippingChange("pickup")}
              className="mr-2"
            />
            Pick Up
          </div>
          <span>%21.00</span>
        </label>
      </div>
      <div className="flex justify-between">
        <p>Subtotal</p>
        <span className="font-bold">${subtotal.toFixed(2)}</span>
      </div>
      <hr className="my-2" />
      <div className="flex justify-between">
        <p className="font-bold">Total</p>
        <span className="font-bold">${total.toFixed(2)}</span>
      </div>
      <button className="w-full bg-[#ff4648] my-3 py-2 rounded-lg font-semibold text-white">
        <Link to='/checkout'>Checkout</Link>
      </button>
    </div>
  );
};

export default CartSummary;
