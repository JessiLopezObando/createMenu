import React from "react";

const ProductCard = ({product}) => {

    return (
        <li className="product-card">
            {product.label} ${product.price}
        </li>
    )
}

export default ProductCard