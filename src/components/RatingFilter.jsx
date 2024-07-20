import { useState, useRef, useEffect } from "react";
import RatingReview from "./RatingReview";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const RatingFilter = ({ selectedRating, handleRatingChange, ratingData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleRatingSelect = (rating) => {
    handleRatingChange({ target: { value: rating } });
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative md:w-[212px]" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="border-2 p-2 rounded-lg w-full flex items-center justify-between"
      >
        {selectedRating > 0 ? (
          <RatingReview rating={selectedRating} />
        ) : (
          "Filter by Rating"
        )}
        <MdOutlineKeyboardArrowDown size={22}/>
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-2 w-full bg-white border rounded-lg shadow-lg">
          <div
            className="cursor-pointer p-2 hover:bg-gray-200"
            onClick={() => handleRatingSelect(0)}
          >
            All Ratings
          </div>
          {ratingData.map((rating) => (
            <div
              key={rating}
              className="cursor-pointer px-2 hover:bg-gray-200 flex items-center"
              onClick={() => handleRatingSelect(rating)}
            >
              <RatingReview rating={rating} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RatingFilter;
