import Breadcrumb from "../components/Breadcrumb";
import Helmet from "../components/Helmet";
import OrderSummary from "../components/OrderSummary";

const Checkout = () => {
  return (
    <Helmet title="Checkout">
      <Breadcrumb />
      <section className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between mb-14">
          <div className="lg:w-[643px] mb-6">
            <div className="border border-neutral-600 rounded-md p-5 mb-6">
              <h2 className="text-lg mb-3 font-bold">Contact Information</h2>
              <form className="flex flex-col gap-4">
                <div className="flex flex-col md:flex-row justify-between gap-1">
                  <div>
                    <label className="uppercase block text-sm mb-1 text-neutral-500 font-semibold">
                      first name
                    </label>
                    <input
                      className="w-full md:w-[286px] px-2 py-1 border rounded-md"
                      type="text"
                      placeholder="First name"
                    />
                  </div>
                  <div>
                    <label className="uppercase block text-sm mb-1 text-neutral-500 font-semibold">
                      last name
                    </label>
                    <input
                      className="w-full md:w-[286px] px-2 py-1 border rounded-md"
                      type="text"
                      placeholder="Last name"
                    />
                  </div>
                </div>
                <div>
                  <label className="uppercase block text-sm mb-1 text-neutral-500 font-semibold">
                    phone number
                  </label>
                  <input
                    className="w-full px-2 py-1 border rounded-md"
                    type="text"
                    placeholder="Phone number"
                  />
                </div>
                <div>
                  <label className="uppercase block text-sm mb-1 text-neutral-500 font-semibold">
                    email address
                  </label>
                  <input
                    className="w-full px-2 py-1 border rounded-md"
                    type="email"
                    placeholder="Email address"
                  />
                </div>
              </form>
            </div>

            <div className="border border-neutral-600 rounded-md p-5 mb-6 ">
              <h2 className="text-lg mb-3 font-bold">Shipping Address</h2>
              <form className="flex flex-col gap-4">
                <div>
                  <label className="uppercase block text-sm mb-1 text-neutral-500 font-semibold">
                    street address *
                  </label>
                  <input
                    className="w-full px-2 py-1 border rounded-md"
                    type="text"
                    placeholder="Street address"
                    required
                  />
                </div>
                <div>
                  <label className="uppercase block text-sm mb-1 text-neutral-500 font-semibold">
                    apartment, suite, unit etc. (optional)
                  </label>
                  <input
                    className="w-full px-2 py-1 border rounded-md"
                    type="text"
                    placeholder=""
                  />
                </div>
                <div className="flex flex-col md:flex-row justify-between gap-1">
                  <div>
                    <label className="uppercase block text-sm mb-1 text-neutral-500 font-semibold">
                      town/city
                    </label>
                    <input
                      className="w-full md:w-[286px] px-2 py-1 border rounded-md"
                      type="text"
                      placeholder="Town / City"
                    />
                  </div>
                  <div>
                    <label className="uppercase block text-sm mb-1 text-neutral-500 font-semibold">
                      zip code
                    </label>
                    <input
                      className=" w-full md:w-[286px] px-2 py-1 border rounded-md"
                      type="text"
                      placeholder="Zip Code"
                    />
                  </div>
                </div>
              </form>
            </div>
            <button className="w-full bg-[#ff4648] my-3 py-2 rounded-lg text-white font-semibold">Place Order</button>
          </div>

          <OrderSummary />
        </div>
      </section>
    </Helmet>
  );
};

export default Checkout;
