// ReviewBoxWithRating.js
import React from "react";
// import Rating <fieldset></fieldset>rom "react-rating";
import './Review.css';
import UserReview from "./UserReview";
import OldUserReview from "./OldUserReview";
import Navbar from "../../components/Navbar/Navbar";
// import Footer from "../../components/Footer/Footer"
const Review = () => {
  // const [rating, setRating] = useState(0);
  // const [comment, setComment] = useState("");

  // const handleRatingChange = (rate) => {
  //   setRating(rate);
  // };

  // const handleCommentChange = (event) => {
  //   setComment(event.target.value);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Handle the review submission logic here (e.g., send to server)
  //   console.log("Rating:", rating);
  //   console.log("Comment:", comment);
  // };

  return (
    // <div className="review-box">
    //   <h2>Leave a Review</h2>
    //   <form onSubmit={handleSubmit}>
    //     <div>
    //       <label>Rating:</label>
    //       <Rating
    //         initialRating={rating}
    //         onChange={handleRatingChange}
    //         emptySymbol="fa fa-star-o fa-2x"
    //         fullSymbol="fa fa-star fa-2x"
    //       />
    //     </div>
    //     <div>
    //       <label>Comment:</label>
    //       <textarea value={comment} onChange={handleCommentChange}></textarea>
    //     </div>
    //     <button type="submit">Submit</button>
    //   </form>
   
    <div className="reviewcont bg_color_5">
       <div><Navbar/></div>
      
      <UserReview/>
      <OldUserReview/>
      {/* <Footer/> */}
    </div>
  );
};

export default Review;
