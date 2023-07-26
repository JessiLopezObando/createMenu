import React, {useState} from "react";
import ProductForm from "components/ProductForm";

const ProductCard = ({product}) => {

    const [editState, setEditState] = useState(false)

    const clickEdit = () =>{
        setEditState(!editState)
    }

    return (
        <li className="product-card">
            {product.label} ${product.price}
            <button className="button-edit" onClick={clickEdit}>Editar</button>
            <div className="form-product-edit" >
                {editState && (
                    <ProductForm />
                )}
            </div>
        </li>
    )
}

export default ProductCard