import React from "react";
import ProductsList from "components/ProductsList";


const CategoriesList = ({categories}) =>{

    return(
        <ul className="categoriesList">
            {
                categories.map((category) =>(
                        <li key={category.id} className="cardCategories">
                            <h3>{category.label}</h3>
                            <ProductsList categoryId={category.id} />
                        </li>
                    )
                )
            }
        </ul>
    )

}

export default CategoriesList