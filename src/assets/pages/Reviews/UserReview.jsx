// src/UserReview.js
import React, { useState } from 'react';
import './UserReview.css';

const UserReview = () => {
    const [reviews, setReviews] = useState([]);
    const [review, setReview] = useState("");
    const [hoverIndex, setHoverIndex] = useState(null);

    const handleReviewChange = (e) => {
        setReview(e.target.value);
    };

    const handleReviewSubmit = (e) => {
        e.preventDefault();
        setReviews([...reviews, review]);
        setReview("");
    };

    return (
        <div className="review-container">
            <h2 className='urh'>Spill Your Tea!</h2>
            <form onSubmit={handleReviewSubmit}>
                <textarea 
                    value={review}
                    onChange={handleReviewChange}
                    placeholder="Write your review here"
                    required
                />
                <button type="submit">Submit Review</button>
            </form>
            <div className="reviews">
                {reviews.map((review, index) => (
                    <div 
                        key={index} 
                        className={`review ${hoverIndex === index ? 'hover' : ''}`}
                        onMouseEnter={() => setHoverIndex(index)}
                        onMouseLeave={() => setHoverIndex(null)}
                    >
                        {review}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserReview;
