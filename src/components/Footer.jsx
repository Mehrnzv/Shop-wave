import { Link } from "react-router-dom";
import { GrLocation } from "react-icons/gr";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import {
  FaInstagram,
  FaXTwitter,
  FaFacebookF,
  FaPinterestP,
} from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="container max-w-7xl mx-auto py-10 px-5">
        <div className="flex justify-center items-center gap-10 mb-7">
          <div>
            <Link>
              <FaFacebookF size={22} color="#FFFF" />
            </Link>
          </div>
          <div>
            <Link>
              <FaPinterestP size={22} color="#FFFF" />
            </Link>
          </div>
          <div>
            <Link>
              <FaXTwitter size={22} color="#FFFF" />
            </Link>
          </div>
          <div>
            <Link>
              <FaInstagram size={22} color="#FFFF" />
            </Link>
          </div>
          <div>
            <Link>
              <FaTelegramPlane size={22} color="#FFFF" />
            </Link>
          </div>
        </div>
        <div className="grid justify-center items-start gap-6 md:grid-rows-2 md:grid-cols-[350px_300px] lg:flex lg:justify-between">
          <div>
            <h3 className="text-white text-2xl">
              Shop <span className="text-[#efb326]">Wave</span>
            </h3>
            <p className="text-sm w-[250px] pt-2 pb-3 text-white opacity-70">
              Explore, shop, repeat again.
            </p>
            <div className="flex flex-col gap-1 text-white">
              <div className="flex items-center gap-1">
                <GrLocation size={20} color="#efb326" />
                <p>NYC, United Sates</p>
              </div>

              <div className="flex items-center gap-1">
                <LuPhoneCall size={20} color="#efb326" />
                <p>+123456789</p>
              </div>

              <div className="flex items-center gap-1">
                <MdOutlineEmail size={20} color="#efb326" />
                <p>email@example.com</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium pb-3 uppercase text-[#B4B0BE]">
              Help
            </h4>
            <ul className="flex flex-col gap-1 text-white">
              <li>
                <Link to='/contact'>Contact us</Link>
              </li>
              <li>
                <Link>FAQ</Link>
              </li>
              <li>
                <Link>Shipping & Returns</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium pb-3 uppercase text-[#B4B0BE]">
              My account
            </h4>
            <ul className="flex flex-col gap-1 text-white">
              <li>
                <Link>Adresses</Link>
              </li>
              <li>
                <Link>Order Status</Link>
              </li>
              <li>
                <Link to='/wishlist'>Wishlist</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium pb-3 uppercase text-[#B4B0BE]">
              Costumer Care
            </h4>
            <ul className="flex flex-col gap-1 text-white">
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <Link to="/">Blog</Link>
              </li>
            </ul>
          </div>

          <div className="text-white w-[289px]">
            <h4 className="text-lg font-medium uppercase pb-3">
              Signup for emails
            </h4>
            <div>
              <p className="pb-2">
                Stay informed, Subscribe to our newsletter now!
              </p>
              <form>
                <input
                  className="px-2 py-1 rounded-sm w-full text-black"
                  type="email"
                  placeholder="Email"
                />
                <button className="block pt-1">Subscribe &#8594;</button>
              </form>
            </div>
          </div>
        </div>

        <hr className="bg-[#B4B0BE] mt-7" />

        <div className="text-[#B4B0BE] flex flex-col justify-center items-center mt-7 md:flex-row md:justify-between">
          <p className="mb-5 md:mb-0">
            <Link to='https://github.com/Mehrnzv'>Mehrnzv</Link> &#169; {new Date().getFullYear()} All rights reserved.
          </p>
          <div>
            <ul className="flex flex-row justify-between gap-6">
              <li>
                <Link>Privacy Policy</Link>
              </li>
              <li>
                <Link>Terms and Conditions</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
