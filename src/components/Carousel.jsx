import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { people } from "../constants/aboutData";
import { Link } from "react-router-dom";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="slider-container">
      {people.map((person, index) => (
        <div key={index} className="p-4">
          <div className="flex flex-col">
            <img src={person.image} alt={person.name} className="mb-4" />
            <h3 className="text-2xl font-semibold">{person.name}</h3>
            <p className="text-md text-gray-500">{person.role}</p>
            <div className="flex items-center gap-2 mt-2">
              <Link to="/">
                <RiLinkedinBoxLine size={20} />
              </Link>
              <Link to="/">
                <FaInstagram size={20} />
              </Link>
              <Link to="/">
                <FaXTwitter size={20} />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
