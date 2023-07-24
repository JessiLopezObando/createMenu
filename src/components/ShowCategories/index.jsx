import React from "react";
import InputProducts from "../InputProducts";
import ShowProducts from "../ShowProducts";

const ShowCategories = ({categories, products, setProducts}) =>{

    return(
        <ul className="categoriesList">
            {
                categories.map((category, index) =>(
                        <li key={index} className="cardCategories">
                            <h3>{category.label}</h3>
                            <InputProducts
                            products={products}
                            setProducts={setProducts}/>
                        </li>
                    )
                )
            }
        </ul>
    )

}

export default ShowCategories