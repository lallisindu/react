import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Review from './Review'; 

const ProductPage = () => {
    const [reviews, setReviews] = useState([]);

    return (
        <div>
            <section>
                <h1>The product page</h1>
                <ul>
                    <li>
                        <Link
                            to={{
                                pathname: '/products/p1',
                                state: { imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png' }
                            }}
                        >
                            Album 1
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={{
                                pathname: '/products/p2',
                                state: { imageUrl: 'URL_FOR_ALBUM_2' }
                            }}
                        >
                            Album 2
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={{
                                pathname: '/products/p3',
                                state: { imageUrl: 'URL_FOR_ALBUM_3' }
                            }}
                        >
                            Album 3
                        </Link>
                    </li>
                </ul>
            </section>
            {/* Pass down setReviews to the Review component */}
            <Review reviews={reviews} setReviews={setReviews} />
        </div>
    );
}

export default ProductPage;
