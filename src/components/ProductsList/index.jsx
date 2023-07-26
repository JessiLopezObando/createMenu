import React from "react";
import ProductCard from "components/ProductCard";

const ProductsList = ({productsByCategory}) =>{

    return(
        <ul className="productsList">

                {
                    productsByCategory.map((product, index) =>(
                            <ProductCard key={index} product={product} />
                    ))
                }
        </ul>
    )
}

export default ProductsList