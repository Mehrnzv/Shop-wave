import Helmet from "../components/Helmet";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Helmet title="404 Not Found">
      <section className="container max-w-7xl mx-auto px-4 flex flex-col justify-center items-center my-20">
        <h1 className="text-5xl md:text-7xl font-semibold mb-3">404 Not Found</h1>
        <p>Sorry, the page you are looking for doesn&#39;t exist.</p>
        <button className="bg-[#ff4648] mt-5 py-2 px-4 rounded-lg font-semibold text-white">
          <Link to="/">Back to home page</Link>
        </button>
      </section>
    </Helmet>
  );
};

export default NotFound;
