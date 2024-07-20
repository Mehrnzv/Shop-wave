import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";
import { toast } from "react-toastify";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import loginImg from "../assets/signin.svg";
import Helmet from "../components/Helmet";
import Loader from "../components/Loader";

const Login = () => {
  const [inputs, setInputs] = useState({
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        inputs.email,
        inputs.password
      );
      const user = userCredential.user;
      console.log(user);
      setLoading(false);
      toast.success("Successfully logged in");
      navigate("/");
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
      console.log(error);
    }
  };

  return (
    <Helmet title="Login">
      <div className="container max-w-7xl mx-auto px-4">
        {loading ? (
          <Loader />
        ) : (
          <div className="flex flex-col md:flex-row items-center justify-between my-14">
            <img
              className="md:w-[400px] lg:w-[600px] mb-7"
              src={loginImg}
              alt=""
            />
            <div className="w-full md:w-2/5">
              <h1 className="font-bold text-3xl">Sign In</h1>
              <p className="text-neutral-400 my-5">
                Don&#39;t have an account yet?{" "}
                <Link className="text-[#ff4648] font-semibold" to="/signup">
                  Sign up
                </Link>
              </p>
              <form onSubmit={handleSubmit}>
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
                  Sign in
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </Helmet>
  );
};

export default Login;
