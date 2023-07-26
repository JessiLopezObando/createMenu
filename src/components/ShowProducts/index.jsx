import React from "react";

const ShowProducts = ({productsByCategory}) =>{

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

export default ShowProducts