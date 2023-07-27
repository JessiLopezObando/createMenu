import React from "react";
import ProductCard from "components/ProductCard";

const ProductsList = ({productsByCategory, setProductsByCategory, categoryId}) =>{

    console.log(productsByCategory);
    console.log(categoryId);

    return(
        <ul className="productsList">

                {
                    productsByCategory.map((product) =>(
                            <ProductCard key={product.id} product={product} setProductsByCategory={setProductsByCategory} categoryId={categoryId} />
                    ))
                }
        </ul>
    )
}

export default ProductsList