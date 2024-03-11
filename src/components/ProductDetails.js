import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Review from './Review';

const ProductDetails = ({ setReviews }) => { // Receive setReviews as prop
    const params = useParams();
    const location = useLocation();
    const imageUrl = new URLSearchParams(location.search).get('imageUrl');
    const productId = params.productId;
    const reviews = [
        { id: 1, user: 'User1', rating: 4, comment: 'Great product!' },
        { id: 2, user: 'User2', rating: 5, comment: 'Amazing quality!' },
        // Add more reviews as needed
    ];

    return (
        <section>
            <h1>Product Details</h1>
            {/* Display the image if imageUrl is available */}
            {imageUrl && <img src={imageUrl} alt="Product" />}
            {/* Display the product ID */}
            <p>Product ID: {params.productId}</p>
            {/* Pass setReviews to the Review component */}
            <Review productId={productId} reviews={reviews} setReviews={setReviews} />
        </section>
    );
}

export default ProductDetails;
