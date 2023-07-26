import React from "react";

const ProductsList = ({productsByCategory}) =>{

    return(
        <ul className="productsList">

                {
                    productsByCategory.map((product, index) =>(
                            <li key={index} className="cardProduct">
                                {product.label} ${product.price}
                            </li>
                    ))
                }
        </ul>
    )
}

export default ProductsList