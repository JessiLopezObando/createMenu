import React, {useState} from "react";
import InputProducts from "../InputProducts";
import ShowProducts from "../ShowProducts";

const ShowCategories = ({categories}) =>{

    const [productsByCategory, setProductsByCategory] = useState({})

    return(
        <ul className="categoriesList">
            {
                categories.map((category) =>(
                        <li key={category.id} className="cardCategories">
                            <h3>{category.label}</h3>
                            <InputProducts
                                productsByCategory={productsByCategory}
                                setProductsByCategory={setProductsByCategory}
                                categoryId={category.id}
                            />
                            <ShowProducts productsByCategory={productsByCategory[category.id] || []} />
                        </li>
                    )
                )
            }
        </ul>
    )

}

export default ShowCategories