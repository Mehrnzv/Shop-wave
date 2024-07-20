import { FaStar } from "react-icons/fa6";

const RatingReview = ({ rating }) => {
  return (
    <div className="flex items-center gap-1 py-2">
      {[1, 2, 3, 4, 5].map((star, index) => (
        <FaStar
          key={index}
          style={{
            cursor: "pointer",
            color: rating >= star ? "#FFAD33" : "gray",
          }}
        /> 
      ))} 
    </div>
  );
};

export default RatingReview;
