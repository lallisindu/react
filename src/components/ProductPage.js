import React from "react";
import { Link } from "react-router-dom";

const ProductPage = () => {
    return (
        <section>
            <h1>The product page</h1>
            <ul>
                <li>
                    <Link
                        to="/products/p1?imageUrl=https://prasadyash2411.github.io/ecom-website/img/Album%201.png"
                    >
                        Album 1
                    </Link>
                </li>
                <li>
                    <Link
                        to="/products/p2?imageUrl=URL_FOR_ALBUM_2"
                    >
                        Album 2
                    </Link>
                </li>
                <li>
                    <Link
                        to="/products/p3?imageUrl=URL_FOR_ALBUM_3"
                    >
                        Album 3
                    </Link>
                </li>
            </ul>
        </section>
    );
}

export default ProductPage;
