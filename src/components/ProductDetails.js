import React ,{useState}from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Review from './Review';


const ProductDetails = () => {
    const [reviews, setReviews] = useState([]);
    const params = useParams();
    const location = useLocation();
    const imageUrl = new URLSearchParams(location.search).get('imageUrl');

    return (
        <section>
            <h1>Product Details</h1>
            {/* Display the image if imageUrl is available */}
            {imageUrl && <img src={imageUrl} alt="Product" />}
            {/* Display the product ID */}
            <p>Product ID: {params.productId}</p>
            <Review reviews={reviews} setReviews={setReviews} />
        </section>
        
    );
}

export default ProductDetails;
