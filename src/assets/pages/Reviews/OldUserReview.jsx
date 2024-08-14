// src/OldUserReview.js
import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import './OldUserReview.css';

const OldUserReview = () => {
    const [oldReviews, setOldReviews] = useState([]);
    const [hoverIndex, setHoverIndex] = useState(null);

    useEffect(() => {
        // Fetch old reviews from a server or local storage
        const fetchOldReviews = async () => {
            // Replace with actual fetch call
            const reviews = await new Promise((resolve) => 
                resolve(["Good Buddy To Save your expense", "Guardian (Angel) for my Money", "Good app "])
            );
            setOldReviews(reviews);
        };

        fetchOldReviews();
    }, []);

    return (
        <div className="old-review-container">
            <h2 className='oh2'>Old User Reviews</h2>
            <div className="old-reviews">
                {oldReviews.map((review, index) => (
                    <div 
                        key={index} 
                        className={`old-review ${hoverIndex === index ? 'hover' : ''}`}
                        onMouseEnter={() => setHoverIndex(index)}
                        onMouseLeave={() => setHoverIndex(null)}
                    >
                        {review}
                    </div>
                ))}
            </div>
            <Footer/>
        </div>
    );
};

export default OldUserReview;
