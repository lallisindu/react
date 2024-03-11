import React, { useState } from 'react';
import './Review.css'; 

const Review = ({ imageUrl, productId }) => {
    const [reviews, setReviews] = useState([]);

    const [userReview, setUserReview] = useState({
        user: '',
        rating: 0,
        comment: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserReview({ ...userReview, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newReview = {
            id: reviews.length + 1,
            ...userReview
        };
        setReviews([...reviews, newReview]);
        setUserReview({
            user: '',
            rating: 0,
            comment: ''
        });
    };

    return (
        <div className="review-container">
            <h2 className="review-heading">Reviews</h2>
            {reviews.map((review) => (
                <div className="review-item" key={review.id}>
                    <p><span className="review-label">User:</span> {review.user}</p>
                    <p><span className="review-label">Rating:</span> {review.rating}</p>
                    <p><span className="review-label">Comment:</span> {review.comment}</p>
                    <hr />
                </div>
            ))}
            <h3 className="review-heading">Add Your Review</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="user" className="review-label">Your Name:</label>
                    <input
                        type="text"
                        id="user"
                        name="user"
                        value={userReview.user}
                        onChange={handleInputChange}
                        className="review-input"
                    />
                </div>
                <div>
                    <label htmlFor="rating" className="review-label">Rating:</label>
                    <input
                        type="number"
                        id="rating"
                        name="rating"
                        value={userReview.rating}
                        onChange={handleInputChange}
                        className="review-input"
                    />
                </div>
                <div>
                    <label htmlFor="comment" className="review-label">Comment:</label>
                    <textarea
                        id="comment"
                        name="comment"
                        value={userReview.comment}
                        onChange={handleInputChange}
                        className="review-textarea"
                    />
                </div>
                <button type="submit" className="review-button">Submit Review</button>
            </form>
        </div>
    );
};

export default Review;
