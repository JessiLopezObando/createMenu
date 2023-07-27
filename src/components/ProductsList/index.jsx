import React from "react";
import ProductCard from "components/ProductCard";

const ProductsList = ({productsByCategory}) =>{

    console.log(productsByCategory);

    return(
        <ul className="productsList">

                {
                    productsByCategory.map((product) =>(
                            <ProductCard key={product.id} product={product} />
                    ))
                }
        </ul>
    )
}

export default ProductsList