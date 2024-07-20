import { useState, useEffect } from "react";
import { navItems } from "../constants/navItems";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import {
  HiOutlineShoppingBag,
  HiOutlineUserCircle,
  HiOutlineHeart,
} from "react-icons/hi2";
import { useSelector } from "react-redux";
import useAuth from "../hooks/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "../firebase.config";
import { toast } from "react-toastify";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleMobileMenu = () => setMobileMenu(!mobileMenu);
  const handleCloseMenu = () => setMobileMenu(false);
  const { currentUser } = useAuth();

  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
  const wishlistCount = wishlistItems.length;

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      const heroHeight = heroSection.offsetHeight;
      const scrollPosition = window.scrollY;

      if (scrollPosition > heroHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getBackgroundColor = () => {
    switch (location.pathname) {
      case "/":
        return "bg-[#0055ff]";
      default:
        return "bg-white";
    }
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logged out");
        setDropdown(false);
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <nav
      className={`sticky top-0 z-50 py-3 ${getBackgroundColor()} ${
        scrolled ? "bg-white text-black shadow-lg" : "bg-[#0055ff]"
      }`}
    >
      <div className="container max-w-7xl px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <span className="text-xl tracking-tight font-medium text-black">
              Shop <span className="text-[#efb326]">Wave</span>
            </span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li className="text-lg" key={index}>
                <NavLink
                  className={"[&.active]:text-neutral-400"}
                  to={item.path}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-start">
            <div className="flex  gap-5">
              <span className="relative">
                <Link to="/cart">
                  <HiOutlineShoppingBag size={25} />
                  {totalQuantity > 0 && (
                    <span className="absolute bottom-1/2 -right-3 bg-[#efb326] w-5 h-5 rounded-full text-center text-sm font-sans">
                      {totalQuantity}
                    </span>
                  )}
                </Link>
              </span>
              <span className="relative">
                <Link to="/wishlist">
                  <HiOutlineHeart size={25} />
                  {wishlistCount > 0 && (
                    <span className="absolute bottom-1/2 -right-3 bg-[#efb326] w-5 h-5 rounded-full text-center text-sm font-sans">
                      {wishlistCount}
                    </span>
                  )}
                </Link>
              </span>
              <div className="relative">
                <button onClick={() => setDropdown(!dropdown)}>
                  <HiOutlineUserCircle size={25} />
                </button>
                {dropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-50">
                    {currentUser ? (
                      <>
                        <button
                          onClick={handleLogout}
                          className="hover:bg-gray-200 w-full px-4 py-2 text-left rounded-md text-lg"
                        >
                          Logout
                        </button>
                      </>
                    ) : (
                      <div className="flex flex-col">
                        <Link
                          to="/signup"
                          onClick={() => setDropdown(false)}
                          className="px-4 py-2 hover:bg-gray-200 text-lg"
                        >
                          Signup
                        </Link>
                        <Link
                          to="/login"
                          onClick={() => setDropdown(false)}
                          className="px-4 py-2 hover:bg-gray-200 text-lg"
                        >
                          Login
                        </Link>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button className="" onClick={handleMobileMenu}>
              {mobileMenu ? <MdClose size={25} /> : <FiMenu size={25} />}
            </button>
          </div>
        </div>
        {mobileMenu && (
          <div className="fixed right-0 top-13 z-20 bg-white w-full h-full p-5 flex flex-col justify-start items-start lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4 text-lg">
                  <NavLink onClick={handleCloseMenu} to={item.path}>
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="absolute bottom-20 right-0 px-5 w-full flex flex-col">
              <div className="flex items-center justify-between w-full border-b pb-2">
                <Link
                  className="text-lg text-neutral-500"
                  to="/cart"
                  onClick={handleCloseMenu}
                >
                  Cart
                </Link>
                <div className="flex items-center gap-1">
                  <HiOutlineShoppingBag size={23} />
                  <span className="bg-black text-white w-5 h-5 text-sm rounded-full text-center">
                    {totalQuantity}
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between w-full border-b pb-2 mt-2">
                <Link
                  className="text-lg text-neutral-500"
                  to="/wishlist"
                  onClick={handleCloseMenu}
                >
                  Wishlist
                </Link>
                <div className="flex items-center gap-1">
                  <HiOutlineHeart size={23} />
                  <span className="bg-black text-white w-5 h-5 text-sm rounded-full text-center">
                    {wishlistCount}
                  </span>
                </div>
              </div>
              {currentUser ? (
                <button
                  className="bg-black text-white py-2 text-lg font-semibold rounded-md mt-7"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              ) : (
                <Link
                  className="bg-black text-white py-2 text-lg font-semibold rounded-md mt-7 text-center"
                  to="/login"
                  onClick={handleCloseMenu}
                >
                  Sign in
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
