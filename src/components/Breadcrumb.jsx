import { useLocation, Link } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className="container max-w-7xl mx-auto px-4 my-4 text-gray-500 font-semibold">
      <ul className="flex space-x-2">
        <li>
          <Link to="/" className="text-neutral-500">
            Home
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          return (
            <li key={to} className="flex items-center">
              <span className="mx-2">/</span>
              {isLast ? (
                <span className="text-gray-700">
                  {value.charAt(0).toUpperCase() + value.slice(1)}
                </span>
              ) : (
                <Link to={to} className="text-gray-700">
                  {value.charAt(0).toUpperCase() + value.slice(1)}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Breadcrumb;
