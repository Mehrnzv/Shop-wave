import signUp from "../assets/signup.svg";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import { toast } from "react-toastify";
import Helmet from "../components/Helmet";
import Loader from "../components/Loader";

const Signup = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (inputs.password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return;
    }
    await createUserWithEmailAndPassword(auth, inputs.email, inputs.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/login");
        setLoading(false);
      })
      .catch((error) => {
        toast.error("Something went wrong!");
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <Helmet title="Signup">
      <div className="container max-w-7xl mx-auto px-4">
        {loading ? (
          <Loader />
        ) : (
          <div className="flex flex-col md:flex-row items-center justify-between my-14">
            <img
              className="md:w-[400px] lg:w-[600px] mb-7"
              src={signUp}
              alt=""
            />
            <div className="w-full md:w-2/5">
              <h1 className="font-bold text-3xl">Sign up</h1>
              <p className="text-neutral-400 my-5">
                Already have an account?{" "}
                <Link className="text-[#ff4648] font-semibold" to="/login">
                  Sign in
                </Link>
              </p>
              <form onSubmit={handleSignup}>
                <div className="mb-4">
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={inputs.email}
                    onChange={handleChange}
                    className="border-b w-full p-2"
                    required
                  />
                </div>
                <div className="mb-4 relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    value={inputs.password}
                    onChange={handleChange}
                    className="border-b p-2 w-full"
                    required
                  />
                  <span
                    onClick={toggleShowPassword}
                    className="absolute right-3 top-3 cursor-pointer"
                  >
                    {showPassword ? (
                      <HiOutlineEyeOff size={23} />
                    ) : (
                      <HiOutlineEye size={23} />
                    )}
                  </span>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#ff4648] my-3 py-2 rounded-lg text-white font-semibold"
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </Helmet>
  );
};

export default Signup;
