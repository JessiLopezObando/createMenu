import React, {useState} from "react";
import ProductForm from "../ProductForm";
import ProductsList from "../ProductsList";

const CategoriesList = ({categories}) =>{

    const [productsByCategory, setProductsByCategory] = useState({})

    return(
        <ul className="categoriesList">
            {
                categories.map((category) =>(
                        <li key={category.id} className="cardCategories">
                            <h3>{category.label}</h3>
                            <ProductForm
                                productsByCategory={productsByCategory}
                                setProductsByCategory={setProductsByCategory}
                                categoryId={category.id}
                            />
                            <ProductsList productsByCategory={productsByCategory[category.id] || []} />
                        </li>
                    )
                )
            }
        </ul>
    )

}

export default CategoriesList