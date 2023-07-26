import React from "react";

const ProductCard = ({product}) => {

    return (
        <li className="product-card">
            {product.label} ${product.price}
            <button className="button-edit">Editar</button>
        </li>
    )
}

export default ProductCard